import fs from "fs";
import path from "path";
import type { BlogPost } from "@/types/blog";

export interface BlogPostFrontmatter {
	title: string;
	description: string;
	keywords: string[];
}

// Function to parse frontmatter from markdown
function parseFrontmatter(content: string): { frontmatter: BlogPostFrontmatter; content: string } {
	const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
	const match = content.match(frontmatterRegex);
	
	if (!match) {
		return { frontmatter: { title: '', description: '', keywords: [] }, content };
	}

	const frontmatterText = match[1];
	const markdownContent = match[2];

	// Parse YAML-like frontmatter
	const frontmatter: BlogPostFrontmatter = {
		title: '',
		description: '',
		keywords: []
	};

	frontmatterText.split('\n').forEach(line => {
		const colonIndex = line.indexOf(':');
		if (colonIndex > 0) {
			const key = line.substring(0, colonIndex).trim();
			let value = line.substring(colonIndex + 1).trim();
			
			// Remove quotes if present
			if (value.startsWith('"') && value.endsWith('"')) {
				value = value.slice(1, -1);
			}
			
			switch (key) {
				case 'title':
					frontmatter.title = value;
					break;
				case 'description':
					frontmatter.description = value;
					break;
				case 'keywords':
					// Parse array format ["item1", "item2"]
					const arrayMatch = value.match(/\[(.*?)\]/);
					if (arrayMatch) {
						frontmatter.keywords = arrayMatch[1].split(',').map(item => 
							item.trim().replace(/"/g, '')
						);
					}
					break;
			}
		}
	});

	return { frontmatter, content: markdownContent };
}

function normalizeImagePath(src: string | undefined): string | undefined {
	if (!src) return undefined;
	let normalized = src.trim();
	if (normalized.startsWith("../public")) {
		normalized = normalized.replace("../public", "");
	}
	if (!normalized.startsWith("/")) {
		normalized = `/${normalized}`;
	}
	return normalized;
}

// Function to extract first image from markdown content
function extractFirstImage(content: string): string | undefined {
	const htmlRegex = /<image\s+src="([^"]+)"\s+alt="([^"]*)"\s*\/>/;
	const markdownRegex = /!\[[^\]]*]\(([^)]+)\)/;

	const htmlMatch = content.match(htmlRegex);
	if (htmlMatch) {
		return normalizeImagePath(htmlMatch[1]);
	}

	const markdownMatch = content.match(markdownRegex);
	if (markdownMatch) {
		return normalizeImagePath(markdownMatch[1]);
	}

	return undefined;
}

// Function to calculate reading time (average 200 words per minute)
function calculateReadTime(content: string): number {
	const wordsPerMinute = 200;
	const words = content.split(/\s+/).length;
	return Math.ceil(words / wordsPerMinute);
}

// Function to convert custom <image> tags to markdown image syntax
function convertCustomImages(content: string): string {
	return content.replace(
		/<image\s+src="([^"]+)"\s+alt="([^"]*)"\s*\/>/g,
		(_, src, alt) => {
			const normalized = normalizeImagePath(src) ?? "";
			return alt ? `![${alt}](${normalized})` : `![](${normalized})`;
		}
	);
}

// Function to get all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
	const markdownDir = path.join(process.cwd(), 'src/markdown');
	
	try {
		const files = fs.readdirSync(markdownDir);
		const posts: BlogPost[] = [];

		for (const file of files) {
			if (file.endsWith('.md')) {
				const filePath = path.join(markdownDir, file);
				const fileContent = fs.readFileSync(filePath, 'utf-8');
				const { frontmatter, content } = parseFrontmatter(fileContent);
				
				const slug = file.replace('.md', '');
				const processedContent = convertCustomImages(content);
				const image =
					extractFirstImage(content) ??
					extractFirstImage(processedContent);
				const readTime = calculateReadTime(processedContent);

				const author = {
					name: "Process Zero Team",
					avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
					bio: "AI Strategy Consultants and Technology Experts"
				};

				posts.push({
					slug,
					...frontmatter,
					content: processedContent,
					image,
					publishedAt: new Date().toLocaleDateString('en-US', { 
						year: 'numeric', 
						month: 'short', 
						day: 'numeric' 
					}),
					readTime,
					author
				});
			}
		}

		// Sort by published date (newest first)
		return posts.sort((a, b) => b.slug.localeCompare(a.slug));
	} catch (error) {
		console.error('Error reading blog posts:', error);
		return [];
	}
}

// Function to get a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
	const posts = await getAllBlogPosts();
	return posts.find(post => post.slug === slug) || null;
}

// Function to get blog posts by category/keyword
export async function getBlogPostsByKeyword(keyword: string): Promise<BlogPost[]> {
	const posts = await getAllBlogPosts();
	return posts.filter(post => 
		post.keywords.some(k => k.toLowerCase().includes(keyword.toLowerCase()))
	);
}

// Server action to get all blog posts for client components
export async function getBlogPostsData() {
	try {
		const posts = await getAllBlogPosts();
		return posts;
	} catch (error) {
		console.error('Error fetching blog posts:', error);
		return [];
	}
}

export async function getBlogPostData(slug: string) {
	try {
		const posts = await getAllBlogPosts();
		const post = posts.find(p => p.slug === slug);
		if (!post) return null;

		return {
			id: post.slug,
			title: post.title,
			excerpt: post.description,
			author: post.author,
			publishedAt: post.publishedAt,
			readTime: post.readTime,
			tags: post.keywords,
			image: post.image || '',
			content: post.content
		};
	} catch (error) {
		console.error('Error fetching blog post:', error);
		return null;
	}
}
