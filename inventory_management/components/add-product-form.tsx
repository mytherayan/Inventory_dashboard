"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle, X } from 'lucide-react'

interface Variant {
  size: string
  color: string
  price: string
  quantity: string
}

interface AddProductFormProps {
  onSuccess: () => void
}

export function AddProductForm({ onSuccess }: AddProductFormProps) {
  const [sku, setSku] = useState("")
  const [variants, setVariants] = useState<Variant[]>([{ size: "", color: "", price: "", quantity: "" }])
  const [images, setImages] = useState<File[]>([])

  const generateSKU = () => {
    const randomSKU = Math.random().toString(36).substring(2, 10).toUpperCase()
    setSku(randomSKU)
  }

  const handleAddVariant = () => {
    setVariants([...variants, { size: "", color: "", price: "", quantity: "" }])
  }

  const handleRemoveVariant = (index: number) => {
    const newVariants = variants.filter((_, i) => i !== index)
    setVariants(newVariants)
  }

  const handleVariantChange = (index: number, field: keyof Variant, value: string) => {
    const newVariants = [...variants]
    newVariants[index][field] = value
    setVariants(newVariants)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setImages(prevImages => [...prevImages, ...files].slice(0, 5))
  }

  const handleRemoveImage = (index: number) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add logic to save the product with variants and images
    console.log("Product added with variants and images")
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
      <div className="space-y-2">
        <Label htmlFor="name">Product Name</Label>
        <Input id="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="sku">SKU</Label>
        <div className="flex space-x-2">
          <Input id="sku" value={sku} onChange={(e) => setSku(e.target.value)} required />
          <Button type="button" onClick={generateSKU}>Generate SKU</Button>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select>
          <SelectTrigger id="category">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="clothing">Clothing</SelectItem>
            <SelectItem value="books">Books</SelectItem>
            <SelectItem value="home">Home & Garden</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-4">
        <Label>Variants</Label>
        {variants.map((variant, index) => (
          <div key={index} className="flex items-end space-x-2">
            <div className="flex-1 space-y-2">
              <Input 
                placeholder="Size" 
                value={variant.size} 
                onChange={(e) => handleVariantChange(index, 'size', e.target.value)}
              />
            </div>
            <div className="flex-1 space-y-2">
              <Input 
                placeholder="Color" 
                value={variant.color} 
                onChange={(e) => handleVariantChange(index, 'color', e.target.value)}
              />
            </div>
            <div className="flex-1 space-y-2">
              <Input 
                placeholder="Price" 
                type="number" 
                step="0.01" 
                value={variant.price} 
                onChange={(e) => handleVariantChange(index, 'price', e.target.value)}
              />
            </div>
            <div className="flex-1 space-y-2">
              <Input 
                placeholder="Quantity" 
                type="number" 
                value={variant.quantity} 
                onChange={(e) => handleVariantChange(index, 'quantity', e.target.value)}
              />
            </div>
            <Button type="button" variant="ghost" onClick={() => handleRemoveVariant(index)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button type="button" onClick={handleAddVariant} variant="outline">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Variant
        </Button>
      </div>
      <div className="space-y-2">
        <Label htmlFor="images">Product Images (Max 5)</Label>
        <Input 
          id="images" 
          type="file" 
          accept="image/*" 
          multiple 
          onChange={handleImageUpload}
          disabled={images.length >= 5}
        />
        <div className="grid grid-cols-5 gap-2 mt-2">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img 
                src={URL.createObjectURL(image)} 
                alt={`Product image ${index + 1}`} 
                className="w-full h-20 object-cover rounded"
              />
              <Button 
                type="button" 
                variant="destructive" 
                size="icon" 
                className="absolute top-0 right-0 h-6 w-6" 
                onClick={() => handleRemoveImage(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Button type="submit" className="w-full">Add Product</Button>
    </form>
  )
}

