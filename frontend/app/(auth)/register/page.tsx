import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import AuthBackgroundShape from "@/assets/svg/auth-background-shape";
import RegisterForm from "@/components/ui/register-form";

const RegisterPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      {/* Background decoration stays */}
      <AuthBackgroundShape className="absolute" />

      <Card className="relative z-10 w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl">Create Account</CardTitle>
          <CardDescription>Fill in the details to get started</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <RegisterForm />

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a href="/login" className="hover:underline">
              Sign in
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
