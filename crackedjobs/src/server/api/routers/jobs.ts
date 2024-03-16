import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  // protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { responseValidator } from "~/utils/validators/job-validator";

export const jobsRouter = createTRPCRouter({
  getHello: publicProcedure
    .query(() => 'hello testing'),
    
  getJobs: publicProcedure
    .query(async () => {
      try{
        const jobRes = await fetch ("https://api.crackeddevs.com/v1/get-jobs",
          {
            headers: {
              'api-key': "b88335d0-6ee7-444d-9436-975a9ef6919b"
            }
          }
        )
      

      if(!jobRes.ok) {
        throw new TRPCError({code: 'NOT_FOUND'})
      }

      const validated = responseValidator.parse(jobRes.json())
      console.log(validated)
      return validated
      } catch (error) {
        throw new TRPCError({code: "INTERNAL_SERVER_ERROR"})
      }
    })
})

  
  // getJobs: publicProcedure.output(() => {

  //     return 'hello'
  //   }
  // ),
    // const jobRes = await fetch(
    //   "https://api.crackeddevs.com/v1/get-jobs",
    //   {
    //     headers: {
    //       'api-key': "b88335d0-6ee7-444d-9436-975a9ef6919b", 
    //     }
    //   }
    // )
    // if(!jobRes.ok) {
    //   throw new TRPCError({code: 'NOT_FOUND'})
    // }

    // const validated = responseValidator.parse(jobRes.json())
    // return validated;

    

  

