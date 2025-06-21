import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { UtensilsCrossed, Home, Bike } from 'lucide-react';

const MapPin = ({
  icon: Icon,
  label,
  position,
  color,
  children,
}: {
  icon: React.ElementType;
  label: string;
  position: string;
  color: string;
  children?: React.ReactNode;
}) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <div className={`absolute ${position} transform -translate-x-1/2 -translate-y-1/2`}>
        <div className="relative flex flex-col items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="mt-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md text-xs font-semibold shadow-md">
            {label}
          </div>
          {children}
        </div>
      </div>
    </TooltipTrigger>
    <TooltipContent>
      <p>{label}</p>
    </TooltipContent>
  </Tooltip>
);

const OrderTrackerMap = () => {
  console.log('OrderTrackerMap loaded');

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Live Order Tracking</CardTitle>
        <CardDescription>Your order is on its way! Watch its progress below.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[450px] bg-gray-100 rounded-lg overflow-hidden border">
          {/* Static map background */}
          <img
            src="https://placehold.co/1200x800/e2e8f0/cbd5e1?text=City+Map"
            alt="Map view of the city"
            className="w-full h-full object-cover"
          />

          {/* Dashed line representing the route */}
          <div 
            className="absolute top-1/2 left-1/2 w-[60%] h-px bg-transparent"
            style={{
              transform: 'translate(-50%, -50%) rotate(-30deg)',
              backgroundImage: 'linear-gradient(to right, #6b7280 40%, transparent 0%)',
              backgroundSize: '15px 2px',
              backgroundRepeat: 'repeat-x',
            }}
          />

          {/* Restaurant Pin */}
          <MapPin
            icon={UtensilsCrossed}
            label="The Gourmet Place"
            position="top-[25%] left-[20%]"
            color="bg-orange-500"
          />

          {/* Delivery Address Pin */}
          <MapPin
            icon={Home}
            label="Your Location"
            position="bottom-[25%] right-[20%]"
            color="bg-blue-500"
          />

          {/* Driver Pin */}
          <MapPin
            icon={Bike}
            label="Your Driver"
            position="top-[55%] left-[55%]"
            color="bg-green-600"
          >
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping" />
          </MapPin>

        </div>
      </CardContent>
    </Card>
  );
};

export default OrderTrackerMap;