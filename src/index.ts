/**
 * Common Mathematic Functions
 */

const twoPI: number = Math.PI * 2.0;

/**
 * Modulo
 *
 * @param  {number} dividend
 * @param  {number} divisor
 * @return {number}
 */
export function mod(dividend: number, divisor: number): number {
  return dividend - Math.ceil(dividend / divisor) * divisor;
}

/**
 * Sine for an angle in degrees
 *
 * @param  {number} angle
 * @return {number}
 */
export function sin(angle: number): number {
  return Math.sin(deg2rad(angle));
}

/**
 * Cosine for an angle in degrees
 *
 * @param  {number} angle
 * @return {number}
 */
export function cos(angle: number): number {
  return Math.cos(deg2rad(angle));
}

/**
 * Tangent for an angle in degrees
 *
 * @param  {number} angle
 * @return {number}
 */
export function tan(angle: number): number {
  return Math.tan(deg2rad(angle));
}

/**
 * Rounds the degree angle between 0 and 360
 *
 * @param  {number} angle
 * @return {number}
 */
export function rounddeg(angle: number): number {
  let result = 360.0 * (angle / 360.0 - Math.floor(angle / 360.0));
  if (result < 0.0) {
    result += 360.0;
  }
  if (result >= 360.0) {
    result -= 360.0;
  }
  return result;
}

/**
 * Rounds the radian angle between 0 and 2*PI
 *
 * @param  {number} angle
 * @return {number}
 */
export function roundrad(angle: number): number {
  let result = twoPI * (angle / twoPI - Math.floor(angle / twoPI));
  if (result < 0.0) {
    result += twoPI;
  }
  if (result >= twoPI) {
    result -= twoPI;
  }
  return result;
}

/**
 * Convert degree to radian
 *
 * @param  {number} angle
 * @return {number}
 */
export function deg2rad(angle: number): number {
  return angle * Math.PI / 180.0;
}

/**
 * Convert radian to degree
 *
 * @param  {number} radian
 * @return {number}
 */
export function rad2deg(radian: number): number {
  return radian * 180.0 / Math.PI;
}

/**
 * Inverse hyperbolic cosine
 *
 * @param  {number} angle
 * @return {number}
 */
export function arccosh(angle: number): number {
  return Math.log(angle + Math.sqrt(angle * angle - 1.0));
}

/**
 * Inverse hyperbolic sine
 *
 * @param  {number} angle
 * @return {number}
 */
export function sinh(angle: number): number {
  return (Math.exp(angle) - Math.exp(-angle)) / 2.0;
}

/**
 * Inverse hyperboli cosine
 *
 * @param  {number} angle
 * @return {number}
 */
export function cosh(angle: number): number {
  return (Math.exp(angle) + Math.exp(-angle)) / 2.0;
}
