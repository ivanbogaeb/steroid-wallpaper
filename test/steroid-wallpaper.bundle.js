(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._cache = void 0;
const weather_1 = require("./constants/weather");
const spotify_1 = require("./constants/spotify");
const user_1 = require("./constants/user");
exports._cache = {
    weather: weather_1.weather,
    spotify: spotify_1.spotify,
    user: user_1.user,
};

},{"./constants/spotify":2,"./constants/user":3,"./constants/weather":4}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spotify = void 0;
exports.spotify = {
    accessToken: "",
    refreshToken: "",
    expiresIn: "",
    tokenType: "",
    scope: ""
};

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
exports.user = {
    userId: "",
    wallpaperToken: "",
};

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weather = void 0;
exports.weather = {
    current: {
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
    },
    today: {
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
    },
    forecast: {
        headline: {
            text: "",
            type: "",
            severity: 0,
        },
        days: new Array(4),
        lastRequest: 0,
    },
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

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codes = void 0;
exports.codes = {
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    methodNotAllowed: 405,
    notAcceptable: 406,
    conflict: 409,
    preConditionFailed: 412,
    locked: 423,
    upgradeRequired: 426,
    preConditionRequired: 428,
    tooManyRequests: 429,
    internalServerError: 500,
    notImplemented: 501,
    serviceUnavailable: 503,
    networkAuthRequired: 511,
    networkConTimeout: 599
};

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
exports.login = {
    noLogin: "You must login first in order to use Steroid's functions.",
    noAuth: "No authentication credentials were found.",
    cooldown: "Too many login attempts, come back in a few minutes.",
    unauthorized: "Your Username or Wallpaper Token might be incorrent, please check them on your Dashboard and restart your wallpaper."
};

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.offline = void 0;
exports.offline = {
    update: "Please update Steroid before using this feature.",
    noService: "Seems like Steroid's server is offline or under maintenance, but don't worry, we will be back soon!"
};

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spotify = void 0;
exports.spotify = {
    activate: "You must activate this Spotify function before executing it.",
    issue: "Seems like Spotify is not working today, we hope it comes back in a few minutes.",
    refresh: "Ooops, something went wrong with Spotify! Try reconnecting your account with Steroid.",
    noSong: "Nothing to play for now",
    rate: "You have reached the rate limit for Spotify requests per minute, please slow them down.",
};

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weather = void 0;
exports.weather = {
    activate: "You must activate Weather functions in your Steroid settings.",
    activateFunction: "You must activate this weather function before executing it.",
    login: "You must login with Steroid to receive weather details.",
    apiKeyUnauthorized: "Your AccuWeather API key is not valid, please create a new one following the steps mentioned on Steroid's guide.",
    locationNotFound: "Your location hasn't been found by AccuWeather, please try to search it on their webpage first for better accuracy.",
    unavailable: "Seems like AccuWeather is currently unavailable, please try again later."
};

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._errors = void 0;
const login_1 = require("./constants/login");
const codes_1 = require("./constants/codes");
const offline_1 = require("./constants/offline");
const weather_1 = require("./constants/weather");
const spotify_1 = require("./constants/spotify");
exports._errors = {
    login: login_1.login,
    codes: codes_1.codes,
    offline: offline_1.offline,
    weather: weather_1.weather,
    spotify: spotify_1.spotify,
};

},{"./constants/codes":5,"./constants/login":6,"./constants/offline":7,"./constants/spotify":8,"./constants/weather":9}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCache = void 0;
function getCache(cache, errors) {
    try {
        localStorage.setItem("steroidData", JSON.stringify(cache));
        return { success: true };
    }
    catch (e) {
        return { error: "LocalStorage is not available.", code: errors.codes.preConditionFailed };
    }
    ;
}
exports.getCache = getCache;
;

},{}],12:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatus = void 0;
function getStatus(errors) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://steroidapp.ddns.net', {
            method: 'GET',
        });
        switch (res.status) {
            case 200:
                return { success: true };
            case 429:
                return { error: errors.login.cooldown, code: errors.codes.tooManyRequests };
            default:
                return { error: errors.offline.noService, code: errors.codes.serviceUnavailable };
        }
        ;
    });
}
exports.getStatus = getStatus;
;

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCache = void 0;
function setCache(cache, errors) {
    try {
        localStorage.setItem("steroidData", JSON.stringify(cache));
        return { success: true };
    }
    catch (e) {
        return { error: "LocalStorage is not available.", code: errors.codes.preConditionFailed };
    }
    ;
}
exports.setCache = setCache;
;

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpers = void 0;
const cache_1 = require("../../cache/cache");
const errors_1 = require("../../errors/errors");
const getCache_1 = require("./functions/getCache");
const getStatus_1 = require("./functions/getStatus");
const setCache_1 = require("./functions/setCache");
exports.helpers = {
    getCache: () => {
        return (0, getCache_1.getCache)(cache_1._cache, errors_1._errors);
    },
    getStatus: () => {
        return (0, getStatus_1.getStatus)(errors_1._errors);
    },
    setCache: () => {
        return (0, setCache_1.setCache)(cache_1._cache, errors_1._errors);
    }
};

},{"../../cache/cache":1,"../../errors/errors":10,"./functions/getCache":11,"./functions/getStatus":12,"./functions/setCache":13}],15:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
const temp_1 = require("../temp/temp");
const cache_1 = require("../cache/cache");
const errors_1 = require("../errors/errors");
const settings_1 = require("../settings/settings");
const helpers_1 = require("./helpers/helpers");
function initialize(userId, wallpaperToken) {
    return __awaiter(this, void 0, void 0, function* () {
        let cache = cache_1._cache;
        const verification = function (userId, wallpaperToken) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield fetch('https://steroidapp.ddns.net/api/verification', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: `user_id=${userId}&wallpaper_token=${wallpaperToken}`,
                });
                switch (res.status) {
                    case 200:
                        return { success: true, data: yield res.json() };
                    case 401:
                        return { error: errors_1._errors.login.unauthorized, code: errors_1._errors.codes.unauthorized };
                    case 429:
                        return { error: errors_1._errors.login.cooldown, code: errors_1._errors.codes.tooManyRequests };
                    default:
                        return { error: errors_1._errors.offline.noService, code: errors_1._errors.codes.serviceUnavailable };
                }
                ;
            });
        };
        let verificationData = yield verification(userId, wallpaperToken);
        if (verificationData.success) {
            let { success, data, error, code } = yield helpers_1.helpers.getCache();
            if (success) {
                if (data) {
                    data.userId = userId;
                    data.wallpaperToken = wallpaperToken;
                    cache = data;
                    if (cache.weather.location !== verificationData.data.user_location) {
                        cache.weather.location = verificationData.data.user_location;
                        cache.weather.city.name = "";
                        cache.weather.city.state = "";
                        cache.weather.city.country = "";
                        cache.weather.city.region = "";
                        cache.weather.city.latitude = 0;
                        cache.weather.city.longitude = 0;
                        cache.weather.city.timezone = 0;
                        cache.weather.city.key = "";
                    }
                    ;
                    if (cache.weather.apiKey !== verificationData.data.weather_api) {
                        cache.weather.apiKey = verificationData.data.weather_api;
                    }
                    ;
                    if (cache.spotify.refreshToken !== verificationData.data.spotify_token) {
                        cache.spotify.refreshToken = verificationData.data.spotify_token;
                    }
                    ;
                }
                else {
                    cache.user.userId = userId;
                    cache.user.wallpaperToken = wallpaperToken;
                    cache.weather.location = verificationData.data.user_location;
                    cache.weather.apiKey = verificationData.data.weather_api;
                    cache.spotify.refreshToken = verificationData.data.spotify_token;
                    for (let i = 0; i < settings_1.settings.weather.forecast_days; i++) {
                        cache.weather.forecast.days[i] = JSON.parse(JSON.stringify(cache.weather.today));
                    }
                    ;
                }
                ;
                temp_1._temp.user.loggedIn = true;
                return helpers_1.helpers.setCache();
            }
            else {
                return { error: error, code: code };
            }
        }
        else {
            if (verificationData.code === errors_1._errors.codes.serviceUnavailable) {
                temp_1._temp.user.loggedIn = true;
            }
            return { error: verificationData.error, code: verificationData.code };
        }
        ;
    });
}
exports.initialize = initialize;

},{"../cache/cache":1,"../errors/errors":10,"../settings/settings":32,"../temp/temp":34,"./helpers/helpers":14}],16:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.access = void 0;
const temp_1 = require("../../../temp/temp");
const cache_1 = require("../../../cache/cache");
const errors_1 = require("../../../errors/errors");
const settings_1 = require("../../../settings/settings");
const helpers_1 = require("../../helpers/helpers");
function access() {
    return __awaiter(this, void 0, void 0, function* () {
        if (temp_1._temp.user.loggedIn) {
            if (settings_1.settings.spotify.active) {
                const res = yield fetch("https://accounts.spotify.com/api/token", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Basic ZmY3NjYyZTAyMDg3NDk3MGEwMTAxNzNjMjA0MzljNTc6NzMwNmQ1ZGU0NWZjNGVlZDk0NDkzYjk3NTY0YmYxMTE='
                    },
                    body: `grant_type=refresh_token&refresh_token=${cache_1._cache.spotify.refreshToken}`
                });
                switch (res.status) {
                    case 200:
                        const data = yield res.json();
                        if (data.access_token !== undefined) {
                            cache_1._cache.spotify.accessToken = data.access_token;
                            cache_1._cache.spotify.tokenType = data.token_type;
                            cache_1._cache.spotify.scope = data.scope;
                            cache_1._cache.spotify.expiresIn = data.expires_in;
                            helpers_1.helpers.setCache();
                            return { success: true };
                        }
                        else {
                            return { error: errors_1._errors.spotify.refresh, code: errors_1._errors.codes.unauthorized };
                        }
                        ;
                    case 401:
                        return { error: errors_1._errors.spotify.refresh, code: errors_1._errors.codes.unauthorized };
                    default:
                        return { error: errors_1._errors.spotify.issue, code: errors_1._errors.codes.serviceUnavailable };
                }
                ;
            }
            else {
                return { error: errors_1._errors.spotify.activate, code: errors_1._errors.codes.preConditionRequired };
            }
        }
        else {
            return { error: errors_1._errors.login.noLogin, code: errors_1._errors.codes.locked };
        }
        ;
    });
}
exports.access = access;
;

},{"../../../cache/cache":1,"../../../errors/errors":10,"../../../settings/settings":32,"../../../temp/temp":34,"../../helpers/helpers":14}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCache = void 0;
const temp_1 = require("../../../temp/temp");
function clearCache() {
    let { song } = temp_1._temp.spotify;
    song = {
        name: "",
        album: "",
        artist: "",
        play: false,
        cover: {
            url: "",
            base64: ""
        },
        duration: {
            ms: 0,
            time: "0:00"
        },
        progress: {
            ms: 0,
            time: "0:00"
        },
        songChanged: false,
    };
}
exports.clearCache = clearCache;
;

},{"../../../temp/temp":34}],18:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cover = void 0;
const temp_1 = require("../../../temp/temp");
function cover() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield fetch(temp_1._temp.spotify.song.cover.url);
        let blob = yield data.blob();
        let reader = new FileReader();
        return new Promise((resolve) => {
            try {
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    resolve(reader.result);
                };
            }
            catch (error) {
                return "";
            }
        });
    });
}
exports.cover = cover;

},{"../../../temp/temp":34}],19:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playback = void 0;
const temp_1 = require("../../../temp/temp");
const cache_1 = require("../../../cache/cache");
const errors_1 = require("../../../errors/errors");
const access_1 = require("./access");
const progress_1 = require("./progress");
const clearCache_1 = require("./clearCache");
const processPlayback_1 = require("./processPlayback");
const settings_1 = require("../../../settings/settings");
function playback() {
    return __awaiter(this, void 0, void 0, function* () {
        if (temp_1._temp.user.loggedIn) {
            if (settings_1.settings.spotify.active) {
                if (temp_1._temp.spotify.lastRequest < Date.now()) {
                    temp_1._temp.spotify.lastRequest = Date.now() + settings_1.settings.spotify.requestDelay;
                    try {
                        const res = yield fetch("https://api.spotify.com/v1/me/player/currently-playing?market=us", {
                            method: "GET",
                            headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                                "Authorization": `${cache_1._cache.spotify.tokenType} ${cache_1._cache.spotify.accessToken}`
                            }
                        });
                        switch (res.status) {
                            case 200:
                                return yield (0, processPlayback_1.processPlayback)(res);
                            case 204:
                                return { stop: true };
                            case 400:
                                let bearer = yield (0, access_1.access)();
                                if (bearer === null || bearer === void 0 ? void 0 : bearer.success) {
                                    return yield playback();
                                }
                                else {
                                    return { error: errors_1._errors.spotify.refresh, code: res.status };
                                }
                                ;
                            case 401:
                                let refresh = yield (0, access_1.access)();
                                if (refresh === null || refresh === void 0 ? void 0 : refresh.success) {
                                    return yield playback();
                                }
                                else {
                                    return { error: errors_1._errors.spotify.refresh, code: res.status };
                                }
                                ;
                            case 429:
                                temp_1._temp.spotify.lastRequest = Date.now() + (Number(res.headers.get("Retry-After")) * 1000);
                                if (temp_1._temp.spotify.song.name !== "") {
                                    if (temp_1._temp.spotify.song.play !== false) {
                                        return (0, progress_1.progress)(0);
                                    }
                                    else {
                                        return temp_1._temp.spotify.song;
                                    }
                                    ;
                                }
                                else {
                                    return { stop: true };
                                }
                                ;
                            default:
                                return { error: errors_1._errors.spotify.issue, code: res.status };
                        }
                        ;
                    }
                    catch (error) {
                        (0, clearCache_1.clearCache)();
                        return { stop: true };
                    }
                }
                else {
                    if (temp_1._temp.spotify.song.name !== "") {
                        if (temp_1._temp.spotify.song.play !== false) {
                            return (0, progress_1.progress)(0);
                        }
                        ;
                        return temp_1._temp.spotify.song;
                    }
                    else {
                        return { stop: true };
                    }
                    ;
                }
                ;
            }
            else {
                return { error: errors_1._errors.spotify.activate, code: errors_1._errors.codes.preConditionRequired };
            }
            ;
        }
        else {
            return { error: errors_1._errors.login.noLogin, code: errors_1._errors.codes.locked };
        }
    });
}
exports.playback = playback;

},{"../../../cache/cache":1,"../../../errors/errors":10,"../../../settings/settings":32,"../../../temp/temp":34,"./access":16,"./clearCache":17,"./processPlayback":20,"./progress":21}],20:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processPlayback = void 0;
const temp_1 = require("../../../temp/temp");
const settings_1 = require("../../../settings/settings");
const cover_1 = require("./cover");
const progress_1 = require("./progress");
const timeStamp_1 = require("./timeStamp");
const clearCache_1 = require("./clearCache");
function processPlayback(res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (settings_1.settings.spotify.active) {
            let data = yield res.json();
            if (data.currently_playing_type === "track") {
                temp_1._temp.spotify.is_ad_playing === true ? temp_1._temp.spotify.is_ad_playing = false : null;
                data.is_playing ? temp_1._temp.spotify.song.play = true : temp_1._temp.spotify.song.play = false;
                if (temp_1._temp.spotify.song.name != data.item.name) { // If the name of the song changed
                    temp_1._temp.spotify.song.name = data.item.name; // Store new name
                    temp_1._temp.spotify.song.album = data.item.album.name; // Store new album
                    temp_1._temp.spotify.song.artist = data.item.artists[0].name; // Store new artist
                    temp_1._temp.spotify.song.cover.url = data.item.album.images[1].url; // Store album cover url
                    temp_1._temp.spotify.song.songChanged = true;
                    if (settings_1.settings.spotify.create_cover) {
                        temp_1._temp.spotify.song.cover.base64 = String(yield (0, cover_1.cover)());
                    }
                    else {
                        temp_1._temp.spotify.song.cover.base64 = "";
                    }
                    ;
                    if (settings_1.settings.spotify.progress) {
                        temp_1._temp.spotify.song.progress.ms = data.progress_ms;
                        temp_1._temp.spotify.song.duration.ms = data.item.duration_ms;
                        if (settings_1.settings.spotify.process_timeStamp) {
                            temp_1._temp.spotify.song.progress.time = (0, timeStamp_1.timeStamp)(data.progress_ms);
                            temp_1._temp.spotify.song.duration.time = (0, timeStamp_1.timeStamp)(data.item.duration_ms);
                        }
                        ;
                    }
                    else {
                        temp_1._temp.spotify.song.progress.ms = 0;
                        temp_1._temp.spotify.song.duration.ms = data.item.duration_ms;
                        temp_1._temp.spotify.song.progress.time = "0:00";
                        if (settings_1.settings.spotify.process_timeStamp) { // Check the output format
                            temp_1._temp.spotify.song.duration.time = (0, timeStamp_1.timeStamp)(data.item.duration_ms);
                        }
                        else {
                            temp_1._temp.spotify.song.duration.time = "0:00";
                        }
                        ;
                    }
                    ;
                }
                else { // If it is the same song, then just update the progress
                    temp_1._temp.spotify.song.songChanged = false;
                    return (0, progress_1.progress)(data.progress_ms);
                }
                ;
                if (temp_1._temp.spotify.song.name !== null) {
                    return temp_1._temp.spotify.song;
                }
                ;
            }
            else {
                temp_1._temp.spotify.is_ad_playing = true;
            }
        }
        ;
        (0, clearCache_1.clearCache)();
        return { stop: true };
    });
}
exports.processPlayback = processPlayback;
;

},{"../../../settings/settings":32,"../../../temp/temp":34,"./clearCache":17,"./cover":18,"./progress":21,"./timeStamp":22}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.progress = void 0;
const settings_1 = require("../../../settings/settings");
const temp_1 = require("../../../temp/temp");
const timeStamp_1 = require("./timeStamp");
function progress(ms) {
    if (settings_1.settings.spotify.progress) {
        if (temp_1._temp.spotify.song.progress.ms + settings_1.settings.spotify.interval < temp_1._temp.spotify.song.duration.ms) { // Prevent progress going beyond the song duration
            if (ms !== 0) {
                temp_1._temp.spotify.song.progress.ms = ms;
            }
            else {
                temp_1._temp.spotify.song.progress.ms += settings_1.settings.spotify.interval;
            }
            if (settings_1.settings.spotify.process_timeStamp) {
                temp_1._temp.spotify.song.progress.time = (0, timeStamp_1.timeStamp)(temp_1._temp.spotify.song.progress.ms);
            }
            ;
        }
        ;
    }
    ;
    return temp_1._temp.spotify.song;
}
exports.progress = progress;
;

},{"../../../settings/settings":32,"../../../temp/temp":34,"./timeStamp":22}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeStamp = void 0;
function timeStamp(milliseconds) {
    let minutes = Math.floor(milliseconds / 60000);
    let seconds = Number(((milliseconds % 60000) / 1000).toFixed(0));
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
exports.timeStamp = timeStamp;
;

},{}],23:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spotify = void 0;
const temp_1 = require("../../temp/temp");
const access_1 = require("./functions/access");
const playback_1 = require("./functions/playback");
const settings_1 = require("../../settings/settings");
exports.spotify = {
    access: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, access_1.access)();
    }),
    playback: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, playback_1.playback)();
    }),
    settings: settings_1.settings.spotify,
    song: () => {
        return temp_1._temp.spotify.song;
    }
};

},{"../../settings/settings":32,"../../temp/temp":34,"./functions/access":16,"./functions/playback":19}],24:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityCode = void 0;
const temp_1 = require("../../../temp/temp");
const cache_1 = require("../../../cache/cache");
const errors_1 = require("../../../errors/errors");
const settings_1 = require("../../../settings/settings");
const helpers_1 = require("../../helpers/helpers");
const errorHandler_1 = require("./errorHandler");
function cityCode() {
    return __awaiter(this, void 0, void 0, function* () {
        if (temp_1._temp.user.loggedIn) {
            if (settings_1.settings.weather.active) {
                if (cache_1._cache.weather.city.key == "") {
                    const res = yield fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${cache_1._cache.weather.apiKey}&q=${cache_1._cache.weather.location}&language=en-USoffset=1`, {
                        method: "GET",
                        headers: { "Accept-Encoding": "gzip" }
                    });
                    switch (res.status) {
                        case 200:
                            let data = yield res.json();
                            if (data.length > 0) {
                                cache_1._cache.weather.city.name = data[0].EnglishName;
                                cache_1._cache.weather.city.state = data[0].AdministrativeArea.EnglishName;
                                cache_1._cache.weather.city.country = data[0].Country.EnglishName;
                                cache_1._cache.weather.city.region = data[0].Region.EnglishName;
                                cache_1._cache.weather.city.latitude = data[0].GeoPosition.Latitude;
                                cache_1._cache.weather.city.longitude = data[0].GeoPosition.Longitude;
                                cache_1._cache.weather.city.timezone = data[0].TimeZone.GmtOffset;
                                cache_1._cache.weather.city.key = data[0].Key;
                                helpers_1.helpers.setCache();
                                return { success: true, data: data[0].Key };
                            }
                            else {
                                return { error: errors_1._errors.weather.locationNotFound, code: errors_1._errors.codes.notFound };
                            }
                        default:
                            return (0, errorHandler_1.errorHandler)(res.status);
                    }
                    ;
                }
                else {
                    return { success: true, data: cache_1._cache.weather.city.key };
                }
                ;
            }
            else {
                return { error: errors_1._errors.weather.activate, code: errors_1._errors.codes.preConditionRequired };
            }
        }
        else {
            return { error: errors_1._errors.login.noLogin, code: errors_1._errors.codes.locked };
        }
    });
}
exports.cityCode = cityCode;
;

},{"../../../cache/cache":1,"../../../errors/errors":10,"../../../settings/settings":32,"../../../temp/temp":34,"../../helpers/helpers":14,"./errorHandler":26}],25:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.current = void 0;
const temp_1 = require("../../../temp/temp");
const cache_1 = require("../../../cache/cache");
const errors_1 = require("../../../errors/errors");
const settings_1 = require("../../../settings/settings");
const cityCode_1 = require("./cityCode");
const errorHandler_1 = require("./errorHandler");
const helpers_1 = require("../../helpers/helpers");
function current() {
    return __awaiter(this, void 0, void 0, function* () {
        if (temp_1._temp.user.loggedIn) {
            if (settings_1.settings.weather.active) {
                if (settings_1.settings.weather.current) {
                    if ((Date.now() - cache_1._cache.weather.current.lastRequest) > settings_1.settings.weather.waitingTime.current) {
                        const city = yield (0, cityCode_1.cityCode)();
                        if (city.success) {
                            const res = yield fetch(`https://dataservice.accuweather.com/currentconditions/v1/${cache_1._cache.weather.city.key}?apikey=${cache_1._cache.weather.apiKey}&details=true`, {
                                method: "GET",
                                headers: { "Accept-Encoding": "gzip" }
                            });
                            switch (res.status) {
                                case 200:
                                    try {
                                        let [data] = yield res.json();
                                        let current = cache_1._cache.weather.current;
                                        // General
                                        current.text = data.WeatherText;
                                        current.icon = data.WeatherIcon;
                                        current.isDayTime = data.IsDayTime;
                                        current.humidity = data.RelativeHumidity;
                                        current.lastRequest = Date.now();
                                        // Temperature
                                        current.temperature.measure.metric.value = data.Temperature.Metric.Value;
                                        current.temperature.measure.imperial.value = data.Temperature.Imperial.Value;
                                        current.temperature.feel.metric.value = data.RealFeelTemperature.Metric.Value;
                                        current.temperature.feel.imperial.value = data.RealFeelTemperature.Imperial.Value;
                                        current.temperature.text = data.RealFeelTemperature.Metric.Phrase;
                                        // Wind
                                        current.wind.direction.value = data.Wind.Direction.Degrees;
                                        current.wind.direction.cardinal = data.Wind.Direction.English;
                                        current.wind.speed.metric.value = data.Wind.Speed.Metric.Value;
                                        current.wind.speed.imperial.value = data.Wind.Speed.Imperial.Value;
                                        // UV
                                        current.uv.index = data.UVIndex;
                                        current.uv.text = data.UVIndexText;
                                        // Visibility
                                        current.visibility.metric = data.Visibility.Metric.Value;
                                        current.visibility.imperial = data.Visibility.Imperial.Value;
                                        // Cloud
                                        current.cloud.coverage = data.CloudCover;
                                        current.cloud.ceiling.metric.value = data.Ceiling.Metric.Value;
                                        current.cloud.ceiling.imperial.value = data.Ceiling.Imperial.Value;
                                        // Pressure
                                        current.pressure.metric.value = data.Pressure.Metric.Value;
                                        current.pressure.imperial.value = data.Pressure.Imperial.Value;
                                        // Precipitation
                                        current.precipitation.has = data.HasPrecipitation;
                                        current.precipitation.type = data.PrecipitationType;
                                        current.precipitation.measure.metric.value = data.PrecipitationSummary.Precipitation.Metric.Value;
                                        current.precipitation.measure.imperial.value = data.PrecipitationSummary.Precipitation.Imperial.Value;
                                        current.precipitation.summary.pastHour.metric.value = data.PrecipitationSummary.PastHour.Metric.Value;
                                        current.precipitation.summary.pastHour.imperial.value = data.PrecipitationSummary.PastHour.Imperial.Value;
                                        current.precipitation.summary.past3Hours.metric.value = data.PrecipitationSummary.Past3Hours.Metric.Value;
                                        current.precipitation.summary.past3Hours.imperial.value = data.PrecipitationSummary.Past3Hours.Imperial.Value;
                                        current.precipitation.summary.past6Hours.metric.value = data.PrecipitationSummary.Past6Hours.Metric.Value;
                                        current.precipitation.summary.past6Hours.imperial.value = data.PrecipitationSummary.Past6Hours.Imperial.Value;
                                        current.precipitation.summary.past12Hours.metric.value = data.PrecipitationSummary.Past12Hours.Metric.Value;
                                        current.precipitation.summary.past12Hours.imperial.value = data.PrecipitationSummary.Past12Hours.Imperial.Value;
                                        current.precipitation.summary.past18Hours.metric.value = data.PrecipitationSummary.Past18Hours.Metric.Value;
                                        current.precipitation.summary.past18Hours.imperial.value = data.PrecipitationSummary.Past18Hours.Imperial.Value;
                                        current.precipitation.summary.past24Hours.metric.value = data.PrecipitationSummary.Past24Hours.Metric.Value;
                                        current.precipitation.summary.past24Hours.imperial.value = data.PrecipitationSummary.Past24Hours.Imperial.Value;
                                        yield helpers_1.helpers.setCache();
                                        return { success: true, current: cache_1._cache.weather.current };
                                    }
                                    catch (e) {
                                        return { error: errors_1._errors.weather.unavailable, code: errors_1._errors.codes.networkConTimeout };
                                    }
                                default:
                                    return (0, errorHandler_1.errorHandler)(res.status);
                            }
                        }
                        else {
                            return { error: city.error, code: city.code };
                        }
                    }
                    else {
                        return { success: true, current: cache_1._cache.weather.current };
                    }
                }
                else {
                    return { error: errors_1._errors.weather.activateFunction, code: errors_1._errors.codes.preConditionFailed };
                }
            }
            else {
                return { error: errors_1._errors.weather.activate, code: errors_1._errors.codes.preConditionRequired };
            }
        }
        else {
            return { error: errors_1._errors.login.noLogin, code: errors_1._errors.codes.locked };
        }
    });
}
exports.current = current;
;

},{"../../../cache/cache":1,"../../../errors/errors":10,"../../../settings/settings":32,"../../../temp/temp":34,"../../helpers/helpers":14,"./cityCode":24,"./errorHandler":26}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errors_1 = require("../../../errors/errors");
function errorHandler(status) {
    switch (status) {
        case 401:
            return { error: errors_1._errors.weather.apiKeyUnauthorized, code: errors_1._errors.codes.unauthorized };
        case 500:
            return { error: errors_1._errors.weather.unavailable, code: errors_1._errors.codes.internalServerError };
        default:
            return { error: errors_1._errors.weather.unavailable, code: errors_1._errors.codes.internalServerError };
    }
}
exports.errorHandler = errorHandler;

},{"../../../errors/errors":10}],27:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forecast = void 0;
const temp_1 = require("../../../temp/temp");
const cache_1 = require("../../../cache/cache");
const errors_1 = require("../../../errors/errors");
const settings_1 = require("../../../settings/settings");
const cityCode_1 = require("./cityCode");
const errorHandler_1 = require("./errorHandler");
const helpers_1 = require("../../helpers/helpers");
function forecast() {
    return __awaiter(this, void 0, void 0, function* () {
        const metricConverter = (type, value) => {
            switch (type) {
                case "in":
                    return (value * 25.4).toFixed(2); // Returns mm
                case "mi/h":
                    return (value * 1.609344).toFixed(2); // Returns km/h
                case "F":
                    return ((value - 32) / 1.8).toFixed(2); // Returns C
            }
            ;
        };
        if (temp_1._temp.user.loggedIn) {
            if (settings_1.settings.weather.active) {
                if (settings_1.settings.weather.current) {
                    if ((Date.now() - cache_1._cache.weather.forecast.lastRequest) > settings_1.settings.weather.waitingTime.forecast) {
                        const city = yield (0, cityCode_1.cityCode)();
                        if (city.success) {
                            const res = yield fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cache_1._cache.weather.city.key}?apikey=${cache_1._cache.weather.apiKey}&details=true`, {
                                method: "GET",
                                headers: { "Accept-Encoding": "gzip" }
                            });
                            switch (res.status) {
                                case 200:
                                    try {
                                        let data = yield res.json();
                                        // General
                                        cache_1._cache.weather.forecast.headline.severity = data.Headline.Severity;
                                        cache_1._cache.weather.forecast.headline.text = data.Headline.Text;
                                        cache_1._cache.weather.forecast.headline.type = data.Headline.Category;
                                        cache_1._cache.weather.forecast.lastRequest = Date.now();
                                        // Reading each day
                                        data["DailyForecasts"].forEach((day, index) => {
                                            let newDay = {};
                                            if (index === 0) { // Today's weather
                                                newDay = cache_1._cache.weather.today;
                                            }
                                            else {
                                                newDay = cache_1._cache.weather.forecast.days[index - 1];
                                            }
                                            ;
                                            // Air information
                                            newDay.air.quality.category = day.AirAndPollen[0].Category; // Quality
                                            newDay.air.quality.type = day.AirAndPollen[0].Type;
                                            newDay.air.quality.value = day.AirAndPollen[0].Value;
                                            newDay.air.grass.category = day.AirAndPollen[1].Category; // Grass
                                            newDay.air.grass.value = day.AirAndPollen[1].Value;
                                            newDay.air.mold.category = day.AirAndPollen[2].Category; // Mold
                                            newDay.air.mold.value = day.AirAndPollen[2].Value;
                                            newDay.air.ragweed.category = day.AirAndPollen[3].Category; // Ragweed
                                            newDay.air.ragweed.value = day.AirAndPollen[3].Value;
                                            newDay.air.tree.category = day.AirAndPollen[4].Category; // Tree
                                            newDay.air.tree.value = day.AirAndPollen[4].Value;
                                            // Moon
                                            newDay.moon.age = day.Moon.Age;
                                            newDay.moon.phase = day.Moon.Phase;
                                            newDay.moon.rise = day.Moon.Rise;
                                            newDay.moon.set = day.Moon.Set;
                                            // Sun
                                            newDay.sun.hours = day.HoursOfSun;
                                            newDay.sun.rise = day.Sun.Rise;
                                            newDay.sun.set = day.Sun.Set;
                                            // Temperature Description
                                            newDay.temperature.text.minimum = day.RealFeelTemperature.Minimum.Phrase;
                                            newDay.temperature.text.maximum = day.RealFeelTemperature.Maximum.Phrase;
                                            // Temperature Feel
                                            newDay.temperature.feel.minimum.imperial.value = day.RealFeelTemperature.Minimum.Value;
                                            newDay.temperature.feel.minimum.metric.value = metricConverter("F", day.RealFeelTemperature.Minimum.Value);
                                            newDay.temperature.feel.maximum.imperial.value = day.RealFeelTemperature.Maximum.Value;
                                            newDay.temperature.feel.maximum.metric.value = metricConverter("F", day.RealFeelTemperature.Maximum.Value);
                                            // Temperature Measure
                                            newDay.temperature.measure.minimum.imperial.value = day.Temperature.Minimum.Value;
                                            newDay.temperature.measure.minimum.metric.value = metricConverter("F", day.Temperature.Minimum.Value);
                                            newDay.temperature.measure.maximum.imperial.value = day.Temperature.Maximum.Value;
                                            newDay.temperature.measure.maximum.metric.value = metricConverter("F", day.Temperature.Maximum.Value);
                                            // Temperature Summary
                                            newDay.temperature.summary.cooling.imperial.value = day.DegreeDaySummary.Cooling.Value;
                                            newDay.temperature.summary.cooling.metric.value = metricConverter("F", day.DegreeDaySummary.Cooling.Value);
                                            newDay.temperature.summary.heating.imperial.value = day.DegreeDaySummary.Heating.Value;
                                            newDay.temperature.summary.heating.metric.value = metricConverter("F", day.DegreeDaySummary.Heating.Value);
                                            // UV Light
                                            newDay.uv.category = day.AirAndPollen[5].Category;
                                            newDay.uv.value = day.AirAndPollen[5].Value;
                                            for (let i = 0; i < 2; i++) {
                                                let cycle = ["", ""];
                                                if (i === 0) {
                                                    cycle[0] = "day";
                                                    cycle[1] = "Day";
                                                }
                                                else {
                                                    cycle[0] = "night";
                                                    cycle[1] = "Night";
                                                }
                                                // Day/Night cycle Information
                                                newDay[cycle[0]].icon = day[cycle[1]].Icon; // Icon
                                                // Text values
                                                newDay[cycle[0]].text.tiny = day[cycle[1]].IconPhrase;
                                                newDay[cycle[0]].text.short = day[cycle[1]].ShortPhrase;
                                                newDay[cycle[0]].text.long = day[cycle[1]].LongPhrase;
                                                // Amount
                                                newDay[cycle[0]].amount.rain.hours = day[cycle[1]].HoursOfRain; // Rain
                                                newDay[cycle[0]].amount.rain.imperial = day[cycle[1]].Rain.Value;
                                                newDay[cycle[0]].amount.rain.metric = metricConverter("in", day[cycle[1]].Rain.Value);
                                                newDay[cycle[0]].amount.ice.hours = day[cycle[1]].HoursOfIce; // Ice
                                                newDay[cycle[0]].amount.ice.imperial = day[cycle[1]].Ice.Value;
                                                newDay[cycle[0]].amount.ice.metric = metricConverter("in", day[cycle[1]].Ice.Value);
                                                newDay[cycle[0]].amount.snow.hours = day[cycle[1]].HoursOfSnow; // Snow
                                                newDay[cycle[0]].amount.snow.imperial = day[cycle[1]].Snow.Value;
                                                newDay[cycle[0]].amount.snow.metric = metricConverter("in", day[cycle[1]].Snow.Value);
                                                newDay[cycle[0]].amount.total.hours = day[cycle[1]].HoursOfPrecipitation; // TotalPrecipitation
                                                newDay[cycle[0]].amount.total.imperial = day[cycle[1]].TotalLiquid.Value;
                                                newDay[cycle[0]].amount.total.metric = metricConverter("in", day[cycle[1]].TotalLiquidValue);
                                                // Light measures
                                                newDay[cycle[0]].light.cloudCover = day[cycle[1]].CloudCover;
                                                newDay[cycle[0]].light.evapotranspiration.imperial.value = day[cycle[1]].Evapotranspiration.Value;
                                                newDay[cycle[0]].light.evapotranspiration.metric.value = metricConverter("in", day[cycle[1]].Evapotranspiration.Value);
                                                newDay[cycle[0]].light.solarIrradiance.value = day[cycle[1]].SolarIrradiance.Value;
                                                // Probabilities
                                                newDay[cycle[0]].probabilities.rain = day[cycle[1]].RainProbability;
                                                newDay[cycle[0]].probabilities.ice = day[cycle[1]].IceProbability;
                                                newDay[cycle[0]].probabilities.snow = day[cycle[1]].SnowProbability;
                                                newDay[cycle[0]].probabilities.thunderstorm = day[cycle[1]].ThunderstormProbability;
                                                newDay[cycle[0]].probabilities.precipitation = day[cycle[1]].PrecipitacionProbability;
                                                // Wind
                                                newDay[cycle[0]].wind.direction.value = day[cycle[1]].Wind.Direction.Degrees;
                                                newDay[cycle[0]].wind.direction.cardinal = day[cycle[1]].Wind.Direction.English;
                                                newDay[cycle[0]].wind.speed.imperial.value = day[cycle[1]].Wind.Speed.Value;
                                                newDay[cycle[0]].wind.speed.metric.value = metricConverter("mi/h", day[cycle[1]].Wind.Speed.Value);
                                            }
                                            ;
                                        });
                                        yield helpers_1.helpers.setCache();
                                        return { success: true, current: cache_1._cache.weather.forecast };
                                    }
                                    catch (e) {
                                        return { error: errors_1._errors.weather.unavailable, code: errors_1._errors.codes.networkConTimeout };
                                    }
                                    ;
                                default:
                                    return (0, errorHandler_1.errorHandler)(res.status);
                            }
                            ;
                        }
                        else {
                            return { error: city.error, code: city.code };
                        }
                        ;
                    }
                    else {
                        return { success: true, current: cache_1._cache.weather.forecast };
                    }
                    ;
                }
                else {
                    return { error: errors_1._errors.weather.activateFunction, code: errors_1._errors.codes.preConditionFailed };
                }
                ;
            }
            else {
                return { error: errors_1._errors.weather.activate, code: errors_1._errors.codes.preConditionRequired };
            }
            ;
        }
        else {
            return { error: errors_1._errors.login.noLogin, code: errors_1._errors.codes.locked };
        }
        ;
    });
}
exports.forecast = forecast;
;

},{"../../../cache/cache":1,"../../../errors/errors":10,"../../../settings/settings":32,"../../../temp/temp":34,"../../helpers/helpers":14,"./cityCode":24,"./errorHandler":26}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.icons = void 0;
exports.icons = {
    1: "day-sunny",
    2: "day-sunny-overcast",
    3: "day-sunny-overcast",
    4: "day-sunny-overcast",
    5: "day-sunny-overcast",
    6: "day-sunny-overcast",
    7: "day-cloudy",
    8: "cloudy",
    11: "fog",
    12: "showers",
    13: "day-showers",
    14: "day-showers",
    15: "thunderstorm",
    16: "day-storm-showers",
    17: "day-storm-showers",
    18: "rain",
    19: "snow-wind",
    20: "day-snow",
    21: "day-snow",
    22: "snow",
    23: "day-snow",
    24: "snowflake-cold",
    25: "sleet",
    26: "rain-mix",
    29: "rain-mix",
    30: "hot",
    31: "snowflake-cold",
    32: "strong-wind",
    33: "night-clear",
    34: "night-alt-cloudy",
    35: "night-alt-cloudy",
    36: "night-alt-cloudy",
    37: "night-alt-cloudy",
    38: "night-alt-cloudy",
    39: "night-showers",
    40: "night-showers",
    41: "night-alt-storm-showers",
    42: "night-alt-storm-showers",
    43: "night-alt-snow-wind",
    44: "night-alt-snow-wind",
};

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setForecastDays = void 0;
const cache_1 = require("../../../cache/cache");
const errors_1 = require("../../../errors/errors");
const settings_1 = require("../../../settings/settings");
const helpers_1 = require("../../helpers/helpers");
function setForecastDays(days) {
    if (days <= 4) {
        if (settings_1.settings.weather.forecast_days !== days) {
            settings_1.settings.weather.forecast_days = days;
            for (let i = 0; i < days; i++) {
                cache_1._cache.weather.forecast.days.pop();
            }
            ;
            return helpers_1.helpers.setCache();
        }
        ;
    }
    return { error: "Your forecast days  can only be between 1 and 4", code: errors_1._errors.codes.notAcceptable };
}
exports.setForecastDays = setForecastDays;
;

},{"../../../cache/cache":1,"../../../errors/errors":10,"../../../settings/settings":32,"../../helpers/helpers":14}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timerReset = void 0;
const cache_1 = require("../../../cache/cache");
const helpers_1 = require("../../helpers/helpers");
function timerReset() {
    cache_1._cache.weather.forecast.lastRequest = 0;
    cache_1._cache.weather.current.lastRequest = 0;
    return helpers_1.helpers.setCache();
}
exports.timerReset = timerReset;
;

},{"../../../cache/cache":1,"../../helpers/helpers":14}],31:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weather = void 0;
const icons_1 = require("./functions/icons");
const current_1 = require("./functions/current");
const cityCode_1 = require("./functions/cityCode");
const forecast_1 = require("./functions/forecast");
const settings_1 = require("../../settings/settings");
const timerReset_1 = require("./functions/timerReset");
const setForecastDays_1 = require("./functions/setForecastDays");
exports.weather = {
    city: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, cityCode_1.cityCode)();
    }),
    current: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, current_1.current)();
    }),
    forecast: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, forecast_1.forecast)();
    }),
    icons: () => {
        return icons_1.icons;
    },
    settings: {
        setForecastDays: (days) => {
            return (0, setForecastDays_1.setForecastDays)(days);
        },
        timerReset: () => {
            return (0, timerReset_1.timerReset)();
        },
        active: settings_1.settings.weather.active,
        current: settings_1.settings.weather.active,
        forecast: settings_1.settings.weather.active,
        waitingTime: {
            current: settings_1.settings.weather.waitingTime.current,
            forecast: settings_1.settings.weather.waitingTime.forecast,
        },
    },
};
// import { spotifyInterface } from '../../interfaces/spotify';
// import { cover } from './functions/cover';
// import { access } from './functions/access';
// import { clearCache } from './functions/clearCache';
// import { playback } from './functions/playback';
// import { settings } from '../../settings/settings';
// export const spotify:spotifyInterface = {
//     cover: async () => {
//         return await cover();
//     },
//     access: async () => {
//         return await access();
//     },
//     clearCache: () => {
//         return clearCache();
//     },
//     playback: async () => {
//         return await playback();
//     },
//     settings: settings.spotify,
// };
/*
weather: {
        convention: (convention) => {
            
        },
        setForecastDays: (days) => {
            
        },
        timerReset: () => {
            
        },
        errorHandler: (status) => {
            
        },
        cityCode: async () => {
            
        },
        current: async () => {
            
        },
        forecast: async () => {
            
        },
        icons: {
            
        },
    },
}



*/ 

},{"../../settings/settings":32,"./functions/cityCode":24,"./functions/current":25,"./functions/forecast":27,"./functions/icons":28,"./functions/setForecastDays":29,"./functions/timerReset":30}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settings = void 0;
exports.settings = {
    spotify: {
        active: true,
        interval: 1000,
        progress: true,
        requestDelay: 2000,
        create_cover: true,
        process_timeStamp: true,
    },
    weather: {
        active: true,
        current: true,
        forecast: true,
        forecast_days: 4,
        waitingTime: {
            current: 3600000,
            forecast: 14400000, // Four hours
        }
    },
    _spotify: {
        active: false,
    },
    _weather: {
        active: false,
        current: false,
        forecast: false,
    },
};

},{}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialize_1 = require("./modules/initialize");
const helpers_1 = require("./modules/helpers/helpers");
const spotify_1 = require("./modules/spotify/spotify");
const weather_1 = require("./modules/weather/weather");
;
window.Steroid = function Steroid() {
    // Public functions
    this.helpers = helpers_1.helpers;
    this.initialize = initialize_1.initialize;
    this.spotify = spotify_1.spotify;
    this.weather = weather_1.weather;
};

},{"./modules/helpers/helpers":14,"./modules/initialize":15,"./modules/spotify/spotify":23,"./modules/weather/weather":31}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._temp = void 0;
exports._temp = {
    user: {
        loggedIn: false,
    },
    spotify: {
        song: {
            name: "",
            album: "",
            artist: "",
            play: false,
            cover: {
                url: "",
                base64: ""
            },
            duration: {
                ms: 0,
                time: "0:00"
            },
            progress: {
                ms: 0,
                time: "0:00"
            },
            songChanged: false,
        },
        lastRequest: 0,
        is_ad_playing: false,
        processing_cover: false,
    }
};

},{}]},{},[33]);
