import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | SneakerHaven',
    default: 'SneakerHaven',
  },
  description:
    'Encontre os tênis mais estilosos e confortáveis na SneakerHaven. Nossa seleção inclui sneakers esportivos, casuais e de edição limitada. Compre agora e eleve o seu estilo!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
