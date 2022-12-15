<template>
  <q-layout view="lHh Lpr lff" class="">
    <q-header bordered class="tw-bg-white text-black flex justify-center" >
      <div class="tw-container" >
<nav class="tw-bg-white tw-shadow">
  <div class="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
    <div class="tw-flex tw-h-16 tw-justify-between">
      <div class="tw-flex">
        <div class="tw-flex tw-flex-shrink-0 tw-items-center">
          <img class="tw-block tw-h-8 tw-w-auto lg:tw-hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
          <img class="tw-hidden tw-h-8 tw-w-auto lg:tw-block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
        </div>
        <div class="tw-hidden sm:tw-ml-6 sm:tw-flex sm:tw-space-x-8">
          <!-- Current: "tw-border-indigo-500 tw-text-gray-900", Default: "tw-border-transparent tw-text-gray-500 hover:tw-border-gray-300 hover:tw-text-gray-700" -->
          <a href="#" class="tw-inline-flex tw-items-center tw-border-b-2 tw-border-indigo-500 tw-px-1 tw-pt-1 tw-text-sm tw-font-medium tw-text-gray-900">Submit Platform</a>
          <a href="#" class="tw-inline-flex tw-items-center tw-border-b-2 tw-border-transparent tw-px-1 tw-pt-1 tw-text-sm tw-font-medium tw-text-gray-500 hover:tw-border-gray-300 hover:tw-text-gray-700">Blog</a>
          <a href="#" class="tw-inline-flex tw-items-center tw-border-b-2 tw-border-transparent tw-px-1 tw-pt-1 tw-text-sm tw-font-medium tw-text-gray-500 hover:tw-border-gray-300 hover:tw-text-gray-700">About</a>
          <a href="#" class="tw-inline-flex tw-items-center tw-border-b-2 tw-border-transparent tw-px-1 tw-pt-1 tw-text-sm tw-font-medium tw-text-gray-500 hover:tw-border-gray-300 hover:tw-text-gray-700">Contact</a>
        </div>
      </div>
      <div class="tw-hidden sm:tw-ml-6 sm:tw-flex sm:tw-items-center">
        <button type="button" class="tw-rounded-full tw-bg-white tw-p-1 tw-text-gray-400 hover:tw-text-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2">
          <span class="tw-sr-only">View notifications</span>
          <!-- Heroicon name: outline/bell -->
          <svg class="tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>

        <!-- Profile dropdown -->
        <div class="tw-relative tw-ml-3">
          <div>
            <button @click="popup=!popup" type="button" class="tw-flex tw-rounded-full tw-bg-white tw-text-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="tw-sr-only">Open user menu</span>
              <img class="tw-h-8 tw-w-8 tw-rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
          </div>

          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "tw-transition tw-ease-out tw-duration-200"
              From: "tw-transform tw-opacity-0 tw-scale-95"
              To: "tw-transform tw-opacity-100 tw-scale-100"
            Leaving: "tw-transition tw-ease-in tw-duration-75"
              From: "tw-transform tw-opacity-100 tw-scale-100"
              To: "tw-transform tw-opacity-0 tw-scale-95"
          -->
          <div v-if="popup" class="tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-48 tw-origin-top-right tw-rounded-md tw-bg-white tw-py-1 tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <!-- Active: "tw-bg-gray-100", Not Active: "" -->
            <a href="#" class="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" class="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" class="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div>
        </div>
      </div>
      <div class="tw--mr-2 tw-flex tw-items-center sm:tw-hidden">
        <!-- Mobile menu button -->
        <button type="button" class="tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-gray-400 hover:tw-bg-gray-100 hover:tw-text-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
          <span class="tw-sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "tw-hidden", Menu closed: "tw-block"
          -->
          <svg class="tw-block tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "tw-block", Menu closed: "tw-hidden"
          -->
          <svg class="tw-hidden tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:tw-hidden" id="mobile-menu">
    <div class="tw-space-y-1 tw-pt-2 tw-pb-3">
      <!-- Current: "tw-bg-indigo-50 tw-border-indigo-500 tw-text-indigo-700", Default: "tw-border-transparent tw-text-gray-500 hover:tw-bg-gray-50 hover:tw-border-gray-300 hover:tw-text-gray-700" -->
      <a href="#" class="tw-block tw-border-l-4 tw-border-indigo-500 tw-bg-indigo-50 tw-py-2 tw-pl-3 tw-pr-4 tw-text-base tw-font-medium tw-text-indigo-700">Dashboard</a>
      <a href="#" class="tw-block tw-border-l-4 tw-border-transparent tw-py-2 tw-pl-3 tw-pr-4 tw-text-base tw-font-medium tw-text-gray-500 hover:tw-border-gray-300 hover:tw-bg-gray-50 hover:tw-text-gray-700">Team</a>
      <a href="#" class="tw-block tw-border-l-4 tw-border-transparent tw-py-2 tw-pl-3 tw-pr-4 tw-text-base tw-font-medium tw-text-gray-500 hover:tw-border-gray-300 hover:tw-bg-gray-50 hover:tw-text-gray-700">Projects</a>
      <a href="#" class="tw-block tw-border-l-4 tw-border-transparent tw-py-2 tw-pl-3 tw-pr-4 tw-text-base tw-font-medium tw-text-gray-500 hover:tw-border-gray-300 hover:tw-bg-gray-50 hover:tw-text-gray-700">Calendar</a>
    </div>
    <div class="tw-border-t tw-border-gray-200 tw-pt-4 tw-pb-3">
      <div class="tw-flex tw-items-center tw-px-4">
        <div class="tw-flex-shrink-0">
          <img class="tw-h-10 tw-w-10 tw-rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        </div>
        <div class="tw-ml-3">
          <div class="tw-text-base tw-font-medium tw-text-gray-800">Tom Cook</div>
          <div class="tw-text-sm tw-font-medium tw-text-gray-500">tom@example.com</div>
        </div>
        <button type="button" class="tw-ml-auto tw-flex-shrink-0 tw-rounded-full tw-bg-white tw-p-1 tw-text-gray-400 hover:tw-text-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2">
          <span class="tw-sr-only">View notifications</span>
          <!-- Heroicon name: outline/bell -->
          <svg class="tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>
      </div>
      <div class="tw-mt-3 tw-space-y-1">
        <a href="#" class="tw-block tw-px-4 tw-py-2 tw-text-base tw-font-medium tw-text-gray-500 hover:tw-bg-gray-100 hover:tw-text-gray-800">Your Profile</a>
        <a href="#" class="tw-block tw-px-4 tw-py-2 tw-text-base tw-font-medium tw-text-gray-500 hover:tw-bg-gray-100 hover:tw-text-gray-800">Settings</a>
        <a href="#" class="tw-block tw-px-4 tw-py-2 tw-text-base tw-font-medium tw-text-gray-500 hover:tw-bg-gray-100 hover:tw-text-gray-800">Sign out</a>
      </div>
    </div>
  </div>
</nav>
      </div>
      
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer bordered class="bg-white">
      <div class="tw-mx-auto tw-max-w-7xl tw-overflow-hidden tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <nav class="tw-mx-5 tw-my-2 tw-flex tw-flex-wrap tw-justify-center" aria-label="Footer">
          <div v-for="item in navigation.main" :key="item.name" class="tw-px-5 tw-py-2">
            <a :href="item.href" class="tw-text-base tw-text-gray-500 hover:tw-text-gray-900">{{ item.name }}</a>
          </div>
        </nav>
        <div class="tw-mt-8 tw-flex tw-justify-center tw-space-x-6">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="tw-text-gray-400 hover:tw-text-gray-500">
            <span class="tw-sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="tw-h-6 tw-w-6" aria-hidden="true" />
          </a>
        </div>
        <p class="tw-mt-8 tw-text-center tw-text-base tw-text-gray-400">&copy; 2022 MyDevTools, All rights reserved.</p>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref,h } from 'vue'

const navigation = {

main: [
  { name: 'Your Favourites', href: '/your-favourites',icon:'favorite' },
  { name: 'Discover', href: '/discover', icon:'explore' },
  { name: 'Submit Your Tools', href: '/submit-tool',icon:'add_circle' },
  { name: 'Blog', href: '/blog',icon:'history_edu' },
],
social: [
  {
    name: 'Facebook',
    href: '#',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
            'clip-rule': 'evenodd',
          }),
        ]),
    }),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
            'clip-rule': 'evenodd',
          }),
        ]),
    }),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
          }),
        ]),
    }),
  },
  {
    name: 'GitHub',
    href: '#',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
            'clip-rule': 'evenodd',
          }),
        ]),
    }),
  },
  {
    name: 'Dribbble',
    href: '#',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z',
            'clip-rule': 'evenodd',
          }),
        ]),
    }),
  },
],
}


export default defineComponent({
  name: 'MainLayout',


  setup () {
    const leftDrawerOpen = ref(false)

    return {
      navigation,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
