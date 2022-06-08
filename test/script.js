window.onload = async function(){

    const steroid = new Steroid();

    const log = document.getElementById("log");

    const auth_button = document.getElementById("auth_button");
    const spotify_access_button = document.getElementById("spotify_access_button");
    const spotify_play_button = document.getElementById("spotify_play_button");

    const spotify_progress = document.getElementById("spotify_progress");
    const spotify_create_cover = document.getElementById("spotify_create_cover");
    const spotify_process_timestamp = document.getElementById("spotify_process_timestamp");

    const spotify_auto_playback = document.getElementById("spotify_auto_playback");

    steroid.spotify.settings.progress = spotify_progress.checked;
    steroid.spotify.settings.create_cover = spotify_create_cover.checked;
    steroid.spotify.settings.process_timeStamp = spotify_process_timestamp.checked;

    const weather_city_button = document.getElementById("weather_city_button");
    const weather_crnt_button = document.getElementById("weather_crnt_button");
    const weather_cast_button = document.getElementById("weather_cast_button");

    const spotify_song_name = document.getElementById("spotify_song_name");
    const spotify_song_duration = document.getElementById("spotify_song_duration");
    const spotify_song_progress = document.getElementById("spotify_song_progress");
    const spotify_song_status = document.getElementById("spotify_song_status");
    const spotify_cover = document.getElementById("spotify_cover");

    const logData = (data) => {
        log.innerHTML = `<pre><code>${JSON.stringify(data)}</code></pre><br><br>`;
    }

    authFunction = async () => {
        let temp = await steroid.initialize(
            document.getElementById("user_id").value,
            document.getElementById("wallpaper_token").value
        );
        logData(temp);
    }

    // LOGIN
    auth_button.onclick = authFunction;

    // SPOTIFY
    let spotifyPlaybackFunction = async () => {
        let temp = await steroid.spotify.playback();
        if (temp?.songChanged){
            spotify_song_name.innerText = temp.name + " - " + temp.album + " - " + temp.artist;
            if (temp.cover.base64 !== ""){
                spotify_cover.setAttribute('src', temp.cover.base64);
            };
        };
        if (temp?.duration){
            spotify_song_duration.innerText =  temp.progress.time + " - " + temp.duration.time;
        };
        if (temp?.progress){
            spotify_song_progress.innerText =  temp.progress.ms + " - " + temp.duration.ms;
        };
        if (temp?.play){
            spotify_song_status.innerText = "Playing";
        } else {
            spotify_song_status.innerText = "Paused";
        };
        if (temp.stop){
            spotify_song_status.innerText = "Stopped";
        };
        if (temp?.error){
            // Do something!
        }
    };

    spotify_access_button.onclick = async function(){
        let temp = await steroid.spotify.access();
        logData(temp);
    };
    spotify_play_button.onclick = async function(){
        let temp = await steroid.spotify.playback();
        logData(temp);
    };
    spotify_auto_playback.onclick = async function(){
        if (this.value == 0){
            this.value = 1;
            this.innerText = "Auto (On)";
            await authFunction();
            cycleAll = setInterval(spotifyPlaybackFunction, steroid.spotify.settings.interval);
        } else {
            this.value = 0;
            this.innerText = "Auto (Off)";
            clearInterval(cycleAll);
        }
    };
    spotify_progress.onclick = function(){
        steroid.spotify.settings.progress = spotify_progress.checked;
    };
    spotify_create_cover.onclick = function(){
        steroid.spotify.settings.create_cover = spotify_create_cover.checked;
    };
    spotify_process_timestamp.onclick = function(){
        steroid.spotify.settings.process_timeStamp = spotify_process_timestamp.checked;
    };

    // WEATHER
    weather_crnt_button.onclick = async function(){
        let temp = await steroid.weather.current();
        logData(temp);
    };
    weather_cast_button.onclick = async function(){
        let temp = await steroid.weather.forecast();
        logData(temp);
    };

    weather_city_button.onclick = async function(){
        let temp = await steroid.weather.city();
        logData(temp);
    };
}