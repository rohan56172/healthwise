import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MessagesPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Clinical Messaging</h1>
        <Badge variant="outline">Connected to Provider Portal</Badge>
      </div>

      <Card className="flex-1 overflow-hidden flex flex-col">
        <CardContent className="flex-1 p-4 overflow-y-auto space-y-4">
          <div className="bg-muted p-3 rounded-lg max-w-[80%]">
            <p className="text-sm font-semibold">Dr. Robert Chen</p>
            <p className="text-sm">
              I noticed your sleep metrics dropped this week. How are you
              feeling?
            </p>
          </div>
          <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%] self-end ml-auto">
            <p className="text-sm">
              I've been a bit stressed with work, but trying to improve it.
            </p>
          </div>
        </CardContent>
        <div className="p-4 border-t flex gap-2">
          <Input placeholder="Type a secure message..." />
          <Button>Send</Button>
        </div>
      </Card>
    </div>
  );
}
