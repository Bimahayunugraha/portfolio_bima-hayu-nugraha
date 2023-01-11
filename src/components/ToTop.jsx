import React, { useEffect, useState } from "react";

const ToTop = () => {
	const [scroll, setScroll] = useState(false);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleScrollVisibility = () => {
		if (window.scrollY > 200) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScrollVisibility);

		return () => {
			window.removeEventListener("scroll", handleScrollVisibility);
		};
	});
	return (
		<div>
			<button
				onClick={handleScrollToTop}
				className={
					scroll
						? "visible fixed right-4 bottom-4 z-[99999] flex h-10 w-10 items-center justify-center rounded-lg border-0 bg-primary opacity-[1] transition-all duration-300 hover:bg-teal-600 hover:text-gray-100"
						: "fixed right-4 bottom-4 z-[99999] hidden h-10 w-10 items-center justify-center rounded-lg border-0 bg-primary opacity-0 transition-all duration-300 hover:bg-teal-600 hover:text-gray-100"
				}>
				<i className="fas fa-arrow-up text-gray-50"></i>
			</button>
		</div>
	);
};

export default ToTop;
