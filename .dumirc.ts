import { defineConfig } from 'dumi';

const repo = 'p5-component'

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'p5-react-component',
    logo: 'https://patchwiki.biligame.com/images/persona/0/04/hfx6se1rsaf66x38fbf3ff9fv5iof4x.png',
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
