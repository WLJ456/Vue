<template>
  <div>
    	<div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
            		<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							新闻
						</a>
            		<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							NBA
						</a>
					</div>
				</div>

			</div>


  </div>
</template>

<script>
import mui from '../../lib/MUI/js/mui.min.js'

export default {
  name: '',
  data() {
    return {
    };
  },
  mounted() {
    mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
  },
  methods: {},
};
</script>

<style scoped>
	*{
    touch-action: pan-y;
  }
  /* 组件中导入样式 滑动样式 */
  .mui-pull-top-wrapper .mui-icon.mui-reverse {
				transform: rotate(180deg) translateZ(0);
			}
</style>

