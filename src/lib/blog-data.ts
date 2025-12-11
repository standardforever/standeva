import { getAllBlogPosts, getBlogPost } from "@/lib/blog-server";
import type { BlogPost, BlogPostSummary } from "@/types/blog";

const FALLBACK_IMAGE = "/blog-1-1.png";

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
