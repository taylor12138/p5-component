import { defineConfig } from 'dumi';

const repo = 'p5-component'

export default defineConfig({
    outputPath: 'docs-dist',
    themeConfig: {
      name: 'p5-react-component',
      logo: 'https://patchwiki.biligame.com/images/persona/0/04/hfx6se1rsaf66x38fbf3ff9fv5iof4x.png',
    },
    base: '/p5-component/', // 假设你部署的 GitHub Pages 路径
    publicPath: '/p5-component/', // 与 base 配合使用
  });
