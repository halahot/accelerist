import { UserModel } from ".";
import { FilterData } from "..";

export interface SavedListModel {
    createdAt: string;
    filters: FilterData;
    id: string;
    lastAuthor: UserModel;
    name: string;
    prospectsAvailable: number;
    updateAt: string;
}