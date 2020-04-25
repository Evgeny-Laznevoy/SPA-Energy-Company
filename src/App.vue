<template>
    <div>
    <!-- <v-navigation-drawer></v-navigation-drawer> -->
    <AppHeader/>
    <v-content>
      <router-view/>
    </v-content>
    </div>
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
