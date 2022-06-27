import Axios  from "axios";
import { AppResponse } from "./types";

export async function getRequest<TResponse>(
  url: string
): Promise<AppResponse<TResponse>>{
  try{
    const response = await Axios.get(url, {
      headers: {
        "Control-Allow-Origin": "*",
         "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
         "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
      }
    });
    const responseData = response.data as AppResponse<TResponse>;
    
    return responseData;
  } 
  catch(error){
    return {
      content: undefined,
      message: "An error has occured" //To-Do - Return message from API.
    } as AppResponse<TResponse>
  }
}