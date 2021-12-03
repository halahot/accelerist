import { FilterData } from "./FilterData";

export interface FilterPayload {
    token: string | null;
    params?: FilterData;
}