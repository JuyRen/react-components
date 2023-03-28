import { defineConfig } from 'dumi';

const iconPath = '/assets/images/avatar-1.png';

export default defineConfig({
  outputPath: 'docs-dist',
  favicons: [iconPath],
  themeConfig: {
    name: '组件库',
    logo: iconPath,
    footer: 'Copyright © 2023 | Powered by juyren',
  },
  resolve: {
    atomDirs: [
      {
        type: 'component',
        dir: 'packages',
      },
    ],
  },
});
