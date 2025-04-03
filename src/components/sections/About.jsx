import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Javascript",
    "React",
    "TailwindCSS",
    "Redux",
    "HTML",
  ];
  const backendSkills = ["NodeJs", "MongoDb"];
  return (
    <section
      id="about"
      className="min-h-screen
  flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent ">
            About Me
          </h2>
          <div className=" rounded-xl p-8 border-white/10 hover:translate-y-1 transition-all ">
            <p className="text-gray-300 mb-6">
              Passionate developer who wants to dive deep into the world of web
              and create innovative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 translate-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.E in Electronics and Telecommunication</strong> -
                  Dayananda Sagar College of Engineering, Bangalore
                </li>
                <li>
                  GPA: <strong className="text-blue-500">9.1</strong>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 translate-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold ">
                    Firmware Engineer at Ambee{" "}
                  </h4>
                  <p>Fill in later vnskvnkjsdnvksjnvkjsdncvksnc</p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Firmware Engineer at Zettaone Pvt Ltd{" "}
                  </h4>
                  <p>Fill in later vnskvnkjsdnvksjnvkjsdncvksnc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
