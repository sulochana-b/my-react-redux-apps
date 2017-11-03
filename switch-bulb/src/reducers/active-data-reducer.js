const initialState=[
    {
        text:"Switch On",
        image:"https://www.w3schools.com/js/pic_bulboff.gif"
    }
];
export default function(state=initialState,action){
    switch(action.type){
        case 'BTN_CLICK':
            if(action.payload === true){
                return [
                    {
                        text:"Switch Off",
                        image:"https://www.w3schools.com/js/pic_bulbon.gif"
                    }
                  ]
            }
            else{
                return initialState
            }
        default:console.log("default case");
    }
    return state
}