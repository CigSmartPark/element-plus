import { inject } from 'vue'
import { elPaginationKey } from '@park-ui/tokens'

export const usePagination = () => inject(elPaginationKey, {})
