import fs from 'fs';
import path from 'path';
import type {ColorTheme} from '..';
import {opacity, specificity} from './utils';

// Unused colors:
// '#fe5c57',
// '#2a2749bd',
// '#21283b',
// '#5bf78e',
// '#8acd5b',
// '#ea31b5',
// '#ff6ac1',
// '#2a314b',
// '#6d0b2c8a',
// '#78e6c3',
// '#23386e',
// '#dd9046',
// '#1a2950',
// '#e98d8f94',
// '#78e6c3',
// '#23386e',
// '#283140',
// '#0b1115',
// '#141b24e0',
// '#20283d',
// '#322e40',
// '#21283b',
// '#d6b792',
// '#c75ae8',
// '#ba92d6',
// '#01c0ce'
// '#e1cfb1',
// '#FDBAA6',

const ansiColors = {
  white: '#dbdae8',
  gray: '#90a5c8',
  black: '#0c0e15',
  red: '#ff4762',
  orange: '#dd9046',
  yellow: '#efbd5d',
  green: '#8acd5b',
  blue: '#41a7fc',
  cyan: '#3dacb4',
  // indigo: '',
  violet: '#c77ddd',
  magenta: '#d44dae',
};

const pastelColors = {
  pastelBlue: '#92d6cf',
  pastelGreen: '#add692',
  pastelGray: '#455573',
  pastelYellow: '#e1cfb1',
};

const vibrantColors = {
  vibrantYellow: '#f6b868',
  vibrantOrange: '#ff7e00',
  vibrantGreen: '#3ecd83',
  // vibrantBlue: '#006aff',
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
  backgroundDrop: opacity(ansiColors.cyan, 0.2),
  backgroundEditor: '#1a212e',
  backgroundHeader: '#181420ce',
  backgroundHover: '#1a2950',
  backgroundInactive: '#212a3f',
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
    'diffEditor.diagonalFill': opacity(colors.pastelGray, 0.5),
    'diffEditor.insertedTextBackground': opacity(colors.success, 0.15),
    'diffEditor.removedTextBackground': opacity(colors.error, 0.15),
    'dropdown.background': colors.backgroundPopover,
    'dropdown.foreground': colors.gray,
    'editor.background': colors.backgroundEditor,
    'editor.findMatchBackground': opacity(colors.vibrantGreen, 0.1),
    'editor.findMatchHighlightBackground': opacity(colors.pastelGreen, 0.1),
    'editor.findMatchHighlightBorder': colors.backgroundMatch,
    'editor.foreground': colors.gray,
    'editor.hoverHighlightBackground': opacity(colors.white, 0.15),
    'editor.lineHighlightBackground': colors.backgroundInactive,
    'editor.rangeHighlightBackground': opacity(colors.vibrantGreen, 0.1),
    'editor.selectionBackground': colors.backgroundSelection,
    'editor.stackFrameHighlightBackground': colors.backgroundActiveHighlight,
    'editor.symbolHighlightBackground': opacity(colors.vibrantGreen, 0.1),
    'editor.symbolHighlightBorder': colors.orange,
    'editor.wordHighlightBackground': opacity(colors.vibrantYellow, 0.15),
    'editor.wordHighlightBorder': opacity(colors.vibrantYellow, 0.5),
    'editor.wordHighlightStrongBackground': opacity(colors.blue, 0.3),
    'editorBracketHighlight.foreground1': colors.violet, // '#c75ae8',
    'editorBracketHighlight.foreground2': colors.cyan,
    'editorBracketHighlight.foreground3': colors.vibrantYellow,
    'editorBracketHighlight.unexpectedBracket.foreground': colors.error,
    'editorCodeLens.foreground': colors.pastelGray,
    'editorCursor.background': colors.backgroundEditor,
    'editorCursor.foreground': colors.white,
    'editorError.foreground': colors.error,
    'editorGhostText.foreground': colors.pastelGray,
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
    'editorInlayHint.foreground': '#5fa89a',
    'editorLightBulb.foreground': colors.vibrantYellow,
    'editorLineNumber.activeForeground': colors.gray,
    'editorLineNumber.foreground': colors.pastelGray,
    'editorLink.activeForeground': colors.blue,
    'editorRuler.foreground': opacity(colors.pastelGray, 0.5),
    'editorSuggestWidget.background': colors.backgroundPopover,
    'editorSuggestWidget.border': colors.invisible,
    'editorSuggestWidget.selectedIconForeground': colors.magenta,
    'editorUnicodeHighlight.border': colors.red,
    'editorWarning.foreground': colors.warning,
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
    'extensionIcon.starForeground': colors.vibrantYellow,
    'extensionIcon.verifiedForeground': colors.pastelBlue,
    'focusBorder': colors.orange,
    'foreground': colors.foreground,
    'gitDecoration.addedResourceForeground': colors.success,
    'gitDecoration.conflictingResourceForeground': colors.magenta,
    'gitDecoration.deletedResourceForeground': colors.red,
    'gitDecoration.ignoredResourceForeground': colors.pastelGray,
    'gitDecoration.modifiedResourceForeground': colors.yellow,
    'gitDecoration.renamedResourceForeground': colors.pastelBlue,
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
    'statusBarItem.compactHoverBackground': opacity(colors.backgroundActive, 0.35),
    'statusBarItem.errorBackground': colors.error,
    'statusBarItem.hoverBackground': opacity(colors.backgroundActive, 0.35), // '#32509c4d',
    'statusBarItem.prominentHoverBackground': opacity(colors.backgroundActive, 0.35),
    'statusBarItem.remoteBackground': colors.vibrantBlue, // '#3e79cd',
    'statusBarItem.warningBackground': colors.warning,
    'tab.activeBackground': colors.backgroundEditor,
    'tab.activeBorder': colors.invisible,
    'tab.activeBorderTop': colors.vibrantBlue,
    'tab.activeForeground': colors.gray,
    'tab.activeModifiedBorder': colors.yellow,
    'tab.border': colors.invisible,
    'tab.hoverBackground': colors.backgroundHover,
    'tab.hoverForeground': colors.white,
    'tab.inactiveBackground': colors.backgroundSidebar,
    'tab.inactiveForeground': opacity(colors.gray, 0.6),
    'tab.unfocusedActiveBorderTop': colors.invisible,
    'terminal.ansiBlack': colors.black,
    'terminal.ansiBlue': colors.blue,
    'terminal.ansiBrightGreen': colors.vibrantGreen,
    'terminal.ansiBrightYellow': colors.vibrantYellow,
    'terminal.ansiCyan': colors.cyan,
    'terminal.ansiGreen': colors.green,
    'terminal.ansiMagenta': colors.magenta,
    'terminal.ansiRed': colors.red,
    'terminal.ansiWhite': colors.white,
    'terminal.ansiYellow': colors.yellow,
    'terminal.selectionBackground': colors.backgroundSelection,
    'terminalCursor.background': colors.backgroundEditor,
    'terminalCursor.foreground': colors.white,
    'textCodeBlock.background': opacity(colors.gray, 0.15),
    'textLink.activeForeground': colors.vibrantBlue,
    'textLink.foreground': colors.blue,
    'titleBar.activeBackground': colors.backgroundSidebar,
    'titleBar.activeForeground': colors.foreground,
    'titleBar.inactiveBackground': colors.backgroundEditor,
    'tree.indentGuidesStroke': colors.pastelGray,
    'widget.shadow': opacity(colors.black, 0.4),
  },
  semanticHighlighting: true,
  semanticTokenColors: {
    'keyword.unsafe': colors.red,
    'macro': {
      italic: true,
    },
    'macroBang': {
      italic: true,
    },
    'variable.mutable': {
      underline: true,
    },
    'selfKeyword.mutable': {
      underline: true,
    },
    'parameter.mutable': {
      underline: true,
    },
  },
  tokenColors: [
    {
      name: 'keywords',
      scope: [
        specificity('source', 'keyword.other'),
        specificity('source', 'keyword.control'),
        'keyword.declaration',
        'keyword.operator.arrow',
        'keyword.operator.expression',
        'keyword.operator.new',
        'keyword.preprocessor',
        'keyword.operator.word.hcl', // Terraform keyword
        'keyword.type', // `void` in C#
        'storage.type', // `mod` in rust
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
      name: 'storage modifier',
      scope: [
        'storage.modifier',
        'punctuation.definition.quote.begin',
        'punctuation.definition.heading',
      ],
      settings: {
        foreground: colors.vibrantOrange,
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
      name: 'red (potentially dangerous operations)',
      scope: [
        specificity('source', 'keyword.other.unit'),
        'constant.character.escape',
        'punctuation.definition.template-expression.begin',
        'keyword.operator.comparison',
        'keyword.operator.conditional',
        'keyword.operator.definiteassignment', // Typescript null assertion (public someProp!: string)
        'keyword.operator.hcl', // Terraform keyword
        'keyword.operator.logical',
        'keyword.operator.question', // option.unwrap()? (rust)
        'keyword.operator.relational',
        'keyword.operator.ternary',
        'keyword.operator.type',
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
      scope: [
        'variable.other',
        'variable.parameter',
        'variable.key.table',
        'entity.name.variable.local', // Local variable (C#)
      ],
      settings: {
        foreground: colors.variable,
      },
    },
    {
      name: 'struct/object properties',
      scope: [
        'variable.key',
        'variable.other.enummember',
        'variable.other.property',
        'variable.other.constant.property',
        'variable.other.object.property',
        'variable.object.property',
        'support.resource.attribute',
        'support.variable.property',
        'entity.other.attribute-name',
        'meta.object-literal.key',
        'meta.braces.hcl', // Terraform property
        'entity.name.variable.field', // class field (C#)
      ],
      settings: {
        foreground: colors.violet,
      },
    },
    {
      name: 'function',
      scope: [
        specificity('source', 'meta.attribute'),
        'entity.name.function',
        'keyword.generator.asterisk',
        'keyword.operator.arithmetic',
        'keyword.operator.assignment.compound',
        'keyword.operator.decrement',
        'keyword.operator.increment',
        'keyword.operator.math',
        'markup.underline.link',
        'support.function',
        'keyword.operator.bitwise', // <<
        'keyword.operator.borrow', // &
        'keyword.operator.dereference', // *
        'keyword.operator.rest', // (...args) => {} (ts)
        'keyword.operator.spread', // ...props (ts)
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
        'constant.other.caps',
      ],
      settings: {
        foreground: colors.orange,
      },
    },
    {
      name: 'entities (class/type definitions)',
      scope: [
        'entity.name',
        'entity.other',
        'meta.use.rust', // mod names in hovers
        'support.class',
        'support.type.primitive',
        'support.type.property-name',
        'punctuation.support.type.property-name',
      ],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      name: 'accessor punctuation',
      scope: [
        'keyword.operator.access.dot', // class.prop
        'keyword.operator.namespace', // mod::fn
        'keyword.operator.assignment', // =
        'punctuation.accessor', // class.prop
        'punctuation.eq', // = (toml)
        'keyword.operator.arrow.skinny', // ->
      ],
      settings: {
        foreground: colors.pastelGreen,
        // foreground: colors.pastelYellow,
      },
    },
    {
      name: 'background punctuation',
      scope: [
        'keyword.operator.key-value',
        'keyword.operator.type.annotation',
        'meta.brace.round',
        'meta.brace.square',
        'punctuation.terminator',
        'punctuation.semi',
        'punctuation.parenthesis.open',
        'punctuation.parenthesis.close',
        'punctuation.separator',
        'punctuation.brackets.angle', // fn<Generic>() (rust/ts)
        'punctuation.definition.link.title.begin', // [link](url) (markdown)
        'punctuation.definition.link.title.end', // [link](url) (markdown)
        'punctuation.definition.metadata', // [link](url) (markdown)
        'punctuation.definition.tag.begin', // <div (jsx)
        'punctuation.definition.tag.end', // div> (jsx)
        'punctuation.definition.typeparameters', // Record<string, any> (ts)
        'punctuation.definition.table.inline', // {} (toml)
      ],
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      name: 'shell script shebang',
      scope: 'punctuation.definition.comment.shebang.shell',
      settings: {
        fontStyle: 'bold',
        foreground: colors.pastelGreen,
      },
    },
    {
      name: 'toml table headers',
      scope: 'meta.table support.type.property-name.table',
      settings: {
        foreground: '#c77ddd',
        fontStyle: 'bold',
      },
    },
  ],
};

// Generate color theme json file
fs.writeFileSync(
  path.join(process.cwd(), 'themes', 'fullmetal-color-theme.json'),
  JSON.stringify(theme, null, 2)
);
