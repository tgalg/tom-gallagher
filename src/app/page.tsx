import '@/styles/globals.css'

import Image from 'next/image'
import profilePic from '@/../public/images/tgalg.png'
import Nexus from '@/components/Nexus'
import AnimatedText from '@/components/AnimatedText'

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
              <AnimatedText text="Turning Vision Into Reality With Code And Design." />
              <p>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
            </div>
          </div>
        </Nexus>
      </main>
    </>
  )
}
