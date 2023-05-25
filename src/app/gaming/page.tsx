import AnimatedText from '@/components/AnimatedText'
import Nexus from '@/components/Nexus'
import { Metadata } from 'next'
import React from 'react'

type Props = {}

export const metadata: Metadata = {
  title: 'Tom Gallagher | Gaming',
  description: 'Tinkering Away',
}

const gaming = (props: Props) => {
  return (
    <main>
      <Nexus>
        <AnimatedText text="An Enitre Page Dedicated To My Gaming Hobby, Coming Soon!" />
      </Nexus>
    </main>
  )
}

export default gaming
