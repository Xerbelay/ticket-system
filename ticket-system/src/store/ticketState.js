
export const ticketState = {
    state: {
        tickets: [
            {
                id: 1, 
                summary: 'Vue doesnt work!!!', 
                status: 'DONE', 
                priority: 'HIGH', 
                content: 'Vue doesnt work!!!Vue doesnt work!!!Vue doesnt work!!!', 
                from: 'Max', 
                create_date: '20.12.2024 18:15:23', 
                update_date: '20.12.2024 18:20:24', 
                answ: 'Delete your project, Max'
            },
            {
                id: 2, 
                summary: 'Vue doesnt work!!!', 
                status: 'DONE', 
                priority: 'MED', 
                content: 'Vue doesnt work!!!Vue doesnt work!!!Vue doesnt work!!!', 
                from: 'Max', 
                create_date: '20.12.2024 18:15:23', 
                update_date: '20.12.2024 18:20:24', 
                answ: 'Delete your project, Max'
            },
            {
                id: 3, 
                summary: 'Vue doesnt work!!!', 
                status: 'DONE', 
                priority: 'LOW', 
                content: 'Vue doesnt work!!!Vue doesnt work!!!Vue doesnt work!!!', 
                from: 'Max', 
                create_date: '20.12.2024 18:15:23', 
                update_date: '20.12.2024 18:20:24', 
                answ: 'Delete your project, Max'
            },
            {
                id: 4, 
                summary: 'Vue doesnt work!!!', 
                status: 'DONE', 
                priority: 'LOW', 
                content: 'Vue doesnt work!!!Vue doesnt work!!!Vue doesnt work!!!', 
                from: 'Max', 
                create_date: '20.12.2024 18:15:23', 
                update_date: '20.12.2024 18:20:24', 
                answ: 'Delete your project, Max'
            },
            {
                id: 5, 
                summary: 'Vue doesnt work!!!', 
                status: 'DONE', 
                priority: 'MED', 
                content: 'Vue doesnt work!!!Vue doesnt work!!!Vue doesnt work!!!', 
                from: 'Max', 
                create_date: '20.12.2024 18:15:23', 
                update_date: '20.12.2024 18:20:24', 
                answ: 'Delete your project, Max'
            },
        ]
    },
    mutations: {
        ADD_TICKET(state, payload){
            state.tickets.push(payload)
        },
        DELETE_TICKET(state, payload){
            state.tickets = state.tickets.filter((ticket) => 
            {
                if(ticket.id != payload.id){
                    return ticket
                }
            })
        },
        REPLY_TICKET(state, payload){
            state.tickets.forEach((ticket) => 
            {
                if(ticket.id == payload.id){
                    let date = new Date()

                    let update_date = date.toLocaleString()

                    ticket.answ = payload.answ
                    ticket.status = payload.status
                    ticket.update_date = update_date
                }
            })
        }
    },
}