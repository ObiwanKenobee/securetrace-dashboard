import { 
  Home, Shield, Plane, Database, AlertTriangle, Settings, 
  Rocket, Brain, Wrench, Package, LineChart, Search,
  Globe, Lock, Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Overview", href: "/" },
  { 
    icon: Plane, 
    label: "Aircraft & MRO", 
    href: "/aircraft",
    subItems: [
      { label: "Maintenance Forecasting", href: "/aircraft/maintenance", icon: Wrench },
      { label: "Parts Traceability", href: "/aircraft/parts", icon: Package }
    ]
  },
  { 
    icon: Shield, 
    label: "Defense & Supply", 
    href: "/defense",
    subItems: [
      { label: "AI Logistics", href: "/defense/logistics", icon: Brain },
      { label: "Inventory Management", href: "/defense/inventory", icon: Database }
    ]
  },
  { 
    icon: Lock, 
    label: "Cybersecurity", 
    href: "/cyber",
    subItems: [
      { label: "Threat Detection", href: "/cyber/threats", icon: AlertTriangle },
      { label: "AI Ethics", href: "/cyber/ethics", icon: Cpu }
    ]
  },
  { 
    icon: Rocket, 
    label: "Space Industry", 
    href: "/space",
    subItems: [
      { label: "Mission Control", href: "/space/missions", icon: Globe },
      { label: "Resource Management", href: "/space/resources", icon: Database }
    ]
  },
  { icon: LineChart, label: "Analytics", href: "/analytics" },
  { icon: Search, label: "Research", href: "/research" },
  { icon: Settings, label: "Settings", href: "/settings" }
];

export const DashboardSidebar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-64 bg-steel-dark p-4 flex flex-col h-screen", className)}>
      <div className="flex items-center gap-2 mb-8 px-2">
        <Shield className="w-8 h-8 text-cyber" />
        <h1 className="text-xl font-bold text-white">Guardian-IO</h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <div className="mb-1">
                <a
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-steel rounded-lg transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              </div>
              {item.subItems && (
                <ul className="ml-9 space-y-1">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.label}>
                      <a
                        href={subItem.href}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-gray-300 hover:bg-steel/50 rounded-lg transition-colors"
                      >
                        <subItem.icon className="w-4 h-4" />
                        <span>{subItem.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-auto p-4 bg-navy rounded-lg space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-cyber rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">System Status: Active</span>
        </div>
        <div className="text-xs text-gray-400">
          Last scan: 2 minutes ago
        </div>
      </div>
    </div>
  );
};