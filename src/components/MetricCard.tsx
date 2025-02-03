import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: "up" | "down";
  trendValue?: string;
  className?: string;
}

export const MetricCard = ({
  title,
  value,
  icon,
  trend,
  trendValue,
  className,
}: MetricCardProps) => {
  return (
    <div className={cn(
      "bg-steel p-6 rounded-lg border border-steel-light",
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-400 text-sm font-medium mb-2">{title}</h3>
          <div className="text-2xl font-bold text-white">{value}</div>
          {trend && trendValue && (
            <div className={cn(
              "text-sm mt-2",
              trend === "up" ? "text-cyber" : "text-alert"
            )}>
              {trend === "up" ? "↑" : "↓"} {trendValue}
            </div>
          )}
        </div>
        <div className="text-cyber">{icon}</div>
      </div>
    </div>
  );
};