import fs from 'fs';
import path from 'path';
import type {ColorTheme} from '..';
import {opacity, specificity} from './utils';

const ansiColors = {
  white: '#dbdae8',
  gray: '#90a5c8',
  black: '#0c0e15',
  red: '#ff4762',
  orange: '#dd9046',
  yellow: '#efbd5d',
  green: '#8acd5b',
  blue: '#41a7fc', // #61afef
  cyan: '#3dacb4',
  indigo: '',
  violet: '#c77ddd',
  magenta: '#d44dae',
};

const pastelColors = {
  pastelBlue: '#92d6cf',
  pastelGreen: '#add692',
  pastelGray: '#455573',
};

const vibrantColors = {
  vibrantOrange: '#ff7e00',
  vibrantGreen: '#3ecd83',
  // vibrantBlue: '#006aff', // #61afef
  vibrantBlue: '#61afef',
};

const statusColors = {
  success: '#10a273',
  error: '#c00c0c',
  warning: '#d2723b',
};

const workbenchColors = {
  backgroundActive: '#23386e',
  backgroundActiveHighlight: '#ebb3d32d',
  backgroundDrop: '#181420ce',
  backgroundEditor: '#1a212e',
  backgroundHeader: '#181420ce',
  backgroundHover: '#1a2950',
  backgroundHoverHighlight: '#dbdae82f',
  backgroundInactive: '#20283d',
  backgroundMatch: '#78e6c346',
  backgroundPopover: '#111520ee',
  backgroundSidebar: '#141b24',
  backgroundSelection: '#3a5599ac',
  backgroundLabel: '#283140',
  foreground: '#dcbb',
  invisible: '#0000',
};

const tokenColors = {
  boolean: ansiColors.orange,
  string: ansiColors.green,
  number: ansiColors.orange,
  variable: pastelColors.pastelBlue,
};

const colors = {
  ...workbenchColors,
  ...vibrantColors,
  ...pastelColors,
  ...statusColors,
  ...tokenColors,
  ...ansiColors,
};

// redLighter: '#fe5c57',
// backgroundHeader: '#2a2749bd',
// bgLight: '#21283b',
// greenSnazzy: '#5bf78e',
// string: '#8acd5b',
// foreground: '#ea31b5', #ff6ac1

const theme: ColorTheme = {
  name: 'Fullmetal',
  type: 'dark',
  colors: {
    'activityBar.activeBorder': colors.backgroundActive,
    'activityBar.background': colors.backgroundSidebar,
    'activityBar.foreground': colors.white,
    'activityBarBadge.background': opacity(colors.yellow, 0.8),
    'activityBarBadge.foreground': colors.backgroundSidebar,
    'badge.background': colors.yellow,
    'badge.foreground': colors.backgroundSidebar,
    'breadcrumb.activeSelectionForeground': colors.white,
    'breadcrumb.focusForeground': colors.gray,
    'breadcrumbPicker.background': colors.backgroundPopover,
    'button.background': colors.magenta,
    'debugConsole.errorForeground': colors.error,
    'debugConsole.infoForeground': colors.blue,
    'debugConsole.sourceForeground': colors.gray,
    'debugConsole.warningForeground': colors.warning,
    'debugConsoleInputIcon.foreground': colors.vibrantGreen,
    'debugIcon.breakpointCurrentStackframeForeground': colors.red,
    'debugIcon.breakpointDisabledForeground': colors.pastelGray,
    'debugIcon.breakpointForeground': colors.red,
    'debugIcon.breakpointUnverifiedForeground': colors.gray,
    'debugIcon.continueForeground': colors.vibrantGreen,
    'debugIcon.disconnectForeground': colors.red,
    'debugIcon.pauseForeground': colors.orange,
    'debugIcon.restartForeground': colors.magenta,
    'debugIcon.stepBackForeground': colors.blue,
    'debugIcon.stepIntoForeground': colors.blue,
    'debugIcon.stepOutForeground': colors.blue,
    'debugIcon.stepOverForeground': colors.blue,
    'debugIcon.stopForeground': colors.red,
    'debugTokenExpression.string': colors.string,
    'debugTokenExpression.boolean': colors.boolean,
    'debugTokenExpression.error': colors.red,
    'debugTokenExpression.name': colors.violet,
    'debugTokenExpression.number': colors.number,
    'debugTokenExpression.value': colors.variable,
    'debugToolBar.background': colors.backgroundPopover,
    'debugView.exceptionLabelBackground': opacity(colors.error, 0.1),
    'debugView.exceptionLabelForeground': colors.error,
    'debugView.stateLabelBackground': colors.yellow,
    'debugView.stateLabelForeground': colors.backgroundSidebar,
    'dropdown.background': colors.backgroundPopover,
    'dropdown.foreground': colors.gray,
    'editor.background': colors.backgroundEditor,
    'editor.findMatchBackground': colors.backgroundMatch, // TODO: change to diff match color
    'editor.findMatchHighlightBackground': '#e3e3e31f',
    'editor.findMatchHighlightBorder': colors.backgroundMatch,
    'editor.foreground': colors.gray,
    'editor.hoverHighlightBackground': colors.backgroundHoverHighlight,
    'editor.lineHighlightBackground': colors.backgroundInactive,
    'editor.rangeHighlightBackground': '#01c0ce45',
    'editor.selectionBackground': colors.backgroundSelection,
    'editor.stackFrameHighlightBackground': colors.backgroundActiveHighlight,
    'editor.symbolHighlightBackground': '#01c0ce45',
    'editor.symbolHighlightBorder': colors.orange,
    'editor.wordHighlightBackground': colors.backgroundHoverHighlight,
    'editorBracketHighlight.foreground1': '#c75ae8',
    'editorBracketHighlight.foreground2': colors.cyan,
    'editorBracketHighlight.foreground3': '#f6b868',
    'editorBracketHighlight.unexpectedBracket.foreground': colors.error,
    'editorCodeLens.foreground': colors.pastelGray,
    'editorCursor.background': colors.backgroundEditor,
    'editorCursor.foreground': colors.white,
    'editorError.foreground': colors.error,
    'editorGroup.border': colors.backgroundSidebar,
    'editorGroup.dropBackground': colors.backgroundDrop,
    'editorGroupHeader.tabsBackground': colors.backgroundSidebar,
    'editorGutter.addedBackground': colors.success,
    'editorGutter.deletedBackground': colors.red,
    'editorGutter.foldingControlForeground': colors.gray,
    'editorGutter.modifiedBackground': colors.yellow,
    'editorHoverWidget.background': colors.backgroundPopover,
    'editorHoverWidget.border': colors.invisible,
    'editorInlayHint.background': '#253c7a70',
    'editorInlayHint.foreground': colors.pastelGreen,
    'editorLightBulb.foreground': colors.yellow,
    'editorLineNumber.activeForeground': colors.gray,
    'editorLineNumber.foreground': colors.pastelGray,
    'editorLink.activeForeground': colors.blue,
    'editorSuggestWidget.background': colors.backgroundPopover,
    'editorSuggestWidget.border': colors.invisible,
    'editorSuggestWidget.selectedIconForeground': colors.magenta,
    'editorWidget.background': colors.backgroundPopover,
    'editorWidget.border': colors.backgroundActive,
    'errorLens.errorBackground': opacity(colors.error, 0.1),
    'errorLens.errorForeground': colors.error,
    'errorLens.warningBackground': opacity(colors.warning, 0.1),
    'errorLens.warningForeground': colors.warning,
    'extensionButton.prominentBackground': colors.success,
    'extensionButton.prominentForeground': colors.black,
    'extensionButton.prominentHoverBackground': colors.pastelGreen,
    'extensionIcon.preReleaseForeground': colors.warning,
    'extensionIcon.starForeground': colors.yellow,
    'extensionIcon.verifiedForeground': colors.pastelBlue,
    'focusBorder': colors.orange,
    'foreground': colors.foreground,
    'gitDecoration.addedResourceForeground': colors.success,
    'gitDecoration.conflictingResourceForeground': colors.magenta,
    'gitDecoration.deletedResourceForeground': colors.red,
    'gitDecoration.ignoredResourceForeground': colors.pastelGray,
    'gitDecoration.modifiedResourceForeground': colors.yellow,
    'gitDecoration.renamedResourceForeground': colors.white,
    'gitDecoration.stageDeletedResourceForeground': colors.red,
    'gitDecoration.stageModifiedResourceForeground': colors.yellow,
    'gitDecoration.untrackedResourceForeground': colors.green,
    'icon.foreground': colors.foreground,
    'input.background': colors.backgroundPopover,
    'input.foreground': colors.gray,
    'input.placeholderForeground': colors.pastelGray,
    'keybindingLabel.background': colors.backgroundLabel,
    'keybindingLabel.bottomBorder': colors.yellow,
    'keybindingLabel.foreground': colors.gray,
    'list.activeSelectionBackground': colors.backgroundActive,
    'list.activeSelectionForeground': colors.white,
    'list.deemphasizedForeground': colors.pastelGray,
    'list.dropBackground': colors.backgroundDrop,
    'list.errorForeground': colors.error,
    'list.filterMatchBackground': colors.backgroundMatch,
    'list.focusBackground': colors.backgroundHover,
    'list.focusForeground': colors.white,
    'list.highlightForeground': colors.green,
    'list.hoverBackground': colors.backgroundHover,
    'list.hoverForeground': colors.white,
    'list.inactiveFocusBackground': '#20283d69',
    'list.inactiveSelectionBackground': colors.backgroundInactive,
    'list.inactiveSelectionForeground': colors.gray,
    'list.invalidItemForeground': colors.error,
    'list.warningForeground': colors.orange,
    'listFilterWidget.background': colors.backgroundLabel,
    'listFilterWidget.noMatchesOutline': colors.error,
    'minimap.errorHighlight': colors.error,
    'minimap.findMatchHighlight': colors.vibrantGreen,
    'minimap.selectionHighlight': colors.backgroundSelection,
    'minimap.warningHighlight': colors.warning,
    'notificationCenterHeader.background': colors.backgroundPopover,
    'notifications.background': colors.backgroundPopover,
    'panel.border': colors.backgroundSidebar,
    'panelSectionHeader.background': colors.backgroundSidebar,
    'panelSectionHeader.foreground': colors.gray,
    'panelTitle.activeForeground': colors.gray,
    'peekView.border': colors.yellow,
    'peekViewEditor.background': colors.backgroundInactive,
    'peekViewEditor.matchHighlightBackground': colors.backgroundActiveHighlight,
    'peekViewResult.background': colors.backgroundSidebar,
    'peekViewResult.fileForeground': colors.gray,
    'peekViewResult.lineForeground': colors.foreground,
    'peekViewResult.matchHighlightBackground': colors.backgroundMatch,
    'peekViewResult.selectionBackground': colors.backgroundActive,
    'peekViewResult.selectionForeground': colors.white,
    'peekViewTitle.background': colors.backgroundPopover,
    'peekViewTitleDescription.foreground': colors.foreground,
    'peekViewTitleLabel.foreground': colors.white,
    'quickInput.background': colors.backgroundPopover,
    'quickInputTitle.background': colors.backgroundPopover,
    'sash.hoverBorder': colors.yellow,
    'scrollbar.shadow': colors.invisible,
    'scrollbarSlider.activeBackground': opacity(colors.backgroundActive, 0.75), // '#23386ebb',
    'scrollbarSlider.background': '#25314dbb',
    'scrollbarSlider.hoverBackground': '#1a2950bb',
    'selection.background': colors.backgroundSelection,
    'settings.modifiedItemIndicator': colors.yellow,
    'sideBar.background': colors.backgroundSidebar,
    'sideBarSectionHeader.background': colors.backgroundSidebar, // opacity(colors.backgroundEditor, 0.5),
    'sideBarSectionHeader.foreground': colors.gray,
    'statusBar.background': colors.backgroundSidebar,
    'statusBar.debuggingBackground': colors.vibrantOrange,
    'statusBar.debuggingForeground': colors.backgroundSidebar,
    'statusBar.foreground': colors.foreground,
    'statusBar.noFolderBackground': colors.backgroundSidebar,
    'statusBarItem.errorBackground': colors.error,
    // 'statusBarItem.hoverBackground': colors.backgroundHover,
    'statusBarItem.remoteBackground': colors.vibrantBlue, // '#3e79cd',
    'statusBarItem.warningBackground': colors.warning,
    'tab.activeBackground': colors.backgroundEditor,
    'tab.activeBorder': colors.invisible,
    'tab.activeForeground': colors.gray,
    'tab.activeModifiedBorder': colors.yellow,
    'tab.border': colors.invisible,
    'tab.hoverBackground': colors.backgroundHover,
    'tab.hoverForeground': colors.white,
    'tab.inactiveBackground': colors.backgroundSidebar,
    'tab.inactiveForeground': opacity(colors.gray, 0.6), // colors.foreground,
    'tab.unfocusedActiveBorderTop': colors.invisible,
    'terminal.ansiBlack': colors.black,
    'terminal.ansiBlue': colors.blue,
    'terminal.ansiBrightGreen': colors.vibrantGreen,
    'terminal.ansiBrightYellow': colors.yellow,
    'terminal.ansiCyan': colors.cyan,
    'terminal.ansiGreen': colors.green,
    'terminal.ansiMagenta': colors.magenta,
    'terminal.ansiRed': colors.red,
    'terminal.ansiWhite': colors.white,
    'terminal.ansiYellow': colors.yellow,
    'terminal.selectionBackground': colors.backgroundSelection,
    'terminalCursor.background': colors.backgroundEditor,
    'terminalCursor.foreground': colors.white,
    'textLink.activeForeground': colors.vibrantBlue,
    'textLink.foreground': colors.blue,
    'titleBar.activeBackground': colors.backgroundSidebar,
    'titleBar.activeForeground': colors.foreground,
    'titleBar.inactiveBackground': colors.backgroundEditor,
    'tree.indentGuidesStroke': colors.pastelGray,
    'widget.shadow': '#0c0e1554',
    // 'debugToolBar.background':
    // 'editorBracketHighlight.foreground1': '#fe5c57',
    // 'editorBracketHighlight.foreground4': colors.pastelGreen,
    // 'icon.foreground': colors.gray,
    // 'input.background': '#2a314b',
    // 'list.dropBackground': '#6d0b2c8a',
    // 'list.focusHighlightForeground': colors.yellow,
    // 'panelTitle.inactiveForeground': colors.foreground,
    // 'sideBarSectionHeader.background': colors.backgroundSidebar,
    // 'tab.activeBorderTop': colors.backgroundActive,
    // "editor.wordHighlightBorder": "#78e6c3",
    // "editorGutter.addedBackground": "#5bf78e",
    // "editorSuggestWidget.border": "",
    // "editorSuggestWidget.border": "#23386e",
    // "editorSuggestWidget.border": "#dd9046",
    // "list.activeSelectionBackground": "#1a2950",
    // "list.filterMatchBackground": "",
    // "list.filterMatchBackground": "#e98d8f94",
    // "list.filterMatchBorder": "",
    // "list.filterMatchBorder": "#78e6c3",
    // "list.hoverBackground": "#23386e",
    // "notifications.background": "#283140",
    // "panel.background": "",
    // "panel.border": "#0c0e15",
    // "panelTitle.activeBorder": "",
    // "panelTitle.activeForeground": "",
    // "panelTitle.inactiveForeground": "",
    // "quickInput.background": "#0b1115",
    // "quickInput.background": "#141b24e0",
    // "scrollbarSlider.background": "#20283d",
    // "scrollbarSlider.background": "#322e40",
    // "sideBar.border": "#0c0e15",
    // "statusBarItem.remoteBackground": "",
    // "statusBarItem.remoteForeground": "#dcbb",
    // "tab.inactiveBackground": "#21283b",
  },
  semanticHighlighting: true,
  semanticTokenColors: {
    'keyword.unsafe': colors.red,
    'macro': {
      fontStyle: 'italic',
    },
    'macroBang': {
      fontStyle: 'italic',
    },
    // '*.readonly': {
    //   fontStyle: 'underline',
    // },
  },
  tokenColors: [
    {
      name: 'keywords',
      scope: [
        specificity('source', 'keyword.other'),
        specificity('source', 'keyword.control'),
        'keyword.declaration',
        'keyword.operator.expression',
        'keyword.operator.new',
        'support.type.object.module',
        'variable.language.self',
        'variable.language.super',
        'variable.language.this',
      ],
      settings: {
        foreground: colors.magenta,
      },
    },
    {
      name: 'storage keyword (e.g. mod)',
      scope: 'storage.type',
      settings: {
        foreground: colors.magenta,
      },
    },
    {
      name: 'storage modifier (e.g. mut)',
      scope: 'storage.modifier',
      settings: {
        foreground: colors.vibrantOrange,
        // foreground: '#f6b868',
      },
    },
    {
      name: 'attributes',
      scope: specificity('source', 'meta.attribute'),
      settings: {
        foreground: colors.blue,
      },
    },
    {
      name: 'string',
      scope: [
        'string',
        'support.constant.property-value',
        'punctuation.definition.string',
        'punctuation.definition.char',
      ],
      settings: {
        foreground: colors.green,
      },
    },
    {
      name: 'escape character',
      scope: [
        'constant.character.escape',
        'punctuation.definition.template-expression.begin',
        'keyword.operator.logical',
        'keyword.operator.comparison',
        'keyword.operator.type',
        specificity('source', 'keyword.other.unit'),
      ],
      settings: {
        foreground: colors.red,
      },
    },
    {
      name: 'comments',
      scope: ['comment.line', 'comment.block', 'punctuation.definition.comment'],
      settings: {
        fontStyle: 'italic',
        foreground: colors.pastelGray,
      },
    },
    {
      name: 'markdown code blocks',
      scope: ['markup.fenced_code.block', 'markup.inline.raw'],
      settings: {
        foreground: colors.pastelGray,
      },
    },
    {
      name: 'bold',
      scope: ['punctuation.definition.heading'],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'markdown paragraph',
      scope: ['meta.paragraph.markdown'],
      settings: {
        foreground: colors.foreground,
      },
    },
    {
      name: 'variable declaration and parameters',
      scope: ['variable.other', 'variable.parameter', 'variable.key.table'],
      settings: {
        foreground: colors.variable,
        // foreground: '#d6b792',
        // foreground: '#f6b868',
        // foreground: '#c75ae8',
      },
    },
    {
      name: 'struct/object properties',
      scope: [
        'variable.other.property',
        'variable.other.object.property',
        'support.resource.attribute',
        'entity.other.attribute-name',
        'punctuation.support.type.property-name',
        'variable.key',
        'variable.object.property',
      ],
      settings: {
        foreground: colors.violet,
        // foreground: '#ba92d6',
        // foreground: colors.pastelGreen,
        // "foreground": "#01c0ce"
      },
    },
    {
      name: 'function',
      scope: [
        'entity.name.function',
        'support.function',
        'markup.underline.link',
        'keyword.operator.arithmetic',
      ],
      settings: {
        foreground: colors.blue,
      },
    },
    {
      name: 'booleans, constants',
      scope: [
        'constant.language.boolean',
        'constant.language',
        'support.constant',
        'constant.numeric',
        'punctuation.definition.list.begin',
        'support.type.builtin',
      ],
      settings: {
        foreground: colors.orange,
      },
    },
    {
      name: 'type definition',
      scope: [
        'entity.name',
        'entity.other',
        'support.class.console',
        'support.type.primitive',
        'support.type.property-name',
      ],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      name: 'semicolon',
      scope: ['keyword.operator.access.dot', 'keyword.operator.namespace', 'punctuation.semi'],
      settings: {
        foreground: '#e1cfb1',
      },
    },
    {
      name: 'assignment operator (=)',
      scope: [
        'keyword.operator.assignment',
        'keyword.operator.borrow',
        'keyword.operator.key-value',
        'keyword.operator.dereference',
        'keyword.operator.type.annotation',
        'keyword.operator.arrow.skinny',
        'punctuation',
        // 'keyword.operator.namespace',
      ],
      settings: {
        foreground: colors.cyan,
        // foreground: '#e1cfb1',
        // foreground: '#f6b868',
        // foreground: '#FDBAA6',
      },
    },
    {
      name: 'math oeprators',
      scope: 'keyword.operator.math',
      settings: {
        foreground: colors.blue,
      },
    },
  ],
};

// Generate color theme json file
fs.writeFileSync(
  path.join(process.cwd(), 'themes', 'fullmetal-color-theme.json'),
  JSON.stringify(theme, null, 2)
);
