import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const topProducts = [
  {
    name: "128GB SD card",
    total: 100,
    sales: "$1,013.00",
  },
  // Add more top products...
]

export function TopProducts() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Units Sold</TableHead>
          <TableHead>Total Sales</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topProducts.map((product) => (
          <TableRow key={product.name}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.total}</TableCell>
            <TableCell>{product.sales}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

