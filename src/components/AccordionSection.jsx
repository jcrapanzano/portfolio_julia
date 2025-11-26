import { useState, useRef } from "react";

export default function AccordionSection({ title, children }) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);

    return (
        <div className="border-b-2 border-espresso mb-12">
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left py-4 font-bold text-lg md:text-2xl mb-2 text-espresso flex justify-between items-center"
            >
                {title}
                {/* Icône + / − avec rotation */}
                <span
                    className={`text-2xl transform transition-transform duration-300 ease-in-out ${open ? "rotate-180" : "rotate-0"
                        }`}
                >
                    {open ? "−" : "+"}
                </span>
            </button>


            <div ref={contentRef}
                style={{
                    height: open ? contentRef.current?.scrollHeight : 0,
                }}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "opacity-100 pb-6" : "opacity-0"
                    }`}>

                <div className="pb-6 text-base md:text-lg text-espresso">
                    {children}
                </div>


            </div>
        </div>
    );
}
