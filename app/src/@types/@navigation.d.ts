export declare global{
import { CreateCategory } from './../screens/CreateCategory/index';

    namespace ReactNavigation{
        interface RootParamList{
            Login:undefined;
            CreateCategory:{
                modal:boolean
            },
            HomeMemu:undefined;
            Options:undefined;

        }
    }
}