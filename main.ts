radio.onReceivedNumber(function (receivedNumber) {
    i = receivedNumber
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    TPBot.setTravelTime(TPBot.DriveDirection.Backward, 50, 0.4)
})
input.onButtonPressed(Button.A, function () {
    TPBot.setTravelTime(TPBot.DriveDirection.Right, 45, 0.4)
})
input.onButtonPressed(Button.B, function () {
    TPBot.setTravelTime(TPBot.DriveDirection.Left, 45, 0.4)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    TPBot.setTravelTime(TPBot.DriveDirection.Forward, 50, 0.4)
})
let i = 0
radio.setGroup(1)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 15)) {
        TPBot.stopCar()
    }
})
basic.forever(function () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.West)
})
basic.forever(function () {
    if (i == 1) {
        TPBot.setTravelTime(TPBot.DriveDirection.Right, 45, 0.4)
    }
    if (i == 2) {
        TPBot.setTravelTime(TPBot.DriveDirection.Left, 45, 0.4)
    }
    if (i == 3) {
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, 50, 0.4)
    }
    if (i == 5) {
        TPBot.setTravelTime(TPBot.DriveDirection.Forward, 50, 0.4)
    }
    if (i == 4) {
    	
    }
    i = 99
})
