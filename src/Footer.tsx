import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-4 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Company Logos */}
        <div className="flex items-center space-x-4">
          <img
            src="src/assets/Logo-hitam.png"
            alt="Company Logo 1"
            className="w-16 h-16"
          />
          <img
            src="src/assets/Logo-hijau.png"
            alt="Company Logo 2"
            className="w-16 h-16"
          />
        </div>

        {/* Company Details */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-gray-800">Company Name</h2>
          <p className="text-xs text-gray-600">
            Phone: <span className="font-medium">+1 (123) 456-7890</span>
          </p>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center">
          <div className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-500 text-sm">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-500 text-sm">
              Contact
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-500 text-sm">
              Privacy
            </a>
          </div>
        </nav>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-500">
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-500">
            <span className="text-sm">Twitter</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-500">
            <span className="text-sm">Facebook</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
