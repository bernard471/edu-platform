import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function LabsCompletedCard() {
  const [count, setCount] = useState(0);
  const [lastUpdate] = useState(Date.now());

  useEffect(() => {
    const fetchLabsCount = async () => {
      try {
        const response = await fetch('/api/stats/labs-completed');
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error fetching labs count:', error);
      }
    };

    fetchLabsCount();
  }, [lastUpdate]); // Add lastUpdate as dependency

  

  return (
    <Card className="bg-green-600 text-white">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="h-5 w-5" />
          <h3 className="font-medium">Labs Completed</h3>
        </div>
        <p className="text-3xl font-bold">{count}</p>
      </CardContent>
    </Card>
  );
}
