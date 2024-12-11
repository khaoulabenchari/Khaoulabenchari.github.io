export default function Resume() {
    return (
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold mb-4">Download My CV</h2>
        <div className="flex justify-center space-x-4">
          <a
            href="/assets/files/Khaoula_Benchari_en.pdf"
            download
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            English
          </a>
  
          {/* Button for French CV */}
          <a
            href="/assets/files/Khaoula_Benchari_fr.pdf"
            download
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
           Français
          </a>
        </div>
      </div>
    );
  }
  
  