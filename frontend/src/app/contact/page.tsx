import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "With a steady hand and a thoughtful spirit, Bharat bhai contributes to the sangh’s mission in ways that may not always be visible, but are certainly impactful.",
            name: "Bharat Bhandari",
            designation: "Trustee",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
            "Though much of Raju bhai's work happens quietly behind the scenes, their presence and support are a valued part of our sangh’s strength and unity.",
            name: "Dr.Raju Shah",
            designation: "Trustee",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "We deeply appreciate Paresh bhai's unwavering dedication and tireless efforts to the sangh continue to enrich our traditions",
            name: "Paresh Shah",
            designation: "Trustee",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return <>
        <div className="flex flex-col justify-items-center  items-center w-full h-screen">
            <h1 className="text-5xl text-center wrap-normal md:wrap-break-word mt-30 font-bold text-black dark:text-white">Our Trustees</h1>
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    </>
}
