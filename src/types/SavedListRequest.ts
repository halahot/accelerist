import { SavedList } from "./SavedList";

export interface SavedListRequest {
    token: string;
    data?: SavedList;
}