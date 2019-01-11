<template>
  <div id="app">
                  <navbar class="nav" />
        <div class="body">
             <myHeader class="header"/>
            <about-me class="about"/>
            <experience class="experience"/>
            <my-portfolio class="myPortfolio"/>
            <testimonials class="testimonials"/>
            <contact class="contact"/>
            <myFooter class="myFooter"/>
             </div>
       
      
  </div>
</template>

<script>

import myHeader from './components/myHeader'
import aboutMe from './components/aboutMe'
import navbar from './components/navbar'
import experience from './components/experience'
import myPortfolio from './components/myPortfolio'
import testimonials from './components/testimonials'
import contact from './components/contact'
import myFooter from './components/myFooter'
export default {
  name: 'app',
  components: {
    myHeader,
    aboutMe,
    navbar,
    experience,
    myPortfolio,
    testimonials,
    contact,
    myFooter
  }
}
</script>

<style scoped >
.nav{
float: left;
	height: 100vh;
	position: fixed;
	width: 20%;
  overflow-y: scroll;
  display: block

}
.body{
 position: absolute;
		flex-wrap: wrap;
    right: 0;
    width: 80%;
    overflow: hidden;
   
}

</style>
