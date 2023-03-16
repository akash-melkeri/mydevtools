<template>
 <div class="tw-w-11/12 tw-mx-auto">
    <div class="tw-flex tw-justify-between q-py-lg">
      <div class="tw-flex">
        <div class="outline_color_primary">
          <div class="flex justify-start items-center tw-w-full tw-px-4 md:tw-px-8 tw-mt-4 md:tw-mt-8">
            <q-btn flat icon="arrow_back_ios" label="Back" @click="$router.back()" />
          </div>
        </div>
      </div>
      <div class="tw-flex tw-items-end  tw-w-3/12 tw-justify-end">
        <div class="q-mr-md">
          <q-btn
            v-if="step > 1"
            @click="
            $refs.stepper.previous();
            "
            label="Previous"
            no-caps
            class="tw-m-px tw-w-26 tw-h-11 tw-rounded-lg tw-border tw-border-solid tw-border-blue-500 tw-text-blue-500 hover:tw-text-white hover:tw-bg-gradient-to-r hover:tw-from-cyan-500 hover:tw-to-blue-500"
          />
        </div>
        <div class="outline_color_primary">
          <q-btn
            @click="validateAndSubmit()"
            v-if="step === 2"
            label="Submit"
            no-caps
            :ripple="{ color: 'green' }"
            class="tw-m-px tw-w-26 tw-h-11 tw-rounded-lg tw-rounded-lg tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 text-white"
          />
          <q-btn
            @click="validateAndSubmit()"
            v-else
            label="Next step"
            no-caps
            :ripple="{ color: 'green' }"
            class="tw-m-px tw-w-28 md:tw-w-26 tw-h-11 tw-rounded-lg tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 text-white"
          />
        </div>
      </div>
    </div>
    <q-stepper
      v-model="step"
      ref="stepper"
      alternative-labels
      color="primary"
      class="no-shadow q-pt-md hover:bg-white stepper-header"
      animated
    >
      <q-step
        :name="1"
        title="Tool Details"
        icon="drive_file_rename_outline"
        active-icon="none"
        :done="step > 1"
      >
        <div class="tw-w-full flex tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 md:tw-gap-8 tw-px-4 md:tw-px-8 tw-mt-4 md:tw-mt-8">
        <div class="col ">
          <span class="title_text">Tool Name</span>
          <q-input class="q-mt-sm" v-model="tool_name" outlined   placeholder="AI Tool" >
            <template v-slot:prepend>
              <q-icon name="title" class="tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-700 tw-bg-clip-text tw-text-transparent" />
            </template>
          </q-input>

        </div>
       <div class="col">
        <span class="title_text">Website URL</span>
          <q-input class="q-mt-sm"  v-model="website_url" outlined placeholder="https://aitool.io">
            <template v-slot:prepend>
              <q-icon name="link" class=" tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-700 tw-bg-clip-text tw-text-transparent" />
            </template>
          </q-input>

       </div>
        <div class="col">
        <span class="title_text">Tags</span>   
          <q-select  class="q-mt-sm"  v-model="tags"  multiple use-chips  :options="tags_options" outlined label="Tags" hint="( Max 3 )">
            <template v-slot:prepend>
              <q-icon name="tag" class=" tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-700 tw-bg-clip-text tw-text-transparent" />
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
                text-color="white"
                class="q-mx-xs q-pa-sm text-capitalize chip-gradiant"
              >
                {{ scope.opt }}
              </q-chip>
            </template>
          </q-select>
        </div>
        
        <div class="col">
          <span class="title_text">Features</span>   
          <q-select class="q-mt-sm" v-model="features" multiple use-chips :options="features_options" outlined rounded label="Features" hint="( Max 3 )">
          <template v-slot:prepend>
            <q-icon name="auto_awesome" class="tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-700 tw-bg-clip-text tw-text-transparent" />
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
              
              text-color="white"
              class="q-mx-xs q-pa-sm text-capitalize chip-gradiant"
            >
              {{ scope.opt }}
            </q-chip>
          </template>
        </q-select>
        </div>
        
        <div class="col">
          <span class="title_text">Tool's short summary (Optional)</span>
          <q-input
            v-model="tool_short_summary"
            outlined
            type="textarea"
            class="q-mt-sm"
          
          >
          <template v-slot:prepend>
              <q-icon name="link" class=" tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-700 tw-bg-clip-text tw-text-transparent" />
            </template>
          </q-input>
          
        </div>

        <div class="col">
          <span class="title_text">Tool's description (Optional)</span>
          <q-input
            v-model="tool_description"
            outlined
            type="textarea"
            class="q-mt-sm"
            
          >
          <template v-slot:prepend>
              <q-icon name="link" class=" tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-700 tw-bg-clip-text tw-text-transparent" />
            </template>
          </q-input>
          
        </div>
      </div>
      </q-step>
      <q-step
        :name="2"
        title="Tool URLs"
        icon="library_add"
        active-icon="none"
        :done="step > 2"
      >
      <div class="tw-w-full flex tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 md:tw-gap-8 tw-px-4 md:tw-px-8 tw-mt-4 md:tw-mt-8">
        <div class="col">
          <span class="title_text">Facebook URL</span>
          <q-input class="q-mt-sm"  v-model="facebook_url" outlined >
            <template v-slot:prepend>
              <q-icon name="link" class=" tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-700 tw-bg-clip-text tw-text-transparent" />
            </template>
          </q-input>
        </div>
        <div class="col">
          <span class="title_text">Twitter URL</span>
          <q-input class="q-mt-sm"  v-model="twitter_url" outlined >
            <template v-slot:prepend>
              <q-icon name="link" class=" tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-700 tw-bg-clip-text tw-text-transparent" />
            </template>
          </q-input>
        </div>

         <div class="col">
          <span class="title_text">Instagram URL</span>
          <q-input class="q-mt-sm"  v-model="instagram_url" outlined >
            <template v-slot:prepend>
              <q-icon name="link" class=" tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-700 tw-bg-clip-text tw-text-transparent" />
            </template>
          </q-input>
        </div>


        <div class="col">
          <span class="title_text">Github URL</span>
          <q-input class="q-mt-sm"  v-model="github_url" outlined >
            <template v-slot:prepend>
              <q-icon name="link" class=" tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-700 tw-bg-clip-text tw-text-transparent" />
            </template>
          </q-input>
        </div>
       </div>
      </q-step>
    </q-stepper>
  </div>
  <!-- <q-page class="flex justify-center"> -->
    <!-- <div class="tw-container column items-center bg-white">
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
    </div> -->
  <!-- </q-page> -->
</template>
<script>
import { defineComponent,ref } from 'vue'
import { useQuasar } from "quasar";
const $q = useQuasar();
export default defineComponent({
  name: 'SubmitTool',
  setup(){
    return {
      step:ref(1),
      heightQpage: ref(),
      nob:ref([]),
      tool_name:ref(''),
      website_url:ref(''),
      tags:ref(),
      features:ref(),
      facebook_url:ref(''),
      twitter_url:ref(''),
      instagram_url:ref(''),
      github_url:ref(''),
      tool_short_summary:ref(''),
      tool_description:ref(''),
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
     validateAndSubmit() {
      if (this.step == 1) {
        if(this.tool_name =='' || this.tool_name == null){
          this.$q.notify({
            message: "Please enter the tool name",
            type: "warning",
            textColor: "black",
            actions: [{ icon: "close", color: "black" }],
          });
        }

        else if(this.website_url =='' || this.website_url == null){
          this.$q.notify({
            message: "Please enter the website URL",
            type: "warning",
            textColor: "black",
            actions: [{ icon: "close", color: "black" }],
          });
        }
        
        else if(this.tags == null || Object.keys(this.tags).length==0 ){
          this.$q.notify({
            message: "Please select the tags",
            type: "warning",
            textColor: "black",
            actions: [{ icon: "close", color: "black" }],
          });
        }
        else if(Object.keys(this.tags).length > 3){
          this.$q.notify({
            message: "You will not be able to add more than 3 tags",
            type: "warning",
            textColor: "black",
            actions: [{ icon: "close", color: "black" }],
          });
        }
        else if(this.features == null || Object.keys(this.features).length==0 ){
          this.$q.notify({
            message: "Please select the features",
            type: "warning",
            textColor: "black",
            actions: [{ icon: "close", color: "black" }],
          });
        }

        else if(Object.keys(this.features).length > 3){
          this.$q.notify({
            message: "You will not be able to add more than 3 features",
            type: "warning",
            textColor: "black",
            actions: [{ icon: "close", color: "black" }],
          });
        }
        else{
          this.step = this.step + 1;
        }
      } 
      else if (this.step == 2) {
         if(this.facebook_url =='' || this.facebook_url == null){
          this.$q.notify({
            message: "Please enter the facebook url",
            type: "warning",
            textColor: "black",
            actions: [{ icon: "close", color: "black" }],
          });
        }

        else if(this.twitter_url =='' || this.twitter_url == null){
          this.$q.notify({
            message: "Please enter the twitter url",
            type: "warning",
            textColor: "black",
            actions: [{ icon: "close", color: "black" }],
          });
        }
        
        else if(this.instagram_url =='' || this.instagram_url == null ){
          this.$q.notify({
            message: "Please select the instagram url",
            type: "warning",
            textColor: "black",
            actions: [{ icon: "close", color: "black" }],
          });
        }

        else if(this.github_url =='' || this.github_url == null ){
          this.$q.notify({
            message: "Please select the github url",
            type: "warning",
            textColor: "black",
            actions: [{ icon: "close", color: "black" }],
          });
        }
        else{
          // On Submit
          this.$q.notify({
            message: "Assignment updated successfully",
            color: "positive",
            textColor: "white",
            icon: "check",
            timeout: 2500,
            position: "bottom",
          });

          // Empty the data
          this.instagram_url=''
          this.facebook_url=''
          this.twitter_url=''
          this.github_url=''
          this.tool_name=''
          this.features=''
          this.tags=null
          this.features=null
          this.website_url=''

        }
      
      } 
    
    },
  },
  created(){
    for(let i = 0; i<100;i++){
      this.nob.push(i)
    }
  }
})
  </script>
  <style lang="scss">
    .title_text{
      color: $subHeader;
      font-size: 1.1rem;
    }
    .q-field--outlined .q-field__control{
      border-radius: 20px;
    }
    .chip-gradiant{
     background: $my-var
    }
    .gradiant_color{
      color: $my-var;
    }
  </style>