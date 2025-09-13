import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import PageTransition from "@/components/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-screen w-full flex items-center justify-center dark-section">
        <Card className="w-full max-w-md mx-4 card-hover">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-white">404 Page Not Found</h1>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              The page you're looking for doesn't exist.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
