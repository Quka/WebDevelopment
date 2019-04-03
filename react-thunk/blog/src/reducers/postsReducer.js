export default (state=[], action) => {
   switch (action.type) {
       case 'FETCH_POSTS': return action.payload;
       default: return state; 
   }
};
   
   
 /*  
Det er bedre at benytte en switch med en defalult case, da den "automatisk" 
håndtere alle mulige udfald af action types, i stedet for en samling if-statements

    if (action.type === 'FETCH_POSTS'){
        return action.payload;
    }
    return state;
};
*/