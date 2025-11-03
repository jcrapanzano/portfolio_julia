import { useParams, Link } from "react-router-dom";
import projectsData from "../data/projectsData";

export default function ProjectDetail() {
    const { id } = useParams(); // récupère l’ID du projet dans l’URL
    const project = projectsData.find((p) => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="bg-peony pt-24 text-center text-espresso">
                <h2 className="text-2xl font-bold mb-4">Projet introuvable 😕</h2>
                <p>Le projet que vous cherchez n'existe pas ou a été supprimé.</p>
            </div>
        );
    }


    return (
        <div className=" pt-24 pb-16 max-w-4xl mx-auto">
            <h1 className="text-4xl font-sans font-black text-espresso">
                {project.title}
            </h1>
            <p className="text-2xl font-semibold italic mb-12">{project.baseline}</p>
            <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="bg-espresso text-peony font-semibold px-3 py-1 rounded-md text-sm"
                    >
                        {t}
                    </span>
                ))}
            </div>

            <img
                src={project.image}
                alt={project.title}
                className="w-1920 h-1080 rounded-xl mb-12"
            />

            <h1 className="text-2xl font-bold mb-4">{project.description}</h1>

            <h1 className="text-2xl font-bold mb-4">Contexte</h1>
            <p className="text-lg mb-12">{project.introduction}</p>


            {/* <p className="italic text-espresso">
                🚧 La page détaillée de ce projet est en scours de construction...
            </p> */}

            <div>
                <h1 className="text-2xl font-bold mb-4">Objectifs</h1>
                <p className="text-lg mb-12">
                    {project.objectif}
                </p>
            </div>

            <div>
                <h1 className="text-2xl font-bold mb-4">Fonctionnalité</h1>
                <p className="text-lg mb-12">
                    {project.fonctionnalites}
                </p>
            </div>
            <div>
                <h1 className="text-2xl font-bold mb-4">Impact </h1>
                <p className="italic text-espresso">
                    {project.impact}
                </p>
            </div>

        </div>
    );
}
