import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from '@/i18n'
import { images } from '@/data/images'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import PageTitle from '@/components/Elroyale/PageTitle'
import SectionHeading from '@/components/Elroyale/SectionHeading'
import TestimonialCarousel from '@/components/Elroyale/TestimonialCarousel'

const features = [
  { icon: images.icon1.url, title: 'features.dailyFreshMenus.title' as const, desc: 'features.dailyFreshMenus.desc' as const },
  { icon: images.icon2.url, title: 'features.freshIngredient.title' as const, desc: 'features.freshIngredient.desc' as const },
  { icon: images.icon3.url, title: 'features.tastyMeals.title' as const, desc: 'features.tastyMeals.desc' as const },
  { icon: images.icon4.url, title: 'features.creativeChef.title' as const, desc: 'features.creativeChef.desc' as const },
  { icon: images.icon5.url, title: 'features.realPizza.title' as const, desc: 'features.realPizza.desc' as const },
  { icon: images.icon6.url, title: 'features.awesomeCoffee.title' as const, desc: 'features.awesomeCoffee.desc' as const },
]

function AnimatedDiv({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useScrollAnimation()
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  )
}

export default function OurStory() {
  return (
    <>
      <PageTitle
        subtitle={t('pageTitle.ourStory.subtitle')}
        title={t('pageTitle.ourStory.title')}
        backgroundImage={images.bg8.url}
        breadcrumbs={[
          { label: t('breadcrumb.home'), to: '/' },
          { label: t('breadcrumb.about'), to: '/' },
          { label: t('breadcrumb.ourStory') },
        ]}
      />

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <AnimatedDiv>
              <img src={images.logoDark.url} alt="" className="h-16 mx-auto lg:mx-0 mb-6" />
              <span className="block text-primary text-2xl mb-2" style={{ fontFamily: 'var(--font-accent)' }}>
                {t('about.subtitle')}
              </span>
              <h2 className="text-2xl lg:text-3xl mb-4">{t('about.title')}</h2>
              <img src={images.shape2.url} alt="" className="mb-4 h-3" aria-hidden="true" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t('about.description')}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t('about.paragraph1')}</p>
              <img src={images.signature.url} alt="Signature" className="h-10 mb-6" />
              <Link to="/reservation" className="inline-block px-8 py-3 bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary/90">
                {t('about.reservationBtn')}
              </Link>
            </AnimatedDiv>

            <AnimatedDiv delay={0.2}
              className="relative min-h-[500px] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${images.bg12.url})` } as any}
            >
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 text-center text-white p-8">
                <span className="block text-primary text-2xl mb-2" style={{ fontFamily: 'var(--font-accent)' }}>
                  {t('about.openingTimes.subtitle')}
                </span>
                <h3 className="text-2xl text-white mb-8">{t('about.openingTimes.title')}</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between gap-8">
                    <span className="text-white/70">{t('about.openingTimes.weekdays')}</span>
                    <span>{t('about.openingTimes.weekdaysHours')}</span>
                  </li>
                  <li className="flex justify-between gap-8">
                    <span className="text-white/70">{t('about.openingTimes.saturday')}</span>
                    <span>{t('about.openingTimes.saturdayHours')}</span>
                  </li>
                  <li className="flex justify-between gap-8">
                    <span className="text-white/70">{t('about.openingTimes.sunday')}</span>
                    <span>{t('about.openingTimes.sundayHours')}</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <span className="text-white/60 text-xs block mb-1">{t('about.openingTimes.callLabel')}</span>
                  <a href="tel:0201023456789" className="text-primary text-xl font-semibold">{t('about.openingTimes.phone')}</a>
                </div>
              </div>
            </AnimatedDiv>

            <AnimatedDiv delay={0.4}>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t('about.paragraph2')}</p>
              <img src={images.feature1.url} alt="" className="w-full h-64 object-cover" />
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Text Banner */}
      <section className="py-20 relative bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${images.bg16.url})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="block text-primary text-3xl mb-2" style={{ fontFamily: 'var(--font-accent)' }}>
            {t('banner.weCreateMemories.subtitle')}
          </span>
          <h2 className="text-white text-3xl lg:text-5xl">{t('banner.weCreateMemories.title')}</h2>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <AnimatedDiv key={feature.title} delay={i * 0.1} className="text-center p-8">
                <img src={feature.icon} alt="" className="h-16 mx-auto mb-6" />
                <h4 className="text-lg mb-3">{t(feature.title)}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(feature.desc)}</p>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative bg-cover bg-center" style={{ backgroundImage: `url(${images.bg1.url})` }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeading subtitle={t('testimonials.subtitle')} title={t('testimonials.title')} light />
          <TestimonialCarousel light />
        </div>
      </section>
    </>
  )
}
