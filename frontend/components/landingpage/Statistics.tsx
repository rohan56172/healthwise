export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "100%",
      description: "Data Encryption",
    },
    {
      quantity: "24/7",
      description: "Wellness Monitoring",
    },
    {
      quantity: "99.9%",
      description: "System Uptime",
    },
    {
      quantity: "Role-Based",
      description: "Secure Access",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {quantity}
            </h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
