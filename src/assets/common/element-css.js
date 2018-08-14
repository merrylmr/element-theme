/**
 * Created by namer on 2018/7/12.
 */
export const eleStyle = (rgb) => {
  return `.el-pagination button:hover {
  color: ${rgb}
}

.el-pagination__sizes .el-input .el-input__inner:hover {
  border-color: ${rgb}
}

.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: ${rgb}
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: ${rgb};
}

.el-pager li:hover {
  color: ${rgb}
}

.el-pager li.active {
  color: ${rgb};
}

.el-dialog__headerbtn:focus .el-dialog__close, .el-dialog__headerbtn:hover .el-dialog__close {
  color: ${rgb}
}

.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: #e8f2fc;
  color: #4a95e3
}

.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: 2px solid ${rgb};
  color: #303133
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid ${rgb};
  color: #303133
}

.el-menu-item.is-active {
  color: ${rgb}
}

.el-submenu.is-active .el-submenu__title {
  border-bottom-color: ${rgb}
}

.el-radio__input.is-checked .el-radio__inner {
  border-color: ${rgb};
  background: ${rgb}
}

.el-radio__input.is-checked + .el-radio__label {
  color: ${rgb}
}

.el-radio__input.is-focus .el-radio__inner {
  border-color: ${rgb}
}

.el-radio__inner {
  border: 1px solid #dcdfe6;
}


.el-radio__inner:hover {
  border-color: ${rgb}
}

.el-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner {
  -webkit-box-shadow: 0 0 2px 2px ${rgb};
  box-shadow: 0 0 2px 2px ${rgb}
}

.el-radio-button__inner:hover {
  color: ${rgb}
}

.el-radio-button:first-child .el-radio-button__inner {
  border-left: 1px solid #dcdfe6;
}

.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background-color: ${rgb};
  border-color: ${rgb};
  -webkit-box-shadow: -1px 0 0 0 ${rgb};
  box-shadow: -1px 0 0 0 ${rgb}
}

.el-radio-button:focus:not(.is-focus):not(:active) {
  -webkit-box-shadow: 0 0 2px 2px ${rgb};
  box-shadow: 0 0 2px 2px ${rgb}
}

.el-switch__label.is-active {
  color: ${rgb}
}

.el-switch__input:focus ~ .el-switch__core {
  outline: ${rgb} solid 1px
}

.el-switch.is-checked .el-switch__core {
  border-color: ${rgb};
  background-color: ${rgb}
}

.el-select-dropdown.is-multiple .el-select-dropdown__item.selected {
  color: ${rgb};
}

.el-select .el-input__inner:focus {
  border-color: ${rgb}
}

.el-select .el-input.is-focus .el-input__inner {
  border-color: ${rgb}
}

.el-table th > .cell.highlight {
  color: ${rgb}
}

.el-table .ascending .sort-caret.ascending {
  border-bottom-color: ${rgb}
}

.el-table .descending .sort-caret.descending {
  border-top-color: ${rgb}
}

.el-table .hidden-columns {
  position: absolute;
  z-index: -1
}

.el-table-filter__list-item:hover {
  background-color: #e8f2fc;
  color: #4a95e3
}

.el-table-filter__list-item.is-active {
  background-color: ${rgb};
}

.el-table-filter__bottom button:hover {
  color: ${rgb}
}

.el-date-table td.today span {
  color: ${rgb};
}

.el-date-table td.available:hover {
  color: ${rgb}
}

.el-date-table td.current:not(.disabled) span {
  background-color: ${rgb}
}

.el-date-table td.end-date span, .el-date-table td.start-date span {
  background-color: ${rgb}
}

.el-date-table td.selected span {
  background-color: ${rgb};
}

.el-month-table td .cell:hover, .el-month-table td.current:not(.disabled) .cell {
  color: ${rgb}
}

.el-year-table td .cell:hover, .el-year-table td.current:not(.disabled) .cell {
  color: ${rgb}
}

.el-date-picker__header-label.active, .el-date-picker__header-label:hover {
  color: ${rgb}
}

.time-select-item.selected:not(.disabled) {
  color: ${rgb};
  font-weight: 700
}

.el-range-editor.is-active, .el-range-editor.is-active:hover {
  border-color: ${rgb}
}

.el-picker-panel__shortcut:hover {
  color: ${rgb}
}

.el-picker-panel__shortcut.active {
  background-color: #e6f1fe;
  color: ${rgb}
}

.el-picker-panel__icon-btn:hover {
  color: ${rgb}
}

.el-time-spinner__arrow:hover {
  color: ${rgb}
}

.el-time-panel__btn.confirm {
  font-weight: 800;
  color: ${rgb}
}

.el-message-box__headerbtn:focus .el-message-box__close, .el-message-box__headerbtn:hover .el-message-box__close {
  color: ${rgb}
}

.el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link:hover {
  color: ${rgb};
}

.el-tabs__active-bar {
  background-color: ${rgb};
}

.el-tabs__new-tab:hover {
  color: ${rgb}
}

.el-tabs__item:focus.is-active.is-focus:not(:active) {
  -webkit-box-shadow: 0 0 2px 2px ${rgb} inset;
  box-shadow: 0 0 2px 2px ${rgb} inset;
}

.el-tabs__item.is-active {
  color: ${rgb}
}

.el-tabs__item:hover {
  color: ${rgb};
  cursor: pointer
}

.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: ${rgb};
  border-right-color: #dcdfe6;
  border-left-color: #dcdfe6
}

.el-tabs--border-card > .el-tabs__header .el-tabs__item:not(.is-disabled):hover {
  color: ${rgb}
}

.el-tag {
  background-color: rgba(29, 123, 220, .1);
  color: ${rgb};
  border: 1px solid rgba(29, 123, 220, .2);

}

.el-tag .el-icon-close {
  color: ${rgb}
}

.el-tag .el-icon-close:hover {
  background-color: ${rgb};
}

.el-tree__drop-indicator {
  background-color: ${rgb}
}

.el-tree-node:focus > .el-tree-node__content {
  background-color: #f5f7fa
}

.el-tree-node.is-drop-inner > .el-tree-node__content .el-tree-node__label {
  background-color: ${rgb};
}

.el-input-number__decrease:hover, .el-input-number__increase:hover {
  color: ${rgb}
}

.el-input-number__decrease:hover:not(.is-disabled) ~ .el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled) ~ .el-input .el-input__inner:not(.is-disabled) {
  border-color: ${rgb}
}

.el-slider__bar {
  background-color: ${rgb};

}

.el-slider__button {
  border: 2px solid ${rgb};
}

.el-slider.is-vertical.el-slider--with-input .el-slider__input:active .el-input-number__decrease, .el-slider.is-vertical.el-slider--with-input .el-slider__input:active .el-input-number__increase {
  border-color: ${rgb}
}

.el-loading-spinner .el-loading-text {
  color: ${rgb};
  margin: 3px 0;
  font-size: 14px
}

.el-loading-spinner .path {
  stroke: ${rgb};
}

.el-loading-spinner i {
  color: ${rgb}
}

.el-upload--picture-card:hover, .el-upload:focus {
  border-color: ${rgb};
  color: ${rgb}
}

.el-upload:focus .el-upload-dragger {
  border-color: ${rgb}
}

.el-upload-dragger .el-upload__text em {
  color: ${rgb};
  font-style: normal
}

.el-upload-dragger:hover {
  border-color: ${rgb}
}

.el-upload-dragger.is-dragover {
  background-color: rgba(32, 159, 255, .06);
  border: 2px dashed ${rgb}
}

.el-upload-list__item .el-icon-close-tip {
  color: ${rgb}
}

.el-upload-list__item:hover {
  background-color: #f5f7fa
}

.el-upload-list__item.is-success .el-upload-list__item-name:focus, .el-upload-list__item.is-success .el-upload-list__item-name:hover {
  color: ${rgb};
}

.el-upload-list__item-delete:hover {
  color: ${rgb}
}

.el-progress-bar__inner {
  background-color: ${rgb};
}

.el-step__head.is-finish {
  color: ${rgb};
  border-color: ${rgb}
}

.el-step__title.is-wait {
  color: #c0c4cc
}

.el-step__title.is-finish {
  color: ${rgb}
}

.el-step__description.is-process {
  color: #303133
}

.el-step__description.is-wait {
  color: #c0c4cc
}

.el-step__description.is-finish {
  color: ${rgb}
}

.el-collapse-item__header.focusing:focus:not(:hover) {
  color: ${rgb}
}

.el-cascader-menu__item.is-active {
  color: ${rgb}
}

.el-color-predefine__color-selector.selected {
  -webkit-box-shadow: 0 0 3px 2px ${rgb};
  box-shadow: 0 0 3px 2px ${rgb}
}

.el-color-dropdown__btn:hover {
  color: ${rgb};
  border-color: ${rgb}
}

.el-color-dropdown__link-btn {
  cursor: pointer;
  color: ${rgb};
  text-decoration: none;
  padding: 15px;
  font-size: 12px
}

.el-color-dropdown__link-btn:hover {
  color: tint(${rgb}, 20%)
}

.el-textarea__inner:focus {
  outline: 0;
  border-color: ${rgb}
}

.el-input.is-active .el-input__inner, .el-input__inner:focus {
  border-color: ${rgb};
  outline: 0
}

.el-button:focus, .el-button:hover {
  color: ${rgb};
  border-color: ${rgb};
  background-color: ${rgb}
}

.el-button:active {
  color: #1a6fc6;
  border-color: #1a6fc6;
  outline: 0
}

.el-button.is-plain:focus, .el-button.is-plain:hover {
  border-color: ${rgb};
  color: #fff;
}

.el-button.is-active, .el-button.is-plain:active {
  color: #1a6fc6;
  border-color: #1a6fc6
}

.el-button--primary {
  background-color: ${rgb};
  border-color: ${rgb}
}

.el-button--primary:focus, .el-button--primary:hover {
  background: ${rgb};
  border-color: ${rgb};
  color:#fff;
}

.el-button--primary.is-active, .el-button--primary:active {
  background: #1a6fc6;
  border-color: #1a6fc6;
}

.el-button--primary.is-disabled, .el-button--primary.is-disabled:active, .el-button--primary.is-disabled:focus, .el-button--primary.is-disabled:hover {
  background-color: #8ebdee;
  border-color: #8ebdee
}

.el-button--primary.is-plain {
  color: ${rgb};
  background: #e8f2fc;
  border-color: #a5caf1
}

.el-button--primary.is-plain:focus, .el-button--primary.is-plain:hover {
  background: ${rgb};
  border-color: ${rgb};
}

.el-button--primary.is-plain:active {
  background: #1a6fc6;
  border-color: #1a6fc6;
}

.el-button--primary.is-plain.is-disabled, .el-button--primary.is-plain.is-disabled:active, .el-button--primary.is-plain.is-disabled:focus, .el-button--primary.is-plain.is-disabled:hover {
  color: #77b0ea;
  background-color: #e8f2fc;
  border-color: #d2e5f8
}

.el-button--text {
  color: ${rgb};
}

.el-button--text:focus, .el-button--text:hover {
  color: #4a95e3;
  border-color: transparent;
  background-color: transparent
}

.el-button--text:active {
  color: #1a6fc6;
  background-color: transparent
}

.el-checkbox.is-bordered.is-checked {
  border-color: ${rgb}
}

.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: ${rgb};
  border-color: ${rgb}
}

.el-checkbox__input.is-checked + .el-checkbox__label {
  color: ${rgb}
}

.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: ${rgb}
}

.el-checkbox__inner:hover {
  border-color: ${rgb}
}

.el-checkbox-button__inner:hover {
  color: ${rgb}
}

.el-checkbox-button.is-checked .el-checkbox-button__inner {
  background-color: ${rgb};
  border-color: ${rgb};
  -webkit-box-shadow: -1px 0 0 0 #77b0ea;
  box-shadow: -1px 0 0 0 #77b0ea
}

.el-checkbox-button.is-checked:first-child .el-checkbox-button__inner {
  border-left-color: ${rgb}
}

.el-transfer-panel__item:hover {
  color: ${rgb}
}`
}
