<template>
  <div class="container">
      <div class="row py-2">
          <div class="bg-dark col">
              &nbsp;
          </div>
      </div>
      <div class="row row-cols-12 gx-2">
          <template v-for="n in 16" :key="'demo-' + n">
            <div :class="getRandomBorderColor()" class="bg-dark text-white border border-5 col p-1">
                <b>
                    &nbsp; {{ n }} &nbsp; 
                </b>
            </div>
          </template>
      </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            bgColors: ['bg-primary','bg-success','bg-danger','bg-warning','bg-secondary','bg-info'],
            borderColors: ['border-primary','border-success','border-danger','border-warning','border-secondary','border-info']
        }
    },
    methods: {
        getRandomBgColor(){
            let n = Math.floor(((Math.random() * 5)));
            return this.bgColors[n];
        },
        getRandomBorderColor(){
            let n = Math.floor(((Math.random() * 5)));
            return this.borderColors[n];
        }
    }
}
</script>

<style>

</style>