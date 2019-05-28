<template>
   <div>
     <GmapMap
      :center="{lat:55.7492, lng:37.6161}"
      :zoom="14"
      class="google-map"
    ></GmapMap>
   </div>
</template>

<script>
export default {
  name: 'google-map',
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.google-map {
  width: 640px;
  height: 480px;
  margin: 0 auto;
  background: gray;
}
</style>
