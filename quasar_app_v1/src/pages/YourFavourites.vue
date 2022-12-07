<template>
  <q-page class="flex justify-center">
    <div class="tw-container column items-center bg-white">
      <div class="flex justify-between items-center tw-w-full tw-px-4 md:tw-px-8 tw-mt-4 md:tw-mt-8">
        <q-btn flat icon="arrow_back_ios" label="Back" @click="$router.back()" />
        <div class="tw-flex tw-items-center tw-justify-center">
          <q-btn flat icon="share" class="tw-flex-grow tw-flex-grow tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 text-white">
            <span class="q-px-sm tw-hidden md:tw-inline-block">Share this list</span>
          </q-btn>
          <!-- <div class="q-px-sm q-mx-xs"></div>
          <q-btn outline icon="email" color="light-blue-6" class="tw-flex-grow">
            <span class="q-px-sm text-bold tw-hidden md:tw-inline-block">Suggest edit</span>
          </q-btn> -->
          <!-- <q-btn outline icon="bookmark_remove" color="light-blue-6" class="tw-flex-grow">
            <span class="q-px-sm text-bold">Remove</span>
          </q-btn> -->
        </div>
      </div>
      <div class="tw-w-full tw-px-4 md:tw-px-8 tw-mt-2 md:tw-mt-4">
        <h1 class="text-h4 flex items-center">Your favourite tools <q-badge rounded color="primary" label="3" class="q-ml-md text-subtitle2 text-bold" /></h1>
        <p class="tw-mt-3 tw-text-base tw-text-gray-500">These are the tools you have favourited. You can remove them from your favourites by clicking the bookmark icon.</p>
      </div>
      <div class="tw-mx-auto tw-my-8 md:tw-my-8 tw-max-w-lg tw-gap-4 sm:tw-gap-8 md:tw-gap-16 tw-grid lg:tw-grid-cols-3 lg:tw-max-w-none tw-px-4 md:tw-px-8 ">
        <div v-for="index in [1,2,3]" :key="index" class="tw-flex tw-flex-col tw-overflow-hidden tw-rounded-lg tw-shadow-lg" @click="$router.push({name:'tool',params:{tool_name:'mydevtools'}})">
          <div class="tw-flex-shrink-0">
            <img class="tw-h-48 tw-w-full tw-object-cover hover:tw-scale-110 tw-transition tw-ease-in-out" :src="post.imageUrl" alt="" />
          </div>
          <div class="tw-flex tw-flex-1 tw-flex-col tw-justify-between tw-bg-white tw-p-6">
            <div class="tw-flex-1">
              <div class="tw-mt-2 tw-block">
                <p class="tw-text-xl tw-font-semibold tw-text-gray-900 flex items-center tw-gap-2 flex justify-between">
                  <span>{{ post.title }} <q-icon name="verified" color="light-blue-6" /></span>
                  <span class="flex justify-center cursor-inherit">
                    <q-tooltip>120 people favorited this tool</q-tooltip>
                    <q-icon name="book" color="blue-grey-4"/> 
                    <span class="tw-text-sm text-blue-grey-4">120</span>
                  </span>
                  
                </p>
                <p class="tw-mt-3 tw-text-base tw-text-gray-500">{{ post.description }}</p>
              </div>
            </div>
            <div class="tw-mt-6">
              <a href="/tags" class=" text-blue-7" >#text</a>
            </div>
            <div class="tw-mt-6 tw-flex tw-items-center tw-justify-center">
              <q-btn flat icon="open_in_new" class="tw-flex-grow tw-flex-grow tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 text-white">
                <span class="q-px-sm">Open</span>
              </q-btn>
              <div class="q-px-sm q-mx-xs"></div>
              <q-btn outline icon="bookmark_add" color="light-blue-6" class="tw-flex-grow">
                <span class="q-px-sm text-bold">Save</span>
              </q-btn>
              <!-- <q-btn outline icon="bookmark_remove" color="light-blue-6" class="tw-flex-grow">
                <span class="q-px-sm text-bold">Remove</span>
              </q-btn> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent,ref } from 'vue'

const post = 


  {
    title: 'Writesonic',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Writesonic is an AI writer that creates SEO-friendly content for blogs, Facebook ads, Google ads, and Shopify for free. Our paraphrasing tool lets you rephrase entire articles instantly.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://www.futurepedia.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fbe837214bd8c2249f9c5ba8e9bb5c7c9cc158bf4-1680x876.png&w=1920&q=75',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }

export default defineComponent({
  name: 'YourFavourites',
  setup(){
    return {
      post,
      heightQpage: ref(),
    }
  },
  methods:{
  }
})
</script>
  