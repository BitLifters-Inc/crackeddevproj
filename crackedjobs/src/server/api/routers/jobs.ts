import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { env } from "~/env";

import {
  createTRPCRouter,
  // protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
// import { responseValidator } from "~/utils/validators/job-validator";

export const jobsRouter = createTRPCRouter({
  getHello: publicProcedure
    .query(() => 'hello testing'),
    
  getJobs: publicProcedure
    .query(async () => {
        const jobRes = await fetch("https://api.crackeddevs.com/v1/get-jobs",
          {
            headers: {
              'api-key': env.CRACKED_DEVS_API_KEY
            }
          }
        )
      

        if(!jobRes.ok) {
          throw new TRPCError({code: 'NOT_FOUND'})
        }
        
        // // const validated = responseValidator.parse(jobRes.json())
        // console.log(validated)
        return jobRes.json();
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

    

  

