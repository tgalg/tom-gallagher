// 'use client'
import React, { useRef } from 'react'
import { Metadata } from 'next'
import Nexus from '@/components/Nexus'
import AnimatedText from '@/components/AnimatedText'
import profilePic from '@/../public/images/profilePic.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

type Props = {}

export const metadata: Metadata = {
  title: 'Tom Gallagher | About',
  description: 'Tinkering Away',
}

// const AnimatedNumbers = ({ value }) => {
//   const ref = useRef<Element>(null)

//   const motionValue = useMotionValue(0)
//   const springValue = useSpring(motionValue, { duration: 3000 })
//   const isInView = useInView({ ref })
// }

const about = (props: Props) => {
  return (
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Nexus className="pt-16">
        <AnimatedText
          text="Passion Fuels Purpose!"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              Biography
            </h2>
            <p className="font-medium">
              Dynamic Full Stack Web Developer and Platform Architect with a
              proven track record of leveraging cutting-edge technologies to
              drive customer engagement and operational efficiency.
            </p>

            <p className="my-4 font-medium">
              Quick to master new languages and tool suites. Known for thriving
              in both remote and in-person settings, and for bringing a
              test-driven, collaborative approach to team projects.
            </p>

            <p className="font-medium">
              Currently seeking a challenging new role where I can utilize my
              technical skills and passion for innovation.
            </p>
          </div>
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <Image
              src={profilePic}
              alt="tgalg"
              className="w-full h-auto rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                5+
              </span>
              <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Years Experience
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                15+
              </span>
              <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Projects Completed
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                11+
              </span>
              <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Technologies Mastered
              </h2>
            </div>
          </div>
        </div>
      </Nexus>
    </main>
  )
}

export default about
