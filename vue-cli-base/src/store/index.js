import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/user'
import persist from "@/store/plugins/persist";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user
    },
    strict: true, // 打开后不是由mutations进行修改，会报错,
    plugins: [persist]
})
