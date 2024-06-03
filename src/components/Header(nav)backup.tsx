"use client";
import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const [isMenuOpen, setIsMenuOpen] = React.useState(isSmallScreen);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    setIsMenuOpen(isSmallScreen);
  }, [isSmallScreen]);

return (
    <div className="top-0 w-full py-2 md:py-2 mx-auto ">
        <div className="flex justify-between items-center mx-4 rounded-lg  text-violet-600">
            <div className="text-2xl">Mechie Spike</div>
            <nav className="md:hidden flex justify-end">
                <menu>
                    <RxHamburgerMenu size={24} onClick={handleMenuClick} />
                </menu>
            </nav>
            <nav className="hidden justify-end md:flex">
                    <div className="flex">
                            <div className="m-2">About</div>
                            <div className="m-2">Pricing</div>
                            <div className="m-2">Contact</div>
                    </div>
            </nav>
        </div>
        {isMenuOpen && (
            <div className="bg-slate-200 py-0 px-4 mt-2 mx-4">
                <li>about</li>
                <li>learn</li>
                <li>pricing</li>
            </div>
        )}
    </div>
);
};

export default Header;