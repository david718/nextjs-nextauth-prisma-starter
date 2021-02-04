export type LoginUser = {
    email: string;
    password: string;
};

export interface FormUser extends LoginUser {
    name: string;
    cellId: number;
}

export interface User extends FormUser {
    id: number;
    type: string;
    createdAt: string;
    joinCellId: number | null;
}
