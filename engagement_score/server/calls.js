// var request = new XMLHttpRequest();
// request.open('POST', 'https://[LOCATION]/vision/v1.0/describe?maxCandidates=1&language=en', true);
// request.setRequestHeader('Content-Type', 'application/json');
// request.setRequestHeader('Ocp-Apim-Subscription-Key', '[SUBSCRIPTION_KEY]');
// request.send(JSON.stringify({ "url": "[IMAGE_URL]" }));
// request.onload = function () {
//     var resp = request.responseText;
//     if (request.status >= 200 && request.status < 400) {
//         // Success!
//         console.log('Success!');
//     } else {
//         // We reached our target server, but it returned an error
//         console.error('Error!');
//     }

//     console.log(JSON.parse(resp));
// };

// request.onerror = function (e) {
//     console.log(e);
// };