<template>
    <div class="weather-tile" v-if="weatherLoaded">
        <span class="weather-container">
            <span class="top-row">
                <span class="weather-desc">
                    <span class="temp">{{`${temp}&#176;F `}}</span>
                    <i :class="weatherIconClass"></i>
                </span>
            </span>
            <span class="bottom-row condition">{{` ${condition} `}}</span>
        </span>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import axios from "axios";
    import {weatherData} from "./weatherData";

    interface Data {
        currently?: {
            temperature: number;
            icon: string;
        };
        daily?: {
            summary: string;
            data: any[];
        }
    }

    @Component({})
    export default class Weather extends Vue {
        weatherConditions = {
            'clear-day': ['wi-day-sunny', 'under clear skies'],
            'clear-night': ['wi-night-clear', 'under starry skies'],
            'rain': ['wi-rain', 'with rain'],
            'snow': ['wi-snow', 'with snow'],
            'sleet': ['wi-sleet', 'with sleet'],
            'wind': ['wi-strong-wind', 'with windy conditions'],
            'fog': ['wi-fog', 'with foggy conditions'],
            'cloudy': ['wi-cloudy', 'under cloudy skies'],
            'partly-cloudy-day': ['wi-day-sunny-overcast', 'under partly cloudy skies'],
            'partly-cloudy-night': ['wi-night-alt-partly-cloudy', 'under partly cloudy skies']
        };
        location = ['29.427839', '-98.494636'];
        weatherLoaded = false;
        weatherData = weatherData;
        temp: number = 0;
        condition: string = 'none';
        summary: string = 'summ';
        forecastArr: string[] = ['fore'];
        weatherIconClass = ['wi', ''];

        mounted() {
            console.log('mounted');
            this.onSuccess(this.weatherData);
        }

        getWeatherCall(): void {
            const url = 'http://localhost:8081/api/weather';
            axios.get<Data>(url).then((res) => {
                console.log('success');
                this.onSuccess(res.data);
            }).catch(err => {
                console.log(err);
            })
        }

        onSuccess(data: Data) {
            this.weatherLoaded = true;
            this.temp = Math.round(data.currently.temperature);
            this.weatherIconClass[1] = this.setWeatherIcon(data.currently.icon);
            this.condition = this.setCondition(data.currently.icon);
            this.summary = data.daily.summary;
            this.forecastArr = data.daily.data;
        }

        setWeatherIcon(icon: string) {
            console.log(this.weatherConditions[icon]);
            return this.weatherConditions[icon][0];
        }

        setCondition(icon: string) {
            return this.weatherConditions[icon][1];
        }
    }
</script>

<style>
    @import url('../assets/weather-icons/css/weather-icons.min.css');
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300');

    .weather-container {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
    }
    .weather-tile {
        font-family: 'Montserrat', sans-serif;
    }

    .weather-desc {
        color: rgba(255, 255, 255, 0.66);
    }

    .condition {
        font-size: 0.5em;
        color: rgba(255, 255, 255, 0.66);
    }
    .wi {
        color: rgba(255, 255, 255, 0.81);
    }
</style>
