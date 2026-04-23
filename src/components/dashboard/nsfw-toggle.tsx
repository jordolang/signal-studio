'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import { useContentStore } from '@/stores/content-store';

export function NsfwToggle() {
  const { showNsfw, setShowNsfw } = useContentStore();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setShowNsfw(!showNsfw)}
      className="flex items-center gap-2"
    >
      {showNsfw ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
      <Badge variant={showNsfw ? 'destructive' : 'secondary'} className="text-xs">
        {showNsfw ? 'NSFW On' : 'SFW Only'}
      </Badge>
    </Button>
  );
}
