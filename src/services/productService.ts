import type { Product } from "../types/product";

export async function getProducts(productName: string): Promise<Product[]> {
    try {
        const response = await fetch(`https://localhost:8000/search?product_name=${productName}`);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();
        if (data.length === 0) {
            throw new Error('No se encontraron resultados');
        }
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
} 