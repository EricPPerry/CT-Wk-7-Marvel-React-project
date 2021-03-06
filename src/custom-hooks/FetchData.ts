import React, {useState, useEffect} from 'react';
import {server_calls} from '../api';

export const useGetData = () => {
    const [heroData, setData] = useState<any>([]);

    const handleDataFetch = async() =>{
        const result = await server_calls.get()
        setData(result)
    }

    //Introducing the useEffect Hook to add our data call to react State
    useEffect( () => {
        handleDataFetch();
    }, []) //[] sets an empty dependency list, so it doesn't get called over and over

    return {heroData,getData:handleDataFetch}
}