import { useCallback, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import BlogPostCard from '@/components/Elroyale/BlogPostCard'

const posts = [
  { id: '1', image: images.blogGrid1.url, categories: ['Food', 'Recipe'], title: 'Healthy & Simple Recipes That Are Perfect for Spring', date: 'Jan 20, 2020' },
  { id: '2', image: images.blogGrid2.url, categories: ['Chef', 'Dinner'], title: 'What do chefs cook when they have friends over for dinner?', date: 'Jan 20, 2020' },
  { id: '3', image: images.blogGrid3.url, categories: ['Chef', 'Dinner'], title: 'Desserts With Cream Cheese Frosting Taste of Home', date: 'Jan 17, 2020' },
  { id: '4', image: images.blogGrid4.url, categories: ['Pork', 'Recipes'], title: 'Braised Pork Belly Adobo By Chef Leah Cohen', date: 'Oct 24, 2020' },
  { id: '5', image: images.blogGrid5.url, categories: ['Apple', 'Pie'], title: 'Tiny Apple Pies with Cinnamon Buns for Two', date: 'Oct 27, 2020' },
  { id: '6', image: images.blogGrid6.url, categories: ['Breakfast'], title: 'Meal Prep Breakfast For The Next Week', date: 'Oct 24, 2020' },
]

export default function BlogCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 })
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 5000)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <>
      <PageTitle subtitle={t('pageTitle.blog.subtitle')} title={t('pageTitle.blog.title')} backgroundImage={images.bg1.url} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex -ml-4">
                {posts.map((post) => (
                  <div key={post.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                    <BlogPostCard {...post} />
                  </div>
                ))}
              </div>
            </div>
            <button onClick={scrollPrev} className="absolute -left-4 top-1/3 w-10 h-10 bg-primary text-white flex items-center justify-center hover:bg-primary/90">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={scrollNext} className="absolute -right-4 top-1/3 w-10 h-10 bg-primary text-white flex items-center justify-center hover:bg-primary/90">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
