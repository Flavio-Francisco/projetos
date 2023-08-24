export declare global{
import { CreateCategory } from './../screens/CreateCategory/index';

    namespace ReactNavigation{
        interface RootParamList{
            Login:undefined;
            CreateCategory:{
                modal:boolean
            },
            Home:{
                id?:number;
                name?: string;
                email?:string;
                password?: string;
            }
            Options:undefined;

        }
    }
}