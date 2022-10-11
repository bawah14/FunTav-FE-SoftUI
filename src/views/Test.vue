<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">

      </div>
    </div>
    <div class="row">
      <div class="col-12">
        
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "tables",
  beforeMount(){
    this.testCall()
    this.getDetail()
  },
  methods : {
    async getDetail (){
        const res = await this.apiGets("https://dummyjson.com/products/1")
        console.log(res)
    }
  }
};
</script>
