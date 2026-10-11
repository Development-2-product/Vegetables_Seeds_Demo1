import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/cards/ProductCard';
import { products, categories, Product } from '@/data/products';

interface ProductExplorerProps {
  onRequest: (product: Product) => void;
}

type SortOption = 'featured' | 'az' | 'category';

const sortLabels: Record<SortOption, string> = {
  featured: 'Featured',
  az: 'A–Z',
  category: 'Category',
};

export default function ProductExplorer({ onRequest }: ProductExplorerProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || 'all');
  const [selectedSeason, setSelectedSeason] = useState<string>('all');
  const [selectedGrowingType, setSelectedGrowingType] = useState<string>('all');
  const [sort, setSort] = useState<SortOption>('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (!categoryParam) {
      setSelectedCategory('all');
      return;
    }

    if (categories.some((category) => category.slug === categoryParam)) {
      setSelectedCategory(categoryParam);
      return;
    }

    // Retired category links should not silently turn into an unfiltered
    // catalogue. Clean the URL and return visitors to the complete range.
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('category');
    setSearchParams(nextParams);
    setSelectedCategory('all');
  }, [searchParams, setSearchParams]);

  const seasonOptions = useMemo(() => {
    const set = new Set(products.map((p) => p.season));
    return Array.from(set).sort();
  }, []);

  const growingTypeOptions = useMemo(() => {
    const set = new Set(products.map((p) => p.growingType));
    return Array.from(set).sort();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.cropType.toLowerCase().includes(q) ||
          p.characteristics.some((c) => c.toLowerCase().includes(q)) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'all') {
      const category = categories.find((c) => c.slug === selectedCategory);
      if (category) {
        result = result.filter((p) => p.category === category.name);
      }
    }

    if (selectedSeason !== 'all') {
      result = result.filter((p) => p.season === selectedSeason);
    }

    if (selectedGrowingType !== 'all') {
      result = result.filter((p) => p.growingType === selectedGrowingType);
    }

    switch (sort) {
      case 'az':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'category':
        result.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        result.sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [search, selectedCategory, selectedSeason, selectedGrowingType, sort]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const activeFilterCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedSeason !== 'all' ? 1 : 0) +
    (selectedGrowingType !== 'all' ? 1 : 0);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setVisibleCount(9);
    const nextParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', value);
    }
    setSearchParams(nextParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedSeason('all');
    setSelectedGrowingType('all');
    setSearch('');
    setVisibleCount(9);
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('category');
    setSearchParams(nextParams);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-400" />
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(9);
            }}
            placeholder="Search seeds by name, category, or keyword..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl text-sm bg-cream-50 border border-cream-300 focus:border-forest-600 outline-none transition-colors duration-300 shadow-soft"
            aria-label="Search products"
          />
          {search && (
            <button
              onClick={() => {
                setSearch('');
                setVisibleCount(9);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-cream-200 flex items-center justify-center text-charcoal-500 hover:bg-cream-300 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex w-full items-center gap-3 sm:w-auto">
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className={`inline-flex flex-1 items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-300 sm:flex-none sm:px-5 ${
              showFilters || activeFilterCount > 0
                ? 'bg-forest-800 text-cream-50 shadow-soft'
                : 'bg-cream-50 text-forest-800 border border-cream-300 shadow-soft hover:bg-cream-100'
            }`}
            aria-expanded={showFilters}
            aria-controls="product-filters"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="px-2 py-0.5 rounded-full text-xs bg-cream-50/20">{activeFilterCount}</span>
            )}
          </button>

          <div className="relative min-w-0 flex-1 sm:flex-none">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="w-full appearance-none pl-4 pr-10 py-3.5 rounded-2xl text-sm font-medium bg-cream-50 border border-cream-300 focus:border-forest-600 outline-none transition-colors duration-300 shadow-soft cursor-pointer sm:w-auto sm:pl-5 sm:pr-12"
              aria-label="Sort products"
            >
              {(Object.keys(sortLabels) as SortOption[]).map((key) => (
                <option key={key} value={key}>
                  {sortLabels[key]}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400 sm:right-4" />
          </div>
        </div>
      </div>

      {showFilters && (
        <div id="product-filters" className="glass rounded-2xl p-5 sm:p-6 mb-8 shadow-soft animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <FilterGroup
              label="Category"
              id="category-filter"
              value={selectedCategory}
              options={[{ value: 'all', label: 'All Categories' }, ...categories.map((c) => ({ value: c.slug, label: c.name }))]}
              onChange={handleCategoryChange}
            />
            <FilterGroup
              label="Season"
              id="season-filter"
              value={selectedSeason}
              options={[{ value: 'all', label: 'All Seasons' }, ...seasonOptions.map((s) => ({ value: s, label: s }))]}
              onChange={(v) => {
                setSelectedSeason(v);
                setVisibleCount(9);
              }}
            />
            <FilterGroup
              label="Growing Type"
              id="growing-type-filter"
              value={selectedGrowingType}
              options={[{ value: 'all', label: 'All Types' }, ...growingTypeOptions.map((g) => ({ value: g, label: g }))]}
              onChange={(v) => {
                setSelectedGrowingType(v);
                setVisibleCount(9);
              }}
            />
          </div>

          {activeFilterCount > 0 && (
            <div className="mt-4 pt-4 border-t border-cream-300/50 flex items-center justify-between">
              <span className="text-xs text-charcoal-500">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-forest-700 hover:text-forest-900 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Clear all filters
              </button>
            </div>
          )}
        </div>
      )}

      {visibleProducts.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-16 h-16 rounded-full bg-cream-200 flex items-center justify-center mx-auto mb-4">
            <Search className="w-7 h-7 text-charcoal-400" />
          </div>
          <h3 className="text-lg font-bold text-forest-900 mb-2 font-display">No products found</h3>
          <p className="text-sm text-charcoal-500 mb-6">
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <button
            onClick={clearFilters}
            className="px-6 py-3 rounded-full text-sm font-semibold bg-forest-800 text-cream-50 hover:bg-forest-900 transition-colors duration-300"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProducts.map((product, i) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${Math.min(i * 50, 300)}ms` }}
              >
                <ProductCard product={product} onRequest={onRequest} />
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 9)}
                className="px-8 py-3.5 rounded-full text-sm font-semibold bg-forest-800 text-cream-50 hover:bg-forest-900 transition-all duration-300 shadow-soft active:scale-95"
              >
                Load More Products
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

interface FilterGroupProps {
  id: string;
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

function FilterGroup({ id, label, value, options, onChange }: FilterGroupProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wider text-botanical-600 mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none px-4 py-3 rounded-xl text-sm bg-white border border-cream-300 focus:border-forest-600 outline-none transition-colors duration-300 cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400 pointer-events-none" />
      </div>
    </div>
  );
}
