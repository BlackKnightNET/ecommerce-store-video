"use client";

import React from "react";
import { useUser,ClerkLoaded,ClerkLoading } from "@clerk/nextjs"
import Image from "next/image";
import { Loader2 } from "lucide-react";


export default function Username() {
  const { isLoaded, isSignedIn, user } = useUser();
 
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  
  return (
<div className="flex items-center space-x-4 p-4 ">
      <div className="relative flex-shrink-0">
        <Image
          className="rounded-full border-2 border-blue-500"
          width={40}
          height={40}
          alt="User image"
          src={user?.imageUrl || "/default-user-image.png"} // Provide a default image URL or use a placeholder image
        />
      </div>
      <ClerkLoaded>
      <div className="">
        <h3 className="text-sm font-semibold text-gray-600">Perdoruesi:</h3>
            <p className="text-lg font-semibold text-gray-800 ">
              {isLoaded ? "," : ""}
              {user?.firstName}
            </p>
      </div>
      </ClerkLoaded>
      <ClerkLoading>
            <Loader2 className='size-8 animate-spin text-slate-400'/>
      </ClerkLoading>

    </div>
  );
};