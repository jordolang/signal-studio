import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Bell, Shield, Database } from 'lucide-react';

const settingsSections = [
  { icon: User, title: 'Profile', description: 'Manage your creator profile and display name.' },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Configure alerts for new subscribers and trends.',
  },
  {
    icon: Shield,
    title: 'Content Settings',
    description: 'Set default SFW/NSFW preferences and content flags.',
  },
  {
    icon: Database,
    title: 'Data & Privacy',
    description: 'Export your data or manage scraping preferences.',
  },
];

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences.</p>
      </div>

      {settingsSections.map((section) => (
        <Card key={section.title}>
          <CardHeader>
            <div className="flex items-center gap-3">
              <section.icon className="text-muted-foreground h-5 w-5" />
              <div>
                <CardTitle className="text-base">{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button variant="outline" size="sm">
              Configure
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
