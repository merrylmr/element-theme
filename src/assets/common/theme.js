/**
 * Generate the CSS for a base color (.primary)
 */
import {eleStyle} from './element-css.js'
export const genBaseColor = (name, value) => {
  // const rgb = value
  return eleStyle(value);
//   return `
// .${name} {
//   background-color: ${rgb} !important;
//   border-color: ${rgb} !important;
// }
// .${name}--text {
//   color: ${rgb} !important;
// }
// .${name}--text input,
// .${name}--text textarea {
//   caret-color: ${rgb} !important;
// }
// .el-button--${name}{
//  background-color:${rgb}!important;
//  border-color:${rgb}
// }`
}
