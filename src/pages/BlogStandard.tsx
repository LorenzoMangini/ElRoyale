import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import { Input } from '@/components/ui/input'

const posts = [
  { id: '1', image: images.blogGrid1.url, categories: ['Food', 'Recipes'], title: 'Healthy & Simple Recipes That Are Perfect for Spring', date: 'Jan 20, 2020', comments: 2 },
  { id: '2', image: images.blogGrid2.url, categories: ['Chef', 'Dinner'], title: 'What do chefs cook when they have friends over for dinner?', date: 'Jan 12, 2020', comments: 5 },
  { id: '3', image: images.blogGrid3.url, categories: ['Chef', 'Dinner'], title: 'What do chefs cook when they have friends over for dinner?', date: 'Jan 9, 2020', comments: 5 },
  { id: '4', image: images.blogGrid4.url, categories: ['Chef', 'Dinner'], title: 'Desserts With Cream Cheese Frosting Taste of Home', date: 'Jan 4, 2020', comments: 1 },
]

const categories = ['Dinner Recipes', 'Vegan Recipes', 'Healthy Food', 'Italian Food', 'Indian Food', 'Korean Food']
const tags = ['Responsive', 'Fresh', 'Modern', 'Corporate', 'Business']

export default function BlogStandard() {
  return (
    <>
      <PageTitle subtitle={t('pageTitle.blog.subtitle')} title={t('pageTitle.blog.title')} backgroundImage={images.bg8.url} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              {posts.map((post) => (
                <article key={post.id}>
                  <Link to={`/blog/${post.id}`} className="block overflow-hidden mb-4">
                    <img src={post.image} alt={post.title} className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
                  </Link>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.categories.map((cat) => <span key={cat} className="text-primary text-xs font-medium">{cat}</span>)}
                  </div>
                  <h3 className="text-xl mb-2 hover:text-primary transition-colors"><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
                  <div className="flex items-center gap-4 text-muted-foreground text-xs mb-4">
                    <time>{post.date}</time>
                    <span>{post.comments} {t('blog.comments')}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">Allow us to make your next special event extra special. We cater for all sized functions, ideal for your larger functions or an intimate gathering.</p>
                  <Link to={`/blog/${post.id}`} className="text-primary text-xs font-semibold uppercase tracking-wider hover:text-primary/80">{t('common.readMore')} →</Link>
                </article>
              ))}
              <div className="flex gap-2">
                <span className="w-10 h-10 flex items-center justify-center bg-primary text-white text-sm">1</span>
                <span className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground text-sm cursor-pointer hover:bg-primary hover:text-white hover:border-primary">2</span>
              </div>
            </div>
            <aside className="lg:col-span-4 space-y-8">
              <div>
                <h5 className="text-lg mb-4">{t('blog.sidebar.search')}</h5>
                <div className="relative">
                  <Input placeholder={t('blog.sidebar.searchPlaceholder')} />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div>
                <h5 className="text-lg mb-4">{t('blog.sidebar.categories')}</h5>
                <ul className="space-y-2">
                  {categories.map((cat) => <li key={cat}><a href="#" className="text-sm text-muted-foreground hover:text-primary">{cat}</a></li>)}
                </ul>
              </div>
              <div>
                <h5 className="text-lg mb-4">{t('blog.sidebar.recentPosts')}</h5>
                <div className="space-y-4">
                  {[{ img: images.blogThumb1.url, title: 'Tiny Apple Pies with Cinnamon Buns for Two', date: 'Oct 23, 2020' },
                    { img: images.blogThumb2.url, title: 'Healthy & Simple Recipes Perfect for Spring', date: 'Oct 7, 2020' }].map((p, i) => (
                    <div key={i} className="flex gap-3">
                      <img src={p.img} alt="" className="w-16 h-16 object-cover flex-shrink-0" />
                      <div><h6 className="text-sm mb-1 hover:text-primary transition-colors cursor-pointer">{p.title}</h6><time className="text-xs text-muted-foreground">{p.date}</time></div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-lg mb-4">{t('blog.sidebar.tags')}</h5>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => <span key={tag} className="px-3 py-1 border border-border text-xs text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer">{tag}</span>)}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
