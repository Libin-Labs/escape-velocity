function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function positive(value: number): number {
  return finite(value, 1e-100, 1e100);
}
export const GRAVITATIONAL_CONSTANT = 6.6743e-11;
export function gravitationalParameter(massKg: number): number {
  positive(massKg);
  return GRAVITATIONAL_CONSTANT * massKg;
}
export function escapeSpeed(mu: number, radius: number): number {
  positive(mu);
  positive(radius);
  return (Math.SQRT2 * Math.sqrt(mu)) / Math.sqrt(radius);
}
