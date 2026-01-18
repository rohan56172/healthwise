"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconBrandTabler,
  IconUserEdit,
  IconTargetArrow,
  IconMessageCircle,
  IconLogout,
  IconUserCircle,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  // Links updated for Health Wise requirements
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile Edit",
      href: "/profileedit",
      icon: (
        <IconUserEdit className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Goal Setter",
      href: "/goalsetter",
      icon: (
        <IconTargetArrow className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Messages",
      href: "/messages",
      icon: (
        <IconMessageCircle className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "/login",
      icon: (
        <IconLogout className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  return (
    <div
      className={cn(
        "flex w-full flex-1 flex-col overflow-hidden border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen",
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            {/* Replaced Image with IconUserCircle */}
            <SidebarLink
              link={{
                label: "User Profile",
                href: "/profileedit",
                icon: (
                  <IconUserCircle className="h-7 w-7 shrink-0 text-neutral-700 dark:text-neutral-200" />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Content Area */}
      <div className="flex flex-1 overflow-y-auto">
        <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-tl-2xl border border-neutral-200 bg-white p-4 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
          {children}
        </div>
      </div>
    </div>
  );
}

// Branding Components
export const Logo = () => (
  <Link
    href="/"
    className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black dark:text-white"
  >
    <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium whitespace-pre"
    >
      Health Wise
    </motion.span>
  </Link>
);

export const LogoIcon = () => (
  <Link
    href="/"
    className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black dark:text-white"
  >
    <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
  </Link>
);
