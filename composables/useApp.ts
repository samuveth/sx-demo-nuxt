import { getInstance } from '@snapshot-labs/lock/plugins/vue3'

const state = reactive({
  init: false,
  loading: false
})

const { login } = useWeb3()

export function useApp() {
  async function init() {
    const auth: any = getInstance()
    state.loading = true

    state.init = true
    state.loading = false
  }

  return {
    init,
    app: computed(() => state)
  }
}
