<template>
    <li class="flower-item" :style="styles" :class="{ playing: playing }">
        {{ options.text }}
    </li>
</template>

<script lang="ts">
import Vue from 'vue';
enum Event {
    Ended = 'ended'
}
export default Vue.extend({
    name: 'WallFlowerItem',
    props: {
      options: {
        type: Object,
        required: true
      },
      zIndex: {
        type: Number,
        required: true
      }
    },
    data () {
        return {
            delay: 1,
            timer: null as number | null,
            playing: false,
        };
    },
    computed:{
        styles() : object{
            return {
                top: `${this.options.y}px`,
                left: `${this.options.x}px`,
                'z-index': 99999 + this.zIndex
            }
        }
    },
    beforeMount(){
        if(this.timer){
            clearTimeout(this.timer);
            this.timer = null;
        }
    },
    mounted(){
        this.startAnimation();
    },
    methods: {
        startAnimation(){
            this.$nextTick(() => {
                setTimeout(() => {
                    this.playing = true   
                });
                this.timer = window.setTimeout(() => {
                    this.playing = false;
                    this.$nextTick(() => {
                        this.$emit(Event.Ended, this.options.id)
                    })
                }, this.delay * 1000)
            })
        }
    }
  
});
</script>

<style lang="scss" scoped>
  @import '~/assets/styles/init.scss';

  .flower-item {
    opacity: 1;
    position: fixed;
    display: block;
    transform: translate3d(-50%, -50%, 0);
    transition: opacity .5s;
    color: $primary;
    font-family: 'webfont-bolder', $font-family-normal;
    font-size: $font-size-h3;

    @keyframes flower-playing {
      0% {
        transform: translate3d(-50%, -50%, 0);
      }
      80% {
        transform: translate3d(-50%, -400%, 0);
        opacity: .8;
      }
      100% {
        transform: translate3d(-50%, -500%, 0);
        opacity: 0;
      }
    }

    &.playing {
      animation: flower-playing 1s ease 0s forwards;
    }
  }
</style>
