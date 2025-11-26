import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData";
import { ReactComponent as Flower } from '../assets/icons/flower.svg';


const featuredProjects = [
    {
        title: "Swipely",
        description: "Découvrez des produits personnalisés via un flux ludique de cartes à swiper.",
        tech: ["UX/UI Design", "Figma", "Mobile App", "AI", "E-commerce"],
        link: "#",
    },
    {
        title: "HOMIZ",
        description: "Une solution simple pour faire garder votre chat chez vous, sans stress ni changement d’environnement.",
        tech: ["UI Design", "Mobile App", "Design System"],
        link: "#",
    },
    // {
    //     title: "Dashboard interactif",
    //     description: "Création d’un tableau de bord intuitif pour la gestion de données.",
    //     tech: ["UX Design", "Design System", "Web App"],
    //     link: "#",
    // },
];
// const roles = ["UX/UI DESIGNER", "PRODUCT DESIGNER", "FRONT-END DEVELOPER"];
// const [currentRole, setCurrentRole] = useState(0);

export default function Home() {

    const roles = ["UX/UI DESIGNER", "PRODUCT DESIGNER", "FRONT-END DEVELOPER"];
    const [currentRole, setCurrentRole] = useState(0);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="max-w-[2400px] mx-2 py-20 ">
            <div className="justify-items-center text-center  mt-20">
                {/* Nom et poste */}
                <h1 className="text-4xl font-sans italic font-black md:text-6xl ">JULIA CRAPANZANO</h1>
                <h1 key={currentRole} className="text-3xl font-serif italic font-extralight mb-8 md:text-5xl transition-opacity duration-700 ease-in-out opacity-100">— {roles[currentRole]}</h1>
                <p className="font-sans font-semibold text-md max-w-2xl mb-6 md:text-lg">
                    Je suis designer UX/UI et développeuse front-end. Je crée des interfaces que je peux designer et coder, sans perdre l’humain de vue.                </p>

                {/* Tags */}
                {/* <div className="flex justify-center gap-x-4 mb-10">
                    <p className=" px-6 py-3 rounded-lg font-medium">📍Basée à Nancy, France</p>
                    
                </div> */}

                {/* CTA vers CV */}
                <Link
                    to="/cv"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className={`${hovered ? "scale-105 shadow-lg bg-espresso text-white " : "text-white bg-warm scale-100 shadow-md"} rounded-xl inline-block font-sans italic font-semibold duration-200 px-4 py-3 mb-16`}
                >
                    En savoir plus sur mon profil →
                </Link>
            </div>
            {/* Liste horizontale de projets */}
            <div className=" px-4 md:px-16 flex flex-row gap-5 items-center mb-8">
                <Flower className="w-8 h-8 animate-spin-slow" />
                <h2 className="text-2xl md:text-3xl font-serif font-black ">Quelques projets récents</h2>
            </div>
            <div className="2xl:text-lg px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mb-16">
                {projectsData.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>

            {/* CTA Contact */}
            <div className="text-center pt-20">
                <p className="text-lg font-medium mb-4">✨ Envie de collaborer ou d’échanger ?</p>
                <div className=" flex flex-wrap px-24 justify-center gap-x-6 gap-y-3 mb-4">
                    <a href="mailto:tonemail@example.com" className="text-peony hover:underline hover:text-warm">julia.crapanzano@gmail.com</a>
                    <a href="https://www.behance.net/juliacrapanzano1/" className="text-peony hover:text-warm">Behance</a>
                    <a href="https://www.linkedin.com/in/juliacrapanzano/" className="text-peony hover:text-warm">LinkedIn</a>
                </div>
                <p className=" pb-4">Entrons en contact 🤝</p>
            </div>
        </div>
    );
}
