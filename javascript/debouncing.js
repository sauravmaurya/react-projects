const defaultDiv = document.getElementById("default")
const debounceDiv = document.getElementById("debounce")
const throttleDiv = document.getElementById("throttle")
const input = document.querySelector("input")
console.log(input, defaultDiv, debounceDiv, throttleDiv)

input.addEventListener("input", (e) => {
    defaultDiv.textContent = e.target.value
    updateddebounceText(e.target.value)
    updatedTextFunction(e.target.value)
})

const updateddebounceText = debounce((text) => {
    debounceDiv.textContent = text
}, 1000)



function debounce(call, d) {
    let timer;
    return function () {
        let context = this;
        args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            call.apply(context, args)
        }, d);
    }
}


const updatedTextFunction = throttle((text) => {
    throttleDiv.textContent = text
}, 500)



function throttle(call, d) {
    let flag = true;
    return function (...args) {
        if (flag) {
            // call.apply(context, args)
            call(...args)
            flag = false;
            setTimeout(() => {
                flag = true;
            }, d)
        }
    }
}

let counter = 0
function getData() {
    counter += 1
    console.log("fetching")
}

