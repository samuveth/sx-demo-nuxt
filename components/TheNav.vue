<script lang="ts" setup>
import { compareAddresses } from '@/helpers/utils'

const route = useRoute()
const uiStore = useUiStore()
const spacesStore = useSpacesStore()

const { param } = useRouteParser('id')
const { resolved, address, networkId } = useResolve(param)
const { web3 } = useWeb3()

const currentRouteName = computed(() => String(route.matched[0]?.name))
const space = computed(() =>
  currentRouteName.value === 'space' && resolved.value
    ? spacesStore.spacesMap.get(`${networkId.value}:${address.value}`)
    : null
)

const { treasury } = useTreasury(space)

const isController = computed(() =>
  space.value
    ? compareAddresses(space.value.controller, web3.value.account)
    : false
)
const navigationConfig = computed(() => ({
  space: {
    overview: {
      name: 'Overview',
      icon: 'heroicons-outline:globe-alt'
    },
    proposals: {
      name: 'Proposals',
      icon: 'heroicons-outline:newspaper'
    },
    ...(space.value?.delegation_api_url
      ? {
          delegates: {
            name: 'Delegates',
            icon: 'heroicons-outline:lightning-bolt'
          }
        }
      : undefined),
    ...(treasury.value
      ? {
          treasury: {
            name: 'Treasury',
            icon: 'heroicons-outline:cash'
          }
        }
      : undefined),
    ...(isController.value
      ? {
          settings: {
            name: 'Settings',
            icon: 'heroicons-outline:cog'
          }
        }
      : undefined)
  },
  settings: {
    spaces: {
      name: 'My spaces',
      icon: 'heroicons-outline:stop'
    },
    contacts: {
      name: 'Contacts',
      icon: 'heroicons-outline:users'
    }
  }
}))
const navigationItems = computed(
  () => navigationConfig.value[currentRouteName.value || '']
)
</script>

<template>
  <div>
    <div
      v-if="navigationItems"
      class="lg:visible fixed w-[240px] border-r left-[72px] top-0 bottom-0 z-10 bg-skin-bg"
      :class="{
        invisible: !uiStore.sidebarOpen
      }"
    >
      <div class="h-[72px] border-b" />
      <div class="py-4">
        <NuxtLink
          v-for="(item, key) in navigationItems"
          :key="key"
          :to="{ name: `${currentRouteName}-${key}` }"
          class="px-4 py-[6px] space-x-2 text-skin-text flex items-center"
          :class="
            route.name === `${currentRouteName}-${key}` && 'text-NuxtLink'
          "
        >
          <Icon
            :name="item.icon"
            class="inline-block"
          />
          <span>
            {{ item.name }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
