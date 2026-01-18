"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <form className="space-y-4">
      {/* Email */}
      <div className="space-y-1">
        <Label htmlFor="email">Email address*</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Password */}
      <div className="space-y-1">
        <Label htmlFor="password">Password*</Label>
        <div className="relative">
          <Input
            id="password"
            type={isVisible ? "text" : "password"}
            placeholder="••••••••"
            className="pr-9"
            required
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(!isVisible)}
            className="absolute right-0 top-0 h-full"
          >
            {isVisible ? <EyeOffIcon /> : <EyeIcon />}
          </Button>
        </div>
      </div>

      {/* Remember Me */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>

        <a href="#" className="text-sm hover:underline">
          Forgot password?
        </a>
      </div>

      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
