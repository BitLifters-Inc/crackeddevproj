export type jobType = {
    id: number;
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