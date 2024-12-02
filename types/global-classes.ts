import { IProductList } from "./product-types";

interface IScraper {
    getAmazonProduct(s: string): Promise<IProductList[]>;
    getFlipkartProduct(s: string): Promise<IProductList[]>;
}

export type {
    IScraper
}