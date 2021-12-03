export interface CompanyModel {
    city: string;
    country: string;
    descriptionList: string;
    employeeCount: number;
    employeeEngagementOpportunities: boolean;
    employeeRange: number;
    fax: string;
    id: string;
    like: boolean;
    name: string;
    phone: string;
    primaryIndustry: string[],
    revenue: string;
    revenueRange: string;
    score: number;
    similarCompanies: string[];
    state: string;
    street: string;
    website: string;
    zipCode: string;
}