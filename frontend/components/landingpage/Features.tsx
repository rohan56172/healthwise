import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    title: "Personalized Wellness Tracking",
    description:
      "Precision monitoring of daily wellness metrics including step counts, sleep patterns, and caloric expenditure to maintain goal consistency.",
  },
  {
    title: "Automated Clinical Reminders",
    description:
      "Strategic scheduling for preventive screenings, annual checkups, and vaccinations based on individualized patient health profiles.",
  },
  {
    title: "Healthcare Provider Oversight",
    description:
      "A dedicated interface for clinicians to monitor patient compliance, track wellness milestones, and intervene in preventive care gaps.",
  },
];

const featureList: string[] = [
  "JWT Authentication",
  "HIPAA Aligned",
  "Role-Based Access",
  "Audit Logging",
  "Real-time Analytics",
  "Wellness Dashboards",
  "Secure Data Storage",
  "Mobile Responsive",
  "Consent Management",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Comprehensive{" "}
        <span className="bg-linear-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Clinical Features
        </span>
      </h2>

      {/* Feature tags */}
      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature) => (
          <Badge key={feature} variant="secondary" className="text-sm">
            {feature}
          </Badge>
        ))}
      </div>

      {/* Feature cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description }) => (
          <Card key={title} className="bg-muted/50 border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">{title}</CardTitle>
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
