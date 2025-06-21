import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MenuItemCard from '@/components/MenuItemCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetDescription } from "@/components/ui/sheet";
import { Badge } from '@/components/ui/badge';
import { Star, Clock, MapPin, ShoppingCart } from 'lucide-react';

// --- Placeholder Data ---

const restaurantDetails = {
  name: "The Gourmet Kitchen",
  imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
  rating: 4.7,
  reviews: 320,
  address: "123 Culinary Lane, Foodie City",
  deliveryTime: "25-35 min",
  cuisineTypes: ["Italian", "Modern European", "Vegetarian"],
};

const menuData = {
  appetizers: [
    { id: 1, name: "Bruschetta al Pomodoro", description: "Toasted bread with fresh tomatoes, garlic, basil, and olive oil.", price: 9.50, imageUrl: "https://images.unsplash.com/photo-1505253716362-afb542c38548?q=80&w=2070&auto=format&fit=crop" },
    { id: 2, name: "Calamari Fritti", description: "Lightly battered and fried squid served with a spicy marinara sauce.", price: 12.00, imageUrl: "https://images.unsplash.com/photo-1625944022833-333575a6104d?q=80&w=1974&auto=format&fit=crop" },
  ],
  mainCourses: [
    { id: 3, name: "Truffle Risotto", description: "Creamy Arborio rice with black truffle, parmesan, and a touch of white wine.", price: 24.00, imageUrl: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2080&auto=format&fit=crop" },
    { id: 4, name: "Margherita Pizza", description: "Classic pizza with San Marzano tomatoes, fresh mozzarella, basil, and a drizzle of olive oil.", price: 18.00, imageUrl: "https://images.unsplash.com/photo-1598021680133-eb3a733194a2?q=80&w=1964&auto=format&fit=crop" },
    { id: 5, name: "Chicken Parmesan", description: "Breaded chicken breast, topped with marinara sauce and melted mozzarella.", price: 22.50, imageUrl: "https://images.unsplash.com/photo-1632778149955-e83f3ce9d448?q=80&w=1974&auto=format&fit=crop" },
  ],
  desserts: [
    { id: 6, name: "Classic Tiramisu", description: "Layers of coffee-soaked ladyfingers and creamy mascarpone.", price: 8.00, imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=2070&auto=format&fit=crop" },
  ],
};

const cartItems = [
    { name: "Truffle Risotto", quantity: 1, price: 24.00 },
    { name: "Classic Tiramisu", quantity: 2, price: 8.00 },
];

const RestaurantDetailPage = () => {
  console.log('RestaurantDetailPage loaded');
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />

      <main className="flex-grow container py-6 sm:py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/restaurant-listing">Restaurants</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{restaurantDetails.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Restaurant Header Section */}
        <section className="mb-8">
            <div className="h-48 md:h-64 rounded-lg overflow-hidden bg-muted">
                <img src={restaurantDetails.imageUrl} alt={`A view of ${restaurantDetails.name}`} className="w-full h-full object-cover"/>
            </div>
            <div className="mt-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{restaurantDetails.name}</h1>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button className="mt-2 sm:mt-0">
                          <ShoppingCart className="mr-2 h-4 w-4"/> View Cart
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Your Order</SheetTitle>
                          <SheetDescription>
                            Review your items before proceeding to checkout.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="py-4 space-y-4">
                          {cartItems.map(item => (
                            <div key={item.name} className="flex justify-between items-center text-sm">
                              <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-muted-foreground">Qty: {item.quantity}</p>
                              </div>
                              <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                          ))}
                           <div className="border-t pt-4 mt-4 flex justify-between font-bold text-lg">
                            <p>Total</p>
                            <p>${cartTotal.toFixed(2)}</p>
                          </div>
                        </div>
                        <SheetFooter>
                            <Button asChild className="w-full">
                                <Link to="/checkout">Proceed to Checkout</Link>
                            </Button>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-400"/>
                        <span className="font-semibold text-foreground">{restaurantDetails.rating}</span>
                        ({restaurantDetails.reviews} reviews)
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4"/>
                        <span>{restaurantDetails.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4"/>
                        <span>{restaurantDetails.address}</span>
                    </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                    {restaurantDetails.cuisineTypes.map(cuisine => (
                        <Badge key={cuisine} variant="outline">{cuisine}</Badge>
                    ))}
                </div>
            </div>
        </section>

        {/* Menu Section */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Menu</h2>
          <div className="space-y-8">
            {Object.entries(menuData).map(([category, items]) => (
                <div key={category}>
                    <h3 className="text-xl font-semibold mb-4 capitalize border-b pb-2">{category}</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {items.map(item => <MenuItemCard key={item.id} {...item} />)}
                    </div>
                </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RestaurantDetailPage;