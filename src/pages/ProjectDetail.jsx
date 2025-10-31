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
        <div className="bg-peony pt-24 pb-16 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif italic font-bold text-espresso mb-6">
                {project.title}
            </h1>

            <img
                src="/images/homiz_pres.jpg"
                alt="Mockup du projet"
                className="w-1920 h-1080 text-espresso rounded-xl mb-8"
            />

            <p className="text-lg text-espresso mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="text-espresso px-3 py-1 text-sm"
                    >
                        {t}
                    </span>
                ))}
            </div>

            <p className="italic text-espresso">
                🚧 La page détaillée de ce projet est en cours de construction...
            </p>

            <div>
                <p className="italic text-espresso">
                {project.introduction}
            </p>
            </div>

        </div>
    );
}
