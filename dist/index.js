"use strict";
/**
 * Common Mathematic Functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
var twoPI = Math.PI * 2.0;
/**
 * Modulo
 *
 * @param  {number} dividend
 * @param  {number} divisor
 * @return {number}
 */
function mod(dividend, divisor) {
    return dividend - Math.ceil(dividend / divisor) * divisor;
}
exports.mod = mod;
/**
 * Sine for an angle in degrees
 *
 * @param  {number} angle
 * @return {number}
 */
function sin(angle) {
    return Math.sin(deg2rad(angle));
}
exports.sin = sin;
/**
 * Cosine for an angle in degrees
 *
 * @param  {number} angle
 * @return {number}
 */
function cos(angle) {
    return Math.cos(deg2rad(angle));
}
exports.cos = cos;
/**
 * Tangent for an angle in degrees
 *
 * @param  {number} angle
 * @return {number}
 */
function tan(angle) {
    return Math.tan(deg2rad(angle));
}
exports.tan = tan;
/**
 * Rounds the degree angle between 0 and 360
 *
 * @param  {number} angle
 * @return {number}
 */
function rounddeg(angle) {
    var result = 360.0 * (angle / 360.0 - Math.floor(angle / 360.0));
    if (result < 0.0) {
        result += 360.0;
    }
    if (result >= 360.0) {
        result -= 360.0;
    }
    return result;
}
exports.rounddeg = rounddeg;
/**
 * Rounds the radian angle between 0 and 2*PI
 *
 * @param  {number} angle
 * @return {number}
 */
function roundrad(angle) {
    var result = twoPI * (angle / twoPI - Math.floor(angle / twoPI));
    if (result < 0.0) {
        result += twoPI;
    }
    if (result >= twoPI) {
        result -= twoPI;
    }
    return result;
}
exports.roundrad = roundrad;
/**
 * Convert degree to radian
 *
 * @param  {number} angle
 * @return {number}
 */
function deg2rad(angle) {
    return angle * Math.PI / 180.0;
}
exports.deg2rad = deg2rad;
/**
 * Convert radian to degree
 *
 * @param  {number} radian
 * @return {number}
 */
function rad2deg(radian) {
    return radian * 180.0 / Math.PI;
}
exports.rad2deg = rad2deg;
/**
 * Inverse hyperbolic cosine
 *
 * @param  {number} angle
 * @return {number}
 */
function arccosh(angle) {
    return Math.log(angle + Math.sqrt(angle * angle - 1.0));
}
exports.arccosh = arccosh;
/**
 * Inverse hyperbolic sine
 *
 * @param  {number} angle
 * @return {number}
 */
function sinh(angle) {
    return (Math.exp(angle) - Math.exp(-angle)) / 2.0;
}
exports.sinh = sinh;
/**
 * Inverse hyperboli cosine
 *
 * @param  {number} angle
 * @return {number}
 */
function cosh(angle) {
    return (Math.exp(angle) + Math.exp(-angle)) / 2.0;
}
exports.cosh = cosh;
