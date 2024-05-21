import Vue from 'vue';

new Vue({

    el: '#calculator',

    data: {

        numbers: '',

    },

    methods: {
        
        appendToDisplay(value) {

            this.numbers += value;

        },

        clearDisplay() {

            this.numbers = '';

        },

    },

});
