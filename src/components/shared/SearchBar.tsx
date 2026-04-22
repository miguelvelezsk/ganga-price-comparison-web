import { useState } from "react";
import { Search, X } from 'lucide-react';

interface SearchBarProps {
    setProductSearch: (productSearch: string) => void;
    productSearch: string;
}

export default function SearchBar({ setProductSearch, productSearch }: SearchBarProps) {
    const [productName, setProductName] = useState('');

    const handleSearch = () => {
        if (productName.trim()) {
            setProductSearch(productName.trim());
        }
        console.log("Product Search: ", productSearch);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
            console.log("Product Search: ", productSearch);
        }
    };

    const handleClear = () => {
        setProductName('');
        setProductSearch('');
    };

    return (
        <header className="flex shrink-0 px-12 items-start w-full">
            <div className="flex flex-col items-start justify-center w-full gap-3 mt-10 mb-5">
                <h1 className="font-header text-primary font-semibold text-2xl md:text-4xl mb-5">Encuentra el mejor precio para tus productos</h1>
                <div className="flex items-center h-16 w-full md:w-2/4 h-14 px-1 pr-4 text-sm md:text-lg border border-neutral rounded-[0.5rem] bg-tertiary overflow-hidden">
                    <input placeholder="Buscar productos..." value={productName} className="w-full h-full px-4 outline-none bg-transparent placeholder:text-neutral" type="text" onChange={(e) => setProductName(e.target.value)} onKeyDown={handleKeyDown} />
                    {productName.length > 0 && (
                        <button
                            onClick={handleClear}
                            className="flex items-center justify-center w-5 h-5 text-neutral hover:text-primary"
                        >
                            <X size={24} />
                        </button>
                    )}
                    <button
                        onClick={handleSearch}
                        className="flex items-center justify-center rounded-3xl w-15 h-10 hover:bg-hover font-inter bg-secondary cursor-pointer text-white ml-3 rounded-[0.5rem]"
                    >
                        <Search size={24} />
                    </button>
                </div>
            </div>
        </header>
    )

}