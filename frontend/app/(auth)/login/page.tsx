import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import AuthBackgroundShape from "@/assets/svg/auth-background-shape";
import LoginForm from "@/components/ui/login-form";

const LoginPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      {/* Background decoration stays */}
      <AuthBackgroundShape className="absolute" />

      <Card className="relative z-10 w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>Enter your credentials to continue</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <LoginForm />

          <p className="text-center text-sm text-muted-foreground">
            New here?{" "}
            <a href="/register" className="hover:underline">
              Create an account
            </a>
          </p>

          <div className="flex items-center gap-3">
            <Separator />
            <span className="text-sm text-muted-foreground">or</span>
            <Separator />
          </div>

          <Button variant="outline" className="w-full">
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
