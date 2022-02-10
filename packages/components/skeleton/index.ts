import { withInstall, withNoopInstall } from '@park-ui/utils-v2'

import Skeleton from './src/skeleton.vue'
import SkeletonItem from './src/skeleton-item.vue'

export const ElSkeleton = withInstall(Skeleton, {
  SkeletonItem,
})
export default ElSkeleton
export const ElSkeletonItem = withNoopInstall(SkeletonItem)

export * from './src/skeleton'
export * from './src/skeleton-item'
