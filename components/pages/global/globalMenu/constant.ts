import { uniqueId } from 'lodash'
import { MenuItems } from '~/hooks/global/globalMenu/useMenu'

export const GLOBAL_MENU: MenuItems = {
    items: [
        //1 home
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: 'ホーム',
            name_en: 'g-nav1',
            level2_menus: [
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '周知・業務タスク',
                    path: '/global/common/wellKnownTask',
                },
            ],
            icon: require('@/assets/icons/globalMenu/common.svg')
        },
        //2 favorite 
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: 'ﾌﾞｯｸﾏｰｸ',
            name_en: 'g-nav2',
            icon: require('@/assets/icons/globalMenu/favorite.svg'),
            level2_menus: [

            ],
        },
        //3 outpatient  外来
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: '外来',
            name_en: 'g-nav3',
            icon: require('@/assets/icons/globalMenu/outpatient.svg'),
            level2_menus: [
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '外来患者一覧（診察）',
                    path: '/global/outpatient/outpatientExamination',
                },
            ]
        },
        //4 ward 
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: '病棟',
            name_en: 'g-nav4',
            icon: require('@/assets/icons/globalMenu/ward.svg'),
            level2_menus: [
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '入院患者一覧',
                    path: '/global/ward/inpatientOfExamination',
                  },
            ],
        },
        //5 instruction confirmation
        { 
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: '指示確認',
            name_en: 'g-nav5',
            icon: require('@/assets/icons/globalMenu/tick.svg'),
            level2_menus: [
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '指示受け一覧',
                    path: '/',
                },
            ]
        },
        
        //6   訪問看護
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: '訪問看護',
            name_en: 'g-nav6',
            icon: require('@/assets/icons/globalMenu/house.svg'),
            level2_menus: [
              {
                master_global_menu_id: uniqueId('__globalMenuId__'),
                menu_level: 2,
                name: '精神科訪問看護',
                path: '/',
              },
            ],
        },

        //7 rehabiliation 
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: 'リハビリ',
            name_en: 'g-nav7',
            icon: require('@/assets/icons/globalMenu/rehabilitation.svg'),
            level2_menus: [
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '重度認知症デイケア',
                    path: '/global/rehabilitation/dementialDaycare',
                  },
            ],
        },
        //8  指導依頼
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: '指導依頼',
            name_en: 'g-nav8',
            icon: require('@/assets/icons/globalMenu/coaching.svg'),
            level2_menus: [
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '精神科退院前訪問',
                    path: '/',
                },
            ],
        },
        //9 その他
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: 'その他',
            name_en: 'g-nav9',
            icon: require('@/assets/icons/globalMenu/other.svg'),
            level2_menus: [
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: 'レベル管理患者一覧',
                    path: '/',
                },
            ],
        },
        //10 マスター
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: 'マスター',
            name_en: 'g-nav10',
            icon: require('@/assets/icons/globalMenu/master.svg'),
            level2_menus: [
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '予約枠マスタ設定',
                    path: '/',
                },
            ],
        },
        //11 管理
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: '管理',
            name_en: 'g-nav10',
            icon: require('@/assets/icons/globalMenu/management.svg'),
            level2_menus: [
              {
                master_global_menu_id: uniqueId('__globalMenuId__'),
                menu_level: 2,
                name: 'MHSW日報',
                path: '/',
              },
            ],
        },
    ],
}