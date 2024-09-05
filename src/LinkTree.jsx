import React from 'react';
import vinkev from './assets/vinkev.png'
import "./App.css"

function LinktreePage() {
  return (
    <div id="landing" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 max-w-full">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 max-w-full">
        {/* Profil */}
        <div className="flex flex-col items-center mb-6">
          <img 
            src={vinkev}
            className="rounded-full w-24 h-24 mb-3" 
          />
          <h1 className="text-2xl font-bold">VinKev Craft</h1>
          <p className="text-gray-600">@vinkevcraft</p>
        </div>

        {/* Tautan */}
        <div className="space-y-4">
          <a href="https://youtube.com/@vinkevcraft" className="block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Youtube
          </a>
          <a href="https://www.tiktok.com/@vinkevcraft?_t=8pQmJGEZKoU&_r=1" className="block bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Tiktok
          </a>
          <a href="https://whatsapp.com/channel/0029Vag7qpzHbFV0TyWAVp2z" className="block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Channel WhatsApp
          </a>

        </div>

        {/* Sosial Media (opsional) */}
        <div className="flex justify-center mt-6 space-x-4">
          <a href="#"><i className="fab fa-instagram text-2xl"></i></a>
          <a href="#"><i className="fab fa-twitter text-2xl"></i></a>
          {/* Tambahkan lebih banyak ikon sosial media */}
        </div>
      </div>
    </div>
  );
}

export default LinktreePage;