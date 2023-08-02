import React from "react";
import profil from "../assets/img/png/profil.png";

const Hero = () => {
  return (
    <div className="pt-24">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Halo Semua 👋, saya
              <span className="mt-1 block text-4xl font-bold text-dark lg:text-5xl">
                Bima Hayu Nugraha
              </span>
            </h1>
            <h2 className="mb-5 text-lg font-medium text-secondary lg:text-2xl">Mahasiswa</h2>
            <p className="mb-10 font-medium leading-relaxed text-secondary">
              Saya adalah seorang mahasiswa dari jurusan Teknologi Informasi di Universitas
              Muhammadiyah Yogyakarta.
            </p>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:right-0 lg:mt-9">
              <img
                src={profil}
                alt="profil"
                className="mx-auto h-96 w-96 rounded-full bg-primary object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
