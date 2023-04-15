const initialdata=
{
    name:'Rahul Arora'
}

const InputName =(storeData=initialdata,action)=>{
   if(action.type==='name'){
    return{
        name:action.username
    }
   }
    return storeData;
   
   
}
export default  InputName ;