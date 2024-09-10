import React from 'react';
import vinkev from './assets/vinkev.png'
import { FaYoutube, FaTiktok, FaWhatsapp, FaDiscord } from 'react-icons/fa'; 

function LinktreePage() {
  return (
    <div id="landing" className="flex flex-col dark:bg-black dark:text-white items-center justify-center min-h-screen bg-gray-100 max-w-full">
      <div className="bg-white dark:bg-gray-400 dark:text-white p-8 rounded-lg shadow-md w-96 max-w-full">
        {/* Profil */}
        <div className="flex flex-col items-center mb-6">
          <img 
            src={vinkev}
            className="rounded-full w-24 h-24 mb-3" 
          />
          <h1 className="text-2xl font-bold dark:text-white">VinKev Craft</h1>
          <p className="text-gray-600 dark:text-white">@vinkevcraft</p>
        </div>

        {/* Tautan */}
        <div className="space-y-4">
          <a href="https://youtube.com/@vinkevcraft" className="flex bg-white hover:bg-gray-300 dark:bg-black dark:text-white dark:hover:bg-gray-600 text-black font-bold py-2 px-4 border-2 border-black rounded-lg items-center justify-center">
            <FaYoutube className="mr-auto w-6 h-6" />
            <span className="mr-auto">Youtube</span>
          </a>
          <a href="https://www.tiktok.com/@vinkevcraft?_t=8pQmJGEZKoU&_r=1" className="flex bg-white hover:bg-gray-300 dark:bg-black dark:text-white dark:hover:bg-gray-600 text-black font-bold py-2 px-4 border-2 border-black rounded-lg items-center justify-center">
            <FaTiktok className="mr-auto w-6 h-6" />
            <span className="mr-auto">Tiktok</span>
          </a>
          <a href="https://whatsapp.com/channel/0029Vag7qpzHbFV0TyWAVp2z" className="flex bg-white hover:bg-gray-300 dark:bg-black dark:text-white dark:hover:bg-gray-600 text-black font-bold py-2 px-4 border-2 border-black rounded-lg items-center justify-center">
            <FaWhatsapp className="mr-auto w-6 h-6" />
            <span className="mr-auto">Channel WhatsApp</span>
          </a>
          <a href="https://discord.com/invite/tMbjtxKfck" className="flex bg-white hover:bg-gray-300 dark:bg-black dark:text-white dark:hover:bg-gray-600 text-black font-bold py-2 px-4 border-2 border-black rounded-lg items-center justify-center">
            <FaDiscord className="mr-auto w-6 h-6"/> 
            <span className="mr-auto">Discord Server</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LinktreePage;