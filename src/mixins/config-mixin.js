import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

let internalConfigMixin = (base) =>
    class extends base {
        static get properties() {
            return {
                api: {
                    type: Object,
                    value: function() {
                        return {
                            host: 'http://localhost:3000/',
                            resources: {
                                civilstatus: 'civilstatus',
                                people: 'people'
                            }
                        }
                    }
                }
            }
        }
    }

export const ConfigMixin = dedupingMixin(internalConfigMixin);