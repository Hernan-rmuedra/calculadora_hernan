const nav = Vue.component('navigator', {
    props = ['userdata'],
    data() {
        return {}
    },
    template: `
    <div id="navigator">
        <template v-if="userdata == ''">
        <button>Login with Google</button>
        </template>
       <template v-else>
        <button>Logout</button>
       </template>


     </div>
    `



})