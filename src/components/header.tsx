import React from 'react';
import { UserCircle, Menu } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

interface HeaderProps {
  labTitle: string;
  onMenuClick: () => void;
}

const Header = ({ labTitle, onMenuClick }: HeaderProps) => {
  const { data: session } = useSession();

  return (
    <header className="bg-slate-800 border-b border-slate-700 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-slate-700 rounded-lg"
          >
            <Menu className="w-6 h-6 text-slate-300" />
          </button>
          <h2 className="text-lg sm:text-xl font-bold text-white truncate">
            {labTitle}
          </h2>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-slate-300 hidden sm:block">
            {session?.user?.name || 'Guest'}
          </span>
          <div className="w-8 h-8 relative overflow-hidden">
            {session?.user?.image ? (
              <Image 
                src={session.user.image}
                alt={session.user.name || 'Profile'}
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            ) : (
              <UserCircle className="w-8 h-8 text-slate-300" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
