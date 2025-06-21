import React from 'react';
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

interface MenuItemCardProps {
  id: string | number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ id, name, description, price, imageUrl }) => {
  console.log('MenuItemCard loaded for:', name);

  const handleAddToCart = () => {
    toast.success(`${name} has been added to your cart.`);
    console.log(`Added item ${id} to cart.`);
    // In a real app, you would dispatch an action to update the cart state here.
  };

  return (
    <Card className="flex flex-row items-center justify-between p-4 transition-all hover:shadow-md">
      <div className="flex-1 pr-4">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
        <p className="text-base font-bold mt-2">${price.toFixed(2)}</p>
      </div>

      <div className="relative flex-shrink-0">
        <img
          src={imageUrl || 'https://via.placeholder.com/100'}
          alt={name}
          className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg"
        />
        <Button
          aria-label={`Add ${name} to cart`}
          size="icon"
          className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full shadow-lg"
          onClick={handleAddToCart}
        >
          <PlusCircle className="h-5 w-5" />
        </Button>
      </div>
    </Card>
  );
};

export default MenuItemCard;