// "use client"

// import { useState, useEffect } from "react"
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table"
// import { ArrowUpDown, ChevronDown, Download, MoreHorizontal, Upload } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"

// // Static data (original data)
// const data = [
//   {
//     id: "1",
//     name: "128GB SD card",
//     sku: "0003156",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 3546,
//     reserved: 3354,
//     onHand: 3546,
//     price: 1000.13,
//     modified: "03/13/2017",
//   },
//   {
//     id: "2",
//     name: "64GB USB Flash Drive",
//     sku: "0003157",
//     condition: "New",
//     location: "Warehouse 2",
//     available: 2498,
//     reserved: 2100,
//     onHand: 2498,
//     price: 500.79,
//     modified: "04/20/2018",
//   },
//   {
//     id: "3",
//     name: "Wireless Mouse",
//     sku: "0003158",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 1250,
//     reserved: 850,
//     onHand: 1250,
//     price: 1500.99,
//     modified: "11/03/2019",
//   },
//   {
//     id: "4",
//     name: "Bluetooth Headphones",
//     sku: "0003159",
//     condition: "New",
//     location: "Warehouse 3",
//     available: 789,
//     reserved: 500,
//     onHand: 789,
//     price: 2900.99,
//     modified: "02/15/2020",
//   },
//   {
//     id: "5",
//     name: "4K HDMI Cable",
//     sku: "0003160",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 4300,
//     reserved: 3000,
//     onHand: 4300,
//     price: 1200.50,
//     modified: "06/22/2021",
//   },
//   {
//     id: "6",
//     name: "Mechanical Keyboard",
//     sku: "0003161",
//     condition: "New",
//     location: "Warehouse 2",
//     available: 1800,
//     reserved: 1000,
//     onHand: 1800,
//     price: 5500.99,
//     modified: "09/13/2020",
//   },
//   {
//     id: "7",
//     name: "Gaming Mousepad",
//     sku: "0003162",
//     condition: "New",
//     location: "Warehouse 3",
//     available: 1400,
//     reserved: 900,
//     onHand: 1400,
//     price: 2200.99,
//     modified: "01/05/2022",
//   },
//   {
//     id: "8",
//     name: "Laptop Stand",
//     sku: "0003163",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 2200,
//     reserved: 1500,
//     onHand: 2200,
//     price: 1800.75,
//     modified: "04/17/2021",
//   }
// ];

// export type Product = typeof data[0]

// export const columns: ColumnDef<Product>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={table.getIsAllPageRowsSelected()}
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "name",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Name
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//     cell: ({ row }) => <div>{row.getValue("name")}</div>,
//   },
//   {
//     accessorKey: "sku",
//     header: "SKU",
//     cell: ({ row }) => <div>{row.getValue("sku")}</div>,
//   },
//   {
//     accessorKey: "condition",
//     header: "Condition",
//     cell: ({ row }) => <div>{row.getValue("condition")}</div>,
//   },
//   {
//     accessorKey: "location",
//     header: "Location",
//     cell: ({ row }) => <div>{row.getValue("location")}</div>,
//   },
//   {
//     accessorKey: "available",
//     header: "Available",
//     cell: ({ row }) => <div>{row.getValue("available")}</div>,
//   },
//   {
//     accessorKey: "reserved",
//     header: "Reserved",
//     cell: ({ row }) => <div>{row.getValue("reserved")}</div>,
//   },
//   {
//     accessorKey: "onHand",
//     header: "On Hand",
//     cell: ({ row }) => <div>{row.getValue("onHand")}</div>,
//   },
//   {
//     accessorKey: "price",
//     header: "Price",
//     cell: ({ row }) => <div>₹{row.getValue("price")}</div>,
//   },
//   {
//     accessorKey: "modified",
//     header: "Modified",
//     cell: ({ row }) => <div>{row.getValue("modified")}</div>,
//   },
//   {
//     id: "actions",
//     cell: ({ }) => {
//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem>Edit product</DropdownMenuItem>
//             <DropdownMenuItem>View details</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem className="text-destructive">
//               Delete product
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },
// ]

// export function ProductsTable() {
//   const [sorting, setSorting] = useState<SortingState>([])
//   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
//   const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
//   const [rowSelection, setRowSelection] = useState({})
//   const [mergedData, setMergedData] = useState(data) // Merged data state

//   useEffect(() => {
//     const fetchApiData = async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products")
//         const apiData = await response.json()

//         // Map API data to match the format of your original data
//         const formattedData = apiData.map((item: any) => ({
//           id: item.id.toString(),
//           name: item.title,
//           sku: item.id.toString(),
//           condition: "New", // Assuming all products are new
//           location: "Warehouse 4", // Placeholder location
//           available: 1000, // Placeholder availability
//           reserved: 0, // Placeholder reserved quantity
//           onHand: 1000, // Placeholder on-hand quantity
//           price: (Math.round(Number(item.price) * 84 * 100) / 100).toFixed(2),
//           modified: new Date().toLocaleDateString(), // Current date for modified
//         }))

//         // Combine the static data with the API data
//         setMergedData((prevData) => [...prevData, ...formattedData])
//       } catch (error) {
//         console.error("Error fetching API data:", error)
//       }
//     }

//     fetchApiData()
//   }, [])

//   const table = useReactTable({
//     data: mergedData, // Use the merged data state
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   })

//   return (
//     <div className="space-y-4">
//       <div className="flex items-center justify-between">
//         <div className="flex flex-1 items-center space-x-2">
//           <Button variant="outline" className="ml-auto">
//             Add to warehouse
//             <ChevronDown className="ml-2 h-4 w-4" />
//           </Button>
//           <Button variant="outline">Delete</Button>
//         </div>
//         <div className="flex items-center space-x-2">
//           <Button variant="outline">
//             Export
//             <Download className="ml-2 h-4 w-4" />
//           </Button>
//           <Button variant="outline">
//             Import from CSV
//             <Upload className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   return (
//                     <TableHead key={header.id}>
//                       {header.isPlaceholder
//                         ? null
//                         : flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )}
//                     </TableHead>
//                   )
//                 })}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center"
//                 >
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//       <div className="flex items-center justify-between">
//         <div className="text-sm text-muted-foreground">
//           {table.getFilteredSelectedRowModel().rows.length} of{" "}
//           {table.getFilteredRowModel().rows.length} row(s) selected.
//         </div>
//         <div className="space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }






// "use client"

// import { useState, useEffect, useMemo } from "react"
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table"
// import { ArrowUpDown, ChevronDown, Download, MoreHorizontal, Upload } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { ProductFilter } from "./ProductFilter"

// // Static data (original data)
// const data = [
//   {
//     id: "1",
//     name: "128GB SD card",
//     sku: "0003156",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 3546,
//     reserved: 3354,
//     onHand: 3546,
//     price: 1000.13,
//     modified: "03/13/2017",
//   },
//   {
//     id: "2",
//     name: "64GB USB Flash Drive",
//     sku: "0003157",
//     condition: "New",
//     location: "Warehouse 2",
//     available: 2498,
//     reserved: 2100,
//     onHand: 2498,
//     price: 500.79,
//     modified: "04/20/2018",
//   },
//   {
//     id: "3",
//     name: "Wireless Mouse",
//     sku: "0003158",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 1250,
//     reserved: 850,
//     onHand: 1250,
//     price: 1500.99,
//     modified: "11/03/2019",
//   },
//   {
//     id: "4",
//     name: "Bluetooth Headphones",
//     sku: "0003159",
//     condition: "New",
//     location: "Warehouse 3",
//     available: 789,
//     reserved: 500,
//     onHand: 789,
//     price: 2900.99,
//     modified: "02/15/2020",
//   },
//   {
//     id: "5",
//     name: "4K HDMI Cable",
//     sku: "0003160",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 4300,
//     reserved: 3000,
//     onHand: 4300,
//     price: 1200.50,
//     modified: "06/22/2021",
//   },
//   {
//     id: "6",
//     name: "Mechanical Keyboard",
//     sku: "0003161",
//     condition: "New",
//     location: "Warehouse 2",
//     available: 1800,
//     reserved: 1000,
//     onHand: 1800,
//     price: 5500.99,
//     modified: "09/13/2020",
//   },
//   {
//     id: "7",
//     name: "Gaming Mousepad",
//     sku: "0003162",
//     condition: "New",
//     location: "Warehouse 3",
//     available: 1400,
//     reserved: 900,
//     onHand: 1400,
//     price: 2200.99,
//     modified: "01/05/2022",
//   },
//   {
//     id: "8",
//     name: "Laptop Stand",
//     sku: "0003163",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 2200,
//     reserved: 1500,
//     onHand: 2200,
//     price: 1800.75,
//     modified: "04/17/2021",
//   }
// ];

// export type Product = typeof data[0]

// export const columns: ColumnDef<Product>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <div className="px-1">
//         <Checkbox
//           checked={table.getIsAllPageRowsSelected()}
//           onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//           aria-label="Select all"
//         />
//       </div>
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "name",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Name
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//     cell: ({ row }) => <div>{row.getValue("name")}</div>,
//   },
//   {
//     accessorKey: "sku",
//     header: "SKU",
//     cell: ({ row }) => <div>{row.getValue("sku")}</div>,
//   },
//   {
//     accessorKey: "condition",
//     header: "Condition",
//     cell: ({ row }) => <div>{row.getValue("condition")}</div>,
//   },
//   {
//     accessorKey: "location",
//     header: "Location",
//     cell: ({ row }) => <div>{row.getValue("location")}</div>,
//   },
//   {
//     accessorKey: "available",
//     header: "Available",
//     cell: ({ row }) => <div>{row.getValue("available")}</div>,
//   },
//   {
//     accessorKey: "reserved",
//     header: "Reserved",
//     cell: ({ row }) => <div>{row.getValue("reserved")}</div>,
//   },
//   {
//     accessorKey: "onHand",
//     header: "On Hand",
//     cell: ({ row }) => <div>{row.getValue("onHand")}</div>,
//   },
//   {
//     accessorKey: "price",
//     header: "Price",
//     cell: ({ row }) => <div>₹{row.getValue("price")}</div>,
//   },
//   {
//     accessorKey: "modified",
//     header: "Modified",
//     cell: ({ row }) => <div>{row.getValue("modified")}</div>,
//   },
//   {
//     id: "actions",
//     cell: ({ row }) => {
//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.getValue("id"))}>Copy product ID</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View customer</DropdownMenuItem>
//             <DropdownMenuItem>View payment details</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },
// ]

// export function ProductsTable() {
//   const [sorting, setSorting] = useState<SortingState>([])
//   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
//   const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
//   const [rowSelection, setRowSelection] = useState({})
//   const [globalFilter, setGlobalFilter] = useState<Record<string, string>>({})

//   const [mergedData, setMergedData] = useState<Product[]>(data)

//   useEffect(() => {
//     const fetchApiData = async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products")
//         const apiData = await response.json()

//         const formattedData = apiData.map((item: any) => ({
//           id: item.id.toString(),
//           name: item.title,
//           sku: item.id.toString(),
//           condition: "New",
//           location: "Warehouse 4",
//           available: 1000,
//           reserved: 0,
//           onHand: 1000,
//           price: (Math.round(Number(item.price) * 84 * 100) / 100).toFixed(2),
//           modified: new Date().toLocaleDateString(),
//         }))

//         setMergedData((prevData) => [...prevData, ...formattedData])
//       } catch (error) {
//         console.error("Error fetching API data:", error)
//       }
//     }

//     fetchApiData()
//   }, [])

//   const filteredData = useMemo(() => {
//     return mergedData.filter((item) => {
//       return Object.entries(globalFilter).every(([key, value]) => {
//         return item[key as keyof Product]
//           .toString()
//           .toLowerCase()
//           .includes(value.toLowerCase())
//       })
//     })
//   }, [mergedData, globalFilter])

//   const table = useReactTable({
//     data: filteredData,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   })

//   const handleFilterChange = (filters: Record<string, string>) => {
//     setGlobalFilter(filters)
//   }

//   return (
//     <div className="flex">
//       <div className="w-1/4 pr-4">
//         <ProductFilter onFilterChange={handleFilterChange} />
//       </div>
//       <div className="w-3/4 space-y-4">
//         <div className="flex items-center justify-between">
//           <div className="flex flex-1 items-center space-x-2">
//             <Button variant="outline" className="ml-auto">
//               Add to warehouse
//               <ChevronDown className="ml-2 h-4 w-4" />
//             </Button>
//             <Button variant="outline">Delete</Button>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Button variant="outline">
//               Export
//               <Download className="ml-2 h-4 w-4" />
//             </Button>
//             <Button variant="outline">
//               Import from CSV
//               <Upload className="ml-2 h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//         <div className="rounded-md border">
//           <Table>
//             <TableHeader>
//               {table.getHeaderGroups().map((headerGroup) => (
//                 <TableRow key={headerGroup.id}>
//                   {headerGroup.headers.map((header) => {
//                     return (
//                       <TableHead key={header.id}>
//                         {header.isPlaceholder
//                           ? null
//                           : flexRender(
//                               header.column.columnDef.header,
//                               header.getContext()
//                             )}
//                       </TableHead>
//                     )
//                   })}
//                 </TableRow>
//               ))}
//             </TableHeader>
//             <TableBody>
//               {table.getRowModel().rows?.length ? (
//                 table.getRowModel().rows.map((row) => (
//                   <TableRow
//                     key={row.id}
//                     data-state={row.getIsSelected() && "selected"}
//                   >
//                     {row.getVisibleCells().map((cell) => (
//                       <TableCell key={cell.id}>
//                         {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={columns.length} className="h-24 text-center">
//                     No results.
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>
//         <div className="flex items-center justify-between">
//           <div className="flex-1 text-sm text-muted-foreground">
//             {table.getFilteredSelectedRowModel().rows.length} of{" "}
//             {table.getFilteredRowModel().rows.length} row(s) selected.
//           </div>
//           <div className="space-x-2">
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => table.previousPage()}
//               disabled={!table.getCanPreviousPage()}
//             >
//               Previous
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => table.nextPage()}
//               disabled={!table.getCanNextPage()}
//             >
//               Next
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }







// "use client"

// import { useState, useEffect, useMemo } from "react"
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table"
// import { ArrowUpDown, ChevronDown, Download, MoreHorizontal, Upload } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { ProductFilter } from "./ProductFilter"
// import * as XLSX from 'xlsx';

// // Static data (original data)
// const data = [
//   {
//     id: "1",
//     name: "128GB SD card",
//     sku: "0003156",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 3546,
//     reserved: 3354,
//     onHand: 3546,
//     price: 1000.13,
//     modified: "03/13/2017",
//   },
//   {
//     id: "2",
//     name: "64GB USB Flash Drive",
//     sku: "0003157",
//     condition: "New",
//     location: "Warehouse 2",
//     available: 2498,
//     reserved: 2100,
//     onHand: 2498,
//     price: 500.79,
//     modified: "04/20/2018",
//   },
//   {
//     id: "3",
//     name: "Wireless Mouse",
//     sku: "0003158",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 1250,
//     reserved: 850,
//     onHand: 1250,
//     price: 1500.99,
//     modified: "11/03/2019",
//   },
//   {
//     id: "4",
//     name: "Bluetooth Headphones",
//     sku: "0003159",
//     condition: "New",
//     location: "Warehouse 3",
//     available: 789,
//     reserved: 500,
//     onHand: 789,
//     price: 2900.99,
//     modified: "02/15/2020",
//   },
//   {
//     id: "5",
//     name: "4K HDMI Cable",
//     sku: "0003160",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 4300,
//     reserved: 3000,
//     onHand: 4300,
//     price: 1200.50,
//     modified: "06/22/2021",
//   },
//   {
//     id: "6",
//     name: "Mechanical Keyboard",
//     sku: "0003161",
//     condition: "New",
//     location: "Warehouse 2",
//     available: 1800,
//     reserved: 1000,
//     onHand: 1800,
//     price: 5500.99,
//     modified: "09/13/2020",
//   },
//   {
//     id: "7",
//     name: "Gaming Mousepad",
//     sku: "0003162",
//     condition: "New",
//     location: "Warehouse 3",
//     available: 1400,
//     reserved: 900,
//     onHand: 1400,
//     price: 2200.99,
//     modified: "01/05/2022",
//   },
//   {
//     id: "8",
//     name: "Laptop Stand",
//     sku: "0003163",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 2200,
//     reserved: 1500,
//     onHand: 2200,
//     price: 1800.75,
//     modified: "04/17/2021",
//   }
// ];

// export type Product = typeof data[0]

// export const columns: ColumnDef<Product>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <div className="px-1">
//         <Checkbox
//           checked={table.getIsAllPageRowsSelected()}
//           onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//           aria-label="Select all"
//         />
//       </div>
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "name",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         Name
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//   },
//   {
//     accessorKey: "sku",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         SKU
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//   },
//   {
//     accessorKey: "condition",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         Condition
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//   },
//   {
//     accessorKey: "location",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         Location
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//   },
//   {
//     accessorKey: "available",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         Available
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//   },
//   {
//     accessorKey: "reserved",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         Reserved
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//   },
//   {
//     accessorKey: "onHand",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         On Hand
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//   },
//   {
//     accessorKey: "price",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         Price
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//     cell: ({ row }) => <div>₹{row.getValue("price")}</div>,
//   },
//   {
//     accessorKey: "modified",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         Modified
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//   },
//   {
//     id: "actions",
//     cell: ({ row }) => {
//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.getValue("id"))}>Copy product ID</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View customer</DropdownMenuItem>
//             <DropdownMenuItem>View payment details</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },
// ]

// export function ProductsTable() {
//   const [sorting, setSorting] = useState<SortingState>([])
//   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
//   const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
//   const [rowSelection, setRowSelection] = useState({})
//   const [globalFilter, setGlobalFilter] = useState<Record<string, string>>({})

//   const [mergedData, setMergedData] = useState<Product[]>(data)

//   useEffect(() => {
//     const fetchApiData = async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products")
//         const apiData = await response.json()

//         const formattedData = apiData.map((item: any) => ({
//           id: item.id.toString(),
//           name: item.title,
//           sku: item.id.toString(),
//           condition: "New",
//           location: "Warehouse 4",
//           available: 1000,
//           reserved: 0,
//           onHand: 1000,
//           price: (Math.round(Number(item.price) * 84 * 100) / 100).toFixed(2),
//           modified: new Date().toLocaleDateString(),
//         }))

//         const combinedData = [...data, ...formattedData]
//         const uniqueData = combinedData.reduce((acc, current) => {
//           const x = acc.find((item: Product) => item.sku === current.sku)
//           if (!x) {
//             return acc.concat([current])
//           } else {
//             return acc
//           }
//         }, [])

//         setMergedData(uniqueData)
//       } catch (error) {
//         console.error("Error fetching API data:", error)
//       }
//     }

//     fetchApiData()
//   }, [])

//   const filteredData = useMemo(() => {
//     return mergedData.filter((item) => {
//       return Object.entries(globalFilter).every(([key, value]) => {
//         if (key === 'minPrice') {
//           return item.price >= Number(value);
//         }
//         if (key === 'maxPrice') {
//           return item.price <= Number(value);
//         }
//         return item[key as keyof Product]
//           .toString()
//           .toLowerCase()
//           .includes(value.toLowerCase())
//       })
//     })
//   }, [mergedData, globalFilter])

//   const table = useReactTable({
//     data: filteredData,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   })

//   const handleExport = () => {
//     const dataToExport = filteredData.map(({ id, name, sku, condition, location, available, reserved, onHand, price, modified }) => ({
//       ID: id,
//       Name: name,
//       SKU: sku,
//       Condition: condition,
//       Location: location,
//       Available: available,
//       Reserved: reserved,
//       'On Hand': onHand,
//       Price: price,
//       Modified: modified,
//     }));

//     const ws = XLSX.utils.json_to_sheet(dataToExport);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Products");
//     XLSX.writeFile(wb, "products_export.xlsx");
//   };

//   const handleFilterChange = (filters: Record<string, string | number>) => {
//     setGlobalFilter(filters as Record<string, string>);
//   };

//   return (
//     <div className="flex">
//       <div className="w-1/4 pr-4">
//         <ProductFilter onFilterChange={handleFilterChange} />
//       </div>
//       <div className="w-3/4 space-y-4">
//         <div className="flex items-center justify-between">
//           <div className="flex flex-1 items-center space-x-2">
//             <Button variant="outline" className="ml-auto">
//               Add to warehouse
//               <ChevronDown className="ml-2 h-4 w-4" />
//             </Button>
//             <Button variant="outline">Delete</Button>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Button variant="outline" onClick={handleExport}>
//               Export
//               <Download className="ml-2 h-4 w-4" />
//             </Button>
//             <Button variant="outline">
//               Import from CSV
//               <Upload className="ml-2 h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//         <div className="rounded-md border">
//           <Table>
//             <TableHeader>
//               {table.getHeaderGroups().map((headerGroup) => (
//                 <TableRow key={headerGroup.id}>
//                   {headerGroup.headers.map((header) => {
//                     return (
//                       <TableHead key={header.id}>
//                         {header.isPlaceholder
//                           ? null
//                           : flexRender(
//                               header.column.columnDef.header,
//                               header.getContext()
//                             )}
//                       </TableHead>
//                     )
//                   })}
//                 </TableRow>
//               ))}
//             </TableHeader>
//             <TableBody>
//               {table.getRowModel().rows?.length ? (
//                 table.getRowModel().rows.map((row) => (
//                   <TableRow
//                     key={row.id}
//                     data-state={row.getIsSelected() && "selected"}
//                   >
//                     {row.getVisibleCells().map((cell) => (
//                       <TableCell key={cell.id}>
//                         {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={columns.length} className="h-24 text-center">
//                     No results.
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>
//         <div className="flex items-center justify-between">
//           <div className="flex-1 text-sm text-muted-foreground">
//             {table.getFilteredSelectedRowModel().rows.length} of{" "}
//             {table.getFilteredRowModel().rows.length} row(s) selected.
//           </div>
//           <div className="space-x-2">
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => table.previousPage()}
//               disabled={!table.getCanPreviousPage()}
//             >
//               Previous
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => table.nextPage()}
//               disabled={!table.getCanNextPage()}
//             >
//               Next
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }









"use client"

import { useState, useEffect, useMemo } from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, Download, MoreHorizontal, Upload } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ProductFilter } from "./ProductFilter"
import * as XLSX from 'xlsx';

// Static data (original data)
const data = [
  {
    id: "1",
    name: "128GB SD card",
    sku: "0003156",
    condition: "New",
    location: "Warehouse 1",
    available: 3546,
    reserved: 3354,
    onHand: 3546,
    price: 1000.13,
    modified: "03/13/2017",
  },
  {
    id: "2",
    name: "64GB USB Flash Drive",
    sku: "0003157",
    condition: "New",
    location: "Warehouse 2",
    available: 2498,
    reserved: 2100,
    onHand: 2498,
    price: 500.79,
    modified: "04/20/2018",
  },
  {
    id: "3",
    name: "Wireless Mouse",
    sku: "0003158",
    condition: "New",
    location: "Warehouse 1",
    available: 1250,
    reserved: 850,
    onHand: 1250,
    price: 1500.99,
    modified: "11/03/2019",
  },
  {
    id: "4",
    name: "Bluetooth Headphones",
    sku: "0003159",
    condition: "New",
    location: "Warehouse 3",
    available: 789,
    reserved: 500,
    onHand: 789,
    price: 2900.99,
    modified: "02/15/2020",
  },
  {
    id: "5",
    name: "4K HDMI Cable",
    sku: "0003160",
    condition: "New",
    location: "Warehouse 1",
    available: 4300,
    reserved: 3000,
    onHand: 4300,
    price: 1200.50,
    modified: "06/22/2021",
  },
  {
    id: "6",
    name: "Mechanical Keyboard",
    sku: "0003161",
    condition: "New",
    location: "Warehouse 2",
    available: 1800,
    reserved: 1000,
    onHand: 1800,
    price: 5500.99,
    modified: "09/13/2020",
  },
  {
    id: "7",
    name: "Gaming Mousepad",
    sku: "0003162",
    condition: "New",
    location: "Warehouse 3",
    available: 1400,
    reserved: 900,
    onHand: 1400,
    price: 2200.99,
    modified: "01/05/2022",
  },
  {
    id: "8",
    name: "Laptop Stand",
    sku: "0003163",
    condition: "New",
    location: "Warehouse 1",
    available: 2200,
    reserved: 1500,
    onHand: 2200,
    price: 1800.75,
    modified: "04/17/2021",
  }
];

export type Product = typeof data[0]

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="px-1">
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "sku",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        SKU
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  // {
  //   accessorKey: "condition",
  //   header: ({ column }) => (
  //     <Button
  //       variant="ghost"
  //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //     >
  //       Condition
  //       <ArrowUpDown className="ml-2 h-4 w-4" />
  //     </Button>
  //   ),
  // },
  {
    accessorKey: "location",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Location
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "available",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Available
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "reserved",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Reserved
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "onHand",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        On Hand
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>₹{row.getValue("price")}</div>,
  },
  {
    accessorKey: "modified",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Modified
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.getValue("id"))}>Copy product ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function ProductsTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [globalFilter, setGlobalFilter] = useState<Record<string, string>>({})
  const [isFilterVisible, setIsFilterVisible] = useState(false)

  const [mergedData, setMergedData] = useState<Product[]>(data)

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const apiData = await response.json()

        const formattedData = apiData.map((item: any) => ({
          id: item.id.toString(),
          name: item.title,
          sku: item.id.toString(),
          condition: "New",
          location: "Warehouse 4",
          available: 1000,
          reserved: 0,
          onHand: 1000,
          price: (Math.round(Number(item.price) * 84 * 100) / 100).toFixed(2),
          modified: new Date().toLocaleDateString(),
        }))

        const combinedData = [...data, ...formattedData]
        const uniqueData = combinedData.reduce((acc, current) => {
          const x = acc.find((item: Product) => item.sku === current.sku)
          if (!x) {
            return acc.concat([current])
          } else {
            return acc
          }
        }, [])

        setMergedData(uniqueData)
      } catch (error) {
        console.error("Error fetching API data:", error)
      }
    }

    fetchApiData()
  }, [])

  const filteredData = useMemo(() => {
    return mergedData.filter((item) => {
      return Object.entries(globalFilter).every(([key, value]) => {
        if (key === 'minPrice') {
          return item.price >= Number(value);
        }
        if (key === 'maxPrice') {
          return item.price <= Number(value);
        }
        return item[key as keyof Product]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase())
      })
    })
  }, [mergedData, globalFilter])

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const handleExport = () => {
    const dataToExport = filteredData.map(({ id, name, sku, condition, location, available, reserved, onHand, price, modified }) => ({
      ID: id,
      Name: name,
      SKU: sku,
      Condition: condition,
      Location: location,
      Available: available,
      Reserved: reserved,
      'On Hand': onHand,
      Price: price,
      Modified: modified,
    }));

    const ws = XLSX.utils.json_to_sheet(dataToExport);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Products");
    XLSX.writeFile(wb, "products_export.xlsx");
  };

  const handleFilterChange = (filters: Record<string, string | number>) => {
    setGlobalFilter(filters as Record<string, string>);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button 
          variant="outline" 
          onClick={() => setIsFilterVisible(!isFilterVisible)}
          className="ml-auto"
        >
          {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isFilterVisible ? 'rotate-180' : ''}`} />
        </Button>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={handleExport}>
            Export
            <Download className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">
            Import from CSV
            <Upload className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex">
        {isFilterVisible && (
          <div className="w-1/6 pr-6">
            <ProductFilter onFilterChange={handleFilterChange} />
          </div>
        )}
        <div className={isFilterVisible ? "w-5/6" : "w-full"}>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

















// "use client"

// import { useState } from "react"
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table"
// import { ArrowUpDown, ChevronDown, Download, MoreHorizontal, Upload } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   DropdownMenu,
//   // DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"

// // const data = [
//   // {
//     // id: "1",
//     // name: "128GB SD card",
//     // sku: "0003156",
//     // condition: "New",
//     // location: "Warehouse 1",
//     // available: 3546,
//     // reserved: 3354,
//     // onHand: 3546,
//     // price: 10.13,
//     // modified: "03/13/2017",
//   // },
//   // // Add more sample data here...
// // ]

// const data = [
//   {
//     id: "1",
//     name: "128GB SD card",
//     sku: "0003156",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 3546,
//     reserved: 3354,
//     onHand: 3546,
//     price: 10.13,
//     modified: "03/13/2017",
//   },
//   {
//     id: "2",
//     name: "64GB USB Flash Drive",
//     sku: "0003157",
//     condition: "New",
//     location: "Warehouse 2",
//     available: 2498,
//     reserved: 2100,
//     onHand: 2498,
//     price: 5.79,
//     modified: "04/20/2018",
//   },
//   {
//     id: "3",
//     name: "Wireless Mouse",
//     sku: "0003158",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 1250,
//     reserved: 850,
//     onHand: 1250,
//     price: 15.99,
//     modified: "11/03/2019",
//   },
//   {
//     id: "4",
//     name: "Bluetooth Headphones",
//     sku: "0003159",
//     condition: "New",
//     location: "Warehouse 3",
//     available: 789,
//     reserved: 500,
//     onHand: 789,
//     price: 29.99,
//     modified: "02/15/2020",
//   },
//   {
//     id: "5",
//     name: "4K HDMI Cable",
//     sku: "0003160",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 4300,
//     reserved: 3000,
//     onHand: 4300,
//     price: 12.50,
//     modified: "06/22/2021",
//   },
//   {
//     id: "6",
//     name: "Mechanical Keyboard",
//     sku: "0003161",
//     condition: "New",
//     location: "Warehouse 2",
//     available: 1800,
//     reserved: 1000,
//     onHand: 1800,
//     price: 55.99,
//     modified: "09/13/2020",
//   },
//   {
//     id: "7",
//     name: "Gaming Mousepad",
//     sku: "0003162",
//     condition: "New",
//     location: "Warehouse 3",
//     available: 1400,
//     reserved: 900,
//     onHand: 1400,
//     price: 22.99,
//     modified: "01/05/2022",
//   },
//   {
//     id: "8",
//     name: "Laptop Stand",
//     sku: "0003163",
//     condition: "New",
//     location: "Warehouse 1",
//     available: 2200,
//     reserved: 1500,
//     onHand: 2200,
//     price: 18.75,
//     modified: "04/17/2021",
//   }
// ];


// export type Product = typeof data[0]

// export const columns: ColumnDef<Product>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={table.getIsAllPageRowsSelected()}
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "name",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Name
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//     cell: ({ row }) => <div>{row.getValue("name")}</div>,
//   },
//   {
//     accessorKey: "sku",
//     header: "SKU",
//     cell: ({ row }) => <div>{row.getValue("sku")}</div>,
//   },
//   {
//     accessorKey: "condition",
//     header: "Condition",
//     cell: ({ row }) => <div>{row.getValue("condition")}</div>,
//   },
//   {
//     accessorKey: "location",
//     header: "Location",
//     cell: ({ row }) => <div>{row.getValue("location")}</div>,
//   },
//   {
//     accessorKey: "available",
//     header: "Available",
//     cell: ({ row }) => <div>{row.getValue("available")}</div>,
//   },
//   {
//     accessorKey: "reserved",
//     header: "Reserved",
//     cell: ({ row }) => <div>{row.getValue("reserved")}</div>,
//   },
//   {
//     accessorKey: "onHand",
//     header: "On Hand",
//     cell: ({ row }) => <div>{row.getValue("onHand")}</div>,
//   },
//   {
//     accessorKey: "price",
//     header: "Price",
//     cell: ({ row }) => <div>${row.getValue("price")}</div>,
//   },
//   {
//     accessorKey: "modified",
//     header: "Modified",
//     cell: ({ row }) => <div>{row.getValue("modified")}</div>,
//   },
//   {
//     id: "actions",
//     cell: ({ }) => {
//       // const product = row.original

//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem>Edit product</DropdownMenuItem>
//             <DropdownMenuItem>View details</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem className="text-destructive">
//               Delete product
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },
// ]

// export function ProductsTable() {
//   const [sorting, setSorting] = useState<SortingState>([])
//   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
//   const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
//   const [rowSelection, setRowSelection] = useState({})

//   const table = useReactTable({
//     data,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   })

//   return (
//     <div className="space-y-4">
//       <div className="flex items-center justify-between">
//         <div className="flex flex-1 items-center space-x-2">
//           <Button variant="outline" className="ml-auto">
//             Add to warehouse
//             <ChevronDown className="ml-2 h-4 w-4" />
//           </Button>
//           <Button variant="outline">Delete</Button>
//         </div>
//         <div className="flex items-center space-x-2">
//           <Button variant="outline">
//             Export
//             <Download className="ml-2 h-4 w-4" />
//           </Button>
//           <Button variant="outline">
//             Import from CSV
//             <Upload className="ml-2 h-4 w-4" />
//           </Button>
//           {/* <Button>
//             Add product
//             <Plus className="ml-2 h-4 w-4" />
//           </Button> */}
//         </div>
//       </div>
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   return (
//                     <TableHead key={header.id}>
//                       {header.isPlaceholder
//                         ? null
//                         : flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )}
//                     </TableHead>
//                   )
//                 })}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center"
//                 >
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//       <div className="flex items-center justify-between">
//         <div className="text-sm text-muted-foreground">
//           {table.getFilteredSelectedRowModel().rows.length} of{" "}
//           {table.getFilteredRowModel().rows.length} row(s) selected.
//         </div>
//         <div className="space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

