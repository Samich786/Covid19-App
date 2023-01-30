<template>
    <div>
        <a-row class="main-page pt-5" type="flex" justify="center">
            <a-col :span="14" class="mt-5">
                <a-row>
                    <a-col :span="10">
                        <h3 class="about mt-0">- KNOW ABOUT COVID-19</h3>
                    </a-col>
                </a-row>
                <a-row>
                    <a-col :span="14">
                        <h4 class="worldwide mb-0 ">- See the Realtime Pakistan and Worldwide</h4>
                    </a-col>
                </a-row>
                <a-row>
                    <a-col :span="24">
                        <p class="covid-h1 mt-0 mb-2">COVID-19 Situation!</p>
                    </a-col>
                </a-row>
                <a-row>
                    <a-col :span="20">
                        <p class="covid-p mt-0">The coronavirus, or COVID-19, is inciting panic for a number of reasons.
                            It's a new virus, meaning no one has immunity.It is highly contagious, meaning it spreads
                            fast. Its novelty means that scientists aren't completely sure as to how it behaves since
                            they have very little history to go on.</p>
                    </a-col>
                </a-row>
                <a-row>
                    <a-col :span="18">
                        <a-row>
                            <a-col :span="10">
                                <h4>Country:</h4>
                            </a-col>
                            <a-col :span="4">
                                <h4>Country ISO:-</h4>
                            </a-col>
                        </a-row>
                        <a-row type="flex" justify="space-between">
                            <a-col :span="6">
                                <a-input v-model="form.country" placeholder="Enter Country Name"></a-input>
                            </a-col>
                            <a-col :span="6">
                                <a-input v-model="form.iso" placeholder="Enter 3 digit Iso"></a-input>
                            </a-col>
                            <a-col :span="4">
                                <button @click="find()" :loading="loader" class="find-btn mt-0">Find Stats</button>
                            </a-col>
                        </a-row>

                    </a-col>
                </a-row>
            </a-col>
            <a-col :span="8">
                <img src="../static/header-b.png" alt="" width="100%">
            </a-col>
        </a-row>
        <!-- {{ getCity }} -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters("modules/coviddata", ["getCity"])
    },
    data() {
        return {
            loader: false,
            form: {
                country: '',
                iso: ''
            }
        }
    },
    methods: {
        ...mapActions("modules/coviddata", ["getCountryReport"]),
        find() {
         
            // if (this.form.country == '' && this.form.iso == '') {
            //     this.$notification.error({
            //         message: 'Enter Country Name',
            //     });
            // } else {

                try {
                   
                    debugger
                   this.getCountryReport(this.form)
                   
                    this.$router.push("/dashboard")
                
                } catch (error) {
                    this.loader = false
                    this.$notification.error({
                        message: 'City not found',
                    });
                
            }
        }



    }
}

</script>

<style lang="scss">
@import "@/assets/global/shortHandClasses.scss";

.main-page {
    background: #FAFFFA;
    height: 80vh;
    margin-top: 100px;
}

.about {
    color: #49a555;
    font-size: 1rem;
    font-weight: bold;
}

.worldwide {
    color: #474A55;
    font-size: 1rem;
    font-weight: 700;
}

.covid-h1 {
    color: #2D313D;
    font-size: 2.5rem;
    font-weight: bold;
}

.covid-p {
    color: #8D9196;
    text-align: justify;
}

.card {
    border: 1px solid rgb(236, 236, 236);
    border-radius: 10px;
    background: #ffffff;

}

.find-btn {
    color: #ffffff;
    background: #2C7F38;
    width: 120px;
    height: 35px;
    border: 1px solid#2C7F38;
    border-radius: 5px;
    cursor: pointer;
}
</style>