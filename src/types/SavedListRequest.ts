import { SavedList } from "./SavedList";
import { UpdateSavedListDto } from "./UpdateSavedListDto";

export interface SavedListRequest {
    token: string | null;
    id?: string;
    data?: SavedList | UpdateSavedListDto;
}