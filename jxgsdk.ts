/**
 * board
 * centerPoint
 * radiusPoint
 * anglePoint
 * options
 */
export function Angle(board: JXG.Board, centerPoint: JXG.PointSpecification, radiusPoint: JXG.PointSpecification, anglePoint: JXG.PointSpecification, options?: JXG.AngleAttributes): JXG.Angle {
    return board.create('angle', [centerPoint, radiusPoint, anglePoint], options)
}

/**
 * board
 * centerPoint
 * radiusPoint
 * anglePoint
 * options
 */
export function Arc(board: JXG.Board, centerPoint: JXG.PointSpecification, radiusPoint: JXG.PointSpecification, anglePoint: JXG.PointSpecification, options?: JXG.ArcAttributes): JXG.Arc {
    return board.create('arc', [centerPoint, radiusPoint, anglePoint], options)
}

/**
 * board
 * point1
 * point2
 * options
 */
export function Axis(board: JXG.Board, point1: JXG.PointSpecification, point2: JXG.PointSpecification, options?: JXG.AxisAttributes): JXG.Axis {
    return board.create('axis', [point1, point2], options)
}

/**
 * board
 * centerPoint
 * radiusOrPoint
 */
export function Circle(board: JXG.Board, centerPoint: JXG.PointSpecification, radiusOrPoint: number | JXG.PointSpecification, options?: JXG.CircleAttributes): JXG.Circle {
    return board.create('circle', [centerPoint, radiusOrPoint], options)
}

/**
 * board
 * dataX
 * dataY
 * options
 */
export function Curve(board: JXG.Board, dataX: number[] | JXG.CurveFunction, dataY: number[] | JXG.CurveFunction, options?: JXG.CurveAttributes): JXG.Curve {
    return board.create('curve', [dataX, dataY], options)
}

/**
 * board
 * f
 * a
 * b
 * options
 */
export function Functiongraph(board: JXG.Board, f: JXG.CurveFunction, a?: number | JXG.NumberFunction, b?: number | JXG.NumberFunction, options?: JXG.FunctiongraphAttributes): JXG.Functiongraph {
    return board.create('functiongraph', [f, a, b], options)
}

/**
 * board
 * glideObject
 * options
 */
export function Glider(board: JXG.Board, glideObject: JXG.GeometryElement, options?: JXG.GliderAttributes): JXG.Glider {
    return board.create('glider', [glideObject], options)
}

/**
 * board
 * point1
 * point2
 * options
 */
export function Line(board: JXG.Board, point1: JXG.PointSpecification, point2: JXG.PointSpecification, options?: JXG.LineAttributes): JXG.Line {
    return board.create('line', [point1, point2], options)
}

/**
 * board
 * x
 * y
 * options
 */
export function Point(board: JXG.Board, x: JXG.CoordSpecification, y: JXG.CoordSpecification, options?: JXG.PointAttributes): JXG.Point {
    return board.create('point', [x, y], options)
}

/**
 * board
 * f
 * n
 * type
 * a
 * b
 * options
 */
export function Riemannsum(board: JXG.Board, f: JXG.CurveFunction, n: JXG.NumberFunction, type: string, a: JXG.BorderSpecification, b: JXG.BorderSpecification, options?: JXG.CurveAttributes): JXG.Riemannsum {
    return board.create('riemannsum', [f, n, type, a, b], options)
}

/**
 * 
 * board
 * beginPoint
 * endPoint
 * min
 * start
 * max
 * options
 */
export function Slider(board: JXG.Board, beginPoint: JXG.PointSpecification, endPoint: JXG.PointSpecification, min: number, start: number, max: number, options?: JXG.SliderAttributes): JXG.Slider {
    return board.create('slider', [beginPoint, endPoint, [min, start, max]], options)
}

/**
 * board
 * tangent
 * options
 */
export function SlopetriangleFromTangent(board: JXG.Board, tangent: JXG.Tangent, options?: JXG.SlopetriangleAttributes): JXG.Slopetriangle {
    return board.create('slopetriangle', [tangent], options)
}

/**
 * board
 * line
 * point
 * options
 */
export function SlopetriangleFromLineAndPoint(board: JXG.Board, line: JXG.Line, point: JXG.Point, options?: JXG.SlopetriangleAttributes): JXG.Slopetriangle {
    return board.create('slopetriangle', [line, point], options)
}

/**
 * board
 * dataX
 * dataY
 * options
 */
export function Stepfunction(board: JXG.Board, dataX: JXG.CoordSpecification[], dataY: JXG.CoordSpecification[], options?: JXG.StepfunctionAttributes): JXG.Stepfunction {
    return board.create('stepfunction', [dataX, dataY], options)
}

/**
 * board
 * glider
 * options
 */
export function Tangent(board: JXG.Board, glider: JXG.Glider, options?: JXG.TangentAttributes): JXG.Tangent {
    return board.create('tangent', [glider], options)
}

/**
 * board
 * x
 * y
 * s
 * options
 */
export function Text(board: JXG.Board, x: number | JXG.NumberFunction, y: number | JXG.NumberFunction, text: string | JXG.StringFunction, options?: JXG.TextAttributes): JXG.Text {
    return board.create('text', [x, y, text], options)
}

export function Turtle(board: JXG.Board, parents?: number[], options?: JXG.TurtleAttributes): JXG.Turtle {
    return board.create('turtle', parents, options)
}
