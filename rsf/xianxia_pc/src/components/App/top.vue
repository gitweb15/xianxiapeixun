<template>
    <div>
        {{ title }}
    </div>
</template>

<script>
export default {
    name: 'top',
    data() {
        return {
        }
    },
    props: ['title']
}
</script>
<style scoped>
div{
    margin-top: 15px;
}
</style>