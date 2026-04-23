'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart3,
  Radio,
  Sparkles,
  Library,
  Users,
  Settings,
  Search,
  TrendingUp,
  MessageSquare,
  Mic,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const researchLinks = [
  { href: '/dashboard/research', label: 'Overview', icon: Search },
  { href: '/dashboard/research/trending', label: 'Trending Themes', icon: TrendingUp },
  { href: '/dashboard/research/feed', label: 'Post Feed', icon: MessageSquare },
  { href: '/dashboard/research/demand', label: 'Demand Signals', icon: Radio },
];

const studioLinks = [
  { href: '/dashboard/studio', label: 'Content Library', icon: Library },
  { href: '/dashboard/studio/create', label: 'Create Content', icon: Sparkles },
  { href: '/dashboard/studio/voice', label: 'Voice Baseline', icon: Mic },
];

const managementLinks = [
  { href: '/dashboard/subscribers', label: 'Subscribers', icon: Users },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-r bg-sidebar">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard/research" className="flex items-center gap-2 font-semibold">
          <Radio className="h-5 w-5 text-primary" />
          <span>Signal Studio</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Research
        </p>
        {researchLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
              pathname === link.href
                ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                : 'text-sidebar-foreground/70',
            )}
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </Link>
        ))}

        <Separator className="my-3" />

        <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Creator Studio
        </p>
        {studioLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
              pathname === link.href
                ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                : 'text-sidebar-foreground/70',
            )}
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </Link>
        ))}

        <Separator className="my-3" />

        <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Management
        </p>
        {managementLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
              pathname === link.href
                ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                : 'text-sidebar-foreground/70',
            )}
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
