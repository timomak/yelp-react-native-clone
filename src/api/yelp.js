import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer C6dyWlVsqHH1QVPUIG3tyHHyRimYF2KIHBnfl5xSy_975sNxdfejdCrZVJGDoRQyfvfWC3oTCMydO2JY1YLd87dS0KETvNRJErhq_WM3hmU_qnkj6bEWeuHV7CvEX3Yx",
  },
});
