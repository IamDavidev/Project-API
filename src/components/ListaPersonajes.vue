<template>
  <div class="lista__personajes">
    <div class="personajes" :key="personajes.id">
      <!-- <Card-Personajes per="personajes" /> -->
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import CardPersonajes from "./CardPersonajes.vue";
export default {
  components: { CardPersonajes },
  setup() {
    const store = useStore();
    const personajes = computed(() => {
      return store.state.personajesFiltered;
    });
    onMounted(() => {
      store.dispatch("getCharacter");
    });
    return { personajes };
  },
};
</script>

<style></style>
