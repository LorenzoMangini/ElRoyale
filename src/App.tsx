import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'

import Layout from '@/components/Elroyale/Layout'
import Navbar from '@/components/Elroyale/Navbar'

import Index from '@/pages/Index'
import OurStory from '@/pages/OurStory'
import OurChefs from '@/pages/OurChefs'
import OurGuestbook from '@/pages/OurGuestbook'
import MenuClassic from '@/pages/MenuClassic'
import MenuMixed from '@/pages/MenuMixed'
import MenuBoard from '@/pages/MenuBoard'
import MenuGallery from '@/pages/MenuGallery'
import MenuCards from '@/pages/MenuCards'
import Reservation from '@/pages/Reservation'
import Contacts from '@/pages/Contacts'
import Events from '@/pages/Events'
import EventSingle from '@/pages/EventSingle'
import GalleryGrid from '@/pages/GalleryGrid'
import GalleryFullwidth from '@/pages/GalleryFullwidth'
import BlogGrid from '@/pages/BlogGrid'
import BlogCarousel from '@/pages/BlogCarousel'
import BlogGridSidebar from '@/pages/BlogGridSidebar'
import BlogStandard from '@/pages/BlogStandard'
import BlogSinglePost from '@/pages/BlogSinglePost'
import Shop from '@/pages/Shop'
import ShopSidebar from '@/pages/ShopSidebar'
import ShopSingleProduct from '@/pages/ShopSingleProduct'
import ShoppingCart from '@/pages/ShoppingCart'
import FAQs from '@/pages/FAQs'
import NotFound from '@/pages/NotFound'

export default function App() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true,
    })

    return () => {
      smoother.kill()
    }
  }, [])

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <TooltipProvider>

        <div id="smooth-wrapper">
          <Navbar />

          <div id="smooth-content">
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/our-chefs" element={<OurChefs />} />
                <Route path="/guestbook" element={<OurGuestbook />} />
                <Route path="/menu-classic" element={<MenuClassic />} />
                <Route path="/menu-mixed" element={<MenuMixed />} />
                <Route path="/menu-board" element={<MenuBoard />} />
                <Route path="/menu-gallery" element={<MenuGallery />} />
                <Route path="/menu-cards" element={<MenuCards />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/events" element={<Events />} />
                <Route path="/event/:id" element={<EventSingle />} />
                <Route path="/gallery" element={<GalleryGrid />} />
                <Route path="/gallery-fullwidth" element={<GalleryFullwidth />} />
                <Route path="/blog" element={<BlogGrid />} />
                <Route path="/blog-carousel" element={<BlogCarousel />} />
                <Route path="/blog-sidebar" element={<BlogGridSidebar />} />
                <Route path="/blog-standard" element={<BlogStandard />} />
                <Route path="/blog/:id" element={<BlogSinglePost />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop-sidebar" element={<ShopSidebar />} />
                <Route path="/product/:id" element={<ShopSingleProduct />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </div>

        </div>

        <Toaster position="top-right" richColors />

      </TooltipProvider>
    </BrowserRouter>
  )
} 