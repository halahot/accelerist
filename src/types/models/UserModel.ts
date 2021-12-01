export interface UserModel {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isAuthorized: boolean;
    imported: boolean;
    teamId: string;
    role: string;
    isReceivingNotifications: boolean;
}