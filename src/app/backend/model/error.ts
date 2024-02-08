
export class CustomError extends Error{
   
    error:ErrorModel;

    constructor(message:string,error:ErrorModel){
        super(message);
        this.error=error;
    }
   
    
}


export  interface ErrorModel {
    type:string,
    title:string,
    status:number,
    detail:string,
    instace:string,
    additionalProperty:string
}