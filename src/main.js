import './styles/styles.css';

let keys = [
    [
        {isTrusted: true, code: 'Backquote', key: '`', keyCode: 192, which: 192},
        {isTrusted: true, code: 'Digit1', key: '1', keyCode: 49, which: 49},
        {isTrusted: true, code: 'Digit2', key: '2', keyCode: 50, which: 50},
        {isTrusted: true, code: 'Digit3', key: '3', keyCode: 51, which: 51},
        {isTrusted: true, code: 'Digit4', key: '4', keyCode: 52, which: 52},
        {isTrusted: true, code: 'Digit5', key: '5', keyCode: 53, which: 53},
        {isTrusted: true, code: 'Digit6', key: '6', keyCode: 54, which: 54},
        {isTrusted: true, code: 'Digit7', key: '7', keyCode: 55, which: 55},
        {isTrusted: true, code: 'Digit8', key: '8', keyCode: 56, which: 56},
        {isTrusted: true, code: 'Digit9', key: '9', keyCode: 57, which: 57},
        {isTrusted: true, code: 'Digit0', key: '0', keyCode: 48, which: 48},
        {isTrusted: true, code: 'Minus', key: '-', keyCode: 189, which: 189},
        {isTrusted: true, code: 'Equal', key: '=', keyCode: 187, which: 187},
        {isTrusted: true, code: 'Backspace', key: 'Backspace', keyCode: 8, which: 8},
    ],
    [
        {isTrusted: true, code: 'Tab', key: 'Tab', keyCode: 9, which: 9},
        {isTrusted: true, code: 'KeyQ', key: 'q', keyCode: 81, which: 81},
        {isTrusted: true, code: 'KeyW', key: 'w', keyCode: 87, which: 87},
        {isTrusted: true, code: 'KeyE', key: 'e', keyCode: 69, which: 69},
        {isTrusted: true, code: 'KeyR', key: 'r', keyCode: 82, which: 82},
        {isTrusted: true, code: 'KeyT', key: 't', keyCode: 84, which: 84},
        {isTrusted: true, code: 'KeyY', key: 'y', keyCode: 89, which: 89},
        {isTrusted: true, code: 'KeyU', key: 'u', keyCode: 85, which: 85},
        {isTrusted: true, code: 'KeyI', key: 'i', keyCode: 73, which: 73},
        {isTrusted: true, code: 'KeyO', key: 'o', keyCode: 79, which: 79},
        {isTrusted: true, code: 'KeyP', key: 'p', keyCode: 80, which: 80},
        {isTrusted: true, code: 'BracketLeft', key: '[', keyCode: 219, which: 219},
        {isTrusted: true, code: 'BracketRight', key: ']', keyCode: 221, which: 221},
        {isTrusted: true, code: 'Backslash', key: '\\', keyCode: 220, which: 220},
        {isTrusted: true, code: 'Delete', key: 'Delete', keyCode: 46, which: 46},
    ],
    [
        {isTrusted: true, code: 'CapsLock', key: 'CapsLock', keyCode: 20, which: 20},
        {isTrusted: true, code: 'KeyA', key: 'A', keyCode: 65, which: 65},
        {isTrusted: true, code: 'KeyS', key: 'S', keyCode: 83, which: 83},
        {isTrusted: true, code: 'KeyD', key: 'D', keyCode: 68, which: 68},
        {isTrusted: true, code: 'KeyF', key: 'F', keyCode: 70, which: 70},
        {isTrusted: true, code: 'KeyG', key: 'G', keyCode: 71, which: 71},
        {isTrusted: true, code: 'KeyH', key: 'H', keyCode: 72, which: 72},
        {isTrusted: true, code: 'KeyJ', key: 'J', keyCode: 74, which: 74},
        {isTrusted: true, code: 'KeyK', key: 'K', keyCode: 75, which: 75},
        {isTrusted: true, code: 'KeyL', key: 'L', keyCode: 76, which: 76},
        {isTrusted: true, code: 'Semicolon', key: ';', keyCode: 186, which: 186},
        {isTrusted: true, code: 'Quote', key: "'", keyCode: 222, which: 222},
        {isTrusted: true, code: 'Enter', key: 'Enter', keyCode: 13, which: 13},
    ],
    [
        {isTrusted: true, code: 'ShiftLeft', key: 'Shift', keyCode: 16, which: 16},
        {isTrusted: true, code: 'Backslash', key: '\\', keyCode: 220, which: 220},
        {isTrusted: true, code: 'KeyZ', key: 'Z', keyCode: 90, which: 90},
        {isTrusted: true, code: 'KeyX', key: 'X', keyCode: 88, which: 88},
        {isTrusted: true, code: 'KeyC', key: 'C', keyCode: 67, which: 67},
        {isTrusted: true, code: 'KeyV', key: 'V', keyCode: 86, which: 86},
        {isTrusted: true, code: 'KeyB', key: 'B', keyCode: 66, which: 66},
        {isTrusted: true, code: 'KeyN', key: 'N', keyCode: 78, which: 78},
        {isTrusted: true, code: 'KeyM', key: 'M', keyCode: 77, which: 77},
        {isTrusted: true, code: 'Comma', key: ',', keyCode: 188, which: 188},
        {isTrusted: true, code: 'Period', key: '.', keyCode: 190, which: 190},
        {isTrusted: true, code: 'Slash', key: '/', keyCode: 191, which: 191},
        {isTrusted: true, code: 'ArrowUp', key: 'ArrowUp', keyCode: 38, which: 38},
        {isTrusted: true, code: 'ShiftRight', key: 'Shift', keyCode: 16, which: 16},
    ],
    [
        {isTrusted: true, code: 'ControlLeft', key: 'Control', keyCode: 17, which: 17},
        {isTrusted: true, code: 'MetaLeft', key: 'Meta', keyCode: 91, which: 91},
        {isTrusted: true, code: 'AltLeft', key: 'Alt', keyCode: 18, which: 18},
        {isTrusted: true, code: 'Space', key: ' ', keyCode: 32, which: 32},
        {isTrusted: true, code: 'AltRight', key: 'Alt', keyCode: 18, which: 18},
        {isTrusted: true, code: 'ControlRight', key: 'Control', keyCode: 17, which: 17},
        {isTrusted: true, code: 'ArrowLeft', key: 'ArrowLeft', keyCode: 37, which: 37},
        {isTrusted: true, code: 'ArrowDown', key: 'ArrowDown', keyCode: 40, which: 40},
        {isTrusted: true, code: 'ArrowRight', key: 'ArrowRight', keyCode: 39, which: 39}
    ]
]

let container = document.querySelector('.container')
let keyboard = document.createElement('div')
let textarea = document.createElement('textarea')

function upFirst(str) {
    if (!str) return str

    return str.toLowerCase()
}


keyboard.classList.add('keyboard')
textarea.classList.add('textarea')
container.append(textarea, keyboard)

for (let i = 0; i < keys.length; i++) {
    let keyboardRow = document.createElement('div')
    keyboardRow.classList.add('keyboard-row', `keyboard-row-${i}`)

    for (let j = 0; j < keys[i].length; j++) { 
        let elemKey = keys[i][j]

        let out = document.createElement('div')
        out.classList.add('keys-elem', elemKey.code)
        out.setAttribute('val', elemKey.code)
        out.innerHTML += `<h4>${upFirst(elemKey.key)}</h4>`
        keyboardRow.append(out)
        
        if (elemKey.code !== `Key${elemKey.key.toUpperCase()}` && elemKey.code !== `Digit${elemKey.key.toUpperCase()}`) {
            out.classList.add('dark-bgcolor')
        }
        
    }
    keyboard.append(keyboardRow)
    
}

let textForArea = document.getElementsByTagName('textarea')[0]


function clickOnVK(event) {
    let target = event.target.closest('.keys-elem')
    // console.log(target.firstChild);
    if (!keysSwitch(target.getAttribute('val'))) {
        textForArea.value += target.firstChild.textContent
    }
    textForArea.focus()
    
    if (target.getAttribute('val')) {
        setColor(target.getAttribute('val'))
    }
    setTimeout(() => {
        removeColor(target.getAttribute('val'))
    }, 100)
}

function setColor(event) {
    let elemKey = keyboard.querySelectorAll('.keys-elem')
    elemKey.forEach(el => {
        if (event === el.getAttribute('val')) {
            el.classList.add('bgcolor-active')
        }
    })
}

function removeColor(event) {
    let elemKey = keyboard.querySelectorAll('.keys-elem')
    elemKey.forEach(el => {
        if (event === el.getAttribute('val')) {
            el.classList.remove('bgcolor-active')
        }
    })
}



function keyPress(event) {
    let elemKey = keyboard.querySelectorAll('.keys-elem')
    elemKey.forEach(el => {
        // console.log(el.getAttribute('val'));
        if (event.code === el.getAttribute('val')) {
            el.classList.add('bgcolor-active')
        }
    })
}

function keyUp(event) {
    let elemKey = keyboard.querySelectorAll('.keys-elem')
    elemKey.forEach(el => {
        if (event.code === el.getAttribute('val')) {
            el.classList.remove('bgcolor-active')
        }
    })
}

function capsLock() { 
    let elemKey = keyboard.querySelectorAll('.keys-elem')

    elemKey.forEach(el => {
        if (el.firstChild.textContent === el.firstChild.textContent.toLowerCase()) {
            el.firstChild.textContent = el.firstChild.textContent.toUpperCase()
        }
        else {
            el.firstChild.textContent = el.firstChild.textContent.toLowerCase()
        }        
    })
    
    return true
}

function keysSwitch(code) {
    switch (code) {
        case 'CapsLock': return capsLock()
    
        default:
            break;
    }
}




keyboard.addEventListener('click', clickOnVK)

document.addEventListener('keydown', keyPress)
document.addEventListener('keyup', keyUp)