window.onload = function(){

    const log = document.getElementById("log");

    const get_cpu_button = document.getElementById("get_cpu_button");
    const get_gpu_button = document.getElementById("get_gpu_button");
    const get_memory_button = document.getElementById("get_mem_button");
    const get_network_button = document.getElementById("get_network_button");
    const get_filesystem_button = document.getElementById("get_filesystem_button");

    const loop_cpu = document.getElementById("loop_cpu");
    const loop_gpu = document.getElementById("loop_gpu");
    const loop_memory = document.getElementById("loop_memory");
    const loop_network = document.getElementById("loop_network");
    const loop_filesystem = document.getElementById("loop_filesystem");

    const loop_timer = document.getElementById("loop_timer");

    const loop_service_button = document.getElementById("loop_service");

    const get_cpu = async function(){
        let response = await fetch("http://localhost:7666/cpu", {
            method: 'GET'
        }).then(res => {
            res.status === 200 ? res.json().then(res => log.innerText += JSON.stringify(res)) : false;
    })};
    const get_gpu = async function(){
        let response = await fetch("http://localhost:7666/gpu", {
            method: 'GET'
        }).then(res => {
            res.status === 200 ? res.json().then(res => log.innerText += JSON.stringify(res)) : false;
    })};
    const get_memory = async function(){
        let response = await fetch("http://localhost:7666/memory", {
            method: 'GET'
        }).then(res => {
            res.status === 200 ? res.json().then(res => log.innerText += JSON.stringify(res)) : false;
    })};
    const get_network = async function(){
        let response = await fetch("http://localhost:7666/network", {
            method: 'GET'
        }).then(res => {
            res.status === 200 ? res.json().then(res => log.innerText += JSON.stringify(res)) : false;
    })};
    const get_filesystem = async function(){
        let response = await fetch("http://localhost:7666/filesystem", {
            method: 'GET'
        }).then(res => {
            res.status === 200 ? res.json().then(res => log.innerText += JSON.stringify(res)) : false;
    })};

    get_cpu_button.onclick = get_cpu;
    get_gpu_button.onclick = get_gpu;
    get_memory_button.onclick = get_memory;
    get_network_button.onclick = get_network;
    get_filesystem_button.onclick = get_filesystem;

    let intervalFunction = async () => {
        log.innerText = "";
        if (loop_cpu.checked){
            get_cpu();
        };
        if (loop_gpu.checked){
            get_gpu();
        };
        if (loop_memory.checked){
            get_memory();
        };
        if (loop_network.checked){
            get_network();
        };
        if (loop_filesystem.checked){
            get_filesystem();
        };
    }

    let cycleAll = "";

    loop_service_button.onclick = async function(){
        if (this.value == 1){
            this.innerText = "Start"
            this.value = 0;
            clearInterval(cycleAll);
        } else {
            cycleAll = setInterval(intervalFunction, loop_timer.value);
            this.value = 1;
            this.innerText = "Stop"
        }
    };
    /*
    const socket = new WebSocket("ws://localhost:7665");
    socket.onopen = function(e) {
        console.log("[open] Connection established");
        console.log("Sending to server");
        socket.send(2);
    };

    socket.onmessage = function(event) {
        log.innerText = event.data;
    };

    socket.onclose = function(event) {
        if (event.wasClean) {
          console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
          // e.g. server process killed or network down
          // event.code is usually 1006 in this case
          console.log('[close] Connection died');
        }
    };

    socket.onerror = function(error) {
        console.log(`[error] ${error.message}`);
    };*/
};