new Vue({

    el: '#calculator',

    data: {

        numbers: '',

        cursorPosition: 0

    },

    methods: {
        
        appendToDisplay(value) {

            this.numbers += value;

        },

        clearDisplay() {

            this.numbers = '';

        },

        clearLast() {

            this.numbers = this.numbers.slice(0, -1);

        },

        calculate() {

            try {

                this.numbers = eval(this.numbers);

            } catch (e) {

                this.numbers = 'Syntax Error';

            }

        },

    },

});
