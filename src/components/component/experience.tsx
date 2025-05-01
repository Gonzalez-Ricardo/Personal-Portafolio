import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "Data Analyst",
    company: "Doca Coffe",
    period: "Aug. 2021 – Dec. 2022",
    location: "Morelia, Michoacán",
    description: [
      "- Applied advanced SQL techniques to optimize table structures for better data organization and faster query response times.",
      "- Designed and implemented new database schema to effectively address fast growing data.",
      "- Performed maintenance to office devices including work computers, printers, among others.",
    ],
    achievements: [
      "Create better reports and data visualization",
      "Customer Experience Monitoring",
      "Operational Optimization in Personnel Management",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "GIRO",
    period: "Aug. 2022 – Dec. 2022",
    location: "Guadalajara, Jalisco",
    description: [
      "- Designed, developed, and deployed an internal tool, designed to document and track common internal software errors and solutions in real time, significantly boosting IT staff efficiency and knowledge sharing.",
      "- Utilized Vue.js for dynamic UI, Laravel for server-side optimization, MySQL for data management, PHP for scripting, and Node.js for scalable back-end functionality, achieving a seamless, fully-integrated project.",
      "- Offered expert assistance to colleagues in SQL optimization, data integrity enforcement, and performance tuning, ensuring robust and efficient database operations.",
    ],
    achievements: ["New support system for logging bugs"],
  },
  {
    title: "Systems Administrator",
    company: "San Andres Hotel",
    period: "Jan. 2023 – Mar. 2025",
    location: "Salvatierra, Gto",
    description: [
      "- Managed hotel devices and electronic accounts, including cameras, sensors and computers, as well as their proper maintenance.",
      "- Created and designed documents for the internal control of the hotel including electronic agendas, entry and exit documents for staff and guests.",
      "- Designed marketing projects and documents in Illustrator and Photoshop.",
    ],
    achievements: [
      "Website for the Hotel",
      "Attendance management for staff by a time clock",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="md:px-10 px-4 py-12 md:py-10 lg:py-10">
      <br />
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-9 text-[#c4c8c7]">
        Work Experience
      </h2>
      <div className="relative border-l border-gray-400 pl-6 ml-3">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 last:mb-0">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] mt-1.5" />
            <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
            <span className="text-sm text-[#ffff] mb-2">
              {exp.company} | {exp.period}
            </span>
            <br />
            <span  className="text-sm text-gray-500 mb-2">{exp.location}</span>
            <br />
            <span  className="text-sm mb-4 text-[#92a0a3]">
              {exp.description.map((desc, i) => (
                <span key={i}>
                  {desc}
                  <br />
                </span>
              ))}
            </span>
            <br />
            <div className="flex flex-wrap gap-2">
              {exp.achievements.map((achievement, i) => (
                <div
                  key={i}
                  className="bg-[#0f1d29] rounded-lg p-2 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]"
                  aria-label={`Achievement: ${achievement}`}
                >
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
