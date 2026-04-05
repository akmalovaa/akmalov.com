// Custom Docusaurus plugin to integrate Tailwind CSS via PostCSS.
// Includes a fix: Tailwind v4 wraps utilities in CSS @layer, but Docusaurus's
// Infima CSS is unlayered. Unlayered styles always beat layered ones, so
// Tailwind utilities never apply. The fix strips Tailwind's @layer wrappers
// so utilities compete on specificity and source order (loaded after Infima → wins).

const TAILWIND_LAYERS = new Set(['base', 'theme', 'utilities', 'components', 'properties']);

function unwrapTailwindLayers() {
  return {
    postcssPlugin: 'unwrap-tailwind-layers',
    AtRule: {
      layer(atRule) {
        if (!atRule.nodes || atRule.nodes.length === 0) {
          // @layer order declaration (e.g. @layer base, theme;) — remove
          atRule.remove();
        } else {
          const name = atRule.params.trim();
          if (TAILWIND_LAYERS.has(name)) {
            // Unwrap: move child rules to parent, remove the @layer wrapper
            atRule.replaceWith(atRule.nodes);
          }
        }
      },
    },
  };
}
unwrapTailwindLayers.postcss = true;

module.exports = function tailwindPlugin() {
  return {
    name: 'tailwind-plugin',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [
        require('@tailwindcss/postcss'),
        unwrapTailwindLayers,
        ...postcssOptions.plugins,
      ];
      return postcssOptions;
    },
  };
};
