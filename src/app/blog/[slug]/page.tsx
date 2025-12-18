import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostData, getBlogPostsData } from "@/lib/blog-data";
import BlogArticle from "@/components/blog/blog-article";

type PageProps = {
	params: { slug: string };
};

export async function generateStaticParams() {
	const posts = await getBlogPostsData();
	return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const post = await getBlogPostData(params.slug);
	if (!post) {
		return {
			title: "Process Zero Blog",
			description: "Insights on AI, automation, and product engineering."
		};
	}

	return {
		title: `${post.title} | Process Zero Blog`,
		description: post.description,
		keywords: post.keywords
	};
}

export default async function BlogArticlePage({ params }: PageProps) {
	const post = await getBlogPostData(params.slug);

	if (!post) {
		notFound();
	}

	return <BlogArticle initialPost={post} />;
}
