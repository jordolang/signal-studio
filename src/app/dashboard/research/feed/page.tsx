import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { MessageSquare, ArrowUpDown, ThumbsUp, ThumbsDown, Minus } from 'lucide-react';

const mockPosts = [
  {
    id: '1',
    subreddit: 'psychologyofsex',
    title: 'What type of custom content do people actually want?',
    score: 142,
    numComments: 47,
    sentiment: 0.6,
    themes: ['custom content', 'demand', 'preferences'],
    postedAt: '2 hours ago',
  },
  {
    id: '2',
    subreddit: 'FetishBuyersCommunity',
    title: 'Best platforms for supporting independent creators?',
    score: 89,
    numComments: 23,
    sentiment: 0.4,
    themes: ['platforms', 'creator support', 'subscription'],
    postedAt: '5 hours ago',
  },
  {
    id: '3',
    subreddit: 'fetish',
    title: 'Discussion: pricing for custom voice content',
    score: 56,
    numComments: 31,
    sentiment: -0.1,
    themes: ['pricing', 'voice', 'custom'],
    postedAt: '1 day ago',
  },
];

function SentimentIcon({ score }: { score: number }) {
  if (score > 0.2) return <ThumbsUp className="h-4 w-4 text-green-600" />;
  if (score < -0.2) return <ThumbsDown className="h-4 w-4 text-red-600" />;
  return <Minus className="h-4 w-4 text-gray-400" />;
}

export default function FeedPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Post Feed</h1>
        <p className="text-muted-foreground">
          Recent posts from tracked subreddits with sentiment indicators.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Input placeholder="Search posts..." className="max-w-sm" />
        <Badge variant="outline" className="whitespace-nowrap">
          <ArrowUpDown className="mr-1 h-3 w-3" /> Sort by score
        </Badge>
      </div>

      <div className="space-y-3">
        {mockPosts.map((post) => (
          <Card key={post.id}>
            <CardContent className="flex items-start gap-4 p-4">
              <div className="flex flex-col items-center gap-1 pt-1">
                <SentimentIcon score={post.sentiment} />
                <span className="text-xs font-medium">{post.score}</span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="leading-tight font-medium">{post.title}</p>
                    <p className="text-muted-foreground mt-1 text-xs">
                      r/{post.subreddit} &middot; {post.postedAt} &middot; {post.numComments}{' '}
                      comments
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {post.themes.map((theme) => (
                    <Badge key={theme} variant="secondary" className="text-xs">
                      {theme}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="py-8 text-center">
          <MessageSquare className="text-muted-foreground/50 mx-auto mb-2 h-8 w-8" />
          <p className="text-muted-foreground text-sm">
            Showing mock data. Live post feed will populate once the background scraper is
            configured.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
