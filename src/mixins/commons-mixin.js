import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

let internalCommonsMixin = (base) =>
    class extends base {
        fire(eventname, data = {}) {
            this.dispatchEvent(new CustomEvent(eventname, {
                detail: data,
                bubbles: true,
                composed: true
            }));
        }
    }

export const CommonsMixin = dedupingMixin(internalCommonsMixin);