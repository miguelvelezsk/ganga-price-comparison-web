import type { Product } from "@/types/product";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SquareArrowOutUpRight, Star } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className="overflow-hidden rounded-[0.5rem] font-body bg-tertiary shadow-[0_0_30px_rgba(0,0,0,0.1)] p-6">
            <CardHeader className="p-0">
                <div className="flex flex-col gap-5 mb-5">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex justify-between pr-2 w-full">
                            <Badge className={cn("rounded-[0.3rem] font-semibold text-xs", product.source === 'Exito' ? 'text-black bg-exito' : 'text-white bg-secondary')}>{product.source}</Badge>
                            {product.rating !== 'Información no disponible' &&
                                <p className="flex items-center gap-2 text-sm text-primary">
                                    <Star className="" size={20} /> {product.rating}</p>}
                        </div>
                    </div>
                    <CardTitle className="w-full line-clamp-2 object-cover text-xl text-primary">{product.title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-0 h-3">
                <p className="text-secondary font-bold">{product.shipping !== 'Información no disponible' && product.shipping}</p>
            </CardContent>
            <CardFooter className="flex justify-between text-primary w-full p-2 mt-5">
                <p className="text-2xl md:text-3xl lg:text-3xl font-semibold">{formatCurrency(product.price)} <span className="text-base">COP</span></p>
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <SquareArrowOutUpRight size={30} className="cursor-pointer pt-1 hover:text-secondary hover:scale-105 transition-all duration-300" />
                </a>
            </CardFooter>
        </Card>
    );
}