import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, CheckCircle } from 'lucide-react'
import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import ProductCard from '@/components/Elroyale/ProductCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const relatedProducts = [
  { id: '2', image: images.shopGrid2.url, name: 'Roast Sea Trout', price: '$36.99', categories: ['Low Carb', 'Fresh'] },
  { id: '3', image: images.shopGrid3.url, name: 'Grilled Seafood Paella', price: '$34.99', categories: ['Nut Free', 'Sweet'] },
  { id: '4', image: images.shopGrid4.url, name: 'Chicken Breast', price: '$28.99', categories: ['Grilled', 'Fresh'] },
]

export default function ShopSingleProduct() {
  const [qty, setQty] = useState(1)

  return (
    <>
      <PageTitle title={t('pageTitle.singleProduct.title')} backgroundImage={images.bg6.url}
        breadcrumbs={[{ label: t('breadcrumb.home'), to: '/' }, { label: t('breadcrumb.shop'), to: '/shop' }, { label: t('breadcrumb.singleProduct') }]}
      />

      {/* Alert */}
      <div className="bg-success/10 border border-success p-4 m-4 lg:mx-auto lg:max-w-4xl mt-8 flex items-center gap-3">
        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
        <p className="text-sm">"Grilled American Fillet" {t('shopSingle.addedToCart')} <Link to="/cart" className="text-primary font-semibold">{t('shopSingle.viewCart')}</Link></p>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div><img src={images.shopFull1.url} alt="Grilled American Fillet" className="w-full h-auto" /></div>
            <div>
              <h2 className="text-3xl mb-4">Grilled American Fillet</h2>
              <span className="text-primary text-2xl font-semibold block mb-6">$18.00</span>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">Allow us to make your next special event extra special. We cater for all sized functions, ideal for your larger functions or an intimate gathering.</p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center border border-border">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-muted"><Minus className="h-4 w-4" /></button>
                  <span className="w-12 text-center text-sm">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-muted"><Plus className="h-4 w-4" /></button>
                </div>
                <button className="px-8 py-2.5 bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary/90">{t('shopSingle.addToCart')}</button>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>{t('shopSingle.categoriesLabel')} <span className="text-foreground">Main, Dinner</span></p>
                <p>{t('shopSingle.tagsLabel')} <span className="text-foreground">Light, Mexican, Organic</span></p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <span className="text-sm text-muted-foreground">{t('shopSingle.share')}</span>
                {['f', '𝕏', 'in'].map((s, i) => <a key={i} href="#" className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground hover:bg-primary hover:text-white hover:border-primary text-xs">{s}</a>)}
              </div>
            </div>
          </div>

          <Tabs defaultValue="description" className="mt-16">
            <TabsList className="bg-transparent border-b border-border w-full justify-start gap-0 rounded-none p-0">
              <TabsTrigger value="description" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3">{t('shopSingle.tabs.description')}</TabsTrigger>
              <TabsTrigger value="info" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3">{t('shopSingle.tabs.additionalInfo')}</TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3">{t('shopSingle.tabs.reviews')}</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-8">
              <p className="text-muted-foreground text-sm leading-relaxed">Allow us to make your next special event extra special. We cater for all sized functions, ideal for your larger functions or an intimate gathering, our team can curate a menu to suit your taste.</p>
            </TabsContent>
            <TabsContent value="info" className="pt-8">
              <p className="text-muted-foreground text-sm">Weight: 250g | Ingredients: Pork fillet, ginger, garlic, honey, pepper & canola oil.</p>
            </TabsContent>
            <TabsContent value="reviews" className="pt-8">
              <p className="text-muted-foreground text-sm mb-6">No reviews yet. Be the first to review!</p>
              <form className="space-y-4 max-w-lg">
                <Input placeholder={t('shopSingle.reviewForm.name')} />
                <Input type="email" placeholder={t('shopSingle.reviewForm.email')} />
                <Textarea placeholder={t('shopSingle.reviewForm.review')} rows={4} />
                <Button className="bg-primary text-white hover:bg-primary/90 uppercase text-xs tracking-wider">{t('shopSingle.reviewForm.submit')}</Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-20">
            <h3 className="text-2xl mb-8 text-center">{t('shopSingle.relatedProducts')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((p) => <ProductCard key={p.id} {...p} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
