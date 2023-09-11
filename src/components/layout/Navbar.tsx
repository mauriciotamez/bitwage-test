import { ModeToggle } from '@/components/mode-toggle'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar () {
  const NavbarItemStyles = 'text-sm cursor-pointer hover:text-slate-400 transition-colors '
  const currentLocation = useLocation().pathname

  return (
    <header className='flex place-content-between justify-between align-middle'>
      <div className='flex  justify-center items-center text-xl'>Crypto 💱</div>
      <nav>
        <ul className="flex gap-3 border rounded-full py-2 px-4">
          <Link to={'/'}>
            <li className={NavbarItemStyles} >
              Dashboard
            </li>
          </Link>
          <Link to={'/table'}>
            <li className={NavbarItemStyles} >
              Table
            </li>
          </Link>
          <Link to={'/profile'}>
            <li className={NavbarItemStyles} >
              Profile
            </li>
          </Link>
        </ul>
      </nav>
      <div className=''>
        <ModeToggle/>
      </div>
    </header>
  )
}
