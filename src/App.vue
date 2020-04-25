<template>
  <v-app>
    <AppHeader/>
    <!-- <v-content>
      <Hello/>
    </v-content>  -->
      <v-content>
        <router-view/>
      </v-content>
  </v-app>
</template>

<script>
import AppHeader from './components/Header'
// import Hello from './components/HelloWorld'

export default {
  name: 'App',

  components: {
    AppHeader,
    // Hello
  },

  data: () => ({
    //
  }),
};
</script>
