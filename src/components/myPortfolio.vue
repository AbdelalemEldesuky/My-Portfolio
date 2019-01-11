<template>
    <div class="Portfolio">
         <div class="container">
              <div class="portfolio-header">
              <h2>My Portfolio </h2>
             </div>
             <div class="btns">
               <span class="all"></span>
               <span></span>
               <span></span>
               <span></span>
             </div>
              <div class="our-work">
                  <div><img :src='imgs.img1' alt=""/></div>
                  <div><img :src='imgs.img2' alt=""/></div>
                  <div><img :src='imgs.img3' alt=""/></div>
                  <div><img :src='imgs.img4' alt=""/></div>
                  <div><img :src='imgs.img5' alt=""/></div>
                  <div><img :src='imgs.img6' alt=""/></div>
                  <div><img :src='imgs.img7' alt=""/></div>
                  <div><img :src='imgs.img8' alt=""/></div>
                  <div><img :src='imgs.img9' alt=""/></div>

              </div>
         </div>
    </div>
</template>

<script>


export default {
    name:'myPortfolio',
    data(){
        return{
            imgs:{
                img1:require('../assets/images/01.jpg'),
                img2:require('../assets/images/02.png'),
                img3:require('../assets/images/03.jpg'),
                img4:require('../assets/images/04.jpg'),
                img5:require('../assets/images/05.jpg'),
                img6:require('../assets/images/06.jpg'),
                img7:require('../assets/images/07.jpg'),
                img8:require('../assets/images/08.jpg'),
                img9:require('../assets/images/09.jpeg')

            }
        }
    }
}
</script>

<style scoped>
.Portfolio{
    background-color: #3a3a3a;
        padding-bottom: 40px;

}
.portfolio-header{
    padding-top: 60px;
 border-bottom: solid #363636 1px;
  width: 300px;
  font-family: monospace;
  font-weight:bold;
    line-height: 24px;
  margin: auto;
  text-align: center;
    box-shadow: 0 2px 0 0 #888;
}
.portfolio-header h2{
     font-weight: bold;
        font-size: 35px;
            line-height: 24px;
            margin-bottom: 20px;
}
.our-work{
    overflow:hidden;
    margin-top: 80px;
}

.our-work>div{
    float:left;
    width:33.333333%;
    margin-bottom:25px;
}

.our-work>div img{
    width:93%;
    padding:3px;
    background-color:#fff;
    border:1px solid #ccc;
    box-shadow:10px 10px 12px #ccc;
}
</style>
