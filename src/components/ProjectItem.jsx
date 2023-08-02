import React from "react";

const ProjectItem = ({ data }) => {
  const { title, category, image, linkGithub, linkPreviewWebsite, technology, description } = data;
  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-20 bg-white shadow-3 hover:shadow-4">
      <div className="relative overflow-hidden rounded-t-20 pb-52">
        <img
          className="absolute inset-0 h-full w-full rounded-t-20 object-cover object-center transition duration-300 ease-in-out hover:scale-105"
          src={image}
          alt="project-image"
          loading="lazy"
        />
      </div>

      <div className="h-full p-5">
        <div className="mb-2 flex items-center">
          <div className="min-w-0 flex-1">
            <p className="text-base font-semibold text-neutral-100-2">{title}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center space-x-4">
          <div className="mb-4 flex items-center space-x-2">
            <div className="inline-flex flex-shrink-0 items-center justify-center">
              <i className="fa-solid fa-tag text-xs text-primary"></i>
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium tracking-tight text-neutral-100-2">{category}</p>
            </div>
          </div>
          <div className="mb-4 flex items-center space-x-2">
            <div className="inline-flex flex-shrink-0 items-center justify-center">
              <i className="fa-brands fa-github text-xs text-primary"></i>
            </div>
            <div className="flex-1">
              <a
                className="text-xs font-medium tracking-tight text-neutral-100-2 hover:text-blue-600"
                href={linkGithub}
                target="_blank"
                rel="noreferrer">
                Github
              </a>
            </div>
          </div>
          {linkPreviewWebsite !== "" && (
            <div className="mb-4 flex items-center space-x-2">
              <div className="inline-flex flex-shrink-0 items-center justify-center">
                <i className="fa-solid fa-link text-xs text-primary"></i>
              </div>
              <div className="flex-1">
                <a
                  className="text-xs font-medium tracking-tight text-neutral-100-2 hover:text-blue-600"
                  href={linkPreviewWebsite}
                  target="_blank"
                  rel="noreferrer">
                  Preview
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-normal text-neutral-80">{description}</p>
        </div>
      </div>
      <div className="w-full border-t border-neutral-100 px-6 py-3">
        <div className="mb-4 flex items-center space-x-2">
          <div className="inline-flex flex-shrink-0 items-center justify-center">
            <i className="fa-solid fa-gear text-xs text-primary"></i>
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium tracking-tight text-neutral-100-2">{technology}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
