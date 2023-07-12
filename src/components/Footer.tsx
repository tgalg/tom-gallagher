import React from 'react'
import Nexus from '@/components/Nexus'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Nexus className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Built with
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="https://github.com/tgalg"
            className="hover:underline underline-offset-2"
            target={'_blank'}
          >
            tgalg
          </Link>
        </div>

        <Link
          href="mailto:thomasxgallagher@gmail.com"
          className="hover:underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Nexus>
    </footer>
  )
}

export default Footer
