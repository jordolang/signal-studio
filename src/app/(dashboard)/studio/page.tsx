'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Plus, Grid3X3, List, Filter, MoreVertical, Library } from 'lucide-react';
import Link from 'next/link';
import { useContentStore } from '@/stores/content-store';
import { CONTENT_TYPE_LABELS, CONTENT_STATUS_LABELS } from '@/lib/constants';

const mockContent = [
  { id: '1', title: 'Welcome Audio Intro', type: 'VOICE', status: 'PUBLISHED', isNsfw: false, updatedAt: '2 days ago' },
  { id: '2', title: 'Custom Request #12', type: 'VIDEO', status: 'DRAFT', isNsfw: true, updatedAt: '1 day ago' },
  { id: '3', title: 'Story: The Beginning', type: 'TEXT', status: 'IN_PROGRESS', isNsfw: false, updatedAt: '3 hours ago' },
  { id: '4', title: 'Themed Photo Set A', type: 'IMAGE', status: 'REVIEW', isNsfw: true, updatedAt: '5 hours ago' },
  { id: '5', title: 'ASMR Session Recording', type: 'VOICE', status: 'PUBLISHED', isNsfw: false, updatedAt: '1 week ago' },
  { id: '6', title: 'Behind the Scenes Clip', type: 'VIDEO', status: 'DRAFT', isNsfw: false, updatedAt: '4 days ago' },
];

export default function ContentLibraryPage() {
  const { viewMode, setViewMode, showNsfw, searchQuery, setSearchQuery } = useContentStore();

  const filtered = mockContent.filter((item) => {
    if (!showNsfw && item.isNsfw) return false;
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Content Library</h1>
          <p className="text-muted-foreground">Manage your created content.</p>
        </div>
        <Link href="/dashboard/studio/create">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Content
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Input
          placeholder="Search content..."
          className="max-w-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="outline" size="icon" onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
          {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid3X3 className="h-4 w-4" />}
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="voice">Voice</TabsTrigger>
          <TabsTrigger value="video">Video</TabsTrigger>
          <TabsTrigger value="text">Text</TabsTrigger>
          <TabsTrigger value="image">Image</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          {filtered.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Library className="mx-auto mb-2 h-8 w-8 text-muted-foreground/50" />
                <p className="text-sm text-muted-foreground">No content matches your filters.</p>
              </CardContent>
            </Card>
          ) : (
            <div className={viewMode === 'grid' ? 'grid gap-4 md:grid-cols-2 lg:grid-cols-3' : 'space-y-3'}>
              {filtered.map((item) => (
                <Card key={item.id} className="group relative">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">{item.title}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {CONTENT_TYPE_LABELS[item.type]}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {CONTENT_STATUS_LABELS[item.status]}
                          </Badge>
                          {item.isNsfw && (
                            <Badge variant="destructive" className="text-xs">
                              NSFW
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">Updated {item.updatedAt}</p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem>Archive</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {['voice', 'video', 'text', 'image'].map((type) => (
          <TabsContent key={type} value={type} className="mt-4">
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                Filtered view for {type} content.
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
