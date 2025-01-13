import { OrdersList } from "@/components/orders-list"

export function OrdersContent() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
      </div>
      <OrdersList />
    </div>
  )
}

