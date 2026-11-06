import { escapeSpeed } from '@lp-labs/escape-velocity';
if (Math.abs(escapeSpeed(8, 4) - 2) > 1e-12) throw new Error('Speed');
// @ts-expect-error invalid argument must be rejected by declarations
escapeSpeed('8', 4);
