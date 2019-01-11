<template>
    <div class="contact">
       <div class="container">
         <div class="contact-header">
          <h2>Contact </h2>
         </div>
       </div>
       <div class="contact-form ">
            <form class="row">
              <input class="form-control input-lg col-md-6" type="text" name="name" placeholder="Name">
              <input class="form-control input-lg col-md-6" type="text" name="mail" placeholder="E-mail">
              <input class="form-control input-lg col-md-6" type="text" name="phone" placeholder="Phone">
              <input class="form-control input-lg col-md-6" type="text" name="subject" placeholder="Supject">
            <textarea class="form-control" name="name" placeholder="Message"></textarea>
             <span class="button">Send Message</span>
          </form>
       </div>
    </div>
</template>

<script>
export default {
    name:'contact'
}
</script>
<style scoped>
.contact{
    background-color: #3a3a3a;
        padding-bottom: 40px;

}
.contact-header{
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
.contact-header h2{
    font-weight: bold;
    margin-bottom: 20px;

}
.contact-form{
    margin-top:40px;

}
.contact-form form{
    margin: 30px
}
.contact-form form input{
    padding: 30px;
    margin-bottom: 10px;
}
.contact-form form textarea{
    height: 200px
}
.contact-form form .button{
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
    margin: auto;
      margin-top: 30px;
      cursor: pointer;
}
.contact-form form .button:hover{
  background: #232323;
  color: #fff
}
</style>
