import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "With a steady hand and a thoughtful spirit, Bharat bhai contributes to the sangh’s mission in ways that may not always be visible, but are certainly impactful.",
            name: "Bharat Bhai",
            designation: "Trustee",
            src: "./trustee/bhandari.png",
        },
        {
            quote:
            "Though much of Raju bhai's work happens quietly behind the scenes, their presence and support are a valued part of our sangh’s strength and unity.",
            name: "Dr.Rajesh Bhai",
            designation: "Trustee",
            src: "./trustee/dr.png",
        },
        {
            quote:
                "We deeply appreciate Paresh bhai's unwavering dedication and tireless efforts to the sangh continue to enrich our traditions",
            name: "Paresh Bhai",
            designation: "Trustee",
            src: "./trustee/pareshUncle.png",
        },
    ];
    return <>
        <div className="flex flex-col justify-items-center  items-center w-full h-screen">
            <h1 className="text-5xl text-center wrap-normal md:wrap-break-word mt-30 font-bold text-black dark:text-white">Our Trustees</h1>
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    </>
}
