import { Text, View } from 'react-native'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export const Movies = () => {
    const movie = useSelector((state: RootState) => state.userList)
    const API_KEY = "56ddfbeb9230b5239162133b477b8b62"
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
    return (<>{movie.loading && <Text>s</Text>}</>)
}