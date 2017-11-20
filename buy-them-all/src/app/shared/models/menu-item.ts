export interface IMenuItem {
    path: string;
    title?: string;
    icon?: string;
    color?: string;
    api?: string;
    hidden?: boolean;
    noToolbar?: boolean;
    authRequired?: boolean;
}
