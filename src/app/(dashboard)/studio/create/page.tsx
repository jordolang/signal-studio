import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, Video, FileText, Image, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const contentTypes = [
  {
    type: 'VOICE',
    label: 'Voice Content',
    description: 'Record or upload voice/audio content including ASMR, narration, and custom audio.',
    icon: Mic,
  },
  {
    type: 'VIDEO',
    label: 'Video Content',
    description: 'Create video content — clips, full videos, or behind-the-scenes footage.',
    icon: Video,
  },
  {
    type: 'TEXT',
    label: 'Written Content',
    description: 'Write stories, articles, scripts, or any text-based content.',
    icon: FileText,
  },
  {
    type: 'IMAGE',
    label: 'Image Content',
    description: 'Upload photos, create themed sets, or curate image collections.',
    icon: Image,
  },
];

export default function CreateContentPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Create New Content</h1>
        <p className="text-muted-foreground">Choose a content type to get started.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {contentTypes.map((ct) => (
          <Card key={ct.type} className="cursor-pointer transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <ct.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base">{ct.label}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{ct.description}</CardDescription>
              <Button variant="outline" size="sm" className="w-full justify-between">
                Start creating <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link href="/dashboard/studio">
          <Button variant="ghost">Back to Content Library</Button>
        </Link>
      </div>
    </div>
  );
}
