import { AxiosResponse } from 'axios'
import { apiBase } from '~/plugins/apiBase'
import { StickyNoteSearch } from '~/@types/global/other/stickyNoteSearch.type'
/*
 * 記事報告関連
 */
export const StickyNoteSearchService = {
  // C2805
  list: (
    params: StickyNoteSearch.Request
  ): Promise<AxiosResponse<StickyNoteSearch.Response>> =>
    apiBase.post<StickyNoteSearch.Response>(
      '/sticky_notes_search/list',
      params
    ),
}
