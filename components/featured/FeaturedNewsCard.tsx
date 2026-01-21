"use client";

import React from "react";
import Image from "next/image";
import { CalendarDays } from "lucide-react";

interface FeaturedNewsCardProps {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
}

export default function FeaturedNewsCard({
  category,
  title,
  excerpt,
  author,
  date,
  imageUrl,
}: FeaturedNewsCardProps) {
  return (
    <article className="relative mx-auto w-full max-w-3xl px-4">
      <div className="overflow-hidden bg-white shadow-md">
        {/* Image */}
        <div>
          <Image
            height={500}
            width={500}
            src={imageUrl}
            alt={title}
            className="h-55 w-full object-cover sm:h-70 md:h-80"
          />

          {/* Category badge */}
        </div>
        <span className="absolute left-10 top-4 z-10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800">
          {category}
        </span>

        {/* Content (overlapping image) */}
        <div className="absolute left-9 top-60 z-40 w-[90%] bg-white sm:p-6">
          <h2 className="mb-3 text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
            {title}
          </h2>

          <div className="mb-4 flex text-xs text-gray-500">
            <span className="font-medium text-gray-700">
              By <b>{author}</b>
            </span>
            <span className="mx-2">
              <CalendarDays size={15} />
            </span>
            <span>{date}</span>
          </div>

          <p className="mb-5 text-sm leading-relaxed text-gray-600 sm:text-base">
            {excerpt}
          </p>

          <button className="inline-flex items-center border border-gray-300 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-gray-700 transition hover:bg-gray-900 hover:text-white">
            Read More
          </button>
        </div>
      </div>
    </article>
  );
}
