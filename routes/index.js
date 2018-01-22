var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//
// const si = require('systeminformation');
//
// // callback style
// si.cpu(function(data) {
//     console.log('CPU-Information:');
//     console.log(data);
// });
//
// si.cpuTemperature(function (data) {
//     console.log('Temperature');
//     console.log(data);
// })
//
//
// // promises style - new in version 3
// si.cpu()
//     .then(data => console.log(data))
// .catch(error => console.error(error));
//
// // full async / await example (node >= 7.6)
// async function cpu() {
//     try {
//         const data = await si.cpu();
//         console.log(data)
//     } catch (e) {
//         console.log(e)
//     }
// }

// setInterval(function(){
//     si.cpuTemperature(function (data) {
//         // console.log('Temperature');
//         console.log(data);
//     })
// }, 3000);

module.exports = router;
