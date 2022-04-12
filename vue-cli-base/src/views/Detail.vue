<template>
    <div>
        <div>detail page</div>
        <div>{{$route.params.name}}</div>
    </div>
</template>

<script>
    export default {
        watch: {
            $route: {
                immediate: true,
                handler: function() {
                    console.log('路由发生了变化')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>