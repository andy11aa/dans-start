radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        starta = true
        kjøre_plan()
    } else if (receivedNumber == 1) {
        starta = false
        bitbot.stop(BBStopMode.Coast)
    }
})
function start_oåoåoå_finetå (tall: number) {
    if (tall == R1) {
        basic.pause(BPM * 1.5)
        for (let index = 0; index < 3; index++) {
            pins.servoWritePin(AnalogPin.P2, 180)
            alle_smilefes("ansikt o")
            pins.servoWritePin(AnalogPin.P1, 0)
            basic.pause(BPM / 2)
            basic.clearScreen()
            basic.pause(1)
            pins.servoWritePin(AnalogPin.P2, 90)
            alle_smilefes("ansikt å")
            pins.servoWritePin(AnalogPin.P1, 90)
            basic.pause(BPM / 2)
            basic.clearScreen()
            basic.pause(1)
        }
        alle_smilefes("ansikt å")
        basic.pause(BPM)
        basic.clearScreen()
    } else {
        basic.pause(BPM * 4)
    }
    vent()
    if (tall == R2 || tall == R3) {
        basic.pause(BPM * 1.5)
        for (let index = 0; index < 3; index++) {
            pins.servoWritePin(AnalogPin.P2, 180)
            alle_smilefes("ansikt o")
            pins.servoWritePin(AnalogPin.P1, 0)
            basic.pause(BPM / 2)
            basic.clearScreen()
            basic.pause(1)
            pins.servoWritePin(AnalogPin.P2, 90)
            alle_smilefes("ansikt å")
            pins.servoWritePin(AnalogPin.P1, 90)
            basic.pause(BPM / 2)
            basic.clearScreen()
            basic.pause(1)
        }
        alle_smilefes("ansikt å")
        basic.pause(BPM)
        basic.clearScreen()
    } else {
        basic.pause(BPM * 5)
    }
    vent()
}
function alle_smilefes (tekst: string) {
    if (tekst == "glad") {
        led.plot(1, 1)
        led.plot(3, 1)
        led.plot(0, 3)
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(3, 4)
        led.plot(4, 3)
        led.plot(0, 1)
        led.plot(1, 0)
        led.plot(0, 0)
        led.plot(4, 1)
        led.plot(4, 0)
        led.plot(3, 0)
    } else if (tekst == "blunk") {
        led.plot(1, 1)
        led.plot(3, 1)
        led.plot(0, 3)
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(3, 4)
        led.plot(4, 3)
        led.plot(0, 1)
        led.plot(4, 1)
        led.plot(1, 0)
        led.plot(0, 0)
    } else if (tekst == "ansikt å") {
        led.plot(1, 1)
        led.plot(3, 1)
        led.plot(0, 3)
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(3, 4)
        led.plot(4, 3)
        led.plot(0, 1)
        led.plot(1, 0)
        led.plot(0, 0)
        led.plot(4, 1)
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
    } else if (tekst == "ansikt o") {
        led.plot(1, 1)
        led.plot(3, 1)
        led.plot(3, 0)
        led.plot(2, 4)
        led.plot(0, 1)
        led.plot(1, 0)
        led.plot(0, 0)
        led.plot(4, 1)
        led.plot(4, 0)
        led.plot(2, 2)
        led.plot(1, 3)
        led.plot(3, 3)
    } else if (tekst == "lei") {
        led.plot(1, 1)
        led.plot(3, 1)
        led.plot(0, 4)
        led.plot(1, 3)
        led.plot(2, 3)
        led.plot(3, 3)
        led.plot(4, 4)
        led.plot(0, 1)
        led.plot(1, 0)
        led.plot(0, 0)
        led.plot(4, 1)
        led.plot(4, 0)
        led.plot(3, 0)
    }
}
function vent () {
    en_mer = takt
    while (en_mer == takt) {
        basic.pause(1)
    }
}
function r5 () {
    start_lys = false
    bitbot.setLedColor(0xFFFF00)
    hond_dans()
    lys_regnbue = true
    hond_dans()
    lys_refr = true
    side_side_side()
    stjerne_dans()
    lys_refr = false
    slutt_oåoåoå_finetå(R5)
    led_e_blinke()
    basic.pause(BPM * 1)
    lys_refr = true
    slutt_oåoåoå_finetå(R5)
    led_e_blinke()
}
function _1 () {
    bitbot.setLedColor(0xFF0080)
    basic.pause(BPM)
    bitbot.ledClear()
    basic.pause(BPM)
    bitbot.setLedColor(0x8000FF)
    basic.pause(BPM)
    bitbot.ledClear()
    bitbot.setLedColor(0x80FF00)
    basic.pause(BPM)
    bitbot.ledClear()
    basic.pause(BPM)
    bitbot.setLedColor(0x00FFC0)
}
function oåoåoå () {
    basic.pause(BPM * 1.5)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 3; index++) {
            pins.servoWritePin(AnalogPin.P2, 180)
            pins.servoWritePin(AnalogPin.P1, 0)
            basic.pause(BPM / 2)
            basic.clearScreen()
            basic.pause(1)
            pins.servoWritePin(AnalogPin.P2, 90)
            pins.servoWritePin(AnalogPin.P1, 90)
            basic.pause(BPM / 2)
            basic.clearScreen()
            basic.pause(1)
        }
        basic.pause(BPM)
        basic.clearScreen()
    }
    vent()
    basic.pause(BPM * 1.5)
}
function servo () {
    for (let index = 0; index < 2; index++) {
        pins.servoWritePin(AnalogPin.P2, 180)
        pins.servoWritePin(AnalogPin.P1, 0)
        vent()
        pins.servoWritePin(AnalogPin.P2, 90)
        pins.servoWritePin(AnalogPin.P1, 90)
        vent()
    }
}
function led_e () {
    led.plot(1, 0)
    led.plot(1, 1)
    led.plot(1, 2)
    led.plot(1, 3)
    led.plot(1, 4)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(2, 2)
    led.plot(3, 2)
    led.plot(2, 4)
    led.plot(3, 4)
}
function _2 () {
    bitbot.setLedColor(0x00FFC0)
    basic.pause(BPM)
    bitbot.ledClear()
    basic.pause(BPM)
    bitbot.setLedColor(0x80FF00)
    basic.pause(BPM)
    bitbot.ledClear()
    bitbot.setLedColor(0x8000FF)
    basic.pause(BPM)
    bitbot.ledClear()
    basic.pause(BPM)
    bitbot.setLedColor(0xFF0080)
}
function r4 () {
    start_lys = false
    bitbot.setLedColor(0xFF8000)
    hond_dans()
    lys_regnbue = true
    hond_dans()
    lys_refr = true
    side_side_side()
    stjerne_dans()
    lys_refr = false
    slutt_oåoåoå_finetå(R4)
    led_e_blinke()
    basic.pause(BPM * 1)
    lys_refr = true
    slutt_oåoåoå_finetå(R4)
    led_e_blinke()
}
input.onButtonPressed(Button.A, function () {
    bitbot.go(BBDirection.Forward, 100)
    basic.showNumber(control.deviceSerialNumber())
})
function _4 () {
    bitbot.ledClear()
    bitbot.setPixelColor(6, 0xFF0080)
    bitbot.setPixelColor(7, 0xFF0080)
    bitbot.setPixelColor(8, 0xFF0080)
    bitbot.setPixelColor(9, 0x00FFC0)
    bitbot.setPixelColor(10, 0x00FFC0)
    bitbot.setPixelColor(11, 0x00FFC0)
    basic.pause(BPM)
    bitbot.ledClear()
}
function tibake_og_fram () {
    bitbot.goms(BBDirection.Forward, 1, 1)
    bitbot.goms(BBDirection.Reverse, 60, 400)
    vent()
    bitbot.goms(BBDirection.Forward, 60, 400)
    vent()
}
function slutt_oåoåoå_finetå (tall: number) {
    if (tall == R1) {
        basic.pause(BPM * 0.5)
        for (let index = 0; index < 3; index++) {
            pins.servoWritePin(AnalogPin.P2, 180)
            alle_smilefes("ansikt o")
            pins.servoWritePin(AnalogPin.P1, 0)
            basic.pause(BPM / 2)
            basic.clearScreen()
            basic.pause(1)
            pins.servoWritePin(AnalogPin.P2, 90)
            alle_smilefes("ansikt å")
            pins.servoWritePin(AnalogPin.P1, 90)
            basic.pause(BPM / 2)
            basic.clearScreen()
            basic.pause(1)
        }
        alle_smilefes("ansikt å")
        basic.clearScreen()
    } else {
        basic.pause(BPM * 3)
    }
    vent()
    if (tall == R2 || tall == R3) {
        basic.pause(BPM * 0.5)
        for (let index = 0; index < 3; index++) {
            pins.servoWritePin(AnalogPin.P2, 180)
            alle_smilefes("ansikt o")
            pins.servoWritePin(AnalogPin.P1, 0)
            basic.pause(BPM / 2)
            basic.clearScreen()
            basic.pause(1)
            pins.servoWritePin(AnalogPin.P2, 90)
            alle_smilefes("ansikt å")
            pins.servoWritePin(AnalogPin.P1, 90)
            basic.pause(BPM / 2)
            basic.clearScreen()
            basic.pause(1)
        }
        alle_smilefes("ansikt å")
        basic.pause(BPM)
        basic.clearScreen()
        basic.pause(BPM * 2)
    } else {
        basic.pause(BPM * 7)
    }
    vent()
}
function kjøre_plan () {
    if (control.deviceSerialNumber() == R1) {
        r1()
    } else if (control.deviceSerialNumber() == R2) {
        r2()
    } else if (control.deviceSerialNumber() == R3) {
        r3()
    } else if (control.deviceSerialNumber() == R4) {
        r4()
    } else if (control.deviceSerialNumber() == R5) {
        r5()
    }
}
function led_e_blinke () {
    for (let index = 0; index < 2; index++) {
        led_e()
        bitbot.setLedColor(0xFF0000)
        basic.pause(BPM / 2)
        basic.clearScreen()
        bitbot.ledClear()
        basic.pause(BPM / 2)
    }
    basic.clearScreen()
    led_1()
    bitbot.setLedColor(0xFF0000)
    basic.pause(BPM)
    basic.clearScreen()
    bitbot.ledClear()
    basic.pause(BPM)
    alle_smilefes("glad")
}
function r1 () {
    start_lys = false
    bitbot.setLedColor(0x80FF00)
    hond_dans()
    lys_regnbue = true
    hond_dans()
    lys_refr = true
    side_side_side()
    stjerne_dans()
    lys_refr = false
    slutt_oåoåoå_finetå(R1)
    led_e_blinke()
    basic.pause(BPM * 1)
    lys_refr = true
    slutt_oåoåoå_finetå(R1)
    led_e_blinke()
}
function følge_linjen () {
    while (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.go(BBDirection.Forward, 15)
    }
    while (bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.go(BBDirection.Forward, 15)
    }
    while (bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.rotate(BBRobotDirection.Right, 15)
    }
    while (true) {
        if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
            bitbot.rotate(BBRobotDirection.Left, 15)
        } else if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
            bitbot.rotate(BBRobotDirection.Right, 15)
        } else if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1) {
            bitbot.go(BBDirection.Forward, 20)
        } else if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 0) {
            bitbot.stop(BBStopMode.Coast)
            break;
        }
    }
}
input.onButtonPressed(Button.B, function () {
    følge_linjen()
})
function r2 () {
    start_lys = false
    bitbot.setLedColor(0x00FFFF)
    hond_dans()
    lys_regnbue = true
    hond_dans()
    lys_refr = true
    side_side_side()
    stjerne_dans()
    lys_refr = false
    slutt_oåoåoå_finetå(R2)
    led_e_blinke()
    basic.pause(BPM * 1)
    lys_refr = true
    slutt_oåoåoå_finetå(R2)
    led_e_blinke()
}
function stjerne_dans () {
    for (let index = 0; index < 4; index++) {
        bitbot.goms(BBDirection.Forward, 60, BPM2)
        basic.pause(BPM2)
        bitbot.goms(BBDirection.Reverse, 60, BPM2)
        basic.pause(BPM2)
        bitbot.rotatems(BBRobotDirection.Left, 61, BPM2)
        basic.pause(BPM2)
    }
    bitbot.goms(BBDirection.Forward, 60, BPM2)
    basic.pause(BPM2)
    bitbot.goms(BBDirection.Reverse, 60, BPM2)
}
function dancmove_1 () {
    bitbot.goms(BBDirection.Forward, 1, 1)
    bitbot.goms(BBDirection.Reverse, 75, BPM)
    bitbot.rotatems(BBRobotDirection.Left, 100, BPM)
    vent()
    bitbot.goms(BBDirection.Forward, 30, BPM)
    bitbot.goms(BBDirection.Reverse, 30, BPM)
    vent()
    bitbot.rotatems(BBRobotDirection.Left, 100, BPM)
    bitbot.goms(BBDirection.Forward, 75, BPM)
    vent()
}
function hond_dans () {
    for (let index = 0; index < 2; index++) {
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P2, 45)
        basic.pause(BPM)
        pins.servoWritePin(AnalogPin.P2, 90)
        pins.servoWritePin(AnalogPin.P1, 90)
        basic.pause(BPM)
    }
    for (let index = 0; index < 2; index++) {
        pins.servoWritePin(AnalogPin.P2, 90)
        pins.servoWritePin(AnalogPin.P1, 135)
        basic.pause(BPM)
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(BPM)
    }
    for (let index = 0; index < 2; index++) {
        pins.servoWritePin(AnalogPin.P2, 145)
        pins.servoWritePin(AnalogPin.P1, 145)
        basic.pause(BPM)
        pins.servoWritePin(AnalogPin.P2, 45)
        pins.servoWritePin(AnalogPin.P1, 45)
        basic.pause(BPM)
    }
    for (let index = 0; index < 1; index++) {
        pins.servoWritePin(AnalogPin.P1, 145)
        pins.servoWritePin(AnalogPin.P2, 45)
        basic.pause(BPM)
        pins.servoWritePin(AnalogPin.P2, 145)
        pins.servoWritePin(AnalogPin.P1, 45)
        basic.pause(BPM)
    }
    for (let index = 0; index < 1; index++) {
        pins.servoWritePin(AnalogPin.P1, 145)
        pins.servoWritePin(AnalogPin.P2, 45)
        basic.pause(BPM)
        pins.servoWritePin(AnalogPin.P2, 145)
        pins.servoWritePin(AnalogPin.P1, 45)
        basic.pause(BPM)
    }
}
function side_side_side () {
    for (let index = 0; index < 4; index++) {
        bitbot.rotatems(BBRobotDirection.Left, 45, BPM / 2)
        basic.pause(BPM / 2)
        bitbot.rotatems(BBRobotDirection.Right, 45, BPM / 2)
        basic.pause(BPM / 2)
        bitbot.rotatems(BBRobotDirection.Right, 45, BPM / 2)
        basic.pause(BPM / 2)
        bitbot.rotatems(BBRobotDirection.Left, 45, BPM / 2)
        basic.pause(BPM / 2)
    }
}
function kjør_literan (tall: number) {
    if (tall == R1) {
        bitbot.rotatems(BBRobotDirection.Left, 18, BPM * 4)
        bitbot.goms(BBDirection.Forward, 35, BPM * 4)
    } else if (tall == R2) {
        bitbot.rotatems(BBRobotDirection.Left, 18, BPM * 4)
        bitbot.BBBias(BBRobotDirection.Left, 75)
        bitbot.goms(BBDirection.Forward, 20, BPM * 8)
        bitbot.BBBias(BBRobotDirection.Left, 0)
        basic.pause(BPM * 4)
    } else if (tall == R3) {
        bitbot.rotatems(BBRobotDirection.Right, 18, BPM * 4)
        bitbot.BBBias(BBRobotDirection.Right, 75)
        bitbot.goms(BBDirection.Forward, 20, BPM * 8)
        bitbot.BBBias(BBRobotDirection.Right, 0)
        basic.pause(BPM * 4)
    } else if (tall == R4) {
        bitbot.rotatems(BBRobotDirection.Left, 22, BPM * 2)
        bitbot.goms(BBDirection.Forward, 20, BPM * 2)
        bitbot.BBBias(BBRobotDirection.Left, 35)
        bitbot.goms(BBDirection.Forward, 20, BPM * 12)
        bitbot.BBBias(BBRobotDirection.Left, 0)
    } else if (tall == R5) {
        bitbot.rotatems(BBRobotDirection.Right, 22, BPM * 2)
        bitbot.goms(BBDirection.Forward, 20, BPM * 2)
        bitbot.BBBias(BBRobotDirection.Right, 35)
        bitbot.goms(BBDirection.Forward, 20, BPM * 12)
        bitbot.BBBias(BBRobotDirection.Right, 0)
    }
}
function _3 () {
    bitbot.setPixelColor(0, 0x00FFC0)
    bitbot.setPixelColor(1, 0x00FFC0)
    bitbot.setPixelColor(2, 0x00FFC0)
    bitbot.setPixelColor(3, 0xFF0080)
    bitbot.setPixelColor(4, 0xFF0080)
    bitbot.setPixelColor(5, 0xFF0080)
    basic.pause(BPM)
    bitbot.ledClear()
}
function dancmove_4 () {
    bitbot.goms(BBDirection.Forward, 60, BPM)
    bitbot.goms(BBDirection.Reverse, 60, BPM)
    bitbot.rotatems(BBRobotDirection.Left, 18, BPM)
    vent()
    bitbot.goms(BBDirection.Forward, 60, BPM)
    bitbot.goms(BBDirection.Reverse, 60, BPM)
    bitbot.rotatems(BBRobotDirection.Right, 18, BPM)
    vent()
    bitbot.goms(BBDirection.Forward, 60, BPM)
    bitbot.goms(BBDirection.Reverse, 60, BPM)
    bitbot.rotatems(BBRobotDirection.Right, 18, BPM)
    vent()
    for (let index = 0; index < 5; index++) {
        bitbot.goms(BBDirection.Forward, 40, BPM)
        bitbot.goms(BBDirection.Reverse, 40, BPM)
        bitbot.rotatems(BBRobotDirection.Left, 18, BPM)
        vent()
        bitbot.goms(BBDirection.Forward, 40, BPM)
        bitbot.goms(BBDirection.Reverse, 40, BPM)
        bitbot.rotatems(BBRobotDirection.Left, 18, BPM)
        vent()
        bitbot.goms(BBDirection.Forward, 40, BPM)
        bitbot.goms(BBDirection.Reverse, 40, BPM)
        bitbot.rotatems(BBRobotDirection.Right, 18, BPM)
        vent()
        bitbot.goms(BBDirection.Forward, 40, BPM)
        bitbot.goms(BBDirection.Reverse, 40, BPM)
        bitbot.rotatems(BBRobotDirection.Right, 18, BPM)
        vent()
    }
}
function r3 () {
    start_lys = false
    bitbot.setLedColor(0xFF0080)
    hond_dans()
    lys_regnbue = true
    hond_dans()
    lys_refr = true
    side_side_side()
    stjerne_dans()
    lys_refr = false
    slutt_oåoåoå_finetå(R3)
    led_e_blinke()
    basic.pause(BPM * 1)
    lys_refr = true
    slutt_oåoåoå_finetå(R3)
    led_e_blinke()
}
function led_1 () {
    led.plot(1, 1)
    led.plot(2, 0)
    led.plot(2, 1)
    led.plot(2, 2)
    led.plot(2, 3)
    led.plot(2, 4)
    led.plot(1, 4)
    led.plot(3, 4)
}
let en_mer = 0
let lys_refr = false
let takt = 0
let lys_regnbue = false
let starta = false
let start_lys = false
let BPM2 = 0
let R5 = 0
let R4 = 0
let R3 = 0
let R2 = 0
let R1 = 0
let BPM = 0
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
pins.servoWritePin(AnalogPin.P2, 90)
pins.servoWritePin(AnalogPin.P1, 90)
BPM = 460
R1 = 323388109
R2 = -1950028692
R3 = 1605682820
R4 = 882193206
R5 = 2001938284
BPM2 = BPM / 2
start_lys = false
starta = false
lys_regnbue = false
takt = 0
let oåoåoå_bakrund = 0
let klokke = 0
lys_refr = false
// R ytme
basic.forever(function () {
    if (starta == true) {
        takt += 1
        basic.pause(BPM)
    }
})
basic.forever(function () {
    if (start_lys == true) {
        while (true) {
            bitbot.ledRainbow()
            basic.pause(BPM * 2)
            bitbot.ledClear()
            for (let index = 0; index < 2; index++) {
                _1()
            }
            for (let index = 0; index < 2; index++) {
                _2()
            }
            for (let index = 0; index < 2; index++) {
                _3()
            }
            for (let index = 0; index < 2; index++) {
                _4()
            }
        }
    }
})
basic.forever(function () {
    if (lys_refr == true) {
        bitbot.setLedColor(0xFFFF00)
        basic.pause(BPM * 0.1)
        bitbot.ledClear()
        basic.pause(BPM * 0.9)
        bitbot.setLedColor(0x80FF00)
        basic.pause(BPM * 0.1)
        bitbot.ledClear()
        basic.pause(BPM * 0.9)
        bitbot.setLedColor(0x00FFFF)
        basic.pause(BPM * 0.1)
        bitbot.ledClear()
        basic.pause(BPM * 0.9)
        bitbot.setLedColor(0xFF0080)
        basic.pause(BPM * 0.1)
        bitbot.ledClear()
        basic.pause(BPM * 0.9)
        bitbot.setLedColor(0xFF8000)
        basic.pause(BPM * 0.1)
        bitbot.ledClear()
        basic.pause(BPM * 0.9)
    }
})
basic.forever(function () {
    if (start_lys == true) {
        bitbot.ledClear()
        bitbot.ledRainbow()
        while (true) {
            bitbot.ledRotate()
            basic.pause(650)
            bitbot.ledRotate()
            basic.pause(650)
        }
    }
})
