import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import SectionHeading from '@/components/Elroyale/SectionHeading'
import MenuItem from '@/components/Elroyale/MenuItem'

const breakfastItems = [
  [
    { name: 'Chicken Breast', price: '$33.95', desc: 'Paupiette of chicken, blue cheese, rosemary.' },
    { name: 'Salmon Steak', price: '$41.95', desc: 'Salmon, butter, lemon juice, onion, garlic & salad.' },
    { name: 'Chicken Crispy', price: '$33.95', desc: 'Smoked quail, crispy egg, spelt, girolles, parsley.' },
    { name: 'Grilled Fillet', price: '$26.95', desc: 'Pork fillet, ginger, garlic, honey, pepper & oil.' },
    { name: 'Salmon Steak', price: '$27.95', desc: 'Salmon, butter, lemon juice, onion, garlic & salad.' },
  ],
  [
    { name: 'Smoked Meat Sandwich', price: '$12.95', desc: 'Baguette, basil, arugula, olives, cherry-tomatoes.' },
    { name: 'Salmon Sandwich', price: '$15.95', desc: 'Salmon, butter, lemon juice, onion, garlic & salad.' },
    { name: 'Pan of Fried Eggs', price: '$13.95', desc: 'Eggs, bacon and cherry-tomatoes with bread.' },
    { name: 'Breakfast Set', price: '$20.95', desc: 'Croissants with strawberries, mascarpone, honey.' },
    { name: 'Healthy Breakfast', price: '$18.95', desc: 'Oat granola with fresh blueberries, almond.' },
  ],
  [
    { name: 'Traditional Pancakes', price: '$8.95', desc: 'Paupiette of chicken, blue cheese, rosemary.' },
    { name: 'American Brunch', price: '$14.95', desc: 'Applewood smoked bacon, tomatoes.' },
    { name: 'Cannoli with Cream Cheese', price: '$15.95', desc: 'Cheese, eggs, strawberries, butter & maple.' },
    { name: 'Chocolate Cherry Cake', price: '$9.95', desc: 'Vanilla, milk, dark chocolate, cherries.' },
    { name: 'Pain au Chocolat', price: '$3.95', desc: 'Homemade croissant contain a bar of chocolate.' },
  ],
]

function MenuBanner({ image, subtitle, title }: { image: string; subtitle: string; title: string }) {
  return (
    <section className="py-20 relative bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center">
        <span className="block text-primary text-2xl mb-2" style={{ fontFamily: 'var(--font-accent)' }}>{subtitle}</span>
        <h2 className="text-white text-3xl lg:text-4xl">{title}</h2>
      </div>
    </section>
  )
}

export default function MenuClassic() {
  return (
    <>
      <PageTitle subtitle={t('pageTitle.menuClassic.subtitle')} title={t('pageTitle.menuClassic.title')} backgroundImage={images.bg11.url}
        breadcrumbs={[{ label: t('breadcrumb.home'), to: '/' }, { label: 'Menu' }]}
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle={t('menu.discover.subtitle')} title={t('menu.discover.title')} description={t('menu.discover.desc')} />
        </div>
      </section>
      <MenuBanner image={images.bg4.url} subtitle={t('menu.breakfast.bannerSubtitle')} title={t('menu.breakfast.bannerTitle')} />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
            {breakfastItems.map((col, colIdx) => (
              <div key={colIdx}>
                {col.map((item) => (
                  <MenuItem key={item.name + item.price} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <MenuBanner image={images.bg5.url} subtitle={t('menu.lunch.bannerSubtitle')} title={t('menu.lunch.bannerTitle')} />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
            {breakfastItems.map((col, colIdx) => (
              <div key={colIdx}>
                {colIdx < 3 && <img src={[images.menu1.url, images.menu2.url, images.menu3.url][colIdx]} alt="" className="w-full h-48 object-cover mb-6" />}
                {col.map((item) => (
                  <MenuItem key={item.name + item.price + 'lunch'} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <MenuBanner image={images.bg6.url} subtitle={t('menu.dinner.bannerSubtitle')} title={t('menu.dinner.bannerTitle')} />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
            {breakfastItems.map((col, colIdx) => (
              <div key={colIdx}>
                {col.map((item) => (
                  <MenuItem key={item.name + item.price + 'dinner'} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <MenuBanner image={images.bg1.url} subtitle={t('menu.dessert.bannerSubtitle')} title={t('menu.dessert.bannerTitle')} />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
            {breakfastItems.map((col, colIdx) => (
              <div key={colIdx}>
                {col.map((item) => (
                  <MenuItem key={item.name + item.price + 'dessert'} name={item.name} description={item.desc} price={item.price} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
