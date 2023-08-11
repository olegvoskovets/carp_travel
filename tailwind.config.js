/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      color_number: "rgba(255, 255, 255, 0.20)",
      blue: "#007ace",
      red: "#de3618",
      white: "#fff",
    },
    extend: {
      backgroundImage: {
        home_section_mobile:
          "var(--bg-color-main), var(--bg-image-home_section_mobile)",
        home_section_tablet:
          "var(--bg-color-main), var(--bg-image-home_section_tablet)",
        home_section_desktop:
          "var(--bg-color-main), var(--bg-image-home_section_desktop)",

        services_section1_mobile:
          "var(--bg-color-main), var(--bg-image-servisec1-mobile)",
        services_section1_tablet:
          "var(--bg-color-main), var(--bg-image-servisec1-tablet)",
        services_section1_desktop:
          "var(--bg-color-main), var(--bg-image-servisec1-decktop)",

        servisec1_mobile: "var(--servises1_foto_mobile)",
        servisec1_tablet: "var(--servises1_foto_tablet)",
        servisec1_desktop: "var(--servises1_foto_desktop)",

        services_section2_mobile:
          "var(--bg-color-main), var(--bg-image-servisec2-mobile)",
        services_section2_tablet:
          "var(--bg-color-main), var(--bg-image-servisec2-tablet)",
        services_section2_desktop:
          "var(--bg-color-main), var(--bg-image-servisec2-decktop)",

        servisec2_mobile: "var(--servises1_foto_mobile)",
        servisec2_tablet: "var(--servises1_foto_tablet)",
        servisec2_desktop: "var(--servises1_foto_desktop)",

        services_section3_mobile:
          "var(--bg-color-main), var(--bg-image-servisec3-mobile)",
        services_section3_tablet:
          "var(--bg-color-main), var(--bg-image-servisec3-tablet)",
        services_section3_desktop:
          "var(--bg-color-main), var(--bg-image-servisec3-decktop)",

        servisec3_mobile: "var(--servises3_foto_mobile)",
        servisec3_tablet: "var(--servises3_foto_tablet)",
        servisec3_desktop: "var(--servises3_foto_desktop)",

        services_section4_mobile:
          "var(--bg-color-main), var(--bg-image-servisec4-mobile)",
        services_section4_tablet:
          "var(--bg-color-main), var(--bg-image-servisec4-tablet)",
        services_section4_desktop:
          "var(--bg-color-main), var(--bg-image-servisec4-decktop)",

        servisec4_mobile: "var(--servises4_foto_mobile)",
        servisec4_tablet: "var(--servises4_foto_tablet)",
        servisec4_desktop: "var(--servises4_foto_desktop)",

        services_section5_mobile:
          "var(--bg-color-main), var(--bg-image-servisec5-mobile)",
        services_section5_tablet:
          "var(--bg-color-main), var(--bg-image-servisec5-tablet)",
        services_section5_desktop:
          "var(--bg-color-main), var(--bg-image-servisec5-decktop)",

        servisec5_mobile: "var(--servises5_foto_mobile)",
        servisec5_tablet: "var(--servises5_foto_tablet)",
        servisec5_desktop: "var(--servises5_foto_desktop)",

        contacts_section_mobile:
          "var(--bg-color-main), var(--bg-image-contacts_section_mobile)",
        contacts_section_tablet:
          "var(--bg-color-main), var(--bg-image-contacts_section_tablet)",
        contacts_section_desktop:
          "var(--bg-color-main), var(--bg-image-contacts_section_desktop)",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
