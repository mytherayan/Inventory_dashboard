"use client"

import { useState } from "react"
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

// Filter component
export function Sidebar({ onFilterChange }: { onFilterChange: (filters: any) => void }) {
  const [filters, setFilters] = useState({
    search: "",
    tags: "",
    sku: "",
    condition: "",
    category: "",
    location: "",
    inventory: "available",
  })

  const handleFilterChange = (key: string, value: string) => {
    const updatedFilters = { ...filters, [key]: value }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  return (
    <div className="w-80 border-r bg-muted/50 p-6">
      <div className="space-y-6">
        <div>
          <Input
            type="search"
            placeholder="Search by name"
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <Label htmlFor="tags">Tags</Label>
          <Input
            id="tags"
            placeholder="Filter by tag"
            value={filters.tags}
            onChange={(e) => handleFilterChange("tags", e.target.value)}
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="sku">SKU</Label>
          <Input
            id="sku"
            placeholder="Filter by SKU"
            value={filters.sku}
            onChange={(e) => handleFilterChange("sku", e.target.value)}
            className="mt-1.5"
          />
        </div>
        <div>
          <Label>Condition</Label>
          <Select
            value={filters.condition}
            onValueChange={(value) => handleFilterChange("condition", value)}
          >
            <SelectTrigger className="mt-1.5 w-full">
              <SelectValue placeholder="All conditions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All conditions</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="used">Used</SelectItem>
              <SelectItem value="refurbished">Refurbished</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Category</Label>
          <Select
            value={filters.category}
            onValueChange={(value) => handleFilterChange("category", value)}
          >
            <SelectTrigger className="mt-1.5 w-full">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All categories</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
              <SelectItem value="storage">Storage</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Locations</Label>
          <Select
            value={filters.location}
            onValueChange={(value) => handleFilterChange("location", value)}
          >
            <SelectTrigger className="mt-1.5 w-full">
              <SelectValue placeholder="All locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All locations</SelectItem>
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
            value={filters.inventory}
            onValueChange={(value) => handleFilterChange("inventory", value)}
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
              <Label htmlFor="onhand">On Hand</Label>
            </div>
          </RadioGroup>
        </div>
        <Button variant="outline" onClick={() => handleFilterChange("reset", "")}>
          Reset Filters
        </Button>
      </div>
    </div>
  )
}



























// "use client"

// import { useState } from "react"
// // import { Search } from 'lucide-react'

// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Button } from "@/components/ui/button"

// export function Sidebar() {
//   const [inventory, setInventory] = useState<"available" | "reserved" | "onhand">("available")

//   return (
//     <div className="w-80 border-r bg-muted/50 p-6">
//       <div className="space-y-6">
//         <div>
//           <div className="space-y-4">
//             <div>
//               <Input
//                 type="search"
//                 placeholder="Search by name"
//                 className="w-full"
//               />
//             </div>
//             <div>
//               <Label htmlFor="tags">Tags</Label>
//               <Input
//                 id="tags"
//                 placeholder="Filter by tag"
//                 className="mt-1.5"
//               />
//             </div>
//             <div>
//               <Label htmlFor="sku">SKU</Label>
//               <Input
//                 id="sku"
//                 placeholder="Filter by SKU"
//                 className="mt-1.5"
//               />
//             </div>
//             <div>
//               <Label>Conditions</Label>
//               <Select>
//                 <SelectTrigger className="mt-1.5 w-full">
//                   <SelectValue placeholder="All conditions" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="new">New</SelectItem>
//                   <SelectItem value="used">Used</SelectItem>
//                   <SelectItem value="refurbished">Refurbished</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div>
//               <Label>Category</Label>
//               <Select>
//                 <SelectTrigger className="mt-1.5 w-full">
//                   <SelectValue placeholder="All category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="electronics">Electronics</SelectItem>
//                   <SelectItem value="accessories">Accessories</SelectItem>
//                   <SelectItem value="storage">Storage</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div>
//               <Label>Locations</Label>
//               <Select>
//                 <SelectTrigger className="mt-1.5 w-full">
//                   <SelectValue placeholder="All locations" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="warehouse1">Warehouse 1</SelectItem>
//                   <SelectItem value="warehouse2">Warehouse 2</SelectItem>
//                   <SelectItem value="warehouse3">Warehouse 3</SelectItem>
//                   <SelectItem value="warehouse4">Warehouse 4</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div>
//               <Label>Inventory</Label>
//               <RadioGroup
//                 value={inventory}
//                 onValueChange={(value) => setInventory(value as typeof inventory)}
//                 className="mt-1.5 space-y-1"
//               >
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="available" id="available" />
//                   <Label htmlFor="available">Available</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="reserved" id="reserved" />
//                   <Label htmlFor="reserved">Reserved</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="onhand" id="onhand" />
//                   <Label htmlFor="onhand">On hand</Label>
//                 </div>
//               </RadioGroup>
//             </div>
//           </div>
//         </div>
//         <div className="flex space-x-2">
//           <Button variant="outline" className="flex-1">Clear filter</Button>
//           <Button className="flex-1">Apply filter</Button>
//         </div>
//       </div>
//     </div>
//   )
// }

