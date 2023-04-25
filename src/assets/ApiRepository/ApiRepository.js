import AdvicesPublicRepository from "../ApiRepository/artesomosApi/AdvicesPublicRepository";
import AdvicesDetailPublicRepository from "../ApiRepository/artesomosApi/AdvicesDetailPublicRepository.js";
import QuienesSomosPublicRepository from "./artesomosApi/QuienesSomosPublicRepository";

export default class ApiRepository {

    api;

    constructor(apiToCharge) {
        this.api = apiToCharge
        this.chooseApi()
    }

    chooseApi() {
        if(this.api === "advices") return new AdvicesPublicRepository;
        if(this.api === "advicedetail") return new AdvicesDetailPublicRepository;
        if(this.api === "quienesSomos") return new QuienesSomosPublicRepository;
        

    }
}