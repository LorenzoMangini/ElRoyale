import { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Star } from 'lucide-react'
import { images } from '@/data/images'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Sami Wade',
    role: 'Guest',
    quote: 'Been to this stunning place many times over the last years. Tonight I have to say, it was good as it ever was. Superb food, exceedingly good staff.',
    image: images.testimonial2.url,
  },
  {
    name: 'Martin Hope',
    role: 'ProMov',
    quote: 'Once again, I feel compelled to write about our wonderful dining experience. We have shared meals or conversations about our meals at your restaurant.',
    image: images.testimonial3.url,
  },
  {
    name: 'John Peter',
    role: 'Guest',
    quote: 'Lovely atmosphere staff were excellent, very attentive and polite. We felt taken care of! Food came out quickly and was hot and delicious.',
    image: images.testimonial1.url,
  },
]

interface TestimonialCarouselProps {
  light?: boolean
  className?: string
}

export default function TestimonialCarousel({ light, className }: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 3 })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 5000)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <div className={cn('overflow-hidden', className)} ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white p-8 text-center" style={{ border: '1px solid #c9a96e' }}>
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
                <div className="relative inline-block mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full mx-auto object-cover"
                    style={{ border: '3px solid #c9a96e' }}
                  />
                </div>
                <h5 className="text-base font-semibold text-gray-900 mt-2">{item.name}</h5>
                <span className="text-primary text-xs italic" style={{ fontFamily: 'var(--font-accent)', color: '#c9a96e' }}>{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {[0].map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              'w-3 h-3 rounded-full transition-colors',
              selectedIndex === i ? 'bg-primary' : 'bg-white/40'
            )}
            style={{ backgroundColor: selectedIndex === i ? '#c9a96e' : 'rgba(255,255,255,0.4)' }}
          />
        ))}
      </div>
    </div>
  )
}