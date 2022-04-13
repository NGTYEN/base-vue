export default store => {
    //  store初始化的时候，将存储在localStorage中的状态还原
    if (localStorage) {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            store.commit('user/login', user.username)
        }
    }
    // 如果用户相关状态发生变化，自动存入localStorage
    store.subscribe((mutation, state) => {
        // {type: 'user/login'}
        if (mutation.type === 'user/logout') {
            localStorage.removeItem('user')
        } else if (mutation.type.startsWith('user/')) {
            const user = JSON.stringify(state.user)
            localStorage.setItem('user', user)
        }
    })
}
