import { User } from './user';

export class LoginResult<T> {
    code: number;
    msg: string;
    record?: User;
}