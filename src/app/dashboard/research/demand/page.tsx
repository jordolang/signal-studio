import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Radio, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mockSignals = [
  {
    type: 'Voice Content',
    description: 'Users frequently request custom voice recordings and ASMR-style audio content.',
    frequency: 34,
    subreddits: ['FetishBuyersCommunity', 'Fetishwantads'],
  },
  {
    type: 'Video Custom',
    description: 'Demand for personalized short-form video content with specific scenarios.',
    frequency: 28,
    subreddits: ['FetishHaven', 'fetish'],
  },
  {
    type: 'Text Stories',
    description: 'Interest in serialized written content and interactive fiction.',
    frequency: 19,
    subreddits: ['psychologyofsex', 'fetish'],
  },
  {
    type: 'Image Sets',
    description: 'Themed photo collections and custom image requests.',
    frequency: 15,
    subreddits: ['FetishBuyersCommunity', 'FetishHaven'],
  },
];

export default function DemandPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Demand Signals</h1>
        <p className="text-muted-foreground">
          Content types and formats that people are actively requesting.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {mockSignals.map((signal) => (
          <Card key={signal.type}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{signal.type}</CardTitle>
                <Badge variant="secondary">{signal.frequency} requests</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{signal.description}</p>
              <div className="flex flex-wrap gap-1">
                {signal.subreddits.map((sub) => (
                  <Badge key={sub} variant="outline" className="text-xs">
                    r/{sub}
                  </Badge>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="mt-2 w-full justify-between">
                Create content for this demand
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="py-8 text-center">
          <Radio className="mx-auto mb-2 h-8 w-8 text-muted-foreground/50" />
          <p className="text-sm text-muted-foreground">
            Showing mock demand signals. Real analysis will populate from scraped post data.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
