import { uniqueId } from 'lodash'
import { MenuItems } from '~/hooks/global/globalMenu/useMenu'
import vitePluginRequire from "vite-plugin-require"
import { getImage } from '@nuxt/image'
import { url } from 'inspector'
import common from '@/assets/icon/globalMenu/common.svg'
import favorite from '@/assets/icon/globalMenu/favorite.svg'
import outpatient from '@/assets/icon/globalMenu/outpatient.svg'
import ward from '@/assets/icon/globalMenu/ward.svg'
import tick from '@/assets/icon/globalMenu/tick.svg'
import house from '@/assets/icon/globalMenu/house.svg'
import rehabilitation from '@/assets/icon/globalMenu/rehabilitation.svg'
import coaching from '@/assets/icon/globalMenu/coaching.svg'
import other from '@/assets/icon/globalMenu/other.svg'
import master from '@/assets/icon/globalMenu/master.svg'
import management from '@/assets/icon/globalMenu/management.svg'

export const GLOBAL_MENU: MenuItems = {
    items: [
        //1 home
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: 'ホーム',
            name_en: 'g-nav1',
            icon: common,
            level2_menus: [
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '周知・業務タスク',
                    path: '/global/common/wellKnownAndTask',
                },
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '職員スケジュール',
                    path: '/global/common/staffSchedule',
                },
            ],
        },
        //2 favorite 
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: 'ﾌﾞｯｸﾏｰｸ',
            name_en: 'g-nav2',
            icon: favorite,
            level2_menus: [

            ],
        },
        //3 outpatient  外来
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: '外来',
            name_en: 'g-nav3',
            icon: outpatient,
            level2_menus: [
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '外来患者一覧（診察）',
                    path: '/global/outpatient/outpatientOfExamination',
                },
            ]
        },
        //4 ward 
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: '病棟',
            name_en: 'g-nav4',
            icon: ward,
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
            icon: tick,
            level2_menus: [
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '指示受け一覧',
                    path: '/global/acceptanceOfImplementation/orderList',
                },
            ]
        },
        
        //6   訪問看護
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: '訪問看護',
            name_en: 'g-nav6',
            icon: house,
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
            icon: rehabilitation,
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
            icon: coaching,
            level2_menus: [
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '精神科退院前訪問',
                    path: '/global/guidanceRequest/psychiatricPredischargeVisit',
                },
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '心理面接',
                    path: '/global/guidanceRequest/psychologicalInterview',
                },
            ],
        },
        //9 その他
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: 'その他',
            name_en: 'g-nav9',
            icon: other,
            level2_menus: [
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: 'レベル管理患者一覧',
                    path: '/global/others/labelManagement',
                },
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '付箋一覧',
                    path: '/global/others/stickyNoteSearch',
                },
            ],
        },
        //10 マスター
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: 'マスター',
            name_en: 'g-nav10',
            icon: master,
            level2_menus: [
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '予約枠マスタ設定',
                    path: '/global/master/reservationSlot',
                },
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: 'プローシートマスタ設定',
                    path: '/global/master/floSheet',
                },
                {
                    master_global_menu_id: uniqueId('__globalMenuId__'),
                    menu_level: 2,
                    name: '文書マスタ設定',
                    path: '/global/master/documentMasterSet', 
                },
            ],
        },
        //11 管理
        {
            master_global_menu_id: uniqueId('__globalMenuId__'),
            menu_level: 1,
            name: '管理',
            name_en: 'g-nav10',
            icon: management,
            level2_menus: [
              {
                master_global_menu_id: uniqueId('__globalMenuId__'),
                menu_level: 2,
                name: '精神疾患レジストリ',
                path: '/global/management/registry',
              },
            ],
        },
    ],
}