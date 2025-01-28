import { useState } from "react";

export default function Skills() {
  return (
    <section id="skills" className="md:px-10 px-4 py-12 md:py-10 lg:py-10">
      <br />
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-8 text-[#c4c8c7]">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeInUp">
        <div className="bg-[#0f1d29] rounded-lg p-4 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]">
          <React />
          <span>React</span>
        </div>
        <div className="bg-[#0f1d29] rounded-lg p-4 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]">
          <LeafIcon />
          <span>Node.js</span>
        </div>
        <div className="bg-[#0f1d29] rounded-lg p-4 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]">
          <TypeIcon />
          <span>TypeScript</span>
        </div>
        <div className="bg-[#0f1d29] rounded-lg p-4 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]">
          <Tailwind />
          <span>Tailwind CSS</span>
        </div>
        <div className="bg-[#0f1d29] rounded-lg p-4 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]">
          <Laravel />
          <span>Laravel</span>
        </div>
        <div className="bg-[#0f1d29] rounded-lg p-4 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]">
          <HTML />
          <span>HTML</span>
        </div>
        <div className="bg-[#0f1d29] rounded-lg p-4 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]">
          <CSS />
          <span>CSS</span>
        </div>
        <div className="bg-[#0f1d29] rounded-lg p-4 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]">
          <VUE />
          <span>VUE</span>
        </div>
        <div className="bg-[#0f1d29] rounded-lg p-4 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]">
          <DataBase />
          <span>SQL</span>
        </div>
        <div className="bg-[#0f1d29] rounded-lg p-4 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]">
          <Dart />
          <span>DART</span>
        </div>
        <div className="bg-[#0f1d29] rounded-lg p-4 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]">
          <Code />
          <span>Java</span>
        </div>
        <div className="bg-[#0f1d29] rounded-lg p-4 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]">
          <Code />
          <span>Python</span>
        </div>
        <div className="bg-[#0f1d29] rounded-lg p-4 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]">
          <Code />
          <span>Php</span>
        </div>
        <div className="bg-[#0f1d29] rounded-lg p-4 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]">
          <Code />
          <span>TypeScript</span>
        </div>
        <div className="bg-[#0f1d29] rounded-lg p-4 flex flex-col items-center animate-bounceIn backdrop-blur-[10px] backdrop-saturate-[200%] bg-[rgba(17,25,40,0.5)] border border-[#465866]">
          <Code />
          <span>JavaScript</span>
        </div>
      </div>
    </section>
  );
}

function React() {
  return (
    <svg
      className="w-6 h-6 text-white dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z" />
      <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z" />
    </svg>
  );
}

function Tailwind() {
  return (
    <svg
      className="w-6 h-6 text-white dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
    </svg>
  );
}
function LeafIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function TypeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}

function Laravel() {
  return (
    <svg
      className="w-6 h-6 text-white dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="m17 13 3.4641-2V7L17 5l-3.4641 2v4M17 13l-3.4641-2M17 13v4l-7.00001 4M17 13V9m0 4-7.00001 4m3.53591-6L10.5 12.7348M9.99999 21l-3.4641-2.1318M9.99999 21v-4m-3.4641 2v-.1318m0 0V15L10.5 12.7348m-3.96411 6.1334L3.5 17V5m0 0L7 3l3.5 2m-7 0 2.99999 2M10.5 5v7.7348M10.5 5 6.49999 7M17 9l3.5-2M17 9l-3.5-2M9.99999 17l-3.5-2m0 .5V7"
      />
    </svg>
  );
}
function HTML() {
  return (
    <svg
      className="w-6 h-6 text-white dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
    </svg>
  );
}
function VUE() {
  return (
    <svg
      className="w-6 h-6 text-white dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.5 3 12 7.156 9.857 3H2l10 18L22 3h-7.5ZM4.486 4.5h2.4L12 13.8l5.107-9.3h2.4L12 18.021 4.486 4.5Z" />
    </svg>
  );
}
function DataBase() {
  return (
    <svg
      className="w-6 h-6 text-white dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 7.205c4.418 0 8-1.165 8-2.602C20 3.165 16.418 2 12 2S4 3.165 4 4.603c0 1.437 3.582 2.602 8 2.602ZM12 22c4.963 0 8-1.686 8-2.603v-4.404c-.052.032-.112.06-.165.09a7.75 7.75 0 0 1-.745.387c-.193.088-.394.173-.6.253-.063.024-.124.05-.189.073a18.934 18.934 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.073a10.143 10.143 0 0 1-.852-.373 7.75 7.75 0 0 1-.493-.267c-.053-.03-.113-.058-.165-.09v4.404C4 20.315 7.037 22 12 22Zm7.09-13.928a9.91 9.91 0 0 1-.6.253c-.063.025-.124.05-.189.074a18.935 18.935 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.074a10.163 10.163 0 0 1-.852-.372 7.816 7.816 0 0 1-.493-.268c-.055-.03-.115-.058-.167-.09V12c0 .917 3.037 2.603 8 2.603s8-1.686 8-2.603V7.596c-.052.031-.112.059-.165.09a7.816 7.816 0 0 1-.745.386Z" />
    </svg>
  );
}
function CSS() {
  return (
    <svg
      className="w-6 h-6 text-white dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z" />
    </svg>
  );
}
function Dart() {
  return (
    <svg
      className="w-6 h-6 text-white dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
function Code() {
  return (
    <svg
      className="w-6 h-6 text-white dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
      />
    </svg>
  );
}
