/* import {dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

export {__filename, __dirname} */


/* import {dirname} from 'path';
import { fileURLToPath } from 'url';

export const __filename= fileURLToPath(import.meta.url);
export const __dirname=dirname(__filename) */

import {dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export  {__filename, __dirname}