<template>
    <div class="nav">
        <div class="imag">
         <img :src='imgs.img1' alt="">
        </div>
        <div class="nav-contcts">
           <div class="home" >Home</div>
          <div class="about"><a href="#about">About</a></div>
           <div class="Experience">Experience</div>
           <div class="portfolio">Portfolio</div>
           <div class="services">Services</div>
           <div class="contact">Contact</div>
        </div>
        <div class="contacts">
          <div><span>Email: </span>abdelalem.desuky@hotmail.com</div>
          <div><span>Phone: </span>01068668630</div>
        </div>
    </div>
</template>

<script>
import about from './aboutMe'
export default {
    name:'navbar',
    data(){
        return{
              imgs:{
        img1:require('../assets/images/abdo.jpg')
        }
        }
    }
}
</script>

<style scoped>
.nav{
    width: 50px;
    height: 100%;
    background-color: #3a3a3a;
    padding: 30px 0 30px 30px; 
}
.nav .imag img{
    border-radius: 50%;
    width: 70%;
    
}
.nav-contcts{
    margin: 30px 0 30px 0;
    border-top: solid #fff 1px;
     border-bottom: solid #fff 1px;
     width: 85%;
     padding: 35px 0 35px 0;

}
.nav-contcts div{
    padding: 5px;
    color: #d6d5d5;
    width: fit-content
}
.contacts{
    margin-top: 40px;
    overflow: hidden;
}
.contacts span{
    font-weight: bold;
    display: inline;

}
.nav-contcts div:hover{
    border-bottom: solid #fff 1px;

}
</style>
