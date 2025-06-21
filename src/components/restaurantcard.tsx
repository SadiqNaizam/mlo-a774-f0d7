import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Star, Clock } from 'lucide-react';

interface RestaurantCardProps {
  slug: string;
  name: string;
  imageUrl: string;
  rating: number;
  cuisineTypes: string[];
  deliveryTime: string; // e.g., "25-35 min"
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  slug,
  name,
  imageUrl,
  rating,
  cuisineTypes,
  deliveryTime,
}) => {
  console.log(`RestaurantCard loaded for: ${name}`);

  // A simple function to render star rating
  const renderRating = (value: number) => {
    return (
      <div className="flex items-center gap-1.5">
        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        <span className="font-semibold text-foreground">{value.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <Link to="/restaurant-detail" className="block group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg">
      <Card className="w-full overflow-hidden transition-all duration-300 ease-in-out border rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageUrl || 'https://via.placeholder.com/400x225'}
              alt={`Photo of ${name}`}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-lg font-bold tracking-tight group-hover:text-primary">
              {name}
            </CardTitle>
            {renderRating(rating)}
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-2">
              {cuisineTypes.slice(0, 3).map((cuisine) => (
                <Badge key={cuisine} variant="secondary" className="font-normal">
                  {cuisine}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <Clock className="w-4 h-4" />
              <span>{deliveryTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;