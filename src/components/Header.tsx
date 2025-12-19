'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LoginModal from './LoginModal';

export default function Header() {
  const pathname = usePathname();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  return (
    <>
      <header className="header">
        <Link href="/" className="header-logo">
          lotea.org
        </Link>
        
        <nav className="header-nav">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>홈</Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>사업소개</Link>
          <Link href="/join" className={pathname === '/join' ? 'active' : ''}>참여하기</Link>
        </nav>
        
        <div className="header-user-icon" onClick={() => setIsLoginModalOpen(true)}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      </header>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
}
