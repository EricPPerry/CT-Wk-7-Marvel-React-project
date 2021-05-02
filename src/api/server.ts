let token = `8dd435f8fa78975bad4da5a916e3f814281a1bf4047cd9a9`


export const server_calls = {
    get: async () => {
        const response = await fetch(`https://marvel-collection-ep.herokuapp.com/api/characters`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){ // if we do NOT have an okay response, throw an error and console.log it 
            console.log('Failed to fetch data from the server!')
        }

        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://marvel-collection-ep.herokuapp.com/api/characters`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            },
            body: JSON.stringify(data) //the body, or data we're actually sending out
        });
        if(!response.ok){
            console.log('Failed to CREATE new hero data')
        }
        return await response.json()
    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://marvel-collection-ep.herokuapp.com/api/characters/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        console.log(response)
    },

    delete: async (id:string) => {
        const response = await fetch(`https://marvel-collection-ep.herokuapp.com/api/characters/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            }
        })
    }
}