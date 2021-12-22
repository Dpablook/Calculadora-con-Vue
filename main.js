const app = Vue.createApp({
    data() {
    return{
        mensaje: "Quieres calcular algo?",
        n1: 0,
        n2: 0,
        };
    },
    computed: {
        suma(){
            return this.n1 + this.n2;
        },
        resta(){
            return this.n1 - this.n2;
        },
        multiplicar(){
            return this.n1 * this.n2;
        },
        dividir(){
            return this.n1 / this.n2;
        },
    },
});
