const MyPlugin = {
//  插件需要实现install
    install(Vue, options) {
        Vue.component('heading', {
            functional: true,
            props: {
                level: {
                    type: String,
                    require: true
                },
                title: {
                    type: String,
                    default: ''
                },
                icon: {
                    type: String,
                },
            },
            render(h, context) {
                const { icon, title, level } = context.props
                let children = []
                if (icon) {
                    children.push(
                        h(
                            'svg',
                            { class: 'icon', attrs: { 'aria-hidden': true } },
                            [h('use', { attrs: { 'xlink:href': '#icon-' + icon } })]
                        )
                    )
                }
                children = children.concat(context.children)
                const vNode = h(
                    'h' + level,  //参数1：tagName
                    { attrs: { title: title } }, // 参数2:数据
                    children // 参数3：子节点vNode数组
                )
                return vNode
            }
        })
    }
}
if( typeof window !== 'undefined' && window.Vue) {
    // 使用插件使用Vue.use
    window.Vue.use(MyPlugin)
}