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

let RU = [
    {isTrusted: true, code: 'Backquote', key: 'ё', keyCode: 192, which: 192},
    {isTrusted: true, code: 'KeyQ', key: 'й', keyCode: 81, which: 81},
    {isTrusted: true, code: 'KeyW', key: 'ц', keyCode: 87, which: 87},
    {isTrusted: true, code: 'KeyE', key: 'у', keyCode: 69, which: 69},
    {isTrusted: true, code: 'KeyR', key: 'к', keyCode: 82, which: 82},
    {isTrusted: true, code: 'KeyT', key: 'е', keyCode: 84, which: 84},
    {isTrusted: true, code: 'KeyY', key: 'н', keyCode: 89, which: 89},
    {isTrusted: true, code: 'KeyU', key: 'г', keyCode: 85, which: 85},
    {isTrusted: true, code: 'KeyI', key: 'ш', keyCode: 73, which: 73},
    {isTrusted: true, code: 'KeyO', key: 'щ', keyCode: 79, which: 79},
    {isTrusted: true, code: 'KeyP', key: 'з', keyCode: 80, which: 80},
    {isTrusted: true, code: 'BracketLeft', key: 'х', keyCode: 219, which: 219},
    {isTrusted: true, code: 'BracketRight', key: 'ъ', keyCode: 221, which: 221},
    {isTrusted: true, code: 'KeyA', key: 'ф', keyCode: 65, which: 65},
    {isTrusted: true, code: 'KeyS', key: 'ы', keyCode: 83, which: 83},
    {isTrusted: true, code: 'KeyD', key: 'в', keyCode: 68, which: 68},
    {isTrusted: true, code: 'KeyF', key: 'а', keyCode: 70, which: 70},
    {isTrusted: true, code: 'KeyG', key: 'п', keyCode: 71, which: 71},
    {isTrusted: true, code: 'KeyH', key: 'р', keyCode: 72, which: 72},
    {isTrusted: true, code: 'KeyJ', key: 'о', keyCode: 74, which: 74},
    {isTrusted: true, code: 'KeyK', key: 'л', keyCode: 75, which: 75},
    {isTrusted: true, code: 'KeyL', key: 'д', keyCode: 76, which: 76},
    {isTrusted: true, code: 'Semicolon', key: 'ж', keyCode: 186, which: 186},
    {isTrusted: true, code: 'Quote', key: 'э', keyCode: 222, which: 222},
    {isTrusted: true, code: 'KeyZ', key: 'я', keyCode: 90, which: 90},
    {isTrusted: true, code: 'KeyX', key: 'ч', keyCode: 88, which: 88},
    {isTrusted: true, code: 'KeyC', key: 'с', keyCode: 67, which: 67},
    {isTrusted: true, code: 'KeyV', key: 'м', keyCode: 86, which: 86},
    {isTrusted: true, code: 'KeyB', key: 'и', keyCode: 66, which: 66},
    {isTrusted: true, code: 'KeyN', key: 'т', keyCode: 78, which: 78},
    {isTrusted: true, code: 'KeyM', key: 'ь', keyCode: 77, which: 77},
    {isTrusted: true, code: 'Comma', key: 'б', keyCode: 188, which: 188},
    {isTrusted: true, code: 'Period', key: 'ю', keyCode: 190, which: 190},
    {isTrusted: true, code: 'Slash', key: '.', keyCode: 191, which: 191}
]

let EN = [
    {isTrusted: true, code: 'Backquote', key: '`', keyCode: 192, which: 192},
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
    {isTrusted: true, code: 'KeyA', key: 'a', keyCode: 65, which: 65},
    {isTrusted: true, code: 'KeyS', key: 's', keyCode: 83, which: 83},
    {isTrusted: true, code: 'KeyD', key: 'd', keyCode: 68, which: 68},
    {isTrusted: true, code: 'KeyF', key: 'f', keyCode: 70, which: 70},
    {isTrusted: true, code: 'KeyG', key: 'g', keyCode: 71, which: 71},
    {isTrusted: true, code: 'KeyH', key: 'h', keyCode: 72, which: 72},
    {isTrusted: true, code: 'KeyJ', key: 'j', keyCode: 74, which: 74},
    {isTrusted: true, code: 'KeyK', key: 'k', keyCode: 75, which: 75},
    {isTrusted: true, code: 'KeyL', key: 'l', keyCode: 76, which: 76},
    {isTrusted: true, code: 'Semicolon', key: ';', keyCode: 186, which: 186},
    {isTrusted: true, code: 'Quote', key: "'", keyCode: 222, which: 222},
    {isTrusted: true, code: 'KeyZ', key: 'z', keyCode: 90, which: 90},
    {isTrusted: true, code: 'KeyX', key: 'x', keyCode: 88, which: 88},
    {isTrusted: true, code: 'KeyC', key: 'c', keyCode: 67, which: 67},
    {isTrusted: true, code: 'KeyV', key: 'v', keyCode: 86, which: 86},
    {isTrusted: true, code: 'KeyB', key: 'b', keyCode: 66, which: 66},
    {isTrusted: true, code: 'KeyN', key: 'n', keyCode: 78, which: 78},
    {isTrusted: true, code: 'KeyM', key: 'm', keyCode: 77, which: 77},
    {isTrusted: true, code: 'Comma', key: ',', keyCode: 188, which: 188},
    {isTrusted: true, code: 'Period', key: '.', keyCode: 190, which: 190},
    {isTrusted: true, code: 'Slash', key: '/', keyCode: 191, which: 191}
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

function render() {
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

    let keysElem = document.querySelectorAll('.keys-elem')
    let savedElem = JSON.parse(localStorage.getItem('toggle-lang'))

    if (!savedElem) {
        localStorage.setItem('toggle-lang', JSON.stringify(EN))
        localStorage.setItem('lang', 'EN')
    }
    else {
        keysElem.forEach(el => {
            for (let i = 0; i < savedElem.length; i++) {
                if (el.getAttribute('val') === savedElem[i].code) {
                    el.firstChild.textContent = savedElem[i].key
                }
            }   
        })
    }
}

render()

let textForArea = document.getElementsByTagName('textarea')[0]


function clickOnVK(event) {
    let target = event.target.closest('.keys-elem')
    // console.log(event.target);
    if (!keysSwitch(event, target.getAttribute('val'))) {
        // console.log(!keysSwitch(event, target.getAttribute('val')));
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


function changeLang() {
    let keysElem = document.querySelectorAll('.keys-elem')
    if (localStorage.getItem('lang') === 'EN') {
        keysElem.forEach(el => {
            for (let i = 0; i < RU.length; i++) {
                if (el.getAttribute('val') === RU[i].code) {
                    el.firstChild.textContent = RU[i].key
                }
            }   
        })
        localStorage.setItem('toggle-lang', JSON.stringify(RU))
        localStorage.setItem('lang', 'RU')
    }
    else {
        if (localStorage.getItem('lang') === 'RU') {
            keysElem.forEach(el => {
                for (let i = 0; i < EN.length; i++) {
                    if (el.getAttribute('val') === EN[i].code) {
                        el.firstChild.textContent = EN[i].key
                    }
                }
            })
            localStorage.setItem('toggle-lang', JSON.stringify(EN))
            localStorage.setItem('lang', 'EN')
        }
    }
    return true
}


let tmp = []
function keyPress(event) {
    let elemKey = keyboard.querySelectorAll('.keys-elem')
    console.log(event);
    elemKey.forEach(el => {
        if (event.code === el.getAttribute('val')) {
            el.classList.add('bgcolor-active')
        }
    })
    if (event.key === 'Shift' && event.altKey) {
        changeLang()
    }
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

function changeLangOnVK(event) {
    let target = event.target.closest('.keys-elem')
    if (target.getAttribute('val') === 'AltRight' && stack.length < 1 || target.getAttribute('val') === 'AltLeft' && stack.length < 1) {
        stack.push(target.getAttribute('val'))
        return true
    }
    // console.log(!!stack.length, stack);
    if (stack.length && target.getAttribute('val') === "ShiftRight" || stack.length && target.getAttribute('val') === "ShiftLeft") {
        changeLang()
        stack.pop()
    }
    if (stack.length) {
        stack.pop()    
    }     
}

function backSpace() {
    let val = textForArea.value.split('')
    val.splice(textForArea.selectionStart - 1, 1)
    let start = textForArea.selectionStart - 1
    let end = textForArea.selectionEnd - 1
    textForArea.value = val.join('')
    textForArea.selectionStart = start
    textForArea.selectionEnd = end
    return true
}

function removeDel() {
    let val = textForArea.value.split('')
    val.splice(textForArea.selectionStart, 1)
    let start = textForArea.selectionStart
    let end = textForArea.selectionEnd
    textForArea.value = val.join('')
    textForArea.selectionStart = start
    textForArea.selectionEnd = end
    return true
}

function enter() {
    textForArea.value += '\n'
    return true
}


function arrow(key) {
    // let i = 0
    // // textForArea.selectionStart = textForArea.selectionStart
    
    // let text = textForArea.value.split('')
    // let idxText = text.findIndex(el => el == '\n')
    // text.forEach((el) => {
    //     if (el == '\n') {
    //         idxEnter++
    //     }
    // })

    switch (key) {
        case 'left':
            textForArea.selectionStart = textForArea.selectionStart - 1
            textForArea.selectionEnd = textForArea.selectionEnd - 1
            return true;
    
        case 'right':
            textForArea.selectionStart = textForArea.selectionStart + 1
            return true;

        // case 'down':
            

        //     while (i < idxEnter) {
        //         textForArea.selectionStart = idxText + i
        //         i++              
        //     }
            
            
        //     console.log(idxText);
        //     // textForArea.selectionEnd = '\n' + 1
        //     return true;

        // case 'up':
        //     // text.forEach((el) => {
        //     //     if (el == '\n') {
        //     //         idxEnter++
        //     //     }
        //     // })

        //     while (i < idxEnter) {
        //         textForArea.selectionStart = idxText - i
        //         i++
        //     }
            
            
        //     console.log(idxText);
        //     // textForArea.selectionEnd = '\n' + 1
        //     return true;
        default:
            break;
    }
}

let stack = []
function keysSwitch(event, code) {
    changeLangOnVK(event)
    
    switch (code) {
        case 'CapsLock': return capsLock();
        case 'AltRight': return true
        case 'AltLeft': return true
        case 'ShiftRight': return true
        case 'ShiftLeft': return true
        case 'ControlLeft': return true
        case 'ControlRight': return true
        case 'MetaLeft': return true
        case 'Backspace': return backSpace()
        case 'Delete': return removeDel()
        case 'Enter': return enter()
        case 'Space': return true
        case 'ArrowUp': return true
        case 'ArrowDown': return true
        case 'ArrowLeft': return arrow('left')
        case 'ArrowRight': return arrow('right')


    
        default:
            break;
    }
}



// textForArea.addEventListener('input', function (event) {
//     console.log(event);
// })

keyboard.addEventListener('click', clickOnVK)

document.addEventListener('keydown', keyPress)
document.addEventListener('keyup', keyUp)