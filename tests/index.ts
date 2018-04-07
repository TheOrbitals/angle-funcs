import * as angles from "../src/index";

test("mod() returns the modulo of a number", () => {
  expect(angles.mod(5, 0)).toBe(NaN);
  expect(angles.mod(0, 4)).toBe(0);
  expect(angles.mod(4, 2)).toBe(0);
  expect(angles.mod(10, 4)).toBe(-2);
  expect(angles.mod(-10, 4)).toBe(-2);
  expect(angles.mod(10, -4)).toBe(2);
  expect(angles.mod(10.57, 4)).toBe(-1.4299999999999997);
  expect(angles.mod(10, 4.4)).toBe(-3.200000000000001);
});

test("sin() returns the sine of a number", () => {
  expect(angles.sin()).toBe(NaN);
  expect(angles.sin(0)).toBe(0);
  expect(angles.sin(4)).toBe(0.0697564737441253);
  expect(angles.sin(-4)).toBe(-0.0697564737441253);
  expect(angles.sin(4.569)).toBe(0.07965960334291662);
  expect(angles.sin(-4.569)).toBe(-0.07965960334291662);
});

test("cos() returns the cosine of a number", () => {
  expect(angles.cos()).toBe(NaN);
  expect(angles.cos(0)).toBe(1);
  expect(angles.cos(4)).toBe(0.9975640502598242);
  expect(angles.cos(-4)).toBe(0.9975640502598242);
  expect(angles.cos(4.569)).toBe(0.9968221243508038);
  expect(angles.cos(-4.569)).toBe(0.9968221243508038);
});

test("tan() returns the cosine of a number", () => {
  expect(angles.tan()).toBe(NaN);
  expect(angles.tan(0)).toBe(0);
  expect(angles.tan(4)).toBe(0.06992681194351041);
  expect(angles.tan(-4)).toBe(-0.06992681194351041);
  expect(angles.tan(4.569)).toBe(0.0799135586951345);
  expect(angles.tan(-4.569)).toBe(-0.0799135586951345);
});

test("rounddeg() rounds degree angles", () => {
  expect(angles.rounddeg()).toBe(NaN);
  expect(angles.rounddeg(0)).toBe(0);
  expect(angles.rounddeg(37)).toBe(37);
  expect(angles.rounddeg(-137)).toBe(223);
  expect(angles.rounddeg(471)).toBe(111);
  expect(angles.rounddeg(-471)).toBe(249);
  expect(angles.rounddeg(471.89)).toBe(111.89);
  expect(angles.rounddeg(-471.84)).toBe(248.16);
});

test("roundrad() rounds radian angles", () => {
  expect(angles.roundrad()).toBe(NaN);
  expect(angles.roundrad(0)).toBe(0);
  expect(angles.roundrad(1)).toBe(1);
  expect(angles.roundrad(3)).toBe(3);
  expect(angles.roundrad(-2)).toBe(4.283185307179586);
  expect(angles.roundrad(12)).toBe(5.716814692820414);
  expect(angles.roundrad(-12)).toBe(0.5663706143591729);
});

test("rounddeg() rounds angles in degrees", () => {
  expect(angles.rounddeg()).toBe(NaN);
  expect(angles.rounddeg(0)).toBe(0);
  expect(angles.rounddeg(1)).toBe(1);
  expect(angles.rounddeg(3)).toBe(3);
  expect(angles.rounddeg(-2)).toBe(358);
  expect(angles.rounddeg(12.34)).toBe(12.34);
  expect(angles.rounddeg(-12.34)).toBe(347.66);
});

test("deg2rad() rounds radian angles", () => {
  expect(angles.deg2rad()).toBe(NaN);
  expect(angles.deg2rad(0)).toBe(0);
  expect(angles.deg2rad(1)).toBe(0.017453292519943295);
  expect(angles.deg2rad(3)).toBe(0.05235987755982988);
  expect(angles.deg2rad(-2)).toBe(-0.03490658503988659);
  expect(angles.deg2rad(12)).toBe(0.20943951023931953);
  expect(angles.deg2rad(-12)).toBe(-0.20943951023931953);
});

test("rad2deg() rounds angles in degrees", () => {
  expect(angles.rad2deg()).toBe(NaN);
  expect(angles.rad2deg(0)).toBe(0);
  expect(angles.rad2deg(1)).toBe(57.29577951308232);
  expect(angles.rad2deg(3)).toBe(171.88733853924697);
  expect(angles.rad2deg(-2)).toBe(-114.59155902616465);
  expect(angles.rad2deg(12.34)).toBe(707.0299191914359);
  expect(angles.rad2deg(-12.34)).toBe(-707.0299191914359);
});
