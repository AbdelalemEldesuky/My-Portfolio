<template>
    <div class="nav">
        <div class="imag">
         <img src="https://dyn.web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.11540-24%2F46260830_212632059649175_8336495370796269568_n.jpg%3Foe%3D5C3A9DF7%26oh%3D4b7e262411e614e14448296a150fa1e9&t=l&u=201068668630%40c.us&i=1544656250" alt="">
        </div>
        <div class="nav-contcts">
           <div class="home">Home</div>
           <div class="about">About</div>
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
export default {
    name:'navbar'
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
