function rle(data) {
    let encoded = '';
    let count = 1;

    for (let i = 1; i <= data.length; i++) {
        if (data[i] === data[i - 1]) {
            count++;
        } else {
            encoded += count + data[i - 1];
            count = 1;
        }
    }
    return encoded;
}

function derle(data) {
    let decoded = '';
    let count = '';

    for (let i = 0; i < data.length; i++) {
        if (isNaN(data[i])) {
            decoded += data[i].repeat(parseInt(count));
            count = '';
        } else {
            count += data[i];
        }
    }
    return decoded;
}

const a = "AAAAABBBBCCCCCDDDDD";
const b1 = rle(a);
console.log(b1);

const b = derle(b1);
console.log(b);
