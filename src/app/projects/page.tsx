import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Nexus from '@/components/Nexus'
import { Metadata } from 'next'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export const metadata: Metadata = {
  title: 'Tom Gallagher | Code Projects',
  description: 'Tinkering Away',
}

const projects = (props: Props) => {
  return (
    <main>
      <Nexus>
        {/* <AnimatedText text="Professional" />
        <AnimatedText text="Personal" /> */}
        <AnimatedText
          text="Project Details Page Coming Soon!"
          className="mb-16"
        />
        <div className="flex items-center justify-center">
          <p>For now, go checkout my </p>
          <Link
            href="https://github.com/tgalg"
            target={'_blank'}
            className="ml-2 text-lg font-medium capitalize text-dark hover:underline"
          >
            GitHub!
          </Link>
        </div>
      </Nexus>
    </main>
  )
}

export default projects
