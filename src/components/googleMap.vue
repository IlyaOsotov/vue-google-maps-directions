<template>
   <div>
    <GmapMap
      ref="mapRef"
      :center="{lat:55.7492, lng:37.6161}"
      :zoom="14"
      class="google-map"
    ></GmapMap>
   </div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps';

export default {
  name: 'google-map',
  data() {
    return {
    };
  },
  computed: {
    google: gmapApi,
  },
  methods: {
    calculateAndDisplayRoute(directionsDisplay, directionsService) {
      directionsService.route({
        origin: 'Башня Федерация, Москва',
        destination: 'Красная площадь, Москва',
        travelMode: 'WALKING',
      }, (response, status) => {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        }
      });
    },
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      const directionsService = new this.google.maps.DirectionsService();
      const directionsDisplay = new this.google.maps.DirectionsRenderer({ map });

      this.calculateAndDisplayRoute(directionsDisplay, directionsService);
    });
  },
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
