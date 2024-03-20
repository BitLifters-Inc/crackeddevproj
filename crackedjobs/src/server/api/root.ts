import { postRouter } from "~/server/api/routers/post";
import { jobsRouter } from "~/server/api/routers/jobs";
import { createCallerFactory, createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  // protectedProcedure,
} from "~/server/api/trpc";
import { responseValidator } from "~/utils/validators/job-validator";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  // post: postRouter,
  jobs: jobsRouter,
  
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
