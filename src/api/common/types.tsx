export interface AppResponse<T> {
    content?: T[];
    message: string;
}