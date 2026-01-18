"use client";

import { useEffect, useState, useContext } from "react";
// Replace with your actual AuthContext path
// import { AuthContext } from "@/context/AuthContext";
import api from "@/lib/apiaxios"; // Adjust path to your axios instance
import { Footprints, Moon, Flame, RefreshCw, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // Or your preferred toast library

export default function DashboardPage() {
  // Mocking user for now if Context isn't fully ready
  // const { user } = useContext(AuthContext);
  const user = { name: "Patient" };

  const [today, setToday] = useState({ steps: 0, sleep: 0 });
  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    setLoading(true);
    try {
      // Points to your NEXT_PUBLIC_API_URL/api/patient/dashboard
      const { data } = await api.get("/patient/dashboard");

      if (data && (data.steps !== undefined || data.sleep !== undefined)) {
        setToday(data);
      } else if (Array.isArray(data) && data.length > 0) {
        setToday(data[0]);
      } else {
        setToday({ steps: 0, sleep: 0 });
      }
    } catch (err) {
      console.error(err);
      toast.error("Could not sync clinical data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  // Clinical Metric Calculations
  const calories = (today.steps * 0.04).toFixed(0);
  const activeTime = (today.steps * 0.008).toFixed(0);
  const stepGoal = 6000;
  const stepPercentage = Math.min((today.steps / stepGoal) * 100, 100);

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, {user?.name} 👋
          </h1>
          <p className="text-muted-foreground">
            Here is your preventive health and activity summary for today.
          </p>
        </div>
        <Button
          onClick={fetchDashboard}
          disabled={loading}
          variant="outline"
          className="w-fit"
        >
          <RefreshCw
            className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`}
          />
          Sync Data
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Steps Card */}
        <Card className="border-none shadow-sm bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Steps</CardTitle>
            <div className="bg-green-500/10 p-2 rounded-full">
              <Footprints className="h-5 w-5 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="h-20 flex items-center animate-pulse text-muted-foreground">
                Syncing...
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <span className="text-4xl font-bold">{today.steps}</span>
                  <span className="text-muted-foreground ml-2">
                    / {stepGoal}
                  </span>
                </div>
                <Progress
                  value={stepPercentage}
                  className="h-2 bg-background"
                />
                <p className="text-xs text-muted-foreground italic">
                  {stepPercentage === 100
                    ? "Goal achieved!"
                    : `${stepGoal - today.steps} steps remaining`}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Sleep Card */}
        <Card className="border-none shadow-sm bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">
              Sleep Analysis
            </CardTitle>
            <div className="bg-purple-500/10 p-2 rounded-full">
              <Moon className="h-5 w-5 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="h-20 flex items-center animate-pulse text-muted-foreground">
                Syncing...
              </div>
            ) : (
              <div className="space-y-2">
                <div>
                  <span className="text-4xl font-bold">{today.sleep}</span>
                  <span className="text-muted-foreground ml-1 text-lg">
                    hrs
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Clinical deep sleep duration detected.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Energy Card */}
        <Card className="border-none shadow-sm bg-muted/50 md:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Energy Burn</CardTitle>
            <div className="bg-orange-500/10 p-2 rounded-full">
              <Flame className="h-5 w-5 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="h-20 flex items-center animate-pulse text-muted-foreground">
                Syncing...
              </div>
            ) : (
              <div className="space-y-2">
                <div>
                  <span className="text-4xl font-bold">{calories}</span>
                  <span className="text-muted-foreground ml-1 text-lg">
                    kcal
                  </span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Activity className="mr-1 h-4 w-4 text-orange-500" />~
                  {activeTime} minutes active time
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Clinical Status / Visualizer Placeholder */}
      <Card className="border-dashed bg-transparent border-2">
        <CardContent className="h-[250px] flex flex-col items-center justify-center text-muted-foreground gap-2">
          <Activity className="h-10 w-10 opacity-20" />
          <p>
            Clinical Trend Visualization will appear here once more data is
            synced.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
