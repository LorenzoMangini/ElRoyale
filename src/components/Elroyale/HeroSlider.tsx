import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { t } from '@/i18n'
import { images } from '@/data/images'
import { cn } from '@/lib/utils'

const slides = [
  {
    image: images.bg14.url,
    subtitle: 'hero.slide1.subtitle' as const,
    title: 'hero.slide1.title' as const,
    desc: 'hero.slide1.desc' as const,
    ctas: [
      { label: 'hero.slide1.cta1' as const, to: '/menu-classic', variant: 'primary' as const },
      { label: 'hero.slide1.cta2' as const, to: '/reservation', variant: 'outline' as const },
    ],
  },
  {
    image: images.bg15.url,
    subtitle: 'hero.slide2.subtitle' as const,
    title: 'hero.slide2.title' as const,
    desc: 'hero.slide2.desc' as const,
    ctas: [
      { label: 'hero.slide2.cta' as const, to: '/reservation', variant: 'primary' as const },
    ],
  },
]

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 6000)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <section className="relative h-screen overflow-hidden">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/50" />

              <AnimatePresence mode="wait">
                {selectedIndex === index && (
                  <div className="relative z-10 h-full flex items-center justify-center text-center">
                    <div className="container mx-auto px-4">
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                        className="block text-primary text-3xl lg:text-4xl mb-3"
                        style={{ fontFamily: 'var(--font-accent)' }}
                      >
                        {t(slide.subtitle)}
                      </motion.span>
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-white text-4xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto mb-4"
                      >
                        {t(slide.title)}
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-white/70 text-sm lg:text-base max-w-xl mx-auto mb-8"
                      >
                        {t(slide.desc)}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="flex items-center justify-center gap-4 flex-wrap"
                      >
                        {slide.ctas.map((cta) => (
                          <Link
                            key={cta.label}
                            to={cta.to}
                            className={cn(
                              'px-8 py-3 text-xs font-semibold uppercase tracking-wider transition-all',
                              cta.variant === 'primary'
                                ? 'bg-primary text-white hover:bg-primary/90'
                                : 'border border-white text-white hover:bg-white hover:text-foreground'
                            )}
                          >
                            {t(cta.label)}
                          </Link>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-all',
              selectedIndex === index ? 'bg-primary' : 'bg-white/40'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
