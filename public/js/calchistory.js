const calcHistory = Vue.component('calchistory', {
    props: ['history'],
    data() {
        return {}

    },
    methods: {
        sendcalc(calc) {
            this.$emit("sendcalc", calc)
        },
        sendResult(result) {
            this.$emit("sendresult", [result])
        }
    },
    template: `
    <div id="calc-history">
    <div class="accordion" id="accordionExample">
    <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            CALCULATIONS
          </button>
            </h2>
        </div>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                <div id="calc-history">
                    <ul>
                        <li v-for="calc in history" class="calc-history">
                            <span @click="sendcalc(calc.calcAarray)">{{calc.calcString}}</span> = <span @click="sendResult(calc.result)">{{calc.result}}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    `
})