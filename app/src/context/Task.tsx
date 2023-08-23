import { ReactNode, createContext, useState } from "react";
import { api } from "../api/api";

interface TaskProps{
  id:number;
  name:string;
  completed:string;
  user_id:number;
  
  }



export interface AuthContextDataProps {
    task:TaskProps;
    taskQuery:()=>void;
    taskQueryUnique:( id:number)=>void;
    taskDeleteUnique:( id:number, user_id:number)=>void;
    taskDrop:( id:number)=>void;

  }

  interface AuthContextProviderProps {
    children: ReactNode;
    
  }
  

  export const AuthContext = createContext({} as AuthContextDataProps);


  export function  AuthContextProvider({ children }: AuthContextProviderProps){
    const [task, setTask] = useState<TaskProps>({} as TaskProps);


     async function taskQuery(){
      await api.post('/show/1')
      
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
        <AuthContext.Provider 
        value={{
              task,
              taskQuery,
              taskQueryUnique,
              taskDeleteUnique,
              taskDrop               
        }}
        >

            {children}
        </AuthContext.Provider>
    )

  }