import { UserI } from './User.model';

export interface ResponseI{
    token: string;
    user: UserI;
}
