/*
* Originality: https://github.com/fishingworld/something/blob/main/PanelScripts/surgepro_reloadprofile.js
*/


let params = getParams($argument)

!(async () => {

    // Fetch time
    let traffic = (await httpAPI("/v1/traffic", "GET"))
    let dateNow = new Date()
    let dateTime = Math.floor(traffic.startTime * 1000)
    let startTime = timeTransform(dateNow, dateTime)

    if ($trigger == "button") await httpAPI("/v1/profiles/reload");

    $done({
        title: "Surge Pro",
        content: `Started ${startTime} ago`,
        icon: params.icon,
        "icon-color": params.color
    });

})();

function timeTransform(dateNow, dateTime) {

    let dateDiff = dateNow - dateTime;
    let days = Math.floor(dateDiff / (24 * 3600 * 1000));  // days margin
    let leave1 = dateDiff % (24 * 3600 * 1000)
    let hours = Math.floor(leave1 / (3600 * 1000))  // hours margin

    let leave2 = leave1 % (3600 * 1000)
    let minutes = Math.floor(leave2 / (60 * 1000))  // minutes margin

    let leave3 = leave2 % (60 * 1000)
    let seconds = Math.round(leave3 / 1000)  // seconds margin

    if (days == 0) {

        if (hours == 0) {
            if (minutes == 0) return (`${seconds} s`);
            return (`${minutes} mins ${seconds} s`)
        }
        return (`${hours} hours ${minutes} mins ${seconds} s`)
    } else {
        return (`${days} days ${hours} hours ${minutes} mins`)
    }

}


function httpAPI(path = "", method = "POST", body = null) {
    return new Promise((resolve) => {
        $httpAPI(method, path, body, (result) => {
            resolve(result);
        });
    });
}

function getParams(param) {
    return Object.fromEntries(
        $argument
            .split("&")
            .map((item) => item.split("="))
            .map(([k, v]) => [k, decodeURIComponent(v)])
    );
}