export interface weatherInterface {
    current: {
        icon: number,
        text: string,
        humidity: number,
        isDayTime: boolean,
        cloud: {
            coverage: number,
            ceiling: {
                metric: {
                    value: number,
                    unit: string,
                },
                imperial: {
                    value: number,
                    unit: string,
                },
            }
        },
        precipitation: {
            has: boolean,
            type: string,
            measure: {
                metric: {
                    value: number,
                    unit: string,
                },
                imperial: {
                    value: number,
                    unit: string,
                },
            },
            summary: {
                pastHour: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                },
                past3Hours: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                },
                past6Hours: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                },
                past12Hours: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                },
                past18Hours: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                },
                past24Hours: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                },
            },
        },
        temperature: {
            text: "",
            measure: {
                metric: {
                    value: number,
                    unit: string,
                },
                imperial: {
                    value: number,
                    unit: string,
                },
            },
            feel: {
                metric: {
                    value: number,
                    unit: string,
                },
                imperial: {
                    value: number,
                    unit: string,
                },
            },
        },
        wind: {
            direction: {
                value: number,
                cardinal: string,
                unit: {
                    name: string,
                    unit: string,
                },
            },
            speed: {
                metric: {
                    value: number,
                    unit: string,
                },
                imperial: {
                    value: number,
                    unit: string,
                },
            },
        },
        uv: {
            index: number,
            text: string,
        },
        visibility: {
            metric: {
                value: number,
                unit: string,
            },
            imperial: {
                value: number,
                unit: string,
            },
        },
        pressure: {
            metric: {
                value: number,
                unit: string,
            },
            imperial: {
                value: number,
                unit: string,
            },
        },
        lastRequest: number,
    },
    today: {
        sun: {
            rise: number,
            set: number,
            hours: number,
        },
        moon: {
            rise: number,
            set: number,
            phase: number,
            age: number,
        },
        temperature: {
            text: {
                minimum: string,
                maximum: string,
            },
            measure: {
                minimum: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                },
                maximum: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                },
            },
            feel: {
                minimum: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                },
                maximum: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                },
            },
            summary: {
                heating: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                },
                cooling: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                }
            },
        },
        air: {
            quality: {
                category: string,
                type: string,
                value: number,

            },
            grass: {
                category: string,
                value: number,
            },
            mold: {
                category: string,
                value: number,
            },
            ragweed: {
                category: string,
                value: number,
            },
            tree: {
                category: string,
                value: number,
            },
        },
        uv: {
            category: string,
            value: number,
        },
        day: {
            icon: number,
            text: {
                tiny: string,
                short: string,
                long: string,
            },
            probabilities: {
                precipitation: number,
                thunderstorm: number,
                rain: number,
                snow: number,
                ice: number,
            },
            wind: {
                speed: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                },
                direction: {
                    value: number,
                    cardinal: string,
                    unit: {
                        name: string,
                        unit: string,
                    },
                },
            },
            amount: {
                rain: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                    hours: number,
                }, 
                snow: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                    hours: number,
                },
                ice: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                    hours: number,
                },
                total: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                    hours: number,
                },
            },
            light: {
                cloudCover: number,
                solarIrradiance: {
                    value: number,
                        unit: string,
                },
                evapotranspiration: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                },
            },
        },
        night: {
            icon: number,
            text: {
                tiny: string,
                short: string,
                long: string,
            },
            probabilities: {
                precipitation: number,
                thunderstorm: number,
                rain: number,
                snow: number,
                ice: number,
            },
            wind: {
                speed: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                },
                direction: {
                    value: number,
                    cardinal: string,
                    unit: {
                        name: string,
                        unit: string,
                    },
                }
            },
            amount: {
                rain: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                    hours: number,
                }, 
                snow: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                    hours: number,
                },
                ice: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                    hours: number,
                },
                total: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    },
                    hours: number,
                },
            },
            light: {
                cloudCover: number,
                solarIrradiance: {
                    value: number,
                        unit: string,
                },
                evapotranspiration: {
                    metric: {
                        value: number,
                        unit: string,
                    },
                    imperial: {
                        value: number,
                        unit: string,
                    }
                },
            },
        },
    },
    forecast: {
        headline: {
            text: string,
            type: string,
            severity: number,
        },
        days: Array<4>,
        lastRequest: number,
    },
    location: string,
    city: {
        name: string,
        state: string,
        country: string,
        region: string,
        latitude: number,
        longitude: number,
        timezone: number,
        key: string,
    },
    apiKey: string,
};