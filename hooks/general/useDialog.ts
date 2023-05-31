export type HandleDialog = {
    show: () => boolean
    hide: () => boolean
    lock: () => boolean
    unlock: () => boolean
    load: () => boolean
    unload: () => boolean
  }
  
  // ダイアログの表示・非表示の状態を提供する
  // handle.show(), handle.close()を呼び出して表示/非表示を切り替える
  export const useDialog = () => {
    const isShownDialog = ref<Boolean>(false)
    const isActionDisabled = ref<Boolean>(false)
    const isLoading = ref<Boolean>(false)
    const handle: HandleDialog = {
      show: () => (isShownDialog.value = true),
      hide: () => (isShownDialog.value = false),
      lock: () => (isActionDisabled.value = true),
      unlock: () => (isActionDisabled.value = false),
      load: () => (isLoading.value = true),
      unload: () => (isLoading.value = false),
    }
  
    return {
      isShownDialog: readonly(isShownDialog),
      isActionDisabled: readonly(isActionDisabled),
      isLoading: readonly(isLoading),
      handle,
    }
  }
  
  export type DialogState = ReturnType<typeof useDialog>
  
  export const UseDialogStateKey: InjectionKey<DialogState> =
    Symbol('UseDialogStateKey')
  