import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CuisineCategoryPill from '@/components/CuisineCategoryPill';
import RestaurantCard from '@/components/RestaurantCard';

// shadcn/ui Components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Icons
import { Search, Pizza, Beef, Fish, Salad, Cookie, Utensils } from 'lucide-react';

// Placeholder data for the page
const cuisineCategories = [
  { name: 'Pizza', icon: Pizza },
  { name: 'Burgers', icon: Beef },
  { name: 'Sushi', icon: Fish },
  { name: 'Salads', icon: Salad },
  { name: 'Desserts', icon: Cookie },
  { name: 'Italian', icon: Utensils },
];

const popularRestaurants = [
  {
    slug: 'the-pizza-place',
    name: 'The Pizza Place',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    cuisineTypes: ['Pizza', 'Italian'],
    deliveryTime: '25-35 min',
  },
  {
    slug: 'burger-bliss',
    name: 'Burger Bliss',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    cuisineTypes: ['Burgers', 'American'],
    deliveryTime: '20-30 min',
  },
  {
    slug: 'sushi-sensation',
    name: 'Sushi Sensation',
    imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    cuisineTypes: ['Sushi', 'Japanese'],
    deliveryTime: '30-40 min',
  },
  {
    slug: 'fresh-greens',
    name: 'Fresh & Greens',
    imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop',
    rating: 4.4,
    cuisineTypes: ['Salads', 'Healthy'],
    deliveryTime: '15-25 min',
  },
];

const newRestaurants = [
    {
    slug: 'pasta-paradiso',
    name: 'Pasta Paradiso',
    imageUrl: 'https://images.unsplash.com/photo-1598866594240-a_1f22062e54?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    cuisineTypes: ['Italian', 'Pasta'],
    deliveryTime: '35-45 min',
  },
  {
    slug: 'the-taco-truck',
    name: 'The Taco Truck',
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-151f4a0542f7?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    cuisineTypes: ['Mexican', 'Tacos'],
    deliveryTime: '20-30 min',
  },
   {
    slug: 'ramen-republic',
    name: 'Ramen Republic',
    imageUrl: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    cuisineTypes: ['Ramen', 'Japanese'],
    deliveryTime: '30-40 min',
  },
  {
    slug: 'sweet-escapes',
    name: 'Sweet Escapes',
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    cuisineTypes: ['Desserts', 'Bakery'],
    deliveryTime: '15-25 min',
  },
];

const Homepage = () => {
  console.log('Homepage loaded');
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 md:py-32 bg-muted">
          <div className="container relative text-center">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Your next meal, <span className="text-primary">delivered.</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground md:text-xl">
              Discover local favorites and get delicious food delivered to your door, fast.
            </p>
            <div className="max-w-xl mx-auto mt-8">
              <form className="flex w-full gap-2">
                <Input
                  type="search"
                  placeholder="Find a restaurant or dish..."
                  className="flex-grow h-12 text-base"
                  aria-label="Search for restaurants or dishes"
                />
                <Button type="submit" size="lg" className="h-12" aria-label="Search">
                  <Search className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Cuisine Categories Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {cuisineCategories.map((cat) => (
                <CuisineCategoryPill
                  key={cat.name}
                  cuisine={cat.name}
                  icon={cat.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Popular Near You Section */}
        <section className="py-12 bg-muted/50 md:py-16">
          <div className="container">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-center">Popular Near You</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {popularRestaurants.map((resto) => (
                <RestaurantCard key={resto.slug} {...resto} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Newly Added Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-center">Newly Added</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {newRestaurants.map((resto) => (
                <RestaurantCard key={resto.slug} {...resto} />
              ))}
            </div>
             <div className="mt-12 text-center">
                <Button asChild size="lg" variant="outline">
                    <Link to="/restaurant-listing">View All Restaurants</Link>
                </Button>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Homepage;