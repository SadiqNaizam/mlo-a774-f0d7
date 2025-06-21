import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import type { LucideProps } from 'lucide-react';

interface CuisineCategoryPillProps {
  cuisine: string;
  icon: React.ElementType<LucideProps>;
  className?: string;
}

const CuisineCategoryPill: React.FC<CuisineCategoryPillProps> = ({ cuisine, icon: Icon, className }) => {
  console.log(`CuisineCategoryPill loaded for: ${cuisine}`);

  const destinationUrl = `/restaurant-listing?cuisine=${cuisine.toLowerCase()}`;

  return (
    <Button
      variant="outline"
      className={`h-12 rounded-full border-gray-300 bg-white px-6 text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${className}`}
      asChild
    >
      <Link to={destinationUrl} aria-label={`Find ${cuisine} restaurants`}>
        <Icon className="mr-2 h-5 w-5 flex-shrink-0" />
        <span>{cuisine}</span>
      </Link>
    </Button>
  );
};

export default CuisineCategoryPill;