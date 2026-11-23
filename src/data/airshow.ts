/**
 * Airshow Photography — page copy (en + zh). Sitan's own photographs and video.
 * No brief yet: facts not supplied by Sitan (date, event, camera) stay TBC / 待补充.
 * Alt text describes only what is visible — no place names, event names or aircraft models.
 * New photos: run `python3 scripts/add-airshow-photos.py`, then add their alt text below.
 */
import type { Lang } from '../i18n/ui';

type L = Record<Lang, string>;

/** Alt text per exported photo (src/assets/airshow/photo-NN.jpg). Missing → generic alt. */
export const photoAlt: Record<string, L> = {
  'photo-01': { en: 'A twin-engine fighter jet banks away with both afterburners glowing against a pale pink sky.', zh: '一架双发战斗机转弯离去，两个加力燃烧室在淡粉色天空下发着光。' },
  'photo-02': { en: 'A fighter jet pulls through a turn in bright blue sky, vapour forming over its wings and trailing from the wingtips.', zh: '一架战斗机在湛蓝的天空中急转，机翼上方形成水汽，翼尖拖出白色尾迹。' },
  'photo-03': { en: 'A fighter jet passes low at dusk with its afterburners lit, buildings and a palm tree below.', zh: '黄昏时一架战斗机开着加力低空掠过，下方是楼房和一棵棕榈树。' },
  'photo-04': { en: 'A fighter jet in silhouette against a sunset sky streaked with cloud.', zh: '日落天空和云层前，一架战斗机的剪影。' },
  'photo-05': { en: 'A fighter jet seen from above in a steep bank, vapour rolling over its back.', zh: '从上方看到一架大角度转弯的战斗机，水汽从机背上翻过。' },
  'photo-06': { en: 'A fighter jet climbs into an orange evening sky above dark clouds.', zh: '一架战斗机爬升进橙色的傍晚天空，下方是深色云层。' },
  'photo-07': { en: 'A fighter jet with afterburners lit flies past hazy hills.', zh: '一架开着加力的战斗机飞过雾气中的山丘。' },
  'photo-08': { en: 'A fighter jet banks in front of a tall apartment building, heat haze trailing behind it.', zh: '一架战斗机在一栋高层公寓楼前转弯，身后拖着热浪。' },
  'photo-09': { en: "Close view of a fighter jet's underside as it banks low over a city.", zh: '一架战斗机低空转弯掠过城市，近距离看到它的机腹。' },
};
export const genericAlt: L = { en: 'Airshow photograph by Sitan Ding.', zh: '丁思覃拍摄的航展照片。' };

const en = {
  eyebrow: 'Photography · Video',
  title: 'Airshow',
  tagline: 'Fast jets, caught in a fraction of a second.',
  intro: 'Photographs and a short video I took at an airshow on my own camera. Fighter jets move faster than you can follow, so each frame is about timing: the turn, the vapour, the light at the end of the day.',
  cta: 'Watch the video',
  ctaSecondary: 'See the photos',
  heroCaption: 'Photograph by Sitan Ding.',
  details: [
    { k: 'Type', v: 'Photography · Video' },
    { k: 'Role', v: 'Photography & filming (individual)' },
  ],
  video: {
    eyebrow: '01 / Video',
    title: 'From the ground',
    body: 'A short video I filmed at Pacific Airshow 2026. The sound is not the original recording from the day. Press play to watch; it does not start on its own.',
    note: 'Filmed by Sitan Ding. Compressed for the web.',
  },
  gallery: {
    eyebrow: '02 / Photographs',
    title: 'Selected frames',
    body: 'Click any photograph to see it larger.',
    count: 'photographs',
  },
};
type Copy = typeof en;

const zh: Copy = {
  eyebrow: '摄影 · 视频',
  title: 'Airshow',
  tagline: '高速飞行的战机，定格在一瞬间。',
  intro: '这是我用自己的相机在航展现场拍下的照片和一段短视频。战斗机的速度快到眼睛几乎跟不上，所以每一张照片都靠时机：转弯的那一刻、机翼上的水汽、傍晚最后的光线。',
  cta: '观看视频',
  ctaSecondary: '查看照片',
  heroCaption: '丁思覃拍摄。',
  details: [
    { k: '类型', v: '摄影 · 视频' },
    { k: '角色', v: '拍摄（个人）' },
  ],
  video: {
    eyebrow: '01 / 视频',
    title: '从地面看',
    body: '我在 2026 太平洋航展（Pacific Airshow）拍摄的一段短视频。视频的声音不是现场原声。点击播放观看，不会自动播放。',
    note: '丁思覃拍摄，已为网页压缩。',
  },
  gallery: {
    eyebrow: '02 / 照片',
    title: '照片选集',
    body: '点击任意照片可以放大查看。',
    count: '张照片',
  },
};

export const copy: Record<Lang, Copy> = { en, zh };
