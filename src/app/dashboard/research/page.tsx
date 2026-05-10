import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SubredditSelector } from '@/components/research/subreddit-selector';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, MessageSquare, Radio, BarChart3 } from 'lucide-react';

const stats = [
  { label: 'Tracked Subreddits', value: '5', icon: Radio, change: null },
  { label: 'Posts Analyzed', value: '0', icon: MessageSquare, change: null },
  { label: 'Trending Keywords', value: '0', icon: TrendingUp, change: null },
  { label: 'Demand Signals', value: '0', icon: BarChart3, change: null },
];

export default function ResearchOverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Reddit Research</h1>
        <p className="text-muted-foreground">
          Monitor subreddits for trends, sentiment, and content demand signals.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              {stat.change && (
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tracked Subreddits</CardTitle>
          <CardDescription>
            Select subreddits to monitor for trend analysis and demand signals.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SubredditSelector />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest posts and trends from your tracked subreddits.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Radio className="mb-4 h-12 w-12 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">
              No data yet. Configure your subreddits and run the first scrape to see activity here.
            </p>
            <Badge variant="outline" className="mt-3">
              Background scraper not yet configured
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
