import '@/styles/globals.css'

import Image from 'next/image'
import landingArtwork from '@/../public/images/tgalg.png'
import Nexus from '@/components/Nexus'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '@/../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Nexus className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={landingArtwork}
                alt="tgalg"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Tinkerer at Heart, Technologist by Trade."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-mediummd:text-sm sm:text-xs">
                As an accomplished full-stack developer, I am committed to
                transforming concepts into groundbreaking web applications.
                Delve into my most recent projects and articles, demonstrating
                my proficiency in React.js and the broader landscape of web
                development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/resume_Tom_Gallagher_.pdf"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light md:p-2 md:px-4 md:text-base
                "
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href="mailto:thomasxgallagher@gmail.com"
                  target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-dark hover:underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Nexus>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="tgalg" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
