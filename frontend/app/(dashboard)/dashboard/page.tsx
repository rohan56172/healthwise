import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Footprints, Moon, Droplets } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "Daily Steps",
      value: "6,432",
      goal: "10,000",
      icon: Footprints,
      color: "text-blue-500",
    },
    {
      title: "Sleep",
      value: "7.2h",
      goal: "8h",
      icon: Moon,
      color: "text-purple-500",
    },
    {
      title: "Active Minutes",
      value: "45m",
      goal: "60m",
      icon: Activity,
      color: "text-green-500",
    },
    {
      title: "Water Intake",
      value: "1.5L",
      goal: "2.5L",
      icon: Droplets,
      color: "text-cyan-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Wellness Overview</h1>
        <p className="text-muted-foreground">
          Real-time synchronization of your clinical metrics.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">Goal: {stat.goal}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Health Insights</CardTitle>
        </CardHeader>
        <CardContent className="h-[200px] flex items-center justify-center border-2 border-dashed rounded-lg">
          Charts/Visualizations for /api/patient/dashboard
        </CardContent>
      </Card>
    </div>
  );
}
