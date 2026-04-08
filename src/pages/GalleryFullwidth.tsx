import { useState } from 'react'
import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import FilterButtons from '@/components/Elroyale/FilterButtons'
import GalleryItem from '@/components/Elroyale/GalleryItem'

const galleryItems = [
  { image: images.gallery1.url, alt: 'Restaurant', category: 'restaurant' },
  { image: images.gallery2.url, alt: 'Staff', category: 'staff' },
  { image: images.gallery3.url, alt: 'Clients', category: 'clients' },
  { image: images.gallery4.url, alt: 'Restaurant', category: 'restaurant' },
  { image: images.gallery5.url, alt: 'Staff', category: 'staff' },
  { image: images.gallery6.url, alt: 'Clients', category: 'clients' },
  { image: images.gallery7.url, alt: 'Restaurant', category: 'restaurant' },
  { image: images.gallery8.url, alt: 'Staff', category: 'staff' },
  { image: images.gallery9.url, alt: 'Restaurant', category: 'restaurant' },
]

const filters = [
  { label: t('gallery.filter.all'), value: 'all' },
  { label: t('gallery.filter.restaurant'), value: 'restaurant' },
  { label: t('gallery.filter.staff'), value: 'staff' },
  { label: t('gallery.filter.clients'), value: 'clients' },
]

export default function GalleryFullwidth() {
  const [activeFilter, setActiveFilter] = useState('all')
  const filtered = activeFilter === 'all' ? galleryItems : galleryItems.filter((i) => i.category === activeFilter)

  return (
    <>
      <PageTitle subtitle={t('pageTitle.gallery.subtitle')} title={t('pageTitle.gallery.title')} backgroundImage={images.bg9.url} />
      <section className="py-20">
        <div className="container mx-auto px-4 mb-8">
          <FilterButtons filters={filters} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
          {filtered.map((item, i) => (
            <GalleryItem key={i} image={item.image} alt={item.alt} />
          ))}
        </div>
      </section>
    </>
  )
}
