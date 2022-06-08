const data = new Steroid();

async function test() {
    console.log(await data.initialize("ivanbogdasaebersold@live.com.ar", "536c0b598ce840208660609ee16c89285424851ce660670a938e5ee645f3db04f1838668566a22b014f1bcbd5dd620f4911e61ea58590092473a15f095b19e2e"));

    console.log(await data.spotify.playback());
}

test();