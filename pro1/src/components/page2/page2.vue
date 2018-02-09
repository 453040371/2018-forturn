<template>
  <div id="pageContent">
      <div class="bg2 show"></div>
         <div class="medal-block m1">
            <div class="medal-ribbon"></div>
            <div class="medal-ring"></div>
        </div>
        <div class="medal-block m1">
            <div class="medal-wrap">
                <div class="medal-inner">
                    <div class="medal j-medal" data-dog="3">
                        <router-link :to="'/page3/page3/4'" class="medal-txt t4"></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="medal-block m2">
            <div class="medal-ribbon"></div>
            <div class="medal-ring"></div>
        </div>
        <div class="medal-block m2">
            <div class="medal-wrap">
                <div class="medal-inner">
                    <div class="medal j-medal" data-dog="4">
                        <!-- <span class="medal-txt t5"></span> -->
                        <router-link :to="'/page3/page3/5'" class="medal-txt t5"></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="medal-block m3">
            <div class="medal-ribbon"></div>
            <div class="medal-ring"></div>
        </div>
        <div class="medal-block m3">
            <div class="medal-wrap">
                <div class="medal-inner">
                    <div class="medal j-medal" data-dog="1">
                        <!-- <span class="medal-txt t2"></span> -->
                        <router-link :to="'/page3/page3/2'" class="medal-txt t2"></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="medal-block m4">
            <div class="medal-ribbon"></div>
            <div class="medal-ring"></div>
        </div>
        <div class="medal-block m4">
            <div class="medal-wrap">
                <div class="medal-inner">
                    <div class="medal j-medal" data-dog="2">
                        <!-- <span class="medal-txt t3"></span> -->
                        <router-link :to="'/page3/page3/3'" class="medal-txt t3"></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="medal-block m5">
            <div class="medal-ribbon"></div>
            <div class="medal-ring"></div>
        </div>
        <div class="medal-block m5">
            <div class="medal-wrap">
                <div class="medal-inner">
                    <div class="medal j-medal" data-dog="0">
                        <!-- <span class="medal-txt t1"></span> -->
                        <router-link :to="'/page3/page3/1'" class="medal-txt t1"></router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="prompt medal-prompt j-medal-prompt">点击奖牌给自己定一个新年小目标</div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          
      }
  },
  created(){
      
  },
  mounted(){
      var medals = document.getElementsByClassName("medal-block");
      for(var i = 0; i < medals.length; i++){
              medals[i].classList.add("show");
            //   console.log(medals[i])
      }
      var prompt = document.getElementsByClassName("j-medal-prompt");
      prompt[0].classList.add("show");
  }

}
</script>

