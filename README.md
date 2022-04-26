# <center>Steroid ⚡</center>
### <center>Wallpaper Engine web extension.</center>
<center>Steroid is a simple web app, that packs all the necessary features to create your own awesome wallpapers and share them with the world, adding new functionalities to Wallpaper Engine and it's own features to the table; creating a hybrid between native and web support throught the power of JavaScript applications.</center>

- - -

## What is it made of?


- [Node.js](https://github.com/nodejs/node) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Python](https://www.python.org/) - Programming language that lets you work quickly
and integrate systems more effectively.
- [Electron](https://github.com/electron/electron) - Framework to create cross-platform desktop applications using Javascript, CSS and HTML
- [Electron Packager](https://github.com/electron/electron-packager) - Electron app packager
- [Express](https://github.com/expressjs/express) - Fast Node.js network app framework
- [Discord Rich Presence](https://github.com/devsnek/discord-rich-presence) - A simple wrapper around discord-rpc
- [System Information](https://systeminformation.io/) - System and OS information library for Node.JS
- [Powershell](https://github.com/powershell/powershell) - Command line shell

## Table of Contents:
- - -

  - [Features.](#features)
  - [To-do.](#to-do)
  - [Download.](#download)
  - [Installation.](#installation)
    - [Browser Module.](#browser-module)
    - [Executable.](#executable)
  - [How to use Steroid.](#how-to-use-steroid)
    - [Introduction.](#how-to-use-steroid)
    - [Functions.](#functions)
  - [Reference](#reference)
      - [Server Status.](#server-status)
      - [Login.](#login)
      - [Weather.](#weather)
        - [Settings and Customization.](#settings-and-customization)
        - [Current Conditions.](#current-conditions)
        - [Forecast Information.](#forecast-information)
        - [City Code.](#city-code)
        - [Timer Reset.](#timer-reset)
        - [Set Forecast Days.](#set-forecast-days)
        - [Weather Icons.](#weather-conditions-icons)
      - [Spotify.](#spotify)
        - [Settings and Cache.](#spotify-settings-and-cache)
        - [Login.](#login-with-spotify)
        - [Playback information.](#playback-information)
        - [Modify playback state.](#modify-playback-state)
      - [News.](#news-api)
      - [Metrics.](#metrics)
        - [CPU](#cpu)
        - [GPU](#gpu)
        - [USB](#usb)
        - [WiFi](#wifi)
        - [Audio](#audio)
        - [Memory](#memory)
        - [System](#system)
        - [Network](#network)
        - [Printer](#printer)
        - [Battery](#battery)
        - [Execute](#execute)
        - [Bluetooth](#bluetooth)
        - [Filesystem](#filesystem)
        - [Motherboard](#motherboard)
  - [Tutorials.](#tutorials)
    - [Spotify Manual Setup.](#spotify-manual-setup)
  - [Credits](#credits)
  - [License](#license)

#

## Features:
- - -

**Online**
- [x] Weather information.
- [x] Cloud settings backup.
- [x] Spotify playback and details.
- [ ] Newsletters from all over the world.

**Offline**
- [ ] Native widgets.
- [X] Notes and schedules.
- [x] Extense computer metrics.
- [x] Foreing program execution.
- [X] Real time computer information.

#

## To-do:
- - -

- [ ] *Native widgets* (SOON).
- [ ] *Newsletter page* (SOON).
- [ ] *News and topics reader* (SOON).
- [ ] *Desktop App release* (SOON).

#

## Download:
- - -

> **Steroid is on alpha stage, and it's not ready to be released to the public yet.
> If you want to be part of the alpha testing community, you can do so by sending an email at:**
>
> steroid@outlook.com.ar

#

## Installation:
- - -

#### Steroid comes in two parts:
- Browser module.
- Executable.

First, you must install the browser module inside your wallpaper and then the application on your PC, so both can communicate.

#### Browser Module
Steroid's browser module only requires a simple JavaScript file, called **`steroid-wallpaper.js`**. This file contains everything you need to communicate with our server, request data and also communicate with Steroid's app.

- > Download link will be added soon after alpha testing.

- You can add  it to your HTML head section, just like this:
  ```html
  <head>
    <...> Other stuff </...>
    <script src="steroid/steroid-wallpaper.js"></script> <!-- LIKE THIS -->
    <script src="your-script-here.js"></script>
  </head>
  ```
- Done.

> Steroid doesn't require any type of extension or framework, it's just a simple standalone library file. Keep in mind that it only works on your localhost domain, thanks to our CORS policy.

#### Executable
- > Download link will be added soon after alpha testing.
- Execute **`"Steroid-Setup-x64.exe"`**.
- Read our ToS.
- Done, Steroid will be installed on your PC.

> Steroid is going to start on tray and remain waiting on the background, where you can close it if you want to.

#

## How to use Steroid:
- - -

#### Introduction:

Steroid is based on the K.I.S.S. principle *(Keep it simple, stupid)*.

There is no need to create complex and weird solutions for your wallpaper that might bug your head or keep you awake until 4 AM, we already did that for you! It works like a standalone JavaScript module, calling it's functions whenever you need them.

#### Functions:

Steroid's functions are separated on two:

**Online features:**
To access our online features, you should check if the server is online using the **[Server status](#server-status)** function. Then, logging in with the **[Login](#login-with-your-account)** function to recieve your user information.

- Server status.
- Login.
- Weather.
- Spotify.

> Without logging in, you won't be able to get weather information, spotify or news.

**Offline features:**
Offline features will be always available to you as long as you have Steroid's app installed on your PC.
- Metrics.
- Execution.
- Schedules.
- Notes.
- Widgets.

#

## Reference
- - -

### Server status
Calling our web API and knowing Steroid's status is as simple as this:
```javascript
  let hello = await steroid.hello(); // Call Steroid API to request server status.
```
**This call will return a simple boolean:**
```javascript
{ success: true }
```
This response will give you and idea if the service is running or not.

#

### Login

To login with steroid you don't have to use your password, instead, you will use your **`wallpaper_token`** that is given in our website.

By calling **`steroid.verification()`**, your account details will be verified with your **`user_id`** and **`wallpaper_token`**, to return your user information and details.
```javascript
let login_response = await steroid.verification(user_id, wallpaper_token);
```
**A normal response should be:**
```javascript
response: {
    user_ip: "192.168.1.1", // Your IP Address
    user_location: "City, State, Country", // Your location
    spotify_token:"AQDoLvTCZeSHhNlTPoc...", // Spotify API refresh token
    weather_api:"5Hs9Ys...", // AccuWeather API key
}
```

> If you don't pass username and wallpaper token, it will automatically fetch the information from memory, or from the local storage.

#

### Weather

Steroid's Weather API works directly with **[AccuWeather API](https://developer.accuweather.com)**, calling it's server and requesting all the information you need, whenever you want. By doing so, your requests won't have any hard limits, and aren't tied to our server.

Steroid's Weather Forecast is super simple and easy to use. It has been implemented like this so you don't have to worry about forgetting your AccuWeather API token. We can store them in our server and it will be applied on any wallpaper you have that runs on Steroid.

It's highly customizable and easy to work with, you can access to it's memory, settings and cache to retrieve data or modify anything you would need.

> You can check the AccuWeather API Documentation by clicking: **[here](https://developer.accuweather.com/apis)**.

##

#### Settings and customization:
First of all, you have multiple settings to customize for your own project:
```javascript
settings: {
    active: true, // If you want the weather to be active
    current: true, // If you want to active your current weather
    forecast: true, // If you want to activate your forecast
    forecast_days: 3, // Days of forecast (Max 5)
    convention: "Metric", // Metric / Fahrenheit
    waitingTime: { // Both in ms
        current: 3600000, // One hour
        forecast: 14400000 // Four hours
    }
}
```
All the settings mentioned previously can be edited like this:
```javascript
steroid.weather.settings.active = false;
steroid.weather.settings.forecast_days = 5;
```
And the changes will apply the next time you run or execute the weather function.
You can use this variables for your own project without any fear of breaking the code.
For example, let's say you want to have a variable where you want to store if the weather is active or not, well, you can use **`steroid.weather.settings.active`** for that.

##

#### Current conditions:
Requests current weather information around your location.
```javascript
let current_weather = await steroid.weather.current();
```

> You must have already saved your location and API token on Steroid's webpage.
> By default, this function will prevent you from calling it in less than an hour.

##

#### Forecast information:
Requests an extense weather forecast of your current location.
```javascript
let forecast_weather = await steroid.weather.forecast();
```

> You must have already saved your location and API token on Steroid's webpage.
> By default, Steroid will request a weather forecast of 3 days, and it will prevent you from calling it in less than four hours.

##

#### City code:
```javascript
let city_code_change = await steroid.weather.cityCode();
```
This function stores your city code in your **`localStorage`**, and return:
```javascript
{success: true}
```
Only when the code has been saved.

> You must have already saved your location and API token on Steroid's webpage.

##

#### Timer reset:
This function will reset steroid's internal timer, to allow you to request new weather details. It will simply return a **`true/false`** response.
```javascript
let timer_reset = await steroid.weather.timerReset();
```

##

#### Set forecast days:
This function will change steroid's forecast limit. It will simply return a **`true/false`** response.
```javascript
let timer_reset = await steroid.weather.setForecastDays(days);
```

##

#### Weather condition icons:
Accessing to this variable will give you all the icon codes and names used by AccuWeather.
```javascript
let icons = steroid.weather.icons;
let rain_icon = steroid.weather.icons[18];
```

#

### Spotify

To use it, you must first sign in your account, linking Steroid with Spotify in the **[Dashboard](https://steroid-app.github.io/#login)**. This way, your **`refresh_token`** will be stored in our server, and you won't have to worry about boring processes.

This special token, can be used to request something called **`access_token`**, that is needed to request information from Spotify's servers, modify your playback state and get it's status.

> This method requires you to be logged in with **[Login](#login)** function to store your **`refresh_token`** and other variables.

##

#### Spotify settings and cache:

It's highly recommended to use this settings and test them on different environments:
```javascript
settings: {
    active: true, // If you want Spotify to be active
    progress: true, // Output progress or not
    create_cover: true, // Create a base64 cover to output on song change
    process_timeStamp: true // Process timestamp to mm:ss
}
```
If you have been reading this guide, it means that you already know how to activate/deactivate this functions. In any case you didn't, you can do it by:
```javascript
steroid.spotify.settings.active = false;
steroid.spotify.settings.progress = false;
```
And, if you want to access it's cache memory for any desired reason, you can do so by:
```javascript
let spotify_cache = steroid.spotify.cache;
```
##

#### Login with Spotify:
To login with Spotify and get all the needed tokens to use it, you must access by calling this function:
```javascript
let spotify_login = await steroid.spotify.access();
```
And as response, you should get:
```javascript
{success: true}
```

##

#### Playback information:
Get all the playback information needed by calling:
```javascript
var playback_info = await steroid.spotify.playback();
```
```javascript
{
    song: {
        name: "Differently",
        album: "Differently",
        artist: "Marin Hoxha",
        cover: {
            url: "https://i.scdn.co/image/ab67616d00001e02723ec05ad325de4ce3d034b3",
            base64: "data:image/png;base64, ..."
        },
        duration: {
            ms: 183350,
            time: "3:03"
        },
        progress: {
            ms: 0,
            time: 0
        }
    }
}
```
And when the song continues, instead of sending everything again, it will send you the progress:
```javascript
progress: {
    ms: 123,
    time: "0:01"
}
```

**If you don't need or want to process your song duration and progress into **`minutes:seconds`** format, you can easily turn it off by doing this:**

```javascript
  steroid.spotify.settings.process_timeStamp = false;
```
> **Note:** Keep in mind that by turning off **`process_timeStamp`**, you will be saving up some resources on low-end computers.

**If you don't want to output any progress whatsoever, you can actually disable the progress output and wait for a new song:**

```javascript
  steroid.spotify.settings.progress = false;
```
**And you should get one of these in return:**
```javascript
{play: true}, // If the song is reproducing now
{pause: true}, // If the song has been paused
{stopped: true} // If Spotify has been stopped completely

```
> **Note:** Keep in mind that by turning off **`progress`**, you will be saving up resources on low-end computers.

##

#### Modify playback state:

**Play:**
> Coming in the next update
####
**Pause:**
> Coming in the next update
####
**Stop:**
> Coming in the next update
####
**Next:**
> Coming in the next update
####
**Previous:**
> Coming in the next update
####
**Get collection:**
> Coming in the next update
####

#

### News API

> For now this function isn't available, but it will be when finished.

#

## Metrics

Steroid metrics are coming directly from the desktop app throught it's independent local API and processed by it's browser module.

### CPU:

This function will read the CPU usage in the range of 500ms and return to the user.

#### Minimal usage:

```javascript
  let cpu = steroid.metrics.cpu('minimal');
```

**A normal response should be:**
```javascript
  {
      "model": "AMD Ryzen 5 2600 Six-Core Processor", // Your processor model here
      "usage": { // Unprocessed usage
          "user": 249,
          "nice": 0,
          "sys": 173,
          "idle": 3327,
          "irq": 79,
          "total": 501
      },
      "total": 13 // Usage percentage 
  }
```

#### Detailed usage:

```javascript
  let cpu = steroid.metrics.cpu('detailed');
```

**A normal response should be:**
```javascript
  {
      "model": "AMD Ryzen 5 2600 Six-Core Processor",
      "usage": [ // Usage per thread
          {
              "user": 32,
              "nice": 0,
              "sys": 31,
              "idle": 234,
              "irq": 0,
              "total": 63
          },
          {
            // More threads
          },
          {
              "user": 0,
              "nice": 0,
              "sys": 0,
              "idle": 297,
              "irq": 0,
              "total": 0
          }
      ],
      "total": [ // Total usage per thread
          21,
          5,
          0,
          5,
          5,
          0,
          0,
          5,
          25,
          0,
          16,
          0
      ]
  }
```

#### Information:

```javascript
  let cpu = steroid.metrics.cpu('info');
```

**A normal response should be:**
```javascript
  {
    "manufacturer": "AMD",
    "brand": "Ryzen 5 2600 Six-Core Processor",
    "vendor": "AuthenticAMD",
    "family": "23",
    "model": "8",
    "stepping": "2",
    "revision": "2050",
    "voltage": "",
    "speed": 3.4,
    "speedMin": 3.4,
    "speedMax": 3.4,
    "governor": "",
    "cores": 12,
    "physicalCores": 6,
    "processors": 1,
    "socket": "AM4",
    "flags": "de pse tsc msr sep mtrr mca cmov psn clfsh ds mmx fxsr sse sse2 ss htt tm ia64 pbe",
    "virtualization": false,
    "cache": {
        "l1d": 288,
        "l1i": 288,
        "l2": 3145728,
        "l3": 16777216
    }
  }
```

> Currently, speed and voltage aren't processed correctly.

#### Temperature:

```javascript
  let cpu = steroid.metrics.cpu('temperature');
```

**A normal response should be:**
```javascript
  {
    "main": 38.5, // Main CPU temperature
    "cores": [ // Temperature per core
      45.1,
      ...,
      32.6
    ],
    "max": 56.1, // Max temperature registered since Steroid booted
    "socket": [ // Motherboard temperatures
      44.0,
      45.0,
      38.0,
      40.0,
      37.0,
      40.0
    ],
    "chipset": 43.0 // Chipset temperature
  }
```

> Currently, temperature is not working without UAC.

### GPU:

Returns all the GPU's important information.

```javascript
  let gpu = steroid.metrics.gpu();
```

**A normal response should be:**
```javascript
  [
    {
        "vendor": "NVIDIA",
        "model": "NVIDIA GeForce RTX 3060",
        "bus": "PCI",
        "vram": 12288,
        "vramDynamic": false,
        "subDeviceId": "0x263019DA",
        "driverVersion": "497.09",
        "name": "NVIDIA GeForce RTX 3060",
        "pciBus": "00000000:07:00.0",
        "memoryTotal": 12288,
        "memoryUsed": 1579,
        "memoryFree": 10709,
        "utilizationGpu": 6,
        "utilizationMemory": 9,
        "temperatureGpu": 47,
        "powerDraw": 18.53,
        "powerLimit": 170,
        "clockCore": 209,
        "clockMemory": 403
    }
  ]
```

> This function needs to be upgraded, too slow.

## Steroid Desktop App

### Introduction

Steroid's desktop application gives the extra support you need for web wallpapers and desktop widgets, giving you a native-like experience that allows you to recieve system information, metrics, details of your computer, execute programs and much more over an internal API communication.

#

### Desktop App Usage

Steroid's desktop app has it's own wrapper, `steroid-core.js`

#

## Tutorials

### Spotify Manual Setup

Spotify manual mode is only for those who can't synchronize Steroid with their account, due to region lock, or some issue related to their end.


- > **First, you have to access Steroid's Spotify Dashboard, by clicking [here](https://steroid-app.github.io/spotify.html).**

#

- > **Then, you must login on the Spotify Developers Dashboard.**

  > ![Spotify Dashboard Image](/images/spotify_dashboard_1.png)

#

- > **Accept terms and conditions.**

  > ![Spotify Dashboard Image](/images/spotify_dashboard_2.png)

#

- > **Once you logged in, click on "`Create An App`".**

  > ![Spotify Dashboard Image](/images/spotify_dashboard_3.png)

#

- > **Fill the form with the app name you want, and it's description. Accept it's terms and conditions and click on "`Create`".**

  > ![Spotify Dashboard Image](/images/spotify_dashboard_4.png)

#
- > **On the left side of the screen you are going to find your "`Client ID`" and "`Client Secret`" required on [Steroid's Spotify Dashboard](https://steroid-app.github.io/spotify.html). Copy them and paste it on the dashboard.**

  > ![Spotify Dashboard Image](/images/spotify_dashboard_5.png)

#

- > **Then click on "`Edit Settings`".**

  > ![Spotify Dashboard Image](/images/spotify_dashboard_6.png)

#

- > **And type the Redirect URIs of down below, click on "`Add`" and then on "`Save`".**

  > ![Spotify Dashboard Image](/images/spotify_dashboard_7.png)

#

- > **And finally, click on "`Activate Integration`".**

  > ![Spotify Dashboard Image](/images/spotify_dashboard_8.png)

#

- > **When it finishes, you will recieve your "`Refresh Token`".**

  > ![Spotify Dashboard Image](/images/spotify_dashboard_9.png)

#

- > **Now you can use Spotify Integration on your projects.**

#

## Credits
Steroid is heavily inspired on **[Rainmeter](https://www.rainmeter.net/)**, as an effort to provide a native-like service and experience for **[Wallpaper Engine](https://www.wallpaperengine.io)** users who would like to stay on the JavaScript side of the moon.

## License
[CC BY NC SA 4.0](LICENSE)