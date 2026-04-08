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

export default function BlogGrid() {
  return (
    <>
      <PageTitle subtitle={t('pageTitle.blog.subtitle')} title={t('pageTitle.blog.title')} backgroundImage={images.bg8.url} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogPostCard key={post.id} {...post} />
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-12">
            <span className="w-10 h-10 flex items-center justify-center bg-primary text-white text-sm">1</span>
            <span className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground text-sm hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer">2</span>
            <span className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground text-sm hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer">→</span>
          </div>
        </div>
      </section>
    </>
  )
}
