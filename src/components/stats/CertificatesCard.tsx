import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

export function CertificatesCard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCertificatesCount = async () => {
      const response = await fetch('/api/stats/certificates');
      const data = await response.json();
      setCount(data.count);
    };

    fetchCertificatesCount();
  }, []);

  return (
    <Card className="bg-yellow-600 text-white">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Award className="h-5 w-5" />
          <h3 className="font-medium">Certificates Earned</h3>
        </div>
        <p className="text-3xl font-bold">{count}</p>
      </CardContent>
    </Card>
  );
}
