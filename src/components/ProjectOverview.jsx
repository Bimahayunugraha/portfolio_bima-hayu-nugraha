import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProjectItem from "./ProjectItem";

const ProjectOverview = () => {
	const [currentPage] = useState(1);
	const [dataPerPage] = useState(6);

	const projectsData = useSelector((state) => state.project);
	const indexOfLastData = currentPage * dataPerPage;
	const indexOfFirstData = indexOfLastData - dataPerPage;
	const currentData = projectsData.slice(indexOfFirstData, indexOfLastData);

	return (
		<div className="bg-slate-100 pt-36 pb-16">
			<div className="container">
				<div className="w-full px-4">
					<div className="mx-auto mb-16 max-w-xl text-center">
						<h4 className="mb-2 text-lg font-bold uppercase text-primary">Project</h4>
						<p className="text-md font-medium text-secondary">
							Beberapa project yang telah saya kerjakan
						</p>
					</div>
					<div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:grid-cols-4">
						{currentData?.map((item) => {
							return <ProjectItem key={item.id} data={item} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectOverview;
