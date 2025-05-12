
import { Link } from 'react-scroll';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-primary/80 backdrop-blur-sm z-50 border-b border-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className="text-secondary font-bold text-xl cursor-pointer"
            >
              Portfolio
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-tertiary transition-colors duration-300"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-textSecondary" />
            ) : (
              <MoonIcon className="h-6 w-6 text-textSecondary" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 