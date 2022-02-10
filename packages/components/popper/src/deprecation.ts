import { computed, getCurrentInstance } from 'vue'
import { useDeprecated } from '@park-ui/hooks'
import { isBoolean } from '@park-ui/utils-v2'

export function useDeprecateAppendToBody(scope: string, from: string) {
  const vm = getCurrentInstance()!

  const compatTeleported = computed(() => {
    return (
      isBoolean(vm.props[from]) ? vm.props[from] : vm.props.teleported
    ) as boolean
  })

  useDeprecated(
    {
      scope,
      from,
      replacement: 'teleported',
      version: '2.1.0',
      ref: 'https://park-ui.org/en-US/component/tooltip.html#attributes',
    },
    computed(() => isBoolean(vm.props[from]))
  )

  return {
    compatTeleported,
  }
}
