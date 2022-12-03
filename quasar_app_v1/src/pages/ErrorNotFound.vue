<template>
  <q-page :style="{ height: heightQpage }"
  :style-fn="setHeightQPage">
    <div class="tw-flex tw-min-h-full tw-flex-col tw-bg-white tw-pt-16 tw-pb-12">
      <main class="tw-mx-auto tw-flex tw-w-full tw-max-w-7xl tw-flex-grow tw-flex-col tw-justify-center tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <div class="tw-flex tw-flex-shrink-0 tw-justify-center">
          <a href="/" class="tw-inline-flex">
            <span class="tw-sr-only">MyDevTools</span>
            <img class="tw-h-12 tw-w-auto" src="image.svg" alt="" />
          </a>
        </div>
        <div class="tw-py-16">
          <div class="tw-text-center">
            <p class="tw-text-base tw-font-semibold tw-text-indigo-600">404</p>
            <h1 class="tw-mt-2 tw-text-4xl tw-font-bold tw-tracking-tight tw-text-gray-900 sm:tw-text-5xl">Page not found.</h1>
            <p class="tw-mt-2 tw-text-base tw-text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
            <div class="tw-mt-6">
              <p @click="$router.go(-1)" class="cursor-pointer tw-text-base tw-font-medium tw-text-indigo-600 hover:tw-text-indigo-500">
                <span aria-hidden="true"> &larr;</span>
                Go back
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </q-page>
  
</template>

<script>
import { defineComponent,ref } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound',
  setup(){
    return {
      heightQpage: ref(),
    }
  },
  methods:{
    setHeightQPage(offset) {
      this.heightQpage = offset ? window.innerHeight - offset + "px" : "100vh";
      // return { minHeight: offset ? window.innerHeight-offset+'px' : '100vh' }
    },
  }
})
</script>
