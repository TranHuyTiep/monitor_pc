const si = require('systeminformation');
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')

module.exports = function (socket) {

    socket.on('login', function() {
        console.log('logged in')
    });

    setInterval(function(){
        si.currentLoad(function (data) {

        })
    }, 1000);
    client.on('connect', function () {
        client.subscribe('huytiep')
    })

    client.on('message', function (topic, message) {
        // message is Buffer
        var data_reve = (message.toString())
        data_reve = JSON.parse(data_reve)
        socket.emit('cpu_load',data_reve);
    })
};



