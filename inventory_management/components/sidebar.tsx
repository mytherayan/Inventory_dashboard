"use client"

import { useState } from "react"
// import { Search } from 'lucide-react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const [inventory, setInventory] = useState<"available" | "reserved" | "onhand">("available")

  return (
    <div className="w-80 border-r bg-muted/50 p-6">
      <div className="space-y-6">
        <div>
          <div className="space-y-4">
            <div>
              <Input
                type="search"
                placeholder="Search by name"
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                placeholder="Filter by tag"
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="sku">SKU</Label>
              <Input
                id="sku"
                placeholder="Filter by SKU"
                className="mt-1.5"
              />
            </div>
            <div>
              <Label>Conditions</Label>
              <Select>
                <SelectTrigger className="mt-1.5 w-full">
                  <SelectValue placeholder="All conditions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="used">Used</SelectItem>
                  <SelectItem value="refurbished">Refurbished</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Category</Label>
              <Select>
                <SelectTrigger className="mt-1.5 w-full">
                  <SelectValue placeholder="All category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="storage">Storage</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Locations</Label>
              <Select>
                <SelectTrigger className="mt-1.5 w-full">
                  <SelectValue placeholder="All locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="warehouse1">Warehouse 1</SelectItem>
                  <SelectItem value="warehouse2">Warehouse 2</SelectItem>
                  <SelectItem value="warehouse3">Warehouse 3</SelectItem>
                  <SelectItem value="warehouse4">Warehouse 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Inventory</Label>
              <RadioGroup
                value={inventory}
                onValueChange={(value) => setInventory(value as typeof inventory)}
                className="mt-1.5 space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="available" id="available" />
                  <Label htmlFor="available">Available</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="reserved" id="reserved" />
                  <Label htmlFor="reserved">Reserved</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="onhand" id="onhand" />
                  <Label htmlFor="onhand">On hand</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex-1">Clear filter</Button>
          <Button className="flex-1">Apply filter</Button>
        </div>
      </div>
    </div>
  )
}

