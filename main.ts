let Current__Temperature = 0
basic.forever(function () {
    Current__Temperature = input.temperature()
    basic.showNumber(Current__Temperature)
    basic.pause(1000)
    basic.clearScreen()
})
