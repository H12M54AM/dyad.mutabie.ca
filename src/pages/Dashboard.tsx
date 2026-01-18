import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const { user, logout } = useAuth();
  
  if (!user) {
    return null; // This shouldn't happen due to route protection
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-border rounded-lg p-4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
              <Button onClick={logout} variant="outline">
                Logout
              </Button>
            </div>
            
            <div className="bg-bg-secondary rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">Welcome, {user.name}!</h2>
              <p className="text-text-secondary mb-4">
                You are currently logged in as <span className="font-medium">{user.email}</span>.
              </p>
              <div className="flex items-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  Role: {user.role}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-medium text-text-primary mb-2">Your Profile</h3>
                <p className="text-text-secondary mb-4">
                  Manage your account settings and preferences.
                </p>
                <Button variant="outline">View Profile</Button>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-medium text-text-primary mb-2">Settings</h3>
                <p className="text-text-secondary mb-4">
                  Configure application settings and preferences.
                </p>
                <Button variant="outline">Manage Settings</Button>
              </div>
              
              {user.role === 'admin' && (
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-medium text-text-primary mb-2">Admin Panel</h3>
                  <p className="text-text-secondary mb-4">
                    Access administrative features and controls.
                  </p>
                  <Button variant="outline">Admin Dashboard</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}