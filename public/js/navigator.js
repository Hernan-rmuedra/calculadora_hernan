const nav = Vue.component('navigator', {
    props: ['userdata', 'loginFn', 'logoutFn'],
    data() {
        return {}
    },
    template: `
    <div id="navigator">
        <template v-if="userdata == '' ">
        <button class="btn btn-primary" @click="loginFn()" >Login with Google</button>
        </template>
       <template v-else>
       <img :src="userdata.photoURL" class="profilepic" alt="profile picture">
        <button class="btn btn-danger" @click="logoutFn()">Logout</button>
       </template>
     </div>
    `
})