import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { UserPlus, Download } from 'lucide-react';

const mockSubscribers = [
  {
    id: '1',
    email: 'fan1@example.com',
    name: 'Alex M.',
    status: 'ACTIVE',
    source: 'Reddit',
    subscribedAt: '2024-01-15',
  },
  {
    id: '2',
    email: 'fan2@example.com',
    name: 'Jamie L.',
    status: 'ACTIVE',
    source: 'Direct',
    subscribedAt: '2024-02-03',
  },
  {
    id: '3',
    email: 'fan3@example.com',
    name: null,
    status: 'PAUSED',
    source: 'Reddit',
    subscribedAt: '2024-02-20',
  },
  {
    id: '4',
    email: 'fan4@example.com',
    name: 'Sam K.',
    status: 'ACTIVE',
    source: 'Referral',
    subscribedAt: '2024-03-01',
  },
  {
    id: '5',
    email: 'fan5@example.com',
    name: 'Chris D.',
    status: 'UNSUBSCRIBED',
    source: 'Direct',
    subscribedAt: '2024-01-10',
  },
];

const statusColors: Record<string, 'default' | 'secondary' | 'destructive'> = {
  ACTIVE: 'default',
  PAUSED: 'secondary',
  UNSUBSCRIBED: 'destructive',
};

export default function SubscribersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Subscribers</h1>
          <p className="text-muted-foreground">Manage your inbound subscriber list.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" /> Add Subscriber
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockSubscribers.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Active</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockSubscribers.filter((s) => s.status === 'ACTIVE').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Subscriber List</CardTitle>
            <Input placeholder="Search subscribers..." className="max-w-xs" />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Subscribed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSubscribers.map((sub) => (
                <TableRow key={sub.id}>
                  <TableCell className="font-medium">{sub.email}</TableCell>
                  <TableCell>{sub.name ?? '—'}</TableCell>
                  <TableCell>
                    <Badge variant={statusColors[sub.status]}>{sub.status}</Badge>
                  </TableCell>
                  <TableCell>{sub.source}</TableCell>
                  <TableCell className="text-muted-foreground">{sub.subscribedAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
