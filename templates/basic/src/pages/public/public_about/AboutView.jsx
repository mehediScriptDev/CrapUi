import React from 'react';
import { Target, Users, Zap, Shield, Code, Layers } from 'lucide-react';

const AboutView = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Production Ready',
      description: 'Built with industry best practices and optimized for production deployment.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Fast Development',
      description: 'Hot module replacement and lightning-fast build times with Vite.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Type Safe',
      description: 'TypeScript ready with proper configurations and linting rules.',
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: 'Scalable Architecture',
      description: 'Well-structured folder organization that grows with your project.',
    },
  ];

  const technologies = [
    { name: 'React 19', description: 'Latest React with modern features' },
    { name: 'Redux Toolkit', description: 'Simplified state management' },
    { name: 'Tailwind CSS 4', description: 'Utility-first CSS framework' },
    { name: 'Vite', description: 'Next generation frontend tooling' },
    { name: 'React Router v7', description: 'Declarative routing for React' },
    { name: 'Axios', description: 'Promise-based HTTP client' },
    { name: 'ESLint & Prettier', description: 'Code quality and formatting' },
    { name: 'Lucide React', description: 'Beautiful and consistent icons' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              About This Boilerplate
            </h1>
            <p className="text-xl leading-relaxed text-gray-600">
              This React boilerplate is designed to help developers kickstart their projects with
              modern tools and best practices, saving weeks of setup time and ensuring a solid
              foundation for scalable applications.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Mission</h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-600">
                  To provide developers with a comprehensive, well-documented React boilerplate that
                  follows industry standards and incorporates the latest tools and practices in
                  frontend development.
                </p>
                <p className="text-lg leading-relaxed text-gray-600">
                  We believe that starting a new project shouldn't require hours of configuration.
                  Our boilerplate eliminates the setup overhead and lets you focus on building
                  amazing user experiences.
                </p>
              </div>
              <div className="rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 p-8">
                <Code className="mb-6 h-16 w-16 text-blue-600" />
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Developer First</h3>
                <p className="text-gray-600">
                  Every decision in this boilerplate is made with developer experience in mind, from
                  folder structure to tool selection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Key Features</h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Built with modern development practices and tools that scale with your project.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mb-4 flex justify-center text-blue-600">{feature.icon}</div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Technologies Used</h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Carefully selected tools and libraries that work well together.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold text-gray-900">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <Users className="mx-auto mb-6 h-16 w-16" />
            <h2 className="mb-4 text-3xl font-bold">Join the Community</h2>
            <p className="mb-8 text-lg text-blue-100">
              This boilerplate is open source and maintained by the community. Contributions,
              feedback, and suggestions are always welcome!
            </p>
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
              Contribute on GitHub
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView;
