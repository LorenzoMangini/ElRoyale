import { Link } from 'react-router-dom'
import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import SectionHeading from '@/components/Elroyale/SectionHeading'
import TestimonialCarousel from '@/components/Elroyale/TestimonialCarousel'

export default function OurGuestbook() {
  return (
    <>
      <PageTitle subtitle={t('pageTitle.guestbook.subtitle')} title={t('pageTitle.guestbook.title')} backgroundImage={images.bg9.url}
        breadcrumbs={[{ label: t('breadcrumb.home'), to: '/' }, { label: t('breadcrumb.guestbook') }]}
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="block text-primary text-2xl mb-2" style={{ fontFamily: 'var(--font-accent)' }}>{t('guestbook.welcome.subtitle')}</span>
              <h2 className="text-2xl lg:text-3xl mb-4">{t('guestbook.welcome.title')}</h2>
              <img src={images.shape2.url} alt="" className="mb-4 h-3" aria-hidden="true" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t('guestbook.welcome.desc')}</p>
              <img src={images.signature.url} alt="Signature" className="h-10" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={images.banner3.url} alt="" className="w-full h-64 object-cover" />
              <img src={images.banner4.url} alt="" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 relative bg-cover bg-center" style={{ backgroundImage: `url(${images.bg1.url})` }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeading subtitle={t('testimonials.subtitle')} title={t('testimonials.title')} light />
          <TestimonialCarousel light />
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src={images.banner1.url} alt="" className="w-full h-64 object-cover" />
              <img src={images.banner2.url} alt="" className="w-full h-64 object-cover" />
            </div>
            <div>
              <span className="block text-primary text-2xl mb-2" style={{ fontFamily: 'var(--font-accent)', color: '#c9a96e' }}>{t('banner.hostEvent.subtitle')}</span>
              <h3 className="text-3xl text-gray-900 mb-4">{t('banner.hostEvent.title')}</h3>
              <img src={images.shape2.url} alt="" className="mb-4 h-3" aria-hidden="true" />
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{t('banner.hostEvent.desc')}</p>
              <Link to="/events" className="text-sm font-semibold text-gray-900 underline underline-offset-4 hover:text-primary">
                {t('banner.hostEvent.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}