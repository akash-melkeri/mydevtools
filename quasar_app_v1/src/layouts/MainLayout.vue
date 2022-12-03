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
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
