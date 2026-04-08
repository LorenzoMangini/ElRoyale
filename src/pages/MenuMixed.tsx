import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import SectionHeading from '@/components/Elroyale/SectionHeading'
import MenuItem from '@/components/Elroyale/MenuItem'

const menuItems = [
  { name: 'Grilled Fillet', desc: 'Pork fillet, ginger, garlic, honey, pepper & canola oil.', price: '$26.95', image: images.menu1.url },
  { name: 'Smoked Paprika Hummus', desc: 'Red peppers, roasted garlic, lemon slices, olives & mint.', price: '$13.95', image: images.menu5.url },
  { name: 'Roasted Steak Roulade', desc: 'Mint parsley with apple cider salt & spices.', price: '$29.95', image: images.menu7.url },
  { name: 'Alder Grilled Seafood Paella', desc: 'Monkfish, onion, paella rice, smoked paprika.', price: '$40.95', image: images.menu2.url },
  { name: 'Sea Trout', desc: 'Roast trout, English asparagus, watercress & royals.', price: '$44.95', image: images.menu6.url },
  { name: 'Chicken Breast', desc: 'Paupiette of chicken, blue cheese, rosemary.', price: '$33.95', image: images.menu3.url },
]

const textItems = [
  { name: 'Smoked Meat Sandwich', price: '$12.95', desc: 'Baguette, basil, arugula, olives, cherry-tomatoes.' },
  { name: 'Salmon Sandwich', price: '$15.95', desc: 'Salmon, butter, lemon juice, onion, garlic & salad.' },
  { name: 'Pan of Fried Eggs', price: '$13.95', desc: 'Eggs, bacon and cherry-tomatoes with bread.', tag: 'Recommended' },
  { name: 'Breakfast Set', price: '$20.95', desc: 'Croissants with strawberries, mascarpone, honey.' },
  { name: 'Healthy Breakfast', price: '$18.95', desc: 'Oat granola with fresh blueberries, almond.' },
  { name: 'Chicken Breast', price: '$33.95', desc: 'Paupiette of chicken, blue cheese, rosemary.' },
  { name: 'Salmon Steak', price: '$41.95', desc: 'Salmon, butter, lemon juice, onion, garlic & salad.' },
  { name: 'Chicken Crispy', price: '$33.95', desc: 'Smoked quail, crispy egg, spelt, girolles, parsley.' },
  { name: 'Grilled Fillet', price: '$26.95', desc: 'Pork fillet, ginger, garlic, honey, pepper & oil.' },
  { name: 'Salmon Steak', price: '$27.95', desc: 'Salmon, butter, lemon juice, onion, garlic & salad.' },
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

export default function MenuMixed() {
  return (
    <>
      <PageTitle subtitle={t('pageTitle.menuClassic.subtitle')} title={t('pageTitle.menuClassic.title')} backgroundImage={images.bg10.url}
        breadcrumbs={[{ label: t('breadcrumb.home'), to: '/' }, { label: 'Menu' }]}
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle={t('menu.discover.subtitle')} title={t('menu.discover.title')} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {textItems.map((item, i) => (
              <MenuItem key={i} name={item.name} description={item.desc} price={item.price} tag={item.tag} />
            ))}
          </div>
        </div>
      </section>
      <MenuBanner image={images.bg5.url} subtitle={t('menu.lunch.bannerSubtitle')} title={t('menu.lunch.bannerTitle')} />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {menuItems.map((item) => (
              <MenuItem key={item.name} name={item.name} description={item.desc} price={item.price} image={item.image} />
            ))}
          </div>
        </div>
      </section>
      <MenuBanner image={images.bg6.url} subtitle={t('menu.dinner.bannerSubtitle')} title={t('menu.dinner.bannerTitle')} />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {textItems.map((item, i) => (
              <MenuItem key={i + 'dinner'} name={item.name} description={item.desc} price={item.price} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
