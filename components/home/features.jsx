import { Card } from "@/components/ui/card"
import { CheckCircle2, Zap, Users, BarChart3, Lock, Bell } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Smart Ticket Routing",
      description: "Automatically assign tickets to the right team members based on expertise and workload.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Real-time updates and instant notifications keep your team in sync.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in comments, mentions, and internal notes for seamless teamwork.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track metrics that matter: resolution time, satisfaction scores, and team performance.",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption and role-based access control.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Customizable alerts ensure nothing falls through the cracks.",
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything you need to support your customers
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to make support teams more efficient and customers happier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 border border-border hover:border-primary/50 transition-colors">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
