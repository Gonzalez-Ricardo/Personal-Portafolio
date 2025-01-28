import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Electronics Ecommerce",
    description: [
      "- Designed and developed a full-stack e-commerce platform, incorporating modular architecture, responsive design, and intuitive navigation for a seamless and engaging user experience.",
      <br />,
      <br />,
      "- Implemented backend server, adept in CRUD operations with a focus on secure, scalable, and optimized database interactions.",
    ],
    technologies: ["React", "TypeScript", "PHP", "MySql", "CSS"],
    link: "",
  },
  {
    title: "Investment Calculator",
    description: [
      "- Developed and launched a financial tool for investment advisors, integrating key metrics such as Return on Investment (ROI), Net Present Value (NPV), Internal Rate of Return (IRR), and among others to maximize investment value.",
      <br />,
      <br />,
      "- Designed and developed a task management application, incorporating modular architecture, responsive design and intuitive navigation for a fluid and engaging user experience.",
    ],
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "#",
  },
  {
    title: "Error Management System And Download",
    description: [
      "- This project aims to develop a centralized platform to improve the organization, visualization and maintenance of manuals and executables, as well as to record and manage errors in different modules.",
      <br />,
      <br />,
      "- Through an intuitive web system, users will be able to easily access the necessary content and manage incidents with multimedia support.",
    ],
    technologies: ["Laravel", "Vue", "PHP", "MySql", "CSS"],
    link: "#",
  },
  {
    title: "Hotel san Andres Website",
    description: [
      "In this project I developed a complete and functional website for a hotel, designed to improve its online presence and offer customers an intuitive and pleasant experience. The main objective was to present all the relevant information about the hotel and highlight the services it offers in an organized, attractive and accessible way from any device.",
    ],
    technologies: ["React", "Tailwing", "JavaScript"],
    link: "https://www.hotel-san-andres.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="md:px-10 px-4 py-12 md:py-10 lg:py-10">
      <br />
      <h2 className="text-3xl text-[#c4c8c7] font-bold tracking-tighter md:text-4xl mb-8">
        Proyectos Destacados
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            className="bg-[rgba(17,25,40,0.5)] border border-[#465866]"
            key={project.title}
          >
            <CardTitle>{project.title}</CardTitle>
            <CardDescription className="text-sm text-gray-400 mb-5">
              {project.description.map((desc, i) => (
                <span key={i} className="mb-2">
                  {desc}
                </span>
              ))}
            </CardDescription>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#232323] text-secondary-foreground rounded-full px-2 py-1 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View details for ${project.title}`}
                className="bg-[rgba(17,25,40,0.5)] border border-[#465866] text-white py-2 px-4 rounded"
              >
                View Project
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
