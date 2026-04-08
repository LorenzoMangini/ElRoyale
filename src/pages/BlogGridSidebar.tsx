import { Search } from 'lucide-react'
import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import BlogPostCard from '@/components/Elroyale/BlogPostCard'
import { Input } from '@/components/ui/input'

const posts = [
  { id: '1', image: images.blogGrid1.url, categories: ['Food', 'Recipe'], title: 'Healthy & Simple Recipes That Are Perfect for Spring', date: 'Jan 20, 2020' },
  { id: '2', image: images.blogGrid2.url, categories: ['Chef', 'Dinner'], title: 'What do chefs cook when they have friends over for dinner?', date: 'Jan 20, 2020' },
  { id: '3', image: images.blogGrid3.url, categories: ['Chef', 'Dinner'], title: 'Desserts With Cream Cheese Frosting Taste of Home', date: 'Jan 17, 2020' },
  { id: '4', image: images.blogGrid4.url, categories: ['Pork', 'Recipes'], title: 'Braised Pork Belly Adobo By Chef Leah Cohen', date: 'Oct 24, 2020' },
  { id: '5', image: images.blogGrid5.url, categories: ['Apple', 'Pie'], title: 'Tiny Apple Pies with Cinnamon Buns for Two', date: 'Oct 27, 2020' },
  { id: '6', image: images.blogGrid6.url, categories: ['Breakfast'], title: 'Meal Prep Breakfast For The Next Week', date: 'Oct 24, 2020' },
]

const categories = ['Dinner Recipes', 'Vegan Recipes', 'Healthy Food', 'Italian Food', 'Indian Food', 'Korean Food']

export default function BlogGridSidebar() {
  return (
    <>
      <PageTitle subtitle={t('pageTitle.blog.subtitle')} title={t('pageTitle.blog.title')} backgroundImage={images.bg8.url} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => <BlogPostCard key={post.id} {...post} />)}
              </div>
            </div>
            <aside className="lg:col-span-4 space-y-8">
              <div>
                <h5 className="text-lg mb-4">{t('blog.sidebar.search')}</h5>
                <div className="relative"><Input placeholder={t('blog.sidebar.searchPlaceholder')} /><Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /></div>
              </div>
              <div>
                <h5 className="text-lg mb-4">{t('blog.sidebar.categories')}</h5>
                <ul className="space-y-2">{categories.map((cat) => <li key={cat}><a href="#" className="text-sm text-muted-foreground hover:text-primary">{cat}</a></li>)}</ul>
              </div>
              <div>
                <h5 className="text-lg mb-4">{t('blog.sidebar.recentPosts')}</h5>
                <div className="space-y-4">
                  {[{ img: images.blogThumb1.url, title: 'Tiny Apple Pies with Cinnamon Buns for Two', date: 'Oct 23, 2020' },
                    { img: images.blogThumb2.url, title: 'Healthy & Simple Recipes Perfect for Spring', date: 'Oct 7, 2020' }].map((p, i) => (
                    <div key={i} className="flex gap-3"><img src={p.img} alt="" className="w-16 h-16 object-cover flex-shrink-0" /><div><h6 className="text-sm mb-1">{p.title}</h6><time className="text-xs text-muted-foreground">{p.date}</time></div></div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
