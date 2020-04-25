<template>
    <v-toolbar
      color="primary"
      dark
      max-height="64"
    >
    <router-link to="/" tag="span" style="cursor:pointer">
    <v-toolbar-title v-text="'Title Company'"></v-toolbar-title>
    </router-link>
      <v-spacer></v-spacer>
        <!-- <v-toolbar-items> -->
            <v-btn v-for="(item,i) in menuItems" :key="`menuItems${i}`" :to="item.route" text>
                <span class="mr-2">{{item.title}}</span>
                <v-icon>{{item.icon}}</v-icon>
            </v-btn> 
        <!-- </v-toolbar-items> -->
    </v-toolbar>
</template>

<script>
    export default {
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
