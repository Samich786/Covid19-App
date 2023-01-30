<template>
    <div id="components-layout-demo-basic">
        <Header />
        <a-row>
            <a-col :span="24">
                <div class="nuxt">
                    <nuxt />
                </div>
            </a-col>
        </a-row>
        <!-- <a-layout>
      <a-layout-header>
        
      </a-layout-header>
      <a-layout>
        <a-layout-sider class="mb-5">
          
        </a-layout-sider>
        <a-layout-content class="mb-5">
         
        </a-layout-content>
      </a-layout>
    </a-layout> -->
    </div>
</template>
<script>
import Header from "@/components/Header";
export default {
    components: {
        Header,

    },
};
</script>
<style lang="scss">
@import "@/assets/global/shortHandClasses.scss";


// .ant-layout-header {
//   padding: 0;
//   margin: 0;
//   height: auto;
//   line-height: 20px;
//   background: #fff;
//   display: block;
// }
// .ant-layout {
//   display: block;
// }
// .ant-layout-content {
//   display: block !important;
//   position: relative;
// }
</style>
