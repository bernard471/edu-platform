import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export function CoursesCompletedCard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCompletedCount = async () => {
      const response = await fetch('/api/stats/course-completed');
      const data = await response.json();
      if (data.success) {
        setCount(data.completedCount);
      }
    };
    
    fetchCompletedCount();
  }, []);

  return (
    <Card className="bg-purple-600 text-white">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="h-5 w-5" />
          <h3 className="font-medium">Courses Completed</h3>
        </div>
        <p className="text-3xl font-bold">{count}</p>
      </CardContent>
    </Card>
  );
}
