import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import type { InjectionKey } from 'vue'

export const useDocumenttemplates = () => {
    const store = useStore()
    const router = useRouter()
}

export const documentTemplateStateKey: InjectionKey<
  ReturnType<typeof useDocumentTemplates>
> = Symbol('documentTemplateState')