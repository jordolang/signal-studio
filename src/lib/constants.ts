export const DEFAULT_SUBREDDITS = [
  'psychologyofsex',
  'FetishHaven',
  'FetishBuyersCommunity',
  'fetish',
  'Fetishwantads',
] as const;

export const CONTENT_TYPE_LABELS: Record<string, string> = {
  VOICE: 'Voice',
  VIDEO: 'Video',
  TEXT: 'Text',
  IMAGE: 'Image',
};

export const CONTENT_STATUS_LABELS: Record<string, string> = {
  DRAFT: 'Draft',
  IN_PROGRESS: 'In Progress',
  REVIEW: 'In Review',
  PUBLISHED: 'Published',
  ARCHIVED: 'Archived',
};

export const NSFW_RATING_LABELS: Record<string, string> = {
  SFW: 'Safe for Work',
  SUGGESTIVE: 'Suggestive',
  NSFW: 'Not Safe for Work',
  EXPLICIT: 'Explicit',
};

export const SENTIMENT_LABELS = {
  positive: { label: 'Positive', color: 'text-green-600', bg: 'bg-green-100' },
  neutral: { label: 'Neutral', color: 'text-gray-600', bg: 'bg-gray-100' },
  negative: { label: 'Negative', color: 'text-red-600', bg: 'bg-red-100' },
} as const;

export function getSentimentLabel(score: number | null) {
  if (score === null) return SENTIMENT_LABELS.neutral;
  if (score > 0.2) return SENTIMENT_LABELS.positive;
  if (score < -0.2) return SENTIMENT_LABELS.negative;
  return SENTIMENT_LABELS.neutral;
}
