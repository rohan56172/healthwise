import { Button, buttonVariants } from "@/components/ui/button";
import { HeroCards } from "./HeroCards";
import { IconStethoscope } from "@tabler/icons-react"; // Using Tabler icons as per your Sidebar

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-linear-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Proactive
            </span>{" "}
            Wellness
          </h1>{" "}
          meets{" "}
          <h2 className="inline">
            <span className="inline bg-linear-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Clinical
            </span>{" "}
            Care
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Empowering patients through real-time health tracking and ensuring
          clinical compliance with automated preventive care reminders.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Patient Portal</Button>

          <a
            rel="noreferrer noopener"
            href="/login"
            className={`w-full md:w-2/5 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Provider Access
            <IconStethoscope className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
