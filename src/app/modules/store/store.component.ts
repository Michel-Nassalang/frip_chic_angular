import { Component, OnInit } from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";

declare let $: any;
let priceInputMax: any, priceInputMin: any;
let priceSlider: any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit{

  minValue: number = 50000;
  maxValue: number = 4000000;
  options: Options = {
    floor: 0,
    ceil: 15000000,
    showSelectionBar: true,
    selectionBarGradient : {
      from: '#d10023e1',
      to: '#D10024',
    },
    getPointerColor: (value: number): string =>{
      return '#D10024'
    },
    translate: (value: number): string => { 
      return value + ' Fcfa';
    }
  }

  ngOnInit(): void {
    /////////////////////////////////////////

    // Input number
    $('.input-number').each(function () {
      let $this = $(this),
        $input = $this.find('input[type="number"]'),
        up = $this.find('.qty-up'),
        down = $this.find('.qty-down');

      down.on('click', function () {
        let value = parseInt($input.val()) - 1;
        value = value < 1 ? 1 : value;
        $input.val(value);
        $input.change();
        updatePriceSlider($this, value)
      })

      up.on('click', function () {
        let value = parseInt($input.val()) + 1;
        $input.val(value);
        $input.change();
        updatePriceSlider($this, value)
      })
    });

    priceInputMax = document.getElementById('price-max');
    priceInputMin = document.getElementById('price-min');

    priceInputMax.addEventListener('change', function () {
      updatePriceSlider($(this).parent(), this.value)
    });

    priceInputMin.addEventListener('change', function () {
      updatePriceSlider($(this).parent(), this.value)
    });

    function updatePriceSlider(elem: any, value: number) {
      if (elem.hasClass('price-min')) {
        console.log('min')
        priceSlider.noUiSlider.set([value, null]);
      } else if (elem.hasClass('price-max')) {
        console.log('max')
        priceSlider.noUiSlider.set([null, value]);
      }
    }

  }

}
