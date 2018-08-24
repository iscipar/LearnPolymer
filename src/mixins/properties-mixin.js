import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

let internalPropertiesMixin = (base) =>
    class extends base {
        static get properties() {
            return {
                label: {
                    type: Object,
                    value: function() {
                        return {
                            text: 'texto'
                        }
                    }
                },
                button: {
                    type: Object,
                    value: function() {
                        return {
                            convert: 'Convertir'
                        }
                    }
                }
            }
        }
    }

export const PropertiesMixin = dedupingMixin(internalPropertiesMixin);