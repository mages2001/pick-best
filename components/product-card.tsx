import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { AlignRight, Star } from "lucide-react"
import { IProductList } from "@/types/product-types"

export function ProductCard({ item }: { item: IProductList }) {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <img src="/amazon-icon.svg" alt="Amazon icon" className="w-6 h-6" />
            </CardHeader>
            <CardContent>
                <img src={item.image} alt="product image" />
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
