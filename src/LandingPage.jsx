import TypingText from './TypingText'

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section id="landing" className="bg-gray-500 text-white py-20 mt-20">
        <div className="container mx-auto text-center">
        <TypingText text="Welcome To My Website!" loop={true} />
          <p className="text-lg mb-8">Please click "Start" below to read
more about me and see some of my work!</p>
          <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
            Start
          </button>
        </div>
      </section>

      {/* Fitur atau Manfaat */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Fitur Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tambahkan fitur-fitur di sini */}
            <div>
              <h3 className="text-xl font-bold mb-2">Fitur 1</h3>
              <p>Deskripsi singkat tentang fitur 1.</p>
            </div>
            {/* ... fitur lainnya ... */}
          </div>
        </div>
      </section>
</div>
  );
}

export default LandingPage;