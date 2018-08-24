export const imports = {
  'customize.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "customize" */ 'customize.mdx'),
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'usage.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "usage" */ 'usage.mdx'),
  'components/Columns/Columns.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-columns-columns" */ 'components/Columns/Columns.mdx'),
  'components/Elements/Image.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-elements-image" */ 'components/Elements/Image.mdx'),
  'components/Elements/Title.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-elements-title" */ 'components/Elements/Title.mdx'),
  'components/Layout/Container.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-layout-container" */ 'components/Layout/Container.mdx'),
  'components/Layout/Footer.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-layout-footer" */ 'components/Layout/Footer.mdx'),
  'components/Layout/Section.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-layout-section" */ 'components/Layout/Section.mdx'),
  'components/Components/Navbar/Navbar.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-components-navbar-navbar" */ 'components/Components/Navbar/Navbar.mdx'),
  'components/Layout/Hero/Hero.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-layout-hero-hero" */ 'components/Layout/Hero/Hero.mdx'),
  'components/util/typography/Typography.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-util-typography-typography" */ 'components/util/typography/Typography.mdx'),
}
