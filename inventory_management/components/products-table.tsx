"use client"

import { useState } from "react"
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
  // DropdownMenuCheckboxItem,
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

// const data = [
  // {
    // id: "1",
    // name: "128GB SD card",
    // sku: "0003156",
    // condition: "New",
    // location: "Warehouse 1",
    // available: 3546,
    // reserved: 3354,
    // onHand: 3546,
    // price: 10.13,
    // modified: "03/13/2017",
  // },
  // // Add more sample data here...
// ]

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
    price: 10.13,
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
    price: 5.79,
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
    price: 15.99,
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
    price: 29.99,
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
    price: 12.50,
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
    price: 55.99,
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
    price: 22.99,
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
    price: 18.75,
    modified: "04/17/2021",
  },
  {
    id: "9",
    name: "External Hard Drive 1TB",
    sku: "0003164",
    condition: "New",
    location: "Warehouse 2",
    available: 1500,
    reserved: 1200,
    onHand: 1500,
    price: 45.99,
    modified: "07/09/2020",
  },
  {
    id: "10",
    name: "Bluetooth Speaker",
    sku: "0003165",
    condition: "New",
    location: "Warehouse 3",
    available: 880,
    reserved: 650,
    onHand: 880,
    price: 25.99,
    modified: "12/11/2021",
  },
  {
    id: "11",
    name: "Phone Case - iPhone 12",
    sku: "0003166",
    condition: "New",
    location: "Warehouse 1",
    available: 5000,
    reserved: 4500,
    onHand: 5000,
    price: 8.99,
    modified: "02/25/2022",
  },
  {
    id: "12",
    name: "Smartwatch",
    sku: "0003167",
    condition: "New",
    location: "Warehouse 2",
    available: 650,
    reserved: 400,
    onHand: 650,
    price: 150.00,
    modified: "05/14/2021",
  },
  {
    id: "13",
    name: "Phone Charger - USB-C",
    sku: "0003168",
    condition: "New",
    location: "Warehouse 3",
    available: 3200,
    reserved: 2500,
    onHand: 3200,
    price: 9.99,
    modified: "10/07/2021",
  },
  {
    id: "14",
    name: "Laptop Sleeve - 15 inch",
    sku: "0003169",
    condition: "New",
    location: "Warehouse 1",
    available: 1300,
    reserved: 800,
    onHand: 1300,
    price: 19.99,
    modified: "08/11/2022",
  },
  {
    id: "15",
    name: "RGB Gaming Chair",
    sku: "0003170",
    condition: "New",
    location: "Warehouse 2",
    available: 420,
    reserved: 220,
    onHand: 420,
    price: 179.99,
    modified: "11/20/2022",
  },
  {
    id: "16",
    name: "Webcam 1080p",
    sku: "0003171",
    condition: "New",
    location: "Warehouse 3",
    available: 3000,
    reserved: 1800,
    onHand: 3000,
    price: 50.99,
    modified: "09/15/2023",
  },
  {
    id: "17",
    name: "Portable Power Bank 10000mAh",
    sku: "0003172",
    condition: "New",
    location: "Warehouse 1",
    available: 1100,
    reserved: 700,
    onHand: 1100,
    price: 35.00,
    modified: "06/29/2023",
  },
  {
    id: "18",
    name: "Smartphone Screen Protector",
    sku: "0003173",
    condition: "New",
    location: "Warehouse 2",
    available: 7000,
    reserved: 6000,
    onHand: 7000,
    price: 4.99,
    modified: "12/05/2023",
  },
  {
    id: "19",
    name: "4K Camera",
    sku: "0003174",
    condition: "New",
    location: "Warehouse 3",
    available: 150,
    reserved: 100,
    onHand: 150,
    price: 499.99,
    modified: "10/22/2023",
  },
  {
    id: "20",
    name: "Wireless Earbuds",
    sku: "0003175",
    condition: "New",
    location: "Warehouse 1",
    available: 2500,
    reserved: 1900,
    onHand: 2500,
    price: 59.99,
    modified: "12/20/2024",
  }
];


export type Product = typeof data[0]

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "sku",
    header: "SKU",
    cell: ({ row }) => <div>{row.getValue("sku")}</div>,
  },
  {
    accessorKey: "condition",
    header: "Condition",
    cell: ({ row }) => <div>{row.getValue("condition")}</div>,
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => <div>{row.getValue("location")}</div>,
  },
  {
    accessorKey: "available",
    header: "Available",
    cell: ({ row }) => <div>{row.getValue("available")}</div>,
  },
  {
    accessorKey: "reserved",
    header: "Reserved",
    cell: ({ row }) => <div>{row.getValue("reserved")}</div>,
  },
  {
    accessorKey: "onHand",
    header: "On Hand",
    cell: ({ row }) => <div>{row.getValue("onHand")}</div>,
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => <div>${row.getValue("price")}</div>,
  },
  {
    accessorKey: "modified",
    header: "Modified",
    cell: ({ row }) => <div>{row.getValue("modified")}</div>,
  },
  {
    id: "actions",
    cell: ({ }) => {
      // const product = row.original

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
            <DropdownMenuItem>Edit product</DropdownMenuItem>
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              Delete product
            </DropdownMenuItem>
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

  const table = useReactTable({
    data,
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

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <Button variant="outline" className="ml-auto">
            Add to warehouse
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">Delete</Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            Export
            <Download className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">
            Import from CSV
            <Upload className="ml-2 h-4 w-4" />
          </Button>
          {/* <Button>
            Add product
            <Plus className="ml-2 h-4 w-4" />
          </Button> */}
        </div>
      </div>
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
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
  )
}

