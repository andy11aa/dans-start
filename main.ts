function vent () {
    en_mer = klokke
    while (en_mer == klokke) {
        basic.pause(10)
    }
}
function servo () {
    pins.servoWritePin(AnalogPin.P2, 0)
    pins.servoWritePin(AnalogPin.P1, 0)
    vent()
    pins.servoWritePin(AnalogPin.P2, 90)
    pins.servoWritePin(AnalogPin.P1, 90)
    vent()
}
function fram_og_tibake () {
    bitbot.goms(BBDirection.Forward, 60, 400)
    vent()
    bitbot.goms(BBDirection.Reverse, 60, 400)
    vent()
}
input.onButtonPressed(Button.A, function () {
    kjøre_plan()
})
function kjøre_plan () {
    while (true) {
        servo()
        fram_og_tibake()
    }
}
let en_mer = 0
let klokke = 0
let takt = 465
klokke = 0
bitbot.select_model(BBModel.XL)
control.inBackground(function () {
    while (true) {
        led.plot(randint(0, 4), randint(0, 4))
        led.unplot(randint(0, 4), randint(0, 4))
        basic.pause(takt)
        klokke += 1
        if (klokke == 4) {
            klokke = 0
        }
    }
})
