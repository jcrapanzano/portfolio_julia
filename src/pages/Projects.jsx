import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData";

// const projects = [
//   {
//     id:1,
//     title: "HOMIZ",
//     description: "L'application pour le bien-être de votre chat.",
//     tech: ["UX/UI", "Mobile App", "Design System", "Prototype"],
//   },
//   {
//     id:2,
//     title: "Application de Gestion de Tâches - Flowdesk",
//     description: "Une app simple de gestion de tâches interne",
//     tech: ["React", "LocalStorage"],
//   },
//   {
//     id:3,
//     title: "E-commerce Recommandation App",
//     description: "Trouvez ce que vous aimerez demain !",
//     tech: ["UX/UI", "Prototype", "Design System", "IA" ],
//   },
//   {
//     id:4,
//     title: "FoodAdvisor",
//     description: "L'application qui vous accompagne dans les bases de la cuisine simple et healthy.",
//     tech: ["UX/UI", "Mobile/Web", "React"],
//   },
//   {
//     id:5,
//     title: "Walkly",
//     description: "Marchez et découvrez votre ville.",
//     tech: ["UX/UI", "Mobile App", "Prototype", "Design System" ],
//   },
// ];

export default function Projects() {
  return (
    <div className="max-w-[2400px] mx-2 px-4 md:px-16 py-16 pt-32">
      <h1 className= "text-3xl font-serif font-black mb-8">Mes projets</h1>
      <div className="grid px-4 md:px-16 md:grid-cols-3 gap-6 ">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
