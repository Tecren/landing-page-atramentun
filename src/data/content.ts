import d6 from '../assets/icons/dices/d6_white.svg'
import d8 from '../assets/icons/dices/d8_white.svg'
import d10 from '../assets/icons/dices/d10_white.svg'
import d12 from '../assets/icons/dices/d12_white.svg'
import d20 from '../assets/icons/dices/d20_white.svg'
import type { I18nMessage } from '../i18n/messages'

export type FeatureId = keyof I18nMessage['features']['list']

export const REGISTER_URL = 'https://atramentum.app/register'
export const LOGIN_URL = 'https://atramentum.app/login'
export const INSTAGRAM_URL = 'https://www.instagram.com/atramentumrpg/'

export const NAV_SECTIONS = [
  'introduction',
  'features',
  'how-it-works',
] as const

export const INTRO_ICONS: Record<string, string> = {
  characterManagement: d20,
  campaigns: d12,
  community: d10,
}

export type FeatureKind = 'square' | 'rect'

export type FeatureMeta = {
  id: FeatureId
  image: string
  width: number
  height: number
  kind: FeatureKind
  index: string
  icon: string
}

export const FEATURES_META = [
  {
    id: 'characterSheets',
    image: '/images/1.png',
    width: 794,
    height: 738,
    kind: 'square',
    index: '01',
    icon: d20,
  },
  {
    id: 'community',
    image: '/images/2.2.png',
    width: 823,
    height: 744,
    kind: 'square',
    index: '02',
    icon: d6,
  },
  {
    id: 'gameRoom',
    image: '/images/3.png',
    width: 1173,
    height: 883,
    kind: 'square',
    index: '03',
    icon: d8,
  },
  {
    id: 'bookshelf',
    image: '/images/2.png',
    width: 797,
    height: 574,
    kind: 'rect',
    index: '04',
    icon: d12,
  },
  {
    id: 'friends',
    image: '/images/3.3.png',
    width: 955,
    height: 633,
    kind: 'rect',
    index: '05',
    icon: d10,
  },
] as const satisfies readonly FeatureMeta[]