// Add Rover Functions to the on start block in order to control the robot.
radio.onReceivedNumber(function (receivedNumber) {
    serial.writeNumber(receivedNumber)
})
// Scroll up for Radio Specific blocks
function Convert (inputValue: number) {
    let outputMin = 0
    let inputMin = 0
    inputMax = 1024
    outputMax = 255
    inputRange = inputMax - inputMin
    outputRange = inputMax - inputMin
    outputNumber = (inputValue - inputMin) / inputRange * outputRange + outputMin
    return outputNumber
}
// These were for debugging. Feel free to delete them.
input.onButtonPressed(Button.A, function () {
    radio.sendValue("X", 4.5)
})
radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("Y", 3)
})
radio.onReceivedValue(function (name, value) {
    let Y = ""
    if (name == X) {
        xValue = (<number>value);
serial.writeLine("" + (xValue))
    } else if (name == Y) {
        yValue = (<number>value);
    }
})
let outputNumber = 0
let outputRange = 0
let inputRange = 0
let outputMax = 0
let inputMax = 0
let X = ""
let xValue
// The xValue Variable Should Receive the stick value 0-1024
xValue = 0
let yValue
// The xValue Variable Should Receive the stick value 0-1024
yValue = 0
X = "X"
radio.setGroup(1)
radio.sendString("G'day")
