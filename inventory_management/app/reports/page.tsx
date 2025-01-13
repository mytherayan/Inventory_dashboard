import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReportsList } from "@/components/reports-list"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

export default function ReportsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download All
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inventory Report</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Generate Report</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales Report</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Generate Report</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Order Report</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Generate Report</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Report</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Generate Report</Button>
          </CardContent>
        </Card>
      </div>
      <ReportsList />
    </div>
  )
}

