import { IScraper } from '@/types/global-classes';
import { IProductList } from '@/types/product-types';
import * as cheerio from 'cheerio';

export default class BrightData implements IScraper {
    constructor() { }

    public async getAmazonProduct(s: string): Promise<IProductList[]> {
        const amazonHTML = await this.scrapUrl(`https://amazon.in/s?k=${s.replaceAll(' ', '+')}`);
        const $ = cheerio.load(amazonHTML);

        // Array to store extracted product details
        const products: IProductList[] = [];

        // Select all search result items
        $('[data-component-type="s-search-result"]').each((_, element) => {
            const product: IProductList = {
                image: '',
                title: '',
                link: '',
                stars: '',
                reviewCount: '',
                currentPrice: '',
                originalPrice: '',
                discountPercent: '',
            };

            // Extract product image URL
            const imageElement = $(element).find('[data-component-type="s-product-image"] a img.s-image');
            product.image = imageElement.attr('src') || '';

            // Extract product title and redirect link
            const titleElement = $(element).find('[data-cy="title-recipe"] h2 a');
            product.title = titleElement.find('span.a-text-normal').text().trim() || '';
            product.link = titleElement.attr('href') || '';

            // Extract reviews and stars
            const reviewsBlock = $(element).find('[data-cy="reviews-block"]');
            product.stars = reviewsBlock.find('span:first-child .a-icon-alt').text().trim().split(' ')[0] || '';
            product.reviewCount = reviewsBlock.find('span:nth-child(2) span').text().trim() || '';

            // Extract price details
            const priceBlock = $(element).find('[data-cy="price-recipe"]');
            product.currentPrice = priceBlock.find('.a-row .a-row a .a-price .a-offscreen').first().text().trim() || '';
            product.originalPrice = priceBlock.find('.a-row .a-row .a-section .a-price .a-offscreen').text().trim() || '';
            product.discountPercent = priceBlock.find('.a-row .a-row > span:last-child').text().trim() || '';

            // Add extracted product to the list
            products.push(product);
        });

        // Log the extracted product details
        console.log(products);

        // return productsInfo;
        return products;
        /* Amazon HTML Structure
        [data-component-type="s-search-result"][]
            [data-component-type="s-impression-logger"]
                [data-component-type="s-impression-counter"]
                    .a-declarative
                        .s-card-container
                            .a-section
                                .puisg-row
                                    .puisg-col
                                        .puisg-col-inner
                                            .s-product-image-container
                                                [data-component-type="s-product-image"]
                                                    a {images redirect href}
                                                        img .s-image {images url}
                                    .puisg-col
                                        .puisg-col-inner
                                            .a-section
                                                [data-cy="title-recipe"]
                                                    h2 > a {title redirect href}
                                                        span .a-text-normal{title}
                                                [data-cy="reviews-block"]
                                                    span[0] > .a-icon-alt {stars}
                                                    span[1] > span {review count}
                                                .puisg-row
                                                    .puisg-col
                                                        .puisg-col-inner
                                                            [data-cy="price-recipe"]
                                                                .a-row
                                                                    a > span 
                                                                        .a-price 
                                                                            .a-offscreen {current price}
                                                                        .a-section 
                                                                            .a-price .a-offscreen {original price}
                                                                    span[-1] {off percent}
        */
    }

    public async getFlipkartProduct(s: string) {
        return await this.scrapUrl(`https://www.flipkart.com/search?q=${encodeURIComponent(s)}`) as any;
    }

    private async scrapUrl(url: string): Promise<string> {
        // return ''
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env.BRIGHTDATA_API_KEY
        });
        const body = {
            "zone": "pickthebest",
            "format": "raw",
            "url": url,
            "country": "IN"
        }
        const response = await fetch("https://api.brightdata.com/request?async=true", {
            method: 'POST',
            headers,
            body: JSON.stringify(body) as string,
            cache: 'force-cache',
            next: { revalidate: 60 * 60 }
        });
        const text = await response.text();
        return text;
    }
}