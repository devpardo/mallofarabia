<template>
<svg xmlns="http://www.w3.org/2000/svg" width="41.582" height="17.103" viewBox="0 0 41.582 17.103">
  <path id="primary" class="moa-arrow" d="M6.43,0V38.582M0,32.152l6.43,6.43,6.43-6.43" transform="translate(1.5 14.982) rotate(-90)"/>
</svg>

</template>

<script>
export default {
    name: 'MoaArrow'
}
</script>

<style lang="scss">
.moa-arrow {
    fill: none;
    stroke: $primary;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3px;
    opacity: 0.6;
    height: 30px !important;
}
</style>