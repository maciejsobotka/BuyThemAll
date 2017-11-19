export interface IMenuItem {
    path: string;
    title?: string;
    icon?: string;
    api?: string;
    hidden?: boolean;
    noToolbar?: boolean;
    authRequired?: boolean;
}
