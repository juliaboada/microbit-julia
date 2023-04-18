input.onButtonPressed(Button.A, function () {
    music.setVolume(50)
    music.playMelody("E F G A G G A F ", 80)
    music.playMelody("E F G A G G A F ", 80)
    music.playMelody("F E E - - - - - ", 80)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
