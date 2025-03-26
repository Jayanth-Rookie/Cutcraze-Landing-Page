import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoadingPage from "@/components/LoadingPage"; // Import the LoadingPage component
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Simulate loading delay (e.g., for assets or data fetching)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 4 seconds
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            {/* Redirect to LoadingPage if still loading */}
            <Route
              path="/"
              element={isLoading ? <LoadingPage onComplete={() => setIsLoading(false)} /> : <Index />}
            />
            {/* Handle other routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;