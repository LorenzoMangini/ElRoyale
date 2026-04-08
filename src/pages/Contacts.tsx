import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function Contacts() {
  return (
    <>
      <PageTitle
        subtitle={t('pageTitle.contact.subtitle')}
        title={t('pageTitle.contact.title')}
        backgroundImage={images.bg3.url}
        breadcrumbs={[
          { label: t('breadcrumb.home'), to: '/' },
          { label: t('breadcrumb.contactUs') },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-sm max-w-3xl mb-12">{t('contact.intro')}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h4 className="flex items-center gap-2 text-lg mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  {t('contact.ourAddress')}
                </h4>
                <p className="text-muted-foreground text-sm ml-7">{t('contact.address')}</p>
                <a href="#" className="text-primary text-sm ml-7 mt-1 inline-block hover:text-primary/80">
                  {t('contact.getDirections')}
                </a>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-lg mb-3">
                  <Clock className="h-5 w-5 text-primary" />
                  {t('contact.openingHours')}
                </h4>
                <p className="text-muted-foreground text-sm ml-7">{t('contact.hours.weekday')}</p>
                <p className="text-muted-foreground text-sm ml-7">{t('contact.hours.weekend')}</p>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-lg mb-3">
                  <Mail className="h-5 w-5 text-primary" />
                  {t('contact.ourEmail')}
                </h4>
                <p className="text-muted-foreground text-sm ml-7">
                  {t('contact.mainEmailLabel')}{' '}
                  <a href="mailto:Babette@7oroof.com" className="text-primary">{t('contact.mainEmail')}</a>
                </p>
                <p className="text-muted-foreground text-sm ml-7">
                  {t('contact.phoneLabel')}{' '}
                  <span>{t('contact.phone')}</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl mb-6">{t('contact.sendAMessage')}</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder={t('contact.form.firstName')} />
                  <Input type="email" placeholder={t('contact.form.email')} />
                </div>
                <Input type="tel" placeholder={t('contact.form.phone')} />
                <Textarea placeholder={t('contact.form.message')} rows={5} />
                <Button className="bg-primary text-white hover:bg-primary/90 uppercase text-xs tracking-wider font-semibold px-8 py-3">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-96 bg-muted flex items-center justify-center">
        <p className="text-muted-foreground text-sm">Google Maps Placeholder</p>
      </section>
    </>
  )
}
