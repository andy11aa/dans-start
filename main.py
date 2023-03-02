def on_received_number(receivedNumber):
    global starta
    if receivedNumber == 0:
        starta = True
        kjøre_plan()
    elif receivedNumber == 1:
        starta = True
        control.reset()
radio.on_received_number(on_received_number)

def vent():
    global en_mer
    en_mer = takt
    while en_mer == takt:
        basic.pause(10)
def _1():
    bitbot.set_led_color(0xFF0080)
    basic.pause(BPM)
    bitbot.led_clear()
    basic.pause(BPM)
    bitbot.set_led_color(0x8000FF)
    basic.pause(BPM)
    bitbot.led_clear()
    bitbot.set_led_color(0x80FF00)
    basic.pause(BPM)
    bitbot.led_clear()
    basic.pause(BPM)
    bitbot.set_led_color(0x00FFC0)
def oåoåoå():
    for index in range(2):
        for index2 in range(3):
            pins.servo_write_pin(AnalogPin.P2, 180)
            ansikt_o()
            pins.servo_write_pin(AnalogPin.P1, 0)
            basic.pause(BPM / 2)
            basic.clear_screen()
            basic.pause(1)
            pins.servo_write_pin(AnalogPin.P2, 90)
            ansikt_å()
            pins.servo_write_pin(AnalogPin.P1, 90)
            basic.pause(BPM / 2)
            basic.clear_screen()
            basic.pause(1)
        ansikt_å()
        basic.pause(BPM)
        basic.clear_screen()
    vent()

def on_button_pressed_a():
    bitbot.go(BBDirection.FORWARD, 100)
    basic.show_number(control.device_serial_number())
input.on_button_pressed(Button.A, on_button_pressed_a)

def servo():
    for index3 in range(2):
        pins.servo_write_pin(AnalogPin.P2, 180)
        pins.servo_write_pin(AnalogPin.P1, 0)
        vent()
        pins.servo_write_pin(AnalogPin.P2, 90)
        pins.servo_write_pin(AnalogPin.P1, 90)
        vent()
def _2():
    bitbot.set_led_color(0x00FFC0)
    basic.pause(BPM)
    bitbot.led_clear()
    basic.pause(BPM)
    bitbot.set_led_color(0x80FF00)
    basic.pause(BPM)
    bitbot.led_clear()
    bitbot.set_led_color(0x8000FF)
    basic.pause(BPM)
    bitbot.led_clear()
    basic.pause(BPM)
    bitbot.set_led_color(0xFF0080)
def _4():
    bitbot.led_clear()
    bitbot.set_pixel_color(6, 0xFF0080)
    bitbot.set_pixel_color(7, 0xFF0080)
    bitbot.set_pixel_color(8, 0xFF0080)
    bitbot.set_pixel_color(9, 0x00FFC0)
    bitbot.set_pixel_color(10, 0x00FFC0)
    bitbot.set_pixel_color(11, 0x00FFC0)
    basic.pause(BPM)
    bitbot.led_clear()
def ansikt_å():
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
def kjøre_plan():
    if control.device_serial_number() == R1:
        r1()
    elif control.device_serial_number() == R2:
        r2()
    elif control.device_serial_number() == R3:
        r3()
def r1():
    oåoåoå()
    servo()
    fram_og_tibake()
    dancmove_1()
    dancmove_2()
    dancmove_3()
    dancmove_4()
def ansikt_o():
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
def r2():
    oåoåoå()
    servo()
    fram_og_tibake()
    dancmove_1()
    dancmove_2()
    dancmove_3()
    dancmove_4()
def fram_og_tibake():
    bitbot.goms(BBDirection.FORWARD, 60, 400)
    vent()
    bitbot.goms(BBDirection.REVERSE, 60, 400)
    vent()
def dancmove_1():
    bitbot.goms(BBDirection.FORWARD, 1, 1)
    bitbot.goms(BBDirection.REVERSE, 75, BPM)
    bitbot.rotatems(BBRobotDirection.LEFT, 100, BPM)
    vent()
    bitbot.goms(BBDirection.FORWARD, 75, BPM)
    bitbot.goms(BBDirection.REVERSE, 75, BPM)
    vent()
    bitbot.rotatems(BBRobotDirection.LEFT, 100, BPM)
    bitbot.goms(BBDirection.FORWARD, 75, BPM)
    vent()
def dancmove_3():
    for index4 in range(4):
        bitbot.rotatems(BBRobotDirection.LEFT, 25, BPM)
        basic.pause(BPM)
        bitbot.goms(BBDirection.FORWARD, 100, BPM)
        basic.pause(BPM)
        bitbot.rotatems(BBRobotDirection.RIGHT, 25, BPM)
        basic.pause(BPM)
        bitbot.goms(BBDirection.FORWARD, 100, BPM)
        basic.pause(BPM)
def _3():
    bitbot.set_pixel_color(0, 0x00FFC0)
    bitbot.set_pixel_color(1, 0x00FFC0)
    bitbot.set_pixel_color(2, 0x00FFC0)
    bitbot.set_pixel_color(3, 0xFF0080)
    bitbot.set_pixel_color(4, 0xFF0080)
    bitbot.set_pixel_color(5, 0xFF0080)
    basic.pause(BPM)
    bitbot.led_clear()
def dancmove_4():
    bitbot.goms(BBDirection.REVERSE, 60, BPM)
    bitbot.rotatems(BBRobotDirection.LEFT, 90, BPM)
    vent()
    for index5 in range(8):
        bitbot.goms(BBDirection.FORWARD, 60, BPM)
        bitbot.goms(BBDirection.REVERSE, 60, BPM)
        bitbot.rotatems(BBRobotDirection.LEFT, 18, BPM)
        vent()
        bitbot.goms(BBDirection.FORWARD, 60, BPM)
        bitbot.goms(BBDirection.REVERSE, 60, BPM)
        bitbot.rotatems(BBRobotDirection.RIGHT, 18, BPM)
        vent()
        bitbot.goms(BBDirection.FORWARD, 60, BPM)
        bitbot.goms(BBDirection.REVERSE, 60, BPM)
        bitbot.rotatems(BBRobotDirection.RIGHT, 18, BPM)
        vent()
def r3():
    oåoåoå()
    servo()
    fram_og_tibake()
    dancmove_1()
    dancmove_2()
    dancmove_3()
    dancmove_4()
def dancmove_2():
    bitbot.goms(BBDirection.REVERSE, 75, BPM)
    bitbot.rotatems(BBRobotDirection.LEFT, 12, BPM)
    vent()
    bitbot.goms(BBDirection.FORWARD, 100, BPM)
    bitbot.goms(BBDirection.FORWARD, 50, BPM)
    vent()
    bitbot.rotatems(BBRobotDirection.RIGHT, 44, BPM)
    bitbot.goms(BBDirection.FORWARD, 75, BPM)
    vent()
en_mer = 0
starta = False
R3 = 0
R2 = 0
R1 = 0
takt = 0
BPM = 0
radio.set_group(1)
pins.servo_write_pin(AnalogPin.P2, 90)
pins.servo_write_pin(AnalogPin.P1, 90)
BPM = 465
takt = 0
bitbot.select_model(BBModel.XL)
R1 = 323388109
R2 = -1950028692
R3 = 1605682820
starta = False

def on_forever():
    global takt
    if takt == 4:
        takt += 1
basic.forever(on_forever)

def on_forever2():
    if starta == True:
        while True:
            bitbot.led_rainbow()
            basic.pause(BPM)
            bitbot.led_clear()
            for index6 in range(2):
                _1()
            for index7 in range(2):
                _2()
            for index8 in range(2):
                _3()
            for index9 in range(2):
                _4()
basic.forever(on_forever2)

def on_in_background():
    pass
control.in_background(on_in_background)

def on_in_background2():
    global takt
    while True:
        basic.pause(BPM)
        takt += 1
control.in_background(on_in_background2)
