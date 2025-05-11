import React from "react";

export default function Header({ children, title }: { children: React.ReactNode, title: string }) {
    return (
      <div className="flex flex-col items-center">
        <h1 className="w-full font-bold text-2xl text-center">{title}</h1>
        {children}
      </div>
    );
}