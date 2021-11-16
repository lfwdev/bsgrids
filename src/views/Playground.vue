<template>
    <div>
        <div class="controls container">
             <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Media Style</span>
                <input type="text" v-model="mediaStyle" class="form-control">
            </div>
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text"># Items</span>
                <input type="text" v-model="value" class="form-control">
            </div>
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Container Classes</span>
                <input type="text" v-model="containerClasses" class="form-control">
            </div>
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Container Style</span>
                <input type="text" v-model="containerStyle" class="form-control">
            </div>
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Row Classes¹</span>
                <input type="text" v-model="rowClasses" class="form-control">
            </div>
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Row Style</span>
                <input type="text" v-model="rowStyle" class="form-control">
            </div>
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Item Classes</span>
                <input type="text" v-model="itemClasses" class="form-control">
            </div>
            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Item Style</span>
                <input type="text" v-model="itemStyle" class="form-control">
            </div>
            <div class="alert info">
                <small>
                    ¹ Parent container needs matching padding utility to use gutter on the X axis!
                </small>
            </div>
        </div>
        <div class="media-wrapper py-3" style="">
            <div class="media m-auto" :style="mediaStyle">
                <div :class="containerClasses" :style="containerStyle"> 
                    <div :class="rowClasses" :style="rowStyle">
                        <template v-for="n in getNumberOfItems()" :key="'demo-' + n">
                            <div :class="itemClasses + ' ' + getRandomBorderColor()" :style="itemStyle">
                                <div class="bg-dark text-center text-white p-1">
                                    <b>
                                        {{ n }}
                                    </b>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            mediaStyle: 'width: 720px !important; border: 1px dashed green;',
            containerClasses: 'container px-3',
            containerStyle: 'border: 1px dashed red; background-color: rgba(255,0,0,0.2);',
            rowClasses: 'row row-cols-12 gx-0',
            rowStyle: 'border: 1px dashed cyan; background-color: rgba(0,255,255,0.2);',
            itemClasses: 'border border-5 col-1',
            itemStyle: 'border-style: inset !important;',
            value: 48,
            bgColors: ['bg-primary','bg-success','bg-danger','bg-warning','bg-secondary','bg-info'],
            borderColors: ['border-primary','border-success','border-danger','border-warning','border-secondary','border-info']
        }
    },
    methods: {
        getNumberOfItems(){
            let val = this.value * 1;
            return (val < 255 ? val : 255) ;
        },
        getRandomInt(max){
            return Math.floor(((Math.random() * max)));
        },
        getRandomBgColor(){
            return this.bgColors[this.getRandomInt(5)];
        },
        getRandomBorderColor(){
            return this.borderColors[this.getRandomInt(5)];
        }
    }
}
</script>

<style>
 .media-wrapper {
    border: none !important;
    max-width:100vw; 
    max-height:100vh; 
    overflow: auto;
 }
</style>