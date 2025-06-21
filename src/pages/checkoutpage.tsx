import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';

// Lucide Icons
import { CreditCard, Home, Landmark, PlusCircle } from 'lucide-react';

// Placeholder data for the order
const orderItems = [
  { id: 1, name: 'Margherita Pizza', quantity: 1, price: 15.99 },
  { id: 2, name: 'Garlic Bread', quantity: 2, price: 4.50 },
  { id: 3, name: 'Soda Can', quantity: 2, price: 1.50 },
];

const CheckoutPage = () => {
  console.log('CheckoutPage loaded');
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');

  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 5.00;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form validation and submission to a backend
    console.log('Placing order...');

    toast.success('Order placed successfully!', {
      description: 'You are being redirected to the tracking page.',
    });

    // Redirect to the order tracking page after a short delay
    setTimeout(() => {
      navigate('/order-tracking'); // Path from App.tsx
    }, 2000);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Checkout</h1>
          <form onSubmit={handlePlaceOrder}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* Main Content (Delivery and Payment) */}
              <div className="lg:col-span-2 space-y-8">
                {/* Delivery Address Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Delivery Address</CardTitle>
                    <CardDescription>Select where you want your order delivered.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup defaultValue="home" className="space-y-4">
                      <Label htmlFor="address-home" className="flex items-start gap-4 p-4 border rounded-md has-[:checked]:bg-accent has-[:checked]:border-primary cursor-pointer">
                        <RadioGroupItem value="home" id="address-home" />
                        <div className="grid gap-1.5">
                          <div className="font-semibold flex items-center gap-2"><Home className="w-4 h-4"/> Home</div>
                          <p className="text-sm text-muted-foreground">123 Main St, Anytown, USA 12345</p>
                        </div>
                      </Label>
                      <Button variant="outline" className="w-full">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add New Address
                      </Button>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Payment Method Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>Choose how you'd like to pay.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-2">
                      <Label htmlFor="pay-card" className="flex items-center gap-4 p-4 border rounded-md has-[:checked]:bg-accent has-[:checked]:border-primary cursor-pointer">
                        <RadioGroupItem value="card" id="pay-card" />
                        <CreditCard className="w-5 h-5" />
                        <span>Credit or Debit Card</span>
                      </Label>
                      <Label htmlFor="pay-bank" className="flex items-center gap-4 p-4 border rounded-md has-[:checked]:bg-accent has-[:checked]:border-primary cursor-pointer">
                        <RadioGroupItem value="bank" id="pay-bank" />
                        <Landmark className="w-5 h-5" />
                        <span>Bank Transfer</span>
                      </Label>
                    </RadioGroup>
                    {paymentMethod === 'card' && (
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                           <Label htmlFor="card-number">Card Number</Label>
                           <Input id="card-number" placeholder="1234 5678 9101 1121" />
                        </div>
                        <div>
                           <Label htmlFor="expiry-date">Expiry Date</Label>
                           <Input id="expiry-date" placeholder="MM/YY" />
                        </div>
                        <div>
                           <Label htmlFor="cvc">CVC</Label>
                           <Input id="cvc" placeholder="123" />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary (Sticky Sidebar) */}
              <div className="lg:col-span-1">
                <Card className="lg:sticky lg:top-24">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-sm">
                      {orderItems.map(item => (
                        <li key={item.id} className="flex justify-between">
                          <span className="text-muted-foreground">{item.name} x {item.quantity}</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                    <Separator />
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Delivery Fee</span>
                        <span>${deliveryFee.toFixed(2)}</span>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-base">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full" size="lg">
                      Place Order
                    </Button>
                  </CardFooter>
                </Card>
              </div>

            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;