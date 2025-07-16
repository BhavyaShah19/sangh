"use client";
import { GlareCard } from "../ui/glare-card";
import  Button from "./mainButton";
import { useRouter } from "next/navigation";

export function GlareCardDemo() {
    const router = useRouter();
    return (
        <div className="flex md:flex-row flex-col justify-evenly items-center w-full gap-5">
            <GlareCard className="flex flex-col items-start justify-end py-8 px-6 gap-4">
                <p className="font-bold text-white text-xl">Chauvihar/Ayambil Booking</p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                    Booking for Chauvihar should be informed in advance before 2pm.
                </p>
                <Button onClick={()=>router.push("/chaturmas")} text={"Book Now"}/>
            </GlareCard>
            <GlareCard className="flex flex-col items-start justify-end py-8 px-6 gap-4">
                <p className="font-bold text-white text-lg">Tapascharya</p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                    The greatest trick the devil ever pulled was to convince the world
                    that he didn&apos;t exist.
                </p>
                <Button onClick={()=>router.push("/chaturmas")} text={"See More"}/>
            </GlareCard>
            <GlareCard className="flex flex-col items-start justify-end py-8 px-6 gap-4">
                <p className="font-bold text-white text-lg">Contact Us</p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                    Contact us for any queries or enquiries.
                </p>
                <Button onClick={()=>router.push("/contact")} text={"Contact Us"}/>

            </GlareCard>
        </div>
    );
}
