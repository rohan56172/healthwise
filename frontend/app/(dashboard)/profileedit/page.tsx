"use client";

import { useEffect, useState } from "react";
import api from "@/lib/apiaxios";
import { toast } from "sonner";
import {
  Save,
  X,
  Camera,
  User,
  Mail,
  AlertCircle,
  Pill,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    allergies: "",
    medications: "",
    password: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data } = await api.get("/patient/profile");

      if (data) {
        setProfile(data);
        setFormData({
          name: data.name || "",
          allergies: data.profile?.allergies || "",
          medications: data.profile?.medications || "",
          password: "",
        });
      }
    } catch (err) {
      toast.error("Failed to load clinical profile");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Updating clinical records...");

    try {
      const { data } = await api.put("/patient/profileUpdate", {
        name: formData.name,
        allergies: formData.allergies,
        medications: formData.medications,
        ...(formData.password && { password: formData.password }),
      });

      setProfile({
        ...profile,
        name: data.user.name,
        profile: data.user.profile,
      });

      setIsEditing(false);
      setFormData({ ...formData, password: "" });
      toast.success("Profile updated successfully", { id: toastId });
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Update failed", {
        id: toastId,
      });
    }
  };

  if (loading || !profile) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="text-muted-foreground font-medium">
            Syncing Clinical Profile...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Patient Profile</h1>
          <p className="text-muted-foreground">
            Manage your clinical identity and medical history.
          </p>
        </div>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)} className="gap-2">
            <User className="h-4 w-4" /> Edit Profile
          </Button>
        ) : (
          <Button
            variant="destructive"
            onClick={() => {
              setIsEditing(false);
              fetchProfile();
            }}
            className="gap-2"
          >
            <X className="h-4 w-4" /> Cancel
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Avatar */}
        <Card className="lg:col-span-1 border-none bg-muted/30 shadow-sm">
          <CardContent className="pt-8 flex flex-col items-center text-center">
            <div className="relative group">
              <div className="h-32 w-32 rounded-full bg-primary flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                {profile.name ? profile.name.charAt(0).toUpperCase() : "U"}
              </div>
              {isEditing && (
                <div className="absolute bottom-1 right-1 bg-background p-2 rounded-full shadow-md border cursor-pointer hover:bg-muted transition-colors">
                  <Camera className="h-4 w-4 text-muted-foreground" />
                </div>
              )}
            </div>
            <h2 className="mt-4 text-xl font-bold">{profile.name}</h2>
            <Badge
              variant="outline"
              className="mt-2 uppercase tracking-widest text-[10px]"
            >
              {profile.role || "PATIENT"}
            </Badge>
          </CardContent>
        </Card>

        {/* Right Column: Content */}
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader>
            <CardTitle>
              {isEditing ? "Update Records" : "Identity & Medicals"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!isEditing ? (
              /* ============ VIEW MODE ============ */
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      Full Name
                    </p>
                    <div className="flex items-center gap-2 text-lg font-medium">
                      <User className="h-4 w-4 text-primary" /> {profile.name}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      Email Address
                    </p>
                    <div className="flex items-center gap-2 text-lg font-medium">
                      <Mail className="h-4 w-4 text-primary" /> {profile.email}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <h3 className="font-semibold text-sm">Medical Information</h3>

                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">
                      Known Allergies
                    </p>
                    <div className="p-4 rounded-lg bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-500/20 flex gap-3 italic">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <span>
                        {profile.profile?.allergies || "No allergies recorded."}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">
                      Current Medications
                    </p>
                    <div className="p-4 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 flex gap-3 italic">
                      <Pill className="h-5 w-5 shrink-0" />
                      <span>
                        {profile.profile?.medications ||
                          "No medications recorded."}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ============ EDIT MODE ============ */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Email (Account ID)
                    </label>
                    <Input
                      value={profile.email}
                      disabled
                      className="bg-muted opacity-60"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Update Password</label>
                  <Input
                    name="password"
                    type="password"
                    placeholder="Leave blank to keep current"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-4 pt-6 border-t mt-6">
                  <h3 className="font-semibold text-sm">Clinical Details</h3>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-orange-600">
                      Allergies
                    </label>
                    <Textarea
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleChange}
                      className="resize-none h-20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-600">
                      Current Medications
                    </label>
                    <Textarea
                      name="medications"
                      value={formData.medications}
                      onChange={handleChange}
                      className="resize-none h-20"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full gap-2 mt-4">
                  <Save className="h-4 w-4" /> Save Clinical Changes
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
