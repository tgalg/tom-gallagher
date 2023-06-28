import AnimatedText from '@/components/AnimatedText'
import Nexus from '@/components/Nexus'
import { Metadata } from 'next'
import React from 'react'

type Props = {}

export const metadata: Metadata = {
  title: 'Tom Gallagher | Gaming',
  description: 'Tinkering Away',
}

const Gaming = (props: Props) => {
  return (
    <main className="flex justify-center items-center flex-col">
      <Nexus>
        <AnimatedText
          text="Check Out My Live Stream!"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <div className="w-[90%] mx-auto">
          <div className="relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.twitch.tv/?channel=tgalg&parent=www.tgalg.com"
              height="100%"
              width="100%"
              className="absolute top-0 left-0"
              frameBorder="0"
              scrolling="no"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </Nexus>
    </main>
  )
}

export default Gaming
