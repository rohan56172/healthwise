import { Button } from "@/components/ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Consolidate Your
            <span className="bg-linear-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Health Metrics & Compliance{" "}
            </span>
            In One Secure Interface
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Empower your healthcare journey with real-time wellness tracking and
            automated preventive care reminders. Experience a unified platform
            engineered for clinical precision and data-driven wellness.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Get Started Now</Button>
          <Button variant="outline" className="w-full md:w-auto">
            Explore Provider Tools
          </Button>
        </div>
      </div>
    </section>
  );
};
