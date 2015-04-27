/**
 * Common Mathematic Functions
 */

var twoPI = Math.PI * 2.0;

module.exports = {

  /**
   * Modulo for double values
   *
   * @param  {number} x
   * @param  {number} y
   * @return {number}
   */
  mod: function(x, y) {
    return x - Math.ceil(x / y) * y;
  },

  /**
   * Sine for an angle in degrees
   *
   * @param  {float} x
   * @return {float}
   */
  sin: function(x) {
    return Math.sin(this.deg2rad(x));
  },

  /**
   * Cosine for an angle in degrees
   *
   * @param  {float} x
   * @return {float}
   */
  cos: function(x) {
    return Math.cos(this.deg2rad(x));
  },

  /**
   * Tangent for an angle in degrees
   */
  tan: function(x) {
    return Math.tan(this.deg2rad(x));
  },

  /**
   * Rounding degree angle between 0 and 360
   */
  rounddeg: function(x) {
    var y = 360.0 * (x / 360.0 - Math.floor(x / 360.0));
    if (y < 0.0) {
      y += 360.0;
    }
    if (y >= 360.0) {
      y -= 360.0;
    }
    return y;
  },

  /**
   * Rounding radian angle between 0 and 2*PI
   */
  roundrad: function(x) {
    var y = twoPI * (x / twoPI - Math.floor(x / twoPI));
    if (y < 0.0) {
      y += twoPI;
    }
    if (y >= twoPI) {
      y -= twoPI;
    }
    return y;
  },

  /**
   * Degree to Radian
   */
  deg2rad: function(x) {
    return x * Math.PI / 180.0;
  },

  /**
   * Radian to Degree
   */
  rad2deg: function(x) {
    return x * 180.0 / Math.PI;
  },

  /**
   * arccosh
   */
  arccosh: function(x) {
    return Math.log(x + Math.sqrt(x * x - 1.0));
  },

  /**
   * sinh
   */
  sinh: function(x) {
    return (Math.exp(x) - Math.exp(-x)) / 2.0;
  },

  /**
   * cosh
   */
  cosh: function(x) {
    return (Math.exp(x) + Math.exp(-x)) / 2.0;
  }

};
