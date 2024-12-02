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

interface IProductList {
    image: string; // "https://m.media-amazon.com/images/I/8189mzscM6L._AC_UY218_.jpg",
    title: string; // "Samsung Galaxy M35 5G (Thunder Grey,8GB RAM,256GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber | 6000mAh Battery | 120Hz Super AMOLED Display| Without Charger",
    link: string; // "/sspa/click?ie=UTF8&spc=MTo4MzU5ODI2NDg2NzE0MDE5OjE3MzMwMzM1MTk6c3BfYXRmOjMwMDI2MTEyMTI0NDYzMjo6MDo6&url=%2FSamsung-Thunder-Storage-Corning-Gorilla%2Fdp%2FB0D812G7FL%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.VkcI2UoonPAw18HMAtoVocysEQqWT1hyehB0BDviAiPWTY3dAaZDD0bzEHOO2GV5jWXZGxCxWZr7ETUFgm0kWjtGJfFv3DtAWd1getDZxwdcBfeiC3KyqCLmT9qm1c4LuyqV8HFPZ43HrAIOcgEWr_0IS_4I0fGVXQ27jAg-dJ7rL8zcNw9bbGh7N6AdBP9M5S0BW3JyMmBCYZhOzRSifbVrIEIyt7-ApmezE1vv1so.QvoJngrVdarjlPKSFkyWPIgaaQRRnbsff2chp0TSjS8%26dib_tag%3Dse%26keywords%3Dmobile%26qid%3D1733033519%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
    stars: string; // "4.1 out of 5 stars",
    reviewCount: string; // "5,148",
    currentPrice: string; // "₹20,499",
    originalPrice: string; // "₹27,499",
    discountPercent: string; // "(25% off)",
}


export type {
    Product,
    IProductList
}