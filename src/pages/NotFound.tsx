import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Wifi } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
            <Wifi className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Connection Lost</h2>
          <p className="text-gray-600 mb-8">
            Oops! The IoT device you're looking for seems to be offline or doesn't exist.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="w-full">
            <a href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return to Dashboard
            </a>
          </Button>
          
          <div className="text-sm text-gray-500">
            <p>Path attempted: <code className="bg-gray-100 px-2 py-1 rounded">{location.pathname}</code></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
