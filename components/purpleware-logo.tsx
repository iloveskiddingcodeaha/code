// components/purpleware-logo.tsx
"use client"; // This component might use client-side features if you add animations

import React from "react";
import Link from "next/link";
// Optional: If you want a small icon next to Purpleware text, like a stylized P or a custom SVG
// import { Zap } from 'lucide-react'; // Example icon

interface PurplewareLogoProps {
  className?: string;
}

export default function PurplewareLogo({ className }: PurplewareLogoProps) {
  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      {/* Optional: Add an icon here if desired */}
      {/* <Zap className="h-6 w-6 text-purple-500 mr-2 group-hover:text-purple-400 transition-colors duration-300" /> */}
      <span className="text-2xl font-extrabold text-white relative">
        <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent transition-all duration-500 ease-out group-hover:from-purple-100 group-hover:via-purple-300 group-hover:to-purple-500">
          Purpleware
        </span>
        <span className="text-purple-400 text-sm align-top ml-0.5 group-hover:text-purple-300 transition-colors duration-300">®</span>

        {/* Optional: Simple shimmer effect on hover for the text */}
        <span className="absolute inset-0 block bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ backgroundSize: '200% 100%' }}>
        </span>
      </span>
    </Link>
  );
}
