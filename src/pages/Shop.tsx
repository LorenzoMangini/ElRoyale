import { useState } from 'react'
import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import FilterButtons from '@/components/Elroyale/FilterButtons'
import ProductCard from '@/components/Elroyale/ProductCard'

const products = [
  { id: '1', image: images.shopGrid1.url, name: 'Grilled American Fillet', price: '$18.99', categories: ['Light', 'Mexican', 'Organic'], filter: 'main' },
  { id: '2', image: images.shopGrid2.url, name: 'Roast Sea Trout', price: '$36.99', categories: ['Low Carb', 'Fresh'], filter: 'main' },
  { id: '3', image: images.shopGrid3.url, name: 'Grilled Seafood Paella', price: '$34.99', categories: ['Nut Free', 'Sweet', 'Fresh'], filter: 'soup' },
  { id: '4', image: images.shopGrid4.url, name: 'Chicken Breast', price: '$28.99', categories: ['Grilled', 'Fresh'], filter: 'salads' },
  { id: '5', image: images.shopGrid5.url, name: 'Roasted Steak Roulade', price: '$37.99', categories: ['Light', 'Low Carb', 'Mexican'], filter: 'main' },
  { id: '6', image: images.shopGrid6.url, name: 'Roast Sea Trout', price: '$18.99', categories: ['Sweet', 'Nut Free'], filter: 'desserts' },
  { id: '7', image: images.shopGrid7.url, name: 'Cannoli Cream Cheese', price: '$17.99', categories: ['Light', 'Mexican'], filter: 'desserts' },
  { id: '8', image: images.shopGrid8.url, name: 'Grilled American Fillet', price: '$18.99', categories: ['Light', 'Mexican', 'Organic'], filter: 'salads' },
  { id: '9', image: images.shopGrid9.url, name: 'Spain Tapas', price: '$7.99', categories: ['Light', 'Organic'], filter: 'soup' },
]

const filters = [
  { label: t('shop.filter.all'), value: 'all' },
  { label: t('shop.filter.salads'), value: 'salads' },
  { label: t('shop.filter.soup'), value: 'soup' },
  { label: t('shop.filter.main'), value: 'main' },
  { label: t('shop.filter.desserts'), value: 'desserts' },
]

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('all')
  const filtered = activeFilter === 'all' ? products : products.filter((p) => p.filter === activeFilter)

  return (
    <>
      <PageTitle subtitle={t('pageTitle.shop.subtitle')} title={t('pageTitle.shop.title')} backgroundImage={images.bg6.url} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FilterButtons filters={filters} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => <ProductCard key={product.id} {...product} />)}
          </div>
          <div className="flex justify-center gap-2 mt-12">
            <span className="w-10 h-10 flex items-center justify-center bg-primary text-white text-sm">1</span>
            <span className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground text-sm cursor-pointer hover:bg-primary hover:text-white hover:border-primary">2</span>
          </div>
        </div>
      </section>
    </>
  )
}
