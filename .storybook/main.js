module.exports = {
  stories: [
    '../src/components/**/stories.story.tsx'
    // '../src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react'
}
