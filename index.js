new Vue({

    el: '#calculator',

    data: {

        numbers: ''

    },

    methods: {
        
        appendToDisplay(value) {

            this.numbers += value;

        },

        clearDisplay() {

            this.numbers = '';

        },

        calculate() {

            try {

                this.numbers = eval(this.numbers);

            } catch (e) {

                this.numbers = 'Syntax Error';

            }

        }

    },

});
