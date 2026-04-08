import { Search } from 'lucide-react'
import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import ProductCard from '@/components/Elroyale/ProductCard'
import { Input } from '@/components/ui/input'

const products = [
  { id: '1', image: images.shopGrid1.url, name: 'Grilled American Fillet', price: '$18.99', categories: ['Light', 'Mexican', 'Organic'] },
  { id: '2', image: images.shopGrid2.url, name: 'Roast Sea Trout', price: '$36.99', categories: ['Low Carb', 'Fresh'] },
  { id: '3', image: images.shopGrid3.url, name: 'Grilled Seafood Paella', price: '$34.99', categories: ['Nut Free', 'Sweet', 'Fresh'] },
  { id: '4', image: images.shopGrid4.url, name: 'Chicken Breast', price: '$28.99', categories: ['Grilled', 'Fresh'] },
  { id: '5', image: images.shopGrid5.url, name: 'Roasted Steak Roulade', price: '$37.99', categories: ['Light', 'Low Carb', 'Mexican'] },
  { id: '6', image: images.shopGrid6.url, name: 'Roast Sea Trout', price: '$18.99', categories: ['Sweet', 'Nut Free'] },
]

const sidebarCategories = ['Dinner Recipes', 'Vegan Recipes', 'Healthy Food', 'Italian Food', 'Indian Food', 'Korean Food']

export default function ShopSidebar() {
  return (
    <>
      <PageTitle subtitle={t('pageTitle.shop.subtitle')} title={t('pageTitle.shop.title')} backgroundImage={images.bg6.url} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => <ProductCard key={product.id} {...product} />)}
              </div>
            </div>
            <aside className="lg:col-span-3 space-y-8">
              <div><h5 className="text-lg mb-4">{t('blog.sidebar.search')}</h5><div className="relative"><Input placeholder={t('blog.sidebar.searchPlaceholder')} /><Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /></div></div>
              <div><h5 className="text-lg mb-4">{t('blog.sidebar.categories')}</h5><ul className="space-y-2">{sidebarCategories.map((cat) => <li key={cat}><a href="#" className="text-sm text-muted-foreground hover:text-primary">{cat}</a></li>)}</ul></div>
              <div>
                <h5 className="text-lg mb-4">Best Sellers</h5>
                <div className="space-y-4">
                  {[{ img: images.shopGrid2.url, name: 'Roast Sea Trout', price: '$38.00' }, { img: images.shopGrid1.url, name: 'Roasted Steak Roulade', price: '$29.00' }].map((p, i) => (
                    <div key={i} className="flex gap-3"><img src={p.img} alt="" className="w-16 h-16 object-cover flex-shrink-0" /><div><h6 className="text-sm mb-1">{p.name}</h6><span className="text-primary text-xs font-semibold">{p.price}</span></div></div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-lg mb-4">Pricing Filter</h5>
                <div className="h-2 bg-muted rounded-full mb-4">
                  <div className="h-full bg-primary rounded-full w-2/3" />
                </div>
                <p className="text-muted-foreground text-xs">Price: $50 - $200</p>
                <button className="mt-3 px-4 py-2 bg-primary text-white text-xs uppercase tracking-wider">Filter Now</button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
