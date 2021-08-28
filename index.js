let input = document.getElementById('phraseId');

// click on go button 
document.getElementById('goId').addEventListener('click', function () {
    splitIt(input.value);
    input.value = ''
})

// get sentense and do split 

function splitIt(sentence) {
    const splitArray = sentence.split(' ');
    const reverse = (splitArray.reverse());
    reverseArray(reverse);
}

//add button
reverseArray = data => {
    for (const value of data) {
        const container = document.getElementById('reverseContainer');
        const span = document.createElement('span');
        span.innerHTML = `
        <button class="m-2 text-danger" onclick="clickBt('${value}')">${value}</button>
        `
        container.appendChild(span);
    }
}

function clickBt(value) {
    const filter = document.getElementById('filterId')
    filter.value = value;
}

