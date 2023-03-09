import {defineStore } from 'pinia'
import {Weather} from '../interfaces/weather'

interface weatherState {
    weatherInfo: Weather[],
    message: string 
}


export const weatherStore = defineStore('weather',{
    state:(): weatherState =>({
        weatherInfo: [],
        message: ''
    }),
    actions:{

        getWeatherInfo(weather: Weather[]){
            this.weatherInfo = weather
        },
        clearState(){
            this.weatherInfo = [],
            this.message = ''
        }
    }
})