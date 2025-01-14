"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, Download, Filter, Import, MoreHorizontal, Package,Truck } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

const orders = [
  {
    id: "#192544",
    customer: "Esther Howard",
    type: "Shipping",
    status: "Paid",
    product: "50% Off machine ice",
    total: "$1,077.50",
    date: "Jun 19",
    email: "esther@example.com",
    phone: "+1 (555) 555-1234",
    items: [
      {
        name: "50% Off machine ice",
        price: "$1,000.00",
        quantity: 1
      },
      {
        name: "Gasoline generator EYS 7500",
        price: "$327.89",
        quantity: 1
      }
    ]
  },
  {
    id: "#192543",
    customer: "David Miller",
    type: "Pickups",
    status: "Paid",
    product: "Generator X-1000",
    total: "$899.99",
    date: "Jun 19"
  },
  // Add more orders...
]

export function OrdersList() {
  // const [search, setSearch] = useState("")
  const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="h-8">
              Status <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-8">
              Order date <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-8">
              All filters <Filter className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="h-8">
            <Import className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button variant="outline" className="h-8">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow 
                    key={order.id} 
                    className="cursor-pointer"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <TableCell>{order.id}</TableCell>
                    <TableCell className="flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                        {order.customer.charAt(0)}
                      </span>
                      {order.customer}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {order.type === "Shipping" ? (
                          <Truck className="h-4 w-4" />
                        ) : (
                          <Package className="h-4 w-4" />
                        )}
                        {order.type}
                      </div>
                    </TableCell>
                    <TableCell>
                      {/* variant={order.status === "Paid" ? "success" : "secondary"} */}
                      <Badge >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Update status</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            Cancel order
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="w-[300px] space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <center><CardTitle className="text-la font-large">Receipt of Goods</CardTitle></center>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-4">
                <div className="relative h-40 w-40">
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle
                      className="stroke-muted"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      className="stroke-emerald-600"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="251.2"
                      strokeDashoffset="62.8"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-2xl font-bold">$2.2m</div>
                    <div className="text-xs text-muted-foreground">242 orders</div>
                  </div>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium">$864,600</div>
                  <div className="text-xs text-muted-foreground">55 shipments</div>
                </div>
                <div>
                  <div className="text-sm font-medium">$1.34m</div>
                  <div className="text-xs text-muted-foreground">147 pickups</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Orders Status</CardTitle>
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  Active <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Paid</span>
                  <span className="text-muted-foreground">85%</span>
                </div>
              <Progress value={85} className="h-2 bg-muted" />  {/* indicatorClassName="bg-emerald-600"  */}
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Cancelled</span>
                  <span className="text-muted-foreground">8%</span>
                </div>
                <Progress value={8} className="h-2" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Refunded</span>
                  <span className="text-muted-foreground">3%</span>
                </div>
                <Progress value={3} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Overview</CardTitle>
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  This month <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">$2,246.75</div>
                  <div className="text-xs text-muted-foreground">Average order</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">$2.2m</div>
                  <div className="text-xs text-muted-foreground">Total revenue</div>
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">16 min</div>
                  <div className="text-xs text-muted-foreground">Processing time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1.7</div>
                  <div className="text-xs text-muted-foreground">Avg. items/order</div>
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">0.32%</div>
                  <div className="text-xs text-muted-foreground">Pending orders</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">0.51%</div>
                  <div className="text-xs text-muted-foreground">Reject rate</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Top Sellers</CardTitle>
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  This month <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                  <Package className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Gasoline generator EYG</div>
                  <div className="text-xs text-muted-foreground">7500 (inverter)</div>
                </div>
                <div className="text-sm font-medium">14</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Sheet open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Order Details</SheetTitle>
          </SheetHeader>
          {selectedOrder && (
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <h3 className="font-medium">{selectedOrder.customer}</h3>
                {selectedOrder.email && (
                  <p className="text-sm text-muted-foreground">{selectedOrder.email}</p>
                )}
                {selectedOrder.phone && (
                  <p className="text-sm text-muted-foreground">{selectedOrder.phone}</p>
                )}
              </div>
              <div className="border-t pt-4">
                <h4 className="mb-2 font-medium">Order Items</h4>
                {selectedOrder.items?.map((item, index) => (
                  <div key={index} className="flex justify-between py-1">
                    <div>
                      <p className="text-sm">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium">{item.price}</p>
                  </div>
                ))}
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between">
                    <p className="font-medium">Total</p>
                    <p className="font-medium">{selectedOrder.total}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}

