import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProfileEditPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Clinical Profile</CardTitle>
          <CardDescription>
            Update your personal and medical information for provider review.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <Input placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="john@example.com" disabled />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Emergency Contact</label>
            <Input placeholder="+1 (555) 000-0000" />
          </div>
          <Button className="w-full">Save Profile Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
