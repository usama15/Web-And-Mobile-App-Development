const INITIAL_DATA={
    id: "ABC001",
    balance:840140
}
export default (store=INITIAL_DATA, action) => {
    console.log("Account Action Data => ",action)
    switch (action.type) {
        case "SETDATA":
            return({
                ...store,
                data : action.data
            })
        default:
            return(store)
    }
    return store;
}
