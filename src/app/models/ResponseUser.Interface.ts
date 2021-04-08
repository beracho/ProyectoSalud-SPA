import { UserI } from './User.model';

export interface ResponseUserI{
    userToReturn: UserI;
    token: string;
    rolsAssignedToList: [{
        id: number,
        name: string,
        active: boolean
    }];
    message: string;
}
