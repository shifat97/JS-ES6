const paymentSuccess = true;
const marks = 90;

const enroll = () => {
    console.log('Course enrollment in progress.');

    const promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve();
            } else {
                reject('Payment Failed!');
            }
        }, 3000);
    })

    return promise;
}

const progress = () => {
    console.log('Course on progress...');

    const promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            } else {
                reject('You do not have enough marks for certificate.');
            }
        }, 3000);
    })

    return promise;
}

const getCertificate = () => {
    console.log('Preparing your certificate...');

    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve('Congrats! You got the certificate.');
        }, 3000);
    });

    return promise;
}

async function course() {
    try {
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);
    } catch (err) {
        console.log(err);
    }
}

course();