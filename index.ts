// Import stylesheets
import './style.css';

import { Engine, Capability } from 'davinci-eight'
import { Facet, PerspectiveCamera, DirectionalLight } from 'davinci-eight'
import { Box } from 'davinci-eight'
import { Color } from 'davinci-eight'
import { TrackballControls } from 'davinci-eight'

const engine = new Engine('my-canvas')
    .size(500, 500)
    .clearColor(0.1, 0.1, 0.1, 1.0)
    .enable(Capability.DEPTH_TEST)

const ambients: Facet[] = []

const camera = new PerspectiveCamera()
camera.eye.z = 5
ambients.push(camera)

const dirLight = new DirectionalLight()
ambients.push(dirLight)

const box = new Box(engine, { color: Color.green })

const trackball = new TrackballControls(camera, window)
// Subscribe to mouse events from the canvas.
trackball.subscribe(engine.canvas)

/**
 * animate is the callback point for requestAnimationFrame.
 * This has been initialized with a function expression in order
 * to avoid issues associated with JavaScript hoisting.
 */
const animate = function(timestamp: number) {
    engine.clear()

    // Update the camera based upon mouse events received.
    trackball.update()

    // Keep the directional light pointing in the same direction as the camera.
    dirLight.direction.copy(camera.look).sub(camera.eye)

    const t = timestamp * 0.001

    box.R.rotorFromGeneratorAngle({ xy: 0, yz: 1, zx: 0 }, t)

    box.render(ambients)

    // This call keeps the animation going.
    requestAnimationFrame(animate)
}

// This call "primes the pump".
requestAnimationFrame(animate)
