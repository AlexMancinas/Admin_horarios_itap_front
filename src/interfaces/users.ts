export interface IUser{
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol: 'admin' | 'user';
}

export const UserTest: IUser = {
    nombre:'Alex',
    apellido: 'Mancinas',
    email: 'test@test.com',
    password: '1234',
    rol: 'admin'
}