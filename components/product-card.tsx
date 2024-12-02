import * as React from "react"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Star } from "lucide-react"
import { IProductList } from "@/types/product-types";
import Image from 'next/image';


export function ProductCard({ item }: { item: IProductList }) {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <Image src="/amazon-icon.svg" alt="Amazon icon" width={24} height={24} />
            </CardHeader>
            <CardContent>
                <Image src={item.image} alt="product image" width={200} height={200} />
            </CardContent>
            <CardFooter className="flex justify-between">
                <div className="w-full flex flex-col mr-2">
                    <div className="font-bold text-2xl">{item.title}</div>

                    <div className="flex flex-row justify-between">
                        <div className="font-semibold text-xl">
                            <div>
                                <span>{item.currentPrice}</span>
                                &nbsp;
                                <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                            </div>
                            <div>{item.discountPercent}</div>
                        </div>
                        <div className="grid grid-cols-1 gap-0 content-between text-xl font-medium">
                            <div className="flex flex-row"> {item.stars} <Star color="#ffd000" absoluteStrokeWidth /></div>
                            <div>{item.reviewCount}</div>
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
