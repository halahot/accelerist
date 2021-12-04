export interface FilterData {
    limit: number;
    page: number;
    q?: string;
    location?: string
    revenueMin?: number;
    revenueMax?: number;
    totalAnnualContributors?: number;
    industry?: string;
    gender?: string;
    ageRanges?: string[];
    sdgGoals?: string[];
    income?: string[];
    ethnicities?: string[];
    csrFocusIds?: string[];
}