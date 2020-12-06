const INITIAL_DATA={
    customerID: "ABC001",
    customerName: "Tehseen Jawed",
    type: "WholeSale Buter",
}
export default (store=INITIAL_DATA, action) => {
    console.log("Customer Action Data => ",action)
    return store
}