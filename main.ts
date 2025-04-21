/**
 * Control para servos de 270 grados
 */
//% weight=100 color=#ff6600 icon="\uf085"
namespace servo270 {
    /**
     * Mueve el servo a una posición entre 0 y 270 grados.
     * @param pin pin conectado al servo
     * @param angle ángulo entre 0 y 270 grados
     */
    //% block="mover servo 270° en %pin|a %angle grados"
    //% angle.min=0 angle.max=270
    export function moverServo(pin: AnalogPin, angle: number): void {
        let convertido = Math.map(angle, 0, 270, 0, 180)
        pins.servoWritePin(pin, convertido)
    }

    /**
     * Detiene la señal del servo (desactiva PWM)
     * @param pin pin conectado al servo
     */
    //% block="detener servo en %pin"
    export function detenerServo(pin: AnalogPin): void {
        pins.analogWritePin(pin, 0)
    }
}