export default function CV() {
    return (
        <div className="max-w-5xl font-sans mx-auto px-6 py-16 mt-20">
            <h1 className="text-6xl font-bold text-primary mb-4">Julia Crapanzano</h1>
            <p className="text-lg text-peony mb-10">
                UX/UI Designer with a Master's degree in Cognitive Science, with 3 years of experience, including 2 years working on B2C and B2B e-commerce products. Profile combining user-centered design and understanding of web development.      </p>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-3">Education</h2>
                <p className="text-lg">Master's degree in Cognitives Sciences at IDMC in Nancy.</p>
                <p > — Psychology, HCI, Ergonimics, Web Development, Project Managment.</p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-3">Experiences</h2>
                <h3 className="text-xl font-semibold">UX/UI Designer & Web Developper</h3>
                <p>Lead end-to-end design process for both b2c and b2b e-commerce product.</p>
                <p>2 years of Work-Study Program + Permanent Contract.</p>
                <h3 className="text-xl font-semibold mt-3">Data Analyst for Internal Audit Intern</h3>
                <p>Data visualisation tools. Monitoring and prediction for audit. Internation team.</p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-3">Skills</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
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
                </ul>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-primary mb-3">Contact</h2>
                <p>📧 <a href="mailto:tonemail@example.com" className="text-accent hover:underline">julia.crapanzano@gmail.com</a></p>
                <div className="flex gap-4 mt-4">
                    <a href="https://github.com/tonpseudo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-peony">GitHub</a>
                    <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer" className="text-white hover:text-peony">LinkedIn</a>
                </div>
            </section>
        </div>
    );
}
