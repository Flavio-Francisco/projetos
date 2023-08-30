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
    taskQuery:()=>Promise<void>  ;
    taskQueryUnique:( id:number)=>void;
    taskDeleteUnique:( id:number, user_id:number)=>void;
    taskDrop:( id:number)=>void;
    queryComp:()=>Promise<void> 
    createTask:(name:string)=>Promise<void> 

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
     async function createTask(name:string) {
     
      api.post(`/task/${user.id}`,{
          name:name,
          completed:false,
          user_id:user.id
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
     async function queryComp(){
      await  api.post(`/showCompleted/${user.id}`)
    
      .then (response=>{
        
              setTaskComplet(response.data)
                  
      })
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
              queryComp,
              createTask          
        }}
        >

            {children}
        </AuthContextTask.Provider>
    )

  }