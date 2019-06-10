<template>
   <div class="map-container">
    <GmapMap
      ref="mapRef"
      :center="{lat:55.7492, lng:37.6161}"
      :zoom="14"
      class="google-map"
    ></GmapMap>
    <draggable
      class="list-group"
      v-model="citiesList"
      group="cities"
      @start="drag=true"
      @end="drag=false">
      <div class="list-group-item" v-for="element in citiesList" :key="element">{{element}}</div>
    </draggable>
   </div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps';
import draggable from 'vuedraggable';

export default {
  name: 'google-map',
  data() {
    return {
      citiesList: ['Башня Федерация', 'Красная площадь'],
    };
  },
  components: {
    draggable,
  },
  computed: {
    google: gmapApi,
  },
  methods: {
    calculateAndDisplayRoute(directionsDisplay, directionsService) {
      const { 0: first, [this.citiesList.length - 1]: last } = this.citiesList;
      directionsService.route({
        origin: first,
        destination: last,
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
.map-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  min-height: 20px;
}
.list-group-item {
  cursor: move;
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.125);
}
.google-map {
  width: 640px;
  height: 480px;
  margin: 0 20px;
  background: gray;
}
</style>
