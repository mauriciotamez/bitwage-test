import { ModeToggle } from '@/components/mode-toggle'
import { Link } from 'react-router-dom'

export default function Navbar () {
  const NavbarItemStyles = 'text-sm cursor-pointer hover:text-slate-400 transition-colors '

  return (
    <nav className='flex place-content-between'>
        Crypto 💱
        <ul className="flex gap-3 border border-slate-700 rounded-full py-2 px-4">
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
        <ModeToggle/>
    </nav>
  )
}
