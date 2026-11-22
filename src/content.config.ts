import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One sentence: what it is and what came out of it. */
      summary: z.string(),
      year: z.number(),
      role: z.string(),
      tools: z.array(z.string()),
      /** e.g. 影像 / 3D 动画 / 交互 / UX */
      type: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Lower number = shown first on the home page. */
      /** A runnable piece under public/ (p5 sketch or web demo), shown behind a "run" button. */
      demo: z
        .object({
          src: z.string(),
          label: z.string().default('运行作品'),
          ratio: z.string().default('4 / 3'),
        })
        .optional(),
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
