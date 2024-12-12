export default function Resume() {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold mb-4">Download My CV</h2>
      <div class="inline-flex">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-l">
        <a
          href="/assets/files/Khaoula_Benchari_en.pdf"
          download
        >
          English
        </a>
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">    
        <a
          href="/assets/files/Khaoula_Benchari_fr.pdf"
          download
          //className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Français
        </a>
        </button>
      </div>
    </div>
  );
}
