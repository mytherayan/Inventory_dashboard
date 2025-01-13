import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReportsList } from "@/components/reports-list"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

export function ReportContent() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
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

