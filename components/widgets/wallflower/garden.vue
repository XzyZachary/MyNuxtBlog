<template>
    <div id="wallflower">
        <ul v-if="flowers.length" class="garden-box">
            <flower v-for="(flower, index) in flowers" :key="flower.id" :z-index="index + 1" :options="flower" @ended="handleAnimationEnd" /> 
        </ul>
    </div>
</template>
<script lang="ts">

const FLOWERS = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']
export interface IFlower {
    id: number
    x: number
    y: number
    text: string
}

import Vue from 'vue'
import Flower from './flower.vue'
export default Vue.extend({
    name: 'WallFlowerGarden',
    components: {
      Flower
    },
    data () {
        return {
            id: 0,
            flowers: [] as IFlower[],
            contentIndex: -1
        };
    },
    mounted(){
        window.addEventListener('click', this.handleClick)
    },
    beforeDestroy(){
        window.removeEventListener('click', this.handleClick)
    },
    methods: {
        handleClick(event: MouseEvent){
            this.contentIndex++
            if(this.contentIndex >= FLOWERS.length){
                this.contentIndex = 0
            }
            this.flowers.push({
                id: ++this.id,
                x: event.x || event.clientX,
                y: event.y || event.clientY,
                text: FLOWERS[this.contentIndex]
            } as IFlower)
        },
        handleAnimationEnd(id: number){
            const targetIndex = this.flowers.findIndex(flower => flower.id === id)
            if (targetIndex > -1) {
                this.flowers.splice(targetIndex, 1)
            }
      }
    }
})
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/init.scss';

  #wallflower {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 0;
    list-style: none;
    z-index: $z-index-underground;

    .garden-box {
      width: 100%;
      height: 100%;
    }
  }
</style>