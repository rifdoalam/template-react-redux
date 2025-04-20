import { handleApiRequest } from "./base/handle-api";

export const exampleApi = ()=>{
    return handleApiRequest(
        'GET',
        '/example',
        null,
        {
            'Content-Type': 'application/json',
        },
  
    )
}