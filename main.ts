radio.onReceivedNumber(function (receivedNumber) {
    if (nombre < receivedNumber) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.A, function () {
    nombre = randint(1, 6)
    basic.showNumber(nombre)
    radio.sendNumber(nombre)
})
let nombre = 0
nombre = 0
basic.forever(function () {
	
})
