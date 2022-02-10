import { onBeforeMount } from 'vue'
import { isClient } from '@vueuse/core'
import { generateId } from '@park-ui/utils-v2'

let cachedContainer: HTMLElement

export const POPPER_CONTAINER_ID = `el-popper-container-${generateId()}`

export const POPPER_CONTAINER_SELECTOR = `#${POPPER_CONTAINER_ID}`

export const usePopperContainer = () => {
  onBeforeMount(() => {
    if (!isClient) return

    if (!cachedContainer) {
      const container = document.createElement('div')
      container.id = POPPER_CONTAINER_ID
      document.body.appendChild(container)
      cachedContainer = container
    }
  })
}
