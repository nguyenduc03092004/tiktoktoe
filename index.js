let one = document.querySelector(`.one`)
let two = document.querySelector(`.two`)
let three = document.querySelector(`.three`)
let four = document.querySelector(`.four`)
let five = document.querySelector(`.five`)
let six = document.querySelector(`.six`)
let seven = document.querySelector(`.seven`)
let eight = document.querySelector(`.eight`)
let nine = document.querySelector(`.nine`)
let checkValue = 1
let click = 0;
let gameEnded = false
let Arr = [
    [one.textContent, two.textContent, three.textContent],
    [four.textContent, five.textContent, six.textContent],
    [seven.textContent, eight.textContent, nine.textContent]
];
function addValue(element) {
    let checkBox = 0;
    element.onclick = () => {
        if (!gameEnded && checkBox !== 1) {
            if (checkValue % 2 !== 0) {
                element.textContent = `X`;
            }
            else {
                element.textContent = `O`;
            }
            checkValue++;
            checkBox = 1;
            updateArr();
            console.log(Arr)
            checkClick()
            if (click == 1) { checkWin() }
        }
        else { alert(`please play agian`) }
    }
}
addValue(one)
addValue(two)
addValue(three)
addValue(four)
addValue(five)
addValue(six)
addValue(seven)
addValue(eight)
addValue(nine)
function checkClick() {
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (Arr[i][j] !== undefined) {
                click = 1;
                break;
            }
        }
    }
}
function checkWin() {

    if (Arr[0][0] == Arr[0][1] && Arr[0][0] == Arr[0][2] && Arr[0][0] != ``) { gameEnded = true; alert(`${Arr[0][0]} win `) }
    if (Arr[0][0] == Arr[1][0] && Arr[0][0] == Arr[2][0] && Arr[0][0] != ``) { gameEnded = true; alert(`${Arr[0][0]} win `) }
    if (Arr[0][0] == Arr[1][1] && Arr[0][0] == Arr[2][2] && Arr[0][0] != ``) { gameEnded = true; alert(`${Arr[0][0]} win `) }
    if (Arr[0][1] == Arr[1][1] && Arr[0][0] == Arr[2][1] && Arr[0][1] != ``) { gameEnded = true; alert(`${Arr[0][1]} win `) }
    if (Arr[0][2] == Arr[1][2] && Arr[0][2] == Arr[2][2] && Arr[0][2] != ``) { gameEnded = true; alert(`${Arr[0][1]} win `) }

    if (Arr[1][0] == Arr[1][1] && Arr[1][0] == Arr[1][2] && Arr[1][1] != ``) { gameEnded = true; alert(`${Arr[0][1]} win `) }

    if (Arr[2][0] == Arr[2][1] && Arr[2][2] == Arr[2][1] && Arr[2][1] != ``) { gameEnded = true; alert(`${Arr[0][1]} win `) }

    if (Arr[0][2] == Arr[1][1] && Arr[0][2] == Arr[2][0] && Arr[1][1] != ``) { gameEnded = true; alert(`${Arr[0][1]} win `) }
}
function updateArr() {
    Arr = [
        [one.textContent, two.textContent, three.textContent],
        [four.textContent, five.textContent, six.textContent],
        [seven.textContent, eight.textContent, nine.textContent]
    ]
}