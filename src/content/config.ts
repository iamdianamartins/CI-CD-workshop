// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const articlesCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		author: z.string(),
		date: z.string(),
	}),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
	articles: articlesCollection,
};
