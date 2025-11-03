import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { ReactComponent as Flower } from '../assets/icons/flower.svg';


const featuredProjects = [
    {
        title: "Interface d’application mobile",
        description: "Design UX/UI d’une application de bien-être pour iOS et Android.",
        tech: ["Figma", "Prototypage"],
        link: "#",
    },
    {
        title: "Refonte site e-commerce",
        description: "Amélioration de l’expérience utilisateur et de la conversion.",
        tech: ["UX Research", "UI Design", "Design System"],
        link: "#",
    },
    {
        title: "Dashboard interactif",
        description: "Création d’un tableau de bord intuitif pour la gestion de données.",
        tech: ["UX Design", "Design System", "Web App"],
        link: "#",
    },
];

export default function Home() {
    return (
        <div className="max-w-[2400px] mx-auto px-6 py-20 ">
            <div className="text-center mt-20">
                {/* Nom et poste */}
                <h1 className="text-4xl font-sans italic font-black md:text-6xl ">JULIA CRAPANZANO</h1>
                <h1 className="text-3xl font-serif italic font-extralight mb-8 md:text-5xl">— UX/UI DESIGNER</h1>
                <p className="font-sans font-semibold text-md max-w-2xl mx-auto mb-6 md:text-lg">
                    Donner vie à des projets qui ont du sens, à travers des interfaces intuitives, esthétiques et accessibles à tous.
                </p>

                {/* Tags */}
                {/* <div className="flex justify-center gap-x-4 mb-10">
                    <p className=" px-6 py-3 rounded-lg font-medium">📍Basée à Nancy, France</p>
                    
                </div> */}

                {/* CTA vers CV */}
                <Link
                    to="/cv"
                    className="inline-block font-sans italic font-bold px-4 py-3 mb-16"
                >
                    En savoir plus sur mon profil →
                </Link>
            </div>
            {/* Liste horizontale de projets */}
            <div className="mx-6 flex flex-row gap-5 items-center mb-6">
                <Flower className="w-8 h-8 animate-spin-slow" />
                <h2 className="text-2xl md:text-3xl font-serif font-black ">Quelques projets récents</h2>
            </div>
            <div className="2xl:text-lg px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mb-16">
                {featuredProjects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>

            {/* CTA Contact */}
            <div className="text-center pt-20">
                <p className="text-lg font-medium mb-4">✨ Envie de collaborer ou d’échanger ?</p>
                <div className=" flex flex-wrap px-24 justify-center gap-x-6 gap-y-3 mb-4">
                    <a href="mailto:tonemail@example.com" className="text-white hover:underline hover:text-warm">julia.crapanzano@gmail.com</a>
                    <a href="https://www.behance.net/juliacrapanzano1/" className="text-white hover:text-warm">Behance</a>
                    <a href="https://www.linkedin.com/in/juliacrapanzano/" className="text-white hover:text-warm">LinkedIn</a>
                </div>
                <p className="text-warm pt-4">Entrons en contact 🤝</p>
            </div>
        </div>
    );
}
