import { babel } from 'docz-plugin-babel6';
import { css } from 'docz-plugin-css';

export default {
  src: './src/',
  wrapper: 'src/util/DoczWrapper.js',
  title: 'React Bulma Wrapper',
  hashRouter: true,
  port: 3001,
  plugins: [
    babel(),
    css({
      preprocessor: 'sass'
    })
  ]
};
