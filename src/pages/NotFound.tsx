import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col">
      <Navigation />
      
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-text-secondary mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="inline-block px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;