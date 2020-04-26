<template>
    <v-app>
      <AppHeader/>
      <v-content>
        <router-view/>
      </v-content>
    </v-app>
</template>

<script>
import AppHeader from './components/Header'

export default {
  name: 'App',

  components: {
    AppHeader,
  },

  data: () => ({
    //
  }),
};
</script>
