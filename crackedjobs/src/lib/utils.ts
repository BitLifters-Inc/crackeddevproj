import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type jobType = {
    id: string;
    title: string;
    description: string;
    company: string;
    technologies: string[];
    main_technology: string;
    job_type: string;
    max_payment_usd: number;
    location_iso: string;
    applications: number;
    views: number;
    apply_url: string;
}
