<template>
  <q-page class="flex justify-center">
    <div class="tw-container column items-center bg-white">
      <div class="flex justify-start items-center tw-w-full tw-px-4 md:tw-px-8 tw-mt-4 md:tw-mt-8">
        <q-btn flat icon="arrow_back_ios" label="Back" @click="$router.back()" />
      </div>
      <div class="tw-w-full tw-px-4 md:tw-px-8 tw-mt-2 md:tw-mt-4">
        <h1 class="text-h4">Submit a tool</h1>
        <p class="tw-mt-3 tw-text-base tw-text-gray-500">We will review your tool within 24 hours and add it to the list.</p>
      </div>
      <div class="tw-w-full flex tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 md:tw-gap-8 tw-px-4 md:tw-px-8 tw-mt-4 md:tw-mt-8">
        <q-input v-model="tool_name" outlined rounded label="Tool Name" placeholder="ex... Your tool">
          <template v-slot:prepend>
            <q-icon name="title" class="tw-bg-gradient-to-r tw-from-purple-600 tw-via-pink-600 tw-to-blue-600 tw-bg-clip-text tw-text-transparent" />
          </template>
        </q-input>
        <q-input v-model="website_url" outlined rounded label="Website URL" placeholder="ex... https://yourtool.io">
          <template v-slot:prepend>
            <q-icon name="link" class="tw-bg-gradient-to-r tw-from-purple-600 tw-via-pink-600 tw-to-blue-600 tw-bg-clip-text tw-text-transparent" />
          </template>
        </q-input>
        <q-select v-model="tags"  multiple use-chips  :options="tags_options" outlined rounded label="Tags" hint="( Max 3 )">
          <template v-slot:prepend>
            <q-icon name="tag" class="tw-bg-gradient-to-r tw-from-purple-600 tw-via-pink-600 tw-to-blue-600 tw-bg-clip-text tw-text-transparent" />
          </template>
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <span class="tw-capitalize">{{ scope.opt }}</span>
              </q-item-section>
            </q-item>
          </template>
          <template v-slot:selected-item="scope">
            <q-chip
              removable
              dense
              @remove="scope.removeAtIndex(scope.index)"
              :tabindex="scope.tabindex"
              color="secondary"
              text-color="white"
              class="q-mx-xs q-pa-sm text-capitalize"
            >
              {{ scope.opt }}
            </q-chip>
          </template>
        </q-select>
        <q-select v-model="features" multiple use-chips :options="features_options" outlined rounded label="Features" hint="( Max 3 )">
          <template v-slot:prepend>
            <q-icon name="auto_awesome" class="tw-bg-gradient-to-r tw-from-purple-600 tw-via-pink-600 tw-to-blue-600 tw-bg-clip-text tw-text-transparent" />
          </template>
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <span class="tw-capitalize">{{ scope.opt }}</span>
              </q-item-section>
            </q-item>
          </template>
          <template v-slot:selected-item="scope">
            <q-chip
              removable
              dense
              @remove="scope.removeAtIndex(scope.index)"
              :tabindex="scope.tabindex"
              color="secondary"
              text-color="white"
              class="q-mx-xs q-pa-sm text-capitalize"
            >
              {{ scope.opt }}
            </q-chip>
          </template>
        </q-select>
        <q-btn unelevated rounded icon="done" class="q-pa-md md:tw-w-56 tw-bg-gradient-to-r tw-from-green-500 tw-to-emerald-500 text-white" >
          <span class="text-bold q-ml-sm">Submit</span>
        </q-btn>
      </div>
      <div class="tw-mt-4 md:tw-mt-8"></div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent,ref } from 'vue'

export default defineComponent({
  name: 'SubmitTool',
  setup(){
    return {
      heightQpage: ref(),
      nob:ref([]),
      tool_name:ref(''),
      website_url:ref(''),
      tags:ref(),
      features:ref(),
      tags_options:ref([
        'marketing',
        'text',
        'design',
        'sales',
        'image',
        'audio',
        'SEO',
        'personalized video',
        'customer support',
        'assistant',
        'misc',
        'email',
        '3D',
        'gaming',
        'search engine',
        'code',
        'research',
        'logo',
        'speech',
        'avatar',
        'general writing',
        'video',
        'music',

      ]),
      features_options:ref([
        'free',
        'paid',
        'freemium',
        'free trial',
        'wait list',
        'open source',
        'mobile app'
      ]),
    }
  },
  methods:{
    setHeightQPage(offset) {
      this.heightQpage = offset ? window.innerHeight - offset + "px" : "100vh";
    },
  },
  created(){
    for(let i = 0; i<100;i++){
      this.nob.push(i)
    }
  }
})
  </script>
  