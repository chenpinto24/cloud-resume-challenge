const counter = document.querySelector('.counter');
async function getCounter() {
    let response = await fetch('https://hr2kppjk4jf5kh2ejlriu7yyaq0ouuqt.lambda-url.eu-central-1.on.aws/');
    let data = await response.json();
    counter.innerHTML = 'Views: '+data;
}
getCounter();