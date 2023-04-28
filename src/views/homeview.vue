<template>
  <main class="container text-white">
    <article class="pt-4 mb-8 relative">
      <form action="">
        <input
          @input="getSearchofResult"
          v-model="searchQuery"
          type="text"
          placeholder="Search for a city or country"
          class="py-2 px-1 w-full bg-transparent border-b-4 focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004e71]"
        />
        <ul
          v-if="mapboxSearchResult"
          class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-2 top-[66px]"
        >
            <span v-if="searchError" class="py-2">
                sorry, something went error, please try again
            </span>
            <span v-if="!searchError && mapboxSearchResult.length===0">
                no result for keyword!
            </span>
          <template v-else>
            <li @click="previewCity(searchResult)" class="cursor-pointer py-2" v-for="searchResult in mapboxSearchResult" :key="searchResult.id">
            {{ searchResult.place_name }}
          </li>
          </template>
        </ul>
      </form>
    </article>
  </main>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const searchQuery = ref("");
const apiKey =
  "pk.eyJ1Ijoicmlvc2t1eSIsImEiOiJjbGgwYWRwczEwcmgyM2NwbjMwbXVpajV2In0.azb9qkpND3jevES2OfYSFw";
const queryTimeout = ref(null);
const mapboxSearchResult = ref(null);
const searchError = ref(null);
const router = useRouter();

const previewCity = (searchResult) =>{
    const [city, state] = searchResult.place_name.split(",");
    console.log(city,state);
    router.push({
        name: "CityView",
        params : {
            state : state.replaceAll(" ", ""),
            city : city
        }
        ,query:{
            lat:searchResult.geometry.coordinates[1],
            lng:searchResult.geometry.coordinates[0]
            ,preview: true,    
        }
    })
}

const getSearchofResult = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${apiKey}`
        );
        mapboxSearchResult.value = result.data.features;
        return;
      } catch (error) {
        searchError.value =true
      }
    }
    mapboxSearchResult.value = null;
  }, 300);
};
</script>
