"use client";

import { useState } from "react";
import api from "@/lib/apiaxios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Save, Footprints, Moon, Target, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const WellnessGoals = () => {
  const [formData, setFormData] = useState({ steps: "", sleep: "" });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Saving your clinical activity...");

    try {
      // 1. Send data to backend (POST /api/patient/goal)
      await api.post("/patient/goal", {
        steps: Number(formData.steps),
        sleep: Number(formData.sleep),
      });

      toast.success("Activity updated successfully!", { id: toastId });

      // Clear form
      setFormData({ steps: "", sleep: "" });

      // 2. Redirect to Dashboard in Next.js
      router.push("/dashboard");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to save data", {
        id: toastId,
      });
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Log Daily Activity
        </h1>
        <p className="text-muted-foreground">
          Your data helps your healthcare provider monitor your preventive
          health progress.
        </p>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="border-b bg-muted/20">
          <div className="flex items-center gap-2">
            <Target className="text-primary h-5 w-5" />
            <CardTitle>Daily Wellness Entry</CardTitle>
          </div>
          <CardDescription>
            Enter your stats below. These values will synchronize with your
            clinical dashboard.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Steps Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <Footprints className="h-4 w-4 text-green-600" />
                Steps Walked
              </label>
              <Input
                type="number"
                placeholder="e.g. 8000"
                value={formData.steps}
                onChange={(e) =>
                  setFormData({ ...formData, steps: e.target.value })
                }
                required
                min="0"
                className="h-12 text-lg"
              />
            </div>

            {/* Sleep Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <Moon className="h-4 w-4 text-purple-600" />
                Hours of Sleep
              </label>
              <Input
                type="number"
                placeholder="e.g. 7.5"
                step="0.1"
                value={formData.sleep}
                onChange={(e) =>
                  setFormData({ ...formData, sleep: e.target.value })
                }
                required
                min="0"
                className="h-12 text-lg"
              />
            </div>

            <Button type="submit" className="w-full h-12 text-base gap-2">
              <Save className="h-5 w-5" />
              Save & Update Dashboard
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Info Box */}
      <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-400">
        <History className="h-5 w-5 mt-0.5 shrink-0" />
        <div className="text-sm">
          <p className="font-semibold">Note on Data Sync</p>
          <p className="opacity-80">
            Saving this form will trigger a recalculation of your daily burned
            calories and active minutes on your primary dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WellnessGoals;
