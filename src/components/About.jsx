import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="pt-24 pb-16 px-4 sm:px-6 md:px-12 bg-white rounded-3xl shadow-2xl animate-fadeInUp"
    >
      <div className="container mx-auto max-w-6xl overflow-x-hidden">
        <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16">
          <div className="w-52 h-52 sm:w-64 sm:h-64 bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 rounded-full p-1 shadow-lg hover:scale-105 transition-transform duration-500">
            <div className="rounded-full overflow-hidden w-full h-full">
              <img
                src="/charitha.avif"
                alt="Charitha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-5 text-center sm:text-left text-gray-800 dark:text-white">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              👩‍💻 About Me
            </h2>
            <p className="text-lg leading-relaxed">
             I am an enthusiastic and dedicated Computer Science student with a strong foundation in programming, algorithms, and software development principles. Passionate about solving complex problems and learning new technologies, I actively engage in projects that enhance my coding skills and practical knowledge. I have experience with languages such as Python, Java, and C, and I am eager to contribute to innovative software solutions. My goal is to grow as a well-rounded developer and make a positive impact through technology.


            </p>
            <p className="text-md text-gray-700 dark:text-gray-300">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:boddupallycharitha@gmail.com"
                className="text-blue-600 dark:text-yellow-400 hover:underline"
              >
                boddupallycharitha@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
