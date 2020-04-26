<template>
  <div>
    <v-navigation-drawer 
        absolute 
        temporary 
        v-model="drawer"
        class="hidden-md-and-up"
    >
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
        <v-list-item v-for="(item,i) in menuItems" :key="`navdrawer${i}`">
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-icon>{{item.icon}}</v-icon>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar
      color="primary"
      dark
      max-height="64"
    >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
    <router-link to="/" tag="span" style="cursor:pointer">
    <v-toolbar-title v-text="'Title Company'"></v-toolbar-title>
    </router-link>
      <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="(item,i) in menuItems" :key="`menuItems${i}`" :to="item.route" text>
                <span class="mr-2">{{item.title}}</span>
                <v-icon>{{item.icon}}</v-icon>
            </v-btn> 
          </v-toolbar-items>
    </v-toolbar>
   </div> 
</template>

<script>
    export default {
        data(){
              return{
                  drawer: false,
                  group: null
                }
            },
        watch:{
          group(){
            this.drawer = false
          },
            },
        computed:{
            menuItems(){
                return[
                    {
                        icon: '',
                        title: 'News',
                        route: '/news'
                    },
                    {
                        icon: '',
                        title: 'Information',
                        route: '/information'
                    },
                    {
                        icon: '',
                        title: 'To consumers',
                        route: '/toConsumers'
                    },
                    {
                        icon: '',
                        title: 'Procurement',
                        route: '/procurement'
                    },
                    {
                        icon: '',
                        title: 'Contacts',
                        route: '/contacts'
                    },
                    {
                        icon: 'mdi-login',
                        title: 'Login',
                        route: '/login'
                    },
                    {
                        icon: 'mdi-lock-open',
                        title: 'Register',
                        route: '/register'
                    }
                ]
            }
        }
    }
</script>
