import React from 'react';
import { SearchIcon } from './icons/Icons';

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative flex-grow">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <SearchIcon className="h-5 w-5 text-slate-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Buscar productos..."}
        className="w-full pl-11 pr-4 py-3 text-base bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors duration-300 text-slate-100 placeholder-slate-500"
      />
    </div>
  );
};

export default ProductSearch;
