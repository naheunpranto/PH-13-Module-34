import React from 'react';
import Link from './Link';

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
    return (
        <nav>

            <ul className='flex'>
                {
                    navData.map(route => <Link key = {route.id} route = {route}></Link>)
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
        </nav>
    );
};

export default Navbar;