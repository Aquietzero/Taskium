# This is a manifest file that'll be compiled into application.js, which will include all the files
# listed below.
#
# Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
# or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
#
# It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
# the compiled file.
#
# WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
# GO AFTER THE REQUIRES BELOW.
#
#= require jquery
#= require jquery_ujs
#= require_tree .

$ ->
  hljs.initHighlightingOnLoad()
  sidebar_hover_effect()
  comments_expandable()



sidebar_hover_effect = ->

  links = $('#sidebar .menu-item a')

  for link in links
    $(link).hover (-> $(this).parent().css
      # 'backgroundColor':'#ddd'
      'box-shadow':'0 5px 5px rgba(150, 150, 150, 0.2) inset'
    ), (-> $(this).parent().css
      'backgroundColor':'#eee'
      'box-shadow':'0 0 0 #eee inset'
    )


comments_expandable = ->

  comments_controls = $('.comments-control')

  for comments_control in comments_controls
  
    $(comments_control).click( ->
      $(this).next('.posts-comments-list').slideToggle()
    )

