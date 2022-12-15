<template>
  <q-page class="flex justify-center">
<div class="tw-w-full">
<div class="tw-relative tw-px-4 tw-py-16 sm:tw-px-6 sm:tw-py-24 lg:tw-py-32 lg:tw-px-8 tw-bg-gradient-to-r tw-from-purple-800 tw-to-indigo-700">
            <h1 class="tw-text-center tw-text-4xl tw-font-bold tw-tracking-tight sm:tw-text-5xl lg:tw-text-6xl">
              <span class="tw-block tw-text-white">Platform s</span>
            </h1>
            <p class="tw-mx-auto tw-mt-6 tw-max-w-lg tw-text-center tw-text-xl tw-text-indigo-200 sm:tw-max-w-3xl">THE LARGEST AI TOOLS DIRECTORY, UPDATED DAILY.</p>
          </div>

        <!--<div class="tw-relative tw-shadow-xl sm:tw-overflow-hidden sm:tw-rounded-2xl">
          <div class="tw-absolute tw-inset-0">
            <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-purple-800 tw-to-indigo-700 mix-blend-multiply"></div>
          </div>
          <div class="tw-relative tw-px-4 tw-py-16 sm:tw-px-6 sm:tw-py-24 lg:tw-py-32 lg:tw-px-8">
            <h1 class="tw-text-center tw-text-4xl tw-font-bold tw-tracking-tight sm:tw-text-5xl lg:tw-text-6xl">
              <span class="tw-block tw-text-white">Platform Hunt</span>
            </h1>
            <p class="tw-mx-auto tw-mt-6 tw-max-w-lg tw-text-center tw-text-xl tw-text-indigo-200 sm:tw-max-w-3xl">THE LARGEST AI TOOLS DIRECTORY, UPDATED DAILY.</p>
          </div>
        </div>-->


</div>
    <div class="tw-container column items-center bg-white">
      <div class="tw-py-1 md:tw-py-2"></div>
      <div class="tw-mx-auto tw-mt-12 tw-max-w-lg tw-gap-2 sm:tw-gap-8 md:tw-gap-8 tw-grid lg:tw-grid-cols-3 lg:tw-max-w-none tw-px-4 md:tw-px-8">
        <!--<div v-for="post in posts" :key="post.title" class="tw-flex tw-flex-col tw-overflow-hidden tw-rounded-lg tw-shadow-lg" @click="$router.push({name:'tool',params:{tool_name:'mydevtools'}})">
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
              <q-btn flat icon="open_in_new" class="tw-flex-grow tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 text-white">
                <span class="q-px-sm">Open</span>
              </q-btn>
              <div class="q-px-sm q-mx-xs"></div>
              <q-btn outline icon="bookmark_add" color="light-blue-6" class="tw-flex-grow ">
                <span class="q-px-sm text-bold">Save</span>
              </q-btn>
            </div>
          </div>
        </div>-->
<div class="tw-ml-3 tw-max-w-xs tw-rounded-lg tw-overflow-hidden tw-border tw-border-gray tw-mr-16" v-for="post in posts" :key="post.title">
<router-link :to="'/tool/'+post.title">
  <img class="tw-w-full hover:tw-scale-110 tw-transition tw-ease-in-out cursor-pointer" @click="dialog=true"  :src="post.imageUrl" style="height:160px;" alt="Sunset in the mountains">
</router-link>
  <div class="tw-px-6 tw-py-4">
  <div class="tw-flex tw-justify-between">
    <div class="tw-font-bold tw-text-xl tw-mb-2 tw-flex tw-items-center"><div>{{post.title}}</div>
    <q-icon name="verified" class="tw-ml-2 tw-text-sky-400"></q-icon>
    </div>
    <div class="tw-flex tw-justify-center tw-items-center">
    <q-icon size="xs" color="grey" name="favorite"></q-icon>
    <div class="tw-ml-1">
    96
    </div>
    </div>
    </div>
    <p class="tw-text-gray-700 tw-text-base">
      {{post.description}}
    </p>
  </div>
<div class="tw-px-6 tw-pt-4 ">
<q-chip outline color="primary">
<q-icon name="check_circle"></q-icon><span class="tw-ml-1">Free</span>
</q-chip>
</div>
  <div class="tw-px-6 tw-pt-4 tw-pb-2">
    <span class="tw-inline-block tw-bg-gray-200 tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-font-semibold tw-text-gray-700 tw-mr-2 tw-mb-2">provisioning</span>
    <span class="tw-inline-block tw-bg-gray-200 tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-font-semibold tw-text-gray-700 tw-mr-2 tw-mb-2">automation</span>
  </div>
<div class="tw-flex tw-justify-around tw-mt-3 tw-mb-4">
          <div class="tw-w-32 tw-h-10 tw-px-5 tw-rounded-md tw-flex tw-justify-center tw-items-center " style="cursor:pointer;background:#10A5E9;">
            <q-icon name="pin_invoke" color="white" size="24px" class="tw-my-1 tw-mt-2 tw-mr-1"/>
          </div>
          <div class="tw-border tw-border-2 tw-w-32 tw-h-10 tw-rounded-md tw-flex tw-justify-center tw-items-center" style="cursor:pointer; border-color: #10A5E9;">
            <q-icon name="favorite" color="#10A5E9" style="color:#10A5E9" size="24px" class="tw-my-1 tw-mr-1"/>
          </div>
        </div>
</div>
      </div>
      <div class="tw-py-2 md:tw-py-4"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent,ref } from 'vue'
const posts = [


  {
    title: 'Writesonic',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Writesonic is an AI writer that creates SEO-friendly content for blogs, Facebook ads, ...',
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
  },
  {
    title: 'Fliki',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Create videos from scripts or blog posts using realistic voices in 2 minutes!',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://www.futurepedia.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F4dc642d29507d2e460bbcf47a815af9846729b70-1680x876.png&w=1920&q=75',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Palette.fm',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Colorize Black and White Pictures Automatic, no sign-up, and Free!',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://www.futurepedia.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2F1667d98352c37ae7d207a2e6fe99811f2845a535-1811x888.jpg&w=1920&q=75',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]
export default defineComponent({
  name: 'IndexPage',
  setup(){
    return{
      posts,
      search:ref(''),
      category:ref('All'),
      sort_by:ref('verified'),
      category_options:[{
        label:'All',
        count:0,
        value:'all'
      },{
        label:'Text',
        count:0,
        value:'text'
      },{
        label:'Image',
        count:0,
        value:'image'
      },{
        label:'Design',
        count:0,
        value:'design'
      }],
    }
  }
})
</script>
