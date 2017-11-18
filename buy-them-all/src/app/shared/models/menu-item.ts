export interface IMenuItem {
    path: string;
    title?: string;
    icon?: string;
    hidden?: boolean;
    noToolbar?: boolean;
    authRequired?: boolean;
}
