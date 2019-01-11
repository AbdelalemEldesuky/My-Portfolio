<template>
    <div class="testimonial">
         <div class="container">
           <div class="testimonial-header">
            <h2>Testimonials </h2>
        </div>
    </div>
     <div class="testimonials">
          <div class="contain">
            <div class="tab-one">
              <blockquote><q>A goal is a desired result or possible outcome thatt in some sort of assumed development goal is possible outcome that organizational desired end-point in some sort goal is a desired result or possible outcome that organizational desired end-point in some sort ogoal is a desired result or possible outcome that organizational desired end-point in some sort</q></blockquote>
              <h3>Abdelaleem</h3>
            </div>
            <div class="tab-two">
              <blockquote><q>Some sort of assumed development goal is possible outcome that organizational desired end-point in some sort goal is a desired result or possible outcome that organizational desired end-point in some sort ogoal is a desired result or possible outcome that organizational desired end-point in some sort</q></blockquote>
              <h3>Ahmed Ibrhim</h3>
            </div>
            <div class="tab-three">
              <blockquote><q>Possible outcome thatt in some sort of assumed development goal is possible outcome that organizational desired end-point in some sort goal is a desired result or possible outcome that organizational desired end-point in some sort ogoal is a desired result or possible outcome that organizational desired end-point in some sort</q></blockquote>
              <h3>Mahmoud Rabie</h3>
            </div>
            <div class="tab-four">
              <blockquote><q>Development goal is possible outcome that organizational desired end-point in some sort goal is a desired result or possible outcome that organizational desired end-point in some sort ogoal is a desired result or possible outcome that organizational desired end-point in some sort</q></blockquote>
              <h3>Shibob</h3>
            </div>
              <ul class="list-unstyled">
                  <li class="active" data-class="tab-one"></li>
                  <li data-class="tab-two"></li>
                  <li data-class="tab-three"></li>
                  <li data-class="tab-four"></li>
              </ul>
          </div>
      </div>
    </div>
</template>


<script>
export default {
    name:'',
}
</script>
<style scoped>
.testimonial{
    background-color: #222222;

}
.testimonial-header{
    padding-top: 100px;
 border-bottom: solid #222222 1px;
  width: 300px;
  font-family: monospace;
  font-weight:bold;
  margin: auto;
  text-align: center;
    box-shadow: 0 2px 0 0 #888;
}
.testimonial-header h2{
    font-weight: bold;
        font-size: 35px;
            line-height: 24px;
                        margin-bottom: 20px;
}

.testimonials{
      padding-top:50px;
    padding-bottom:50px;
    text-align:center;
}

.testimonials q{
    line-height:1.6;
    color:#999;
    font:italic bold 18px/1.8 Arial,Tahoma;
}

.testimonials h3{
    color:#777;
     margin-bottom:30px;

}

.testimonials ul{
    list-style:none;
    padding:0;
    text-align:center;
}

.testimonials ul li{
    width:15px;
    height:15px;
    border:2px solid #fff;
    border-radius:50%;
    display:inline-block;
    cursor:pointer;
}

.testimonials ul li.active{
    background-color:#fff;
}

.testimonials ul li:hover{
    background-color:#fff;
}
.testimonials .contain div:not(.tab-one){
      display: none;
    }
</style>
