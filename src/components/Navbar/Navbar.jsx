import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navData = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard"
  },
  {
    id: 2,
    name: "Projects",
    path: "/projects"
  },
  {
    id: 3,
    name: "Team",
    path: "/team"
  },
  {
    id: 4,
    name: "Analytics",
    path: "/analytics"
  },
  {
    id: 5,
    name: "Settings",
    path: "/settings"
  }
];

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const links = navData.map(route => <Link key = {route.id} route = {route}></Link>)


    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex' onClick={() => {setOpen(!open)}}>
              { open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
              
              <ul className='md:hidden'>
                {links}
              </ul>

              <h3 className='ml-4'>My Navbar</h3>
            </span>

            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>


            {/* <ul className='flex'>
                {
                    navData.map(route => <li className='mr-10'><a href={route.name}>{route.name}</a></li>)
                }
            </ul> */}


            {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}

            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;