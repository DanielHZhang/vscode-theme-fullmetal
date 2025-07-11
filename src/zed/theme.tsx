import {colors, opacity} from '../colors';
import type {HighlightStyleContent, ThemeFamilyContent} from './types';

const black = '#000';
const PLACEHOLDER = '#FF00FF';
const muted = opacity(colors.pastelGray, 0.4);
const nearInvisible = opacity(colors.pastelGray, 0.2);
const hintForeground = opacity('#5fa89a', 0.6);
const ghostHover = '#2F4378';
const ghostActive = '#465888';
// const hintForeground = '#5fa89a';

function c(color: string): HighlightStyleContent {
  return {color};
}

export const theme: ThemeFamilyContent = {
  $schema: 'https://zed.dev/schema/themes/v0.2.0.json',
  name: 'Fullmetal',
  author: 'Daniel Zhang',
  themes: [
    {
      name: 'Fullmetal Dark',
      appearance: 'dark',
      style: {
        'accents': [colors.cyan, colors.magenta, colors.yellow],
        // Background
        'background': colors.backgroundEditor,
        'background.appearance': 'opaque',

        // Border
        'border': colors.invisible,
        'border.disabled': colors.invisible,
        'border.focused': colors.blue,
        'border.selected': PLACEHOLDER,
        'border.transparent': muted,
        'border.variant': muted,

        'conflict': colors.magenta,
        'conflict.background': PLACEHOLDER,
        'conflict.border': PLACEHOLDER,

        'created': colors.vibrantGreen,
        'created.background': PLACEHOLDER,
        'created.border': PLACEHOLDER,

        'deleted': colors.red,
        'deleted.background': PLACEHOLDER,
        'deleted.border': PLACEHOLDER,

        'drop_target.background': colors.backgroundDrop,

        // Editor
        'editor.active_line.background': colors.backgroundInactive,
        'editor.active_line_number': colors.gray,
        'editor.background': colors.backgroundEditor,

        'editor.document_highlight.bracket_background': opacity(colors.yellow, 0.2),
        'editor.document_highlight.read_background': opacity(colors.pastelBlue, 0.2),
        'editor.document_highlight.write_background': opacity(colors.pastelGreen, 0.2),

        'editor.foreground': colors.foreground,
        'editor.gutter.background': colors.backgroundEditor,
        'editor.highlighted_line.background': PLACEHOLDER,
        'editor.indent_guide': PLACEHOLDER,
        'editor.indent_guide_active': PLACEHOLDER,
        'editor.invisible': colors.red,
        'editor.line_number': colors.pastelGray,
        'editor.subheader.background': colors.backgroundInactive,
        'editor.wrap_guide': muted,

        // Element
        'element.active': colors.backgroundActive,
        'element.background': colors.backgroundInactive,
        'element.disabled': muted,
        'element.hover': colors.backgroundHover, // This also controls hovering on text
        'element.selected': colors.backgroundSelection,

        'elevated_surface.background': colors.backgroundPopover,

        'error': PLACEHOLDER,
        'error.background': PLACEHOLDER,
        'error.border': PLACEHOLDER,

        // Ghost elements (e.g. status bar buttons)
        'ghost_element.active': ghostActive,
        'ghost_element.background': colors.invisible,
        'ghost_element.disabled': colors.backgroundInactive,
        'ghost_element.hover': ghostHover,
        'ghost_element.selected': colors.backgroundActive,

        'hidden': PLACEHOLDER,
        'hidden.background': PLACEHOLDER,
        'hidden.border': PLACEHOLDER,

        'hint': hintForeground,
        'hint.background': PLACEHOLDER,
        'hint.border': PLACEHOLDER,

        'icon': PLACEHOLDER,
        'icon.accent': PLACEHOLDER,
        'icon.disabled': PLACEHOLDER,
        'icon.muted': PLACEHOLDER,
        'icon.placeholder': PLACEHOLDER,

        'ignored': colors.pastelGray,
        'ignored.background': PLACEHOLDER,
        'ignored.border': PLACEHOLDER,

        'info': PLACEHOLDER,
        'info.background': opacity(colors.backgroundActive, 1),
        'info.border': PLACEHOLDER,

        'link_text.hover': colors.blue,

        'modified': colors.yellow,
        'modified.background': PLACEHOLDER,
        'modified.border': PLACEHOLDER,

        'pane.focused_border': PLACEHOLDER,
        'pane_group.border': PLACEHOLDER,

        // Side panel
        'panel.background': colors.backgroundSidebar,
        'panel.focused_border': colors.backgroundActive,
        'panel.indent_guide': muted,
        'panel.indent_guide_active': muted,
        'panel.indent_guide_hover': colors.pastelGray,

        // Players
        'players': [
          {
            cursor: '#fff',
            selection: '#3a5599ac',
          },
        ],

        'predictive': PLACEHOLDER,
        'predictive.background': PLACEHOLDER,
        'predictive.border': PLACEHOLDER,

        'renamed': PLACEHOLDER,
        'renamed.background': PLACEHOLDER,
        'renamed.border': PLACEHOLDER,

        // Scrollbar
        'scrollbar.thumb.background': colors.backgroundInactive,
        'scrollbar.thumb.border': colors.invisible,
        'scrollbar.thumb.hover_background': colors.backgroundHover,
        'scrollbar.track.background': colors.invisible,
        'scrollbar.track.border': nearInvisible,

        'search.match_background': colors.backgroundSelection,

        // Status bar
        'status_bar.background': colors.backgroundSidebar,

        'success': PLACEHOLDER,
        'success.background': PLACEHOLDER,
        'success.border': PLACEHOLDER,

        'surface.background': PLACEHOLDER,

        // Tab
        'tab_bar.background': colors.backgroundSidebar,
        'tab.active_background': colors.backgroundEditor,
        'tab.inactive_background': colors.backgroundSidebar,

        // Terminal
        'terminal.background': colors.backgroundEditor,
        'terminal.dim_foreground': PLACEHOLDER,
        'terminal.foreground': colors.foreground,

        // Text
        'text': colors.gray,
        'text.accent': colors.white,
        'text.muted': colors.foreground,
        'text.disabled': colors.pastelGray,
        'text.placeholder': PLACEHOLDER,

        // Title bar
        'title_bar.background': colors.backgroundSidebar,
        'title_bar.inactive_background': colors.backgroundEditor,

        // Toolbar (e.g. find and replace)
        'toolbar.background': colors.backgroundPopover,

        'unreachable': PLACEHOLDER,
        'unreachable.background': PLACEHOLDER,
        'unreachable.border': PLACEHOLDER,

        'warning': PLACEHOLDER,
        'warning.background': PLACEHOLDER,
        'warning.border': PLACEHOLDER,

        // Language syntax
        'syntax': {
          'attribute': c(black),
          'boolean': {color: colors.orange},
          'comment': {color: colors.pastelGray},
          'comment.doc': c(black),
          'constant': {color: colors.orange},
          'constructor': c(colors.magenta),
          'embedded': c(black),
          'emphasis': c(black),
          'emphasis.strong': c(black),
          'enum': c(colors.magenta),
          'function': c(colors.blue),
          'hint': c(black),
          'keyword': c(colors.magenta),
          'label': c(black),
          'link_text': c(black),
          'link_uri': c(black),
          'number': {color: colors.orange},
          'operator': c(colors.pastelGreen),
          'predictive': c(black),
          'preproc': c(black),
          'primary': c(black),
          'property': {color: colors.violet},
          'punctuation': c(colors.cyan),
          'punctuation.bracket': c(colors.cyan),
          'punctuation.delimiter': c(colors.cyan),
          'punctuation.list_marker': c(black),
          'punctuation.special': c(colors.red),
          'string': c(colors.string),
          'string.escape': c(colors.red),
          'string.regex': c(colors.string),
          'string.special': c(black),
          'string.special.symbol': c(colors.white),
          'tag': c(black),
          'text.literal': c(black),
          'title': c(black),
          'type': c(colors.yellow),
          'type.interface': c(black),
          'type.super': c(black),
          'variable': {color: colors.variable},
          'variable.member': c(black),
          'variable.parameter': c(black),
          'variable.special': c(colors.magenta),
          'variant': c(black),
        },
      },
    },
  ],
};
