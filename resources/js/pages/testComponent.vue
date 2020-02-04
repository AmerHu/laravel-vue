<template>
  <div>
    <h1 :class="{hidden:isLoading == true}">{{ title }}</h1>
    <div  :class="{hidden:isLoading == false}">
        <div class="loader"></div>
        <h5 style="margin-left:70px;">Loading ...</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "testComponent",
  props: {
    title: String
  },
  mounted : function() {
      setTimeout(() => {
          this.isLoading = false
      }, 1000);
  },
  data: function() {
    return {
      isLoading: true
    };
  }
};
</script>