import React, { ReactNode } from 'react';
import NavBar from '../organisms/NavBar';
import Footer from '../organisms/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={"min-h-screen flex flex-col bg-[#f3f4f6]"}>
      <NavBar />
      <main className="flex-grow p-4">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;