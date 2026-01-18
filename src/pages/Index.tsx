import { Link } from "react-router-dom";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center py-12 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Dyad Framework
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
            Build stunning web applications with AI assistance. Create beautiful, responsive interfaces in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mutabie.ca/contact/"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
            <Link to="/about">
              <button className="px-8 py-4 border border-text-primary text-text-primary hover:bg-bg-secondary text-lg font-semibold rounded-xl transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl hover:bg-bg-secondary transition-all duration-300 border border-border shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
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
                  className="text-primary"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Development</h3>
              <p className="text-text-secondary">
                Build applications faster with intelligent code suggestions and automated UI generation.
              </p>
            </div>
            <div className="p-8 rounded-2xl hover:bg-bg-secondary transition-all duration-300 border border-border shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
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
                  className="text-primary"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Component Library</h3>
              <p className="text-text-secondary">
                Access a rich collection of pre-built, customizable components for any use case.
              </p>
            </div>
            <div className="p-8 rounded-2xl hover:bg-bg-secondary transition-all duration-300 border border-border shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
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
                  className="text-primary"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-time Preview</h3>
              <p className="text-text-secondary">
                See your changes instantly with live preview and hot reloading during development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who made this site?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/80">
            Curious to learn more about
            this site and who made it?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mutabie.ca/contact/"
              className="px-8 py-4 bg-white text-primary hover:bg-secondary text-lg font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reach out!
            </a>
            <a
              href="https://github.com/Mutabie-Canada-Inc/dyad.mutabie.ca"
              className="px-8 py-4 bg-transparent border border-white text-white hover:bg-white/10 text-lg font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              Source Code
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 text-center text-text-secondary">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4">&copy; 2026 Mutabie Canada Inc. All rights reserved.</p>
          <p className="text-sm">
            Powered by{" "}
            <a
              href="https://mutabie.ca"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mutabie Canada Inc.
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}