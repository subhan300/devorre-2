import { brandInfo } from '@/website-data/headerData';
import { Globe } from 'lucide-react';
import React from 'react';

const Logo = () => {
    return (
             <div className="flex items-center gap-2">
            <div className="relative">
               {brandInfo.logo ? <img src={brandInfo.logo} /> : <Globe className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />}
              {/* <div className="absolute border border-[yellow] -top-1 -right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" /> */}
            </div>
            <span className="text-lg md:text-[22px] font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {brandInfo.name}
            </span>
        </div>
    );
}

export default Logo;
