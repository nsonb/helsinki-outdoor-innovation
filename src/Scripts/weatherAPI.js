//const APIkey = '52aef8e7daa5ca4dd4b7b88e3d21d277';
const APIkey = 'f128c241fbabd343dd361e7760d11e90';
export const getWeatherDEVMODE = async () => {
  await console.log(dummyData)
  return dummyData;
}

// api doc for api call: https://openweathermap.org/forecast5
export const getWeather = (cityName) => {
  let apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid='+ APIkey;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
}

export const getWeatherOLD = () => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=52aef8e7daa5ca4dd4b7b88e3d21d277`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
}

export const getWeatherAt = (long, lat) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${APIkey}&units=metric`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((result) => {
      return result;
    })
}

//Let's delete this when the app is ready :D
const dummyData = {
  city: {
    id: 660129, 
    name: "Espoo", 
    coord: {
      lat: 60.25,
      lon: 24.6667
      }, 
    country: "FI", 
    population: 0,
    sunrise: 1605161633,
    sunset: 1605189439,
    timezone: 7200
    },
  cnt: 40,
  cod: "200",
  list: [
    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },
    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },
    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },
    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 12:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 12:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 13:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 12:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 12:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 12:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 12:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    },    {clouds: {all: 87},
    dt: 1605204000,
    dt_txt: "2020-11-12 18:00:00",
    main: {
      feels_like: 274.71,
      grnd_level: 1025,
      humidity: 78,
      pressure: 1027,
      sea_level: 1027,
      temp: 278.38,
      temp_kf: -0.2,
      temp_max: 278.58,
      temp_min: 278.38,
      },
    pop: 0,
    sys: {
      pod: "n"
    },
    visibility: 10000,
    weather: [
      {id: 804, 
      main: "Clouds", 
      description: "overcast clouds", 
      icon: "04n"}
      ],
    wind: {
      deg: 168,
      speed: 2.79
      }
    }
    ],
  message: 0
}
