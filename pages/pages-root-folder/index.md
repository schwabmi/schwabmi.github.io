---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth:
widget1:
  title: "teaching"
  url: '/teaching/'
  image: teaching.png
  text: 'All courses of my teaching at Humboldt-Universität zu Berlin.'
widget2:
  title: "research"
  url: '/research/'
  text: 'All about my PhD'
  image: research.png
widget3:
  title: "projects"
  url: '/projects/'
  image: projects2.png
  text: 'Side projects (work and personal)'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
# callforaction:
#   url: https://tinyletter.com/feeling-responsive
#   text: Inform me about new updates and features ›
#   style: alert
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---
