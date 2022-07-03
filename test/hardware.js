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

    const enable_log = document.getElementById("enable_log");

    const APIRequest = async (hardware) => {
        let url = `http://localhost:7666/${hardware}`;
        let response = await fetch(url, {
            method: 'GET'
        }).then(res => {
            res.status === 200 ? res.json().then(res => {
                if (enable_log.checked){
                    log.innerText += JSON.stringify(res)
                };
            }) : false;
        });
    };

    get_cpu_button.onclick = () => {APIRequest('cpu');};
    get_gpu_button.onclick = () => {APIRequest('gpu');};
    get_memory_button.onclick = () => {APIRequest('memory');};
    get_network_button.onclick = () => {APIRequest('network');};
    get_filesystem_button.onclick = () => {APIRequest('filesystem');};

    let intervalFunction = async () => {
        if (loop_cpu.checked){
            APIRequest('cpu');
        };
        if (loop_gpu.checked){
            APIRequest('gpu');
        };
        if (loop_memory.checked){
            APIRequest('memory');
        };
        if (loop_network.checked){
            APIRequest('network');
        };
        if (loop_filesystem.checked){
            APIRequest('filesystem');
        };
    };

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
        };
    };
};