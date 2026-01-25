import React from 'react';
import { useSelector } from 'react-redux';
import {
  Code,
  Zap,
  Shield,
  Smartphone,
  Palette,
  Database,
  Settings,
  Github,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Rocket,
  Terminal,
  Package,
} from 'lucide-react';

const HomeView = () => {
  const productsState = useSelector((state) => state.products);

  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'React 19',
      description: 'Latest React with hooks support and modern features',
      color: 'text-blue-500',
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Redux Toolkit',
      description: 'Simplified state management with Redux Toolkit',
      color: 'text-purple-500',
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Tailwind CSS 4',
      description: 'Utility-first CSS framework for rapid UI development',
      color: 'text-cyan-500',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Vite',
      description: 'Lightning-fast build tool and development server',
      color: 'text-yellow-500',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'ESLint & Prettier',
      description: 'Code quality and formatting tools',
      color: 'text-green-500',
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Responsive Design',
      description: 'Mobile-first responsive components',
      color: 'text-indigo-500',
    },
  ];

  const quickStartSteps = [
    {
      step: '1',
      title: 'Clone Repository',
      command: 'git clone <repository-url>',
      description: 'Clone this boilerplate to your local machine',
    },
    {
      step: '2',
      title: 'Install Dependencies',
      command: 'npm install',
      description: 'Install all required dependencies',
    },
    {
      step: '3',
      title: 'Start Development',
      command: 'npm run dev',
      description: 'Start the development server at localhost:5173',
    },
    {
      step: '4',
      title: 'Start Building',
      command: 'Edit src/pages/public/public_Home/HomeView.jsx',
      description: 'Start building your amazing application!',
    },
  ];

  const folderStructure = [
    {
      name: 'src/components/',
      description: 'Reusable UI components (common & ui folders)',
      icon: <Package className="h-4 w-4" />,
    },
    {
      name: 'src/features/',
      description: 'Redux slices and API logic (store.js, auth/, counter/, products/)',
      icon: <Database className="h-4 w-4" />,
    },
    {
      name: 'src/pages/',
      description: 'Page components organized by access level (admin/, auth/, public/)',
      icon: <Code className="h-4 w-4" />,
    },
    {
      name: 'src/router/',
      description: 'Routing configuration with guards and layouts',
      icon: <Settings className="h-4 w-4" />,
    },
    {
      name: 'src/services/',
      description: 'API services with axios instance and HTTP methods',
      icon: <ExternalLink className="h-4 w-4" />,
    },
    {
      name: 'src/utils/',
      description: 'Helper functions, validators, and utility modules',
      icon: <Terminal className="h-4 w-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <Rocket className="h-4 w-4" />
            React Redux Tailwind Boilerplate
          </div>

          <h1 className="mb-6 text-5xl leading-tight font-bold text-gray-900 md:text-6xl">
            Build Modern React Apps
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}
              Faster
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-600">
            A production-ready React boilerplate with Redux Toolkit, Tailwind CSS, and modern
            development tools. Everything you need to start building amazing applications.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg">
              <Github className="h-5 w-5" />
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-8 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Powerful Features</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Everything you need for modern React development, pre-configured and ready to use.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className={`${feature.color} mb-4`}>{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Quick Start Guide</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Get up and running in minutes with these simple steps.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {quickStartSteps.map((step, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <div className="mb-3 rounded-md bg-gray-900 p-3 font-mono text-sm text-green-400">
                    $ {step.command}
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Project Structure</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Well-organized folder structure following React best practices.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
            {folderStructure.map((folder, index) => (
              <div
                key={index}
                className={`p-6 ${index !== folderStructure.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-600">{folder.icon}</div>
                  <div className="flex-1">
                    <h3 className="mb-2 font-mono text-lg font-semibold text-gray-900">
                      {folder.name}
                    </h3>
                    <p className="text-gray-600">{folder.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Scripts Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Available Scripts</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Pre-configured scripts for development, building, and code quality.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-4">
            {[
              { command: 'npm run dev', description: 'Start development server with Vite' },
              { command: 'npm run build', description: 'Build for production' },
              { command: 'npm run preview', description: 'Preview production build locally' },
              { command: 'npm run lint', description: 'Run ESLint to check code quality' },
              { command: 'npm run format', description: 'Format code with Prettier' },
            ].map((script, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-4"
              >
                <div>
                  <code className="rounded bg-gray-900 px-3 py-1 font-mono text-sm text-green-400">
                    {script.command}
                  </code>
                  <p className="mt-2 text-gray-600">{script.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redux State Demo */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Redux State Demo</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Example Redux state from the products slice. Open Redux DevTools to explore.
          </p>
        </div>

        <div className="mx-auto max-w-7xl overflow-hidden">
          <div className="rounded-xl bg-gray-900 p-6 font-mono text-sm text-green-400">
            <div className="mb-2 text-yellow-400">// Current Redux State:</div>
            <pre>{JSON.stringify(productsState, null, 2)}</pre>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              💡 Install Redux DevTools browser extension to inspect and debug state changes
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Build Something Amazing?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
            Start building your next React application with this production-ready boilerplate.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-all duration-300 hover:bg-gray-100">
              <CheckCircle className="h-5 w-5" />
              Start Development
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10">
              <Github className="h-5 w-5" />
              View on GitHub
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
