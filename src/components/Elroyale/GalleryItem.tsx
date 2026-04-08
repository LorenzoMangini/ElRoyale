import { useState } from 'react'
import { Search } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'

interface GalleryItemProps {
  image: string
  alt: string
}

export default function GalleryItem({ image, alt }: GalleryItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className="relative group cursor-pointer overflow-hidden"
        onClick={() => setOpen(true)}
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <Search className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 border-none bg-transparent">
          <img src={image} alt={alt} className="w-full h-auto" />
        </DialogContent>
      </Dialog>
    </>
  )
}
