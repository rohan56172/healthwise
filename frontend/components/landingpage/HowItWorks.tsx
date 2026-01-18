import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
}

const steps: FeatureProps[] = [
  {
    title: "Secure Onboarding",
    description:
      "Register as a Patient or Provider with JWT-based authentication and role-based access control to ensure data privacy.",
  },
  {
    title: "Metric Integration",
    description:
      "Synchronize your daily wellness goals, including step counts and sleep cycles, directly into your personalized dashboard.",
  },
  {
    title: "Provider Connectivity",
    description:
      "Seamlessly link with healthcare providers who monitor your compliance status and progress through a dedicated clinician portal.",
  },
  {
    title: "Preventive Action",
    description:
      "Receive automated reminders for upcoming checkups and vaccinations to transition from reactive to proactive care.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        How It{" "}
        <span className="bg-linear-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        - A Seamless Healthcare Journey
      </h2>

      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Health Wise streamlines the path from daily activity tracking to
        certified clinical oversight in four sophisticated steps.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map(({ title, description }, index) => (
          <Card
            key={title}
            className="bg-muted/50 border-none relative overflow-hidden"
          >
            <CardHeader>
              <div className="text-primary font-bold text-5xl opacity-20 absolute -right-2 -top-2">
                0{index + 1}
              </div>
              <CardTitle className="text-center text-xl">{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground leading-relaxed">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
