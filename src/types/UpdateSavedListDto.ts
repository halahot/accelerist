import { FilterData } from ".";

export interface UpdateSavedListDto {
    prospectsAvailable?: number;
    filters?: FilterData;
    name?: string;
}
