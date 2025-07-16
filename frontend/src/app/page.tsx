import { GlareCardDemo } from "@/components/ui/mainGlareCard";
import { BackgroundBeamsWithCollisionDemo } from "@/components/ui/mainBackgroundBeamsWithCollision";
import { CarouselDemo } from "@/components/ui/mainCaraousel";
import { TextHoverEffectDemo } from "@/components/ui/mainTextHoverEffect";
import Image from "next/image";

export default function Home() {
  return (
    <div className="backgrid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <BackgroundBeamsWithCollisionDemo />
        <p className="text-2xl">Announcements</p>
        {/* <TextHoverEffectDemo /> */}
        <CarouselDemo />
        <p className="text-2xl">Bookings and Contact</p>
        <GlareCardDemo/>
      </main>
    </div>
  );
}
