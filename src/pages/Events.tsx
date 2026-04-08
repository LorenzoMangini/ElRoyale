import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import EventCard from '@/components/Elroyale/EventCard'

const events = [
  { id: '1', image: images.blogGrid1.url, dateRange: 'Jan 20, 2020 - Jan 23, 2020', title: 'Vegan Festival at Pushkar Cocktail Bar and Dining' },
  { id: '2', image: images.blogGrid2.url, dateRange: 'Mar 18, 2020 - Mar 21, 2020', title: "Valentine's dinner at Birming Museum and Art Gallery" },
  { id: '3', image: images.blogGrid3.url, dateRange: 'Apr 3, 2020 - Apr 7, 2020', title: "Brindleyplace Fine Harborne Farmers' Market Food" },
  { id: '4', image: images.blogGrid4.url, dateRange: 'Jul 12, 2020 - Jul 16, 2020', title: 'Supa Dupa Brunch with Bey Ace Hotel London', soldOut: true },
  { id: '5', image: images.blogGrid5.url, dateRange: 'Oct 27, 2020 - Oct 30, 2020', title: 'Sunday Steak Roast hanger & cellar from £35 for people' },
  { id: '6', image: images.blogGrid6.url, dateRange: 'Nov 14, 2020 - Nov 19, 2020', title: 'Bottomless Bubbles Brunch Launch at French Corner' },
]

export default function Events() {
  return (
    <>
      <PageTitle subtitle={t('pageTitle.events.subtitle')} title={t('pageTitle.events.title')} backgroundImage={images.bg3.url}
        breadcrumbs={[{ label: t('breadcrumb.home'), to: '/' }, { label: t('breadcrumb.ourEvents') }]}
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
