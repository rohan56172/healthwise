"use client";

import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

interface RouteProps {
  href: string;
  label: string;
}

// Updated routes for Health Wise application
const routeList: RouteProps[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/profileedit", label: "Profile Edit" },
  { href: "/goalsetter", label: "Goal Setter" },
  { href: "/messages", label: "Messages" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 w-screen px-4 flex justify-between items-center">
          {/* Brand */}
          <NavigationMenuItem className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl flex items-center">
              <div className="h-5 w-6 mr-2 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-primary" />
              Health Wise
            </Link>
          </NavigationMenuItem>

          {/* Desktop Navigation (Main Application Tabs) */}
          <nav className="hidden md:flex gap-2">
            {routeList.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={buttonVariants({ variant: "ghost" })}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions (Login/Register & Dark Mode Toggle) */}
          <div className="hidden md:flex items-center gap-2">
            <ModeToggle />
            <Link
              href="/login"
              className={buttonVariants({ variant: "ghost" })}
            >
              Login
            </Link>
            <Link
              href="/register"
              className={buttonVariants({ variant: "default" })}
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className={buttonVariants({ variant: "ghost", size: "icon" })}
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </button>
              </SheetTrigger>

              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl text-left">
                    Health Wise
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-6 flex flex-col items-start gap-4">
                  {routeList.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                  <hr className="w-full border-t" />
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className={`w-full ${buttonVariants({ variant: "default" })}`}
                  >
                    Register
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
