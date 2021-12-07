import { Params } from './Params';
import { SavedList } from "./SavedList";
import { UpdateSavedListDto } from "./UpdateSavedListDto";

export interface SavedListRequest {
    token: string | null;
    id?: string;
    params?: Params;  
    data?: SavedList | UpdateSavedListDto;
}