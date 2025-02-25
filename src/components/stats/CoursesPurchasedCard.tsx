'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export function CoursesPurchasedCard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCoursesCount = async () => {
      const response = await fetch('/api/user/courses-count');
      const data = await response.json();
      setCount(data.count);
    };

    fetchCoursesCount();
  }, []);

  return (
    <Card className="bg-blue-600 text-white">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="h-5 w-5" />
          <h3 className="font-medium">Courses Purchased</h3>
        </div>
        <p className="text-3xl font-bold">{count}</p>
      </CardContent>
    </Card>
  );
}
