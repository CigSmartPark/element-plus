<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { buildProps } from '@park-ui/utils-v2'
import { useNamespace } from '@park-ui/hooks'

const spaceItem = buildProps({
  prefixCls: {
    type: String,
    default: '',
  },
} as const)

export default defineComponent({
  props: spaceItem,

  setup(props) {
    const ns = useNamespace('space')

    const classes = computed(() => `${props.prefixCls || ns.b()}__item`)

    return {
      classes,
    }
  },
})
</script>
