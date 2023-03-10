import axios from 'axios'


const axiosClient = axios.create({
    baseURL: '',
     headers: {
    'X-RapidAPI-Key': '9029337177mshd958f408a1f5ccbp1ab32ejsna60385006512',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  }
})