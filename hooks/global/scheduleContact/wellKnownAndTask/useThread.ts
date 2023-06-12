import { cloneDeep } from 'lodash'
import { apiBase } from '~/plugins/apiBase'
import { ref, readonly, InjectionKey } from 'vue'

export type Thread = {
  updated_at: string
  to_department_names: string[]
  creator: Creator
  final_updater: Creator
  title: string
  has_attachments: boolean
  has_mentions: boolean
  forums_uuid: string
  created_at: number
  body: string
}

export type ThreadsList = {
  items: Thread[]
  maxItemCount: number
  pageNo: number
  totalPageCount: number
}

export type SearchThread = {
  to_department_uuids: string[]
  creator_uuids: string[]
  title: string
  has_attachments: number
  is_published_end: number
  sort: string[]
  order: number[]
  limit: number
  pageNo: number
}

export type CreateThread = {
  title: string
  body: string
  attachments: File[]
  to_departments: string[]
  valid_from: string
  valid_to: string
}

export type UpdateThread = {
  forum_uuid: string
  title?: string
  body?: string
  attachments?: File[]
  to_departments?: string[]
}

export type CreateThreadComment = {
  forum_uuid: string
  body: string
  mentioned_staffs?: string[]
}

export type UpdateThreadComment = {
  comment_uuid: string
  body: string
  mentioned_staffs?: string[]
}

export type to_departments = string[]

//掲示板詳細取得
//----孫
export type MentionedStaffs = {
  //メンション職員情報
  department_uuid: string
  department_name: string
  account_uuid: string
  staff_name: string
}

export type CommentCreator = {
  //コメント投稿職員情報
  department_uuid: string
  department_name: string
  account_uuid: string
  staff_name: string
  written_at: string
}

//--子
export type Department = {
  //掲示先部署
  department_uuid: string
  department_name: string
}

export type Attachment = {
  //添付ファイル情報
  file_name: string
  file_url: string
}

export type Creator = {
  //投稿者情報
  department_uuid: string
  department_name: string
  account_uuid: string
  staff_name: string
}

export type FinalUpdater = {
  //最終更新者情報
  department_uuid: string
  department_name: string
  account_uuid: string
  staff_name: string
}

export type Comment = {
  //コメント情報
  comment_uuid: string
  mentioned_staffs: MentionedStaffs[]
  body: string
  comment_creator: CommentCreator[]
}

//親
export type ShowThread = {
  to_departments: Department[]
  title: string
  body: string
  attachments: Attachment[]
  creator: Creator[]
  created_at: string
  final_updater: FinalUpdater[]
  final_updated_at: string
  comments_count: number
  comments: Comment[]
  valid_from: string //掲載開始日時
  valid_to: string //掲載終了日時
}

export const useThreads = () => {
  // E1020
  const threadsList = ref<ThreadsList>({} as ThreadsList)
  const getThreadsList = () => {
    return cloneDeep(threadsList.value.items)
  }
  const searchParamater = ref<SearchThread>({
    // 検索条件初期値
    to_department_uuids: Array(),
    creator_uuids: Array(),
    title: '',
    has_attachments: 0,
    is_published_end: 0,
    sort: ['updated_at', 'creator_name'],
    order: [1, 1],
    limit: 0,
    pageNo: 0,
  })
  const setSearchParameter = (param: SearchThread) => {
    searchParamater.value = cloneDeep(param)
  }
  const getSearchParameter = () => {
    return cloneDeep(searchParamater.value)
  }
  const fetchThreadsLoading = ref<boolean>(false)
  const fetchThreads = async () => {
    fetchThreadsLoading.value = true
    const url = '/forums/list'
    const response = await apiBase.post<ThreadsList>(url, searchParamater.value)
    if (response.status == 200) {
      threadsList.value = response.data
    }
    fetchThreadsLoading.value = false
  }

  // E1021
  const threadShow = ref<ShowThread>()
  const getThreadShow = () => {
    return cloneDeep(threadShow.value)
  }
  const showThread = async (e: object) => {
    const url = '/forums/show'
    const response = await apiBase.post<ShowThread>(url, e)
    if (response.status == 200) {
      threadShow.value = response.data
    }
  }

  // E1022
  const createThreads = async (e: CreateThread) => {
    const url = '/forums/store'
    const formData = new FormData()

    const _ = require('lodash')
    _.forEach(e, (value:any, key:any) => {
      if (Array.isArray(value)) {
          _.forEach(value, (v:any, _:any) => {
              formData.append(key + '[]', v)
          })
      } else {
          formData.append(key, value)
      }
    })

    const headers = {'content-type': 'multipart/form-data'}
    const response = await apiBase.post(url, formData, { headers })
    if (response.status === 200) {
    } else {
    }
    return response.status
  }

  // E1023
  const updateThreads = async (e: UpdateThread) => {
    const url = '/forums/update'
    const response = await apiBase.post(url, e)
    if (response.status === 200) {
    } else {
    }
    return response.status
  }

  // E1025
  const createThreadsComment = async (e: CreateThreadComment) => {
    const url = '/create_forum_comment'
    const response = await apiBase.post(url, e)
    if (response.status === 200) {
    } else {
    }
    return response.status
  }

  // E1026
  const updateThreadsComment = async (e: UpdateThreadComment) => {
    const url = '/update_forum_comment'
    const response = await apiBase.post(url, e)
    if (response.status === 200) {
    } else {
    }
    return response.status
  }

  // E1027
  const deleteThreadsComment = async (e: string) => {
    const url = '/delete_forum_comment'
    const response = await apiBase.post(url, {
      comment_uuid: e,
    })
    if (response.status === 200) {
    } else {
    }
    return response.status
  }

  return {
    threadsList: readonly(threadsList),
    getThreadsList,
    searchParamater: readonly(searchParamater),
    setSearchParameter,
    getSearchParameter,
    fetchThreadsLoading: readonly(fetchThreadsLoading),
    fetchThreads,
    createThreads,
    threadShow: readonly(threadShow),
    getThreadShow,
    showThread,
    updateThreads,
    createThreadsComment,
    updateThreadsComment,
    deleteThreadsComment,
  }
}

type SearchUseThreads = ReturnType<typeof useThreads>
export const searchUseThreadsStateKey: InjectionKey<SearchUseThreads> =
  Symbol('searchUseThreads')
