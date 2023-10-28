import CourseList from "@/components/Homepage/CourseList";
import Hero from "@/components/Homepage/Hero";
import Navbar from "@/components/style/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <Hero />
        <CourseList />
      </main>
    </>
  );
}
