<template>
    <div class="main-nav">
        <a-row class="top-nav">
            <a-col :span="6" :offset="12">
                <h4 class="pt-2">Dial 1166 health helpline</h4>
            </a-col>
        </a-row>
        <header>
            <a-row class="ml-5">
                <a-col :span="4">
                    <img class="mt-2" src="../static/govt.jpg" alt="" width="140px">
                </a-col>
                <a-col :span="12" :offset="8">
                    <a-row class="mt-4">
                        <a-col :span="4">
                           <a href="/">SelectCountry</a> 
                        </a-col>
                        <a-col :span="3">
                           <a href="/aboutcovid">Covid-19</a>
                        </a-col>
                        <a-col :span="3">
                            <a href="">Guidline</a>
                        </a-col>
                        <a-col :span="3">
                            <a href="">Symptoms</a>
                        </a-col>
                        <a-col :span="3">
                            <a href="">Precautions</a>
                        </a-col>
                    </a-row>
                </a-col>
            </a-row>
        </header>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/assets/global/shortHandClasses.scss";

.top-nav {
    background: #D81F1D;

}

.main-nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
}

.top-nav h4 {
    color: white;
}

header {
    background: white;
    height: 10vh !important;
    border: 1px solid rgb(245, 244, 244);
    color: black;

}

header a {
    color: rgb(107, 107, 107);
    font-weight: 700;
}
</style>