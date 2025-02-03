import { AlertTriangle } from "lucide-react";

interface ThreatAlertProps {
  level: "low" | "medium" | "high";
  message: string;
  timestamp: string;
}

export const ThreatAlert = ({ level, message, timestamp }: ThreatAlertProps) => {
  const getBgColor = () => {
    switch (level) {
      case "high":
        return "bg-alert/10 border-alert";
      case "medium":
        return "bg-yellow-900/10 border-yellow-600";
      default:
        return "bg-blue-900/10 border-blue-600";
    }
  };

  return (
    <div className={`p-4 rounded-lg border ${getBgColor()} flex items-start gap-3`}>
      <AlertTriangle className={`w-5 h-5 ${level === "high" ? "text-alert" : level === "medium" ? "text-yellow-500" : "text-blue-500"}`} />
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="font-medium text-white">
            {level.charAt(0).toUpperCase() + level.slice(1)} Level Threat
          </span>
          <span className="text-sm text-gray-400">{timestamp}</span>
        </div>
        <p className="text-gray-300 text-sm">{message}</p>
      </div>
    </div>
  );
};