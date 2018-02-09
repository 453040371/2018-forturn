<template>
  <div id="pageContent">
      <div class="bg2 show"></div>
      <div class="prompt shake-prompt j-mail-prompt"></div>
        <div class="prompt mail-prompt j-mail-prompt">摇一摇摇出新年旺运</div>
      <div class="mail-wrap">
          <div class="mail">
              <div class="mail-bg"></div>
              <div class="mail-bone bone b1"></div>
              <div class="mail-bone bone b2"></div>
              <div class="mail-bone bone b3"></div>
              <div class="mail-bone bone b4"></div>
              <div class="mail-bone bone b5"></div>
              <div class="mail-bone-selected">
                  <div class="bone">
                      <div class="bone-light"></div>
                      <div class="bone-txt j-bone-txt data4"></div>
                  </div>
              </div>
              <div class="bone-line"></div>
              <div class="mail-bone bone b6"></div>
              <div class="mail-bone bone b7"></div>
              <div class="mail-bone bone b8"></div>
              <div class="mail-bone bone b9"></div>
              <div class="mail-bone bone b10"></div>
              <div class="mail-bone bone b11"></div>
              <div class="mail-bone bone b12"></div>
              <div class="mail-bone bone b13"></div>
              <div class="mail-bone bone b14"></div>
              <div class="mail-bone bone b15"></div>
              <div class="mail-bone bone b16"></div>
              <div class="mail-bone bone b17"></div>
              <div class="mail-bone bone b18"></div>
              <div class="mail-front"></div>
              <div class="mail-medal medal j-mail-medal">
                  <span class="medal-txt t2"></span>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
      console.log(this.$route)
  },
  methods: {},
  mounted(){
      var numb = 't' + this.$route.params.id;
       document.querySelector(".medal-txt").classList.add(numb);
       document.querySelector(".shake-prompt").classList.add("show");
       document.querySelector(".mail-wrap").classList.add("show");
       var mails = document.querySelectorAll(".mail-prompt,.mail-bone,.bone-line,.mail-bone-selected");
       for(var i = 0; i < mails.length; i++){
              mails[i].classList.add("show");
            //   console.log(medals[i])
      }
  }
};
</script>
