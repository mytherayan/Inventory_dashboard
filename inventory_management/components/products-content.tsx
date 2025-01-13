"use client"

import { useState } from "react"
import { ProductsTable } from "@/components/products-table"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { AddProductForm } from "@/components/add-product-form"
import { Plus } from 'lucide-react'

export function ProductsContent() {
  const [isAddProductOpen, setIsAddProductOpen] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        <Sheet open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
          <SheetTrigger asChild>
            <Button>
             Add Product <Plus className="ml-2 h-4 w-4" /> 
            </Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-[600px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Add New Product</SheetTitle>
            </SheetHeader>
            <AddProductForm onSuccess={() => setIsAddProductOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
      <ProductsTable />
    </div>
  )
}

