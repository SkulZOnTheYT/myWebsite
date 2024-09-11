import React from 'react';

const KNZPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">KNZ UI - Resource Pack Minecraft Bedrock</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Fitur Utama</h2>
        <ul className="list-disc list-inside">
          <li>Perubahan kamera cepat: KNZ UI memungkinkan pemain untuk mengubah kamera dengan cepat tanpa harus membuka menu pengaturan.</li>
          <li>Tampilan yang lebih baik: KNZ UI memiliki tampilan yang lebih modern dan rapi dibandingkan dengan tampilan default Minecraft.</li>
          <li>Fitur tambahan: KNZ UI menambahkan berbagai fitur tambahan, seperti tampilan statistik, mode gelap, dan kemampuan untuk mengganti musik.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Poin Penting</h2>
        <ul className="list-disc list-inside">
          <li>KNZ UI adalah resource pack yang gratis dan mudah digunakan.</li>
          <li>KNZ UI kompatibel dengan Minecraft Bedrock Edition versi 1.21 dan lebih tinggi.</li>
          <li>KNZ UI dapat diunduh dari situs web resmi atau dari beberapa situs web pihak ketiga.</li>
          <li>KNZ UI dapat diinstal dengan mudah dengan menyalin file resource pack ke folder `resource_packs` di folder Minecraft.</li>
        </ul>
      </section>
    </div>
  );
};

export default KNZPage;