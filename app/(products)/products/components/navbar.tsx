'use client'

import Link from 'next/link'
import { useState } from 'react'

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Facebook,
  Instagram,
  Mail,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  Twitter,
  User,
  X,
  Youtube,
} from 'lucide-react'
import { ListItem } from '@/components/ui/list-item'

interface bannerItem {
  category?: string
  title: string
  description: string
  cta: string
  href: string
}

export function Navbar() {
  const [mobileNavBarOpen, setMobileNavBarOpen] = useState(false)
  const [itemsOnCart, setItemsOnCart] = useState(1)

  const bannerItems: bannerItem[] = [
    {
      category: 'SUMMER 2020',
      title: 'NEW COLLECTION',
      description:
        'We know how large objects will act, but things on a small scale.',
      cta: 'SHOP NOW',
      href: '/',
    },
  ]

  return (
    <div className="flex flex-col items-center">
      {/* Mobile Navbar */}
      <div className="flex w-full flex-col py-6 lg:hidden ">
        <div className="flex items-center justify-between px-4">
          <div className="text-2xl font-bold text-foreground">SneakerHaven</div>

          <div className="flex items-center gap-3">
            <button>
              <Search className="text-text-color h-6 w-6" />
            </button>

            <button>
              <ShoppingCart className="text-text-color h-6 w-6" />
            </button>

            <button onClick={() => setMobileNavBarOpen(!mobileNavBarOpen)}>
              {mobileNavBarOpen ? (
                <X className="text-text-color h-6 w-6" />
              ) : (
                <Menu className="text-text-color h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div
          data-active={mobileNavBarOpen}
          className="text-secondary-text-color hidden w-full flex-col items-center justify-center gap-7 overflow-hidden py-20 text-xl font-medium data-[active=true]:flex data-[active=true]:animate-navbar-down"
        >
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>Product</Link>
          <Link href={'#'}>Pricing</Link>
          <Link href={'#'}>Contact</Link>
        </div>
      </div>

      {/* Desktop Navbar */}

      <div className="hidden h-screen w-full flex-col lg:flex">
        {/* Socials */}

        <div className="flex h-max w-full items-center justify-between bg-foreground px-10 py-5 text-primary-foreground">
          <div className="flex items-center gap-5">
            <a
              href="tel:48998686043"
              className="flex items-center gap-1 text-sm font-medium text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              (225) 555-0118
            </a>

            <a
              href="#"
              className="flex items-center gap-1 text-sm font-medium text-primary-foreground"
            >
              <Mail className="h-4 w-4" />
              michelle.rivera@example.com
            </a>
          </div>

          <span className="text-sm font-medium text-primary-foreground">
            Follow Us and get a chance to win 80% off
          </span>

          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="text-primary-foreground">Follow Us:</span>

            <div className="flex items-center gap-2">
              <a href="#" className="text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </a>

              <a href="#" className="text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </a>

              <a href="#" className="text-primary-foreground">
                <Youtube className="h-4 w-4" />
              </a>

              <a href="#" className="text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Navbar */}

        <div className="flex h-max w-full items-center justify-between px-10 py-5">
          <div className="text-2xl font-bold text-foreground">SneakerHaven</div>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pages
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-3">
            <button>
              <span className="flex items-center gap-1 text-sm font-semibold">
                <User strokeWidth={2.4} className="h-4 w-4" />
                Login / Register
              </span>
            </button>

            <button>
              <Search className="h-5 w-5" />
            </button>

            <button className="flex items-center">
              <ShoppingCart className="h-5 w-5" />
              {itemsOnCart >= 1 && <span className="ml-2">{itemsOnCart}</span>}
            </button>
          </div>
        </div>

        {/* Banner */}
      </div>
    </div>
  )
}
