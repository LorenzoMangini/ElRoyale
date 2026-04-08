import { useState } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus } from 'lucide-react'
import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const initialItems = [
  { id: 1, name: 'Roast Sea Trout', image: images.shopGrid1.url, price: 10, qty: 1 },
  { id: 2, name: 'Roasted Steak Roulade', image: images.shopGrid3.url, price: 39, qty: 1 },
]

export default function ShoppingCart() {
  const [items, setItems] = useState(initialItems)
  const updateQty = (id: number, delta: number) => setItems(items.map((i) => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
  const removeItem = (id: number) => setItems(items.filter((i) => i.id !== id))
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <>
      <PageTitle title={t('pageTitle.cart.title')} backgroundImage={images.bg6.url}
        breadcrumbs={[{ label: t('breadcrumb.home'), to: '/' }, { label: t('breadcrumb.shop'), to: '/shop' }, { label: t('breadcrumb.cart') }]}
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Cart Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 text-sm font-semibold w-8"></th>
                  <th className="py-4 text-sm font-semibold">{t('cart.table.product')}</th>
                  <th className="py-4 text-sm font-semibold">{t('cart.table.price')}</th>
                  <th className="py-4 text-sm font-semibold">{t('cart.table.quantity')}</th>
                  <th className="py-4 text-sm font-semibold">{t('cart.table.total')}</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b border-border">
                    <td className="py-4"><button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive"><X className="h-4 w-4" /></button></td>
                    <td className="py-4">
                      <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                        <span className="text-sm">{item.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm">${item.price.toFixed(2)}</td>
                    <td className="py-4">
                      <div className="flex items-center border border-border w-fit">
                        <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 flex items-center justify-center hover:bg-muted"><Minus className="h-3 w-3" /></button>
                        <span className="w-10 text-center text-sm">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="w-8 h-8 flex items-center justify-center hover:bg-muted"><Plus className="h-3 w-3" /></button>
                      </div>
                    </td>
                    <td className="py-4 text-sm font-semibold">${(item.price * item.qty).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Input placeholder={t('cart.couponPlaceholder')} className="max-w-xs" />
            <button className="px-6 py-2.5 bg-foreground text-white text-xs uppercase tracking-wider">{t('cart.applyCoupon')}</button>
            <button className="px-6 py-2.5 border border-border text-xs uppercase tracking-wider ml-auto">{t('cart.updateCart')}</button>
            <Link to="/checkout" className="px-6 py-2.5 bg-primary text-white text-xs uppercase tracking-wider">{t('cart.checkout')}</Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg mb-4">{t('cart.calculateShipping')}</h4>
              <form className="space-y-4">
                <Select><SelectTrigger><SelectValue placeholder={t('cart.stateCountry')} /></SelectTrigger><SelectContent><SelectItem value="eg">Egypt</SelectItem><SelectItem value="us">United States</SelectItem></SelectContent></Select>
                <Input placeholder={t('cart.postalCode')} />
                <button type="button" className="px-6 py-2.5 bg-foreground text-white text-xs uppercase tracking-wider">{t('cart.updateTotals')}</button>
              </form>
            </div>
            <div className="bg-card p-8">
              <h4 className="text-lg mb-6">{t('cart.cartTotals')}</h4>
              <div className="space-y-4">
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t('cart.subtotal')}</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t('cart.shipping')}</span><span className="text-success">{t('cart.freeShipping')}</span></div>
                <div className="border-t border-border pt-4 flex justify-between text-base font-semibold"><span>{t('cart.orderTotal')}</span><span className="text-primary">${subtotal.toFixed(2)}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
