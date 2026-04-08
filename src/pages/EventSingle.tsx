import { Link } from 'react-router-dom'
import { MapPin, Ticket } from 'lucide-react'
import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import GalleryItem from '@/components/Elroyale/GalleryItem'

export default function EventSingle() {
  return (
    <>
      <PageTitle subtitle="Mar 21, 2020 - Mar 24, 2020" title="Sunday Steak Roast hanger & cellar from £35 for people" backgroundImage={images.bg2.url} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Allow us to make your next special event extra special. We cater for all sized functions, ideal for your larger functions or an intimate gathering, our team can curate a menu to suit your taste. Reservations are for lunch and dinner, check the availability of your table & book it now!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[images.gallery1, images.gallery2, images.gallery3, images.gallery4, images.gallery5, images.gallery6].map((img) => (
                <GalleryItem key={img.url} image={img.url} alt={img.alt} />
              ))}
            </div>
          </div>
          <div className="max-w-lg mx-auto text-center bg-card p-8">
            <MapPin className="h-6 w-6 text-primary mx-auto mb-3" />
            <h4 className="text-lg mb-2">Our Address</h4>
            <p className="text-muted-foreground text-sm mb-6">Alnahas Building, 2 AlBahr St, Tanta AlGharbia, Egypt.</p>
            <div className="flex items-center justify-center gap-2 text-success text-sm mb-2">
              <Ticket className="h-4 w-4" />
              Tickets Available
            </div>
            <span className="text-primary text-2xl font-semibold block mb-4">$33.95</span>
            <button className="px-8 py-3 bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary/90">
              {t('common.buyTickets')}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
