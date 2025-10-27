import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "HOMIZ",
    description: "L'application pour le bien-être de votre chat.",
    tech: ["UX/UI", "Mobile App", "Design System", "Prototype"],
    link: "https://monportfoliom",
  },
  {
    title: "Application de Gestion de Tâches - Flowdesk",
    description: "Une app simple de gestion de tâches interne",
    tech: ["React", "LocalStorage"],
    link: "https://monportfoliom",
  },
  {
    title: "E-commerce Recommandation App",
    description: "Trouvez ce que vous aimerez demain !",
    tech: ["UX/UI", "Prototype", "Design System", "IA" ],
    link: "https://monportfoliom",
  },
  {
    title: "FoodAdvisor",
    description: "L'application qui vous accompagne dans les bases de la cuisine simple et healthy.",
    tech: ["UX/UI", "Mobile/Web", "React"],
    link: "https://monportfoliom",
  },
  {
    title: "Walkly",
    description: "Marchez et découvrez votre ville.",
    tech: ["UX/UI", "Mobile App", "Prototype", "Design System" ],
    link: "https://monportfoliom",
  },
];

export default function Projects() {
  return (
    <div className="max-w-[2400px] px-6 py-16 mt-20">
      <h1 className="px-10 text-3xl font-serif italic font-bold text-primary mb-4">Some cool projects</h1>
      <div className="grid md:grid-cols-3 gap-6 px-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
