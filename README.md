<h1 align="center">steroid-wallpaper ⚡</h1>
<h3 align="center">Web wallpapers module</h3>

<h4 align="center">Web wallpapers module of <a href='https://steroid-app.github.io'>Steroid</a>, created to connect with <a href='https://github.io/ivanbogaeb/steroid-app'>steroid-app</a>, process AccuWeather details, Spotify automatically, PC statistics and give native execution support.</h4>

<br>
<br>

<h3 align="center">⚠️ This guide is unfinished! Please be patient, I am still uploading all it's content. ⚠️</h3>

<br>
<br>

## What is it made of?

- [TypeScript](https://github.com/microsoft/TypeScript) - TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
- [Node.js](https://github.com/nodejs/node) - JavaScript runtime built on Chrome's V8 JavaScript engine.

<br>

## Table of Contents:

  - [Features.](#features)
  - [To-do.](#to-do)
  - [Download.](#download)
  - [Installation.](#installation)
  - [How to use.](#how-to-use)
    - [Introduction.](#how-to-use)
    - [Functions.](#functions)
    - [Errors.](#errors)
  - [Reference](#reference)
      - [Initialize.](#initialize)
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
      - [Helpers.](#helpers)
        - [Cache.]()
        - [Server Status.]()
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
  - [Credits](#credits)
  - [License](#license)

<br>
<br>

## Features:

**Online**
- [x] Weather information.
- [x] Cloud settings backup.
- [x] Spotify playback and details.

**Offline**
- [x] Extense computer metrics.
- [x] Foreing program execution.
- [X] Real time computer information.

<br>
<br>

## To-do:

- [ ] *Notes and Schedules* (SOON).
- [ ] *Google Calendar synchronization* (SOON).
- [ ] *Browser extension connection* (SOON).

<br>
<br>

## Download:

If you want to download the latest version, you can do so by **[clicking here](https://github.com/ivanbogaeb/steroid-wallpaper/releases)**.

<br>
<br>

## Installation:

Steroid's browser module comes as a simple JavaScript file, called **`steroid-wallpaper.js`**. This file contains everything you need to communicate with our server, request data and also communicate with Steroid's app.

- Download the latest version.

- Drag and drop the `steroid-wallpaper.js` file where you have your HTML file.

- Add Steroid Wallpaper module to your HTML file:
  ```html
  <head>
    <...> Other stuff </...>
    <script type="text/javascript" src="steroid-wallpaper.js"></script> <!-- LIKE THIS -->
    <script type="text/javascript" src="your-script-here.js"></script>
  </head>
  ```
  > You can inform yourself about folder structures and where to put files **[here](https://medium.com/@nmayurashok/file-and-folder-structure-for-web-development-8c5c83810a5)**.
- Done.

> Steroid doesn't require any type of extension or framework, it's just a simple standalone library file. Keep in mind that it only works on your localhost domain, thanks to our CORS policy. This means that you can't set it up in your own website.

<br>
<br>

## How to use steroid-wallpaper:

#### Introduction:

Steroid is based on the K.I.S.S. principle *(Keep it simple, stupid)*.

There is no need to create complex and weird solutions for your wallpaper that might bug your head or keep you awake until 4 AM, we already did that for you! It works like a standalone JavaScript module, calling it's functions whenever you need them.

> Keep in mind that steroid-wallpaper is asynchronous.

#### Functions:

Steroid's functions are separated in two types:

  - **Online features:**
  With these features you can access content that might require you or not to connect with Steroid.
    - Login.
    - Spotify.
    - Weather.
    - Server notifications.
    - News and headlines **(Still on development)**.

<br>

  - **Offline features:**
  Offline features will be always available to you as long as you have Steroid's app installed on your PC.
    - Metrics.
    - Programs execution.
    - Schedule and Notes **(Still on development)**.
    - Widgets handler. **(Still on development)**.

#### Using steroid-wallpaper:

First of all, to run steroid you must create a JavaScript file and add it to your HTML file like explained in the [Installation section](#installation).

> It is recommended to learn HTML, CSS and JavaScript.

Once you created this file, it is recommended to wait until your HTML file and CSS loaded using the `window.onload` property. This way, every element that requires Steroid's information will be ready to work.

After this, Steroid will be automatically imported to your window global attributes, and calling it becomes a super easy task:

```javascript
window.onload = () => {
    
    const steroid = new Steroid(); // Creates a new steroid instance

    const authentication = async (user_id, wallpaper_token) => {
        let auth = await steroid.initialize(user_id, wallpaper_token); // You must log in to get your user information

        if (auth.success){
          return true;
        } else {
          alert(auth.error);
          return false;
        };
    };

    /*
        WHATEVER YOU WANT TO DO WITH THE AUTHENTICATION FUNCTION!
    */
};
```

> It is recommended to read first documentation about [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to understand how async and await works.

This way, you can work on your own code and forget about having to craft complex solutions for your wallpaper!

If you want to take a look at our testing platform and look at how to interact with every component, you can do so by **[clicking here]()**.

#### Errors:

Errors are a very common thing to handle and work on, in this case, Steroid works different than other modules and applications.

The idea behind this system, is that you as developer can have the flexibility to know which error you got and also it's own code. This way, you will be able to handle them in an efficient way and also will be easy to understand by the end user who doesn't know about coding.

|Function|Code|Description|
|---|---|---|
|---|---|---|
|**Initialize**|429|Too many login attempts, come back in a few minutes.|
||401|Your Username or Wallpaper Token might be incorrent, please check them on your Dashboard and restart your wallpaper.|
|---|---|---|
|**Spotify**|423|No authentication credentials were found.|
||401|Ooops, something went wrong with Spotify! Try reconnecting your account with Steroid.|
||503|Seems like Spotify is not working today, we hope it comes back in a few minutes.|
||428|You must activate this Spotify function before executing it.|
|---|---|---|
|**Weather**|423|No authentication credentials were found.|
||401||
||401||
||401||

<br>
<br>

## Reference

### Initialize

You don't have to constantly keep logging in with your password each time you install a wallpaper, that's why there is a **`wallpaper_token`** that is given in our website.

By calling **`steroid.initialize()`**, your account details will be verified with your **`wallpaper_token`** and **`user_id`**, to return your user information and details.
```javascript
let login_response = await steroid.verification();
```
**A normal response should be:**
```javascript
response: {
    success: true
}
```

<br>

### Weather

Steroid's Weather API works directly with **[AccuWeather API](https://developer.accuweather.com)**, calling it's server and requesting all the information you need, whenever you want. By doing so, your requests won't have any hard limits, and aren't tied to our server.

Steroid's Weather Forecast is super simple and easy to use. It has been implemented like this so you don't have to worry about forgetting your AccuWeather API token. We can store them in our server and it will be applied on any wallpaper you have that runs on Steroid.

It's highly customizable and easy to work with, you can access to it's memory, settings and cache to retrieve data or modify anything you would need.

> You can check the AccuWeather API Documentation by clicking: **[here](https://developer.accuweather.com/apis)**.

<br>

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

<br>

#### Current conditions:
Requests current weather information around your location.
```javascript
let current_weather = await steroid.weather.current();
```

> You must have already saved your location and API token on Steroid's webpage.
> By default, this function will prevent you from calling it in less than an hour.

<br>

#### Forecast information:
Requests an extense weather forecast of your current location.
```javascript
let forecast_weather = await steroid.weather.forecast();
```

> You must have already saved your location and API token on Steroid's webpage.
> By default, Steroid will request a weather forecast of 3 days, and it will prevent you from calling it in less than four hours.

<br>

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

<br>

#### Timer reset:
This function will reset steroid's internal timer, to allow you to request new weather details. It will simply return a **`true/false`** response.
```javascript
let timer_reset = await steroid.weather.timerReset();
```

<br>

#### Set forecast days:
This function will change steroid's forecast limit. It will simply return a **`true/false`** response.
```javascript
let timer_reset = await steroid.weather.setForecastDays(days);
```

<br>

#### Weather condition icons:
Accessing to this variable will give you all the icon codes and names used by AccuWeather.
```javascript
let icons = steroid.weather.icons;
let rain_icon = steroid.weather.icons[18];
```

<br>
<br>

### Spotify

To use it, you must first sign in your account, linking Steroid with Spotify in the **[Dashboard](https://steroid-app.github.io/#login)**. This way, your **`refresh_token`** will be stored in our server, and you won't have to worry about boring processes.

This special token, can be used to request something called **`access_token`**, that is needed to request information from Spotify's servers, modify your playback state and get it's status.

> This method requires you to be logged in with **[Login](#login)** function to store your **`refresh_token`** and other variables.

<br>

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
And, if you want to access it's song memory for any desired reason, you can do so by:
```javascript
let spotify_cache = steroid.spotify.song();
```

<br>

#### Login with Spotify:
To login with Spotify and get all the needed tokens to use it, you must access by calling this function:
```javascript
let spotify_login = await steroid.spotify.access();
```
And as response, you should get:
```javascript
{success: true}
```

<br>

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

<br>

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

<br>
<br>

### Helpers

#### Server status
Calling our web API and knowing Steroid's status is as simple as this:
```javascript
  let hello = await steroid.hello(); // Call Steroid API to request server status.
```
**This call will return a simple boolean:**
```javascript
{ success: true }
```
This response will give you and idea if the service is running or not.

<br>
<br>

### News API

> For now this function isn't available, but it will be when finished.

<br>
<br>

## Metrics

Steroid metrics are coming directly from the desktop app throught it's independent local API and processed by it's browser module.

<br>
<br>

## Credits

Steroid is heavily inspired on **[Rainmeter](https://www.rainmeter.net/)**, as an effort to provide a native-like service and experience for **[Wallpaper Engine](https://www.wallpaperengine.io)** users who would like to stay on the JavaScript side of the moon.

## License

[CC BY NC SA 4.0](LICENSE)
