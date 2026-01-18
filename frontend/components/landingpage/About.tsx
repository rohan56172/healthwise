import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-linear-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Health Wise
              </h2>

              <p className="text-xl text-muted-foreground mt-4 leading-relaxed">
                Health Wise is a high-performance wellness ecosystem engineered
                to facilitate seamless integration between daily patient health
                data and clinical oversight. Our platform optimizes preventive
                care compliance through automated reminders and real-time metric
                visualization, enabling data-driven decisions for both patients
                and healthcare providers. By leveraging secure, role-based
                access and HIPAA-aligned architecture, we transform traditional
                reactive healthcare into a proactive preventive model that
                improves overall patient health outcomes.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
