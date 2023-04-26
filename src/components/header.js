import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/icon.png'

//mr-4 text-2xl text-gray-500 hover:no-underline shrink-0 font-normal

export const Header = () => {
  return (
    <header className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="mx-auto max-w-screen-xl">
        <div className="mx-6 flex justify-between">
          <Link className="flex gap-1 text-lg" to="/">
            <img alt="logo" src={Logo} className="w-10 object-contain" />
            <span className="ml-3 hidden shrink-0 text-gray-800 py-5 text-3xl sm:block">Artur Akmalov</span> 
          </Link>
          <nav className="flex gap-6 py-5">
            <Link
              className="border-b-[3px] border-transparent text-lg"
              to="/"
            >
              Home
            </Link>
            <Link
              className="border-b-[3px] border-transparent text-lg"
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="border-b-[3px] border-transparent text-lg"
              to="/about"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header