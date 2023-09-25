'use client'

import { EditorsPick } from './components/editors-pick'
import { BestSellerProducts } from './components/best-sellers-products'

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
import Image from 'next/image'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <EditorsPick />
      <BestSellerProducts />

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
        className="mySwiper w-full text-white"
        loop
      >
        <SwiperSlide>
          <div className="parallax-bg flex h-full w-screen flex-col items-center justify-center gap-9 bg-[url('/shop-hero-1-product-slide-1.jpg')] bg-cover bg-center px-32 py-20 text-center lg:items-start lg:text-left">
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
          <div className="parallax-bg flex h-full flex-col justify-center gap-9 bg-[url('/shop-hero-2-product-slide-2.jpg')] bg-cover bg-center px-32 py-20">
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

      <div className="flex w-full max-w-5xl flex-col items-center gap-12 px-10 py-20 md:flex-row-reverse">
        <div className="flex w-full flex-col items-center gap-8">
          <span className="font-bold text-muted-foreground">SUMMER 2020</span>
          <h3 className="text-center text-4xl font-bold">
            Part of the Neural Universe
          </h3>
          <p className="text-center text-xl text-secondary-foreground">
            We know how large objects will act, but things on a small scale.
          </p>

          <button className="rounded bg-[#23A6F0] px-10 py-4 font-bold text-white transition hover:bg-[#1f7db4]">
            BUY NOW
          </button>
          <button className="rounded border border-[#23A6F0] px-10 py-4 font-bold text-[#23A6F0] transition hover:bg-[#23A6F0] hover:text-white">
            Learn More
          </button>
        </div>

        <Image
          alt="asian-woman-man-with-winter-clothes"
          width={1000}
          height={1000}
          quality={100}
          src={'/asian-woman-man-with-winter-clothes.png'}
        />
      </div>

      <footer className="flex w-full flex-col">
        <div className="flex w-full justify-center bg-muted px-10">
          <div className="flex w-full max-w-5xl flex-col justify-start gap-5 py-10 md:flex-row md:justify-between">
            <div className="flex flex-col text-2xl font-bold text-foreground">
              SneakerHaven
            </div>
            <div className="flex items-center gap-5">
              <a href="#">
                <Instagram className="h-6 w-6 " />
              </a>
              <a href="#">
                <Facebook className="h-6 w-6 " />
              </a>
              <a href="#">
                <Twitter className="h-6 w-6 " />
              </a>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center px-10">
          <div className="flex w-full max-w-5xl flex-col gap-8 py-10 sm:flex-row sm:gap-16">
            <div className="flex flex-col gap-5">
              <strong className="font-bold">Company Info</strong>
              <div className="flex flex-col gap-3">
                <Link
                  className="text-sm font-bold text-muted-foreground"
                  href={'/'}
                >
                  About Us
                </Link>
                <Link
                  className="text-sm font-bold text-muted-foreground"
                  href={'/'}
                >
                  Carrier
                </Link>
                <Link
                  className="text-sm font-bold text-muted-foreground"
                  href={'/'}
                >
                  We are hiring
                </Link>
                <Link
                  className="text-sm font-bold text-muted-foreground"
                  href={'/'}
                >
                  Blog
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <strong className="font-bold">Company Info</strong>
              <div className="flex flex-col gap-3">
                <Link
                  className="text-sm font-bold text-muted-foreground"
                  href={'/'}
                >
                  About Us
                </Link>
                <Link
                  className="text-sm font-bold text-muted-foreground"
                  href={'/'}
                >
                  Carrier
                </Link>
                <Link
                  className="text-sm font-bold text-muted-foreground"
                  href={'/'}
                >
                  We are hiring
                </Link>
                <Link
                  className="text-sm font-bold text-muted-foreground"
                  href={'/'}
                >
                  Blog
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <strong className="font-bold">Company Info</strong>
              <div className="flex flex-col gap-3">
                <Link
                  className="text-sm font-bold text-muted-foreground"
                  href={'/'}
                >
                  About Us
                </Link>
                <Link
                  className="text-sm font-bold text-muted-foreground"
                  href={'/'}
                >
                  Carrier
                </Link>
                <Link
                  className="text-sm font-bold text-muted-foreground"
                  href={'/'}
                >
                  We are hiring
                </Link>
                <Link
                  className="text-sm font-bold text-muted-foreground"
                  href={'/'}
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center bg-muted px-10">
          <div className="w-full max-w-5xl py-10 text-center md:text-start">
            Made With Love By <b>Joaovictor09</b> All Right Reserved
          </div>
        </div>
      </footer>
    </div>
  )
}
