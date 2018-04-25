<template>
    <transition name = "fade">
        <div class="alert" v-if="show">
                {{message}}
        </div>
    </transition>
</template>

<script>
    export default {
        name:'alert',
        props: ['message', 'show'],
        data(){
            return {}
        }
    }
</script>

<style>
.alert{
    border: 2px solid #42b983;
    border-radius: 4px;
    width: max-content;
    margin: 0.5vh 0.5vh;
}
</style>