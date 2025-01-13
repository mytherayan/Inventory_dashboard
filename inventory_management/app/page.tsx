"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardContent } from "@/components/dashboard-content"
import { ProductsContent } from "@/components/products-content"
import { WarehouseContent } from "@/components/warehouse-content"
import { OrdersContent } from "@/components/orders-content"
import { ReportContent } from "@/components/report-content"
import { SettingsContent } from "@/components/settings-content"
import { TopNav } from "@/components/top-nav"
import { Sidebar } from "@/components/sidebar"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="warehouse">Warehouse</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="report">Report</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <div className="flex">
              {activeTab === "products" && <Sidebar />}
              <div className={`flex-1 ${activeTab === "products" ? 'ml-4' : ''}`}>
                <TabsContent value="dashboard">
                  <DashboardContent />
                </TabsContent>
                <TabsContent value="products">
                  <ProductsContent />
                </TabsContent>
                <TabsContent value="warehouse">
                  <WarehouseContent />
                </TabsContent>
                <TabsContent value="orders">
                  <OrdersContent />
                </TabsContent>
                <TabsContent value="report">
                  <ReportContent />
                </TabsContent>
                <TabsContent value="settings">
                  <SettingsContent />
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

