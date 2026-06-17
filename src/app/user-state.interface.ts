export interface UserState<T> {
    loading: boolean;                   //interface pra possíveis estados da tela
    data: T | null;
    error: string | null;
}