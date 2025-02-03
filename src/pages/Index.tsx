import { Shield, Plane, Box, AlertTriangle, Brain, Rocket, Database, Lock, Signal, ChartBar } from "lucide-react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { MetricCard } from "@/components/MetricCard";
import { ThreatAlert } from "@/components/ThreatAlert";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-dark text-white flex">
      <DashboardSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Defense & Aerospace Dashboard</h1>
            <p className="text-gray-400">Real-time monitoring and analytics for aerospace, defense, and cybersecurity</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <MetricCard
              title="Active Threats"
              value="12"
              icon={<Shield className="w-6 h-6" />}
              trend="up"
              trendValue="+3 from yesterday"
            />
            <MetricCard
              title="Aircraft Status"
              value="86%"
              icon={<Plane className="w-6 h-6" />}
              trend="down"
              trendValue="-2% operational"
            />
            <MetricCard
              title="Supply Chain Health"
              value="94%"
              icon={<Box className="w-6 h-6" />}
              trend="up"
              trendValue="+5% efficiency"
            />
            <MetricCard
              title="AI Systems"
              value="98.2%"
              icon={<Brain className="w-6 h-6" />}
              trend="up"
              trendValue="+0.5% accuracy"
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
              value="99.9%"
              icon={<Database className="w-6 h-6" />}
              trend="up"
              trendValue="+0.1% integrity"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    <span>AI Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyber rounded-full animate-pulse" />
                    <span className="text-cyber">Active</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-steel rounded-lg">
                  <div className="flex items-center gap-2">
                    <Signal className="w-4 h-4 text-cyber" />
                    <span>Satellite Network</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyber rounded-full animate-pulse" />
                    <span className="text-cyber">Connected</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-steel rounded-lg">
                  <div className="flex items-center gap-2">
                    <ChartBar className="w-4 h-4 text-cyber" />
                    <span>Predictive Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyber rounded-full animate-pulse" />
                    <span className="text-cyber">Processing</span>
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