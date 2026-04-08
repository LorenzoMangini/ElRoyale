import { motion } from 'framer-motion'
import { t } from '@/i18n'
import { images } from '@/data/images'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import PageTitle from '@/components/Elroyale/PageTitle'
import SectionHeading from '@/components/Elroyale/SectionHeading'
import TestimonialCarousel from '@/components/Elroyale/TestimonialCarousel'

const chefs = [
  { name: 'Kevin Dawn', role: 'CEO & Founder', image: images.team1.url },
  { name: 'Marian Peterson', role: 'Master Chef', image: images.team2.url },
  { name: 'James Wane', role: 'Thai Master Chef', image: images.team3.url },
  { name: 'Madlien Smith', role: 'Chinese Master Chef', image: images.team4.url },
  { name: 'Martin Hope', role: 'Chef Assistant', image: images.team5.url },
  { name: 'Jennifer Tom', role: 'Kitchen Care', image: images.team6.url },
]

export default function OurChefs() {
  return (
    <>
      <PageTitle subtitle={t('pageTitle.ourChefs.subtitle')} title={t('pageTitle.ourChefs.title')} backgroundImage={images.bg8.url}
        breadcrumbs={[{ label: t('breadcrumb.home'), to: '/' }, { label: t('breadcrumb.about'), to: '/' }, { label: t('pageTitle.ourChefs.title') }]}
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle={t('team.subtitle')} title={t('pageTitle.ourChefs.title')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chefs.map((chef, i) => {
              const { ref, isInView } = useScrollAnimation()
              return (
                <motion.div key={i} ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center group">
                  <div className="relative overflow-hidden mb-4">
                    <img src={chef.image} alt={chef.name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <img src={images.shape2.url} alt="" className="mx-auto mb-3 h-3" aria-hidden="true" />
                  <h4 className="text-lg">{chef.name}</h4>
                  <span className="text-primary text-sm">{chef.role}</span>
                  <p className="text-muted-foreground text-xs mt-2 max-w-xs mx-auto">Passion for cooking is in his genes. He grew up appreciating outstanding food and service at an early age.</p>
                </motion.div>
              )
            })}
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
    </>
  )
}
