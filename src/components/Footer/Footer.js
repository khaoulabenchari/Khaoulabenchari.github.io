import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full py-4 mt-auto backdrop-blur-md bg-white/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
        className="flex items-center justify-center  mx-auto mt-2 grid grid-cols-7 items-center gap-x-2 gap-y-2 sm:max-w-xl"
>
          <a
            href="https://github.com/khaoulabenchari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            <FaGithub className="w-6 h-6" />
          </a>

          <a
            href="https://linkedin.com/in/khaoulabenchari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>

          {/* Twitter is now X, but react-icons provides a Twitter icon. Use it as a stand-in for X. */}
          <a
            href="https://twitter.com/khaoulabenchari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            <FaTwitter className="w-6 h-6" />
          </a>

          <a
            href="https://khaoulabenchari.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-800 transition-colors duration-200"
          >
            <FaMedium className="w-6 h-6" />
          </a>

          <a
            href="https://instagram.com/khaoulabenchari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition-colors duration-200"
          >
            <FaInstagram className="w-6 h-6" />
          </a>

          <a
            href="https://wa.me/+212708906580"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 transition-colors duration-200"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>

          <a
            href="mailto:khabenchari@example.com"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
        <h4 className="text-right text-gray-900">
          © 2024 Khaoula Benchari. All Rights Reserved.
        </h4>
      </div>
    </div>
  );
}
