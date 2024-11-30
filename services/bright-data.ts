import cheerio from 'cheerio';

export default class BrightData {

    async getAmazonProduct(s: string) {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer f9b10861a95ae3f66993fbf72a5ecdc8f3f1043e5078ac65a13d05be55bb931b'
        });
        const body = {
            "zone": "pickthebest",
            "format": "raw",
            "url": `https://amazon.in/s?k=${s.replaceAll(' ', '+')}`,
            "country": "IN"
        }
        const response = await fetch("https://api.brightdata.com/request?async=true", {
            method: 'POST',
            headers,
            body: JSON.stringify(body) as string
        });
        const text = await response.text();
        return text;
        // const $ = cheerio.load(text);
        // const title = $('span#productTitle').text().trim();
        // const price = $('span#priceblock_ourprice').text().trim();
        // const image = $('img#landingImage').attr('src');
        // const rating = $('span#acrCustomerReviewText').text().trim();
        // return { title, price, image, rating };
    }

    async getFlipkartProduct(s: string) {
        const response = await fetch(`https://amazon.in/s?k=${s.replaceAll(' ', '+')}`);
        const text = await response.text();
        const $ = cheerio.load(text);
        const title = $('div._3wU53n').text().trim();
        const price = $('div._1vC4OE._2rQ-NK').text().trim();
        const image = $('img._3togXc').attr('src');
        const rating = $('div.hGSR34').text().trim();
        return { title, price, image, rating };
    }
}