<template>
    <div class="myFooter">
        <div class="row">
             <div class="footer-block col-md-4 ">
           <span><i class="fas fa-mobile-alt"></i></span>
           <div>Phone</div>
           <div>01068668630</div>
         </div>
         <div class="footer-block col-md-4">
           <span><i class="fas fa-address-card"></i></span>
           <div>Address</div>
           <div>New Cairo, Cairo, Egypt </div>
         </div>
         <div class=" footer-block col-md-4">
             <span><i class="fas fa-envelope"></i></span>
             <div>Email</div>
             <div>abdelalem.desuky@hotmail.com</div>
         </div>
        </div>
         <div class="copywrite">
             <p>&copy; 2018 Abdelaleem Eldesuky</p>
         </div>
    </div>
    
</template>

<script>
export default {
    name:'myFooter'
}
</script>

<style scoped>
.myFooter{
    height: 200px;
    margin:30px 0 30px 0;
    background: #222222;
}
.myFooter span{
    display: block;
    text-align: center;
        font-size: 45px;
    line-height: normal;
    color: #ededed;
}
.myFooter div{
     text-align: center;
        font-size: 22px;
    line-height: normal;
    color: #ededed;
    padding: 5px
}
.myFooter .footer-block{
    border-right: solid #ededed 1px; 
}
.myFooter .copywrite{
    height: 100px;
    background: black;
    font-size: 16px;
    padding-top: 30px  ;
    color: #ededed;
}
</style>
