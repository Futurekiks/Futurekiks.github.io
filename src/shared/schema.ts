import { z } from "zod";

// Product schema
export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
  category: z.string(),
  description: z.string().optional(),
});

export type Product = z.infer<typeof ProductSchema>;

// Cart item schema
export const CartItemSchema = z.object({
  id: z.string(),
  productId: z.string(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
  quantity: z.number(),
});

export type CartItem = z.infer<typeof CartItemSchema>;

// Checkout input schema
export const CheckoutInputSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
  country: z.string().min(2, "Country is required"),
});

export type CheckoutInput = z.infer<typeof CheckoutInputSchema>;

// Sample products data
export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Modern Dining Set",
    price: 1299,
    image: "/table-product.jpg",
    category: "dining-room",
    description: "Elegant modern dining set perfect for contemporary homes"
  },
  {
    id: "2", 
    name: "Comfortable Sofa",
    price: 899,
    image: "/sofa-product.jpg",
    category: "living-room",
    description: "Luxurious and comfortable sofa for your living room"
  },
  {
    id: "3",
    name: "Ergonomic Chair",
    price: 299,
    image: "/chair-product.jpg", 
    category: "office",
    description: "Perfect ergonomic chair for your home office"
  }
];