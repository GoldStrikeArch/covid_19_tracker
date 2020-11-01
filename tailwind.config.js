module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.svelte", "./src/**/*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem'
      }
    },
  },
  variants: {},
  plugins: [],
};
