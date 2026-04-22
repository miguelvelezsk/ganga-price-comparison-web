import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface CardGridProps {
    products: Product[];
}

export default function CardGrid({ products }: CardGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-12 my-4 mt-10">
            {products.map((product) => (
                <ProductCard key={product.link} product={product} />
            ))}
        </div>
    );
}