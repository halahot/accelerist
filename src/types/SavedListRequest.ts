import { SavedList } from "./SavedList";

export interface SavedListRequest {
    token: string | null;
    data?: SavedList;
}