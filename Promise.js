let myPromise = new Promise((resolve, reject) => {
    let result = 2;
    if (result == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

myPromise
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    })