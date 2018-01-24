var mqtt = require('mqtt')
const si = require('systeminformation');

var client  = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
    setInterval(function () {
        si.currentLoad(function (data) {
            var data_list = {data: Math.floor(data.currentload)}
            data_list = JSON.stringify(data_list)
            client.publish('huytiep',data_list)
        })

    },1000)

})
client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
})