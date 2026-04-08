import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import ReservationForm from '@/components/Elroyale/ReservationForm'

const awards = [
  'The Good Food Award, Gold Seal (2017)',
  'The Organic Food Award, Soil Association (2017)',
  'The Great British & Egyptian Food Award (2016)',
  'The Food Made Good Award (2015)',
  'The Great Food Taste Award (2014)',
  'The Food Award, Egypt (2014)',
  'The Best Food Award, Egypt (2013)',
  'The Best Chef in Egypt & Best Restaurant (2013)',
  'The Best Emerging Egypt Cuisine (2012)',
  'The Best Dining Experience (2011)',
  'The Best Chef in Egypt (2010)',
  'The Egyptian Star (2009)',
]

export default function Reservation() {
  return (
    <>
      <PageTitle
        subtitle={t('pageTitle.reservation.subtitle')}
        title={t('pageTitle.reservation.title')}
        backgroundImage={images.bg2.url}
      />

      <section className="py-0">
        <ReservationForm showBanner />
      </section>

      {/* Awards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex gap-4 overflow-hidden">
              {[images.client1, images.client2, images.client3, images.client4, images.client5, images.client6, images.client7].map((img, i) => (
                <img key={i} src={img.url} alt={img.alt} className="h-16 opacity-50 hover:opacity-100 transition-opacity" />
              ))}
            </div>
            <div>
              <span className="block text-primary text-2xl mb-2" style={{ fontFamily: 'var(--font-accent)' }}>
                {t('awards.subtitle')}
              </span>
              <h3 className="text-2xl mb-4">{t('awards.title')}</h3>
              <p className="text-muted-foreground text-sm mb-6">{t('awards.desc')}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {awards.map((award, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
