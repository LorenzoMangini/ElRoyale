import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Star } from 'lucide-react'
import { images } from '@/data/images'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'John Peter',
    role: 'Guest',
    quote: 'Lovely atmosphere staff were excellent, very attentive and polite. We felt taken care of! Food came out quickly and was hot and delicious.',
    image: images.testimonial1.url,
  },
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
]

interface TestimonialCarouselProps {
  light?: boolean
  className?: string
}

export default function TestimonialCarousel({ light, className }: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
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
        {testimonials.map((item, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
            <div className="text-center max-w-2xl mx-auto">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p
                className={cn(
                  'text-base lg:text-lg italic leading-relaxed mb-8',
                  light ? 'text-white/80' : 'text-muted-foreground'
                )}
              >
                "{item.quote}"
              </p>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
              />
              <h5
                className={cn(
                  'text-base',
                  light ? 'text-white' : 'text-foreground'
                )}
              >
                {item.name}
              </h5>
              <span className="text-primary text-xs">{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
