import Button from '@/components/Button'
//  import "xp.css/dist/XP.css"

import '@/app/globals.css'

import type { Metadata } from 'next'
import {Roboto} from 'next/font/google'
import Image from 'next/image'
import SecondaryButton from '@/components/SecondaryButton'
import { redirect } from 'next/dist/server/api-utils'
import SearchBar from '@/components/SearchBar'
import Link from 'next/link'

const roboto = Roboto({ weight: ["400", "500"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'REFGVKESRGVMVEKRFELÑ',
  // description: 'KOPGFVWEA`PGLHW`3A5LRGT`P',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <nav className={`h-[51px] p-[10px_30px_11px] w-[100%] z-[3] bg-white flex border-b border-solid border-b-[#e8e8e8] fixed`}>
          <div className="w-[200px]">
            <Link href="/">
              <span className="block bg-[url(https://web.archive.org/web/20150611000903im_/https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfldzd94_.png)] bg-youtube w-[72px] h-[30px] mr-auto" />

            </Link>

          </div>
          <SearchBar />
          <div className="ml-auto mt-0 flex gap-4 mb-[0.05rem]">
            <Button>
              Concha
            </Button>
            <SecondaryButton>Meiggs</SecondaryButton>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
