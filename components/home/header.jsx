"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { useAuth } from "../../hooks/useAuth";

export function Header() {
  const { user } = useAuth();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              T
            </div>
            <span className="text-xl font-bold text-foreground">
              TicketFlow
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-primary hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-primary hover:text-foreground transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-primary hover:text-foreground transition-colors"
            >
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {user ? (
              <Link
                href="/dashboard"
                className={cn(buttonVariants(), "hidden sm:inline-flex")}
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "hidden sm:inline-flex"
                  )}
                >
                  Login
                </Link>
                <Link href="/register" className={cn(buttonVariants())}>
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
