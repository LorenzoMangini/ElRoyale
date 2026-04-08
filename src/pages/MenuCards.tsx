import { t } from '@/i18n'
import { images } from '@/data/images'
import MenuItem from '@/components/Elroyale/MenuItem'

const lunchItems = [
  { name: 'Chicken Breast', price: '$33.95', desc: 'Paupiette of chicken, blue cheese, rosemary.' },
  { name: 'Salmon Steak', price: '$41.95', desc: 'Salmon, butter, lemon juice, onion, garlic & salad.', tag: 'Recommended' },
  { name: 'Chicken Crispy', price: '$33.95', desc: 'Smoked quail, crispy egg, spelt, girolles, parsley.' },
  { name: 'Grilled Fillet', price: '$26.95', desc: 'Pork fillet, ginger, garlic, honey, pepper & oil.', tag: 'Chef Selection' },
  { name: 'Salmon Steak', price: '$27.95', desc: 'Salmon, butter, lemon juice, onion, garlic & salad.' },
]

const dinnerItems = [
  { name: 'Smoked Meat Sandwich', price: '$12.95', desc: 'Baguette, basil, arugula, olives, cherry-tomatoes.' },
  { name: 'Salmon Sandwich', price: '$15.95', desc: 'Salmon, butter, lemon juice, onion, garlic & salad.' },
  { name: 'Pan of Fried Eggs', price: '$13.95', desc: 'Eggs, bacon and cherry-tomatoes with bread.', tag: 'Recommended' },
  { name: 'Breakfast Set', price: '$20.95', desc: 'Croissants with strawberries, mascarpone, honey.' },
  { name: 'Healthy Breakfast', price: '$18.95', desc: 'Oat granola with fresh blueberries, almond.' },
]

export default function MenuCards() {
  return (
    <>
      {/* No PageTitle — uses header-layout2 pattern */}
      <div className="pt-24" />

      {/* Lunch Menu Card */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <div className="bg-cover bg-center min-h-[400px]" style={{ backgroundImage: `url(${images.banner5.url})` }} />
        <div className="bg-card p-8 lg:p-16 flex flex-col justify-center">
          <span className="block text-primary text-2xl mb-2" style={{ fontFamily: 'var(--font-accent)' }}>{t('menu.lunch.bannerSubtitle')}</span>
          <h3 className="text-2xl lg:text-3xl mb-6">{t('menu.lunch.bannerTitle')}</h3>
          <img src={images.shape2.url} alt="" className="mb-6 h-3 w-auto max-w-[60px]" aria-hidden="true" />
          {lunchItems.map((item) => (
            <MenuItem key={item.name + item.price} name={item.name} description={item.desc} price={item.price} tag={item.tag} />
          ))}
        </div>
      </section>

      {/* Dinner Menu Card (reversed) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <div className="bg-card p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
          <span className="block text-primary text-2xl mb-2" style={{ fontFamily: 'var(--font-accent)' }}>{t('menu.dinner.bannerSubtitle')}</span>
          <h3 className="text-2xl lg:text-3xl mb-6">{t('menu.dinner.bannerTitle')}</h3>
          <img src={images.shape2.url} alt="" className="mb-6 h-3 w-auto max-w-[60px]" aria-hidden="true" />
          {dinnerItems.map((item) => (
            <MenuItem key={item.name + item.price} name={item.name} description={item.desc} price={item.price} tag={item.tag} />
          ))}
        </div>
        <div className="bg-cover bg-center min-h-[400px] order-1 lg:order-2" style={{ backgroundImage: `url(${images.banner6.url})` }} />
      </section>
    </>
  )
}
