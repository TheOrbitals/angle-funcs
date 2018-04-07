[![Build Status](https://travis-ci.org/TheOrbitals/angle-functions.svg?branch=master)](https://travis-ci.org/TheOrbitals/angle-functions)

# angle-functions

Functions for working with angles

## Installation

    npm install angle-functions --save

## Usage

    const angles = require('angle-functions');
    const angleInDegrees = 45;
    const sine = angles.sin(angleInDegrees);

## Tests

    npm test

## Functions

    mod       // Integer modulo of two floats
    sin       // Sine for an angle in degrees
    cos       // Cosine for an angle in degrees
    tan       // Tangent for an angle in degrees
    rounddeg  // Round degree angle between 0 and 360
    roundrad  // Round radian angle between 0 and 2*PI
    deg2rad   // Convert degrees to radians
    rad2deg   // Convert radians to degrees
    arccosh   // Inverse hyperbolic cosine
    cosh      // Hyperbolic cosine
    sinh      // Hyperbolic sine

## Contributing

Pull requests welcomed. Please lint and supply new/updated tests for your code.

## Release history

* 0.1.0 Initial release
* 0.2.0 Ranamed some functions
* 0.3.0 Converted code base to TypeScript. Migrated from Mocha/Chai to Jest. Changed License to Apache-2.0. Added more tests.
