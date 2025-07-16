export default function Button({text,onClick}:{text:string,onClick:()=>void}) {

    return <button onClick={onClick} className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black cursor-pointer dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        {text}
    </button>
}
