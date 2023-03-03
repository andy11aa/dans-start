radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        starta = true
        kjøre_plan()
    } else if (receivedNumber == 1) {
        starta = false
        bitbot.stop(BBStopMode.Coast)
    }
})
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
        basic.pause(10)
    }
}
function r5 () {
    oåoåoå_finetå(R5)
    led_e_blinke()
    basic.pause(BPM * 2)
    startlys = true
    bitbot.goms(BBDirection.Forward, 60, BPM2 * 5)
    basic.pause(BPM2 * 5)
    basic.pause(BPM * 3)
    while (bitbot.readLine(BBLineSensor.Left) == 0 || bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.go(BBDirection.Forward, 20)
    }
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
    oåoåoå_finetå(R4)
    led_e_blinke()
    basic.pause(BPM * 2)
    startlys = true
    bitbot.goms(BBDirection.Forward, 60, BPM2 * 5)
    basic.pause(BPM2 * 5)
    basic.pause(BPM * 3)
    while (bitbot.readLine(BBLineSensor.Left) == 0 || bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.go(BBDirection.Forward, 20)
    }
}
function oåoåoå_finetå (tall: number) {
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
        basic.pause(BPM * 5)
    }
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
        basic.pause(BPM * 2)
    } else {
        basic.pause(BPM * 7)
    }
    vent()
    basic.pause(BPM)
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
function gjørNoe (tekst: string) {
    if (tekst == "glad") {
    	
    } else if (false) {
    	
    }
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
    oåoåoå_finetå(R1)
    led_e_blinke()
    basic.pause(BPM * 2)
    basic.clearScreen()
    alle_smilefes("lei")
    basic.pause(BPM * 16)
    alle_smilefes("glad")
    startlys = true
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
    oåoåoå_finetå(R2)
    led_e_blinke()
    basic.pause(BPM * 2)
    basic.clearScreen()
    alle_smilefes("lei")
    basic.pause(BPM * 8)
    alle_smilefes("glad")
    startlys = true
    while (bitbot.readLine(BBLineSensor.Left) == 0 || bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.go(BBDirection.Forward, 20)
    }
}
function blinke_blinke () {
	
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
function r6 () {
	
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
    oåoåoå_finetå(R3)
    led_e_blinke()
    basic.pause(BPM * 2)
    basic.clearScreen()
    alle_smilefes("lei")
    basic.pause(BPM * 8)
    alle_smilefes("glad")
    startlys = true
    while (bitbot.readLine(BBLineSensor.Left) == 0 || bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.go(BBDirection.Forward, 20)
    }
}
function start_oåoåoå2 () {
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
let startlys = false
let BPM2 = 0
let R5 = 0
let R4 = 0
let R3 = 0
let R2 = 0
let R1 = 0
let starta = false
let takt = 0
let BPM = 0
let klokke = 0
let oåoåoå_bakrund = 0
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
pins.servoWritePin(AnalogPin.P2, 90)
pins.servoWritePin(AnalogPin.P1, 90)
BPM = 460
takt = 0
starta = false
R1 = 323388109
R2 = -1950028692
R3 = 1605682820
R4 = 882193206
R5 = 2001938284
BPM2 = BPM / 2
startlys = false
// R ytme
basic.forever(function () {
    if (starta == true) {
        takt += 1
        basic.pause(BPM)
    }
})
basic.forever(function () {
    if (startlys == true) {
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
