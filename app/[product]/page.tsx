import ProductDetails from '@/actions/get-product-details';
import { ProductCard } from '@/components/product-card';
import { IProductList } from '@/types/product-types';
 
export default async function Search({ params }: { params: Promise<{ product: string }> }) {
    const product = (await params).product;
    const productString: IProductList[] = await new ProductDetails().getProductList(product);
    return (
        <div className='w-full h-full flex flex-col'>
            <h1>Search result for {product}</h1>
            <section className='flex flex-wrap justify-center gap-4'>
                    {productString.map((product) => (
                        <ProductCard key={product.link} item={product}></ProductCard>
                    ))}
            </section>
        </div>
    );
}
