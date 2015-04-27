/**
 * Common Mathematic Functions
 */

module.exports = {

  /**
   * Modulo for double values
   *
   * @param  {number} x
   * @param  {number} y
   * @return {number}
   */
  fmod: function(x, y) {
    return x - Math.ceil(x / y) * y;
  },

  /**
   * Sine for an angle in degrees
   *
   * @param  {float} x
   * @return {float}
   */
  udsin: function(x) {
    return Math.sin(this.deg2rad(x));
  },

  /**
   * Cosine for an angle in degrees
   *
   * @param  {float} x
   * @return {float}
   */
  udcos: function(x) {
    return Math.cos(this.deg2rad(x));
  },

  /**
   * Tangent for an angle in degrees
   */
  udtan: function(x) {
    return Math.tan(this.deg2rad(x));
  },

  /**
   * Rounding degree angle between 0 to 360
   */
  degmal: function(x) {
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
   * Rounding radian angle between 0 to 2*PI
   */
  radmal: function(x) {
    var y = Math.PI * 2.0 * (x / (Math.PI * 2.0) -
            Math.floor(x / (Math.PI * 2.0)));
    if (y < 0.0) {
      y += Math.PI * 2.0;
    }
    if (y >= Math.PI * 2.0) {
      y -= Math.PI * 2.0;
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
