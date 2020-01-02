export const increment = (data) => (
    { 
        type: 'INCREMENT',
        data: data
    })


export const decrement = ()=>({
        type: 'DECREMENT'
})

export const addTodo = (data)=>({
    type: 'ADD_TODO',
    data: data
})