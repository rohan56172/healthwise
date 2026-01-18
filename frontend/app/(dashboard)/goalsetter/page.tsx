import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GoalSetterPage() {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Log Daily Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Steps Walked</label>
            <Input type="number" placeholder="Enter steps" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Sleep Duration (Hours)
            </label>
            <Input type="number" step="0.5" placeholder="Enter hours" />
          </div>
          <Button className="w-full">Sync with Dashboard</Button>
        </CardContent>
      </Card>
    </div>
  );
}
