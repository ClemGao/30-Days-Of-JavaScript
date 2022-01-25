let text =
    'I love teaching and empowering people.\
 I teach HTML, CSS, JS, React, Python.';

for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) < 65 || text.charCodeAt(i) > 122) {
        text = text.substr(0, i).concat(' ').concat(text.substring(i + 1, text.length));
    }
}

const arr = text.split(' ');
console.log(arr);