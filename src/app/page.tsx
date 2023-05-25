import '@/styles/globals.css'

import Image from 'next/image'
import profilePic from '@/../public/images/tgalg.png'
import Nexus from '@/components/Nexus'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '@/../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Nexus className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="tgalg"
                className="w-full h-auto"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Tinkerer at Heart, Technologist by Trade."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As an accomplished full-stack developer, I am committed to
                transforming concepts into groundbreaking web applications.
                Delve into my most recent projects and articles, demonstrating
                my proficiency in React.js and the broader landscape of web
                development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/resume_Tom_Gallagher_.pdf"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                "
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href="mailto:thomasxgallagher@gmail.com"
                  target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-dark hover:underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Nexus>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="tgalg" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
