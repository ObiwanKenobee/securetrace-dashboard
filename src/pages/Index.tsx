import { Shield, Plane, Box, AlertTriangle, Brain, Rocket, Database, Lock, Signal, ChartBar, Wrench, Package, Globe, Cpu } from "lucide-react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { MetricCard } from "@/components/MetricCard";
import { ThreatAlert } from "@/components/ThreatAlert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-dark text-white flex">
      <DashboardSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Guardian-IO Command Center</h1>
            <p className="text-gray-400">Advanced monitoring and analytics for aerospace, defense, and cybersecurity operations</p>
          </header>

          {/* Key Metrics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <MetricCard
              title="AI Systems Performance"
              value="98.2%"
              icon={<Brain className="w-6 h-6" />}
              trend="up"
              trendValue="+0.5% accuracy"
            />
            <MetricCard
              title="Maintenance Forecast"
              value="86%"
              icon={<Wrench className="w-6 h-6" />}
              trend="down"
              trendValue="3 alerts pending"
            />
            <MetricCard
              title="Supply Chain Health"
              value="94%"
              icon={<Box className="w-6 h-6" />}
              trend="up"
              trendValue="+5% efficiency"
            />
            <MetricCard
              title="Active Threats"
              value="12"
              icon={<Shield className="w-6 h-6" />}
              trend="up"
              trendValue="+3 from yesterday"
            />
            <MetricCard
              title="Parts Traceability"
              value="99.9%"
              icon={<Package className="w-6 h-6" />}
              trend="up"
              trendValue="All parts verified"
            />
            <MetricCard
              title="Space Operations"
              value="7"
              icon={<Rocket className="w-6 h-6" />}
              trend="up"
              trendValue="+2 missions"
            />
            <MetricCard
              title="Blockchain Security"
              value="100%"
              icon={<Database className="w-6 h-6" />}
              trend="up"
              trendValue="Fully operational"
            />
            <MetricCard
              title="AI Ethics Compliance"
              value="97%"
              icon={<Cpu className="w-6 h-6" />}
              trend="up"
              trendValue="+2% this month"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Threat Monitoring Section */}
            <section className="bg-steel-dark p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-cyber" />
                Critical Alerts
              </h2>
              <div className="space-y-4">
                <ThreatAlert
                  level="high"
                  message="Unauthorized access attempt detected in primary defense network"
                  timestamp="2 minutes ago"
                />
                <ThreatAlert
                  level="medium"
                  message="AI anomaly detected in predictive maintenance system"
                  timestamp="15 minutes ago"
                />
                <ThreatAlert
                  level="medium"
                  message="Supply chain verification pending for Component XB-2247"
                  timestamp="45 minutes ago"
                />
                <ThreatAlert
                  level="low"
                  message="Scheduled blockchain validation for defense contracts"
                  timestamp="1 hour ago"
                />
              </div>
            </section>

            {/* System Status Section */}
            <section className="bg-steel-dark p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">System Status</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-steel rounded-lg">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-cyber" />
                    <span>Blockchain Network</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyber rounded-full animate-pulse" />
                    <span className="text-cyber">Operational</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-steel rounded-lg">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-cyber" />
                    <span>AI Analytics Engine</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyber rounded-full animate-pulse" />
                    <span className="text-cyber">Processing</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-steel rounded-lg">
                  <div className="flex items-center gap-2">
                    <Signal className="w-4 h-4 text-cyber" />
                    <span>IoT Sensor Network</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyber rounded-full animate-pulse" />
                    <span className="text-cyber">Connected</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-steel rounded-lg">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-cyber" />
                    <span>Global Defense Network</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyber rounded-full animate-pulse" />
                    <span className="text-cyber">Secure</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;