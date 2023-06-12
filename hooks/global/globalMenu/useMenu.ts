import type { InjectionKey } from 'vue'
import { ref } from 'vue' 
import { apiBase } from '~/plugins/apiBase'

export type Level2 = {
    master_global_menu_id: number | string
    menu_level: number
    sort_no?: number
    name?: string
}
export type Level1 = {
    master_global_menu_id: number | string
    menu_level: number
    sort_no?: number 
    name: string
    level2_menus: Level2[]
    active?: boolean
    icon?: string
}
export type MenuItems = {
    items: Level1[]
}

export const useMenu = () => {
    const url = '/accounts/global_menu'
    const menu = ref<MenuItems>({
        items: [],
    })
    //
    const fetchMenuData = async () => {
        const response = await apiBase.get<MenuItems>(url)
        if (response.status === 200) {
            menu.value = response.data
            console.log(menu.value)
        } else {
            console.log('失敗しました')
        }
    }

    return {
        menu: menu,
        fetchMenuData
    }
}

type UseMenuType = ReturnType<typeof useMenu>
export const MenuStateKey: InjectionKey<UseMenuType> = Symbol('MenuState')