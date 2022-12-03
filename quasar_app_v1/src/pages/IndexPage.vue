<template>
  <q-page class="flex justify-center">
    <div class="tw-container column items-center">
      <div class="column items-center q-py-lg">
        <h1 class="text-h3 text-bold q-py-sm q-pt-lg">MyDevTools</h1>
        <p class="text-subtitle1 text-bold text-center text-blue-10 q-pt-sm">THE LARGEST AI TOOLS DIRECTORY, UPDATED DAILY.</p>
        <p class="text-grey-9 text-center">9 tools added in last 24 hours.</p>
      </div>
      <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-2 md:tw-gap-4">
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
            <q-icon name="search" color="grey-5" />
          </template>
        </q-input>
      </div>
      <div class="tw-py-1 md:tw-py-2"></div>
      <div class="tw-flex tw-flex-row tw-gap-2 tw-gap-4">
        <q-btn @click="sort_by='verified'" class="q-pl-sm q-pr-md text-bold" :class="{'tw-bg-gradient-to-r tw-from-green-500 tw-to-emerald-500 text-white':sort_by=='verified','bg-grey-4':sort_by!='verified'}" unelevated rounded label="verified" no-caps icon="verified" />
        <q-btn @click="sort_by='new'" class="q-pl-sm q-pr-md text-bold" :class="{'tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 text-white':sort_by=='new','bg-grey-4':sort_by!='new'}" unelevated rounded label="new" no-caps icon="auto_awesome" />
        <q-btn @click="sort_by='popular'" class="q-pl-sm q-pr-md text-bold" :class="{'tw-bg-gradient-to-r tw-from-orange-500 tw-to-red-500 text-white':sort_by=='popular','bg-grey-4':sort_by!='popular'}" unelevated rounded label="popular" no-caps icon="local_fire_department" />
      </div>
      <div class="tw-mx-auto tw-mt-12 tw-grid tw-max-w-lg tw-gap-2 md:tw-gap-5 lg:tw-max-w-none lg:tw-grid-cols-3 q-pa-sm">
        <div v-for="post in posts" :key="post.title" class="tw-flex tw-flex-col tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
          <div class="tw-flex-shrink-0">
            <img class="tw-h-48 tw-w-full tw-object-cover" :src="post.imageUrl" alt="" />
          </div>
          <div class="tw-flex tw-flex-1 tw-flex-col tw-justify-between tw-bg-white tw-p-6">
            <div class="tw-flex-1">
              <p class="tw-text-sm tw-font-medium tw-text-indigo-600">
                <a :href="post.category.href" class="hover:tw-underline">{{ post.category.name }}</a>
              </p>
              <a :href="post.href" class="tw-mt-2 tw-block">
                <p class="tw-text-xl tw-font-semibold tw-text-gray-900">{{ post.title }}</p>
                <p class="tw-mt-3 tw-text-base tw-text-gray-500">{{ post.description }}</p>
              </a>
            </div>
            <div class="tw-mt-6 tw-flex tw-items-center">
              <div class="tw-flex-shrink-0">
                <a :href="post.author.href">
                  <span class="tw-sr-only">{{ post.author.name }}</span>
                  <img class="tw-h-10 tw-w-10 tw-rounded-full" :src="post.author.imageUrl" alt="" />
                </a>
              </div>
              <div class="tw-ml-3">
                <p class="tw-text-sm tw-font-medium tw-text-gray-900">
                  <a :href="post.author.href" class="hover:tw-underline">{{ post.author.name }}</a>
                </p>
                <div class="tw-flex tw-space-x-1 tw-text-sm tw-text-gray-500">
                  <time :datetime="post.datetime">{{ post.date }}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{{ post.readingTime }} read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent,ref } from 'vue'
const posts = [


  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
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
      sort_by:ref('popular'),
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
