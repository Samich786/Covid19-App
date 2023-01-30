import axios from "axios";
export default {
     getCountryReport({commit},payload) {
        debugger
    const options = {
      method: 'GET',
      url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/${payload.country}/${payload.iso}`,
      headers: {
        'X-RapidAPI-Key': 'fc6b92b084msh1532b9d8e93b0adp121a36jsnfa6e78d837b7',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      
        commit('Get_City', response.data)
    }).catch(function (error) {
        console.error(error);
    });
   
    
       
    }
}
    
