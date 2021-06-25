import { ComponentMetadata, componentsTags } from '@/components/component'
import { none } from '@/core/utils'
import { liveUrls } from '../live-urls'

export const component: ComponentMetadata = {
  name: 'livePip',
  displayName: '直播画中画',
  description: {
    'zh-CN': '在直播间的功能中启用画中画支持.',
  },
  enabledByDefault: true,
  entry: none,
  tags: [
    componentsTags.live,
  ],
  widget: {
    component: () => import('./LivePip.vue').then(m => m.default),
    condition: () => 'requestPictureInPicture' in HTMLVideoElement.prototype,
  },
  urlInclude: liveUrls,
}