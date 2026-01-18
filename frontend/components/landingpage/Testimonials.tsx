import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.pravatar.cc/150?u=patient1",
    name: "Sarah Jenkins",
    userName: "Patient",
    comment:
      "Health Wise transformed how I view my checkups. The preventive care reminders ensure I never miss a screening, making my health journey feel proactive rather than reactive.",
  },
  {
    image: "https://i.pravatar.cc/150?u=doctor1",
    name: "Dr. Robert Chen",
    userName: "General Practitioner",
    comment:
      "The Provider View is a game-changer. I can monitor my patients' wellness goals and compliance status in real-time, allowing for much more precise clinical interventions.",
  },
  {
    image: "https://i.pravatar.cc/150?u=patient2",
    name: "Michael Ross",
    userName: "Patient",
    comment:
      "I love the Goal Setter! Tracking my daily steps and sleep cycles alongside my medical history gives me a complete picture of my health that I never had before.",
  },
  {
    image: "https://i.pravatar.cc/150?u=doctor2",
    name: "Dr. Elena Rodriguez",
    userName: "Cardiologist",
    comment:
      "Secure data integration is vital. Knowing that patient metrics are protected by JWT-based security allows me to focus entirely on improving patient health outcomes.",
  },
  {
    image: "https://i.pravatar.cc/150?u=patient3",
    name: "David Thompson",
    userName: "Patient",
    comment:
      "The interface is incredibly intuitive. Being able to edit my profile and see my health tip of the day keeps me engaged with my wellness goals every single morning.",
  },
  {
    image: "https://i.pravatar.cc/150?u=doctor3",
    name: "Dr. Lisa Wang",
    userName: "Preventive Specialist",
    comment:
      "Health Wise bridges the gap between daily lifestyle habits and clinical oversight. It's the most comprehensive preventive care portal I've used in my practice.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-linear-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Clinicians & Patients{" "}
        </span>
        Trust Health Wise
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Join a growing community committed to proactive wellness tracking and
        certified clinical compliance.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              // FIXED: Changed key from userName to name to ensure uniqueness
              key={name}
              className="max-w-md overflow-hidden bg-muted/50 border-none shadow-sm"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt={name} src={image} />
                  <AvatarFallback>
                    {name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {userName}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="text-muted-foreground leading-relaxed italic">
                "{comment}"
              </CardContent>
            </Card>
          ),
        )}
      </div>
    </section>
  );
};
