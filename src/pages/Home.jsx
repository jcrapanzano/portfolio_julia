import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

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
        tech: ["UX Research", "UI Design"],
        link: "#",
    },
    {
        title: "Dashboard interactif",
        description: "Création d’un tableau de bord intuitif pour la gestion de données.",
        tech: ["UI Design", "Design System"],
        link: "#",
    },
];

export default function Home() {
    return (
        <div className="max-w-[2400px] mx-auto px-6 py-20 ">
            <div className="text-center mt-20">
                {/* Nom et poste */}
                <h1 className="text-6xl font-serif font-semibold italic text-primary mb-3">Julia — UX/UI Designer</h1>
                <p className="font-sans font-semibold text-lg text-peony max-w-2xl mx-auto mb-8">
                    Je conçois des expériences digitales intuitives et esthétiques, centrées sur l’utilisateur.
                    Passionnée par le design fonctionnel et le détail, j’aime transformer les idées en interfaces claires et élégantes.
                </p>

                {/* Tags */}
                <div className="flex justify-center gap-4 mb-10">
                    <span className="bg-peony text-espresso px-8 py-4 rounded-lg text-sm font-semibold">📍 Nancy, France</span>
                    <span className="bg-peony text-espresso px-8 py-4 rounded-lg text-sm font-semibold">💼 3 ans d’expérience</span>
                </div>

                {/* CTA vers CV */}
                <Link
                    to="/cv"
                    className="inline-block bg-primary text-peony px-6 py-3 rounded-full font-medium hover:bg-primary/80 transition mb-16"
                >
                    En savoir plus sur mon profil →
                </Link>
            </div>
            {/* Liste horizontale de projets */}
            <div className="">
                <h2 className="px-10 text-3xl font-serif italic font-semibold text-primary mb-6">Quelques projets récents</h2>
                <div className="2xl:text-lg px-16 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mb-16">
                    {featuredProjects.map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                </div>
            </div>

            {/* CTA Contact */}
            <div className="text-center mt-16">
                <p className="text-lg font-medium mb-4">✨ Envie de collaborer ou d’échanger ?</p>
                <div className="flex justify-center gap-6 mb-4">
                    <a href="mailto:tonemail@example.com" className="text-accent hover:underline">julia.crapanzano@gmail.com</a>
                    <a href="https://github.com/tonpseudo" className="text-white hover:text-peony">GitHub</a>
                    <a href="https://www.linkedin.com/in/juliacrapanzano/" className="text-white hover:text-peony">LinkedIn</a>
                </div>
                <p className="text-peony">Entrons en contact 🤝</p>
            </div>
        </div>
    );
}
