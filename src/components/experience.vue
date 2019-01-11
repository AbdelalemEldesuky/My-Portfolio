<template>
    <div class="experience">
        <div class="container">
           <div class="experience-header">
            <h2>My Experience </h2>
        </div>
          <div class="experience-info">
             <p class="prag-years">During the years of study and work on the graduation project and some other projects I have been Experence in Java Script , OOP , Vue.js , HTML , CSS , Jquery , Bootstrap and fair level in C# language </p>
              <div class="years"><div class="years-border"><h4>2 years</h4><h2>2015</h2> </div><span class="line"><span class="point-line"><span class="end-line"><div class="years years2"><div class="years-border years-border2 "><h4>2 years</h4><h2>2017</h2><span class="line2"><span class="point-line point-line2"><span class="end-lin end-line2"></span></span></span></div></div></span></span></span></div>
             <p class="prag-years2">Technical team memeber at Microsoft Tech club (MSP) </p>

          </div>
         <div class="experience-info2">
                <div class="years years2"><div class="years-border years-border2 "><h3>2 years</h3><span class="line2"><span class="point-line point-line2"><span class="end-lin end-line2"></span></span></span></div></div>
          </div>
        </div>

        
         

    </div>
</template>

<script>
export default {
    name:'experience'
}
</script>

<style scope>
.experience{
    background-color: #222222;

}
.experience-header{
    padding-top: 100px;
 border-bottom: solid #222222 1px;
  width: 300px;
  font-family: monospace;
  font-weight:bold;
  margin: auto;
  text-align: center;
    box-shadow: 0 2px 0 0 #888;
}
.experience-header h2{
    font-weight: bold;
        font-size: 35px;
            line-height: 24px;
                        margin-bottom: 20px;



}
.years{
    width: 120px;
    height: 120px;
    background: #fff;
    color: #222;
    border-radius: 50%;
    text-align: center;
    position: relative;
    margin-top: 100px;
    margin-left: 18%;
   
}
.years-border{
    width: 120px;
    height: 120px;
    border:solid #e7e7e7 2px;
    border-radius: 50%;
    position: absolute;
    margin-left: 10px;
    text-align: center;
   
}
.years-border h4{
    margin: auto;
    text-align: center;
    margin-top: 20%;
        font-size: 18px;
    font-weight: 700;
    color: #6f6f6f;
    font-family: 'Poppins',sans-serif;

}
.years-border h2{
    font-size: 35px;
    font-weight: 700;
    color: #232323;
    line-height: 36px;
}
.line{
    width: 200px;
    height: 2px;
    background: #e7e7e7;
    position: absolute;
    margin-top: 50%;
    margin-left: 57%
}
.point-line{
    width: 20px;
    height: 20px;
    background: #e7e7e7;
    border-radius: 50%;
    position: absolute;
    margin-left: 50%;
    margin-top: -6px;
}
.end-line{
     width: 2px;
    height: 500px;
    background: #e7e7e7;
    position: absolute;
    margin-top: -50px;
}
/*--------------------*/
.experience-info2{
  visibility: hidden;
 margin-top: -150px
}
.years2{
    margin-left:200px;
    margin-top: 250px
}
.years-border2{
    margin-left: -10px;
}
.line2{
         width: 200px;
    height: 2px;
    background: #e7e7e7;
    position: absolute;
    margin-left: -250px
}
.point-line2{
    margin-left: -110px
}
.prag-years{
    width: 30%;
    float: right;
    margin: 5% 15% 0 0;
        color: #d6d5d5;
   font-size: 14px;
    line-height: 1.7;
    word-spacing: 1px;
}
.prag-years2{
    width: 30%;
    margin: 20% 0 0 15%;
    color: #d6d5d5;
   font-size: 14px;
    line-height: 1.7;
    word-spacing: 1px;
}
</style>
