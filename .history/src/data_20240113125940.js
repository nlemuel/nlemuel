// This data is passed to be used in the replacers. Like a ".env" file.
// I opted to not use .env so it is possible to create custom objects, arrays and logic here.
// You can modify, create or delete any property you want.
const { colors } = require('./theme');

module.exports = {
  user: 'nlemuel',
  startedProgramming: '10/10/2020',
  repoQuantity: 6,
  header: {
    styles: {
      align: 'center',
      style: 'for-the-badge',
      color: colors.lightSecondary.base,
      logoColor: colors.lightSecondary.over,
    },
    image: {
      src: 'src/resources/images/nickgabe.png',
      width: 600,
    },
    description: "👋 Hello, World! I'm Nicolas Lemuel, a brazilian programmer.",
    badges: [
      {
        type: 'badge',
        name: 'twitter',
        href: 'https://twitter.com/nlim_a',
      },
      {
        type: 'badge',
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/nicolas-de-lima-23137718b/',
      },
      {
        type: 'badge',
        name: 'website',
        href: 'https://nickgabe.vercel.app',
        logo: 'esri',
      },
      {
        type: 'views',
      },
    ],
  },
  aboutme: {
    list: ['* Nicolas Lemuel, 24 years', '* Front-end programmer', '* Currently finishing college'],
  },
  skillswall: {
    styles: {
      style: 'for-the-badge',
      align: 'left',
      highlightColor: colors.primary,
      wallColors: [colors.secondary, colors.lightSecondary],
    },
    randomOrder: true,
    skills: [
      { name: 'JavaScript', isHighlighted: true },
      { name: 'HTML5' },
      { name: 'Markdown' },
      { name: 'CSS3', isHighlighted: true },
      { name: 'Python' },
      { name: 'React', isHighlighted: true },
      { name: 'Bootstrap' },
      { name: 'Node.JS', isHighlighted: true },
      { name: 'Styled Components' },
      { name: 'SQL' },
      { name: 'SQLite' },
      { name: 'TypeScript', isHighlighted: true },
      { name: 'Vercel' },
      { name: 'Figma' },
      { name: 'NPM' },
      { name: 'Git', isHighlighted: true },
      { name: 'GitHub' },
      { name: 'Visual Studio Code' },
    ],
  },
  recentworks: {
    styles: {
      title_color: colors.primary.base,
      text_color: colors.secondary.over,
      bg_color: colors.secondary.base,
      border_color: colors.black.base,
      icon_color: colors.secondary.over,
    },
  },
  socialMedias: {
    styles: {
      align: 'left',
      style: 'for-the-badge',
      color: colors.lightSecondary.base,
      logoColor: colors.lightSecondary.over,
    },
    links: [
      {
        name: 'twitter',
        href: 'https://twitter.com/nlim_a',
      },
      {
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/nicolas-de-lima-23137718b/',
      },
      {
        name: 'email',
        logo: 'gmail',
        href: 'mailto:lemuelayres@gmail.com',
      },
      {
        name: 'nlemuel',
        logo: 'discord',
        labelColor: colors.secondary.base,
      },
    ],
  },
  githubStats: {
    styles: {
      style: 'for-the-badge',
      align: 'center',
      title_color: colors.primary.base,
      text_color: colors.secondary.over,
      bg_color: colors.secondary.base,
      border_color: colors.black.base,
      show_icons: true,
      icon_color: colors.secondary.over,
      rank_icon: 'github',
    },
  },
};
