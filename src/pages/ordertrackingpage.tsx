import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OrderTrackerMap from '@/components/OrderTrackerMap';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, ChefHat, Bike, Home } from 'lucide-react';
import { cn } from '@/lib/utils'; // For conditional classes

// Define the stages of the order process
const orderStages = [
  { status: 'Order Confirmed', progress: 25, Icon: CheckCircle },
  { status: 'Preparing Your Food', progress: 50, Icon: ChefHat },
  { status: 'Out for Delivery', progress: 75, Icon: Bike },
  { status: 'Delivered', progress: 100, Icon: Home },
];

const OrderTrackingPage = () => {
  console.log('OrderTrackingPage loaded');
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  useEffect(() => {
    // Simulate the order progressing through stages
    const interval = setInterval(() => {
      setCurrentStageIndex(prevIndex => {
        if (prevIndex < orderStages.length - 1) {
          return prevIndex + 1;
        }
        clearInterval(interval); // Stop interval at the last stage
        return prevIndex;
      });
    }, 4000); // Update every 4 seconds for a more realistic feel

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const currentStage = orderStages[currentStageIndex];

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow container mx-auto py-8 sm:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="w-full shadow-lg border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-extrabold tracking-tight">Track Your Order</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">Order #FD-8675309 from "The Gourmet Place"</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 pt-4">
              {/* Step-by-step visual tracker */}
              <div className="relative flex justify-between items-start">
                <div
                  className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 bg-gray-200"
                  style={{ zIndex: 1 }}
                >
                  <div
                    className="h-full bg-orange-500 transition-all duration-500 ease-in-out"
                    style={{ width: `${(currentStageIndex / (orderStages.length - 1)) * 100}%` }}
                  />
                </div>
                {orderStages.map((stage, index) => (
                  <div key={stage.status} className="z-10 flex flex-col items-center w-24">
                    <div
                      className={cn(
                        "flex items-center justify-center w-12 h-12 rounded-full border-2 bg-white transition-all duration-500",
                        index <= currentStageIndex ? "border-orange-500" : "border-gray-300"
                      )}
                    >
                      <stage.Icon
                        className={cn(
                          "w-6 h-6",
                          index <= currentStageIndex ? "text-orange-600" : "text-gray-400"
                        )}
                      />
                    </div>
                    <p
                      className={cn(
                        "mt-2 text-xs text-center font-semibold",
                        index <= currentStageIndex ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {stage.status}
                    </p>
                  </div>
                ))}\
              </div>
              
              {/* Progress Bar and Status Text */}
              <div className="pt-4 text-center">
                <Progress value={currentStage.progress} className="w-full h-2.5" />
                <p className="mt-4 text-xl font-semibold text-gray-800 animate-pulse">
                  {currentStage.status}...
                </p>
              </div>

              {/* Map Component */}
              <div className="pt-4">
                <OrderTrackerMap />
              </div>

            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTrackingPage;