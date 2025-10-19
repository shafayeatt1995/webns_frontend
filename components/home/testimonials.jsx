import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Support Manager at TechCorp",
      content: "TicketFlow reduced our average resolution time by 60%. Our team loves the intuitive interface.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "CEO at StartupHub",
      content: "The best support ticket system we've used. The automation features alone save us hours every week.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Lead at CloudServices",
      content: "Excellent customer support and the analytics dashboard gives us real insights into our performance.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Loved by support teams worldwide</h2>
          <p className="text-lg text-muted-foreground">See what our customers have to say about TicketFlow.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border border-border">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4 text-foreground">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
