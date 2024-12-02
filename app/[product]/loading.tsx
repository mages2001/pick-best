import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function loading() {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {
                Array.from({ length: 10 }, (_, index) => (
                    <Card className="w-[350px]">
                        <CardHeader>
                            <div className="w-6 h-6 bg-gray-200 animate-pulse rounded-md"></div>
                        </CardHeader>
                        <CardContent>
                            <div className="w-full h-[250px] bg-gray-200 animate-pulse rounded-md"></div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <div className="w-full flex flex-col mr-2">
                                <div className="font-bold text-2xl bg-gray-200 animate-pulse h-12 rounded-md"></div>
                            </div>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}