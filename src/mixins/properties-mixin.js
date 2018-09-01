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
                            civilstatus: 'Estado civil',
                            select: '- Seleccione -'
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
                },
                datepicker: {
                    type: Object,
                    value: function() {
                        return {
                            monthNames: [
                                'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
                                'Junio', 'Julio', 'Agosto', 'Septiembre',
                                'Octubre', 'Noviembre', 'Diciembre'
                            ],
                            weekdays: [
                                'Domingo', 'Lunes', 'Martes', 'Miércoles',
                                'Jueves', 'Viernes', 'Sábado'
                            ],
                            weekdaysShort: [
                                'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'
                            ],
                            firstDayOfWeek: 1,
                            week: 'Semana',
                            calendar: 'Calendario',
                            clear: 'Limpiar',
                            today: 'Hoy',
                            cancel: 'Cancelar',
                            formatDate: d => {
                                return moment(d).format('DD-MM-YYYY');
                            },
                            parseDate: null,
                            formatTitle: (monthName, fullYear) => {
                                return monthName + ' ' + fullYear;
                            }
                        }
                    }
                }
            }
        }
    }

export const PropertiesMixin = dedupingMixin(internalPropertiesMixin);