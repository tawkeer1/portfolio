import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ title, description, image, link }) => {
  const shortDescription =
    description.length > 100
      ? description.slice(0, 100).trim() + '…'
      : description;

  return (
    <div className="group relative w-full max-w-sm mx-auto rounded-xl bg-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 max-[380px]:w-70">
      {/* Image container with responsive height */}
      <Link href={link} className="block overflow-hidden">
        <div className="relative h-48 w-full sm:h-60 max-[380px]:h-36 max-[380px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content area with responsive padding */}
      <div className="p-4 sm:p-5 max-[380px]:p-3">
        <Link href={link}>
          <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400 sm:text-xl max-[380px]:text-base max-[380px]:mb-1">
            {title}
          </h3>
        </Link>

        <p className="mb-3 text-xs text-gray-600 dark:text-gray-300 line-clamp-3 sm:text-sm sm:mb-4 max-[380px]:text-[0.7rem] max-[380px]:mb-2">
          {shortDescription}
        </p>

        <Link
          href={link}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors max-[380px]:text-xs max-[380px]:gap-1"
        >
          View Project
          <svg
            className="w-4 h-4 max-[380px]:w-3 max-[380px]:h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;