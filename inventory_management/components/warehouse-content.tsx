import { WarehouseList } from "@/components/warehouse-list"
import { AddWarehouse } from "@/components/add-warehouse"

export function WarehouseContent() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Warehouse Management</h2>
        <AddWarehouse />
      </div>
      <WarehouseList />
    </div>
  )
}

