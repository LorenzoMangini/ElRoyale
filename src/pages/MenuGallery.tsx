import { useState } from 'react'
import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import SectionHeading from '@/components/Elroyale/SectionHeading'
import FilterButtons from '@/components/Elroyale/FilterButtons'

const items = [
  { name: 'Grilled Fillet', price: '$26.95', desc: 'Pork fillet, ginger, garlic, honey, pepper & canola oil.', category: 'drinks', image: images.menu1.url },
  { name: 'Alder Grilled Seafood Paella', price: '$40.95', desc: 'Monkfish, onion, paella rice, smoked paprika.', category: 'lunch', image: images.menu2.url },
  { name: 'Chicken Breast', price: '$33.95', desc: 'Paupiette of chicken, blue cheese, rosemary.', category: 'dinner', image: images.menu3.url },
  { name: 'Sea Trout', price: '$44.95', desc: 'Roast trout, English asparagus, watercress & royals.', category: 'dessert', image: images.menu6.url },
  { name: 'Smoked Paprika Hummus', price: '$13.95', desc: 'Red peppers, roasted garlic, lemon slices, olives.', category: 'lunch', image: images.menu5.url },
  { name: 'Red Cheese Burger', price: '$11.95', desc: 'Eggs, bacon and cherry-tomatoes with bread.', category: 'dinner', image: images.menu4.url },
]

const filters = [
  { label: t('menu.filter.all'), value: 'all' },
  { label: t('menu.filter.lunch'), value: 'lunch' },
  { label: t('menu.filter.dinner'), value: 'dinner' },
  { label: t('menu.filter.dessert'), value: 'dessert' },
  { label: t('menu.filter.drinks'), value: 'drinks' },
]

export default function MenuGallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const filtered = activeFilter === 'all' ? items : items.filter((i) => i.category === activeFilter)

  return (
    <>
      <PageTitle subtitle={t('pageTitle.menuClassic.subtitle')} title={t('pageTitle.menuClassic.title')} backgroundImage={images.bg11.url}
        breadcrumbs={[{ label: t('breadcrumb.home'), to: '/' }, { label: 'Menu' }]}
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle={t('menu.discover.subtitle')} title={t('menu.discover.title')} description={t('menu.discover.desc')} />
          <FilterButtons filters={filters} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div key={item.name} className="group text-center">
                <div className="overflow-hidden mb-4">
                  <img src={item.image} alt={item.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h4 className="text-lg mb-1">{item.name}</h4>
                <p className="text-muted-foreground text-xs mb-2">{item.desc}</p>
                <span className="text-primary font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
