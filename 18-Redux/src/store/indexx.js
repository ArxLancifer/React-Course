import { createStore } from 'redux';


function counterReducer(state = {counter: 0 } , action){
    
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1,
        }
    }else if (action.type === 'decrement'){
        return {
            counter: state.counter - 1,
        }
    }
    return state;
}

const store = createStore(counterReducer);

function counterSubscriber(){
    console.log(store.getState());
}

store.subsctibe(counterSubscriber);


export default store;