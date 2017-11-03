let id = 0;
export const addInput = (input) =>{
    console.log("You have added",input);
    return{
        type:"ADD",
        payload:input,
        id :id++
    }
};

export const deleteInput = (input) =>{
    console.log("You have added",input);
    return{
        type:"DELETE",
        payload:input
    }
};