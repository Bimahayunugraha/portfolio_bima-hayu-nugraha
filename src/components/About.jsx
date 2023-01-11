import React from "react";

const About = () => {
	return (
		<div className="pt-36 pb-32">
			<div className="container">
				<h2 className="mb-3 text-center text-lg font-bold uppercase text-primary">Tentang Saya</h2>
				<div className="flex flex-wrap">
					<div className="mb-10 w-full px-4 lg:w-1/2">
						<h3 className="mb-4 text-2xl font-semibold text-dark lg:pt-10 lg:text-3xl">
							Data Diri
						</h3>
						<p className="max-w-xl text-base font-medium text-secondary lg:text-lg">
							Nama saya Bima Hayu Nugraha dari Universitas Muhammadiyah Yogyakarta Jurusan Teknologi
							Informasi. Saya sangat menyukai Pemrograman Web dan Desain Web. Saya sangat senang
							belajar pemrograman web dan itu memotivasi saya untuk membuat website yang menarik.
							Saya percaya bahwa kemampuan saya dapat memberikan hasil yang optimal untuk setiap
							proyek yang saya kerjakan
						</p>
					</div>
					<div className="w-full px-4 lg:w-1/2">
						<h3 className="mb-4 text-2xl font-semibold text-dark lg:pt-10 lg:text-3xl">
							Mari berteman
						</h3>
						<p className="mb-6 text-base font-medium text-secondary lg:text-lg">
							Tetap terhubung bersama saya melalui sosial media
						</p>
						<div className="flex items-center">
							<a
								href="https://www.linkedin.com/in/bima-hayu-nugraha-734a02256/"
								target="_blank"
								rel="noreferrer"
								className="bg mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
								<i className="fab fa-linkedin-in"></i>
							</a>
							<a
								href="https://api.whatsapp.com/send/?phone=087758524277&text&app_absent=0"
								target="_blank"
								rel="noreferrer"
								className="bg mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
								<i className="fab fa-whatsapp"></i>
							</a>
							<a
								href="https://t.me/BimaHayuNugraha"
								target="_blank"
								rel="noreferrer"
								className="bg mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
								<i className="fab fa-telegram"></i>
							</a>
							<a
								href="https://github.com/Bimahayunugraha"
								target="_blank"
								rel="noreferrer"
								className="bg mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
								<i className="fab fa-github"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
