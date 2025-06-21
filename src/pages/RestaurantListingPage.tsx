import React from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom UI Components
import RestaurantCard from '@/components/RestaurantCard';

// shadcn/ui Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontal } from 'lucide-react';


// Placeholder data for restaurants
const restaurantData = [
  {
    slug: 'the-pizza-palace',
    name: 'The Pizza Palace',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    cuisineTypes: ['Pizza', 'Italian', 'Fast Food'],
    deliveryTime: '25-35 min',
  },
  {
    slug: 'sushi-central',
    name: 'Sushi Central',
    imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    cuisineTypes: ['Sushi', 'Japanese', 'Asian'],
    deliveryTime: '30-40 min',
  },
  {
    slug: 'taco-town',
    name: 'Taco Town',
    imageUrl: 'https://images.unsplash.com/photo-1565299589934-1f38a57c3d49?q=80&w=800&auto=format&fit=crop',
    rating: 4.3,
    cuisineTypes: ['Mexican', 'Tacos', 'Burritos'],
    deliveryTime: '20-30 min',
  },
  {
    slug: 'burger-bliss',
    name: 'Burger Bliss',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    cuisineTypes: ['Burgers', 'American', 'Fries'],
    deliveryTime: '25-35 min',
  },
  {
    slug: 'the-green-bowl',
    name: 'The Green Bowl',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    cuisineTypes: ['Salads', 'Healthy', 'Vegan'],
    deliveryTime: '15-25 min',
  },
  {
    slug: 'pho-fever',
    name: 'Pho Fever',
    imageUrl: 'https://images.unsplash.com/photo-1622432179831-241accb99557?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    cuisineTypes: ['Vietnamese', 'Noodles', 'Pho'],
    deliveryTime: '35-45 min',
  },
];

const RestaurantListingPage = () => {
  console.log('RestaurantListingPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container py-6 sm:py-8">
          {/* Breadcrumb and Title */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Restaurants</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold tracking-tight mt-4">
            Restaurants Near You
          </h1>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 p-6 bg-white rounded-lg border shadow-sm">
                <h3 className="text-lg font-semibold flex items-center mb-4">
                  <SlidersHorizontal className="w-5 h-5 mr-2" />
                  Filters
                </h3>
                <Accordion type="multiple" defaultValue={['cuisine', 'rating']} className="w-full">
                  <AccordionItem value="cuisine">
                    <AccordionTrigger>Cuisine</AccordionTrigger>
                    <AccordionContent className="space-y-2 pt-2">
                      {['Pizza', 'Sushi', 'Mexican', 'Burgers', 'Salads', 'Vietnamese'].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <Checkbox id={item.toLowerCase()} />
                          <Label htmlFor={item.toLowerCase()} className="font-normal">{item}</Label>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="rating">
                    <AccordionTrigger>Rating</AccordionTrigger>
                    <AccordionContent className="space-y-2 pt-2">
                      {['4.5 stars & up', '4 stars & up', '3 stars & up'].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <Checkbox id={item.replace(/\s/g, '').toLowerCase()} />
                          <Label htmlFor={item.replace(/\s/g, '').toLowerCase()} className="font-normal">{item}</Label>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="delivery_time">
                    <AccordionTrigger>Max Delivery Time</AccordionTrigger>
                    <AccordionContent className="space-y-2 pt-2">
                      {['Under 30 min', 'Under 45 min'].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <Checkbox id={item.replace(/\s/g, '').toLowerCase()} />
                          <Label htmlFor={item.replace(/\s/g, '').toLowerCase()} className="font-normal">{item}</Label>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </aside>

            {/* Restaurant List */}
            <div className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
                  Showing 1-6 of 24 results
                </p>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="delivery_time">Fastest Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {restaurantData.map((restaurant) => (
                  <RestaurantCard key={restaurant.slug} {...restaurant} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-10 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantListingPage;