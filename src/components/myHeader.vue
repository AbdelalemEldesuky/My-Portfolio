<template>
   <div class="myHeader row">
      <div class="col-md-6 info">
        <h5>Hello, I am</h5>
        <h3>Abdelaleem Eldesuky</h3>
       <div class="frontend">
          <h5 >UX Designer / Frontend Developer</h5> 
       </div>
        <div class="socialM">
          <div class="facebook"><i class="fab fa-facebook-f"></i></div>
          <div class="twitter"><i class="fab fa-twitter"></i></div>
          <div class="google"><i class="fab fa-google-plus-g"></i></div>
          <div class="youtube"><i class="fab fa-youtube"></i></div>
          <div class="likedin"><i class="fab fa-linkedin-in"></i></div>
          <div class="github"><i class="fab fa-github-alt"></i></div>
        </div>
        <a href="" class="btn">View My Portfolio&nbsp; &nbsp;<i class="fas fa-arrow-right"></i></a> 
      </div>
      <div class="col-md-6 myPhoto">
         <img :src='imgs.img1' alt="">
      </div>
   </div>
</template>

<script>
export default {
  name: 'myHeader',
  data(){
    return{
      imgs:{
        img1:require('../assets/images/abdo.jpg')
        }
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myHeader{
  padding-left: 10px;

}
.info{
    margin-top: 200px;
}
.myHeader h5{
  color: #fff;
}
.myHeader h3{
    color: #d6d5d5;
    margin-bottom: 20px;
    margin-top: 5px;
    font-size: 36px;
    font-family: 'Montserrat',sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    line-height: normal;
    
}
.frontend{
  border: solid #363636 1px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-left: none;
  border-right: none;
  width: 70%;
  font-family: 'Poppins',sans-serif;
  line-height: 1.7;
   color: #d6d5d5
}
.socialM{
  margin-top: 20px;
}
.socialM div{
  display: inline;
  padding: 15px;
    color: #d6d5d5;
    font-size: 20px
}
.socialM i:hover{
  color: #fff;
}
.btn{
  display: inline-block;
    font-size: 14px;
    padding: 9px 22px;
    background: #fff;
    border: 2px solid #fff;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 1px !important;
    color: #232323;
    letter-spacing: .5px;
    line-height: inherit;
    width: auto;
    font-family: 'Montserrat',sans-serif;
    font-weight: 600;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
      margin-top: 30px;
      cursor: pointer;
}
.btn:hover{
  background: #232323;
  color: #fff
}

/*start my photo*/
.myPhoto{
    margin-top: 100px;
    
}
.myPhoto img{
  border-radius: 10px;
  height: 600px;
}
</style>
