import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Parallax,
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import Link from 'next/link'

export function BannerSlider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Parallax]}
      // spaceBetween={50}
      slidesPerView={1}
      // navigation
      speed={1000}
      parallax={true}
      autoplay={{ delay: 1000, disableOnInteraction: true }}
      scrollbar={{
        hide: true,
      }}
      className="mySwiper min-w-screen text-white"
      loop
    >
      <SwiperSlide>
        <div className="parallax-bg flex h-full w-screen flex-col justify-center gap-9 bg-[url('/shop-hero-1-product-slide-1.jpg')] bg-cover bg-center px-32 py-5 lg:py-0">
          <span className="font-bold" data-swiper-parallax="-100">
            SUMMER 2020
          </span>
          <h3 className="text-5xl font-bold" data-swiper-parallax="-200">
            NEW COLLECTION
          </h3>
          <p className="text-xl font-medium" data-swiper-parallax="-300">
            know how large objects will act, but things on a small scale
          </p>
          <Link
            data-swiper-parallax="-400"
            href={'/'}
            className="w-max rounded-lg bg-emerald-500 px-10 py-4 text-2xl font-bold"
          >
            SHOP NOW
          </Link>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="parallax-bg flex h-full flex-col justify-center gap-9 bg-[url('/shop-hero-2-product-slide-2.jpg')] bg-cover bg-center px-32 py-5 lg:py-0">
          <span className="font-bold" data-swiper-parallax="-100">
            SUMMER 2020
          </span>
          <h3 className="text-5xl font-bold" data-swiper-parallax="-200">
            NEW COLLECTION
          </h3>
          <p className="text-xl font-medium" data-swiper-parallax="-300">
            know how large objects will act, but things on a small scale
          </p>
          <Link
            data-swiper-parallax="-400"
            href={'/'}
            className="w-max rounded-lg bg-emerald-500 px-10 py-4 text-2xl font-bold"
          >
            SHOP NOW
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
