# @lp-labs/escape-velocity

Ideal Newtonian surface escape speed and gravitational parameter.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/escape-velocity
```

## Working example

```js
import { escapeSpeed } from '@lp-labs/escape-velocity';
if (Math.abs(escapeSpeed(8, 4) - 2) > 1e-12) throw new Error('Speed');
```

CommonJS: `const api = require('@lp-labs/escape-velocity')`.

## Behavior, customization and limits

escapeSpeed(mu,radius) returns sqrt(2)*sqrt(mu)/sqrt(radius),mu m3/s2,radius metres,positive finite[1e-100,1e100]. gravitationalParameter(massKg) uses G=6.67430e-11 SI,mass same positive bounds. Ideal spherical two-body educational estimate,no propulsion planning,relativity,atmosphere or navigation guidance. Constant time,no overflowing intermediate mu/r.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare const GRAVITATIONAL_CONSTANT = 6.6743e-11;
export declare function gravitationalParameter(massKg: number): number;
export declare function escapeSpeed(mu: number, radius: number): number;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
