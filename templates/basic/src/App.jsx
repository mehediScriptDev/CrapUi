import "./App.css";
import "./index.css";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";

// remove this array
const techStack = [
  { name: "React", version: "v19.2.0", logo: "/react.png" },
  { name: "Vite", version: "v7.2.4", logo: "/vite.svg" },
  { name: "React Router", version: "v7.12.0", logo: "/reactrouter.svg" },
  { name: "Tailwind CSS", version: "v4.1.18", logo: "/tailwind.png" },
  { name: "React Icons", version: "v5.5.0", logo: "/react-icons.svg" },
  { name: "Lucide Icons", version: "v0.562.0", logo: "/lucide.png" },
  { name: "Context API", version: "Pre-configured", logo: "/react.png" },
  { name: "ESLint", version: "v9.39.1", logo: "/ESLint_logo.svg" },
];

function App() {
  return (
    // remove this div
    <div className="mt-10 flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center mb-5 ">
          <img
            src="/crapui.jpg"
            className="w-auto h-50"
            alt="CrapUi Official Logo"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-5 text-center">
          Thanks for using CrapUi!
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse w-full">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-md transition-shadow"
            >
              <div className="text-center">
                <img
                  src={tech.logo}
                  alt={`${tech.name} Logo`}
                  className="w-10 h-10 mx-auto mb-2"
                />
                <h3 className="font-semibold text-gray-800 text-sm">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{tech.version}</p>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Call-to-Action */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-gray-800 text-lg">
          <p className="font-medium text-xs text-gray-500">
            If you like this project, consider starring it on GitHub.
          </p>
          <p className="-mt-4 font-medium text-xs text-gray-500">Found an issue? Please report it.</p>
          <Link
            target="_blank"
            to={"https://github.com/mehediScriptDev/CrapUi"}
            className="inline-flex items-center gap-2 bg-gray-500 justify-center text-white px-4 py-1 rounded-md transition-colors duration-200 "
          >
            <FaGithub className="w-5 h-5" />
            <span>Star</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
