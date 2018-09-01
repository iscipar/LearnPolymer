import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

let internalPropertiesMixin = (base) =>
    class extends base {
        static get properties() {
            return {
                label: {
                    type: Object,
                    value: function() {
                        return {
                            text: 'texto',
                            firstname: 'Nombre',
                            document: 'NIF',
                            firstsurname: 'Primer apellido',
                            secondsurname: 'Segundo apellido',
                            birthdate: 'Fecha nacimiento',
                            civilstatus: 'Estado civil'
                        }
                    }
                },
                button: {
                    type: Object,
                    value: function() {
                        return {
                            convert: 'Convertir',
                            clean: 'Limpiar',
                            search: 'Buscar',
                            cancel: 'Cancelar',
                            accept: 'Aceptar',
                            new: 'Alta',
                            save: 'Guardar'
                        }
                    }
                },
                title: {
                    type: Object,
                    value: function() {
                        return {
                            searchcriteria: 'Criterios de Búsqueda',
                            peoplelist: 'Listado de Personas',
                            newpeople: 'Alta de Personas'
                        }
                    }
                },
                message: {
                    type: Object,
                    value: function() {
                        return {
                            withoutresults: 'No existen resultados según los criterios de búsqueda introducidos',
                            correctinsertion: 'El alta ha sido realizada correctamente',
                            incorrectinsertion: 'Se ha producido un error durante el proceso de alta',
                            correctupdate: 'La modificación ha sido realizada correctamente',
                            incorrectupdate: 'Se ha producido un error durante el proceso de modificación',
                            correctdelete: 'La eliminación ha sido realizada correctamente',
                            incorrectdelete: 'Se ha producido un error durante el proceso de eliminación'
                        }
                    }
                }
            }
        }
    }

export const PropertiesMixin = dedupingMixin(internalPropertiesMixin);