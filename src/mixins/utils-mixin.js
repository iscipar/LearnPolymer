import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

let internalUtilsMixin = (base) =>
    class extends base {
        convertToUppercase(text) {
            return text.toUpperCase();
        }

        mapCivilStatus(code) {
            if (code == 'S') {
                return 'Soltero';
            }
            if (code == 'C') {
                return 'Casado';
            }
            if (code == 'D') {
                return 'Divorciado';
            }
            if (code == 'V') {
                return 'Viudo';
            }
        }
    }

export const UtilsMixin = dedupingMixin(internalUtilsMixin);