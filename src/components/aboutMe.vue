<template>
    <div class="about-me" id="about">
        <div class="container">
        <div class="about-header">
          <h2>About Me </h2>
        </div>
        <div class="about-body row">
           <div class="about-info col-md-6">
              <p>I really enjoy being challenged and working on projects that require me to work outside my comfort and
                    knowledge set, as continuing to learn new languages and development techniques are important to me and
                    the success of my organization..
                    I’ve been Experence in Java Script , Vue js , HTML , CSS , Jquery , Bootstrap and fair level in Java and C# language .
                    </p>
                <a href="" class="btn"><i class="fas fa-download"></i>&nbsp; &nbsp;View My Portfolio</a> 
           </div>
           <div class="about-progress col-md-6">
               <div>
                   <h5>Html/Css</h5>
                    <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 85%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
               </div>
               <div>
                   <h5>Java Script</h5>
                    <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 75%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
               </div>
               <div>
                   <h5>Bootstrap</h5>
                    <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 80%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
               </div>
               <div>
                   <h5>Vue Js</h5>
                    <div class="progress">
                            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 65%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
               </div>
               
           </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'aboutMe',
}
</script>

<style scoped>
.about-me{
    background-color: #3a3a3a;
        padding-bottom: 40px;

}
.about-header{
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
.about-header h2{
    font-weight: bold;
    margin-bottom: 20px;

}
.about-body{
    padding-top: 60px
}
.about-info{
    line-height: 1.7;
    font-family: 'Poppins',sans-serif;
    color: #d6d5d5;
    font-size: 15px;
    word-spacing: 1px;
    padding-right: 40px
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
.about-progress h5{
    color: #d6d5d5;
}
.progress{
    margin-top: 20px;
    margin-bottom: 20px;
}
.progress-bar{
    background: #e6e6e6;
   
}
</style>
