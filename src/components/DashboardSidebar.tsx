import { 
  Home, Shield, Plane, Database, AlertTriangle, Settings, 
  Rocket, Brain, Wrench, Package, LineChart, Search,
  Globe, Lock, Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function DashboardSidebar() {
  return (
    <div className="hidden lg:block border-r bg-steel-dark w-[240px] p-6">
      <div className="flex items-center gap-2 mb-8">
        <Shield className="w-6 h-6 text-cyber" />
        <span className="font-bold text-lg">Guardian-IO</span>
      </div>
      <ScrollArea className="h-[calc(100vh-120px)]">
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Home className="w-4 h-4" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Plane className="w-4 h-4" /> Aircraft
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Wrench className="w-4 h-4" /> Maintenance
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Package className="w-4 h-4" /> Parts
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Shield className="w-4 h-4" /> Defense
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Brain className="w-4 h-4" /> AI & Ethics
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Rocket className="w-4 h-4" /> Space
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <LineChart className="w-4 h-4" /> Analytics
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Search className="w-4 h-4" /> Research
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="w-4 h-4" /> Settings
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
}