import { z } from 'zod'

export const jobValidator = z.object({
  id: z.number(),
  apply_url: z.string().url().optional(),
  title: z.string(),
  description: z.string(),
  company: z.string(),
  logo_url: z.string().url(),
  skill_level: z.enum(["junior", "mid", "senior"]),
  job_type: z.enum(["full_time", "part_time", "contract"]),
  technologies: z.array(z.string()),
  main_technology: z.string(),
  is_degree_required: z.boolean(),
  location_iso: z.string().nullable(),
  original_listing_source: z.string(),
  min_payment_usd: z.number().nullable(),
  max_payment_usd: z.number().nullable(),
  payment_type: z.enum(["salary", "hourly"]),
  created_at: z.string(), // Assuming ISO 8601 format
  deadline: z.string().nullable(), // Assuming ISO 8601 format
  applications: z.number(),
  views: z.number(),
})

export type TJob = z.infer<typeof jobValidator>

export const responseValidator = z.array(jobValidator)