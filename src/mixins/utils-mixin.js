import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

let internalUtilsMixin = (base) =>
    class extends base {
        convertToUppercase(text) {
            return text.toUpperCase();
        }
    }

export const UtilsMixin = dedupingMixin(internalUtilsMixin);