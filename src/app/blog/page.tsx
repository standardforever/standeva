import type { Metadata } from "next";
import { getBlogPostsData } from "@/lib/blog-data";
import BlogListing from "@/components/blog/blog-listing";

export const metadata: Metadata = {
	title: "Process Zero Blog & Insights",
	description:
		"Stay up to date with Process Zero's latest thinking on AI, automation, and building modern engineering teams."
};

export default async function BlogPage() {
	const posts = await getBlogPostsData();
	return <BlogListing initialPosts={posts} showBackButton />;
}
