function line_follow () {
    reromicro.ReadLineSensors()
    if (reromicro.LineSensorDetectsLine(LineSensors.Left) && reromicro.LineSensorDetectsLine(LineSensors.Center)) {
        reromicro.RunMotor(Motors.Left, 20)
        reromicro.RunMotor(Motors.Right, 35)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Right) && reromicro.LineSensorDetectsLine(LineSensors.Center)) {
        reromicro.RunMotor(Motors.Left, 35)
        reromicro.RunMotor(Motors.Right, 20)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
        reromicro.RunMotor(Motors.Left, 35)
        reromicro.RunMotor(Motors.Right, 35)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
        reromicro.RunMotor(Motors.Left, 0)
        reromicro.RunMotor(Motors.Right, 35)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
        reromicro.RunMotor(Motors.Left, 35)
        reromicro.RunMotor(Motors.Right, 0)
    } else {
        reromicro.Brake()
    }
}
basic.forever(function () {
    if (reromicro.ReadUltrasonic() <= 10) {
        reromicro.Brake()
    } else {
        line_follow()
    }
})
