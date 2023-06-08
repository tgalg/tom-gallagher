// 'use client'
import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Nexus from '@/components/Nexus'
import { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import criticalHits from '@/../public/images/critical-hits.png'
import tinker from '@/../public/images/tinker.png'

type Props = {}

export const metadata: Metadata = {
  title: 'Tom Gallagher | Code Projects',
  description: 'Tinkering Away',
}

type FeaturedProjectProps = {
  type: string
  title: string
  summary?: string
  img: any
  link: string
  github: string
}

// const FramerImage = motion(Image)

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: FeaturedProjectProps) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lf:flex-col lg:p-8 xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]"></div>

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="ml-4 w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {' '}
            <GithubIcon className={''} />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const projects = (props: Props) => {
  return (
    <main className="w-full mb-16 flex flex-col items-center dark:text-light">
      <Nexus className="pt-16">
        <AnimatedText
          text="Building, building, building..."
          className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        />
        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          {/* <div className="col-span-12">
            <h1>Embedded Stream</h1>
          </div> */}
          <div className="col-span-6 sm:col-span-12">
            <FeaturedProject
              title="Tinker"
              img={tinker}
              summary="A simple web app that uses Tensorflow.js to augment images"
              link="https://github.com/tgalg/tinker"
              github="https://github.com/tgalg/tinker"
              type="AI Tool"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <FeaturedProject
              title="Critical Hits"
              img={criticalHits}
              summary="A game review site built with Next.js and Firebase"
              link="https://github.com/tgalg/critical-hits"
              github="https://github.com/tgalg/critical-hits"
              type="Full Stack Web App"
            />
          </div>
        </div>
      </Nexus>
    </main>
  )
}

export default projects
