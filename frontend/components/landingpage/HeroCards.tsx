import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Activity, Bell, ShieldCheck } from "lucide-react";
import { IconStethoscope } from "@tabler/icons-react";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Preventive Care Alert Card */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-l-4 border-l-primary">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="bg-primary/10 p-2 rounded-full">
            <Bell className="text-primary w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <CardTitle className="text-lg">Preventive Alert</CardTitle>
            <CardDescription>System Notification</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-sm">
          Your annual metabolic screening is due on **Jan 23rd, 2026**. Please
          schedule a visit to remain compliant.
        </CardContent>
      </Card>

      {/* Healthcare Provider Card */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex flex-col items-center pb-2 gap-2">
          <div className="absolute -top-12 w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
            <IconStethoscope size={48} />
          </div>
          <CardTitle className="text-center mt-12">Provider View</CardTitle>
          <CardDescription className="font-normal text-primary">
            Clinical Oversight Module
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-2 text-sm">
          <p>
            Monitor patient wellness trajectories, identify goal gaps, and
            facilitate timely clinical interventions.
          </p>
        </CardContent>
        <CardFooter>
          <Badge variant="outline" className="text-primary border-primary">
            HIPAA Compliant
          </Badge>
        </CardFooter>
      </Card>

      {/* Wellness Goal Tracker Card */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Daily Goals
            <Activity className="text-green-500" />
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">60%</span>
            <span className="text-muted-foreground"> Completed</span>
          </div>
          <CardDescription>
            Real-time synchronization with patient wearable data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { label: "Steps: 6,000 / 10k", status: true },
              { label: "Sleep: 7.5 Hours", status: true },
              { label: "Checkup Scheduled", status: false },
            ].map((goal, idx) => (
              <span key={idx} className="flex items-center text-sm">
                <Check
                  className={
                    goal.status ? "text-green-500" : "text-muted-foreground"
                  }
                  size={16}
                />
                <span className="ml-2">{goal.label}</span>
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Compliance Card */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row gap-4 items-start">
          <div className="mt-1 bg-green-500/10 p-2 rounded-2xl">
            <ShieldCheck className="text-green-600" />
          </div>
          <div>
            <CardTitle className="text-md">Data Integrity</CardTitle>
            <CardDescription className="text-sm mt-2">
              All transactions are protected via JWT-based session management
              and end-to-end encryption.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
