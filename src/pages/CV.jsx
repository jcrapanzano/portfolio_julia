import { ReactComponent as Flower } from '../assets/icons/flower.svg';

export default function CV() {
    return (
        <div className="max-w-[2400px] bg-warm text-cold font-sans px-12 md:px-24 py-16 pt-32">

            <h1 className="text-4xl md:text-6xl font-black ">JULIA<br />CRAPANZANO</h1>
            <p className="text-md md:text-lg mb-8">
                {/* UX/UI Designer with a Master's degree in Cognitive Science, with 3 years of experience, including 2 years working on B2C and B2B e-commerce products. Profile combining user-centered design and understanding of web development. */}
                UX/UI Designer titulaire d'un master en Sciences Cognitives, avec 3 années d'expériences dont 2 ans sur des produits e-commerce b2c et b2b. Profil aliant conception centrée utilisateurs et développement web.
            </p>
            <div className="mb-20">
                <a
                    href="/files/CRAPANZANO_J_UXUI.pdf"
                    download
                    className=" border-2 border-cold px-6 py-3 rounded-lg font-bold hover:bg-cold hover:border-cold hover:text-warm transition"
                >
                    Télécharger mon CV
                </a>
            </div>

            <section className="mb-12 ">
                <div className="flex flex-row gap-4 mb-3">
                    <Flower className="w-8 h-8 text-cold animate-spin-slow" />
                    {/* <h2 className="text-5xl font-black text-primary ">EDUCATION</h2> */}
                    <h2 className="text-4xl font-serif font-black ">Formation</h2>
                </div>
                <div className="mx-12 text-md md:text-lg">
                    {/* <p>Master's degree in Cognitives Sciences at IDMC in Nancy.<br />
                        — Psychology, HCI, Ergonimics, Web Development, Project Managment.</p> */}
                    <p>Master en Sciences Cognitives à l'IDMC de Nancy.<br />
                        — Psychologie, Interaction Homme-Machine, Ergonomie Cognitive, Développement Web, Gestion de projet.</p>
                </div>
            </section>

            <section className="mb-12">
                <div className="flex flex-row gap-4 mb-3">
                    <Flower className="w-8 h-8 text-cold animate-spin-slow" />
                    <h2 className="text-4xl font-serif font-black mb-3">Expériences</h2>
                </div>
                <div className="px-12">
                    {/* <h3 className="text-xl font-semibold">UX/UI Designer & Web Developper</h3> */}
                    <h3 className="text-xl font-bold">UX/UI Designer & Développeur web</h3>
                    {/* <p>Lead end-to-end design process for both b2c and b2b e-commerce product.</p>
                    <p>2 years of Work-Study Program + Permanent Contract.</p> */}
                    <p className="text-md md:text-lg">Conception UX et développement front-end pour des plateformes e-commerce b2c/b2b. Mise en place d’une approche centrée utilisateur : recherche, prototypage et tests d’utilisabilité pour aligner les produits sur les besoins réels des utilisateurs. Intégration d’un système de recommandation avec fonctionnalités d’explicabilité, renforçant l’engagement et la confiance des utilisateurs envers la plateforme.</p>
                    <p className="italic">Alternance de 2 ans + CDI.</p>
                    {/* <h3 className="text-xl font-semibold mt-3">Data Analyst for Internal Audit Intern</h3> */}
                    <h3 className="text-xl font-bold mt-3">Analyste de données pour l'audit interne</h3>
                    {/* <p>Data visualisation tools. Monitoring and prediction for audit. International team.</p> */}
                    <p className="text-md md:text-lg">Visualisation de données sensibles et confidentielles. Surveillance et prévision pour l'audit. <br /> Collaboration dans une équipe internationale </p>
                    <p className="italic">Stage de fin d'étude de licence.</p>
                </div>
            </section>

            <section className="mb-12">
                <div className="flex flex-row gap-4 mb-6">
                    <Flower className="w-8 h-8 text-cold animate-spin-slow" />
                    <h2 className="text-4xl font-serif font-black mb-3">Compétences</h2>
                </div>
                <div className="flex flex-row gap-5 md:gap-8 mb-6">
                    <h2 className="pl-12 text-3xl font-extrabold" >DESIGN</h2>
                    <ul className="text-lg font-semibold pl-20 flex flex-wrap gap-x-8 gap-y-3">
                        {/* <li>User research</li>
                        <li>Design Thinking</li>
                        <li>User Tests</li>
                        <li>Figma</li>
                        <li>Illustrator</li>
                        <li>Design System</li> */}
                        <li>Approche centrée utilisateur</li>
                        <li>Méthode Design Thinking</li>
                        <li>Accessibilité web WCAG</li>
                        <li>Prototypage et design d'intéraction</li>
                        <li>Design System</li>
                        <li>Figma</li>
                        <li>Adobe Illustrator</li>
                        <li></li>
                    </ul>
                </div>
                <div className="flex flex-row gap-20 md:gap-8 mb-6">
                    <h2 className="pl-12 text-3xl font-extrabold" >FRONT-END</h2>
                    <ul className="text-lg font-semibold pl-4 flex flex-wrap gap-x-8 gap-y-3">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React JS & Native </li>
                        {/* <li>REACT NATIVE</li> */}
                        <li>Tailwindcss</li>
                        <li>Python</li>
                    </ul>
                </div>
                {/* <ul className="text-lg px-12 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <li>UX Design</li>
                    <li>UI Design</li>
                    <li>Figma</li>
                    <li>Design System</li>
                    <li>Prototyping</li>
                    <li>User Research</li>
                    <li>Design Thinking</li>
                    <li>HTML/CSS</li>
                    <li>React JS</li>
                    <li>Agile Environment </li>
                    <li>Illustrator</li>
                </ul> */}
            </section>

            <section className="pt-8 text-center">
                <p className="mb-4">📧 <a href="mailto:julia.crapanzano@gmail.com" className="text-accent hover:underline">julia.crapanzano@gmail.com</a></p>
                <div className="flex justify-center gap-4">
                    <a href="https://www.behance.net/juliacrapanzano1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-peony">Behance</a>
                    <a href="https://www.linkedin.com/in/juliacrapanzano/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-peony">LinkedIn</a>
                </div>
            </section>
        </div>
    );
}
