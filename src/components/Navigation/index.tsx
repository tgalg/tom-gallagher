'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from '../Logo'
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitchIcon,
  TwitterIcon,
} from '../Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from '../hooks/useThemeSwitcher'

export interface CustomLinkProps {
  href: string
  title: string
  className?: string
}

const CustomLink = ({ href, title, className = '' }: CustomLinkProps) => {
  const pathName = usePathname()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 ${
          pathName === href ? 'w-full' : 'w-0'
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const Navigation = () => {
  const [mode, setMode] = useThemeSwitcher()
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      {/* <button className="flex flex-col justify-center items-center">
        <span className="bg-dark dark:bg-light"></span>
        <span className="bg-dark dark:bg-light"></span>
        <span className="bg-dark dark:bg-light"></span>
      </button> */}

      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Code Projects" className="mx-4" />
        <CustomLink href="/gaming" title="Gaming" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com/tgalg"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <TwitterIcon className={undefined} />
        </motion.a>
        <motion.a
          href="https://github.com/tgalg"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon className={undefined} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/tom-gallagher-248b58116/"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <LinkedInIcon className={undefined} />
        </motion.a>
        {/* <motion.a
          href="https://www.twitch.com/tombsickle"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <TwitchIcon />
        </motion.a> */}

        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={`ml-4 flex items-center justify-center rounded-full p-1 ${
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          }`}
        >
          {mode === 'dark' ? (
            <SunIcon className={'fill-dark'} />
          ) : (
            <MoonIcon className={'fill-dark'} />
          )}
        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  )
}

export default Navigation
