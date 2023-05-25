import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

type Props = {}

const HireMe = (props: Props) => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative overflow-hidden">
        <CircularText
          className={'fill-dark animate-spin-slow flex item-center'}
        />
        <Link
          href="mailto:thomasxgallagher@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark"
        >
          <span>Hire Me</span>
        </Link>
      </div>
    </div>
  )
}

export default HireMe