import { t } from '@/i18n'
import { images } from '@/data/images'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface ReservationFormProps {
  showBanner?: boolean
}

export default function ReservationForm({ showBanner = true }: ReservationFormProps) {
  return (
    <div className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {showBanner && (
          <div
            className="relative bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${images.pattern3.url})`, backgroundColor: '#1a1a1a', border: '1px solid #c9a96e' }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 text-center text-white p-10">
              <span className="block text-primary text-2xl mb-2" style={{ fontFamily: 'var(--font-accent)', color: '#c9a96e' }}>
                {t('about.openingTimes.subtitle')}
              </span>
              <h3 className="text-3xl text-white mb-8">{t('about.openingTimes.title')}</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between gap-8 border-b border-white/20 pb-3">
                  <span className="text-white/70">{t('about.openingTimes.weekdays')}</span>
                  <span className="text-white">{t('about.openingTimes.weekdaysHours')}</span>
                </li>
                <li className="flex justify-between gap-8 border-b border-white/20 pb-3">
                  <span className="text-white/70">{t('about.openingTimes.saturday')}</span>
                  <span className="text-white">{t('about.openingTimes.saturdayHours')}</span>
                </li>
                <li className="flex justify-between gap-8 pb-3">
                  <span className="text-white/70">{t('about.openingTimes.sunday')}</span>
                  <span className="text-white">{t('about.openingTimes.sundayHours')}</span>
                </li>
              </ul>
              <div className="mt-8">
                <span className="text-white/60 text-xs block mb-1">{t('about.openingTimes.callLabel')}</span>
                <a href="tel:0201023456789" className="text-xl font-semibold" style={{ color: '#c9a96e' }}>
                  {t('about.openingTimes.phone')}
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="p-8 flex flex-col justify-center" style={{ border: '1px solid #c9a96e' }}>
          <span className="block text-primary text-2xl mb-2" style={{ fontFamily: 'var(--font-accent)', color: '#c9a96e' }}>
            {t('reservation.subtitle')}
          </span>
          <h3 className="text-2xl lg:text-3xl text-foreground mb-4">{t('reservation.title')}</h3>
          <p className="text-muted-foreground text-sm mb-8">{t('reservation.desc')}</p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t('reservation.form.guests')} />
                </SelectTrigger>
                <SelectContent>
                  {[2, 3, 4, 5, 6, 7].map((n) => (
                    <SelectItem key={n} value={String(n)}>{n} people</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t('reservation.form.date')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="tomorrow">Tomorrow</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t('reservation.form.time')} />
                </SelectTrigger>
                <SelectContent>
                  {['8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'].map((time) => (
                    <SelectItem key={time} value={time}>{time}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input placeholder={t('reservation.form.name')} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="email" placeholder={t('reservation.form.email')} />
              <Input type="tel" placeholder={t('reservation.form.phone')} />
            </div>
            <Button className="w-full bg-black text-white hover:bg-black/80 uppercase text-xs tracking-wider font-semibold py-6">
              {t('reservation.form.submit')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}