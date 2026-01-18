import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-block mb-8 text-primary hover:underline">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Dyad Framework</h1>
          <div className="prose prose-lg prose-primary max-w-none">
            <p className="text-text-secondary mb-6">
              Dyad Framework is a revolutionary approach to web development that combines the power of AI with modern web technologies. Our mission is to make web development accessible to everyone, from beginners to experts.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-4">Our Vision</h2>
            <p className="text-text-secondary mb-6">
              We believe that creating beautiful, functional web applications should be effortless. By leveraging AI assistance, we eliminate the friction between idea and implementation.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-text-secondary mb-6 space-y-2">
              <li>AI-powered code generation and suggestions</li>
              <li>Real-time preview of changes</li>
              <li>Pre-built component library with shadcn/ui</li>
              <li>Responsive design with Tailwind CSS</li>
              <li>TypeScript support for type safety</li>
              <li>Easy deployment to Vercel</li>
            </ul>
            <h2 className="text-2xl font-bold mt-12 mb-4">Get Started</h2>
            <p className="text-text-secondary mb-6">
              Ready to build your next web application? Visit our homepage to get started with Dyad Framework and experience the future of web development today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}