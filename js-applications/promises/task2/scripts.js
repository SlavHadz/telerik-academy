var promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        document.getElementById('pop-up').innerHTML = 'Redirecting...';
        resolve();
    }, 2000);
});

promise.then(() => {
    document.location.replace('https://www.sportal.bg/');
});