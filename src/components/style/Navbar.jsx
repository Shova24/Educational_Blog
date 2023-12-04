"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Languages, Search, Sun, SunMoon } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const changeMode = () => {
    console.log(isDark);
    setIsDark(!isDark);
  };
  return (
    <div className="flex justify-between mx-2 my-4">
      <div className="flex gap-4">
        <div>Logo</div>
        <div className="flex gap-4">
          <div>DSA</div>
          <div>Tutorials</div>
          <div>Database</div>
          <div>Web Development</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center w-full max-w-sm space-x-2">
          <Input type="email" placeholder="Email" />
          <Search />
        </div>
        <div>
          {isDark ? (
            <SunMoon className="w-6 h-6 text-purple-400" onClick={changeMode} />
          ) : (
            <Sun className="w-6 h-6 text-purple-400" onClick={changeMode} />
          )}
        </div>
        <Select>
          <SelectTrigger className="w-full">
            <div className="flex items-center justify-center gap-2">
              <Languages className="w-4 h-4 text-purple-400" />
              <SelectValue />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="bn">Bangla</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="custom">Sign In</Button>
      </div>
    </div>
    // <div className="flex flex-wrap items-center max-w-screen-xl p-4 mx-auto justify-left">
    //   <span className="px-3 py-1 m-2 border-2 rounded-lg hover:border-purple-500 ">
    //     <Link href="/">CSS</Link>
    //   </span>
    //   <span className="px-3 py-1 m-2 border-2 rounded-lg hover:border-purple-500 ">
    //     <Link href="/">CSS</Link>
    //   </span>
    //   <span className="px-3 py-1 m-2 border-2 rounded-lg hover:border-purple-500 ">
    //     <Link href="/">CSS</Link>
    //   </span>
    //   <span className="px-3 py-1 m-2 border-2 rounded-lg hover:border-purple-500 ">
    //     <Link href="/">CSS</Link>
    //   </span>
    //   <span className="px-3 py-1 m-2 border-2 rounded-lg hover:border-purple-500 ">
    //     <Link href="/">CSS</Link>
    //   </span>
    //   <span className="px-3 py-1 m-2 border-2 rounded-lg hover:border-purple-500 ">
    //     <Link href="/">CSS</Link>
    //   </span>
    //   <span className="px-3 py-1 m-2 border-2 rounded-lg hover:border-purple-500 ">
    //     <Link href="/">CSS</Link>
    //   </span>
    // </div>
  );
};

export default Navbar;
