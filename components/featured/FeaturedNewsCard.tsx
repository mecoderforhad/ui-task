"use client"

import React from "react"
import Image from "next/image"

interface FeaturedNewsCardProps {
    category: string
    title: string
    excerpt: string
    author: string
    date: string
    imageUrl: string
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
        <article className="mx-auto w-full max-w-3xl px-4">
            <div className="relative overflow-hidden rounded-xl bg-white shadow-md">
                {/* Image */}
                <div className="relative">
                    <Image
                        height={500}
                        width={500}
                        src={imageUrl}
                        alt={title}
                        className="h-55 w-full object-cover sm:h-70 md:h-80"
                    />

                    {/* Category badge */}
                    <span className="absolute left-4 top-4 z-10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800">
                        {category}
                    </span>
                </div>

                {/* Content (overlapping image) */}
                <div className="relative -mt-16 rounded-t-xl border border-gray-200 bg-white p-5 sm:p-6">
                    <h2 className="mb-3 text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
                        {title}
                    </h2>

                    <div className="mb-4 text-xs text-gray-500">
                        <span className="font-medium text-gray-700">By {author}</span>
                        <span className="mx-2">•</span>
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
    )
}
