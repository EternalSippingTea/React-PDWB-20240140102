export const profile = {
  name: 'Hoshimi Miyabi',
  nameJp: '星見 雅',
  title: 'Lone Blade of Section 6',
  faction: 'Hollow Special Operations Section 6',
  rank: 'S',
  attribute: 'Ice',
  specialty: 'Anomaly',
  weapon: 'Hollow-Slaying Sword (Katana)',
  birthday: 'October 22',
  height: '168 cm',
  vaIcon: '冷',
  quote:
    '"A blade without restraint is a blade without honor. But when honor falls, the blade still cuts."',
  bio: `Successor of the Hoshimi clan and captain of Section 6. Trained from childhood as an
exorcist of Hollow corruption, Miyabi wields her katana with surgical precision — turning
Anomaly outbreaks to frost before they can spread. Calm. Distant. Devastating.`,
}

export const stats = [
  { label: 'HP', value: 9426, max: 10000, color: 'from-miyabi-frost to-miyabi-ice' },
  { label: 'ATK', value: 863, max: 1000, color: 'from-miyabi-crimson to-miyabi-frost' },
  { label: 'DEF', value: 612, max: 1000, color: 'from-miyabi-ice to-miyabi-frost' },
  { label: 'Anomaly Mastery', value: 124, max: 150, color: 'from-miyabi-ice to-white' },
  { label: 'Crit Rate', value: 5, max: 100, color: 'from-miyabi-frost to-miyabi-crimson', suffix: '%' },
  { label: 'Impact', value: 93, max: 120, color: 'from-miyabi-gold to-miyabi-frost' },
]

export const skills = [
  {
    name: 'Basic Attack · Frostmoon Dance',
    type: 'Basic',
    icon: '刀',
    desc: 'A flowing four-step sword form. Each strike inflicts Frostbite, building toward the next Freeze trigger.',
  },
  {
    name: 'Dodge · Silent Step',
    type: 'Evade',
    icon: '影',
    desc: 'Momentary phase-step through enemy lines. Perfect dodges briefly shatter incoming Anomaly buildup.',
  },
  {
    name: 'Special · Hoarfrost Slash',
    type: 'Skill',
    icon: '霜',
    desc: 'Channels chi into the blade, releasing an arc of ice. Heavy attack consumes EX charge for guaranteed Freeze.',
  },
  {
    name: 'Chain · Moonlit Severance',
    type: 'Ultimate',
    icon: '月',
    desc: 'Hollow energy ignites the katana. A single horizontal cut bisects all enemies in line — pure Disorder damage.',
  },
]

export const gallery = [
  {
    title: 'Lone Blade',
    sub: 'Combat Stance',
    grad: 'from-miyabi-deep via-miyabi-frost/30 to-miyabi-night',
    glyph: '刀',
    img: '/miyabi_card.webp',
  },
  {
    title: 'Tailless',
    sub: 'Ethereal-Slaying Katana',
    grad: 'from-miyabi-deep via-miyabi-frost/30 to-miyabi-night',
    glyph: '霜',
    img: '/Katana.webp',
  },
  {
    title: 'The Seal',
    sub: 'Hollow Form',
    grad: 'from-miyabi-deep via-miyabi-crimson/30 to-miyabi-night',
    glyph: '虚',
    img: '/tailless.jpeg',
  },
]

export const teammates = [
  { name: 'Tsukishiro Yanagi', role: 'Vice Captain · Electric', glyph: '柳' },
  { name: 'Asaba Harumasa', role: 'Marksman · Electric', glyph: '春' },
  { name: 'Soukaku', role: 'Support · Ice', glyph: '蒼' },
]
