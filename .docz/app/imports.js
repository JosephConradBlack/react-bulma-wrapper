export const imports = {
  'components/Layout/Container.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-layout-container" */ 'components/Layout/Container.mdx'),
  'components/Layout/Hero/Hero.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-layout-hero-hero" */ 'components/Layout/Hero/Hero.mdx'),
  'components/util/typography/Typography.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-util-typography-typography" */ 'components/util/typography/Typography.mdx'),
}
