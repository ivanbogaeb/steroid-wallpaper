import { weatherCurrentInterface, weatherForecastInterface, weatherInterface, weatherTodayInterface } from "../../interfaces/cache/weatherCacheInterface";

export const weatherCurrentCache:weatherCurrentInterface = {
    icon: 0,
    text: "",
    humidity: 0,
    isDayTime: false,
    cloud: {
        coverage: 0,
        ceiling: {
            metric: {
                value: 0,
                unit: "m",
            },
            imperial: {
                value: 0,
                unit: "ft",
            },
        }
    },
    precipitation: {
        has: false,
        type: "",
        measure: {
            metric: {
                value: 0,
                unit: "mm",
            },
            imperial: {
                value: 0,
                unit: "in",
            },
        },
        summary: {
            pastHour: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in",
                },
            },
            past3Hours: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in",
                },
            },
            past6Hours: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in",
                },
            },
            past12Hours: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in",
                },
            },
            past18Hours: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in",
                },
            },
            past24Hours: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in",
                },
            },
        },
    },
    temperature: {
        text: "",
        measure: {
            metric: {
                value: 0,
                unit: "°C",
            },
            imperial: {
                value: 0,
                unit: "°F",
            },
        },
        feel: {
            metric: {
                value: 0,
                unit: "°C",
            },
            imperial: {
                value: 0,
                unit: "°F",
            },
        },
    },
    wind: {
        direction: {
            value: 0,
            cardinal: "",
            unit: {
                name: "Deg",
                unit: "°",
            },
        },
        speed: {
            metric: {
                value: 0,
                unit: "km/h",
            },
            imperial: {
                value: 0,
                unit: "mi/h",
            },
        },
    },
    uv: {
        index: 0,
        text: "",
    },
    visibility: {
        metric: {
            value: 0,
            unit: "km",
        },
        imperial: {
            value: 0,
            unit: "mi",
        },
    },
    pressure: {
        metric: {
            value: 0,
            unit: "mb",
        },
        imperial: {
            value: 0,
            unit: "inHg",
        },
    },
    lastRequest: 0,
}

export const weatherTodayCache:weatherTodayInterface = {
    sun: {
        rise: 0,
        set: 0,
        hours: 0,
    },
    moon: {
        rise: 0,
        set: 0,
        phase: 0,
        age: 0,
    },
    temperature: {
        text: {
            minimum: "",
            maximum: "",
        },
        measure: {
            minimum: {
                metric: {
                    value: 0,
                    unit: "°C",
                },
                imperial: {
                    value: 0,
                    unit: "°F",
                },
            },
            maximum: {
                metric: {
                    value: 0,
                    unit: "°C",
                },
                imperial: {
                    value: 0,
                    unit: "°F",
                },
            },
        },
        feel: {
            minimum: {
                metric: {
                    value: 0,
                    unit: "°C",
                },
                imperial: {
                    value: 0,
                    unit: "°F",
                },
            },
            maximum: {
                metric: {
                    value: 0,
                    unit: "°C",
                },
                imperial: {
                    value: 0,
                    unit: "°F",
                },
            },
        },
        summary: {
            heating: {
                metric: {
                    value: 0,
                    unit: "°C",
                },
                imperial: {
                    value: 0,
                    unit: "°F",
                },
            },
            cooling: {
                metric: {
                    value: 0,
                    unit: "°C",
                },
                imperial: {
                    value: 0,
                    unit: "°F",
                },
            }
        },
    },
    air: {
        quality: {
            category: "",
            type: "",
            value: 0,

        },
        grass: {
            category: "",
            value: 0,
        },
        mold: {
            category: "",
            value: 0,
        },
        ragweed: {
            category: "",
            value: 0,
        },
        tree: {
            category: "",
            value: 0,
        },
    },
    uv: {
        category: "",
        value: 0,
    },
    day: {
        icon: 0,
        text: {
            tiny: "",
            short: "",
            long: "",
        },
        probabilities: {
            precipitation: 0,
            thunderstorm: 0,
            rain: 0,
            snow: 0,
            ice: 0,
        },
        wind: {
            speed: {
                metric: {
                    value: 0,
                    unit: "km/h",
                },
                imperial: {
                    value: 0,
                    unit: "mi/h",
                },
            },
            direction: {
                value: 0,
                cardinal: "",
                unit: {
                    name: "Deg",
                    unit: "°",
                },
            },
        },
        amount: {
            rain: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in",
                },
                hours: 0,
            }, 
            snow: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in",
                },
                hours: 0,
            },
            ice: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in",
                },
                hours: 0
            },
            total: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in",
                },
                hours: 0,
            },
        },
        light: {
            cloudCover: 0,
            solarIrradiance: {
                value: 0,
                unit: "W/m²",
            },
            evapotranspiration: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in"
                },
            },
        },
    },
    night: {
        icon: 0,
        text: {
            tiny: "",
            short: "",
            long: "",
        },
        probabilities: {
            precipitation: 0,
            thunderstorm: 0,
            rain: 0,
            snow: 0,
            ice: 0,
        },
        wind: {
            speed: {
                metric: {
                    value: 0,
                    unit: "km/h",
                },
                imperial: {
                    value: 0,
                    unit: "mi/h",
                },
            },
            direction: {
                value: 0,
                cardinal: "",
                unit: {
                    name: "Deg",
                    unit: "°",
                },
            }
        },
        amount: {
            rain: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in",
                },
                hours: 0,
            }, 
            snow: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in",
                },
                hours: 0,
            },
            ice: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in",
                },
                hours: 0
            },
            total: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in",
                },
                hours: 0,
            },
        },
        light: {
            cloudCover: 0,
            solarIrradiance: {
                value: 0,
                unit: "W/m²",
            },
            evapotranspiration: {
                metric: {
                    value: 0,
                    unit: "mm",
                },
                imperial: {
                    value: 0,
                    unit: "in"
                }
            },
        },
    },
}

export const weatherForecastCache:weatherForecastInterface = {
    headline: {
        text: "",
        type: "",
        severity: 0,
    },
    days: new Array(weatherTodayCache),
    lastRequest: 0,
}


export const weather:weatherInterface = {
    current: weatherCurrentCache,
    today: weatherTodayCache,
    forecast: weatherForecastCache,
    location: "",
    city: {
        name: "",
        state: "",
        country: "",
        region: "",
        latitude: 0,
        longitude: 0,
        timezone: 0,
        key: "",
    },
    apiKey: "",
};

