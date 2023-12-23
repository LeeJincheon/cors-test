const btnGet = document.getElementById('btn-get');
const btnPost = document.getElementById('btn-post');

btnGet.addEventListener('click', () => {
    fetch('http://localhost:4400', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => {
        console.log(res);
    });
});

btnPost.addEventListener('click', () => {
    fetch('http://localhost:4400', {
        method: 'POST',
        // mode: 'no-cors',
        // credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'hello post' })
    }).then(res => {
        console.log(res);
    });
});