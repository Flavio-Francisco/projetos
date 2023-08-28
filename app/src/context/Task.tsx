import React from "react";
import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../api/api";
import { AuthContext } from "./Auth";


export interface TaskProps{
  id:string;
  name:string;
  completed:boolean;
  user_id:number;
  
  }



export interface AuthContextDataProps {
    task:TaskProps;
    taskComplet:TaskProps;
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
    const [taskComplet, setTaskComplet] = useState<TaskProps>({} as TaskProps);
     const{user} = useContext(AuthContext); 
 

    async function taskQuery(){
      await api.post(`/show/${user.id}`)
      
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

      if(task.completed==true){
        setTaskComplet(task)
      
     }
     
    return(
        <AuthContextTask.Provider 
        value={{
              task,
              taskComplet,
              taskQuery,
              taskQueryUnique,
              taskDeleteUnique,
              taskDrop ,
                         
        }}
        >

            {children}
        </AuthContextTask.Provider>
    )

  }