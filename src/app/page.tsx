import Link from "next/link";
import { Radio, TrendingUp, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Radio className="h-6 w-6" />
            <span className="text-xl font-bold">Signal Studio</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="mx-auto max-w-3xl text-5xl font-bold tracking-tight">
            Creator platform with integrated{" "}
            <span className="text-primary/80">market research</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Understand what your audience wants before you create. Signal Studio
            combines Reddit trend analysis with a full creator toolkit.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/sign-up">
              <Button size="lg">Start Free</Button>
            </Link>
            <Link href="/sign-in">
              <Button size="lg" variant="outline">
                Sign In
              </Button>
            </Link>
          </div>
        </section>

        <section className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-3">
          <div className="rounded-lg border p-6">
            <TrendingUp className="mb-4 h-10 w-10 text-chart-1" />
            <h3 className="mb-2 text-lg font-semibold">Trend Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Monitor subreddits for emerging themes, sentiment shifts, and
              content demand signals in real time.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <Sparkles className="mb-4 h-10 w-10 text-chart-2" />
            <h3 className="mb-2 text-lg font-semibold">Creator Studio</h3>
            <p className="text-sm text-muted-foreground">
              Build your content library with voice, video, text, and image
              assets — all managed in one place.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <Users className="mb-4 h-10 w-10 text-chart-4" />
            <h3 className="mb-2 text-lg font-semibold">Subscriber Growth</h3>
            <p className="text-sm text-muted-foreground">
              Track and manage your inbound subscribers. Understand who your
              audience is and how it grows.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Signal Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
