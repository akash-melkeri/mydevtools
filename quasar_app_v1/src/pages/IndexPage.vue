<template>
  <q-page class="flex justify-center">
    <div class="tw-container column items-center bg-white">
      <div class="column items-center q-py-lg">
        <h1 class="text-h3 text-bold q-py-sm q-pt-lg">MyDevTools</h1>
        <p class="text-subtitle1 text-bold text-center text-blue-10 q-pt-sm">THE LARGEST AI TOOLS DIRECTORY, UPDATED DAILY.</p>
        <p class="text-grey-9 text-center">9 tools added in last 24 hours.</p>
      </div>
      <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-2 md:tw-gap-4 tw-mt-4">
        <q-select rounded outlined v-model="category" class="bg-white tw-rounded-full"
          style="min-width:8rem;" label="Category" :options="category_options">
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
                <q-item-label class="text-subtitle2 text-grey-7">{{ scope.opt.count }} tool{{(scope.opt.count != 1)?'s':''}}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
        <q-input rounded outlined v-model="search" class="bg-white tw-rounded-full" style="min-width:350px" label="Search">
          <template v-slot:append>
            <q-icon name="search" class="tw-bg-gradient-to-r tw-from-purple-600 tw-via-pink-600 tw-to-blue-600 tw-bg-clip-text tw-text-transparent" />
          </template>
        </q-input>
      </div>
      <div class="tw-py-1 md:tw-py-2"></div>
      <div class="tw-flex tw-flex-row tw-gap-2 tw-gap-4 tw-mt-4">
        <q-btn @click="sort_by='verified'" class="q-pl-sm q-pr-md text-bold" :class="{'tw-bg-gradient-to-r tw-from-green-500 tw-to-emerald-500 text-white':sort_by=='verified','bg-grey-4':sort_by!='verified'}" unelevated rounded label="verified" no-caps icon="verified" />
        <q-btn @click="sort_by='new'" class="q-pl-sm q-pr-md text-bold" :class="{'tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 text-white':sort_by=='new','bg-grey-4':sort_by!='new'}" unelevated rounded label="new" no-caps icon="auto_awesome" />
        <q-btn @click="sort_by='popular'" class="q-pl-sm q-pr-md text-bold" :class="{'tw-bg-gradient-to-r tw-from-orange-500 tw-to-red-500 text-white':sort_by=='popular','bg-grey-4':sort_by!='popular'}" unelevated rounded label="popular" no-caps icon="local_fire_department" />
      </div>
      <div class="tw-mx-auto tw-mt-12 tw-max-w-lg tw-gap-2 sm:tw-gap-8 md:tw-gap-8 tw-grid lg:tw-grid-cols-3 lg:tw-max-w-none tw-px-4 md:tw-px-8">
        <div v-for="post in posts" :key="post.title" class="tw-flex tw-flex-col tw-overflow-hidden tw-rounded-lg tw-shadow-lg" @click="$router.push({name:'tool',params:{tool_name:'mydevtools'}})">
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
              <!-- <q-btn outline icon="bookmark_remove" color="light-blue-6" class="tw-flex-grow">
                <span class="q-px-sm text-bold">Remove</span>
              </q-btn> -->
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
import axios from 'axios'
const posts = [
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
  },
  created(){
    console.log("created2");
    axios.get('/api/load/')
      .then(function (response) {
        if(response.data){
          console.log("response ",response.data);
          // updateSongs(response.data)
        }
      })
      .catch(function (error) {
        console.error("error ",error);
      }).finally(()=>{
        console.log("finally");
        // updateLoading('idle');
      });
  }
})
</script>
