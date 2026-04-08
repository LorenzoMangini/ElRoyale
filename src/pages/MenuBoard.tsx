import { useState } from 'react'
import { Search } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import SectionHeading from '@/components/Elroyale/SectionHeading'
import FilterButtons from '@/components/Elroyale/FilterButtons'

const menuItems = [
  { name: 'Grilled American Fillet', price: '$26.95', desc: 'Pork fillet, ginger, garlic, honey, pepper & canola oil.', tag: 'New', category: 'dessert', image: images.gallery1.url },
  { name: 'Grilled Seafood Paella', price: '$33.95', desc: 'Monkfish, onion, paella rice, garlic & smoked paprika.', tag: 'Recommended', category: 'drinks', image: images.gallery2.url },
  { name: 'Roast Sea Trout', price: '$37.95', desc: 'Roast trout, English asparagus, watercress & royals.', tag: 'Recommended', category: 'lunch', image: images.gallery3.url },
  { name: 'Smoked Paprika Hum', price: '$18.95', desc: 'Red peppers, roasted garlic, lemon slices, olives mint.', tag: 'Selection', category: 'dinner', image: images.gallery4.url },
  { name: 'Purple Cabbage Burger', price: '$25.95', desc: 'Pork fillet, ginger, garlic, honey, pepper & canola oil.', tag: 'Selection', category: 'dessert', image: images.gallery5.url },
  { name: 'Tofu Cheese', price: '$26.95', desc: 'Monkfish, onion, paella rice, garlic & smoked paprika.', tag: 'Selection', category: 'drinks', image: images.gallery6.url },
  { name: 'Spanish Tapas', price: '$37.95', desc: 'Roast trout, English asparagus, watercress & royals.', tag: 'New', category: 'lunch', image: images.gallery7.url },
  { name: 'Spain Varied Mix', price: '$18.95', desc: 'Red peppers, roasted garlic, lemon slices, olives mint.', tag: 'Recommended', category: 'drinks', image: images.gallery8.url },
]

const filters = [
  { label: t('menu.filter.all'), value: 'all' },
  { label: t('menu.filter.lunch'), value: 'lunch' },
  { label: t('menu.filter.dinner'), value: 'dinner' },
  { label: t('menu.filter.dessert'), value: 'dessert' },
  { label: t('menu.filter.drinks'), value: 'drinks' },
]

export default function MenuBoard() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const filtered = activeFilter === 'all' ? menuItems : menuItems.filter((i) => i.category === activeFilter)

  return (
    <>
      <PageTitle subtitle={t('pageTitle.menuClassic.subtitle')} title={t('pageTitle.menuClassic.title')} backgroundImage={images.bg11.url}
        breadcrumbs={[{ label: t('breadcrumb.home'), to: '/' }, { label: 'Menu' }]}
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle={t('menu.discover.subtitle')} title={t('menu.discover.title')} description={t('menu.discover.desc')} />
          <FilterButtons filters={filters} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {filtered.map((item) => (
            <div key={item.name} className="relative group h-96 bg-cover bg-center cursor-pointer" style={{ backgroundImage: `url(${item.image})` }} onClick={() => setLightboxImage(item.image)}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Search className="h-8 w-8 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                {item.tag && <span className="text-[10px] uppercase tracking-wider text-primary bg-primary/20 px-2 py-1 mb-2 inline-block">{item.tag}</span>}
                <h4 className="text-xl text-white mb-1">{item.name}</h4>
                <img src={images.shape4.url} alt="" className="h-2 mb-2" aria-hidden="true" />
                <p className="text-white/70 text-xs mb-2">{item.desc}</p>
                <span className="text-primary font-semibold">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
        <DialogContent className="max-w-4xl p-0 border-none bg-transparent">
          {lightboxImage && <img src={lightboxImage} alt="" className="w-full h-auto" />}
        </DialogContent>
      </Dialog>
    </>
  )
}
