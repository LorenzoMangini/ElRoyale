import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from '@/i18n'
import { images } from '@/data/images'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import HeroSlider from '@/components/Elroyale/HeroSlider'
import SectionHeading from '@/components/Elroyale/SectionHeading'
import MenuItem from '@/components/Elroyale/MenuItem'
import TestimonialCarousel from '@/components/Elroyale/TestimonialCarousel'
import BlogPostCard from '@/components/Elroyale/BlogPostCard'

const dailySpecials = [
  { name: 'Grilled Fillet', desc: 'Pork fillet, ginger, garlic, honey, pepper & canola oil.', price: '$26.95', image: images.menu1.url },
  { name: 'Smoked Paprika Hummus', desc: 'Red peppers, roasted garlic, lemon slices, olives & mint.', price: '$13.95', image: images.menu5.url },
  { name: 'Roasted Steak Roulade', desc: 'Mint parsley with apple cider salt & spices.', price: '$29.95', image: images.menu7.url },
  { name: 'Alder Grilled Seafood Paella', desc: 'Monkfish, onion, paella rice, smoked paprika.', price: '$40.95', image: images.menu2.url },
  { name: 'Sea Trout', desc: 'Roast trout, English asparagus, watercress & royals.', price: '$44.95', image: images.menu6.url },
  { name: 'Chicken Breast', desc: 'Paupiette of chicken, blue cheese, rosemary.', price: '$33.95', image: images.menu3.url },
]

const blogPosts = [
  { id: '1', image: images.blogGrid1.url, categories: ['Food', 'Recipe'], title: 'Healthy & Simple Recipes That Are Perfect for Spring', date: 'Jan 20, 2020' },
  { id: '2', image: images.blogGrid2.url, categories: ['Chef', 'Dinner'], title: 'What do chefs cook when they have friends over for dinner?', date: 'Jan 20, 2020' },
  { id: '3', image: images.blogGrid3.url, categories: ['Chef', 'Dinner'], title: 'Desserts With Cream Cheese Frosting Taste of Home', date: 'Jan 17, 2020' },
]

function AnimatedSection({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { ref, isInView } = useScrollAnimation()
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  )
}

export default function Index() {
  return (
    <>
      <HeroSlider />

      {/* About Section */}
      <AnimatedSection className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="block text-primary text-2xl mb-2" style={{ fontFamily: 'var(--font-accent)' }}>
              {t('about.subtitle')}
            </span>
            <h2 className="text-2xl lg:text-4xl mb-4">{t('about.title')}</h2>
            <img src={images.shape2.url} alt="" className="mx-auto h-3" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="text-center">
              <img src={images.logoDark.url} alt={images.logoDark.alt} className="h-16 mx-auto mb-6" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t('about.description')}</p>
              <img src={images.signature.url} alt="Signature" className="h-10 mx-auto mb-6" />
            </div>

            <div className="relative min-h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${images.pattern3.url})` }}>
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 text-center text-white p-8">
                <span className="block text-primary text-2xl mb-2" style={{ fontFamily: 'var(--font-accent)' }}>
                  {t('about.openingTimes.subtitle')}
                </span>
                <h3 className="text-2xl text-white mb-8">{t('about.openingTimes.title')}</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between gap-8"><span className="text-white/70">{t('about.openingTimes.weekdays')}</span><span>{t('about.openingTimes.weekdaysHours')}</span></li>
                  <li className="flex justify-between gap-8"><span className="text-white/70">{t('about.openingTimes.saturday')}</span><span>{t('about.openingTimes.saturdayHours')}</span></li>
                  <li className="flex justify-between gap-8"><span className="text-white/70">{t('about.openingTimes.sunday')}</span><span>{t('about.openingTimes.sundayHours')}</span></li>
                </ul>
                <div className="mt-8">
                  <span className="text-white/60 text-xs block mb-1">{t('about.openingTimes.callLabel')}</span>
                  <a href="tel:0201023456789" className="text-primary text-xl font-semibold">{t('about.openingTimes.phone')}</a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t('about.paragraph1')}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t('about.paragraph2')}</p>
              <Link to="/reservation" className="inline-block px-8 py-3 bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors">
                {t('about.reservationBtn')}
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Daily Specials */}
      <AnimatedSection className="py-20 relative bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${images.bg4.url})` }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeading subtitle={t('menu.dailySpecials.subtitle')} title={t('menu.dailySpecials.title')} light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {dailySpecials.map((item) => (
              <MenuItem key={item.name} name={item.name} description={item.desc} price={item.price} image={item.image} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Text Banner */}
      <section className="py-24 relative bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${images.bg16.url})` }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center">
          <span className="block text-primary text-3xl mb-2" style={{ fontFamily: 'var(--font-accent)' }}>{t('banner.weCreateMemories.subtitle')}</span>
          <h2 className="text-white text-3xl lg:text-5xl">{t('banner.weCreateMemories.title')}</h2>
        </div>
      </section>

      {/* Testimonials */}
      <AnimatedSection className="py-20 relative bg-cover bg-center" style={{ backgroundImage: `url(${images.bg1.url})` }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeading subtitle={t('testimonials.subtitle')} title={t('testimonials.title')} light />
          <TestimonialCarousel light />
        </div>
      </AnimatedSection>

      {/* Blog Grid */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle={t('pageTitle.blog.subtitle')} title={t('pageTitle.blog.title')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}