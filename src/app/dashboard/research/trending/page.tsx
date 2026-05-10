import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';

const mockKeywords = [
  { keyword: 'custom content', frequency: 47, sentiment: 0.6, change: 12 },
  { keyword: 'voice request', frequency: 32, sentiment: 0.4, change: 8 },
  { keyword: 'subscription', frequency: 28, sentiment: 0.2, change: -3 },
  { keyword: 'exclusive', frequency: 24, sentiment: 0.5, change: 15 },
  { keyword: 'pricing', frequency: 19, sentiment: -0.1, change: 5 },
];

export default function TrendingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Trending Themes</h1>
        <p className="text-muted-foreground">
          Keyword clusters and frequency analysis across your tracked subreddits.
        </p>
      </div>

      <Tabs defaultValue="weekly">
        <TabsList>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Keywords</CardTitle>
              <CardDescription>Most frequent keywords this week across all tracked subreddits.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockKeywords.map((kw, i) => (
                  <div key={kw.keyword} className="flex items-center justify-between rounded-md border p-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-medium">{kw.keyword}</p>
                        <p className="text-xs text-muted-foreground">{kw.frequency} mentions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={kw.sentiment > 0.3 ? 'default' : kw.sentiment < 0 ? 'destructive' : 'secondary'}>
                        {kw.sentiment > 0 ? '+' : ''}{kw.sentiment.toFixed(1)}
                      </Badge>
                      <span className={`text-xs ${kw.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {kw.change > 0 ? '↑' : '↓'} {Math.abs(kw.change)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequency Chart</CardTitle>
              <CardDescription>Keyword frequency distribution — chart placeholder.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-64 items-center justify-center rounded-md border border-dashed">
                <div className="text-center text-muted-foreground">
                  <TrendingUp className="mx-auto mb-2 h-8 w-8" />
                  <p className="text-sm">Chart visualization will render here</p>
                  <p className="text-xs">(Recharts or D3 integration pending)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="daily">
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              Daily trend data will appear here once the scraper is running.
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly">
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              Monthly trend data will appear here once the scraper is running.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
