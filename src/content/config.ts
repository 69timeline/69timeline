import { z, defineCollection, reference } from 'astro:content';

const actorsCollection = defineCollection({
  type: "data",
  schema: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
});

const eventsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    date: z.date(),
    end: z.date().optional(),
    actors: z.array(z.object({
      actor: reference("actors"),
    })),
  }),
});

export const collections = {
  "events": eventsCollection,
  "actors": actorsCollection,
};
