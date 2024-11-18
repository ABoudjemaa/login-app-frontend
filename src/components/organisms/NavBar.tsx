// components/organisms/NavBar.tsx
import React from 'react';

interface NavBarProps { }

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className=" p-4 bg-black text-white">
      <h2 className="text-2xl text-center font-bold">Tree Learning</h2>
    </nav>
  );
};

export default NavBar;