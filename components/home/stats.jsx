export function Stats() {
  const stats = [
    {
      value: "10,000+",
      label: "Teams using TicketFlow",
    },
    {
      value: "99.9%",
      label: "Uptime guarantee",
    },
    {
      value: "2.5x",
      label: "Faster resolution time",
    },
    {
      value: "24/7",
      label: "Customer support",
    },
  ]

  return (
    <section className="border-y border-border bg-card/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
