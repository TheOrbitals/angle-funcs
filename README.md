# angle-funcs

Functions for working with angles

## Installation

    npm install angle-funcs --save

## Usage

    var angles = require('angle-funcs');
    var angleInDegrees = 45;
    var sine = angles.sin(angleInDegrees);

## Tests

    npm test

## Functions

    mod       // Integer modulo of two floats
    sin       // Sine for an angle in degrees
    cos       // Cosine for an angle in degrees
    tan       // Tangent for an angle in degrees
    degmal    // Round degree angle between 0 and 360
    radmal    // Round radian angle between 0 and 2*PI
    deg2rad   // Convert degrees to radians
    rad2deg   // Convert radians to degrees
    arccosh   // Inverse hyperbolic cosine
    cosh      // Hyperbolic cosine
    sinh      // Hyperbolic sine

## Contributing

Pull requests welcomed. Please lint and supply new/updated tests for your code.

## Release history

* 0.1.0 Initial release

