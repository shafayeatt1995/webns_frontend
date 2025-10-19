import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Introducing TicketFlow Pro
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Support tickets that actually work
          </h1>

          <p className="mt-6 text-balance text-lg text-muted-foreground">
            Streamline your customer support with intelligent ticket management.
            Track, prioritize, and resolve issues faster than ever before.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 rounded-xl border border-border bg-card p-8 shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">📊</div>
                <p className="text-sm text-muted-foreground">
                  Dashboard Preview
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
