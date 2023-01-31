<template>
  <div>
    <a-row class="covid-r1 mt-5">
        <a-col>
            <a-row>
                <a-col>
                    <h1>Covid-19</h1>
                </a-col>
            </a-row>
        </a-col>
    </a-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/assets/global/shortHandClasses.scss";
.covid-r1{
background: url(../static/banner.jpg);
height: 40vh;
width: 100%;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
}
.covid-r1 h1{
  color: #ffffff;
  font-size: 3rem;
  margin-top: 100px;
  margin-left: 3rem;
}
</style>