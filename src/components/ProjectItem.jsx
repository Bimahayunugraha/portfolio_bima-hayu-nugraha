import React from "react";

const ProjectItem = ({ data }) => {
	const { title, category, image, link, description } = data;
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className="h-full rounded-20 bg-white shadow-3 hover:shadow-4">
			<div className="relative overflow-hidden rounded-t-20 pb-52">
				<img
					className="absolute inset-0 h-full w-full rounded-t-20 object-cover object-center transition duration-300 ease-in-out hover:scale-105"
					src={image}
					alt="project-image"
					loading="lazy"
				/>
			</div>

			<div className="p-5">
				<div className="mb-2 flex items-center">
					<div className="min-w-0 flex-1">
						<p className="text-base font-semibold text-neutral-100-2">{title}</p>
					</div>
				</div>
				<div className="mb-4 flex items-center space-x-3 text-sm">
					<div className="inline-flex flex-shrink-0 items-center justify-center">
						<span className="text-primary">
							<i className="fas fa-tag"></i>
						</span>
					</div>
					<div className="flex-1">
						<p className="font-medium tracking-tight text-neutral-100-2">{category}</p>
					</div>
				</div>
				<div className="min-w-0 flex-1">
					<p className="text-sm font-normal text-neutral-80">{description}</p>
				</div>
			</div>
		</a>
	);
};

export default ProjectItem;
