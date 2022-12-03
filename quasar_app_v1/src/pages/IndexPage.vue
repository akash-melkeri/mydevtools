<template>
  <q-page class="flex justify-center">
    <div class="tw-container column items-center">
      <div class="column items-center q-py-lg">
        <h1 class="text-h3 text-bold q-py-md">MyDevTools</h1>
        <p class="text-subtitle1 text-bold text-center">THE LARGEST AI TOOLS DIRECTORY, UPDATED DAILY.</p>
        <p class="text-grey-9 text-center">9 tools added in last 24 hours.</p>
      </div>
      <div class="flex tw-flex-col md:tw-flex-row tw-gap-2 md:tw-gap-4">
        <q-select rounded outlined v-model="category" class="bg-white tw-rounded-full"
          style="min-width:10rem;" label="Category" :options="category_options">
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
                <q-item-label class="text-subtitle2 text-grey-7">{{ scope.opt.count }} tool{{(scope.opt.count != 1)?'s':''}}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
        <q-input rounded outlined v-model="search" class="bg-white tw-rounded-full" label="Search">
          <template v-slot:append>
            <q-icon name="search" color="grey-5" />
          </template>
        </q-input>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent,ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup(){
    return{
      search:ref(''),
      category:ref('All'),
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
