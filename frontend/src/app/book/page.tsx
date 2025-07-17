"use client";
import React, { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input2";
import { cn } from "@/lib/utils";
import axios from "axios";
import { LoaderOne } from "@/components/ui/loader";
import { ToastContainer, toast } from 'react-toastify';

export default function book() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("AYAMBIL");
    const [numberOfPeople, setNumberOfPeople] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        const payload = {
            name,
            category,
            numberOfPeople: Number(numberOfPeople),
            phone,
        };
        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/booking`, {
            payload
        }).then(() => {
            toast.success("Booking Successful");
        })
        setLoading(false);
        setName("");
        setCategory("");
        setNumberOfPeople("");
        setPhone("");
    };
    const categories = ["AYAMBIL", "CHAUVIHAR"];
    return (
        <>
            <ToastContainer />
            <div className="flex flex-col items-center justify-center mt-40 align-center gap-y-25">
                <h1 className="text-4xl text-wrap text-center">Ayambil/Chauvihar Booking</h1>
                <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
                    <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                        Welcome to Mahavirnagar Jain Sangh
                    </h2>
                    <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                        Fill the details below to book your Ayambil/Chauvihar
                    </p>

                    <form className="my-8" onSubmit={handleSubmit}>
                        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                            <LabelInputContainer>
                                <Label htmlFor="firstname">Full Name</Label>
                                <Input id="firstname" placeholder="Bhavya Shah" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="+9510821145" type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="number">Number of persons</Label>
                            <Input id="number" placeholder="1" min={1} type="number" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="category">Category</Label>
                            <select
                                id="category"
                                name="category"
                                className="h-10 w-full rounded-md bg-gray-50 px-3 py-2 text-sm text-black dark:bg-zinc-800 dark:text-white"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </LabelInputContainer>

                        {loading ? <LoaderOne /> : <button
                            className="cursor-pointer group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                            type="submit"
                        >
                            Book &rarr;
                            <BottomGradient />
                        </button>}

                        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                    </form>
                </div>
            </div>
        </>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
