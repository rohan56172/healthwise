"use client";

import React from "react";
import {
  Inbox,
  Search,
  ShieldCheck,
  Clock,
  Star,
  Archive,
  AlertCircle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MessagesPage = () => {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-4">
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Clinical Inbox</h1>
          <p className="text-sm text-muted-foreground">
            Secure channel for medical updates and provider communication.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge
            variant="outline"
            className="bg-emerald-500/10 text-emerald-600 border-emerald-200 py-1 px-3 flex gap-2"
          >
            <ShieldCheck className="h-4 w-4" />
            HIPAA Secure
          </Badge>
          <Button size="sm">New Message</Button>
        </div>
      </div>

      {/* Main Inbox Interface */}
      <Card className="flex-1 overflow-hidden flex bg-background border-muted/60 shadow-lg">
        {/* Sidebar - Folders & Filters */}
        <div className="w-64 border-r bg-muted/20 hidden lg:flex flex-col p-4 space-y-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search clinical notes..."
              className="pl-9 h-9 bg-background"
            />
          </div>

          <div className="space-y-1">
            <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-2 mb-2">
              Folders
            </h3>
            <SidebarItem
              icon={<Inbox className="h-4 w-4" />}
              label="All Messages"
              active
              count={0}
            />
            <SidebarItem icon={<Clock className="h-4 w-4" />} label="Pending" />
            <SidebarItem icon={<Star className="h-4 w-4" />} label="Flagged" />
            <SidebarItem
              icon={<Archive className="h-4 w-4" />}
              label="Archived"
            />
          </div>

          <div className="space-y-1">
            <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-2 mb-2">
              Priority
            </h3>
            <SidebarItem
              icon={<AlertCircle className="h-4 w-4 text-orange-500" />}
              label="Clinical Alerts"
            />
          </div>
        </div>

        {/* Main Content Area - Empty State */}
        <div className="flex-1 flex flex-col items-center justify-center bg-background p-8">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative bg-muted/30 p-8 rounded-full border border-dashed border-muted-foreground/30">
              <Inbox className="h-16 w-16 text-muted-foreground/30" />
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-2">Your inbox is clean</h2>
          <p className="text-muted-foreground text-center max-w-sm text-sm leading-relaxed mb-8">
            When your healthcare provider sends clinical trial updates, lab
            results, or session notes, they will appear here securely.
          </p>

          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            Browse Wellness FAQs
          </Button>
        </div>
      </Card>

      {/* Emergency Disclaimer */}
      <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground/70 bg-muted/20 py-2 rounded-md">
        <AlertCircle className="h-3 w-3" />
        For medical emergencies, please dial your local emergency number (e.g.,
        911) immediately.
      </div>
    </div>
  );
};

// Sub-component for Sidebar Items
const SidebarItem = ({ icon, label, active = false, count }: any) => (
  <button
    className={`
    w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors
    ${active ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted text-muted-foreground hover:text-foreground"}
  `}
  >
    <div className="flex items-center gap-3">
      {icon}
      {label}
    </div>
    {count !== undefined && (
      <span
        className={`text-[10px] ${active ? "text-primary-foreground/80" : "text-muted-foreground"}`}
      >
        {count}
      </span>
    )}
  </button>
);

export default MessagesPage;
