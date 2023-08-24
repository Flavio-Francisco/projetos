import { ReactNode, createContext, useState } from "react";
import { api } from "../api/api";
import { AuthUserData } from "./Auth";

interface TaskProps{
  id:number;
  name:string;
  completed:string;
  user_id:number;
  
  }



export interface AuthContextDataProps {
    task:TaskProps;
    taskQuery:(id:number)=>Promise<void>  ;
    taskQueryUnique:( id:number)=>void;
    taskDeleteUnique:( id:number, user_id:number)=>void;
    taskDrop:( id:number)=>void;

  }

  interface AuthContextProviderProps {
    children: ReactNode;
    
  }
  

  export const AuthContextTask = createContext({} as AuthContextDataProps);


  export function  AuthContextProviderTask({ children }: AuthContextProviderProps){
    const [task, setTask] = useState<TaskProps>({} as TaskProps);


    async function taskQuery(id:number){
      await api.post(`/show/${id}`)
      
        .then (response=>{
         setTask(response.data)
        })
   }
      async function taskQueryUnique(id:number){
        await api.post(`/show/${id}`)
        
          .then (response=>{
            setTask(response.data)
          })
     }
      async function taskDeleteUnique( id:number, user_id:number){
        await api.post(`deletetask/${id}/${user_id}`)
          
        .then (response=>{
         setTask(response.data)
        })

      
     }  
      async function taskDrop( id:number){
        await api.post(`/drop/${id}`)
        
        .then (response=>{
          setTask(response.data)
        })
        
      }
 
    return(
        <AuthContextTask.Provider 
        value={{
              task,
              taskQuery,
              taskQueryUnique,
              taskDeleteUnique,
              taskDrop               
        }}
        >

            {children}
        </AuthContextTask.Provider>
    )

  }