import { getAllBlogPosts, getBlogPost } from "@/lib/blog-server";
import type { BlogPost, BlogPostSummary } from "@/types/blog";

const FALLBACK_IMAGE = "/blog-1-1.png";

const seededMetric = (slug: string, base: number, variance: number) => {
	const seed = slug.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
	return base + (seed % variance);
};

export async function getBlogPostsData(): Promise<BlogPostSummary[]> {
	try {
		const posts = await getAllBlogPosts();
		return posts.map((post) => ({
			slug: post.slug,
			title: post.title,
			excerpt: post.description,
			author: post.author,
			publishedAt: post.publishedAt,
			readTime: post.readTime,
			tags: post.keywords,
			image: post.image || FALLBACK_IMAGE,
			views: seededMetric(post.slug, 8000, 25000),
			likes: seededMetric(post.slug, 120, 500)
		}));
	} catch (error) {
		console.error("Error fetching blog posts:", error);
		return [];
	}
}

export async function getBlogPostData(slug: string): Promise<BlogPost | null> {
	try {
		const post = await getBlogPost(slug);
		return post ?? null;
	} catch (error) {
		console.error("Error fetching blog post:", error);
		return null;
	}
}
