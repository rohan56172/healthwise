"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <form className="space-y-4">
      {/* Name */}
      <div className="space-y-1">
        <Label htmlFor="name">Name*</Label>
        <Input id="name" placeholder="Your full name" required />
      </div>

      {/* Email */}
      <div className="space-y-1">
        <Label htmlFor="email">Email*</Label>
        <Input id="email" type="email" placeholder="Your email" required />
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

      {/* Role */}
      <div className="space-y-1">
        <Label>Role*</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="student">Patient</SelectItem>
            <SelectItem value="provider">Provider</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full">
        Create Account
      </Button>
    </form>
  );
};

export default RegisterForm;
