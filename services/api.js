const API_URL = 'https://abmediaback.onrender.com/api'

export const getDestination = async () =>{
    try{
        const response = await fetch(`${API_URL}/destinations`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if(!response.ok){
            throw new Error('failed to getch destinations data')
        }
        return await response.json();
    }
    catch(error){
        console.error('error fetching data'. error)
        throw error;
    }
}


export const getPackages = async () =>{
    try{
        const response = await fetch(`${API_URL}/packages/top-selling`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if(!response.ok){
            throw new Error('failed to get top selling packages  data')
        }
        return await response.json();
    }
    catch(error){
        console.error('error fetching data'. error)
        throw error;
    }
}
