import { useParams, Link } from "react-router-dom";
import projects from "../data/projectsData";
import AccordionSection from "../components/AccordionSection";

import { ReactComponent as Flower } from '../assets/icons/flower.svg';

export default function ProjectDetail() {
    const { id, slug } = useParams(); // récupère l’ID du projet dans l’URL
    const project = projects.find((p) => p.slug === slug);
    // const project = projects.find((p) => p.id === parseInt(id));

    const currentIndex = projects.findIndex((p) => p.slug === slug);

    const prevProject = projects[currentIndex - 1];
    const nextProject = projects[currentIndex + 1];



    if (!project) {
        return (
            <div className="bg-peony pt-24 text-center text-espresso">
                <h2 className="text-2xl font-bold mb-4">Projet introuvable 😕</h2>
                <p>Le projet que vous cherchez n'existe pas ou a été supprimé.</p>
            </div>
        );
    }



    return (
        <div className="px-2 pt-24 pb-16 max-w-4xl mx-auto">

            <div>
                <h1 className=" text-xl md:text-4xl font-sans font-black text-espresso">
                    {project.title}
                </h1>
                <p className="md:text-2xl font-semibold italic pb-12">{project.baseline}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        style={{ backgroundColor: project.tagColor }}
                        className="text-white font-semibold px-3 py-1 rounded-md text-sm"
                    >
                        {t}
                    </span>
                ))}
            </div>

            <img
                src={project.image[0]}
                alt={"Contenu à venir."}
                className="w-full h-1080 rounded-xl mb-12"
            />

            {/* <h1 className="text-xl md:text-2xl font-bold mb-4">{project.description}</h1> */}
            {/* <p className="md:text-lg mb-12">{project.intro}</p> */}
            {/* <h1 className="text-lg md:text-2xl font-bold mb-4 border- border-b-2 border-espresso">Contexte</h1> */}
            {/* <p className="md:text-lg mb-12">{project.contexte}</p> */}
            <AccordionSection title="Contexte">
                <p>{project.contexte}</p>
            </AccordionSection>

            {/* <p className="italic text-espresso">
                🚧 La page détaillée de ce projet est en scours de construction...
            </p> */}

            <div>
                {/* <h1 className="text-lg md:text-2xl font-bold mb-4">Objectifs</h1> */}
                <AccordionSection title="Objectifs">
                    <ul>
                        {project.objectif.map((obj, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Flower className="w-5 h-5 mt-1 flex-shrink-0 text-current" />
                                <span>{obj}</span>
                            </li>
                        ))}
                    </ul>
                </AccordionSection>
            </div>

            <img
                src={project.image[2]}
                alt={"Contenu à venir."}
                className="w-full h-1080 rounded-xl mb-12"
            />


            {/* <h1 className="text-lg md:text-2xl font-bold mb-4">Fonctionnalité</h1> */}
            <AccordionSection title="Fonctionnalités">
                <div className="space-y-6">
                    {project.fonctionnalites.map((obj, index) => (
                        <div key={index} className="">
                            
                                <h4 className="text-lg font-semibold mb-2">
                                {index + 1} — {obj.title}
                            </h4>
                            <p className="leading-relaxed">
                                {obj.content}
                            </p>
                            
                            {/* <img
                                src={obj.image}
                                alt={"Contenu à venir."}
                                className="w-1/3 rounded-xl pl-32"
                            /> */}
                        </div>
                    ))}
                </div>
            </AccordionSection>



            {/* <h1 className="text-lg md:text-2xl font-bold mb-4">Impact </h1> */}
            <AccordionSection title="Impact">
                <p>{project.impact}</p>
            </AccordionSection>


            <div className="flex justify-between items-center mt-16 pt-6">
                {prevProject ? (
                    <Link
                        to={`/project/${prevProject.slug}`}
                        className="text-espresso hover:text-pinky transition-colors text-lg font-medium"
                    >
                        ← {prevProject.title}
                    </Link>
                ) : <div />} {/* espace vide pour alignement */}

                {nextProject ? (
                    <Link
                        to={`/project/${nextProject.slug}`}
                        className="text-espresso hover:text-pinky transition-colors text-lg font-medium"
                    >
                        {nextProject.title} →
                    </Link>
                ) : <div />}
            </div>

        </div>
    );
}
