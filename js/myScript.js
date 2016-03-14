$(document).ready(function(){

    /**function infoheight() {
        var section1h = $('.center-of-excellence .story-interrupt .infographic .section-1').height();

        var section2h = $('.center-of-excellence .story-interrupt .infographic .section-2').height();

        var section3h = $('.center-of-excellence .story-interrupt .infographic .section-3').height();

        var section4h = $('.center-of-excellence .story-interrupt .infographic .section-4').height();

        var section5h = $('.center-of-excellence .story-interrupt .infographic .section-5').height();

        var section6h = $('.center-of-excellence .story-interrupt .infographic .section-6').height();

        var section7h = $('.center-of-excellence .story-interrupt .infographic .section-7').height();

        var section8h = $('.center-of-excellence .story-interrupt .infographic .section-8').height();

        var section9h = $('.center-of-excellence .story-interrupt .infographic .section-9').height();

        var section10h = $('.center-of-excellence .story-interrupt .infographic .section-10').height();

        var section11h = $('.center-of-excellence .story-interrupt .infographic .section-11').height();

        var section12h = $('.center-of-excellence .story-interrupt .infographic .section-12').height();

        var section13h = $('.center-of-excellence .story-interrupt .infographic .section-13').height();

        var section14h = $('.center-of-excellence .story-interrupt .infographic .section-14').height();

        var section15h = $('.center-of-excellence .story-interrupt .infographic .section-15').height();

        var section16h = $('.center-of-excellence .story-interrupt .infographic .section-16').height();

        var totalh = section1h+section2h+section3h+section4h+section5h+section6h+section7h+section8h+section9h+section10h+section11h+section12h+section13h+section14h+section15h

        $('.center-of-excellence .story-interrupt .infographic').css('height', totalh+'px');
    }
    
    $(infoheight);
    $(window).resize(infoheight);
    **/
    
    $(infoheight);
    $(window).resize(infoheight);
    
    (function($) {

          /**
           * Copyright 2012, Digital Fusion
           * Licensed under the MIT license.
           * http://teamdf.com/jquery-plugins/license/
           *
           * @author Sam Sehnert
           * @desc A small plugin that checks whether elements are within
           *     the user visible viewport of a web browser.
           *     only accounts for vertical position, not horizontal.
           */

          $.fn.visible = function(partial) {

              var $t            = $(this),
                  $w            = $(window),
                  viewTop       = $w.scrollTop(),
                  viewBottom    = viewTop + $w.height(),
                  _top          = $t.offset().top,
                  _bottom       = _top + $t.height(),
                  compareTop    = partial === true ? _bottom : _top,
                  compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

          };
    
    })(jQuery);

    
    var win = $(window);
    var allMods = $('.fade-in');

    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass('already-visible'); 
      } 
    });

    win.scroll(function(event) {
  
          allMods.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
              el.addClass('come-in'); 
            } 
          });
  
    });
});