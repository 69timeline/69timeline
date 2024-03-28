import { z, defineCollection, reference } from 'astro:content';

const actorsCollection = defineCollection({
  type: "data",
  schema: z.object({
    firstName: z.string(),
    lastName: z.string(),
    birthDate: z.date().optional(),

    quickDescription: z.string().optional(),
    wikipediaUrl: z.string().optional(),
  }),
});

const eventsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    date: z.date(),
    end: z.date().optional(),
    actors: z.array(z.object({
      actor: reference("actors"),
      role: z.string().optional(),
    })),
  }),
});

export const collections = {
  "events": eventsCollection,
  "actors": actorsCollection,
};
