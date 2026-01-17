import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24 flex-grow">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-primary max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Dyad Framework</h1>
            
            <p className="text-text-secondary mb-6 text-lg">
              Dyad Framework is a revolutionary approach to web development that combines the power of AI with modern web technologies. 
              Our mission is to make web development accessible to everyone, from beginners to experts.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Our Vision</h2>
            <p className="text-text-secondary mb-6">
              We believe that creating beautiful, functional web applications should be effortless. 
              By leveraging AI assistance, we eliminate the friction between idea and implementation.
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
            
            <h2 className="text-2xl font-bold mt-12 mb-4">How It Works</h2>
            <p className="text-text-secondary mb-6">
              Dyad Framework uses advanced AI models to understand your requirements and automatically generate 
              clean, efficient code. Simply describe what you want to build, and Dyad will create the components 
              and structure for you.
            </p>
            
            <div className="bg-bg-secondary p-6 rounded-xl my-8">
              <h3 className="text-xl font-bold mb-4">Get Started in Seconds</h3>
              <ol className="list-decimal list-inside space-y-2 text-text-secondary">
                <li>Describe your app idea to Dyad</li>
                <li>Watch as components are generated in real-time</li>
                <li>Customize and refine the generated code</li>
                <li>Deploy to Vercel with one click</li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Join Our Community</h2>
            <p className="text-text-secondary mb-6">
              Thousands of developers are already using Dyad Framework to build amazing applications. 
              Join our community to get support, share your projects, and stay updated on the latest features.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-colors">
                Join Discord
              </button>
              <button className="px-6 py-3 border border-text-primary text-text-primary hover:bg-bg-secondary font-semibold rounded-lg transition-colors">
                View GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}