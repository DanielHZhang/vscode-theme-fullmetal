/**
 * Colors for syntax highlighting
 */
export type TextmateColors = {
  /**
   * Description of the rule.
   */
  name?: string;
  /**
   * Scope selector against which this rule matches.
   */
  scope?:
    | (
        | 'comment'
        | 'comment.block'
        | 'comment.block.documentation'
        | 'comment.line'
        | 'constant'
        | 'constant.character'
        | 'constant.character.escape'
        | 'constant.numeric'
        | 'constant.numeric.integer'
        | 'constant.numeric.float'
        | 'constant.numeric.hex'
        | 'constant.numeric.octal'
        | 'constant.other'
        | 'constant.regexp'
        | 'constant.rgb-value'
        | 'emphasis'
        | 'entity'
        | 'entity.name'
        | 'entity.name.class'
        | 'entity.name.function'
        | 'entity.name.method'
        | 'entity.name.section'
        | 'entity.name.selector'
        | 'entity.name.tag'
        | 'entity.name.type'
        | 'entity.other'
        | 'entity.other.attribute-name'
        | 'entity.other.inherited-class'
        | 'invalid'
        | 'invalid.deprecated'
        | 'invalid.illegal'
        | 'keyword'
        | 'keyword.control'
        | 'keyword.operator'
        | 'keyword.operator.new'
        | 'keyword.operator.assignment'
        | 'keyword.operator.arithmetic'
        | 'keyword.operator.logical'
        | 'keyword.other'
        | 'markup'
        | 'markup.bold'
        | 'markup.changed'
        | 'markup.deleted'
        | 'markup.heading'
        | 'markup.inline.raw'
        | 'markup.inserted'
        | 'markup.italic'
        | 'markup.list'
        | 'markup.list.numbered'
        | 'markup.list.unnumbered'
        | 'markup.other'
        | 'markup.quote'
        | 'markup.raw'
        | 'markup.underline'
        | 'markup.underline.link'
        | 'meta'
        | 'meta.block'
        | 'meta.cast'
        | 'meta.class'
        | 'meta.function'
        | 'meta.function-call'
        | 'meta.preprocessor'
        | 'meta.return-type'
        | 'meta.selector'
        | 'meta.tag'
        | 'meta.type.annotation'
        | 'meta.type'
        | 'punctuation.definition.string.begin'
        | 'punctuation.definition.string.end'
        | 'punctuation.separator'
        | 'punctuation.separator.continuation'
        | 'punctuation.terminator'
        | 'storage'
        | 'storage.modifier'
        | 'storage.type'
        | 'string'
        | 'string.interpolated'
        | 'string.other'
        | 'string.quoted'
        | 'string.quoted.double'
        | 'string.quoted.other'
        | 'string.quoted.single'
        | 'string.quoted.triple'
        | 'string.regexp'
        | 'string.unquoted'
        | 'strong'
        | 'support'
        | 'support.class'
        | 'support.constant'
        | 'support.function'
        | 'support.other'
        | 'support.type'
        | 'support.type.property-name'
        | 'support.variable'
        | 'variable'
        | 'variable.language'
        | 'variable.name'
        | 'variable.other'
        | 'variable.other.readwrite'
        | 'variable.parameter'
      )
    | string
    | (
        | 'comment'
        | 'comment.block'
        | 'comment.block.documentation'
        | 'comment.line'
        | 'constant'
        | 'constant.character'
        | 'constant.character.escape'
        | 'constant.numeric'
        | 'constant.numeric.integer'
        | 'constant.numeric.float'
        | 'constant.numeric.hex'
        | 'constant.numeric.octal'
        | 'constant.other'
        | 'constant.regexp'
        | 'constant.rgb-value'
        | 'emphasis'
        | 'entity'
        | 'entity.name'
        | 'entity.name.class'
        | 'entity.name.function'
        | 'entity.name.method'
        | 'entity.name.section'
        | 'entity.name.selector'
        | 'entity.name.tag'
        | 'entity.name.type'
        | 'entity.other'
        | 'entity.other.attribute-name'
        | 'entity.other.inherited-class'
        | 'invalid'
        | 'invalid.deprecated'
        | 'invalid.illegal'
        | 'keyword'
        | 'keyword.control'
        | 'keyword.operator'
        | 'keyword.operator.new'
        | 'keyword.operator.assignment'
        | 'keyword.operator.arithmetic'
        | 'keyword.operator.logical'
        | 'keyword.other'
        | 'markup'
        | 'markup.bold'
        | 'markup.changed'
        | 'markup.deleted'
        | 'markup.heading'
        | 'markup.inline.raw'
        | 'markup.inserted'
        | 'markup.italic'
        | 'markup.list'
        | 'markup.list.numbered'
        | 'markup.list.unnumbered'
        | 'markup.other'
        | 'markup.quote'
        | 'markup.raw'
        | 'markup.underline'
        | 'markup.underline.link'
        | 'meta'
        | 'meta.block'
        | 'meta.cast'
        | 'meta.class'
        | 'meta.function'
        | 'meta.function-call'
        | 'meta.preprocessor'
        | 'meta.return-type'
        | 'meta.selector'
        | 'meta.tag'
        | 'meta.type.annotation'
        | 'meta.type'
        | 'punctuation.definition.string.begin'
        | 'punctuation.definition.string.end'
        | 'punctuation.separator'
        | 'punctuation.separator.continuation'
        | 'punctuation.terminator'
        | 'storage'
        | 'storage.modifier'
        | 'storage.type'
        | 'string'
        | 'string.interpolated'
        | 'string.other'
        | 'string.quoted'
        | 'string.quoted.double'
        | 'string.quoted.other'
        | 'string.quoted.single'
        | 'string.quoted.triple'
        | 'string.regexp'
        | 'string.unquoted'
        | 'strong'
        | 'support'
        | 'support.class'
        | 'support.constant'
        | 'support.function'
        | 'support.other'
        | 'support.type'
        | 'support.type.property-name'
        | 'support.variable'
        | 'variable'
        | 'variable.language'
        | 'variable.name'
        | 'variable.other'
        | 'variable.other.readwrite'
        | 'variable.parameter'
      )[]
    | string[];
  settings: Settings;
}[];

export interface ColorTheme {
  colors?: WorkbenchColors;
  tokenColors?: string | TextmateColors;
  /**
   * Whether semantic highlighting should be enabled for this theme.
   */
  semanticHighlighting?: boolean;
  semanticTokenColors?: TokenStyling;
  [k: string]: unknown;
}
/**
 * Colors in the workbench
 */
export interface WorkbenchColors {
  /**
   * Overall foreground color. This color is only used if not overridden by a component.
   */
  'foreground'?: string | 'default';
  /**
   * Highest-contrast foreground color, intended for text or icons that need maximum legibility across various backgrounds. This color is only used if not overridden by a component.
   */
  'strongForeground'?: string | 'default';
  /**
   * Overall foreground for disabled elements. This color is only used if not overridden by a component.
   */
  'disabledForeground'?: string | 'default';
  /**
   * Overall foreground color for error messages. This color is only used if not overridden by a component.
   */
  'errorForeground'?: string | 'default';
  /**
   * Foreground color for description text providing additional information, for example for a label.
   */
  'descriptionForeground'?: string | 'default';
  /**
   * The default color for icons in the workbench.
   */
  'icon.foreground'?: string | 'default';
  /**
   * Overall border color for focused elements. This color is only used if not overridden by a component.
   */
  'focusBorder'?: string | 'default';
  /**
   * An extra border around elements to separate them from others for greater contrast.
   */
  'contrastBorder'?: string | 'default';
  /**
   * An extra border around active elements to separate them from others for greater contrast.
   */
  'contrastActiveBorder'?: string | 'default';
  /**
   * The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor.
   */
  'selection.background'?: string | 'default';
  /**
   * Foreground color for links in text.
   */
  'textLink.foreground'?: string | 'default';
  /**
   * Foreground color for links in text when clicked on and on mouse hover.
   */
  'textLink.activeForeground'?: string | 'default';
  /**
   * Color for text separators.
   */
  'textSeparator.foreground'?: string | 'default';
  /**
   * Foreground color for preformatted text segments.
   */
  'textPreformat.foreground'?: string | 'default';
  /**
   * Background color for preformatted text segments.
   */
  'textPreformat.background'?: string | 'default';
  /**
   * Border color for preformatted text segments.
   */
  'textPreformat.border'?: string | 'default';
  /**
   * Background color for block quotes in text.
   */
  'textBlockQuote.background'?: string | 'default';
  /**
   * Border color for block quotes in text.
   */
  'textBlockQuote.border'?: string | 'default';
  /**
   * Background color for code blocks in text.
   */
  'textCodeBlock.background'?: string | 'default';
  /**
   * Border color of active sashes.
   */
  'sash.hoverBorder'?: string | 'default';
  /**
   * Badge background color. Badges are small information labels, e.g. for search results count.
   */
  'badge.background'?: string | 'default';
  /**
   * Badge foreground color. Badges are small information labels, e.g. for search results count.
   */
  'badge.foreground'?: string | 'default';
  /**
   * Foreground color of the warning activity badge
   */
  'activityWarningBadge.foreground'?: string | 'default';
  /**
   * Background color of the warning activity badge
   */
  'activityWarningBadge.background'?: string | 'default';
  /**
   * Foreground color of the error activity badge
   */
  'activityErrorBadge.foreground'?: string | 'default';
  /**
   * Background color of the error activity badge
   */
  'activityErrorBadge.background'?: string | 'default';
  /**
   * Scrollbar shadow to indicate that the view is scrolled.
   */
  'scrollbar.shadow'?: string | 'default';
  /**
   * Scrollbar slider background color.
   */
  'scrollbarSlider.background'?: string | 'default';
  /**
   * Scrollbar slider background color when hovering.
   */
  'scrollbarSlider.hoverBackground'?: string | 'default';
  /**
   * Scrollbar slider background color when clicked on.
   */
  'scrollbarSlider.activeBackground'?: string | 'default';
  /**
   * Scrollbar track background color.
   */
  'scrollbar.background'?: string | 'default';
  /**
   * Background color of the progress bar that can show for long running operations.
   */
  'progressBar.background'?: string | 'default';
  /**
   * Line color for the chart.
   */
  'chart.line'?: string | 'default';
  /**
   * Axis color for the chart.
   */
  'chart.axis'?: string | 'default';
  /**
   * Guide line for the chart.
   */
  'chart.guide'?: string | 'default';
  /**
   * Editor background color.
   */
  'editor.background'?: string | 'default';
  /**
   * Editor default foreground color.
   */
  'editor.foreground'?: string | 'default';
  /**
   * Background color of sticky scroll in the editor
   */
  'editorStickyScroll.background'?: string | 'default';
  /**
   * Background color of the gutter part of sticky scroll in the editor
   */
  'editorStickyScrollGutter.background'?: string | 'default';
  /**
   * Background color of sticky scroll on hover in the editor
   */
  'editorStickyScrollHover.background'?: string | 'default';
  /**
   * Border color of sticky scroll in the editor
   */
  'editorStickyScroll.border'?: string | 'default';
  /**
   *  Shadow color of sticky scroll in the editor
   */
  'editorStickyScroll.shadow'?: string | 'default';
  /**
   * Background color of editor widgets, such as find/replace.
   */
  'editorWidget.background'?: string | 'default';
  /**
   * Foreground color of editor widgets, such as find/replace.
   */
  'editorWidget.foreground'?: string | 'default';
  /**
   * Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget.
   */
  'editorWidget.border'?: string | 'default';
  /**
   * Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.
   */
  'editorWidget.resizeBorder'?: string | 'default';
  /**
   * Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorError.background'?: string | 'default';
  /**
   * Foreground color of error squigglies in the editor.
   */
  'editorError.foreground'?: string | 'default';
  /**
   * If set, color of double underlines for errors in the editor.
   */
  'editorError.border'?: string | 'default';
  /**
   * Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorWarning.background'?: string | 'default';
  /**
   * Foreground color of warning squigglies in the editor.
   */
  'editorWarning.foreground'?: string | 'default';
  /**
   * If set, color of double underlines for warnings in the editor.
   */
  'editorWarning.border'?: string | 'default';
  /**
   * Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorInfo.background'?: string | 'default';
  /**
   * Foreground color of info squigglies in the editor.
   */
  'editorInfo.foreground'?: string | 'default';
  /**
   * If set, color of double underlines for infos in the editor.
   */
  'editorInfo.border'?: string | 'default';
  /**
   * Foreground color of hint squigglies in the editor.
   */
  'editorHint.foreground'?: string | 'default';
  /**
   * If set, color of double underlines for hints in the editor.
   */
  'editorHint.border'?: string | 'default';
  /**
   * Color of active links.
   */
  'editorLink.activeForeground'?: string | 'default';
  /**
   * Color of the editor selection.
   */
  'editor.selectionBackground'?: string | 'default';
  /**
   * Color of the selected text for high contrast.
   */
  'editor.selectionForeground'?: string | 'default';
  /**
   * Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.inactiveSelectionBackground'?: string | 'default';
  /**
   * Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.selectionHighlightBackground'?: string | 'default';
  /**
   * Border color for regions with the same content as the selection.
   */
  'editor.selectionHighlightBorder'?: string | 'default';
  /**
   * The border color for an IME composition.
   */
  'editor.compositionBorder'?: string | 'default';
  /**
   * Color of the current search match.
   */
  'editor.findMatchBackground'?: string | 'default';
  /**
   * Text color of the current search match.
   */
  'editor.findMatchForeground'?: string | 'default';
  /**
   * Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.findMatchHighlightBackground'?: string | 'default';
  /**
   * Foreground color of the other search matches.
   */
  'editor.findMatchHighlightForeground'?: string | 'default';
  /**
   * Color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.findRangeHighlightBackground'?: string | 'default';
  /**
   * Border color of the current search match.
   */
  'editor.findMatchBorder'?: string | 'default';
  /**
   * Border color of the other search matches.
   */
  'editor.findMatchHighlightBorder'?: string | 'default';
  /**
   * Border color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.findRangeHighlightBorder'?: string | 'default';
  /**
   * Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.hoverHighlightBackground'?: string | 'default';
  /**
   * Background color of the editor hover.
   */
  'editorHoverWidget.background'?: string | 'default';
  /**
   * Foreground color of the editor hover.
   */
  'editorHoverWidget.foreground'?: string | 'default';
  /**
   * Border color of the editor hover.
   */
  'editorHoverWidget.border'?: string | 'default';
  /**
   * Background color of the editor hover status bar.
   */
  'editorHoverWidget.statusBarBackground'?: string | 'default';
  /**
   * Foreground color of inline hints
   */
  'editorInlayHint.foreground'?: string | 'default';
  /**
   * Background color of inline hints
   */
  'editorInlayHint.background'?: string | 'default';
  /**
   * Foreground color of inline hints for types
   */
  'editorInlayHint.typeForeground'?: string | 'default';
  /**
   * Background color of inline hints for types
   */
  'editorInlayHint.typeBackground'?: string | 'default';
  /**
   * Foreground color of inline hints for parameters
   */
  'editorInlayHint.parameterForeground'?: string | 'default';
  /**
   * Background color of inline hints for parameters
   */
  'editorInlayHint.parameterBackground'?: string | 'default';
  /**
   * The color used for the lightbulb actions icon.
   */
  'editorLightBulb.foreground'?: string | 'default';
  /**
   * The color used for the lightbulb auto fix actions icon.
   */
  'editorLightBulbAutoFix.foreground'?: string | 'default';
  /**
   * The color used for the lightbulb AI icon.
   */
  'editorLightBulbAi.foreground'?: string | 'default';
  /**
   * Highlight background color of a snippet tabstop.
   */
  'editor.snippetTabstopHighlightBackground'?: string | 'default';
  /**
   * Highlight border color of a snippet tabstop.
   */
  'editor.snippetTabstopHighlightBorder'?: string | 'default';
  /**
   * Highlight background color of the final tabstop of a snippet.
   */
  'editor.snippetFinalTabstopHighlightBackground'?: string | 'default';
  /**
   * Highlight border color of the final tabstop of a snippet.
   */
  'editor.snippetFinalTabstopHighlightBorder'?: string | 'default';
  /**
   * Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
   */
  'diffEditor.insertedTextBackground'?: string | 'default';
  /**
   * Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
   */
  'diffEditor.removedTextBackground'?: string | 'default';
  /**
   * Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations.
   */
  'diffEditor.insertedLineBackground'?: string | 'default';
  /**
   * Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations.
   */
  'diffEditor.removedLineBackground'?: string | 'default';
  /**
   * Background color for the margin where lines got inserted.
   */
  'diffEditorGutter.insertedLineBackground'?: string | 'default';
  /**
   * Background color for the margin where lines got removed.
   */
  'diffEditorGutter.removedLineBackground'?: string | 'default';
  /**
   * Diff overview ruler foreground for inserted content.
   */
  'diffEditorOverview.insertedForeground'?: string | 'default';
  /**
   * Diff overview ruler foreground for removed content.
   */
  'diffEditorOverview.removedForeground'?: string | 'default';
  /**
   * Outline color for the text that got inserted.
   */
  'diffEditor.insertedTextBorder'?: string | 'default';
  /**
   * Outline color for text that got removed.
   */
  'diffEditor.removedTextBorder'?: string | 'default';
  /**
   * Border color between the two text editors.
   */
  'diffEditor.border'?: string | 'default';
  /**
   * Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.
   */
  'diffEditor.diagonalFill'?: string | 'default';
  /**
   * The background color of unchanged blocks in the diff editor.
   */
  'diffEditor.unchangedRegionBackground'?: string | 'default';
  /**
   * The foreground color of unchanged blocks in the diff editor.
   */
  'diffEditor.unchangedRegionForeground'?: string | 'default';
  /**
   * The background color of unchanged code in the diff editor.
   */
  'diffEditor.unchangedCodeBackground'?: string | 'default';
  /**
   * Shadow color of widgets such as find/replace inside the editor.
   */
  'widget.shadow'?: string | 'default';
  /**
   * Border color of widgets such as find/replace inside the editor.
   */
  'widget.border'?: string | 'default';
  /**
   * Toolbar background when hovering over actions using the mouse
   */
  'toolbar.hoverBackground'?: string | 'default';
  /**
   * Toolbar outline when hovering over actions using the mouse
   */
  'toolbar.hoverOutline'?: string | 'default';
  /**
   * Toolbar background when holding the mouse over actions
   */
  'toolbar.activeBackground'?: string | 'default';
  /**
   * Color of focused breadcrumb items.
   */
  'breadcrumb.foreground'?: string | 'default';
  /**
   * Background color of breadcrumb items.
   */
  'breadcrumb.background'?: string | 'default';
  /**
   * Color of focused breadcrumb items.
   */
  'breadcrumb.focusForeground'?: string | 'default';
  /**
   * Color of selected breadcrumb items.
   */
  'breadcrumb.activeSelectionForeground'?: string | 'default';
  /**
   * Background color of breadcrumb item picker.
   */
  'breadcrumbPicker.background'?: string | 'default';
  /**
   * Current header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  'merge.currentHeaderBackground'?: string | 'default';
  /**
   * Current content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  'merge.currentContentBackground'?: string | 'default';
  /**
   * Incoming header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  'merge.incomingHeaderBackground'?: string | 'default';
  /**
   * Incoming content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  'merge.incomingContentBackground'?: string | 'default';
  /**
   * Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  'merge.commonHeaderBackground'?: string | 'default';
  /**
   * Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
   */
  'merge.commonContentBackground'?: string | 'default';
  /**
   * Border color on headers and the splitter in inline merge-conflicts.
   */
  'merge.border'?: string | 'default';
  /**
   * Current overview ruler foreground for inline merge-conflicts.
   */
  'editorOverviewRuler.currentContentForeground'?: string | 'default';
  /**
   * Incoming overview ruler foreground for inline merge-conflicts.
   */
  'editorOverviewRuler.incomingContentForeground'?: string | 'default';
  /**
   * Common ancestor overview ruler foreground for inline merge-conflicts.
   */
  'editorOverviewRuler.commonContentForeground'?: string | 'default';
  /**
   * Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorOverviewRuler.findMatchForeground'?: string | 'default';
  /**
   * Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorOverviewRuler.selectionHighlightForeground'?: string | 'default';
  /**
   * The color used for the problems error icon.
   */
  'problemsErrorIcon.foreground'?: string | 'default';
  /**
   * The color used for the problems warning icon.
   */
  'problemsWarningIcon.foreground'?: string | 'default';
  /**
   * The color used for the problems info icon.
   */
  'problemsInfoIcon.foreground'?: string | 'default';
  /**
   * Minimap marker color for find matches.
   */
  'minimap.findMatchHighlight'?: string | 'default';
  /**
   * Minimap marker color for repeating editor selections.
   */
  'minimap.selectionOccurrenceHighlight'?: string | 'default';
  /**
   * Minimap marker color for the editor selection.
   */
  'minimap.selectionHighlight'?: string | 'default';
  /**
   * Minimap marker color for infos.
   */
  'minimap.infoHighlight'?: string | 'default';
  /**
   * Minimap marker color for warnings.
   */
  'minimap.warningHighlight'?: string | 'default';
  /**
   * Minimap marker color for errors.
   */
  'minimap.errorHighlight'?: string | 'default';
  /**
   * Minimap background color.
   */
  'minimap.background'?: string | 'default';
  /**
   * Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity.
   */
  'minimap.foregroundOpacity'?: string | 'default';
  /**
   * Minimap slider background color.
   */
  'minimapSlider.background'?: string | 'default';
  /**
   * Minimap slider background color when hovering.
   */
  'minimapSlider.hoverBackground'?: string | 'default';
  /**
   * Minimap slider background color when clicked on.
   */
  'minimapSlider.activeBackground'?: string | 'default';
  /**
   * The foreground color used in charts.
   */
  'charts.foreground'?: string | 'default';
  /**
   * The color used for horizontal lines in charts.
   */
  'charts.lines'?: string | 'default';
  /**
   * The red color used in chart visualizations.
   */
  'charts.red'?: string | 'default';
  /**
   * The blue color used in chart visualizations.
   */
  'charts.blue'?: string | 'default';
  /**
   * The yellow color used in chart visualizations.
   */
  'charts.yellow'?: string | 'default';
  /**
   * The orange color used in chart visualizations.
   */
  'charts.orange'?: string | 'default';
  /**
   * The green color used in chart visualizations.
   */
  'charts.green'?: string | 'default';
  /**
   * The purple color used in chart visualizations.
   */
  'charts.purple'?: string | 'default';
  /**
   * List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.focusBackground'?: string | 'default';
  /**
   * List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.focusForeground'?: string | 'default';
  /**
   * List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.focusOutline'?: string | 'default';
  /**
   * List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.focusAndSelectionOutline'?: string | 'default';
  /**
   * List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.activeSelectionBackground'?: string | 'default';
  /**
   * List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.activeSelectionForeground'?: string | 'default';
  /**
   * List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.activeSelectionIconForeground'?: string | 'default';
  /**
   * List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.inactiveSelectionBackground'?: string | 'default';
  /**
   * List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.inactiveSelectionForeground'?: string | 'default';
  /**
   * List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.inactiveSelectionIconForeground'?: string | 'default';
  /**
   * List/Tree background color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.inactiveFocusBackground'?: string | 'default';
  /**
   * List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
   */
  'list.inactiveFocusOutline'?: string | 'default';
  /**
   * List/Tree background when hovering over items using the mouse.
   */
  'list.hoverBackground'?: string | 'default';
  /**
   * List/Tree foreground when hovering over items using the mouse.
   */
  'list.hoverForeground'?: string | 'default';
  /**
   * List/Tree drag and drop background when moving items over other items when using the mouse.
   */
  'list.dropBackground'?: string | 'default';
  /**
   * List/Tree drag and drop border color when moving items between items when using the mouse.
   */
  'list.dropBetweenBackground'?: string | 'default';
  /**
   * List/Tree foreground color of the match highlights when searching inside the list/tree.
   */
  'list.highlightForeground'?: string | 'default';
  /**
   * List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
   */
  'list.focusHighlightForeground'?: string | 'default';
  /**
   * List/Tree foreground color for invalid items, for example an unresolved root in explorer.
   */
  'list.invalidItemForeground'?: string | 'default';
  /**
   * Foreground color of list items containing errors.
   */
  'list.errorForeground'?: string | 'default';
  /**
   * Foreground color of list items containing warnings.
   */
  'list.warningForeground'?: string | 'default';
  /**
   * Background color of the type filter widget in lists and trees.
   */
  'listFilterWidget.background'?: string | 'default';
  /**
   * Outline color of the type filter widget in lists and trees.
   */
  'listFilterWidget.outline'?: string | 'default';
  /**
   * Outline color of the type filter widget in lists and trees, when there are no matches.
   */
  'listFilterWidget.noMatchesOutline'?: string | 'default';
  /**
   * Shadow color of the type filter widget in lists and trees.
   */
  'listFilterWidget.shadow'?: string | 'default';
  /**
   * Background color of the filtered match.
   */
  'list.filterMatchBackground'?: string | 'default';
  /**
   * Border color of the filtered match.
   */
  'list.filterMatchBorder'?: string | 'default';
  /**
   * List/Tree foreground color for items that are deemphasized.
   */
  'list.deemphasizedForeground'?: string | 'default';
  /**
   * Tree stroke color for the indentation guides.
   */
  'tree.indentGuidesStroke'?: string | 'default';
  /**
   * Tree stroke color for the indentation guides that are not active.
   */
  'tree.inactiveIndentGuidesStroke'?: string | 'default';
  /**
   * Table border color between columns.
   */
  'tree.tableColumnsBorder'?: string | 'default';
  /**
   * Background color for odd table rows.
   */
  'tree.tableOddRowsBackground'?: string | 'default';
  /**
   * Action List background color.
   */
  'editorActionList.background'?: string | 'default';
  /**
   * Action List foreground color.
   */
  'editorActionList.foreground'?: string | 'default';
  /**
   * Action List foreground color for the focused item.
   */
  'editorActionList.focusForeground'?: string | 'default';
  /**
   * Action List background color for the focused item.
   */
  'editorActionList.focusBackground'?: string | 'default';
  /**
   * Input box background.
   */
  'input.background'?: string | 'default';
  /**
   * Input box foreground.
   */
  'input.foreground'?: string | 'default';
  /**
   * Input box border.
   */
  'input.border'?: string | 'default';
  /**
   * Border color of activated options in input fields.
   */
  'inputOption.activeBorder'?: string | 'default';
  /**
   * Background color of activated options in input fields.
   */
  'inputOption.hoverBackground'?: string | 'default';
  /**
   * Background hover color of options in input fields.
   */
  'inputOption.activeBackground'?: string | 'default';
  /**
   * Foreground color of activated options in input fields.
   */
  'inputOption.activeForeground'?: string | 'default';
  /**
   * Input box foreground color for placeholder text.
   */
  'input.placeholderForeground'?: string | 'default';
  /**
   * Input validation background color for information severity.
   */
  'inputValidation.infoBackground'?: string | 'default';
  /**
   * Input validation foreground color for information severity.
   */
  'inputValidation.infoForeground'?: string | 'default';
  /**
   * Input validation border color for information severity.
   */
  'inputValidation.infoBorder'?: string | 'default';
  /**
   * Input validation background color for warning severity.
   */
  'inputValidation.warningBackground'?: string | 'default';
  /**
   * Input validation foreground color for warning severity.
   */
  'inputValidation.warningForeground'?: string | 'default';
  /**
   * Input validation border color for warning severity.
   */
  'inputValidation.warningBorder'?: string | 'default';
  /**
   * Input validation background color for error severity.
   */
  'inputValidation.errorBackground'?: string | 'default';
  /**
   * Input validation foreground color for error severity.
   */
  'inputValidation.errorForeground'?: string | 'default';
  /**
   * Input validation border color for error severity.
   */
  'inputValidation.errorBorder'?: string | 'default';
  /**
   * Dropdown background.
   */
  'dropdown.background'?: string | 'default';
  /**
   * Dropdown list background.
   */
  'dropdown.listBackground'?: string | 'default';
  /**
   * Dropdown foreground.
   */
  'dropdown.foreground'?: string | 'default';
  /**
   * Dropdown border.
   */
  'dropdown.border'?: string | 'default';
  /**
   * Button foreground color.
   */
  'button.foreground'?: string | 'default';
  /**
   * Button separator color.
   */
  'button.separator'?: string | 'default';
  /**
   * Button background color.
   */
  'button.background'?: string | 'default';
  /**
   * Button background color when hovering.
   */
  'button.hoverBackground'?: string | 'default';
  /**
   * Button border color.
   */
  'button.border'?: string | 'default';
  /**
   * Secondary button foreground color.
   */
  'button.secondaryForeground'?: string | 'default';
  /**
   * Secondary button background color.
   */
  'button.secondaryBackground'?: string | 'default';
  /**
   * Secondary button border color.
   */
  'button.secondaryBorder'?: string | 'default';
  /**
   * Secondary button background color when hovering.
   */
  'button.secondaryHoverBackground'?: string | 'default';
  /**
   * Foreground color of active radio option.
   */
  'radio.activeForeground'?: string | 'default';
  /**
   * Background color of active radio option.
   */
  'radio.activeBackground'?: string | 'default';
  /**
   * Border color of the active radio option.
   */
  'radio.activeBorder'?: string | 'default';
  /**
   * Foreground color of inactive radio option.
   */
  'radio.inactiveForeground'?: string | 'default';
  /**
   * Background color of inactive radio option.
   */
  'radio.inactiveBackground'?: string | 'default';
  /**
   * Border color of the inactive radio option.
   */
  'radio.inactiveBorder'?: string | 'default';
  /**
   * Background color of inactive active radio option when hovering.
   */
  'radio.inactiveHoverBackground'?: string | 'default';
  /**
   * Background color of checkbox widget.
   */
  'checkbox.background'?: string | 'default';
  /**
   * Background color of checkbox widget when the element it's in is selected.
   */
  'checkbox.selectBackground'?: string | 'default';
  /**
   * Foreground color of checkbox widget.
   */
  'checkbox.foreground'?: string | 'default';
  /**
   * Border color of checkbox widget.
   */
  'checkbox.border'?: string | 'default';
  /**
   * Border color of checkbox widget when the element it's in is selected.
   */
  'checkbox.selectBorder'?: string | 'default';
  /**
   * Background of a disabled checkbox.
   */
  'checkbox.disabled.background'?: string | 'default';
  /**
   * Foreground of a disabled checkbox.
   */
  'checkbox.disabled.foreground'?: string | 'default';
  /**
   * Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.background'?: string | 'default';
  /**
   * Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.foreground'?: string | 'default';
  /**
   * Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.border'?: string | 'default';
  /**
   * Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.
   */
  'keybindingLabel.bottomBorder'?: string | 'default';
  /**
   * Border color of menus.
   */
  'menu.border'?: string | 'default';
  /**
   * Foreground color of menu items.
   */
  'menu.foreground'?: string | 'default';
  /**
   * Background color of menu items.
   */
  'menu.background'?: string | 'default';
  /**
   * Foreground color of the selected menu item in menus.
   */
  'menu.selectionForeground'?: string | 'default';
  /**
   * Background color of the selected menu item in menus.
   */
  'menu.selectionBackground'?: string | 'default';
  /**
   * Border color of the selected menu item in menus.
   */
  'menu.selectionBorder'?: string | 'default';
  /**
   * Color of a separator menu item in menus.
   */
  'menu.separatorBackground'?: string | 'default';
  /**
   * Quick picker background color. The quick picker widget is the container for pickers like the command palette.
   */
  'quickInput.background'?: string | 'default';
  /**
   * Quick picker foreground color. The quick picker widget is the container for pickers like the command palette.
   */
  'quickInput.foreground'?: string | 'default';
  /**
   * Quick picker title background color. The quick picker widget is the container for pickers like the command palette.
   */
  'quickInputTitle.background'?: string | 'default';
  /**
   * Quick picker color for grouping labels.
   */
  'pickerGroup.foreground'?: string | 'default';
  /**
   * Quick picker color for grouping borders.
   */
  'pickerGroup.border'?: string | 'default';
  'quickInput.list.focusBackground'?: string | 'default';
  /**
   * Quick picker foreground color for the focused item.
   */
  'quickInputList.focusForeground'?: string | 'default';
  /**
   * Quick picker icon foreground color for the focused item.
   */
  'quickInputList.focusIconForeground'?: string | 'default';
  /**
   * Quick picker background color for the focused item.
   */
  'quickInputList.focusBackground'?: string | 'default';
  /**
   * Quick picker foreground color of the match highlights on the focused item.
   */
  'quickInputList.focusHighlightForeground'?: string | 'default';
  /**
   * Color of the text in the search viewlet's completion message.
   */
  'search.resultsInfoForeground'?: string | 'default';
  /**
   * Color of the Search Editor query matches.
   */
  'searchEditor.findMatchBackground'?: string | 'default';
  /**
   * Border color of the Search Editor query matches.
   */
  'searchEditor.findMatchBorder'?: string | 'default';
  /**
   * Background color for the highlight of line at the cursor position.
   */
  'editor.lineHighlightBackground'?: string | 'default';
  /**
   * Background color for the highlight of line at the cursor position when the editor is not focused.
   */
  'editor.inactiveLineHighlightBackground'?: string | 'default';
  /**
   * Background color for the border around the line at the cursor position.
   */
  'editor.lineHighlightBorder'?: string | 'default';
  /**
   * Background color of highlighted ranges, like by quick open and find features. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.rangeHighlightBackground'?: string | 'default';
  /**
   * Background color of the border around highlighted ranges.
   */
  'editor.rangeHighlightBorder'?: string | 'default';
  /**
   * Background color of highlighted symbol, like for go to definition or go next/previous symbol. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.symbolHighlightBackground'?: string | 'default';
  /**
   * Background color of the border around highlighted symbols.
   */
  'editor.symbolHighlightBorder'?: string | 'default';
  /**
   * Color of the editor cursor.
   */
  'editorCursor.foreground'?: string | 'default';
  /**
   * The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
   */
  'editorCursor.background'?: string | 'default';
  /**
   * Color of the primary editor cursor when multiple cursors are present.
   */
  'editorMultiCursor.primary.foreground'?: string | 'default';
  /**
   * The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.
   */
  'editorMultiCursor.primary.background'?: string | 'default';
  /**
   * Color of secondary editor cursors when multiple cursors are present.
   */
  'editorMultiCursor.secondary.foreground'?: string | 'default';
  /**
   * The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.
   */
  'editorMultiCursor.secondary.background'?: string | 'default';
  /**
   * Color of whitespace characters in the editor.
   */
  'editorWhitespace.foreground'?: string | 'default';
  /**
   * Color of the indicator shown at the end of a soft wrapped line in the editor.
   */
  'editorWordWrapIndicator.foreground'?: string | 'default';
  /**
   * Color of editor line numbers.
   */
  'editorLineNumber.foreground'?: string | 'default';
  /**
   * Color of the editor indentation guides.
   */
  'editorIndentGuide.background'?: string | 'default';
  /**
   * Color of the active editor indentation guides.
   */
  'editorIndentGuide.activeBackground'?: string | 'default';
  /**
   * Color of the editor indentation guides (1).
   */
  'editorIndentGuide.background1'?: string | 'default';
  /**
   * Color of the editor indentation guides (2).
   */
  'editorIndentGuide.background2'?: string | 'default';
  /**
   * Color of the editor indentation guides (3).
   */
  'editorIndentGuide.background3'?: string | 'default';
  /**
   * Color of the editor indentation guides (4).
   */
  'editorIndentGuide.background4'?: string | 'default';
  /**
   * Color of the editor indentation guides (5).
   */
  'editorIndentGuide.background5'?: string | 'default';
  /**
   * Color of the editor indentation guides (6).
   */
  'editorIndentGuide.background6'?: string | 'default';
  /**
   * Color of the active editor indentation guides (1).
   */
  'editorIndentGuide.activeBackground1'?: string | 'default';
  /**
   * Color of the active editor indentation guides (2).
   */
  'editorIndentGuide.activeBackground2'?: string | 'default';
  /**
   * Color of the active editor indentation guides (3).
   */
  'editorIndentGuide.activeBackground3'?: string | 'default';
  /**
   * Color of the active editor indentation guides (4).
   */
  'editorIndentGuide.activeBackground4'?: string | 'default';
  /**
   * Color of the active editor indentation guides (5).
   */
  'editorIndentGuide.activeBackground5'?: string | 'default';
  /**
   * Color of the active editor indentation guides (6).
   */
  'editorIndentGuide.activeBackground6'?: string | 'default';
  /**
   * Color of editor active line number
   */
  'editorActiveLineNumber.foreground'?: string | 'default';
  /**
   * Color of editor active line number
   */
  'editorLineNumber.activeForeground'?: string | 'default';
  /**
   * Color of the final editor line when editor.renderFinalNewline is set to dimmed.
   */
  'editorLineNumber.dimmedForeground'?: string | 'default';
  /**
   * Color of the editor rulers.
   */
  'editorRuler.foreground'?: string | 'default';
  /**
   * Foreground color of editor CodeLens
   */
  'editorCodeLens.foreground'?: string | 'default';
  /**
   * Background color behind matching brackets
   */
  'editorBracketMatch.background'?: string | 'default';
  /**
   * Color for matching brackets boxes
   */
  'editorBracketMatch.border'?: string | 'default';
  /**
   * Foreground color for matching brackets
   */
  'editorBracketMatch.foreground'?: string | 'default';
  /**
   * Color of the overview ruler border.
   */
  'editorOverviewRuler.border'?: string | 'default';
  /**
   * Background color of the editor overview ruler.
   */
  'editorOverviewRuler.background'?: string | 'default';
  /**
   * Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
   */
  'editorGutter.background'?: string | 'default';
  /**
   * Border color of unnecessary (unused) source code in the editor.
   */
  'editorUnnecessaryCode.border'?: string | 'default';
  /**
   * Opacity of unnecessary (unused) source code in the editor. For example, "#000000c0" will render the code with 75% opacity. For high contrast themes, use the  'editorUnnecessaryCode.border' theme color to underline unnecessary code instead of fading it out.
   */
  'editorUnnecessaryCode.opacity'?: string | 'default';
  /**
   * Border color of ghost text in the editor.
   */
  'editorGhostText.border'?: string | 'default';
  /**
   * Foreground color of the ghost text in the editor.
   */
  'editorGhostText.foreground'?: string | 'default';
  /**
   * Background color of the ghost text in the editor.
   */
  'editorGhostText.background'?: string | 'default';
  /**
   * Overview ruler marker color for range highlights. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorOverviewRuler.rangeHighlightForeground'?: string | 'default';
  /**
   * Overview ruler marker color for errors.
   */
  'editorOverviewRuler.errorForeground'?: string | 'default';
  /**
   * Overview ruler marker color for warnings.
   */
  'editorOverviewRuler.warningForeground'?: string | 'default';
  /**
   * Overview ruler marker color for infos.
   */
  'editorOverviewRuler.infoForeground'?: string | 'default';
  /**
   * Foreground color of brackets (1). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground1'?: string | 'default';
  /**
   * Foreground color of brackets (2). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground2'?: string | 'default';
  /**
   * Foreground color of brackets (3). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground3'?: string | 'default';
  /**
   * Foreground color of brackets (4). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground4'?: string | 'default';
  /**
   * Foreground color of brackets (5). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground5'?: string | 'default';
  /**
   * Foreground color of brackets (6). Requires enabling bracket pair colorization.
   */
  'editorBracketHighlight.foreground6'?: string | 'default';
  /**
   * Foreground color of unexpected brackets.
   */
  'editorBracketHighlight.unexpectedBracket.foreground'?: string | 'default';
  /**
   * Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.background1'?: string | 'default';
  /**
   * Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.background2'?: string | 'default';
  /**
   * Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.background3'?: string | 'default';
  /**
   * Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.background4'?: string | 'default';
  /**
   * Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.background5'?: string | 'default';
  /**
   * Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.background6'?: string | 'default';
  /**
   * Background color of active bracket pair guides (1). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.activeBackground1'?: string | 'default';
  /**
   * Background color of active bracket pair guides (2). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.activeBackground2'?: string | 'default';
  /**
   * Background color of active bracket pair guides (3). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.activeBackground3'?: string | 'default';
  /**
   * Background color of active bracket pair guides (4). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.activeBackground4'?: string | 'default';
  /**
   * Background color of active bracket pair guides (5). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.activeBackground5'?: string | 'default';
  /**
   * Background color of active bracket pair guides (6). Requires enabling bracket pair guides.
   */
  'editorBracketPairGuide.activeBackground6'?: string | 'default';
  /**
   * Border color used to highlight unicode characters.
   */
  'editorUnicodeHighlight.border'?: string | 'default';
  /**
   * Background color used to highlight unicode characters.
   */
  'editorUnicodeHighlight.background'?: string | 'default';
  /**
   * The border color for text that got moved in the diff editor.
   */
  'diffEditor.move.border'?: string | 'default';
  /**
   * The active border color for text that got moved in the diff editor.
   */
  'diffEditor.moveActive.border'?: string | 'default';
  /**
   * The color of the shadow around unchanged region widgets.
   */
  'diffEditor.unchangedRegionShadow'?: string | 'default';
  /**
   * Overview ruler marker color for matching brackets.
   */
  'editorOverviewRuler.bracketMatchForeground'?: string | 'default';
  /**
   * Background color for toggled action items in action bar.
   */
  'actionBar.toggledBackground'?: string | 'default';
  /**
   * The foreground color for array symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.arrayForeground'?: string | 'default';
  /**
   * The foreground color for boolean symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.booleanForeground'?: string | 'default';
  /**
   * The foreground color for class symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.classForeground'?: string | 'default';
  /**
   * The foreground color for color symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.colorForeground'?: string | 'default';
  /**
   * The foreground color for constant symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.constantForeground'?: string | 'default';
  /**
   * The foreground color for constructor symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.constructorForeground'?: string | 'default';
  /**
   * The foreground color for enumerator symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.enumeratorForeground'?: string | 'default';
  /**
   * The foreground color for enumerator member symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.enumeratorMemberForeground'?: string | 'default';
  /**
   * The foreground color for event symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.eventForeground'?: string | 'default';
  /**
   * The foreground color for field symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.fieldForeground'?: string | 'default';
  /**
   * The foreground color for file symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.fileForeground'?: string | 'default';
  /**
   * The foreground color for folder symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.folderForeground'?: string | 'default';
  /**
   * The foreground color for function symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.functionForeground'?: string | 'default';
  /**
   * The foreground color for interface symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.interfaceForeground'?: string | 'default';
  /**
   * The foreground color for key symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.keyForeground'?: string | 'default';
  /**
   * The foreground color for keyword symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.keywordForeground'?: string | 'default';
  /**
   * The foreground color for method symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.methodForeground'?: string | 'default';
  /**
   * The foreground color for module symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.moduleForeground'?: string | 'default';
  /**
   * The foreground color for namespace symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.namespaceForeground'?: string | 'default';
  /**
   * The foreground color for null symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.nullForeground'?: string | 'default';
  /**
   * The foreground color for number symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.numberForeground'?: string | 'default';
  /**
   * The foreground color for object symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.objectForeground'?: string | 'default';
  /**
   * The foreground color for operator symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.operatorForeground'?: string | 'default';
  /**
   * The foreground color for package symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.packageForeground'?: string | 'default';
  /**
   * The foreground color for property symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.propertyForeground'?: string | 'default';
  /**
   * The foreground color for reference symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.referenceForeground'?: string | 'default';
  /**
   * The foreground color for snippet symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.snippetForeground'?: string | 'default';
  /**
   * The foreground color for string symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.stringForeground'?: string | 'default';
  /**
   * The foreground color for struct symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.structForeground'?: string | 'default';
  /**
   * The foreground color for text symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.textForeground'?: string | 'default';
  /**
   * The foreground color for type parameter symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.typeParameterForeground'?: string | 'default';
  /**
   * The foreground color for unit symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.unitForeground'?: string | 'default';
  /**
   * The foreground color for variable symbols. These symbols appear in the outline, breadcrumb, and suggest widget.
   */
  'symbolIcon.variableForeground'?: string | 'default';
  /**
   * Background color of the peek view title area.
   */
  'peekViewTitle.background'?: string | 'default';
  /**
   * Color of the peek view title.
   */
  'peekViewTitleLabel.foreground'?: string | 'default';
  /**
   * Color of the peek view title info.
   */
  'peekViewTitleDescription.foreground'?: string | 'default';
  /**
   * Color of the peek view borders and arrow.
   */
  'peekView.border'?: string | 'default';
  /**
   * Background color of the peek view result list.
   */
  'peekViewResult.background'?: string | 'default';
  /**
   * Foreground color for line nodes in the peek view result list.
   */
  'peekViewResult.lineForeground'?: string | 'default';
  /**
   * Foreground color for file nodes in the peek view result list.
   */
  'peekViewResult.fileForeground'?: string | 'default';
  /**
   * Background color of the selected entry in the peek view result list.
   */
  'peekViewResult.selectionBackground'?: string | 'default';
  /**
   * Foreground color of the selected entry in the peek view result list.
   */
  'peekViewResult.selectionForeground'?: string | 'default';
  /**
   * Background color of the peek view editor.
   */
  'peekViewEditor.background'?: string | 'default';
  /**
   * Background color of the gutter in the peek view editor.
   */
  'peekViewEditorGutter.background'?: string | 'default';
  /**
   * Background color of sticky scroll in the peek view editor.
   */
  'peekViewEditorStickyScroll.background'?: string | 'default';
  /**
   * Background color of the gutter part of sticky scroll in the peek view editor.
   */
  'peekViewEditorStickyScrollGutter.background'?: string | 'default';
  /**
   * Match highlight color in the peek view result list.
   */
  'peekViewResult.matchHighlightBackground'?: string | 'default';
  /**
   * Match highlight color in the peek view editor.
   */
  'peekViewEditor.matchHighlightBackground'?: string | 'default';
  /**
   * Match highlight border in the peek view editor.
   */
  'peekViewEditor.matchHighlightBorder'?: string | 'default';
  /**
   * Background color behind folded ranges. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.foldBackground'?: string | 'default';
  /**
   * Color of the collapsed text after the first line of a folded range.
   */
  'editor.foldPlaceholderForeground'?: string | 'default';
  /**
   * Color of the folding control in the editor gutter.
   */
  'editorGutter.foldingControlForeground'?: string | 'default';
  /**
   * Editor marker navigation widget error color.
   */
  'editorMarkerNavigationError.background'?: string | 'default';
  /**
   * Editor marker navigation widget error heading background.
   */
  'editorMarkerNavigationError.headerBackground'?: string | 'default';
  /**
   * Editor marker navigation widget warning color.
   */
  'editorMarkerNavigationWarning.background'?: string | 'default';
  /**
   * Editor marker navigation widget warning heading background.
   */
  'editorMarkerNavigationWarning.headerBackground'?: string | 'default';
  /**
   * Editor marker navigation widget info color.
   */
  'editorMarkerNavigationInfo.background'?: string | 'default';
  /**
   * Editor marker navigation widget info heading background.
   */
  'editorMarkerNavigationInfo.headerBackground'?: string | 'default';
  /**
   * Editor marker navigation widget background.
   */
  'editorMarkerNavigation.background'?: string | 'default';
  /**
   * Background color of the suggest widget.
   */
  'editorSuggestWidget.background'?: string | 'default';
  /**
   * Border color of the suggest widget.
   */
  'editorSuggestWidget.border'?: string | 'default';
  /**
   * Foreground color of the suggest widget.
   */
  'editorSuggestWidget.foreground'?: string | 'default';
  /**
   * Foreground color of the selected entry in the suggest widget.
   */
  'editorSuggestWidget.selectedForeground'?: string | 'default';
  /**
   * Icon foreground color of the selected entry in the suggest widget.
   */
  'editorSuggestWidget.selectedIconForeground'?: string | 'default';
  /**
   * Background color of the selected entry in the suggest widget.
   */
  'editorSuggestWidget.selectedBackground'?: string | 'default';
  /**
   * Outline color of the focused (keyboard-navigated) entry in the suggest widget.
   */
  'editorSuggestWidget.focusOutline'?: string | 'default';
  /**
   * Color of the match highlights in the suggest widget.
   */
  'editorSuggestWidget.highlightForeground'?: string | 'default';
  /**
   * Color of the match highlights in the suggest widget when an item is focused.
   */
  'editorSuggestWidget.focusHighlightForeground'?: string | 'default';
  /**
   * Foreground color of the suggest widget status.
   */
  'editorSuggestWidgetStatus.foreground'?: string | 'default';
  /**
   * Background color for the original text in inline edits.
   */
  'inlineEdit.originalBackground'?: string | 'default';
  /**
   * Background color for the modified text in inline edits.
   */
  'inlineEdit.modifiedBackground'?: string | 'default';
  /**
   * Background color for the changed lines in the original text of inline edits.
   */
  'inlineEdit.originalChangedLineBackground'?: string | 'default';
  /**
   * Overlay color for the changed text in the original text of inline edits.
   */
  'inlineEdit.originalChangedTextBackground'?: string | 'default';
  /**
   * Background color for the changed lines in the modified text of inline edits.
   */
  'inlineEdit.modifiedChangedLineBackground'?: string | 'default';
  /**
   * Overlay color for the changed text in the modified text of inline edits.
   */
  'inlineEdit.modifiedChangedTextBackground'?: string | 'default';
  /**
   * Foreground color for the primary inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.primaryForeground'?: string | 'default';
  /**
   * Border color for the primary inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.primaryBorder'?: string | 'default';
  /**
   * Background color for the primary inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.primaryBackground'?: string | 'default';
  /**
   * Foreground color for the secondary inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.secondaryForeground'?: string | 'default';
  /**
   * Border color for the secondary inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.secondaryBorder'?: string | 'default';
  /**
   * Background color for the secondary inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.secondaryBackground'?: string | 'default';
  /**
   * Foreground color for the successful inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.successfulForeground'?: string | 'default';
  /**
   * Border color for the successful inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.successfulBorder'?: string | 'default';
  /**
   * Background color for the successful inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.successfulBackground'?: string | 'default';
  /**
   * Background color for the inline edit gutter indicator.
   */
  'inlineEdit.gutterIndicator.background'?: string | 'default';
  /**
   * Border color for the original text in inline edits.
   */
  'inlineEdit.originalBorder'?: string | 'default';
  /**
   * Border color for the modified text in inline edits.
   */
  'inlineEdit.modifiedBorder'?: string | 'default';
  /**
   * Modified border color for the inline edits widget when tab will accept it.
   */
  'inlineEdit.tabWillAcceptModifiedBorder'?: string | 'default';
  /**
   * Original border color for the inline edits widget over the original text when tab will accept it.
   */
  'inlineEdit.tabWillAcceptOriginalBorder'?: string | 'default';
  /**
   * Background color when the editor auto renames on type.
   */
  'editor.linkedEditingBackground'?: string | 'default';
  /**
   * Background color of a symbol during read-access, like reading a variable. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.wordHighlightBackground'?: string | 'default';
  /**
   * Background color of a symbol during write-access, like writing to a variable. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.wordHighlightStrongBackground'?: string | 'default';
  /**
   * Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
   */
  'editor.wordHighlightTextBackground'?: string | 'default';
  /**
   * Border color of a symbol during read-access, like reading a variable.
   */
  'editor.wordHighlightBorder'?: string | 'default';
  /**
   * Border color of a symbol during write-access, like writing to a variable.
   */
  'editor.wordHighlightStrongBorder'?: string | 'default';
  /**
   * Border color of a textual occurrence for a symbol.
   */
  'editor.wordHighlightTextBorder'?: string | 'default';
  /**
   * Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorOverviewRuler.wordHighlightForeground'?: string | 'default';
  /**
   * Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorOverviewRuler.wordHighlightStrongForeground'?: string | 'default';
  /**
   * Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
   */
  'editorOverviewRuler.wordHighlightTextForeground'?: string | 'default';
  /**
   * Foreground color of the active item in the parameter hint.
   */
  'editorHoverWidget.highlightForeground'?: string | 'default';
  /**
   * Foreground color of the placeholder text in the editor.
   */
  'editor.placeholder.foreground'?: string | 'default';
  /**
   * Active tab background color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.activeBackground'?: string | 'default';
  /**
   * Active tab background color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.unfocusedActiveBackground'?: string | 'default';
  /**
   * Inactive tab background color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.inactiveBackground'?: string | 'default';
  /**
   * Inactive tab background color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.unfocusedInactiveBackground'?: string | 'default';
  /**
   * Active tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.activeForeground'?: string | 'default';
  /**
   * Inactive tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.inactiveForeground'?: string | 'default';
  /**
   * Active tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.unfocusedActiveForeground'?: string | 'default';
  /**
   * Inactive tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.unfocusedInactiveForeground'?: string | 'default';
  /**
   * Tab background color when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.hoverBackground'?: string | 'default';
  /**
   * Tab background color in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.unfocusedHoverBackground'?: string | 'default';
  /**
   * Tab foreground color when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.hoverForeground'?: string | 'default';
  /**
   * Tab foreground color in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.unfocusedHoverForeground'?: string | 'default';
  /**
   * Border around tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.border'?: string | 'default';
  /**
   * Color of dividers between editor tabs.
   */
  'tab.divider'?: string | 'default';
  /**
   * Border to separate pinned tabs from other tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.lastPinnedBorder'?: string | 'default';
  /**
   * Border on the bottom of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.activeBorder'?: string | 'default';
  /**
   * Border on the bottom of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.unfocusedActiveBorder'?: string | 'default';
  /**
   * Border to the top of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.activeBorderTop'?: string | 'default';
  /**
   * Border to the top of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.unfocusedActiveBorderTop'?: string | 'default';
  /**
   * Border to the top of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.selectedBorderTop'?: string | 'default';
  /**
   * Background of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.selectedBackground'?: string | 'default';
  /**
   * Foreground of a selected tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.selectedForeground'?: string | 'default';
  /**
   * Border to highlight tabs when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.hoverBorder'?: string | 'default';
  /**
   * Border to highlight tabs in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.unfocusedHoverBorder'?: string | 'default';
  /**
   * Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.dragAndDropBorder'?: string | 'default';
  /**
   * Border on the top of modified active tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.activeModifiedBorder'?: string | 'default';
  /**
   * Border on the top of modified inactive tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.inactiveModifiedBorder'?: string | 'default';
  /**
   * Border on the top of modified active tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.unfocusedActiveModifiedBorder'?: string | 'default';
  /**
   * Border on the top of modified inactive tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
   */
  'tab.unfocusedInactiveModifiedBorder'?: string | 'default';
  /**
   * Background color of the editor pane visible on the left and right side of the centered editor layout.
   */
  'editorPane.background'?: string | 'default';
  /**
   * Background color of an empty editor group. Editor groups are the containers of editors.
   */
  'editorGroup.emptyBackground'?: string | 'default';
  /**
   * Border color of an empty editor group that is focused. Editor groups are the containers of editors.
   */
  'editorGroup.focusedEmptyBorder'?: string | 'default';
  /**
   * Background color of the editor group title header when tabs are enabled. Editor groups are the containers of editors.
   */
  'editorGroupHeader.tabsBackground'?: string | 'default';
  /**
   * Background color of connected tabs in editor group title headers. Editor groups are the containers of editors.
   */
  'editorGroupHeader.connectedTabsBackground'?: string | 'default';
  /**
   * Border color of the editor group title header when tabs are enabled. Editor groups are the containers of editors.
   */
  'editorGroupHeader.tabsBorder'?: string | 'default';
  /**
   * Background color of the editor group title header when (`"workbench.editor.showTabs": "single"`). Editor groups are the containers of editors.
   */
  'editorGroupHeader.noTabsBackground'?: string | 'default';
  /**
   * Border color of the editor group title header. Editor groups are the containers of editors.
   */
  'editorGroupHeader.border'?: string | 'default';
  /**
   * Color to separate multiple editor groups from each other. Editor groups are the containers of editors.
   */
  'editorGroup.border'?: string | 'default';
  /**
   * Background color when dragging editors around. The color should have transparency so that the editor contents can still shine through.
   */
  'editorGroup.dropBackground'?: string | 'default';
  /**
   * Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
   */
  'editorGroup.dropIntoPromptForeground'?: string | 'default';
  /**
   * Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
   */
  'editorGroup.dropIntoPromptBackground'?: string | 'default';
  /**
   * Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
   */
  'editorGroup.dropIntoPromptBorder'?: string | 'default';
  /**
   * Color to separate two editors from each other when shown side by side in an editor group from top to bottom.
   */
  'sideBySideEditor.horizontalBorder'?: string | 'default';
  /**
   * Color to separate two editors from each other when shown side by side in an editor group from left to right.
   */
  'sideBySideEditor.verticalBorder'?: string | 'default';
  /**
   * Output view background color.
   */
  'outputView.background'?: string | 'default';
  /**
   * Output view sticky scroll background color.
   */
  'outputViewStickyScroll.background'?: string | 'default';
  /**
   * Banner background color. The banner is shown under the title bar of the window.
   */
  'banner.background'?: string | 'default';
  /**
   * Banner foreground color. The banner is shown under the title bar of the window.
   */
  'banner.foreground'?: string | 'default';
  /**
   * Banner icon color. The banner is shown under the title bar of the window.
   */
  'banner.iconForeground'?: string | 'default';
  /**
   * Status bar foreground color when a workspace or folder is opened. The status bar is shown in the bottom of the window.
   */
  'statusBar.foreground'?: string | 'default';
  /**
   * Status bar foreground color when no folder is opened. The status bar is shown in the bottom of the window.
   */
  'statusBar.noFolderForeground'?: string | 'default';
  /**
   * Status bar background color when a workspace or folder is opened. The status bar is shown in the bottom of the window.
   */
  'statusBar.background'?: string | 'default';
  /**
   * Status bar background color when a workspace or folder is opened and the window is inactive. Debugging and other background overrides take precedence. If not set, the current status bar background is used.
   */
  'statusBar.inactiveBackground'?: string | 'default';
  /**
   * Status bar background color when no folder is opened. The status bar is shown in the bottom of the window.
   */
  'statusBar.noFolderBackground'?: string | 'default';
  /**
   * Status bar border color separating to the sidebar and editor. The status bar is shown in the bottom of the window.
   */
  'statusBar.border'?: string | 'default';
  /**
   * Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
   */
  'statusBar.focusBorder'?: string | 'default';
  /**
   * Status bar border color separating to the sidebar and editor when no folder is opened. The status bar is shown in the bottom of the window.
   */
  'statusBar.noFolderBorder'?: string | 'default';
  /**
   * Status bar item background color when clicking. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.activeBackground'?: string | 'default';
  /**
   * Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.focusBorder'?: string | 'default';
  /**
   * Status bar item background color when hovering. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.hoverBackground'?: string | 'default';
  /**
   * Status bar item foreground color when hovering. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.hoverForeground'?: string | 'default';
  /**
   * Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.compactHoverBackground'?: string | 'default';
  /**
   * Status bar prominent items foreground color. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.prominentForeground'?: string | 'default';
  /**
   * Status bar prominent items background color. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.prominentBackground'?: string | 'default';
  /**
   * Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.prominentHoverForeground'?: string | 'default';
  /**
   * Status bar prominent items background color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.prominentHoverBackground'?: string | 'default';
  /**
   * Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.errorBackground'?: string | 'default';
  /**
   * Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.errorForeground'?: string | 'default';
  /**
   * Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.errorHoverForeground'?: string | 'default';
  /**
   * Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.errorHoverBackground'?: string | 'default';
  /**
   * Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.warningBackground'?: string | 'default';
  /**
   * Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.warningForeground'?: string | 'default';
  /**
   * Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.warningHoverForeground'?: string | 'default';
  /**
   * Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
   */
  'statusBarItem.warningHoverBackground'?: string | 'default';
  /**
   * Activity bar background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  'activityBar.background'?: string | 'default';
  /**
   * Activity bar item foreground color when it is active. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  'activityBar.foreground'?: string | 'default';
  /**
   * Activity bar item foreground color when it is inactive. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  'activityBar.inactiveForeground'?: string | 'default';
  /**
   * Activity bar border color separating to the side bar. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  'activityBar.border'?: string | 'default';
  /**
   * Activity bar border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  'activityBar.activeBorder'?: string | 'default';
  /**
   * Activity bar focus border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  'activityBar.activeFocusBorder'?: string | 'default';
  /**
   * Activity bar background color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  'activityBar.activeBackground'?: string | 'default';
  /**
   * Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  'activityBar.dropBorder'?: string | 'default';
  /**
   * Activity notification badge background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  'activityBarBadge.background'?: string | 'default';
  /**
   * Activity notification badge foreground color. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
   */
  'activityBarBadge.foreground'?: string | 'default';
  /**
   * Active foreground color of the item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar.
   */
  'activityBarTop.foreground'?: string | 'default';
  /**
   * Focus border color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar.
   */
  'activityBarTop.activeBorder'?: string | 'default';
  /**
   * Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar.
   */
  'activityBarTop.activeBackground'?: string | 'default';
  /**
   * Inactive foreground color of the item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar.
   */
  'activityBarTop.inactiveForeground'?: string | 'default';
  /**
   * Drag and drop feedback color for the items in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar.
   */
  'activityBarTop.dropBorder'?: string | 'default';
  /**
   * Background color of the activity bar when set to top / bottom.
   */
  'activityBarTop.background'?: string | 'default';
  /**
   * Panel background color. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panel.background'?: string | 'default';
  /**
   * Panel border color to separate the panel from the editor. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panel.border'?: string | 'default';
  /**
   * Panel title border color on the bottom, separating the title from the views. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panelTitle.border'?: string | 'default';
  /**
   * Title color for the active panel. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panelTitle.activeForeground'?: string | 'default';
  /**
   * Title color for the inactive panel. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panelTitle.inactiveForeground'?: string | 'default';
  /**
   * Border color for the active panel title. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panelTitle.activeBorder'?: string | 'default';
  /**
   * Panel title badge background color. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panelTitleBadge.background'?: string | 'default';
  /**
   * Panel title badge foreground color. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panelTitleBadge.foreground'?: string | 'default';
  /**
   * Input box border for inputs in the panel.
   */
  'panelInput.border'?: string | 'default';
  /**
   * Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal.
   */
  'panel.dropBorder'?: string | 'default';
  /**
   * Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels.
   */
  'panelSection.dropBackground'?: string | 'default';
  /**
   * Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels.
   */
  'panelSectionHeader.background'?: string | 'default';
  /**
   * Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels.
   */
  'panelSectionHeader.foreground'?: string | 'default';
  /**
   * Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels.
   */
  'panelSectionHeader.border'?: string | 'default';
  /**
   * Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels.
   */
  'panelSection.border'?: string | 'default';
  /**
   * Background color of sticky scroll in the panel.
   */
  'panelStickyScroll.background'?: string | 'default';
  /**
   * Border color of sticky scroll in the panel.
   */
  'panelStickyScroll.border'?: string | 'default';
  /**
   * Shadow color of sticky scroll in the panel.
   */
  'panelStickyScroll.shadow'?: string | 'default';
  /**
   * Border color for integrated browser pages.
   */
  'browser.border'?: string | 'default';
  /**
   * Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar.
   */
  'profileBadge.background'?: string | 'default';
  /**
   * Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar.
   */
  'profileBadge.foreground'?: string | 'default';
  /**
   * Background color for the remote indicator on the status bar.
   */
  'statusBarItem.remoteBackground'?: string | 'default';
  /**
   * Foreground color for the remote indicator on the status bar.
   */
  'statusBarItem.remoteForeground'?: string | 'default';
  /**
   * Foreground color for the remote indicator on the status bar when hovering.
   */
  'statusBarItem.remoteHoverForeground'?: string | 'default';
  /**
   * Background color for the remote indicator on the status bar when hovering.
   */
  'statusBarItem.remoteHoverBackground'?: string | 'default';
  /**
   * Status bar item background color when the workbench is offline.
   */
  'statusBarItem.offlineBackground'?: string | 'default';
  /**
   * Status bar item foreground color when the workbench is offline.
   */
  'statusBarItem.offlineForeground'?: string | 'default';
  /**
   * Status bar item foreground hover color when the workbench is offline.
   */
  'statusBarItem.offlineHoverForeground'?: string | 'default';
  /**
   * Status bar item background hover color when the workbench is offline.
   */
  'statusBarItem.offlineHoverBackground'?: string | 'default';
  /**
   * Background color for the remote badge in the extensions view.
   */
  'extensionBadge.remoteBackground'?: string | 'default';
  /**
   * Foreground color for the remote badge in the extensions view.
   */
  'extensionBadge.remoteForeground'?: string | 'default';
  /**
   * Side bar background color. The side bar is the container for views like explorer and search.
   */
  'sideBar.background'?: string | 'default';
  /**
   * Side bar foreground color. The side bar is the container for views like explorer and search.
   */
  'sideBar.foreground'?: string | 'default';
  /**
   * Side bar border color on the side separating to the editor. The side bar is the container for views like explorer and search.
   */
  'sideBar.border'?: string | 'default';
  /**
   * Side bar title background color. The side bar is the container for views like explorer and search.
   */
  'sideBarTitle.background'?: string | 'default';
  /**
   * Side bar title foreground color. The side bar is the container for views like explorer and search.
   */
  'sideBarTitle.foreground'?: string | 'default';
  /**
   * Side bar title border color on the bottom, separating the title from the views. The side bar is the container for views like explorer and search.
   */
  'sideBarTitle.border'?: string | 'default';
  /**
   * Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar.
   */
  'sideBar.dropBackground'?: string | 'default';
  /**
   * Side bar section header background color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar.
   */
  'sideBarSectionHeader.background'?: string | 'default';
  /**
   * Side bar section header foreground color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar.
   */
  'sideBarSectionHeader.foreground'?: string | 'default';
  /**
   * Side bar section header border color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar.
   */
  'sideBarSectionHeader.border'?: string | 'default';
  /**
   * Border color between the activity bar at the top/bottom and the views.
   */
  'sideBarActivityBarTop.border'?: string | 'default';
  /**
   * Background color of sticky scroll in the side bar.
   */
  'sideBarStickyScroll.background'?: string | 'default';
  /**
   * Border color of sticky scroll in the side bar.
   */
  'sideBarStickyScroll.border'?: string | 'default';
  /**
   * Shadow color of sticky scroll in the side bar.
   */
  'sideBarStickyScroll.shadow'?: string | 'default';
  /**
   * Background color of framed container surfaces ("cards"), such as the floating workbench panels in the modern layout.
   */
  'surface.background'?: string | 'default';
  /**
   * Foreground color of framed container surfaces ("cards"), such as the floating workbench panels in the modern layout.
   */
  'surface.foreground'?: string | 'default';
  /**
   * Border color of framed container surfaces ("cards"), such as the floating workbench panels in the modern layout.
   */
  'surface.border'?: string | 'default';
  /**
   * Border color of the editor surface in the modern layout.
   */
  'editor.border'?: string | 'default';
  /**
   * Border color of the panel surface when the modern UI is enabled.
   */
  'modernPanel.border'?: string | 'default';
  /**
   * Color of the grip handles marking the resizable boundaries between workbench parts when the modern UI is enabled.
   */
  'modernSash.gripForeground'?: string | 'default';
  /**
   * Background color of active tabs when the modern tab style is enabled.
   */
  'modernTab.activeBackground'?: string | 'default';
  /**
   * Foreground color of active tabs when the modern tab style is enabled.
   */
  'modernTab.activeForeground'?: string | 'default';
  /**
   * Background color of tabs when hovering and the modern tab style is enabled.
   */
  'modernTab.hoverBackground'?: string | 'default';
  /**
   * Foreground color of tabs when hovering and the modern tab style is enabled.
   */
  'modernTab.hoverForeground'?: string | 'default';
  /**
   * Background color of active editor tabs when the modern tab style is enabled.
   */
  'modernEditorTab.activeBackground'?: string | 'default';
  /**
   * Opaque background color of tab actions on active editor tabs when the modern tab style is enabled.
   */
  'modernEditorTab.activeActionBackground'?: string | 'default';
  /**
   * Foreground color of active editor tabs when the modern tab style is enabled.
   */
  'modernEditorTab.activeForeground'?: string | 'default';
  /**
   * Background color of inactive editor tabs when the modern tab style is enabled.
   */
  'modernEditorTab.inactiveBackground'?: string | 'default';
  /**
   * Background color of editor tabs when hovering and the modern tab style is enabled.
   */
  'modernEditorTab.hoverBackground'?: string | 'default';
  /**
   * Opaque background color of tab actions on editor tabs when hovering and the modern tab style is enabled.
   */
  'modernEditorTab.hoverActionBackground'?: string | 'default';
  /**
   * Foreground color of editor tabs when hovering and the modern tab style is enabled.
   */
  'modernEditorTab.hoverForeground'?: string | 'default';
  /**
   * Background color of active editor tabs when hovering and the modern tab style is enabled.
   */
  'modernEditorTab.activeHoverBackground'?: string | 'default';
  /**
   * Opaque background color of tab actions on active editor tabs when hovering and the modern tab style is enabled.
   */
  'modernEditorTab.activeHoverActionBackground'?: string | 'default';
  /**
   * Opaque background color of tab actions on selected editor tabs when the modern tab style is enabled.
   */
  'modernEditorTab.selectedActionBackground'?: string | 'default';
  /**
   * Background color of the Activity bar in the default side position when the modern UI is enabled.
   */
  'modernActivityBar.background'?: string | 'default';
  /**
   * Background color of the Activity bar in an inactive window when it is in the default side position and the modern UI is enabled.
   */
  'modernActivityBar.inactiveBackground'?: string | 'default';
  /**
   * Background color of active Activity bar items in the default side position when the modern UI is enabled.
   */
  'modernActivityBar.activeBackground'?: string | 'default';
  /**
   * Foreground color of active Activity bar items in the default side position when the modern UI is enabled.
   */
  'modernActivityBar.activeForeground'?: string | 'default';
  /**
   * Background color of Activity bar items in the default side position when hovering and the modern UI is enabled.
   */
  'modernActivityBar.hoverBackground'?: string | 'default';
  /**
   * Foreground color of Activity bar items in the default side position when hovering and the modern UI is enabled.
   */
  'modernActivityBar.hoverForeground'?: string | 'default';
  /**
   * Background color of active Activity bar items in the default side position when the modern UI is enabled.
   */
  'modernActivityBarItem.activeBackground'?: string | 'default';
  /**
   * Foreground color of active Activity bar items in the default side position when the modern UI is enabled.
   */
  'modernActivityBarItem.activeForeground'?: string | 'default';
  /**
   * Background color of Activity bar items in the default side position when hovering and the modern UI is enabled.
   */
  'modernActivityBarItem.hoverBackground'?: string | 'default';
  /**
   * Foreground color of Activity bar items in the default side position when hovering and the modern UI is enabled.
   */
  'modernActivityBarItem.hoverForeground'?: string | 'default';
  /**
   * Border color of the Activity bar in the default side position when the modern UI is enabled.
   */
  'modernActivityBar.border'?: string | 'default';
  /**
   * Title bar foreground when the window is active.
   */
  'titleBar.activeForeground'?: string | 'default';
  /**
   * Title bar foreground when the window is inactive.
   */
  'titleBar.inactiveForeground'?: string | 'default';
  /**
   * Title bar background when the window is active.
   */
  'titleBar.activeBackground'?: string | 'default';
  /**
   * Title bar background when the window is inactive.
   */
  'titleBar.inactiveBackground'?: string | 'default';
  /**
   * Background color of the shell visible around floating workbench surfaces when the modern UI is enabled.
   */
  'modernUI.shellBackground'?: string | 'default';
  /**
   * Background color of the shell visible around floating workbench surfaces when the window is inactive and the modern UI is enabled.
   */
  'modernUI.inactiveShellBackground'?: string | 'default';
  /**
   * Title bar border color.
   */
  'titleBar.border'?: string | 'default';
  /**
   * Foreground color of the selected menu item in the menubar.
   */
  'menubar.selectionForeground'?: string | 'default';
  /**
   * Background color of the selected menu item in the menubar.
   */
  'menubar.selectionBackground'?: string | 'default';
  /**
   * Border color of the selected menu item in the menubar.
   */
  'menubar.selectionBorder'?: string | 'default';
  /**
   * Foreground color of the command center
   */
  'commandCenter.foreground'?: string | 'default';
  /**
   * Active foreground color of the command center
   */
  'commandCenter.activeForeground'?: string | 'default';
  /**
   * Foreground color of the command center when the window is inactive
   */
  'commandCenter.inactiveForeground'?: string | 'default';
  /**
   * Background color of the command center
   */
  'commandCenter.background'?: string | 'default';
  /**
   * Active background color of the command center
   */
  'commandCenter.activeBackground'?: string | 'default';
  /**
   * Border color of the command center
   */
  'commandCenter.border'?: string | 'default';
  /**
   * Active border color of the command center
   */
  'commandCenter.activeBorder'?: string | 'default';
  /**
   * Border color of the command center when the window is inactive
   */
  'commandCenter.inactiveBorder'?: string | 'default';
  /**
   * Notifications center border color. Notifications slide in from the bottom right of the window.
   */
  'notificationCenter.border'?: string | 'default';
  /**
   * Notification toast border color. Notifications slide in from the bottom right of the window.
   */
  'notificationToast.border'?: string | 'default';
  /**
   * Notifications foreground color. Notifications slide in from the bottom right of the window.
   */
  'notifications.foreground'?: string | 'default';
  /**
   * Notifications background color. Notifications slide in from the bottom right of the window.
   */
  'notifications.background'?: string | 'default';
  /**
   * Notification links foreground color. Notifications slide in from the bottom right of the window.
   */
  'notificationLink.foreground'?: string | 'default';
  /**
   * Notifications center header foreground color. Notifications slide in from the bottom right of the window.
   */
  'notificationCenterHeader.foreground'?: string | 'default';
  /**
   * Notifications center header background color. Notifications slide in from the bottom right of the window.
   */
  'notificationCenterHeader.background'?: string | 'default';
  /**
   * Notifications border color separating from other notifications in the notifications center. Notifications slide in from the bottom right of the window.
   */
  'notifications.border'?: string | 'default';
  /**
   * The color used for the icon of error notifications. Notifications slide in from the bottom right of the window.
   */
  'notificationsErrorIcon.foreground'?: string | 'default';
  /**
   * The color used for the icon of warning notifications. Notifications slide in from the bottom right of the window.
   */
  'notificationsWarningIcon.foreground'?: string | 'default';
  /**
   * The color used for the icon of info notifications. Notifications slide in from the bottom right of the window.
   */
  'notificationsInfoIcon.foreground'?: string | 'default';
  /**
   * The color used for the border of the window when it is active on macOS or Linux. Requires custom title bar style and custom or hidden window controls on Linux.
   */
  'window.activeBorder'?: string | 'default';
  /**
   * The color used for the border of the window when it is inactive on macOS or Linux. Requires custom title bar style and custom or hidden window controls on Linux.
   */
  'window.inactiveBorder'?: string | 'default';
  /**
   * Foreground color for the read indicator in an agent session.
   */
  'agentSessionReadIndicator.foreground'?: string | 'default';
  /**
   * Border color for the badges in selected agent session items.
   */
  'agentSessionSelectedBadge.border'?: string | 'default';
  /**
   * Border color for the badges in selected agent session items when the view is unfocused.
   */
  'agentSessionSelectedUnfocusedBadge.border'?: string | 'default';
  /**
   * Editor gutter background color for lines that are modified.
   */
  'editorGutter.modifiedBackground'?: string | 'default';
  /**
   * Editor gutter secondary background color for lines that are modified.
   */
  'editorGutter.modifiedSecondaryBackground'?: string | 'default';
  /**
   * Editor gutter background color for lines that are added.
   */
  'editorGutter.addedBackground'?: string | 'default';
  /**
   * Editor gutter secondary background color for lines that are added.
   */
  'editorGutter.addedSecondaryBackground'?: string | 'default';
  /**
   * Editor gutter background color for lines that are deleted.
   */
  'editorGutter.deletedBackground'?: string | 'default';
  /**
   * Editor gutter secondary background color for lines that are deleted.
   */
  'editorGutter.deletedSecondaryBackground'?: string | 'default';
  /**
   * Minimap gutter background color for lines that are modified.
   */
  'minimapGutter.modifiedBackground'?: string | 'default';
  /**
   * Minimap gutter background color for lines that are added.
   */
  'minimapGutter.addedBackground'?: string | 'default';
  /**
   * Minimap gutter background color for lines that are deleted.
   */
  'minimapGutter.deletedBackground'?: string | 'default';
  /**
   * Overview ruler marker color for modified content.
   */
  'editorOverviewRuler.modifiedForeground'?: string | 'default';
  /**
   * Overview ruler marker color for added content.
   */
  'editorOverviewRuler.addedForeground'?: string | 'default';
  /**
   * Overview ruler marker color for deleted content.
   */
  'editorOverviewRuler.deletedForeground'?: string | 'default';
  /**
   * Editor gutter decoration color for gutter item glyphs.
   */
  'editorGutter.itemGlyphForeground'?: string | 'default';
  /**
   * Editor gutter decoration color for gutter item background. This color should be opaque.
   */
  'editorGutter.itemBackground'?: string | 'default';
  /**
   * The background color of the terminal, this allows coloring the terminal differently to the panel.
   */
  'terminal.background'?: string | 'default';
  /**
   * The foreground color of the terminal.
   */
  'terminal.foreground'?: string | 'default';
  /**
   * The foreground color of the terminal cursor.
   */
  'terminalCursor.foreground'?: string | 'default';
  /**
   * The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
   */
  'terminalCursor.background'?: string | 'default';
  /**
   * The selection background color of the terminal.
   */
  'terminal.selectionBackground'?: string | 'default';
  /**
   * The selection background color of the terminal when it does not have focus.
   */
  'terminal.inactiveSelectionBackground'?: string | 'default';
  /**
   * The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied.
   */
  'terminal.selectionForeground'?: string | 'default';
  /**
   * The default terminal command decoration background color.
   */
  'terminalCommandDecoration.defaultBackground'?: string | 'default';
  /**
   * The terminal command decoration background color for successful commands.
   */
  'terminalCommandDecoration.successBackground'?: string | 'default';
  /**
   * The terminal command decoration background color for error commands.
   */
  'terminalCommandDecoration.errorBackground'?: string | 'default';
  /**
   * The overview ruler cursor color.
   */
  'terminalOverviewRuler.cursorForeground'?: string | 'default';
  /**
   * The color of the border that separates split panes within the terminal. This defaults to panel.border.
   */
  'terminal.border'?: string | 'default';
  /**
   * The overview ruler left-side border color.
   */
  'terminalOverviewRuler.border'?: string | 'default';
  /**
   * Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content.
   */
  'terminal.findMatchBackground'?: string | 'default';
  /**
   * Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.
   */
  'terminal.hoverHighlightBackground'?: string | 'default';
  /**
   * Border color of the current search match in the terminal.
   */
  'terminal.findMatchBorder'?: string | 'default';
  /**
   * Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content.
   */
  'terminal.findMatchHighlightBackground'?: string | 'default';
  /**
   * Border color of the other search matches in the terminal.
   */
  'terminal.findMatchHighlightBorder'?: string | 'default';
  /**
   * Overview ruler marker color for find matches in the terminal.
   */
  'terminalOverviewRuler.findMatchForeground'?: string | 'default';
  /**
   * Background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through.
   */
  'terminal.dropBackground'?: string | 'default';
  /**
   * Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder.
   */
  'terminal.tab.activeBorder'?: string | 'default';
  /**
   * Foreground color of the terminal initial hint.
   */
  'terminal.initialHintForeground'?: string | 'default';
  /**
   * History item reference color.
   */
  'scmGraph.historyItemRefColor'?: string | 'default';
  /**
   * History item remote reference color.
   */
  'scmGraph.historyItemRemoteRefColor'?: string | 'default';
  /**
   * History item base reference color.
   */
  'scmGraph.historyItemBaseRefColor'?: string | 'default';
  /**
   * History item hover default label foreground color.
   */
  'scmGraph.historyItemHoverDefaultLabelForeground'?: string | 'default';
  /**
   * History item hover default label background color.
   */
  'scmGraph.historyItemHoverDefaultLabelBackground'?: string | 'default';
  /**
   * History item hover label foreground color.
   */
  'scmGraph.historyItemHoverLabelForeground'?: string | 'default';
  /**
   * History item hover additions foreground color.
   */
  'scmGraph.historyItemHoverAdditionsForeground'?: string | 'default';
  /**
   * History item hover deletions foreground color.
   */
  'scmGraph.historyItemHoverDeletionsForeground'?: string | 'default';
  /**
   * Source control graph foreground color (1).
   */
  'scmGraph.foreground1'?: string | 'default';
  /**
   * Source control graph foreground color (2).
   */
  'scmGraph.foreground2'?: string | 'default';
  /**
   * Source control graph foreground color (3).
   */
  'scmGraph.foreground3'?: string | 'default';
  /**
   * Source control graph foreground color (4).
   */
  'scmGraph.foreground4'?: string | 'default';
  /**
   * Source control graph foreground color (5).
   */
  'scmGraph.foreground5'?: string | 'default';
  /**
   * Icon color for resolved comments.
   */
  'commentsView.resolvedIcon'?: string | 'default';
  /**
   * Icon color for unresolved comments.
   */
  'commentsView.unresolvedIcon'?: string | 'default';
  /**
   * Background color for comment reply input box.
   */
  'editorCommentsWidget.replyInputBackground'?: string | 'default';
  /**
   * Color of borders and arrow for resolved comments.
   */
  'editorCommentsWidget.resolvedBorder'?: string | 'default';
  /**
   * Color of borders and arrow for unresolved comments.
   */
  'editorCommentsWidget.unresolvedBorder'?: string | 'default';
  /**
   * Color of background for comment ranges.
   */
  'editorCommentsWidget.rangeBackground'?: string | 'default';
  /**
   * Color of background for currently selected or hovered comment range.
   */
  'editorCommentsWidget.rangeActiveBackground'?: string | 'default';
  /**
   * Editor gutter decoration color for commenting ranges. This color should be opaque.
   */
  'editorGutter.commentRangeForeground'?: string | 'default';
  /**
   * Editor overview ruler decoration color for resolved comments. This color should be opaque.
   */
  'editorOverviewRuler.commentForeground'?: string | 'default';
  /**
   * Editor overview ruler decoration color for unresolved comments. This color should be opaque.
   */
  'editorOverviewRuler.commentUnresolvedForeground'?: string | 'default';
  /**
   * Editor overview ruler decoration color for comment threads with draft comments. This color should be opaque.
   */
  'editorOverviewRuler.commentDraftForeground'?: string | 'default';
  /**
   * Editor gutter decoration color for commenting glyphs.
   */
  'editorGutter.commentGlyphForeground'?: string | 'default';
  /**
   * Editor gutter decoration color for commenting glyphs for unresolved comment threads.
   */
  'editorGutter.commentUnresolvedGlyphForeground'?: string | 'default';
  /**
   * Editor gutter decoration color for commenting glyphs for comment threads with draft comments.
   */
  'editorGutter.commentDraftGlyphForeground'?: string | 'default';
  /**
   * Color for the speaking/active voice state indicator
   */
  'agentsVoice.speakingForeground'?: string | 'default';
  /**
   * Background color for the speaking voice state row highlight
   */
  'agentsVoice.speakingBackground'?: string | 'default';
  /**
   * Background color of the agent sessions window shell and gradient base.
   */
  'agents.background'?: string | 'default';
  /**
   * Background color of the card panels (chat, files, terminal) in the agent sessions window.
   */
  'agentsPanel.background'?: string | 'default';
  /**
   * Background color of the docked details pane in the agent sessions window.
   */
  'agentsDetail.background'?: string | 'default';
  /**
   * Foreground color of the card panels (chat, files, terminal) in the agent sessions window.
   */
  'agentsPanel.foreground'?: string | 'default';
  /**
   * Border color of the card panels (chat, files, terminal) in the agent sessions window.
   */
  'agentsPanel.border'?: string | 'default';
  /**
   * Border color of the floating content card (sessions grid and custom view grid) in the agent sessions window.
   */
  'agentsCard.border'?: string | 'default';
  /**
   * Border color of the bottom panel in the agent sessions window.
   */
  'agentsBottomPanel.border'?: string | 'default';
  /**
   * Tint color used in the background gradient of the agent sessions window shell.
   */
  'agentsGradient.tintColor'?: string | 'default';
  /**
   * Background color of the agent feedback widget shown in the editor.
   */
  'agentFeedbackEditorWidget.background'?: string | 'default';
  /**
   * Border color of the agent feedback widget shown in the editor.
   */
  'agentFeedbackEditorWidget.border'?: string | 'default';
  /**
   * Border color of the agent feedback input widget shown in the editor.
   */
  'agentFeedbackInputWidget.border'?: string | 'default';
  /**
   * Background color of the update button to show download progress in the agent sessions window.
   */
  'agentsUpdateButton.downloadingBackground'?: string | 'default';
  /**
   * Background color of the update button when download is complete in the agent sessions window.
   */
  'agentsUpdateButton.downloadedBackground'?: string | 'default';
  /**
   * Background color of the chat input field in the agent sessions window.
   */
  'agentsChatInput.background'?: string | 'default';
  /**
   * Foreground color of the chat input field in the agent sessions window.
   */
  'agentsChatInput.foreground'?: string | 'default';
  /**
   * Border color of the chat input field in the agent sessions window.
   */
  'agentsChatInput.border'?: string | 'default';
  /**
   * Border color of the chat input field when focused in the agent sessions window.
   */
  'agentsChatInput.focusBorder'?: string | 'default';
  /**
   * Placeholder text color in the chat input field in the agent sessions window.
   */
  'agentsChatInput.placeholderForeground'?: string | 'default';
  /**
   * Background color of the New Session button in the agent sessions sidebar.
   */
  'agentsNewSessionButton.background'?: string | 'default';
  /**
   * Foreground color of the New Session button in the agent sessions sidebar.
   */
  'agentsNewSessionButton.foreground'?: string | 'default';
  /**
   * Border color of the New Session button in the agent sessions sidebar.
   */
  'agentsNewSessionButton.border'?: string | 'default';
  /**
   * Background color of the New Session button when hovered in the agent sessions sidebar.
   */
  'agentsNewSessionButton.hoverBackground'?: string | 'default';
  /**
   * Background color of badges in the agent sessions window.
   */
  'agentsBadge.background'?: string | 'default';
  /**
   * Foreground color of badges in the agent sessions window.
   */
  'agentsBadge.foreground'?: string | 'default';
  /**
   * Background color of the unread sessions count badge on the sidebar toggle.
   */
  'agentsUnreadBadge.background'?: string | 'default';
  /**
   * Foreground color of the unread sessions count badge on the sidebar toggle.
   */
  'agentsUnreadBadge.foreground'?: string | 'default';
  /**
   * Background color of an active session view in the agent sessions window.
   */
  'activeSessionView.background'?: string | 'default';
  /**
   * Background color of an inactive session view in the agent sessions window.
   */
  'inactiveSessionView.background'?: string | 'default';
  /**
   * Foreground color of an active session view in the agent sessions window.
   */
  'activeSessionView.foreground'?: string | 'default';
  /**
   * Foreground color of an inactive session view in the agent sessions window.
   */
  'inactiveSessionView.foreground'?: string | 'default';
  /**
   * The color of the icon for a port that has an associated running process.
   */
  'ports.iconRunningProcessForeground'?: string | 'default';
  /**
   * The foreground color for a section header or active title.
   */
  'settings.headerForeground'?: string | 'default';
  /**
   * The foreground color for a section header or hovered title.
   */
  'settings.settingsHeaderHoverForeground'?: string | 'default';
  /**
   * The color of the modified setting indicator.
   */
  'settings.modifiedItemIndicator'?: string | 'default';
  /**
   * The color of the header container border.
   */
  'settings.headerBorder'?: string | 'default';
  /**
   * The color of the Settings editor splitview sash border.
   */
  'settings.sashBorder'?: string | 'default';
  /**
   * Settings editor dropdown background.
   */
  'settings.dropdownBackground'?: string | 'default';
  /**
   * Settings editor dropdown foreground.
   */
  'settings.dropdownForeground'?: string | 'default';
  /**
   * Settings editor dropdown border.
   */
  'settings.dropdownBorder'?: string | 'default';
  /**
   * Settings editor dropdown list border. This surrounds the options and separates the options from the description.
   */
  'settings.dropdownListBorder'?: string | 'default';
  /**
   * Settings editor checkbox background.
   */
  'settings.checkboxBackground'?: string | 'default';
  /**
   * Settings editor checkbox foreground.
   */
  'settings.checkboxForeground'?: string | 'default';
  /**
   * Settings editor checkbox border.
   */
  'settings.checkboxBorder'?: string | 'default';
  /**
   * Settings editor text input box background.
   */
  'settings.textInputBackground'?: string | 'default';
  /**
   * Settings editor text input box foreground.
   */
  'settings.textInputForeground'?: string | 'default';
  /**
   * Settings editor text input box border.
   */
  'settings.textInputBorder'?: string | 'default';
  /**
   * Settings editor number input box background.
   */
  'settings.numberInputBackground'?: string | 'default';
  /**
   * Settings editor number input box foreground.
   */
  'settings.numberInputForeground'?: string | 'default';
  /**
   * Settings editor number input box border.
   */
  'settings.numberInputBorder'?: string | 'default';
  /**
   * The background color of a settings row when focused.
   */
  'settings.focusedRowBackground'?: string | 'default';
  /**
   * The background color of a settings row when hovered.
   */
  'settings.rowHoverBackground'?: string | 'default';
  /**
   * The color of the row's top and bottom border when the row is focused.
   */
  'settings.focusedRowBorder'?: string | 'default';
  /**
   * Background color for the keyboard shortcuts table header.
   */
  'keybindingTable.headerBackground'?: string | 'default';
  /**
   * Background color for the keyboard shortcuts table alternating rows.
   */
  'keybindingTable.rowsBackground'?: string | 'default';
  /**
   * Button background color for extension actions.
   */
  'extensionButton.background'?: string | 'default';
  /**
   * Button foreground color for extension actions.
   */
  'extensionButton.foreground'?: string | 'default';
  /**
   * Button background hover color for extension actions.
   */
  'extensionButton.hoverBackground'?: string | 'default';
  /**
   * Button border color for extension actions.
   */
  'extensionButton.border'?: string | 'default';
  /**
   * Button separator color for extension actions
   */
  'extensionButton.separator'?: string | 'default';
  /**
   * Button background color for extension actions that stand out (e.g. install button).
   */
  'extensionButton.prominentBackground'?: string | 'default';
  /**
   * Button foreground color for extension actions that stand out (e.g. install button).
   */
  'extensionButton.prominentForeground'?: string | 'default';
  /**
   * Button background hover color for extension actions that stand out (e.g. install button).
   */
  'extensionButton.prominentHoverBackground'?: string | 'default';
  /**
   * Debug toolbar background color.
   */
  'debugToolBar.background'?: string | 'default';
  /**
   * Debug toolbar border color.
   */
  'debugToolBar.border'?: string | 'default';
  /**
   * Debug toolbar icon for start debugging.
   */
  'debugIcon.startForeground'?: string | 'default';
  /**
   * The border color for notebook cells.
   */
  'notebook.cellBorderColor'?: string | 'default';
  /**
   * The color of the notebook cell editor border.
   */
  'notebook.focusedEditorBorder'?: string | 'default';
  /**
   * The error icon color of notebook cells in the cell status bar.
   */
  'notebookStatusSuccessIcon.foreground'?: string | 'default';
  /**
   * The color of the running cell decoration in the notebook editor overview ruler.
   */
  'notebookEditorOverviewRuler.runningCellForeground'?: string | 'default';
  /**
   * The error icon color of notebook cells in the cell status bar.
   */
  'notebookStatusErrorIcon.foreground'?: string | 'default';
  /**
   * The running icon color of notebook cells in the cell status bar.
   */
  'notebookStatusRunningIcon.foreground'?: string | 'default';
  /**
   * The border color of the notebook output container.
   */
  'notebook.outputContainerBorderColor'?: string | 'default';
  /**
   * The color of the notebook output container background.
   */
  'notebook.outputContainerBackgroundColor'?: string | 'default';
  /**
   * The color of the separator in the cell bottom toolbar
   */
  'notebook.cellToolbarSeparator'?: string | 'default';
  /**
   * The background color of a cell when the cell is focused.
   */
  'notebook.focusedCellBackground'?: string | 'default';
  /**
   * The background color of a cell when the cell is selected.
   */
  'notebook.selectedCellBackground'?: string | 'default';
  /**
   * The background color of a cell when the cell is hovered.
   */
  'notebook.cellHoverBackground'?: string | 'default';
  /**
   * The color of the cell's top and bottom border when the cell is selected but not focused.
   */
  'notebook.selectedCellBorder'?: string | 'default';
  /**
   * The color of the cell's borders when multiple cells are selected.
   */
  'notebook.inactiveSelectedCellBorder'?: string | 'default';
  /**
   * The color of the cell's focus indicator borders when the cell is focused.
   */
  'notebook.focusedCellBorder'?: string | 'default';
  /**
   * The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor.
   */
  'notebook.inactiveFocusedCellBorder'?: string | 'default';
  /**
   * The background color of notebook cell status bar items.
   */
  'notebook.cellStatusBarItemHoverBackground'?: string | 'default';
  /**
   * The color of the notebook cell insertion indicator.
   */
  'notebook.cellInsertionIndicator'?: string | 'default';
  /**
   * Notebook scrollbar slider background color.
   */
  'notebookScrollbarSlider.background'?: string | 'default';
  /**
   * Notebook scrollbar slider background color when hovering.
   */
  'notebookScrollbarSlider.hoverBackground'?: string | 'default';
  /**
   * Notebook scrollbar slider background color when clicked on.
   */
  'notebookScrollbarSlider.activeBackground'?: string | 'default';
  /**
   * Background color of highlighted cell
   */
  'notebook.symbolHighlightBackground'?: string | 'default';
  /**
   * Cell editor background color.
   */
  'notebook.cellEditorBackground'?: string | 'default';
  /**
   * Notebook background color.
   */
  'notebook.editorBackground'?: string | 'default';
  /**
   * Foreground color of the interactive editor widget
   */
  'inlineChat.foreground'?: string | 'default';
  /**
   * Background color of the interactive editor widget
   */
  'inlineChat.background'?: string | 'default';
  /**
   * Border color of the interactive editor widget
   */
  'inlineChat.border'?: string | 'default';
  /**
   * Shadow color of the interactive editor widget
   */
  'inlineChat.shadow'?: string | 'default';
  /**
   * Border color of the interactive editor input
   */
  'inlineChatInput.border'?: string | 'default';
  /**
   * Border color of the interactive editor input when focused
   */
  'inlineChatInput.focusBorder'?: string | 'default';
  /**
   * Foreground color of the interactive editor input placeholder
   */
  'inlineChatInput.placeholderForeground'?: string | 'default';
  /**
   * Background color of the interactive editor input
   */
  'inlineChatInput.background'?: string | 'default';
  /**
   * Background color of inserted text in the interactive editor input
   */
  'inlineChatDiff.inserted'?: string | 'default';
  /**
   * Overview ruler marker color for inline chat inserted content.
   */
  'editorOverviewRuler.inlineChatInserted'?: string | 'default';
  /**
   * Minimap marker color for inline chat inserted content.
   */
  'editorMinimap.inlineChatInserted'?: string | 'default';
  /**
   * Background color of removed text in the interactive editor input
   */
  'inlineChatDiff.removed'?: string | 'default';
  /**
   * Overview ruler marker color for inline chat removed content.
   */
  'editorOverviewRuler.inlineChatRemoved'?: string | 'default';
  /**
   * Background color of the agent status indicator in the titlebar.
   */
  'agentStatusIndicator.background'?: string | 'default';
  /**
   * The border color of a chat request.
   */
  'chat.requestBorder'?: string | 'default';
  /**
   * The background color of a chat request.
   */
  'chat.requestBackground'?: string | 'default';
  /**
   * The background color of status elements in chat.
   */
  'chat.statusBackground'?: string | 'default';
  /**
   * Border color of a Chat Editor with a request in progress.
   */
  'chat.sessionStateIndicator.inProgressBorder'?: string | 'default';
  /**
   * Border color of a Chat Editor with an unvisited completion.
   */
  'chat.sessionStateIndicator.unvisitedBorder'?: string | 'default';
  /**
   * Border color of a Chat Editor that needs attention.
   */
  'chat.sessionStateIndicator.needsInputBorder'?: string | 'default';
  /**
   * The background color of a chat slash command.
   */
  'chat.slashCommandBackground'?: string | 'default';
  /**
   * The foreground color of a chat slash command.
   */
  'chat.slashCommandForeground'?: string | 'default';
  /**
   * The background color of a chat avatar.
   */
  'chat.avatarBackground'?: string | 'default';
  /**
   * The foreground color of a chat avatar.
   */
  'chat.avatarForeground'?: string | 'default';
  /**
   * The foreground color of a chat edited file in the edited file list.
   */
  'chat.editedFileForeground'?: string | 'default';
  /**
   * Border color of code blocks within the chat request bubble.
   */
  'chat.requestCodeBorder'?: string | 'default';
  /**
   * Background color of the chat request bubble.
   */
  'chat.requestBubbleBackground'?: string | 'default';
  /**
   * Background color of the chat request bubble on hover.
   */
  'chat.requestBubbleHoverBackground'?: string | 'default';
  /**
   * Chat checkpoint separator color.
   */
  'chat.checkpointSeparator'?: string | 'default';
  /**
   * Foreground color of lines added in chat code block pill.
   */
  'chat.linesAddedForeground'?: string | 'default';
  /**
   * Foreground color of lines removed in chat code block pill.
   */
  'chat.linesRemovedForeground'?: string | 'default';
  /**
   * Background color of the other search matches in a chat transcript. The color must not be opaque so as not to hide underlying content.
   */
  'chat.findMatchHighlightBackground'?: string | 'default';
  /**
   * Background color of the current search match in a chat transcript.
   */
  'chat.findMatchBackground'?: string | 'default';
  /**
   * Shimmer highlight for thinking/working labels.
   */
  'chat.thinkingShimmer'?: string | 'default';
  /**
   * Foreground color of the Stable VS Code icon in the chat working progress indicator.
   */
  'chat.workingProgressStableIconForeground'?: string | 'default';
  /**
   * Foreground color of the Insiders VS Code icon in the chat working progress indicator.
   */
  'chat.workingProgressInsidersIconForeground'?: string | 'default';
  /**
   * Accent color of the animated chat input border shown while a request is in flight.
   */
  'chat.inputWorkingBorderColor1'?: string | 'default';
  /**
   * Unused secondary chat input accent color.
   */
  'chat.inputWorkingBorderColor2'?: string | 'default';
  /**
   * Unused tertiary chat input accent color.
   */
  'chat.inputWorkingBorderColor3'?: string | 'default';
  /**
   * Base accent the Voice Mode ambient glow is derived from. The listening and speaking glows are hue-shifted from this color.
   */
  'chat.voiceGlowBaseColor'?: string | 'default';
  /**
   * Accent color of the Voice Mode glow while listening. Derived from chat.voiceGlowBaseColor when unset.
   */
  'chat.voiceListeningGlow'?: string | 'default';
  /**
   * Accent color of the Voice Mode glow while the agent is speaking. Derived from chat.voiceGlowBaseColor when unset.
   */
  'chat.voiceSpeakingGlow'?: string | 'default';
  /**
   * Accent color of the glow shown on the microphone while dictation is listening.
   */
  'chat.dictationActiveMicGlow'?: string | 'default';
  /**
   * The icon color for extension verified publisher.
   */
  'extensionIcon.verifiedForeground'?: string | 'default';
  /**
   * The icon color for extension ratings.
   */
  'extensionIcon.starForeground'?: string | 'default';
  /**
   * The icon color for pre-release extension.
   */
  'extensionIcon.preReleaseForeground'?: string | 'default';
  /**
   * The icon color for extension sponsor.
   */
  'extensionIcon.sponsorForeground'?: string | 'default';
  /**
   * The icon color for private extensions.
   */
  'extensionIcon.privateForeground'?: string | 'default';
  /**
   * Border color of the sash border.
   */
  'simpleFindWidget.sashBorder'?: string | 'default';
  /**
   * Exception widget border color.
   */
  'debugExceptionWidget.border'?: string | 'default';
  /**
   * Exception widget background color.
   */
  'debugExceptionWidget.background'?: string | 'default';
  /**
   * Color for the debug inline value text.
   */
  'editor.inlineValuesForeground'?: string | 'default';
  /**
   * Color for the debug inline value background.
   */
  'editor.inlineValuesBackground'?: string | 'default';
  /**
   * Icon color for breakpoints.
   */
  'debugIcon.breakpointForeground'?: string | 'default';
  /**
   * Icon color for disabled breakpoints.
   */
  'debugIcon.breakpointDisabledForeground'?: string | 'default';
  /**
   * Icon color for unverified breakpoints.
   */
  'debugIcon.breakpointUnverifiedForeground'?: string | 'default';
  /**
   * Icon color for the current breakpoint stack frame.
   */
  'debugIcon.breakpointCurrentStackframeForeground'?: string | 'default';
  /**
   * Icon color for all breakpoint stack frames.
   */
  'debugIcon.breakpointStackframeForeground'?: string | 'default';
  /**
   * Background color for the highlight of line at the top stack frame position.
   */
  'editor.stackFrameHighlightBackground'?: string | 'default';
  /**
   * Background color for the highlight of line at focused stack frame position.
   */
  'editor.focusedStackFrameHighlightBackground'?: string | 'default';
  /**
   * The background color of the diff editor's header
   */
  'multiDiffEditor.headerBackground'?: string | 'default';
  /**
   * The background color of the multi file diff editor
   */
  'multiDiffEditor.background'?: string | 'default';
  /**
   * The border color of the multi file diff editor
   */
  'multiDiffEditor.border'?: string | 'default';
  /**
   * Foreground color for MCP server compatibility warnings.
   */
  'chat.mcpCompatibilityWarningForeground'?: string | 'default';
  /**
   * Color of pending edit regions in the minimap
   */
  'minimap.chatEditHighlight'?: string | 'default';
  /**
   * The icon color for mcp starred.
   */
  'mcpIcon.starForeground'?: string | 'default';
  /**
   * The border color for the current interactive code cell when the editor has focus.
   */
  'interactive.activeCodeBorder'?: string | 'default';
  /**
   * The border color for the current interactive code cell when the editor does not have focus.
   */
  'interactive.inactiveCodeBorder'?: string | 'default';
  /**
   * Color for the 'failed' icon in the test explorer.
   */
  'testing.iconFailed'?: string | 'default';
  /**
   * Color for the 'Errored' icon in the test explorer.
   */
  'testing.iconErrored'?: string | 'default';
  /**
   * Color for the 'passed' icon in the test explorer.
   */
  'testing.iconPassed'?: string | 'default';
  /**
   * Color for 'run' icons in the editor.
   */
  'testing.runAction'?: string | 'default';
  /**
   * Color for the 'Queued' icon in the test explorer.
   */
  'testing.iconQueued'?: string | 'default';
  /**
   * Color for the 'Unset' icon in the test explorer.
   */
  'testing.iconUnset'?: string | 'default';
  /**
   * Color for the 'Skipped' icon in the test explorer.
   */
  'testing.iconSkipped'?: string | 'default';
  /**
   * Color of the peek view borders and arrow.
   */
  'testing.peekBorder'?: string | 'default';
  /**
   * Color of the peek view borders and arrow when peeking a logged message.
   */
  'testing.messagePeekBorder'?: string | 'default';
  /**
   * Color of the peek view borders and arrow.
   */
  'testing.peekHeaderBackground'?: string | 'default';
  /**
   * Color of the peek view borders and arrow when peeking a logged message.
   */
  'testing.messagePeekHeaderBackground'?: string | 'default';
  /**
   * Background color of text that was covered.
   */
  'testing.coveredBackground'?: string | 'default';
  /**
   * Border color of text that was covered.
   */
  'testing.coveredBorder'?: string | 'default';
  /**
   * Gutter color of regions where code was covered.
   */
  'testing.coveredGutterBackground'?: string | 'default';
  /**
   * Background of the widget shown for an uncovered branch.
   */
  'testing.uncoveredBranchBackground'?: string | 'default';
  /**
   * Background color of text that was not covered.
   */
  'testing.uncoveredBackground'?: string | 'default';
  /**
   * Border color of text that was not covered.
   */
  'testing.uncoveredBorder'?: string | 'default';
  /**
   * Gutter color of regions where code not covered.
   */
  'testing.uncoveredGutterBackground'?: string | 'default';
  /**
   * Minimap color of regions where code was covered.
   */
  'testing.coveredMinimapBackground'?: string | 'default';
  /**
   * Minimap color of regions where code was not covered.
   */
  'testing.uncoveredMinimapBackground'?: string | 'default';
  /**
   * Background for the badge indicating execution count
   */
  'testing.coverCountBadgeBackground'?: string | 'default';
  /**
   * Foreground for the badge indicating execution count
   */
  'testing.coverCountBadgeForeground'?: string | 'default';
  /**
   * Background color of test error messages shown inline in the editor.
   */
  'testing.message.error.badgeBackground'?: string | 'default';
  /**
   * Border color of test error messages shown inline in the editor.
   */
  'testing.message.error.badgeBorder'?: string | 'default';
  /**
   * Text color of test error messages shown inline in the editor.
   */
  'testing.message.error.badgeForeground'?: string | 'default';
  /**
   * Margin color beside error messages shown inline in the editor.
   */
  'testing.message.error.lineBackground'?: string | 'default';
  /**
   * Text color of test info messages shown inline in the editor.
   */
  'testing.message.info.decorationForeground'?: string | 'default';
  /**
   * Margin color beside info messages shown inline in the editor.
   */
  'testing.message.info.lineBackground'?: string | 'default';
  /**
   * Retired color for the 'Errored' icon in the test explorer.
   */
  'testing.iconErrored.retired'?: string | 'default';
  /**
   * Retired color for the 'failed' icon in the test explorer.
   */
  'testing.iconFailed.retired'?: string | 'default';
  /**
   * Retired color for the 'passed' icon in the test explorer.
   */
  'testing.iconPassed.retired'?: string | 'default';
  /**
   * Retired color for the 'Queued' icon in the test explorer.
   */
  'testing.iconQueued.retired'?: string | 'default';
  /**
   * Retired color for the 'Unset' icon in the test explorer.
   */
  'testing.iconUnset.retired'?: string | 'default';
  /**
   * Retired color for the 'Skipped' icon in the test explorer.
   */
  'testing.iconSkipped.retired'?: string | 'default';
  /**
   * Search editor text input box border.
   */
  'searchEditor.textInputBorder'?: string | 'default';
  /**
   * Status bar background color when a program is being debugged. The status bar is shown in the bottom of the window
   */
  'statusBar.debuggingBackground'?: string | 'default';
  /**
   * Status bar foreground color when a program is being debugged. The status bar is shown in the bottom of the window
   */
  'statusBar.debuggingForeground'?: string | 'default';
  /**
   * Status bar border color separating to the sidebar and editor when a program is being debugged. The status bar is shown in the bottom of the window
   */
  'statusBar.debuggingBorder'?: string | 'default';
  /**
   * Command center background color when a program is being debugged
   */
  'commandCenter.debuggingBackground'?: string | 'default';
  /**
   * Foreground color for the token names shown in the debug views (ie. the Variables or Watch view).
   */
  'debugTokenExpression.name'?: string | 'default';
  /**
   * Foreground color for the token types shown in the debug views (ie. the Variables or Watch view).
   */
  'debugTokenExpression.type'?: string | 'default';
  /**
   * Foreground color for the token values shown in the debug views (ie. the Variables or Watch view).
   */
  'debugTokenExpression.value'?: string | 'default';
  /**
   * Foreground color for strings in the debug views (ie. the Variables or Watch view).
   */
  'debugTokenExpression.string'?: string | 'default';
  /**
   * Foreground color for booleans in the debug views (ie. the Variables or Watch view).
   */
  'debugTokenExpression.boolean'?: string | 'default';
  /**
   * Foreground color for numbers in the debug views (ie. the Variables or Watch view).
   */
  'debugTokenExpression.number'?: string | 'default';
  /**
   * Foreground color for expression errors in the debug views (ie. the Variables or Watch view) and for error logs shown in the debug console.
   */
  'debugTokenExpression.error'?: string | 'default';
  /**
   * Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception.
   */
  'debugView.exceptionLabelForeground'?: string | 'default';
  /**
   * Background color for a label shown in the CALL STACK view when the debugger breaks on an exception.
   */
  'debugView.exceptionLabelBackground'?: string | 'default';
  /**
   * Foreground color for a label in the CALL STACK view showing the current session's or thread's state.
   */
  'debugView.stateLabelForeground'?: string | 'default';
  /**
   * Background color for a label in the CALL STACK view showing the current session's or thread's state.
   */
  'debugView.stateLabelBackground'?: string | 'default';
  /**
   * Color used to highlight value changes in the debug views (ie. in the Variables view).
   */
  'debugView.valueChangedHighlight'?: string | 'default';
  /**
   * Foreground color for info messages in debug REPL console.
   */
  'debugConsole.infoForeground'?: string | 'default';
  /**
   * Foreground color for warning messages in debug REPL console.
   */
  'debugConsole.warningForeground'?: string | 'default';
  /**
   * Foreground color for error messages in debug REPL console.
   */
  'debugConsole.errorForeground'?: string | 'default';
  /**
   * Foreground color for source filenames in debug REPL console.
   */
  'debugConsole.sourceForeground'?: string | 'default';
  /**
   * Foreground color for debug console input marker icon.
   */
  'debugConsoleInputIcon.foreground'?: string | 'default';
  /**
   * Debug toolbar icon for pause.
   */
  'debugIcon.pauseForeground'?: string | 'default';
  /**
   * Debug toolbar icon for stop.
   */
  'debugIcon.stopForeground'?: string | 'default';
  /**
   * Debug toolbar icon for disconnect.
   */
  'debugIcon.disconnectForeground'?: string | 'default';
  /**
   * Debug toolbar icon for restart.
   */
  'debugIcon.restartForeground'?: string | 'default';
  /**
   * Debug toolbar icon for step over.
   */
  'debugIcon.stepOverForeground'?: string | 'default';
  /**
   * Debug toolbar icon for step into.
   */
  'debugIcon.stepIntoForeground'?: string | 'default';
  /**
   * Debug toolbar icon for step over.
   */
  'debugIcon.stepOutForeground'?: string | 'default';
  /**
   * Debug toolbar icon for continue.
   */
  'debugIcon.continueForeground'?: string | 'default';
  /**
   * Debug toolbar icon for step back.
   */
  'debugIcon.stepBackForeground'?: string | 'default';
  /**
   * The background color for changes.
   */
  'mergeEditor.change.background'?: string | 'default';
  /**
   * The background color for word changes.
   */
  'mergeEditor.change.word.background'?: string | 'default';
  /**
   * The background color for changes in base.
   */
  'mergeEditor.changeBase.background'?: string | 'default';
  /**
   * The background color for word changes in base.
   */
  'mergeEditor.changeBase.word.background'?: string | 'default';
  /**
   * The border color of unhandled unfocused conflicts.
   */
  'mergeEditor.conflict.unhandledUnfocused.border'?: string | 'default';
  /**
   * The border color of unhandled focused conflicts.
   */
  'mergeEditor.conflict.unhandledFocused.border'?: string | 'default';
  /**
   * The border color of handled unfocused conflicts.
   */
  'mergeEditor.conflict.handledUnfocused.border'?: string | 'default';
  /**
   * The border color of handled focused conflicts.
   */
  'mergeEditor.conflict.handledFocused.border'?: string | 'default';
  /**
   * The foreground color for changes in input 1.
   */
  'mergeEditor.conflict.handled.minimapOverViewRuler'?: string | 'default';
  /**
   * The foreground color for changes in input 1.
   */
  'mergeEditor.conflict.unhandled.minimapOverViewRuler'?: string | 'default';
  /**
   * The background of the "Conflicting Lines" text.
   */
  'mergeEditor.conflictingLines.background'?: string | 'default';
  /**
   * The background color of decorations in input 1.
   */
  'mergeEditor.conflict.input1.background'?: string | 'default';
  /**
   * The background color of decorations in input 2.
   */
  'mergeEditor.conflict.input2.background'?: string | 'default';
  /**
   * 'Black' ANSI color in the terminal.
   */
  'terminal.ansiBlack'?: string | 'default';
  /**
   * 'Red' ANSI color in the terminal.
   */
  'terminal.ansiRed'?: string | 'default';
  /**
   * 'Green' ANSI color in the terminal.
   */
  'terminal.ansiGreen'?: string | 'default';
  /**
   * 'Yellow' ANSI color in the terminal.
   */
  'terminal.ansiYellow'?: string | 'default';
  /**
   * 'Blue' ANSI color in the terminal.
   */
  'terminal.ansiBlue'?: string | 'default';
  /**
   * 'Magenta' ANSI color in the terminal.
   */
  'terminal.ansiMagenta'?: string | 'default';
  /**
   * 'Cyan' ANSI color in the terminal.
   */
  'terminal.ansiCyan'?: string | 'default';
  /**
   * 'White' ANSI color in the terminal.
   */
  'terminal.ansiWhite'?: string | 'default';
  /**
   * 'BrightBlack' ANSI color in the terminal.
   */
  'terminal.ansiBrightBlack'?: string | 'default';
  /**
   * 'BrightRed' ANSI color in the terminal.
   */
  'terminal.ansiBrightRed'?: string | 'default';
  /**
   * 'BrightGreen' ANSI color in the terminal.
   */
  'terminal.ansiBrightGreen'?: string | 'default';
  /**
   * 'BrightYellow' ANSI color in the terminal.
   */
  'terminal.ansiBrightYellow'?: string | 'default';
  /**
   * 'BrightBlue' ANSI color in the terminal.
   */
  'terminal.ansiBrightBlue'?: string | 'default';
  /**
   * 'BrightMagenta' ANSI color in the terminal.
   */
  'terminal.ansiBrightMagenta'?: string | 'default';
  /**
   * 'BrightCyan' ANSI color in the terminal.
   */
  'terminal.ansiBrightCyan'?: string | 'default';
  /**
   * 'BrightWhite' ANSI color in the terminal.
   */
  'terminal.ansiBrightWhite'?: string | 'default';
  /**
   * The background color of the sticky scroll overlay in the terminal.
   */
  'terminalStickyScroll.background'?: string | 'default';
  /**
   * The background color of the sticky scroll overlay in the terminal when hovered.
   */
  'terminalStickyScrollHover.background'?: string | 'default';
  /**
   * The border of the sticky scroll overlay in the terminal.
   */
  'terminalStickyScroll.border'?: string | 'default';
  /**
   * The foreground color of the terminal command guide that appears to the left of a command and its output on hover.
   */
  'terminalCommandGuide.foreground'?: string | 'default';
  /**
   * The foreground color for an flag icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.flagForeground'?: string | 'default';
  /**
   * The foreground color for an alias icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.aliasForeground'?: string | 'default';
  /**
   * The foreground color for an enum member icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.optionValueForeground'?: string | 'default';
  /**
   * The foreground color for a method icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.methodForeground'?: string | 'default';
  /**
   * The foreground color for an argument icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.argumentForeground'?: string | 'default';
  /**
   * The foreground color for an option icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.optionForeground'?: string | 'default';
  /**
   * The foreground color for an inline suggestion icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.inlineSuggestionForeground'?: string | 'default';
  /**
   * The foreground color for a file icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.fileForeground'?: string | 'default';
  /**
   * The foreground color for a folder icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.folderForeground'?: string | 'default';
  /**
   * The foreground color for a commit icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.commitForeground'?: string | 'default';
  /**
   * The foreground color for a branch icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.branchForeground'?: string | 'default';
  /**
   * The foreground color for a tag icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.tagForeground'?: string | 'default';
  /**
   * The foreground color for a stash icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.stashForeground'?: string | 'default';
  /**
   * The foreground color for a remote icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.remoteForeground'?: string | 'default';
  /**
   * The foreground color for a pull request icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.pullRequestForeground'?: string | 'default';
  /**
   * The foreground color for a completed pull request icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.pullRequestDoneForeground'?: string | 'default';
  /**
   * The foreground color for a symbolic link file icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.symbolicLinkFileForeground'?: string | 'default';
  /**
   * The foreground color for a symbolic link folder icon. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.symbolicLinkFolderForeground'?: string | 'default';
  /**
   * The foreground color for a plaintext suggestion. These icons will appear in the terminal suggest widget.
   */
  'terminalSymbolIcon.symbolText'?: string | 'default';
  /**
   * Foreground color for note alerts in markdown.
   */
  'markdownAlert.note.foreground'?: string | 'default';
  /**
   * Foreground color for tip alerts in markdown.
   */
  'markdownAlert.tip.foreground'?: string | 'default';
  /**
   * Foreground color for important alerts in markdown.
   */
  'markdownAlert.important.foreground'?: string | 'default';
  /**
   * Foreground color for warning alerts in markdown.
   */
  'markdownAlert.warning.foreground'?: string | 'default';
  /**
   * Foreground color for caution alerts in markdown.
   */
  'markdownAlert.caution.foreground'?: string | 'default';
  /**
   * Background color for the Welcome page.
   */
  'welcomePage.background'?: string | 'default';
  /**
   * Background color for the tiles on the Welcome page.
   */
  'welcomePage.tileBackground'?: string | 'default';
  /**
   * Hover background color for the tiles on the Welcome.
   */
  'welcomePage.tileHoverBackground'?: string | 'default';
  /**
   * Border color for the tiles on the Welcome page.
   */
  'welcomePage.tileBorder'?: string | 'default';
  /**
   * Foreground color for the Welcome page progress bars.
   */
  'welcomePage.progress.background'?: string | 'default';
  /**
   * Background color for the Welcome page progress bars.
   */
  'welcomePage.progress.foreground'?: string | 'default';
  /**
   * Foreground color of the heading of each walkthrough step
   */
  'walkthrough.stepTitle.foreground'?: string | 'default';
  /**
   * Background color for the embedded editors on the Interactive Playground.
   */
  'walkThrough.embeddedEditorBackground'?: string | 'default';
  /**
   * The color of the Profiles editor splitview sash border.
   */
  'profiles.sashBorder'?: string | 'default';
}
/**
 * Colors and styles for the token.
 */
export interface Settings {
  /**
   * Foreground color for the token.
   */
  foreground?: string;
  background?: string;
  /**
   * Font style of the rule: 'italic', 'bold', 'underline', 'strikethrough' or a combination. The empty string unsets inherited settings.
   */
  fontStyle?: string;
  /**
   * Font family for the token (e.g., "Fira Code", "JetBrains Mono").
   */
  fontFamily?: string;
  /**
   * Font size multiplier for the token (e.g., 1.2 will use 1.2 times the default font size).
   */
  fontSize?: number;
  /**
   * Line height multiplier for the token (e.g., 1.2 will use 1.2 times the default height). If the font size is set and the line height is not explicitly set, the line height will be computed based on the font size.
   */
  lineHeight?: number;
}
/**
 * Colors for semantic tokens
 */
export interface TokenStyling {
  /**
   * Style for comments.
   */
  'comment'?: string | Style;
  /**
   * Style for strings.
   */
  'string'?: string | Style;
  /**
   * Style for keywords.
   */
  'keyword'?: string | Style;
  /**
   * Style for numbers.
   */
  'number'?: string | Style;
  /**
   * Style for expressions.
   */
  'regexp'?: string | Style;
  /**
   * Style for operators.
   */
  'operator'?: string | Style;
  /**
   * Style for namespaces.
   */
  'namespace'?: string | Style;
  /**
   * Style for types.
   */
  'type'?: string | Style;
  /**
   * Style for structs.
   */
  'struct'?: string | Style;
  /**
   * Style for classes.
   */
  'class'?: string | Style;
  /**
   * Style for interfaces.
   */
  'interface'?: string | Style;
  /**
   * Style for enums.
   */
  'enum'?: string | Style;
  /**
   * Style for type parameters.
   */
  'typeParameter'?: string | Style;
  /**
   * Style for functions
   */
  'function'?: string | Style;
  /**
   * Style for member functions
   */
  'member'?: string | Style;
  /**
   * Style for method (member functions)
   */
  'method'?: string | Style;
  /**
   * Style for macros.
   */
  'macro'?: string | Style;
  /**
   * Style for variables.
   */
  'variable'?: string | Style;
  /**
   * Style for parameters.
   */
  'parameter'?: string | Style;
  /**
   * Style for properties.
   */
  'property'?: string | Style;
  /**
   * Style for enum members.
   */
  'enumMember'?: string | Style;
  /**
   * Style for events.
   */
  'event'?: string | Style;
  /**
   * Style for decorators & annotations.
   */
  'decorator'?: string | Style;
  /**
   * Style for labels.
   */
  'label'?: string | Style;
  /**
   * Style for all symbol declarations.
   */
  '*.declaration'?: string | Style;
  /**
   * Style to use for references in documentation.
   */
  '*.documentation'?: string | Style;
  /**
   * Style to use for symbols that are static.
   */
  '*.static'?: string | Style;
  /**
   * Style to use for symbols that are abstract.
   */
  '*.abstract'?: string | Style;
  /**
   * Style to use for symbols that are deprecated.
   */
  '*.deprecated'?: string | Style;
  /**
   * Style to use for write accesses.
   */
  '*.modification'?: string | Style;
  /**
   * Style to use for symbols that are async.
   */
  '*.async'?: string | Style;
  /**
   * Style to use for symbols that are read-only.
   */
  '*.readonly'?: string | Style;
  [k: string]: string | Style;
}
/**
 * Colors and styles for the token.
 */
export interface Style {
  /**
   * Foreground color for the token.
   */
  foreground?: string;
  background?: string;
  /**
   * Sets the all font styles of the rule: 'italic', 'bold', 'underline' or 'strikethrough' or a combination. All styles that are not listed are unset. The empty string unsets all styles.
   */
  fontStyle?: string;
  /**
   * Sets or unsets the font style to bold. Note, the presence of 'fontStyle' overrides this setting.
   */
  bold?: boolean;
  /**
   * Sets or unsets the font style to italic. Note, the presence of 'fontStyle' overrides this setting.
   */
  italic?: boolean;
  /**
   * Sets or unsets the font style to underline. Note, the presence of 'fontStyle' overrides this setting.
   */
  underline?: boolean;
  /**
   * Sets or unsets the font style to strikethrough. Note, the presence of 'fontStyle' overrides this setting.
   */
  strikethrough?: boolean;
  [k: string]: unknown;
}
