import FeaturedNewsCard from "@/components/featured/FeaturedNewsCard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <FeaturedNewsCard
        category="Politics"
        title="‘Election was rigged’ says opposition, police confirm three dead"
        excerpt="When we get out of the glass bottle of our ego and when we escape like the squirrels in the tree..."
        author="John Doe"
        date="February 17, 2020"
        imageUrl="/images/featured.png"
      />
    </div>
  );
}
