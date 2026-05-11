import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mic, Upload, Settings } from 'lucide-react';

export default function VoiceBaselinePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Voice Baseline</h1>
        <p className="text-muted-foreground">
          Upload or record a voice sample to establish your voice identity for content creation.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Voice Profile</CardTitle>
          <CardDescription>
            Your voice baseline is used as a reference for AI-assisted content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12">
            <Mic className="text-muted-foreground/50 mb-4 h-12 w-12" />
            <p className="text-muted-foreground mb-4 text-sm">No voice baseline configured yet.</p>
            <div className="flex gap-3">
              <Button>
                <Upload className="mr-2 h-4 w-4" /> Upload Sample
              </Button>
              <Button variant="outline">
                <Mic className="mr-2 h-4 w-4" /> Record Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Voice Settings</CardTitle>
          <CardDescription>Configure voice processing preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-md border p-3">
            <div>
              <p className="text-sm font-medium">Voice Cloning Consent</p>
              <p className="text-muted-foreground text-xs">
                Allow AI to use your voice for content generation.
              </p>
            </div>
            <Badge variant="outline">Not configured</Badge>
          </div>
          <div className="flex items-center justify-between rounded-md border p-3">
            <div>
              <p className="text-sm font-medium">Sample Quality</p>
              <p className="text-muted-foreground text-xs">
                Minimum 30 seconds, WAV or MP3 format.
              </p>
            </div>
            <Badge variant="outline">No sample</Badge>
          </div>
          <Button variant="outline" className="w-full">
            <Settings className="mr-2 h-4 w-4" /> Advanced Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
