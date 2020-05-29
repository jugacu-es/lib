export interface FilteredResponse<T> {
    content: T;
    length: number;
    limit: number;
}