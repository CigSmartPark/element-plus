import { withInstall, withNoopInstall } from '@park-ui/utils-v2'
import Timeline from './src/timeline'
import TimelineItem from './src/timeline-item.vue'

export const ElTimeline = withInstall(Timeline, {
  TimelineItem,
})
export default ElTimeline
export const ElTimelineItem = withNoopInstall(TimelineItem)

export * from './src/timeline'
export * from './src/timeline-item'
