import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const categories = ['Dinner Recipes', 'Vegan Recipes', 'Healthy Food', 'Italian Food', 'Indian Food', 'Korean Food']
const tags = ['Responsive', 'Fresh', 'Modern', 'Corporate', 'Business']

export default function BlogSinglePost() {
  return (
    <>
      <PageTitle subtitle="Jan 20, 2020" title="Healthy & Simple Recipes That Are Perfect for Spring" backgroundImage={images.bg2.url} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <article className="lg:col-span-8">
              <img src={images.blogGrid1.url} alt="" className="w-full h-96 object-cover mb-8" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">Allow us to make your next special event extra special. We cater for all sized functions, ideal for your larger functions or an intimate gathering, our team can curate a menu to suit your taste. Reservations are for lunch and dinner, check the availability of your table & book it now!</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">El Royale was the first restaurant to open in Egypt, the restaurant was designed with the history in mind we have created a soft industrial dining room, combined with an open kitchen, coffee take out bar and on site coffee roastery.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => <span key={tag} className="px-3 py-1 border border-border text-xs text-muted-foreground">{tag}</span>)}
              </div>
              <div className="flex items-center gap-3 mb-12">
                <span className="text-sm text-muted-foreground">{t('blog.share')}</span>
                {['Facebook', 'Twitter', 'LinkedIn'].map((s) => <a key={s} href="#" className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground hover:bg-primary hover:text-white hover:border-primary text-xs">{s[0]}</a>)}
              </div>

              {/* Author */}
              <div className="flex gap-4 p-6 bg-card mb-12">
                <img src={images.blogAuthor2.url} alt="" className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
                <div>
                  <h5 className="text-base mb-1">Ahmed Abdallah</h5>
                  <p className="text-muted-foreground text-xs">El Royale was the first restaurant to open in Egypt, the restaurant was designed with the history in mind.</p>
                </div>
              </div>

              {/* Comments */}
              <h4 className="text-xl mb-6">2 {t('blog.comments')}</h4>
              <div className="space-y-6 mb-12">
                {[{ name: 'Ahmed Abdallah', date: 'Mar 20, 2020 - 08:07 pm' }, { name: 'Mahmoud Baghago', date: 'Feb 28, 2020 - 03:28 pm' }].map((c, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-border">
                    <img src={images.blogAuthor2.url} alt="" className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                    <div>
                      <h6 className="text-sm font-semibold mb-1">{c.name}</h6>
                      <time className="text-xs text-muted-foreground block mb-2">{c.date}</time>
                      <p className="text-muted-foreground text-xs">Allow us to make your next special event extra special.</p>
                      <button className="text-primary text-xs mt-2 uppercase tracking-wider">{t('blog.reply')}</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <h4 className="text-xl mb-6">{t('blog.leaveReply')}</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder={t('blog.form.firstName')} />
                  <Input placeholder={t('blog.form.lastName')} />
                </div>
                <Input type="email" placeholder={t('blog.form.email')} />
                <Textarea placeholder={t('blog.form.comment')} rows={5} />
                <Button className="bg-primary text-white hover:bg-primary/90 uppercase text-xs tracking-wider font-semibold px-8 py-3">
                  {t('blog.form.submit')}
                </Button>
              </form>
            </article>

            <aside className="lg:col-span-4 space-y-8">
              <div><h5 className="text-lg mb-4">{t('blog.sidebar.search')}</h5><div className="relative"><Input placeholder={t('blog.sidebar.searchPlaceholder')} /><Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /></div></div>
              <div><h5 className="text-lg mb-4">{t('blog.sidebar.categories')}</h5><ul className="space-y-2">{categories.map((cat) => <li key={cat}><a href="#" className="text-sm text-muted-foreground hover:text-primary">{cat}</a></li>)}</ul></div>
              <div><h5 className="text-lg mb-4">{t('blog.sidebar.recentPosts')}</h5>
                <div className="space-y-4">
                  {[{ img: images.blogThumb1.url, title: 'Tiny Apple Pies with Cinnamon Buns for Two', date: 'Oct 23, 2020' }, { img: images.blogThumb2.url, title: 'Healthy & Simple Recipes Perfect for Spring', date: 'Oct 7, 2020' }].map((p, i) => (
                    <div key={i} className="flex gap-3"><img src={p.img} alt="" className="w-16 h-16 object-cover flex-shrink-0" /><div><h6 className="text-sm mb-1">{p.title}</h6><time className="text-xs text-muted-foreground">{p.date}</time></div></div>
                  ))}
                </div>
              </div>
              <div><h5 className="text-lg mb-4">{t('blog.sidebar.tags')}</h5><div className="flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="px-3 py-1 border border-border text-xs text-muted-foreground hover:bg-primary hover:text-white hover:border-primary cursor-pointer">{tag}</span>)}</div></div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
