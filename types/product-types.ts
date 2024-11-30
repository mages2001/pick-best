import exp from "constants";

interface Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    price: number; // Price of the product
    currency: string; // Currency (e.g., "USD", "EUR")
    images: string[]; // Array of image URLs
    description: string; // Detailed product description
    specifications?: {
        [key: string]: string | number; // Key-value pairs for product specs (e.g., size, weight)
    };
    category: string; // Product category (e.g., "Electronics")
    tags?: string[]; // Optional tags for search optimization
    rating?: number; // Average rating (0 to 5)
    reviewCount?: number; // Number of reviews
    reviews?: {
        user: string;
        rating: number; // User rating (0 to 5)
        comment: string;
        date: string; // Date of review
    }[];
    stock: {
        inStock: boolean; // Whether the product is in stock
        quantity?: number; // Available quantity (optional)
    };
    variants?: {
        [variantName: string]: string | number; // e.g., "color": "red", "size": "M"
    }[];
    shippingInfo?: {
        estimatedDeliveryTime: string; // e.g., "3-5 business days"
        shippingCost: number; // Shipping cost
        freeShipping?: boolean; // Whether free shipping is available
    };
    returnPolicy?: {
        days: number; // Number of days for returns
        conditions?: string; // Conditions for the return
    };
    videos?: string[]; // Array of video URLs for demos or unboxings
    socialProof?: {
        userGeneratedContentUrls?: string[]; // URLs to user photos/videos
        socialMediaShares?: number; // Number of times the product was shared
    };
    isFeatured?: boolean; // Whether the product is featured or not
    relatedProducts?: Product[]; // List of related products
    questions?: {
        question: string;
        answer?: string; // Optional answer by the seller or community
        askedBy: string; // User who asked the question
        date: string; // Date of question
    }[];
}


export type {
    Product
}