// Re-export Prisma types for convenience
export type {
  User,
  CreatorProfile,
  ContentItem,
  SubredditConfig,
  RedditPost,
  RedditTrend,
  Subscriber,
} from '@prisma/client';

export type {
  ContentType,
  ContentStatus,
  NsfwRating,
  ContentCategory,
  TrendPeriod,
  SubscriberStatus,
  UserRole,
} from '@prisma/client';

// ─── App-specific types ──────────────────────────────────

export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  badge?: string;
  disabled?: boolean;
}

export interface SentimentData {
  score: number;
  label: 'positive' | 'neutral' | 'negative';
}

export interface TrendKeyword {
  keyword: string;
  frequency: number;
  sentiment: number | null;
  relatedKeywords: string[];
  change?: number; // percentage change from prior period
}

export interface DemandSignal {
  type: string;
  description: string;
  frequency: number;
  subreddits: string[];
  examplePosts: string[];
}

export interface ContentFilter {
  type?: string;
  status?: string;
  isNsfw?: boolean;
  search?: string;
}

export interface SubredditStats {
  subreddit: string;
  postCount: number;
  avgSentiment: number;
  topThemes: string[];
  lastScraped: Date | null;
}
