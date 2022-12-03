<template>
  <q-layout view="lHh Lpr lFf" class="tw-bg-gray-100">
    <q-header bordered class="tw-bg-white text-black flex justify-center" >
      <div class="tw-container" >
        <q-toolbar class="">
          <q-img src="dev_icon.svg" class="tw-h-10 tw-w-10 cursor-pointer" @click="$router.push('/')" />
          <q-toolbar-title class="text-bold cursor-pointer" @click="$router.push('/')">
            MyDevTools
          </q-toolbar-title>

          <a href="/your-favourites" class="tw-text-md text-bold q-mx-md hover:tw-text-sky-600 tw-transition-colors tw-ease-in-out q-py-lg">Your Favourites</a>
          <a href="/discover" class="tw-text-md text-bold q-mx-md hover:tw-text-sky-600 tw-transition-colors tw-ease-in-out q-py-lg">Discover</a>
          <a href="/submit" class="tw-text-md text-bold q-mx-md hover:tw-text-sky-600 tw-transition-colors tw-ease-in-out q-py-lg">Submit</a>
          <a href="/blog" class="tw-text-md text-bold q-mx-md hover:tw-text-sky-600 tw-transition-colors tw-ease-in-out q-py-lg">Blog</a>
          <q-btn rounded class="tw-text-md q-py-none q-px-sm q-my-none bg-white" text-color="black" no-caps  >
            <img src="google.svg" class="tw-h-6 tw-w-6 q-mr-sm" />
            <span class="text-bold">Login</span>
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
