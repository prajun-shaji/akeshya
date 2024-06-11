"use client";

import { navList } from "@/constants/constants";
import { ArrowUpward, Close, Menu } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = ({ setBg }) => {
  const pathName = usePathname();

  const [showMenu, setShowMenu] = useState(false);
  const [header, setHeader] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);

  return (
    <header
      className={`${header && "fixed left-0 right-0 top-0 z-40 shadow-lg"} flex w-full items-center bg-white px-5 py-5 transition-all duration-500 ease-in-out sm:px-10`}
    >
      <nav className="screen-max-width flex w-full justify-between">
        <Link href="/">
          <div className="flex-center cursor-pointer">
            <Image
              className="object-contain"
              src="/logo.png"
              height={60}
              width={60}
              priority
              alt="logo"
            />
            <h1 className="text-2xl font-semibold text-darkblue md:text-3xl">
              AKESHYA
            </h1>
          </div>
        </Link>
        {showMenu && (
          <div
            className="absolute right-0 top-2 size-10 cursor-pointer"
            onClick={() => {
              setShowMenu(false);
              setBg(false);
            }}
          >
            <Close />
          </div>
        )}
        <ul
          className={`${showMenu ? "absolute left-0 top-10 z-50 flex h-[90vh] w-[90vw] flex-col gap-5 rounded-3xl bg-white p-5 py-10 shadow-lg" : "flex-center max-sm:hidden"}`}
        >
          {navList.map(({ url, title, bg }) => (
            <Link key={title} href={url}>
              <li
                className={`${bg && "w-fit rounded-full bg-darkblue px-3 py-2 text-white hover:bg-lightblue hover:text-white"} ${pathName === url && "flex text-darkblue"} cursor-pointer px-5 duration-500 hover:text-darkblue`}
                onClick={() => {
                  setShowMenu(false);
                  setBg(false);
                }}
              >
                {title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <div
        className="max-sm:flex-center hidden cursor-pointer"
        onClick={() => {
          setShowMenu(true);
          setBg(true);
        }}
      >
        <Menu />
      </div>
      {header && (
        <div
          className="fixed bottom-10 right-10 z-30 flex size-10 cursor-pointer items-center justify-center rounded-sm bg-darkblue text-white"
          onClick={scrollToTop}
        >
          <ArrowUpward />
        </div>
      )}
    </header>
  );
};

export default Navbar;
