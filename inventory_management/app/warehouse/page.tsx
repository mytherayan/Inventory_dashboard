import { WarehouseList } from "@/components/warehouse-list"
import { AddWarehouse } from "@/components/add-warehouse"

export default function WarehousePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Warehouse Management</h2>
        <AddWarehouse />
      </div>
      <WarehouseList />
    </div>
  )
}

