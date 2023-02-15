import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  ngOnInit() {
	  /////////////////////////////////////////

	  // Products Slick
	  $('.products-slick').each(function () {
		  var $this = $(this),
			$nav = $this.attr('data-nav');

		  $this.not('slick-initialized').slick({
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  autoplay: true,
			  infinite: true,
			  speed: 300,
			  dots: false,
			  arrows: true,
			  appendArrows: $nav ? $nav : false,
			  responsive: [{
				  breakpoint: 991,
				  settings: {
					  slidesToShow: 2,
					  slidesToScroll: 1,
				  }
			  },
			  {
				  breakpoint: 480,
				  settings: {
					  slidesToShow: 1,
					  slidesToScroll: 1,
				  }
			  },
			  ]
		  });
	  });

	  // Products Widget Slick
	  $('.products-widget-slick').each(function () {
		  var $this = $(this),
			  $nav = $this.attr('data-nav');

		  $this.not('slick-initialized').slick({
			  infinite: true,
			  autoplay: true,
			  speed: 300,
			  dots: false,
			  arrows: true,
			  appendArrows: $nav ? $nav : false,
		  });
	  });
	// END INIT 
  }

}

