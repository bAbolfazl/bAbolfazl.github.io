console.log("custom running...")
define([], function () {

    // vars
    let window_width
    let window_height

    let width
    let height

    let puck_width
    let ball_width
    let offset_X
    let offset_Y

    let puckDampening = 0.88
    let ballDampening = 0.96
    let puckSpeed = 0.83
    let ballSpeed = 93
    let pullStrength = 19

    // funcs
    const handle_document_size = () => {
        window_width = window.innerWidth
        window_height = window.innerHeight
        width = window_width * 0.8
        height = width / 2.13

        puck_width = window_width / 22
        ball_width = window_width / 45
        offset_X = window_width / 10
        offset_Y = 120

        puckDampening += window_width / 30000
        ballDampening += window_width / 100000
        // pullStrength += window_width / 1000
        // puckSpeed += window_width / 10000
        // ballSpeed += window_width / 1000

        // debugger
        if (window_width < 813) {
            offset_Y = 80
        }

        return { width, height, window_height, window_width, puck_width, offset_X, ball_width, offset_Y, puckDampening, ballDampening, pullStrength, puckSpeed, ballSpeed }
    }

    // const handle_document_sizeChange = () => {
    //     location.reload()
    //     handle_document_size()
    // }

    // events
    // handle_document_size()
    // window.addEventListener('resize', handle_document_sizeChange)
    // debugger


    return handle_document_size()
    // return { width, height, window_height, window_width, puck_width, offset_X, ball_width, offset_Y, puckDampening, ballDampening, pullStrength, puckSpeed, ballSpeed }
})