import React from "react";

const Footer = () => {
	return (
		<footer className="bg-dark pt-24 pb-12">
			<div className="container">
				<div className="flex flex-wrap">
					<div className="mb-12 w-full px-4 font-medium text-slate-300 md:w-1/3">
						<h2 className="mb-5 text-2xl font-bold text-white">Portfolio</h2>
					</div>
					<div className="mb-12 w-full px-4 md:w-1/3">
						<h3 className="mb-5 text-xl font-semibold text-white">Tautan Terkait</h3>
						<ul className="text-slate-300">
							<li>
								<a href="#home" className="mb-3 inline-block text-base hover:text-primary">
									Home
								</a>
							</li>
							<li>
								<a href="#tentang" className="mb-3 inline-block text-base hover:text-primary">
									Tentang Saya
								</a>
							</li>
							<li>
								<a href="#project" className="mb-3 inline-block text-base hover:text-primary">
									Project
								</a>
							</li>
						</ul>
					</div>
					<div className="mb-12 w-full px-4 md:w-1/3">
						<h3 className="mb-2 text-xl font-bold text-white">Hubungi Kami</h3>
						<p className="leading-7 text-slate-300">
							Magetan <br />
							Jawa Timur, 63395
							<br />
							<strong>Phone:</strong> +62 87 758 524 277
							<br />
							<strong>Email:</strong> bimahayunugraha@gmail.com
							<br />
						</p>
					</div>
				</div>
				<div className="w-full border-t border-slate-800 pt-10">
					<div className="mb-5 flex items-center justify-center">
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
					<p className="text-center text-sm font-medium text-slate-500">
						Dibuat dengan <i className="fas fa-heart animate-zoom text-red-500"></i> oleh
						<span className="font-bold text-primary"> Bima Hayu Nugraha</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
