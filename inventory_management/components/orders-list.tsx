"use client"

import { useState, useCallback } from "react"
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
import { ChevronDown, Download, Filter, Import, MoreHorizontal, Package, Truck } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

// const initialOrders = [
  // {
    // id: "#192544",
    // customer: "Esther Howard",
    // type: "Shipping",
    // status: "Paid",
    // product: "50% Off machine ice",
    // total: "$1,077.50",
    // date: "Jun 19",
    // email: "esther@example.com",
    // phone: "+1 (555) 555-1234",
    // items: [
      // {
        // name: "50% Off machine ice",
        // price: "$1,000.00",
        // quantity: 1
      // },
      // {
        // name: "Gasoline generator EYS 7500",
        // price: "$327.89",
        // quantity: 1
      // }
    // ]
  // },
  // {
    // id: "#192543",
    // customer: "David Miller",
    // type: "Pickup",
    // status: "Pending",
    // product: "Generator X-1000",
    // total: "$899.99",
    // date: "Jun 19"
  // },
  // // Add more orders...
// ]


const initialOrders = [
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
    type: "Pickup",
    status: "Pending",
    product: "Generator X-1000",
    total: "$899.99",
    date: "Jun 19",
    items: [
      {
        name: "Generator X-1000",
        price: "$899.99",
        quantity: 1
      }
    ]
  },
  {
    id: "#192542",
    customer: "Jessica Green",
    type: "Shipping",
    status: "Shipped",
    product: "Portable Air Conditioner",
    total: "$650.00",
    date: "Jun 20",
    items: [
      {
        name: "Portable Air Conditioner",
        price: "$650.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192541",
    customer: "Michael Johnson",
    type: "Pickup",
    status: "Cancelled",
    product: "Washing Machine",
    total: "$850.00",
    date: "Jun 21",
    items: [
      {
        name: "Washing Machine",
        price: "$850.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192540",
    customer: "Sophia Smith",
    type: "Shipping",
    status: "Paid",
    product: "Electric Scooter",
    total: "$1,200.00",
    date: "Jun 22",
    items: [
      {
        name: "Electric Scooter",
        price: "$1,200.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192539",
    customer: "Daniel Brown",
    type: "Pickup",
    status: "Paid",
    product: "Blender Xtreme 5000",
    total: "$400.00",
    date: "Jun 23",
    items: [
      {
        name: "Blender Xtreme 5000",
        price: "$400.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192538",
    customer: "Olivia Davis",
    type: "Shipping",
    status: "Pending",
    product: "Smart TV 65 inches",
    total: "$1,500.00",
    date: "Jun 24",
    items: [
      {
        name: "Smart TV 65 inches",
        price: "$1,500.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192537",
    customer: "James Wilson",
    type: "Pickup",
    status: "Shipped",
    product: "Coffee Machine Elite",
    total: "$250.00",
    date: "Jun 25",
    items: [
      {
        name: "Coffee Machine Elite",
        price: "$250.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192536",
    customer: "Isabella Martinez",
    type: "Shipping",
    status: "Paid",
    product: "Cordless Drill Set",
    total: "$280.00",
    date: "Jun 26",
    items: [
      {
        name: "Cordless Drill Set",
        price: "$280.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192535",
    customer: "Liam Garcia",
    type: "Pickup",
    status: "Cancelled",
    product: "Stand Mixer Deluxe",
    total: "$230.00",
    date: "Jun 27",
    items: [
      {
        name: "Stand Mixer Deluxe",
        price: "$230.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192534",
    customer: "Mason Rodriguez",
    type: "Shipping",
    status: "Shipped",
    product: "Home Theater System",
    total: "$1,000.00",
    date: "Jun 28",
    items: [
      {
        name: "Home Theater System",
        price: "$1,000.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192533",
    customer: "Emma Lee",
    type: "Pickup",
    status: "Paid",
    product: "Refrigerator Model A200",
    total: "$1,350.00",
    date: "Jun 29",
    items: [
      {
        name: "Refrigerator Model A200",
        price: "$1,350.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192532",
    customer: "Aiden Lopez",
    type: "Shipping",
    status: "Pending",
    product: "Hybrid Bicycle",
    total: "$500.00",
    date: "Jun 30",
    items: [
      {
        name: "Hybrid Bicycle",
        price: "$500.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192531",
    customer: "Charlotte Walker",
    type: "Pickup",
    status: "Shipped",
    product: "High-End Vacuum Cleaner",
    total: "$700.00",
    date: "Jul 1",
    items: [
      {
        name: "High-End Vacuum Cleaner",
        price: "$700.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192530",
    customer: "Ethan Hall",
    type: "Shipping",
    status: "Paid",
    product: "Air Fryer Pro",
    total: "$150.00",
    date: "Jul 2",
    items: [
      {
        name: "Air Fryer Pro",
        price: "$150.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192529",
    customer: "Mia Allen",
    type: "Pickup",
    status: "Pending",
    product: "Pressure Cooker",
    total: "$180.00",
    date: "Jul 3",
    items: [
      {
        name: "Pressure Cooker",
        price: "$180.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192528",
    customer: "Lucas Young",
    type: "Shipping",
    status: "Shipped",
    product: "Electric Kettle",
    total: "$50.00",
    date: "Jul 4",
    items: [
      {
        name: "Electric Kettle",
        price: "$50.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192527",
    customer: "Amelia King",
    type: "Pickup",
    status: "Paid",
    product: "Smart Speaker Pro",
    total: "$120.00",
    date: "Jul 5",
    items: [
      {
        name: "Smart Speaker Pro",
        price: "$120.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192526",
    customer: "Henry Scott",
    type: "Shipping",
    status: "Pending",
    product: "Robot Vacuum",
    total: "$450.00",
    date: "Jul 6",
    items: [
      {
        name: "Robot Vacuum",
        price: "$450.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192525",
    customer: "Harper Green",
    type: "Pickup",
    status: "Paid",
    product: "Power Tool Set",
    total: "$300.00",
    date: "Jul 7",
    items: [
      {
        name: "Power Tool Set",
        price: "$300.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192524",
    customer: "Alexander Adams",
    type: "Shipping",
    status: "Shipped",
    product: "Electric Grill",
    total: "$200.00",
    date: "Jul 8",
    items: [
      {
        name: "Electric Grill",
        price: "$200.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192523",
    customer: "Grace Nelson",
    type: "Pickup",
    status: "Cancelled",
    product: "Lawnmower Xtreme",
    total: "$400.00",
    date: "Jul 9",
    items: [
      {
        name: "Lawnmower Xtreme",
        price: "$400.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192522",
    customer: "Oliver Carter",
    type: "Shipping",
    status: "Paid",
    product: "Soda Maker",
    total: "$90.00",
    date: "Jul 10",
    items: [
      {
        name: "Soda Maker",
        price: "$90.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192521",
    customer: "Zoe Mitchell",
    type: "Pickup",
    status: "Pending",
    product: "Electric Grill",
    total: "$150.00",
    date: "Jul 11",
    items: [
      {
        name: "Electric Grill",
        price: "$150.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192520",
    customer: "Jack Perez",
    type: "Shipping",
    status: "Shipped",
    product: "Electric Pressure Washer",
    total: "$500.00",
    date: "Jul 12",
    items: [
      {
        name: "Electric Pressure Washer",
        price: "$500.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192519",
    customer: "Lily Thomas",
    type: "Pickup",
    status: "Paid",
    product: "Smartphone Pro Max",
    total: "$999.99",
    date: "Jul 13",
    items: [
      {
        name: "Smartphone Pro Max",
        price: "$999.99",
        quantity: 1
      }
    ]
  },
  {
    id: "#192518",
    customer: "Benjamin Jackson",
    type: "Shipping",
    status: "Pending",
    product: "Digital Camera",
    total: "$1,200.00",
    date: "Jul 14",
    items: [
      {
        name: "Digital Camera",
        price: "$1,200.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192517",
    customer: "Mila White",
    type: "Pickup",
    status: "Shipped",
    product: "Table Saw Pro",
    total: "$450.00",
    date: "Jul 15",
    items: [
      {
        name: "Table Saw Pro",
        price: "$450.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192516",
    customer: "Sebastian Harris",
    type: "Shipping",
    status: "Paid",
    product: "Gas Grill",
    total: "$400.00",
    date: "Jul 16",
    items: [
      {
        name: "Gas Grill",
        price: "$400.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192515",
    customer: "Ella Clark",
    type: "Pickup",
    status: "Cancelled",
    product: "Standing Fan Deluxe",
    total: "$120.00",
    date: "Jul 17",
    items: [
      {
        name: "Standing Fan Deluxe",
        price: "$120.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192514",
    customer: "Daniel Lewis",
    type: "Shipping",
    status: "Shipped",
    product: "Luggage Set Pro",
    total: "$600.00",
    date: "Jul 18",
    items: [
      {
        name: "Luggage Set Pro",
        price: "$600.00",
        quantity: 1
      }
    ]
  },
  {
    id: "#192513",
    customer: "Scarlett Walker",
    type: "Pickup",
    status: "Paid",
    product: "Recliner Sofa",
    total: "$800.00",
    date: "Jul 19",
    items: [
      {
        name: "Recliner Sofa",
        price: "$800.00",
        quantity: 1
      }
    ]
  }
];


export function OrdersList() {
  const [orders, setOrders] = useState(initialOrders)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [statusFilter, setStatusFilter] = useState("All")
  const [dateFilter, setDateFilter] = useState("All")

  const updateOrderStatus = useCallback((orderId, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    )
  }, [])

  const filteredOrders = orders.filter(order => 
    (statusFilter === "All" || order.status === statusFilter) &&
    (dateFilter === "All" || order.date === dateFilter)
  )

  const statusCounts = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + parseFloat(order.total.replace('$', '').replace(',', '')), 0);

  const shippingOrders = orders.filter(order => order.type === "Shipping");
  const pickupOrders = orders.filter(order => order.type === "Pickup");
  const shippingRevenue = shippingOrders.reduce((sum, order) => sum + parseFloat(order.total.replace('$', '').replace(',', '')), 0);
  const pickupRevenue = pickupOrders.reduce((sum, order) => sum + parseFloat(order.total.replace('$', '').replace(',', '')), 0);

  const averageOrderValue = totalRevenue / totalOrders;
  const processingTime = 16; // Assuming this is a fixed value for now
  const avgItemsPerOrder = orders.reduce((sum, order) => sum + (order.items?.length || 0), 0) / totalOrders;

  const pendingOrdersPercentage = (statusCounts["Processing"] || 0) / totalOrders * 100;
  const cancelledOrdersPercentage = (statusCounts["Cancelled"] || 0) / totalOrders * 100;

  const topSellers = [
    { name: "Gasoline generator EYG 7500", category: "Generators", sales: 14 },
    { name: "Solar Panel Kit 5kW", category: "Solar", sales: 12 },
    { name: "Portable Power Station", category: "Power Storage", sales: 10 },
    { name: "Wind Turbine 1500W", category: "Wind Power", sales: 8 },
    { name: "Inverter 3000W", category: "Power Management", sales: 7 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-8">
                Status <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setStatusFilter("All")}>All</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("Order Placed")}>Order Placed</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("Processing")}>Processing</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("Shipped")}>Shipped</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("Delivered")}>Delivered</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("Cancelled")}>Cancelled</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" className="h-8">
            Order date <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="h-8">
            All filters <Filter className="ml-2 h-4 w-4" />
          </Button>
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
                {filteredOrders.map((order) => (
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
                      <Badge variant={order.status === "Delivered" ? "success" : "secondary"}>
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
                          <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => updateOrderStatus(order.id, "Order Placed")}>Order Placed</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateOrderStatus(order.id, "Processing")}>Processing</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateOrderStatus(order.id, "Shipped")}>Shipped</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateOrderStatus(order.id, "Out for Delivery")}>Out for Delivery</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateOrderStatus(order.id, "Delivered")}>Delivered</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateOrderStatus(order.id, "Ready for Pickup")}>Ready for Pickup</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => updateOrderStatus(order.id, "Cancelled")} className="text-destructive">
                            Cancel Order
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
                      strokeDashoffset={251.2 * (1 - shippingRevenue / totalRevenue)}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-2xl font-bold">₹{totalRevenue.toFixed(2)}</div>
                    <div className="text-xs text-muted-foreground">{totalOrders} orders</div>
                  </div>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium">₹{shippingRevenue.toFixed(2)}</div>
                  <div className="text-xs text-muted-foreground">{shippingOrders.length} shipments</div>
                </div>
                <div>
                  <div className="text-sm font-medium">₹{pickupRevenue.toFixed(2)}</div>
                  <div className="text-xs text-muted-foreground">{pickupOrders.length} pickups</div>
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
    {Object.entries(statusCounts).map(([status, count]) => {
      const percentage = (count / totalOrders) * 100;
      return (
        <div key={status} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>{status}</span>
            <span className="text-muted-foreground">{percentage.toFixed(1)}%</span>
          </div>
          <Progress value={percentage} className="h-2" />
        </div>
      );
    })}
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
        <div className="text-2xl font-bold">₹{averageOrderValue.toFixed(2)}</div>
        <div className="text-xs text-muted-foreground">Average order</div>
      </div>
      <div>
        <div className="text-2xl font-bold">₹{totalRevenue.toFixed(2)}</div>
        <div className="text-xs text-muted-foreground">Total revenue</div>
      </div>
    </div>
    <Separator />
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="text-2xl font-bold">{processingTime} min</div>
        <div className="text-xs text-muted-foreground">Processing time</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{avgItemsPerOrder.toFixed(1)}</div>
        <div className="text-xs text-muted-foreground">Avg. items/order</div>
      </div>
    </div>
    <Separator />
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="text-2xl font-bold">{pendingOrdersPercentage.toFixed(2)}%</div>
        <div className="text-xs text-muted-foreground">Pending orders</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{cancelledOrdersPercentage.toFixed(2)}%</div>
        <div className="text-xs text-muted-foreground">Cancelled rate</div>
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
    {topSellers.map((seller, index) => (
      <div key={index} className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
          <Package className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium">{seller.name}</div>
          <div className="text-xs text-muted-foreground">{seller.category}</div>
        </div>
        <div className="text-sm font-medium">{seller.sales}</div>
      </div>
    ))}
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



// "use client"

// import { useState } from "react"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuTrigger,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu"
// import { Badge } from "@/components/ui/badge"
// import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { ChevronDown, Download, Filter, Import, MoreHorizontal, Package,Truck } from 'lucide-react'
// import { Progress } from "@/components/ui/progress"
// import { Separator } from "@/components/ui/separator"

// const orders = [
//   {
//     id: "#192544",
//     customer: "Esther Howard",
//     type: "Shipping",
//     status: "Paid",
//     product: "50% Off machine ice",
//     total: "$1,077.50",
//     date: "Jun 19",
//     email: "esther@example.com",
//     phone: "+1 (555) 555-1234",
//     items: [
//       {
//         name: "50% Off machine ice",
//         price: "$1,000.00",
//         quantity: 1
//       },
//       {
//         name: "Gasoline generator EYS 7500",
//         price: "$327.89",
//         quantity: 1
//       }
//     ]
//   },
//   {
//     id: "#192543",
//     customer: "David Miller",
//     type: "Pickups",
//     status: "Paid",
//     product: "Generator X-1000",
//     total: "$899.99",
//     date: "Jun 19"
//   },
//   // Add more orders...
// ]

// export function OrdersList() {
//   // const [search, setSearch] = useState("")
//   const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null)

//   return (
//     <div className="space-y-4">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-2">
//           <div className="flex items-center space-x-2">
//             <Button variant="outline" className="h-8">
//               Status <ChevronDown className="ml-2 h-4 w-4" />
//             </Button>
//             <Button variant="outline" className="h-8">
//               Order date <ChevronDown className="ml-2 h-4 w-4" />
//             </Button>
//             <Button variant="outline" className="h-8">
//               All filters <Filter className="ml-2 h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//         <div className="flex items-center space-x-2">
//           <Button variant="outline" className="h-8">
//             <Import className="mr-2 h-4 w-4" />
//             Import
//           </Button>
//           <Button variant="outline" className="h-8">
//             <Download className="mr-2 h-4 w-4" />
//             Export
//           </Button>
//         </div>
//       </div>
//       <div className="flex gap-4">
//         <div className="flex-1">
//           <div className="rounded-md border">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Order</TableHead>
//                   <TableHead>Customer</TableHead>
//                   <TableHead>Type</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Product</TableHead>
//                   <TableHead>Total</TableHead>
//                   <TableHead>Date</TableHead>
//                   <TableHead className="w-[50px]"></TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {orders.map((order) => (
//                   <TableRow 
//                     key={order.id} 
//                     className="cursor-pointer"
//                     onClick={() => setSelectedOrder(order)}
//                   >
//                     <TableCell>{order.id}</TableCell>
//                     <TableCell className="flex items-center gap-2">
//                       <span className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
//                         {order.customer.charAt(0)}
//                       </span>
//                       {order.customer}
//                     </TableCell>
//                     <TableCell>
//                       <div className="flex items-center gap-2">
//                         {order.type === "Shipping" ? (
//                           <Truck className="h-4 w-4" />
//                         ) : (
//                           <Package className="h-4 w-4" />
//                         )}
//                         {order.type}
//                       </div>
//                     </TableCell>
//                     <TableCell>
//                       {/* variant={order.status === "Paid" ? "success" : "secondary"} */}
//                       <Badge >
//                         {order.status}
//                       </Badge>
//                     </TableCell>
//                     <TableCell>{order.product}</TableCell>
//                     <TableCell>{order.total}</TableCell>
//                     <TableCell>{order.date}</TableCell>
//                     <TableCell>
//                       <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                           <Button variant="ghost" className="h-8 w-8 p-0">
//                             <MoreHorizontal className="h-4 w-4" />
//                           </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent align="end">
//                           <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                           <DropdownMenuItem>View details</DropdownMenuItem>
//                           <DropdownMenuItem>Update status</DropdownMenuItem>
//                           <DropdownMenuSeparator />
//                           <DropdownMenuItem className="text-destructive">
//                             Cancel order
//                           </DropdownMenuItem>
//                         </DropdownMenuContent>
//                       </DropdownMenu>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </div>
//         <div className="w-[300px] space-y-4">
//           <Card>
//             <CardHeader className="pb-2">
//               <center><CardTitle className="text-la font-large">Receipt of Goods</CardTitle></center>
//             </CardHeader>
//             <CardContent>
//               <div className="flex justify-center py-4">
//                 <div className="relative h-40 w-40">
//                   <svg className="h-full w-full" viewBox="0 0 100 100">
//                     <circle
//                       className="stroke-muted"
//                       cx="50"
//                       cy="50"
//                       r="40"
//                       strokeWidth="8"
//                       fill="none"
//                     />
//                     <circle
//                       className="stroke-emerald-600"
//                       cx="50"
//                       cy="50"
//                       r="40"
//                       strokeWidth="8"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeDasharray="251.2"
//                       strokeDashoffset="62.8"
//                       transform="rotate(-90 50 50)"
//                     />
//                   </svg>
//                   <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//                     <div className="text-2xl font-bold">$2.2m</div>
//                     <div className="text-xs text-muted-foreground">242 orders</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-2 grid grid-cols-2 gap-4">
//                 <div>
//                   <div className="text-sm font-medium">$864,600</div>
//                   <div className="text-xs text-muted-foreground">55 shipments</div>
//                 </div>
//                 <div>
//                   <div className="text-sm font-medium">$1.34m</div>
//                   <div className="text-xs text-muted-foreground">147 pickups</div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="pb-2">
//               <div className="flex items-center justify-between">
//                 <CardTitle className="text-sm font-medium">Orders Status</CardTitle>
//                 <Button variant="ghost" size="sm" className="h-8 text-xs">
//                   Active <ChevronDown className="ml-1 h-3 w-3" />
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <div className="space-y-1">
//                 <div className="flex justify-between text-sm">
//                   <span>Paid</span>
//                   <span className="text-muted-foreground">85%</span>
//                 </div>
//               <Progress value={85} className="h-2 bg-muted" />  {/* indicatorClassName="bg-emerald-600"  */}
//               </div>
//               <div className="space-y-1">
//                 <div className="flex justify-between text-sm">
//                   <span>Cancelled</span>
//                   <span className="text-muted-foreground">8%</span>
//                 </div>
//                 <Progress value={8} className="h-2" />
//               </div>
//               <div className="space-y-1">
//                 <div className="flex justify-between text-sm">
//                   <span>Refunded</span>
//                   <span className="text-muted-foreground">3%</span>
//                 </div>
//                 <Progress value={3} className="h-2" />
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="pb-2">
//               <div className="flex items-center justify-between">
//                 <CardTitle className="text-sm font-medium">Overview</CardTitle>
//                 <Button variant="ghost" size="sm" className="h-8 text-xs">
//                   This month <ChevronDown className="ml-1 h-3 w-3" />
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <div className="text-2xl font-bold">$2,246.75</div>
//                   <div className="text-xs text-muted-foreground">Average order</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold">$2.2m</div>
//                   <div className="text-xs text-muted-foreground">Total revenue</div>
//                 </div>
//               </div>
//               <Separator />
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <div className="text-2xl font-bold">16 min</div>
//                   <div className="text-xs text-muted-foreground">Processing time</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold">1.7</div>
//                   <div className="text-xs text-muted-foreground">Avg. items/order</div>
//                 </div>
//               </div>
//               <Separator />
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <div className="text-2xl font-bold">0.32%</div>
//                   <div className="text-xs text-muted-foreground">Pending orders</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold">0.51%</div>
//                   <div className="text-xs text-muted-foreground">Reject rate</div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="pb-2">
//               <div className="flex items-center justify-between">
//                 <CardTitle className="text-sm font-medium">Top Sellers</CardTitle>
//                 <Button variant="ghost" size="sm" className="h-8 text-xs">
//                   This month <ChevronDown className="ml-1 h-3 w-3" />
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="flex items-center gap-4">
//                 <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
//                   <Package className="h-6 w-6" />
//                 </div>
//                 <div className="flex-1">
//                   <div className="text-sm font-medium">Gasoline generator EYG</div>
//                   <div className="text-xs text-muted-foreground">7500 (inverter)</div>
//                 </div>
//                 <div className="text-sm font-medium">14</div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//       <Sheet open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
//         <SheetContent>
//           <SheetHeader>
//             <SheetTitle>Order Details</SheetTitle>
//           </SheetHeader>
//           {selectedOrder && (
//             <div className="space-y-4 pt-4">
//               <div className="space-y-2">
//                 <h3 className="font-medium">{selectedOrder.customer}</h3>
//                 {selectedOrder.email && (
//                   <p className="text-sm text-muted-foreground">{selectedOrder.email}</p>
//                 )}
//                 {selectedOrder.phone && (
//                   <p className="text-sm text-muted-foreground">{selectedOrder.phone}</p>
//                 )}
//               </div>
//               <div className="border-t pt-4">
//                 <h4 className="mb-2 font-medium">Order Items</h4>
//                 {selectedOrder.items?.map((item, index) => (
//                   <div key={index} className="flex justify-between py-1">
//                     <div>
//                       <p className="text-sm">{item.name}</p>
//                       <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
//                     </div>
//                     <p className="text-sm font-medium">{item.price}</p>
//                   </div>
//                 ))}
//                 <div className="border-t mt-4 pt-4">
//                   <div className="flex justify-between">
//                     <p className="font-medium">Total</p>
//                     <p className="font-medium">{selectedOrder.total}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </SheetContent>
//       </Sheet>
//     </div>
//   )
// }

