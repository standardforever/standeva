export interface BlogPostAuthor {
	name: string;
	avatar: string;
	bio: string;
}

export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	keywords: string[];
	content: string;
	image?: string;
	publishedAt: string;
	readTime: number;
	author: BlogPostAuthor;
}

export interface BlogPostSummary {
	slug: string;
	title: string;
	excerpt: string;
	author: BlogPostAuthor;
	publishedAt: string;
	readTime: number;
	tags: string[];
	image: string;
}
