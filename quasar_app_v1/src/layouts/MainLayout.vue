<template>
  <q-layout view="lHh Lpr lFf" class="tw-bg-gray-100">
    <q-header bordered class="tw-bg-white text-black flex justify-center" >
      <div class="tw-container" >
        <q-toolbar class="">
          <q-img src="dev_icon.svg" class="tw-h-10 tw-w-10" />
          <q-toolbar-title class="text-bold">
            MyDevTools
          </q-toolbar-title>

          <a href="#" class="tw-text-lg text-bold q-mx-md hover:tw-text-sky-600 tw-transition-colors tw-ease-in-out q-py-lg">Your Favourites</a>
          <a href="#" class="tw-text-lg text-bold q-mx-md hover:tw-text-sky-600 tw-transition-colors tw-ease-in-out q-py-lg">Discover</a>
          <a href="#" class="tw-text-lg text-bold q-mx-md hover:tw-text-sky-600 tw-transition-colors tw-ease-in-out q-py-lg">Submit</a>
          <a href="#" class="tw-text-lg text-bold q-mx-md hover:tw-text-sky-600 tw-transition-colors tw-ease-in-out q-py-lg">Blog</a>
          <q-btn rounded class="tw-text-lg q-py-none q-px-sm q-my-none bg-white" text-color="black" no-caps  >
            <img src="google.svg" class="tw-h-6 tw-w-6 q-mr-sm" />
            <span>Login</span>
          </q-btn>
        </q-toolbar>
      </div>
      
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'MainLayout',


  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
