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

  getHello: publicProcedure.query(() => 'hi'),

  getJobs: publicProcedure
    .query(async () => {
      try{
        const jobRes = await fetch ("https://api.crackeddevs.com/v1/get-jobs?limit=10",
          {
            headers: {
              'api-key': 'b88335d0-6ee7-444d-9436-975a9ef6919b'
            }
          }
        )
        
        if(jobRes.ok) {
          const validated = responseValidator.parse(jobRes.json())
          return validated
        } else {
          throw new TRPCError({code: 'NOT_FOUND'})
        }
        
      } catch (error) {
        throw new TRPCError({code: "NOT_FOUND"})
      }
    })
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
