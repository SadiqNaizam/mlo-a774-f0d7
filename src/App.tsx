import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";


import CheckoutPage from "./pages/CheckoutPage";
import Homepage from "./pages/Homepage";
import OrderTrackingPage from "./pages/OrderTrackingPage";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";
import RestaurantListingPage from "./pages/RestaurantListingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<Homepage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-tracking" element={<OrderTrackingPage />} />
          <Route path="/restaurant-detail" element={<RestaurantDetailPage />} />
          <Route path="/restaurant-listing" element={<RestaurantListingPage />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
</QueryClientProvider>
);

export default App;