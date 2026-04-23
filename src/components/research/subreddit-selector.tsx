'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, X } from 'lucide-react';
import { DEFAULT_SUBREDDITS } from '@/lib/constants';
import { useResearchStore } from '@/stores/research-store';

export function SubredditSelector() {
  const { selectedSubreddits, toggleSubreddit } = useResearchStore();
  const [customInput, setCustomInput] = useState('');

  const allSubreddits = [
    ...DEFAULT_SUBREDDITS,
    ...selectedSubreddits.filter(
      (s) => !DEFAULT_SUBREDDITS.includes(s as (typeof DEFAULT_SUBREDDITS)[number]),
    ),
  ];

  const handleAddCustom = () => {
    const sub = customInput.trim().replace(/^r\//, '');
    if (sub && !allSubreddits.includes(sub)) {
      toggleSubreddit(sub);
      setCustomInput('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {allSubreddits.map((sub) => (
          <Badge
            key={sub}
            variant={selectedSubreddits.includes(sub) ? 'default' : 'outline'}
            className="cursor-pointer select-none transition-colors"
            onClick={() => toggleSubreddit(sub)}
          >
            r/{sub}
            {selectedSubreddits.includes(sub) && <X className="ml-1 h-3 w-3" />}
          </Badge>
        ))}
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Add custom subreddit..."
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddCustom()}
          className="max-w-xs"
        />
        <Button variant="outline" size="sm" onClick={handleAddCustom}>
          <Plus className="mr-1 h-4 w-4" /> Add
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        {selectedSubreddits.length} subreddit{selectedSubreddits.length !== 1 ? 's' : ''} selected
        for monitoring.
      </p>
    </div>
  );
}
