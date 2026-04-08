import { t } from '@/i18n'
import { images } from '@/data/images'
import PageTitle from '@/components/Elroyale/PageTitle'
import ReservationForm from '@/components/Elroyale/ReservationForm'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  { q: 'faq.q1' as const, a: 'faq.answer' as const },
  { q: 'faq.q2' as const, a: 'faq.answer' as const },
  { q: 'faq.q3' as const, a: 'faq.answer' as const },
  { q: 'faq.q4' as const, a: 'faq.answer' as const },
  { q: 'faq.q5' as const, a: 'faq.answer' as const },
  { q: 'faq.q6' as const, a: 'faq.answer' as const },
  { q: 'faq.q7' as const, a: 'faq.answer' as const },
  { q: 'faq.q8' as const, a: 'faq.answer' as const },
]

export default function FAQs() {
  const leftFaqs = faqs.slice(0, 4)
  const rightFaqs = faqs.slice(4)

  return (
    <>
      <PageTitle
        subtitle={t('pageTitle.faqs.subtitle')}
        title={t('pageTitle.faqs.title')}
        backgroundImage={images.bg3.url}
        breadcrumbs={[
          { label: t('breadcrumb.home'), to: '/' },
          { label: t('breadcrumb.about'), to: '/' },
          { label: 'FAQs' },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Accordion type="single" collapsible>
              {leftFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`left-${i}`}>
                  <AccordionTrigger className="text-left text-base font-normal" style={{ fontFamily: 'var(--font-heading)' }}>
                    {t(faq.q)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                    {t(faq.a)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Accordion type="single" collapsible>
              {rightFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`right-${i}`}>
                  <AccordionTrigger className="text-left text-base font-normal" style={{ fontFamily: 'var(--font-heading)' }}>
                    {t(faq.q)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                    {t(faq.a)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Text Banner */}
      <section className="py-20 relative bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${images.bg16.url})` }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center">
          <span className="block text-primary text-3xl mb-2" style={{ fontFamily: 'var(--font-accent)' }}>
            {t('banner.weCreateMemories.subtitle')}
          </span>
          <h2 className="text-white text-3xl lg:text-5xl">{t('banner.weCreateMemories.title')}</h2>
        </div>
      </section>

      <section className="py-0">
        <ReservationForm showBanner />
      </section>
    </>
  )
}
