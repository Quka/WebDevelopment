const red = () => ({type: 'RED'});
const yellow = () => ({type: 'YELLOW'});
const green = () => ({type: 'GREEN'});

const colorReducer = (state = "", action) => {
    if(action.type === 'RED') { return "red" }
    if(action.type === 'YELLOW') { return "yellow" }
    if(action.type === 'GREEN') { return "green" }

    return state;
}

const store = Redux.createStore(colorReducer);

function render() {
    console.log(store.getState())
    document.getElementById("container").className = "ui button " + store.getState().toString()
}

store.subscribe(render);