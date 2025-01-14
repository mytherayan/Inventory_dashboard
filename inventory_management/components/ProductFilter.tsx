// import { useState, useEffect } from 'react'
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import React from 'react';

// interface ProductFilterProps {
//   onFilterChange: (filters: Record<string, string>) => void;
// }

// export function ProductFilter({ onFilterChange }: ProductFilterProps) {
//   const [filters, setFilters] = useState({
//     name: '',
//     sku: '',
//     condition: '',
//     location: '',
//   })

//   const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFilters(prev => ({ ...prev, [name]: value }))
//   }

//   useEffect(() => {
//     onFilterChange(filters)
//   }, [filters, onFilterChange])

//   return (
//     <div className="space-y-4">
//       <h2 className="text-lg font-semibold">Filters</h2>
//       <div>
//         <Label htmlFor="name">Name</Label>
//         <Input
//           id="name"
//           name="name"
//           value={filters.name}
//           onChange={handleFilterChange}
//           placeholder="Filter by name"
//         />
//       </div>
//       <div>
//         <Label htmlFor="sku">SKU</Label>
//         <Input
//           id="sku"
//           name="sku"
//           value={filters.sku}
//           onChange={handleFilterChange}
//           placeholder="Filter by SKU"
//         />
//       </div>
//       <div>
//         <Label htmlFor="condition">Condition</Label>
//         <Input
//           id="condition"
//           name="condition"
//           value={filters.condition}
//           onChange={handleFilterChange}
//           placeholder="Filter by condition"
//         />
//       </div>
//       <div>
//         <Label htmlFor="location">Location</Label>
//         <Input
//           id="location"
//           name="location"
//           value={filters.location}
//           onChange={handleFilterChange}
//           placeholder="Filter by location"
//         />
//       </div>
//     </div>
//   )
// }


import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import React from 'react'

interface ProductFilterProps {
  onFilterChange: (filters: Record<string, string | number>) => void;
}

export function ProductFilter({ onFilterChange }: ProductFilterProps) {
  const [filters, setFilters] = useState({
    name: '',
    sku: '',
    condition: '',
    location: '',
    minPrice: 0,
    maxPrice: 500000,
  })

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const handlePriceChange = (values: number[]) => {
    setFilters(prev => ({ ...prev, minPrice: values[0], maxPrice: values[1] }))
  }

  const handlePriceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const numValue = Number(value)
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 500000) {
      setFilters(prev => ({ ...prev, [name]: numValue }))
    }
  }

  useEffect(() => {
    onFilterChange(filters)
  }, [filters, onFilterChange])

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Filters</h2>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={filters.name}
          onChange={handleFilterChange}
          placeholder="Filter by name"
        />
      </div>
      <div>
        <Label htmlFor="sku">SKU</Label>
        <Input
          id="sku"
          name="sku"
          value={filters.sku}
          onChange={handleFilterChange}
          placeholder="Filter by SKU"
        />
      </div>
      <div>
        <Label htmlFor="condition">Condition</Label>
        <Input
          id="condition"
          name="condition"
          value={filters.condition}
          onChange={handleFilterChange}
          placeholder="Filter by condition"
        />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          placeholder="Filter by location"
        />
      </div>
      <div>
        <Label htmlFor="price-range">Price Range</Label>
        <div className="flex items-center space-x-2">
          <Input
            type="number"
            id="minPrice"
            name="minPrice"
            value={filters.minPrice}
            onChange={handlePriceInputChange}
            className="w-24"
            min={0}
            max={500000}
          />
          {/* <Slider
            id="price-range"
            min={0}
            max={500000}
            step={1000}
            value={[filters.minPrice, filters.maxPrice]}
            onValueChange={handlePriceChange}
            className="flex-1"
          /> */}
          <Input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handlePriceInputChange}
            className="w-24"
            min={0}
            max={500000}
          />
        </div>
      </div>
    </div>
  )
}






// import { useState } from 'react'
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// export function ProductFilter({ onFilterChange }) {
//   const [filters, setFilters] = useState({
//     name: '',
//     sku: '',
//     condition: '',
//     location: '',
//   })

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target
//     setFilters(prev => ({ ...prev, [name]: value }))
//     onFilterChange({ ...filters, [name]: value })
//   }

//   return (
//     <div className="space-y-4">
//       <h2 className="text-lg font-semibold">Filters</h2>
//       <div>
//         <Label htmlFor="name">Name</Label>
//         <Input
//           id="name"
//           name="name"
//           value={filters.name}
//           onChange={handleFilterChange}
//           placeholder="Filter by name"
//         />
//       </div>
//       <div>
//         <Label htmlFor="sku">SKU</Label>
//         <Input
//           id="sku"
//           name="sku"
//           value={filters.sku}
//           onChange={handleFilterChange}
//           placeholder="Filter by SKU"
//         />
//       </div>
//       <div>
//         <Label htmlFor="condition">Condition</Label>
//         <Input
//           id="condition"
//           name="condition"
//           value={filters.condition}
//           onChange={handleFilterChange}
//           placeholder="Filter by condition"
//         />
//       </div>
//       <div>
//         <Label htmlFor="location">Location</Label>
//         <Input
//           id="location"
//           name="location"
//           value={filters.location}
//           onChange={handleFilterChange}
//           placeholder="Filter by location"
//         />
//       </div>
//     </div>
//   )
// }

