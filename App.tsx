import React, { useState, useMemo } from 'react';
import { Product } from './types';
import { AUTOMOTIVE_PRODUCTS } from './data/products';
import ProductSearch from './components/ProductSearch';
import { CarIcon, WrenchIcon } from './components/icons/Icons';

// --- Helper Functions ---
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

// --- Product Card Component ---
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-5 flex flex-col justify-between transition-transform transform hover:scale-[1.02] hover:border-cyan-500/50">
            <div>
                <div className="flex justify-between items-start">
                    <p className="text-sm font-mono text-slate-400">{product.id}</p>
                    <div className={`text-xs font-bold px-2 py-1 rounded-full ${getStockColor(product.quantity)}`}>
                        {product.quantity} EN STOCK
                    </div>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mt-1">{product.name}</h3>
                <p className="text-xs text-slate-500 uppercase font-semibold mt-1">{product.category}</p>
                <p className="text-slate-300 mt-3 text-sm h-10">{product.description.substring(0, 60)}...</p>
            </div>
            <div className="mt-4">
                <p className="text-2xl font-bold text-slate-100">{formatCurrency(product.price)}</p>
            </div>
        </div>
    );
};

// --- Main App Component ---
const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(AUTOMOTIVE_PRODUCTS.map(p => p.category));
    return ['All', ...Array.from(uniqueCategories).sort()];
  }, []);

  const filteredProducts = useMemo(() => {
    return AUTOMOTIVE_PRODUCTS.filter(product => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch = 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.id.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex justify-center p-4 sm:p-6">
      <div className="w-full max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <CarIcon className="h-12 w-12 text-cyan-400" />
            <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
              Inventario Automotriz
            </h1>
          </div>
          <p className="text-lg text-slate-400">
            Consulte los detalles de los productos por su código.
          </p>
        </header>

        <main>
          {/* --- Filter Controls --- */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-slate-800/50 border border-slate-700 rounded-xl">
            <ProductSearch 
                value={searchTerm} 
                onChange={setSearchTerm}
                placeholder="Buscar por nombre o código (ej: SP-101)"
            />
            <div className="relative">
                 <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full sm:w-64 appearance-none pl-4 pr-10 py-3 text-base bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-colors duration-300 text-slate-100 placeholder-slate-500"
                >
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category === 'All' ? 'Todas las Categorías' : category}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
          </div>

          {/* --- Products List --- */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
          ) : (
            <div className="mt-8 text-center text-slate-400 bg-slate-800/50 p-10 rounded-xl border border-slate-700">
                <WrenchIcon className="mx-auto h-16 w-16 text-slate-500 mb-4" />
                <h2 className="text-xl font-semibold text-slate-300">No se encontraron productos</h2>
                <p className="mt-2">Intente ajustar los filtros de búsqueda o categoría.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
