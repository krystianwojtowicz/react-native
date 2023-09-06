import { Text, View } from 'react-native'
import { useGetAllProductsQuery } from '../store/apiSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export const Movies = () => {
    const { data } = useGetAllProductsQuery({});
    console.log(data)
    const API_KEY = "56ddfbeb9230b5239162133b477b8b62"
    const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmRkZmJlYjkyMzBiNTIzOTE2MjEzM2I0NzdiOGI2MiIsInN1YiI6IjY0ZWFmMjAwYzNjODkxMDBjNjgzN2ZkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4d5pCCHGcwR_7arIqoD9AaFplENGtwYJ4GV2ZkHpsf8"
    const BASE_URL = 'https://api.themoviedb.org/3/'

    // useEffect(() => {
    //     // Pobranie listy filmów z API
    //     fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             // Losowanie indeksu filmu
    //             // const randomIndex = Math.floor(Math.random() * data.results.length);
    //             console.log(data.results[0]);
    //         })
    //         .catch(error => {
    //             console.error('Wystąpił błąd:', error);
    //         });
    // }, []);

    // return (<>{movie.loading && <Text>s</Text>}</>)
    return (<><Text>s</Text></>)
}