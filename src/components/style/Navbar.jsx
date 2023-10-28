"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-wrap items-center max-w-screen-xl p-4 mx-auto justify-left">
      <span className="px-3 py-1 m-2 border-2 rounded-lg hover:border-amber-500 ">
        <Link href="/">CSS</Link>
      </span>
      <span className="px-3 py-1 m-2 border-2 rounded-lg hover:border-amber-500 ">
        <Link href="/">CSS</Link>
      </span>
      <span className="px-3 py-1 m-2 border-2 rounded-lg hover:border-amber-500 ">
        <Link href="/">CSS</Link>
      </span>
      <span className="px-3 py-1 m-2 border-2 rounded-lg hover:border-amber-500 ">
        <Link href="/">CSS</Link>
      </span>
      <span className="px-3 py-1 m-2 border-2 rounded-lg hover:border-amber-500 ">
        <Link href="/">CSS</Link>
      </span>
      <span className="px-3 py-1 m-2 border-2 rounded-lg hover:border-amber-500 ">
        <Link href="/">CSS</Link>
      </span>
      <span className="px-3 py-1 m-2 border-2 rounded-lg hover:border-amber-500 ">
        <Link href="/">CSS</Link>
      </span>
    </div>
  );
}

export default Navbar;
