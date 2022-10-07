module.exports = {
  content: ['./src/App.{html,js,ts,jsx}', './src/components/Navbar1.{html,js,ts,jsx}', './src/components/Showcase.{html,js,ts,jsx}','./src/components/Cards.{html,js,ts,jsx}','./src/components/Footer.{html,js,ts,jsx}', './src/components/CTA.{html,js,ts,jsx}', './src/components/Who.{html,js,ts,jsx}', './src/components/About.{html,js,ts,jsx}', './src/components/FAQ.{html,js,ts,jsx}', './src/components/Quote.{html,js,ts,jsx}', './src/components/Questions.{html,js,ts,jsx}', './src/components/FAQH.{html,js,ts,jsx}', './src/components/Form.{html,js,ts,jsx}', './src/components/FormH.{html,js,ts,jsx}', './src/components/TestimonialsH.{html,js,ts,jsx}', './src/components/Testimonials.{html,js,ts,jsx}', './src/components/PostList.{html,js,ts,jsx}', './src/components/PostPage.{html,js,ts,jsx}',],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
],
}
