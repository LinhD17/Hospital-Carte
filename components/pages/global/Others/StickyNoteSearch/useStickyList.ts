import { ref, computed, InjectionKey } from 'vue'
import { defaultIfEmpty } from '~/hooks/Methods/functions'
import { StickyNoteSearch } from '~/@types/global/other/stickyNoteSearch.type'
import { StickyNoteSearchService } from '~/api/global/other/stickyNoteSearch.service'

export const useStickyList = () => {
    const state = ref({
        color: [], 
    })
}

const searchState = computed<StickyNoteSearch.Request>(() => {
    return {
        color_names: defaultIfEmpty(state.value.colors),
    }
})

const stickyNoteList = ref<StickyNoteSearch.Response>(
    {} as StickyNoteSearch.Response
  )

type SearchUseStickyList = ReturnType<typeof useStickyList>
export const searchUseStickyListStateKey: InjectionKey<SearchUseStickyList> = Symbol('searchUseStickyListState')