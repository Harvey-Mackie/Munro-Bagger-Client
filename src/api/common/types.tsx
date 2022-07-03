export interface AppResponseCollection<T> {
    content?: T[];
    message: string;
}

export interface AppResponse<T> {
    content?: T;
    message: string;
}