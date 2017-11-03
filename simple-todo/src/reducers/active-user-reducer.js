export default function(state=[],action){
    switch(action.type){
        case 'ADD':
        return [
            ...state,
            {
              id: action.id,
              text:  action.payload
            }
          ]
          break;
          case 'DELETE':
          return state.filter(input =>
            input.id !== action.payload
          )
          break;
    }
    return state
}

