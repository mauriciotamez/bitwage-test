import { ModeToggle } from '@/components/theme/mode-toggle'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar () {
  const NavbarItemStyles = 'text-sm cursor-pointer hover:text-slate-400 transition-colors'
  const NavbarItemStylesSelected =
    'text-sm cursor-pointer hover:text-slate-400 transition-colors font-bold text-[#393E65] dark:text-purple-400'

  const currentLocation = useLocation().pathname

  return (
    <header className="sm:flex place-content-between justify-between align-middle">
      <div className="hidden sm:flex justify-center items-center text-xl">Crypto 💱</div>
      <nav>
        <ul className="flex gap-3 border rounded-full py-2 px-4">
          <Link to={'/'} className="flex justify-center items-center">
            <li className={currentLocation === '/' ? NavbarItemStylesSelected : NavbarItemStyles}>Dashboard</li>
          </Link>
          <Link to={'/table'} className="flex justify-center items-center">
            <li className={currentLocation === '/table' ? NavbarItemStylesSelected : NavbarItemStyles}>Table</li>
          </Link>
          <Link to={'/profile'} className="flex justify-center items-center">
            <li className={currentLocation === '/profile' ? NavbarItemStylesSelected : NavbarItemStyles}>Profile</li>
          </Link>
          <li className="sm:hidden ml-auto">
            <ModeToggle />
          </li>
        </ul>
      </nav>
      <div className="hidden sm:flex">
        <ModeToggle />
      </div>
    </header>
  )
}
