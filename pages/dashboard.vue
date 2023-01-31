<template>
    <div>
        <div class="dashboard">
            <a-row class="db-h1 mx-5 mt-5 py-2" type="flex" justify="center">
                <a-col>
                    <h1>COVID-19 dashboard</h1>
                </a-col>
            </a-row>
            <a-row class="mx-5 mt-5">
                <a-col>
                    <h1>{{ covidDetails.country }} Statistics</h1>
                </a-col>
            </a-row>
            <a-row  class="mx-5" :gutter="[10, 10]">
                <a-col :span="6">
                    <a-card class="confirm">
                        <a-row>
                            <a-col :span="14">
                                <h3 class="font-size">Confirmed Casese </h3>
                            </a-col>
                            <a-col :span="10"> <img src="../static/diagnosed-cases.png" alt="" width="100%"></a-col>
                        </a-row>
                        <a-row type="flex" justify="center">
                            <a-col>
                                <h1 class="stat-font mb-0">{{ covidDetails.Totalcases }}</h1>
                            </a-col>
                        </a-row>
                    </a-card>
                </a-col>
                <a-col :span="6">
                    <a-card class="deaths">
                        <a-row>
                            <a-col :span="14">
                                <h3 class="font-size">DEATHS </h3>
                            </a-col>
                            <a-col :span="10"> <img src="../static/deaths.png" alt="" width="100%"></a-col>
                        </a-row>
                        <a-row type="flex" justify="center">
                            <a-col>
                                <h1 class="stat-font mb-0">{{ covidDetails.Totaldeaths }}</h1>
                            </a-col>
                        </a-row>
                    </a-card>
                </a-col>
                <a-col :span="6">
                    <a-card class="recovered">
                        <a-row>
                            <a-col :span="14">
                                <h3 class="font-size">Total Recovered </h3>
                            </a-col>
                            <a-col :span="10"> <img src="../static/recovered.png" alt="" width="100%"></a-col>
                        </a-row>
                        <a-row type="flex" justify="center">
                            <a-col>
                                <h1 class="stat-font mb-0">{{ covidDetails.Totalrecovered }}</h1>
                            </a-col>
                        </a-row>
                    </a-card>
                </a-col>
                <a-col :span="6">
                    <a-card class="tests">
                        <a-row>
                            <a-col :span="14">
                                <h3 class="font-size">Total Tests </h3>
                            </a-col>
                            <a-col :span="10"> <img src="../static/active-cases.png" alt="" width="100%"></a-col>
                        </a-row>
                        <a-row type="flex" justify="center">
                            <a-col>
                                <h1 class="stat-font mb-0">{{ covidDetails.Totaltests }}</h1>
                            </a-col>
                        </a-row>
                    </a-card>
                </a-col>
            </a-row>
            <a-row class="mx-5" :gutter="[10, 10]">
                <a-col :span="6" :offset="9">
                    <a-card class="critical">
                        <a-row>
                            <a-col :span="14">
                                <h3 class="font-size">Critical Casese </h3>
                            </a-col>
                            <a-col :span="10"> <img src="../static/critical.png" alt="" width="100%"></a-col>
                        </a-row>
                        <a-row type="flex" justify="center">
                            <a-col>
                                <h1 class="stat-font mb-0">{{ covidDetails.SeriousCritical }}</h1>
                            </a-col>
                        </a-row>
                    </a-card>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters("modules/coviddata", ["getCity"])
    },
    watch: {
        getCity: {
            immediate: true,
            deep: true,
            handler(val) {
                // debugger
                console.log(val);
                debugger
                if (val && val.length > 0) {
                    debugger
                    this.covidDetails.country = val[0].Country;
                    this.covidDetails.Totaldeaths = val[0].TotalDeaths;
                    this.covidDetails.Totalrecovered = val[0].TotalRecovered;
                    this.covidDetails.SeriousCritical = val[0].Serious_Critical;
                    this.covidDetails.Totaltests = val[0].TotalTests;
                    this.covidDetails.Totalcases = val[0].TotalCases;
                }
            },
        }
    },
    data() {
        return {
            covidDetails: {
                Totaldeaths: '',
                Totalrecovered: '',
                SeriousCritical: '',
                country: '',
                Totaltests: '',
                Totalcases: '',
            }
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/global/shortHandClasses.scss";

.db-h1 {
    background: #2C7F38;
}

.db-h1 h1 {
    color: white;
}

.confirm {
    background: #ABE9ED;
}

.deaths {
    background: #FFB4B1;
}

.recovered {
    background: #E0F3DF;
}

.tests {
    background: #B3DDEF;
}

.critical {
    background: #FFC1C1;
}

.ant-card-body {
    padding: 5px !important;
}

.stat-font {
    font-size: 40px;
    font-weight: 400 !important;
}

.dashboard {
    margin-top: 150px !important
}
</style>