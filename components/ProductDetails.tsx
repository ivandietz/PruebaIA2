import React from 'react';
import { Product } from '../types';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    }).format(amount);
  };

  const getStockColor = (quantity: number) => {
    if (quantity > 100) return 'text-green-400 bg-green-900/50';
    if (quantity > 20) return 'text-yellow-400 bg-yellow-900/50';
    return 'text-red-400 bg-red-900/50';
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg p-6 sm:p-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-slate-700 pb-4 mb-4">
        <div>
            <h2 className="text-3xl font-bold text-cyan-400">{product.name}</h2>
            <p className="text-slate-400 text-md font-mono">CÓDIGO: {product.id}</p>
        </div>
        <div className={`mt-4 sm:mt-0 text-sm font-bold px-3 py-1 rounded-full ${getStockColor(product.quantity)}`}>
          {product.quantity} EN STOCK
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Descripción</h3>
          <p className="text-slate-300 mt-1">{product.description}</p>
        </div>
        <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Categoría</h3>
            <p className="text-slate-300 mt-1">{product.category}</p>
        </div>
        <div className="col-span-1 md:col-span-2">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Precio Unitario</h3>
            <p className="text-4xl font-bold text-slate-100 mt-1">{formatCurrency(product.price)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
