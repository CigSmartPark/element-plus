import { onMounted, onBeforeUnmount } from 'vue'
import { on, off } from '@park-ui/utils/dom'
import { EVENT_CODE } from '@park-ui/utils/aria'

export const useEscapeKeydown = (handler?: (e: KeyboardEvent) => void) => {
  const cachedHandler = (e: Event) => {
    const event = e as KeyboardEvent
    if (event.key === EVENT_CODE.esc) {
      handler?.(event)
    }
  }
  onMounted(() => {
    on(document, 'keydown', cachedHandler)
  })

  onBeforeUnmount(() => {
    off(document, 'keydown', cachedHandler)
  })
}
