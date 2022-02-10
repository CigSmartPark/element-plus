import { buildProps } from '@park-ui/utils-v2'
import { useTooltipContentProps } from '@park-ui/components/tooltip'

export const usePopoverProps = {
  appendToBody: { type: Boolean, default: undefined },
  content: useTooltipContentProps.content,
  popperStyle: useTooltipContentProps.popperStyle,
  popperClass: useTooltipContentProps.popperClass,
  enterable: {
    ...useTooltipContentProps.enterable,
    default: true,
  },
  effect: {
    ...useTooltipContentProps.effect,
    default: 'light',
  },
  teleported: useTooltipContentProps.teleported,
  ...buildProps({
    title: String,

    width: {
      type: [String, Number],
      default: 150,
    },
  }),
}
