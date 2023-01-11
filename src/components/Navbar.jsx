import React, { useEffect, useState } from "react";
import icon from "../assets/img/svg/logo.svg";
import { navbarCollections } from "../mocks/navbarCollection";

const Navbar = () => {
	const [navbarToggle, setNavbarToggle] = useState(false);
	const [scroll, setScroll] = useState(false);

	const handleToggle = () => {
		setNavbarToggle(!navbarToggle);
	};

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		});
	});
	return (
		<>
			<header
				className={
					scroll
						? "nav-container active absolute top-0 left-0 z-10 flex w-full items-center bg-transparent transition-all duration-300"
						: "fixed top-0 left-0 z-10 flex w-full items-center bg-transparent transition-all duration-300"
				}>
				<div className="container">
					<div className="relative flex items-center justify-between">
						<div className="px-4">
							<a
								href="#home"
								className="nav-brand flex flex-wrap items-center py-6 text-xl font-bold tracking-tight text-gray-700 lg:ml-0">
								<img src={icon} className="mr-3 h-10 w-10" alt="Logo" />
								Portfolio
							</a>
						</div>
						<div className="flex items-center px-4">
							<button
								id="hamburger"
								name="hamburger"
								type="button"
								className="absolute right-4 block text-white lg:hidden"
								onClick={handleToggle}>
								<i
									className={
										navbarToggle
											? "hidden"
											: "far fa-bars block text-xl text-gray-800 transition duration-300 ease-in-out"
									}></i>
								<i
									className={
										navbarToggle
											? "far fa-times block text-xl text-gray-800 transition duration-300 ease-in-out"
											: "hidden"
									}></i>
							</button>
						</div>
						<div className="flex items-center">
							<nav
								className={
									navbarToggle
										? "absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-xl transition duration-300 ease-in-out lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none"
										: "absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg transition duration-300 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none"
								}>
								<ul className="block lg:flex">
									{navbarCollections.map((item, index) => {
										return (
											<li className="group" key={index}>
												<a
													href={item.path}
													className="nav-links mx-8 flex py-2 text-base font-semibold text-gray-800 group-hover:text-primary"
													onClick={handleToggle}>
													{item.name}
												</a>
											</li>
										);
									})}
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
