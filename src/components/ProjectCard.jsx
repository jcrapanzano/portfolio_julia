import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ slug, title, baseline, tech, description }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/project/${slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`block border-2 border-espresso shadow-md rounded-2xl pt-4 pb-2 px-6 transform transition-all duration-300 ease-out 
        ${hovered ? "scale-105 shadow-xl bg-espresso text-peony " : "text-espresso bg-pinky scale-100 shadow-md"}`}
    >
      {/* Contenu principal */}
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="2xl:text-lg italic mb-2">{baseline}</p>
          <p className="2xl:text-lg font-semibold mb-4">{description}</p>
        </div>

        {/* Tags */}
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {tech.map((t) => (
              <span
                key={t}
                className="bg-peony text-warm font-semibold px-3 py-1 rounded-md text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Bouton “Voir le projet →” (apparait uniquement au hover) */}
          <p
            className={`text-cold text-center font-bold transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            →
          </p>
        </div>
      </div>
    </Link>
  );
}
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function ProjectCard({ title, description, tech, link }) {

//   const [hovered, setHovered] = useState(false);

//   return (
//     // <div className="bg-peony shadow-md rounded-2xl p-6 hover:shadow-lg transition">
//     <div
//       className={`bg-peony shadow-md rounded-2xl p-6 flex flex-col justify-between transform transition-all duration-300 ease-out ${hovered ? "scale-105 shadow-xl" : "scale-100 shadow-md"
//         }`}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div>
//         <h3 className="text-xl italic font-bold text-espresso mb-2">{title}</h3>
//         <p className="text-espresso 2xl:text-lg mb-4">{description}</p>
//       </div>

//       {/*Tags  */}
//       <div>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {tech.map((t) => (
//             <span key={t} className="bg-espresso text-peony px-3 py-1 rounded-md text-sm">
//               {t}
//             </span>
//           ))}
//         </div>

//         {/* Bouton voir + */}
//         {link && (
//           <a
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`text-espresso font-medium transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"
//               }`}          >
//             Voir le projet →
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }
