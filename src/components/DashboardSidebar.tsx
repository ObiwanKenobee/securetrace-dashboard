import { Home, Shield, Plane, Database, AlertTriangle, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Overview", href: "#" },
  { icon: Shield, label: "Cybersecurity", href: "#" },
  { icon: Plane, label: "Aerospace", href: "#" },
  { icon: Database, label: "Supply Chain", href: "#" },
  { icon: AlertTriangle, label: "Threats", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

export const DashboardSidebar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-64 bg-steel-dark p-4 flex flex-col h-screen", className)}>
      <div className="flex items-center gap-2 mb-8 px-2">
        <Shield className="w-8 h-8 text-cyber" />
        <h1 className="text-xl font-bold text-white">Guardian-IO</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-steel rounded-lg transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-auto p-4 bg-navy rounded-lg">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-cyber rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">System Status: Active</span>
        </div>
      </div>
    </div>
  );
};