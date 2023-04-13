/* eslint-disable @typescript-eslint/no-explicit-any */
import { close, logo, menu } from '@assets/index';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { styles } from 'src/style';

import { navLinks } from '../../constants';

const Navbar = () => {
  const [isActive, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={'/'}
          tabIndex={0}
          className="flex items-center gap-2"
          activeOptions={{ exact: true }}
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Michael <span className="sm:block hidden ml-1">Obasi</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(({ id, title }) => (
            <li key={id} className="w-full flex">
              <a
                href={`/portfolio@v2/#${id}` as any}
                className={`flex items-center gap-2 hover:text-white text-[16px] font-medium cursor-pointer ${
                  isActive === title ? 'text-white' : 'text-secondary'
                }`}
                onClick={() => {
                  setActive(title);
                  window.scrollTo(0, 0);
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map(({ id, title }) => (
                <li key={id} className="w-full flex">
                  <Link
                    to={`/portfolio@v2/${id}` as any}
                    tabIndex={0}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      isActive === title ? 'text-white' : 'text-secondary'
                    }`}
                    activeOptions={{ exact: true }}
                    onClick={() => {
                      setToggle(!toggle);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
