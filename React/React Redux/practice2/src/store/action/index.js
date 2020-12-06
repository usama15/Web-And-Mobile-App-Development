export const set_data = (data)=>{
    return (dispatch)=>{
        dispatch({
            type : "SETDATA",
            data,
        })
    }
}