import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, description, tech }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/project/${id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`block border-2 border-warm shadow-md rounded-2xl p-6 transform transition-all duration-300 ease-out 
        ${hovered ? "scale-105 shadow-xl bg-warm text-cold " : "text-warm scale-100 shadow-md"}`}
    >
      {/* Contenu principal */}
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl italic font-bold mb-2">{title}</h3>
          <p className="2xl:text-lg mb-4">{description}</p>
        </div>

        {/* Tags */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t) => (
              <span
                key={t}
                className="bg-peony text-warm px-3 py-1 rounded-md text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Bouton “Voir le projet →” (apparait uniquement au hover) */}
          <p
            className={`text-cold font-bold transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            Voir le projet →
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
