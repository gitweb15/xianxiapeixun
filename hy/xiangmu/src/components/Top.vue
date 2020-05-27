<template>
    <div class="header">
        <span class="spancss"></span><a class="h6text">{{ title }}</a>
    </div>
</template>

<script>
export default {
    name:'Top',
    props:['title']
}
</script>
<style scoped>
.header{
    padding: 10px 0;
    text-align: left;
    background: #f9f9f9;
    border-bottom: #f2f2f2;
}
.h6text{
    color: #999999;
    font-size: 14px;
    display: inline-block;
    position: relative;
    top: -3px
}
.spancss{
    background: #1abc9c;
    display: inline-block;
    width: 5px;
    height: 20px;
    margin-right: 5px;
}
</style>