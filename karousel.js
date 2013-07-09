;(function ($) 
{
    $.karousel = $.karousel || { };
    
    $.karousel.carousel = {
        options: {
            pager: false, // is there a page number navigation present?
            cyclic: false, // is there a cyclic navigation ?
            automate: false, //is there an automate option ?
            vertical: false,  //is there a vertical slider option ?
        }
    };
 
    function Carousel(root, options)
    {
        var oSelf     = this
        ,   oContent  = $('.karousel-content:first', root)
        ,   oPages    = oContent.children().length - 1
        ,   oBtnNext  = $('.next:first', root)
        ,   oBtnPrev  = $('.prev:first', root)
        ,   oPager    = $('.karousel-nav:first', root)
        ,   iPageNum = 0
        ,   iPageNumPrev = 0
        ;
        
		function changeButtons()
		{
			if(!options.cyclic)
            {
                oBtnPrev.toggleClass('disable', iPageNum <= 0 );
                oBtnNext.toggleClass('disable', !(iPageNum < oPages));
            }
		}
		
		function changePager()
		{
			if(options.pager)
            {
                var oNumbers = $('li', oPager);
                $(oNumbers[iPageNum]).addClass('active').siblings().removeClass('active');
            }
		}
		
		function toggleContent()
		{
			$(oContent.children()[iPageNum]).fadeIn().siblings().hide();
		}

		function toggleContentVertical() {
		    $(oContent.children()[iPageNumPrev]).slideUp("slow");
		    $(oContent.children()[iPageNum]).show("slow");
		}

        function setEvents()
        {
            if(oBtnPrev.length > 0 && oBtnNext.length > 0)
            {
                oBtnPrev.click(gotoPrev);
                oBtnNext.click(gotoNext);
            }

            if(options.pager && oPager.length > 0)
            { 
                $('a',oPager).click(setPager); 
            }

            if (options.automate) {
               options.cyclic=true;
                setInterval(function () {
                    gotoNext();
                }, 5000);
            }
        }
		
		function gotoPrev()
        {
		    iPageNumPrev = iPageNum;
			iPageNum--;
			if (iPageNum < 0) 
			{
                iPageNum++;
                if (options.cyclic)
					iPageNum = oPages;
				
            }
			    changeButtons();
			    changePager();
			    if (options.vertical) 
			        toggleContentVertical();
            else
				toggleContent();
					
		
		}
		
		function gotoNext()
		{
		    iPageNumPrev = iPageNum;
			iPageNum++;
			if (iPageNum > oPages) 
			{
				iPageNum--;				
                if (options.cyclic)
                    iPageNum = 0;

            }
				changeButtons();		
				changePager();
				if (options.vertical)
				    toggleContentVertical();
            else
				toggleContent();           			
		}
		
		function setPager()
        {
			iPageNum = oPager.children().index($(this).parent());
			toggleContent();
			changeButtons();
			changePager();
        }
		
		
		function initialize() {
		    setEvents();
			changeButtons();
			changePager();           
            return oSelf;
        }

        return initialize();
    }

    $.fn.karousel = function(params)
    {
        var options = $.extend({}, $.karousel.carousel.options, params);
        this.each(function () {new Carousel($(this), options); });
        return this;
    };
	
}(jQuery));