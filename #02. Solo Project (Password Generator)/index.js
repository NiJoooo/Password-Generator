// Requirements
// 1. Array to hold all possible chars
// 2. Button to generate 4 random password options
// 3. Display password options
// 4_Stretch. ability to set the password length
// 5_Stretch. 1-click copy password to the clipboard
/* hint: use <input type="text"> to display the password options */


let random1Pw = document.querySelector("#random1-pw")
let random2Pw = document.querySelector("#random2-pw")
let random3Pw = document.querySelector("#random3-pw")
let random4Pw = document.querySelector("#random4-pw")

const chars = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/",","
]
let passwordLength = 12

function getRandomCharacter(){
    let randomChar = Math.floor(Math.random()*chars.length)
    return chars[randomChar]
}
console.log(getRandomCharacter())

function generateRandomPassword(){
    let randomPassword = ""     //string
    for(let i=0; i < passwordLength; i++){
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}


function generatePw(){
    random1Pw.textContent = generateRandomPassword()
    random2Pw.textContent = generateRandomPassword()
    random3Pw.textContent = generateRandomPassword()
    random4Pw.textContent = generateRandomPassword()
}



function selfCopy(event){
    let copyText = event.target
    let textArea = document.createElement('textarea')
    textArea.value = copyText.textContent
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('Copy')
    textArea.remove()
    alert(textArea.value)
}


