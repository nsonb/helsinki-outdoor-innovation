import Axios from "axios";

const baseURL = 'http://www.hel.fi/palvelukarttaws/rest/v4/';

//Test function that logs the names of everything
export const getEverything = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=819+317+320+321+480+389+786+438+802+81+203+349+391+399+580+629+166+574+578+322+54+212+213+186+198+129+194+375+409+306+736+376+190+318+348+364+191+413+425+434+540+582+783+52+53+192+307+193+542+666+350+810+173+175+573+47+235+406+407+514+695+169+401+415+499+538+539+630+737+125+205+331+392+495+511+585+700+817+818+677+451+530+643+777+426+684+730+731+728+240+365+414+698+721+734+769+158+243+442+458+581+733+743+791+142*239+142*256+142*309+142*577+239+256+256+309+390+577+209+437+576+887+537+814')
    .then(res => {
        res.data.forEach(e => {
            e.name_en ? console.log(e.name_en) : console.log(e.name_fi);
        });
        return res.data;
    })
    .catch(error => {
        console.log(error);
    })
}


//29.10. error 400, waiting couple of days in case it's maintenance etc again
export const getOntologyNames = () => {
    const included = [819, 317, 320, 321, 480, 389, 786, 438, 802, 629, 322, 212, 213, 306, 736, 376, 318, 348, 364, 191, 413, 425, 434, 540, 582, 783, 192, 307, 193, 542, 666, 810, 173, 175, 573, 47, 235, 406, 407, 514, 695, 169, 401, 415, 499, 538, 539, 630, 737, 125, 205, 331, 392, 495, 511, 585, 700, 817, 818, 677, 451, 530, 643, 777, 426, 684, 730, 731, 728, 240, 365, 414, 698, 721, 734, 769, 158, 243, 442, 458, 581, 733, 743, 791, 142*239, 142*256, 142*309, 142*577, 239, 256, 256, 309, 390, 577, 209, 437, 576, 887, 537, 814]
    return Axios.get(baseURL + 'ontologynames/')
    .then(res => {
        console.log(res)
        return res.data;
    })
    .catch(error => {
        console.log(error);
    })
}

//29.10. error 400, waiting couple of days in case it's maintenance etc again
export const getOntologyTrees = () => {
    const included = [819, 317, 320, 321, 480, 389, 786, 438, 802, 629, 322, 212, 213, 306, 736, 376, 318, 348, 364, 191, 413, 425, 434, 540, 582, 783, 192, 307, 193, 542, 666, 810, 173, 175, 573, 47, 235, 406, 407, 514, 695, 169, 401, 415, 499, 538, 539, 630, 737, 125, 205, 331, 392, 495, 511, 585, 700, 817, 818, 677, 451, 530, 643, 777, 426, 684, 730, 731, 728, 240, 365, 414, 698, 721, 734, 769, 158, 243, 442, 458, 581, 733, 743, 791, 142*239, 142*256, 142*309, 142*577, 239, 256, 256, 309, 390, 577, 209, 437, 576, 887, 537, 814]
    return Axios.get(baseURL + 'ontologytree/')
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.log(error);
    })
}

export const getDogActivities = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=317+320+321+480+322+318')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getToilets = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=819')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getPlaygrounds = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=389')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}
export const getParks = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=786+438+158+243+442+458++581+733+743+791')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getSkating = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=629+630')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getArchery = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=212+213')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getClimbing = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=736+306')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getDownhillSki = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=376')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getSki = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=318+191+192+307+193')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

//These two should be somehow connected
export const getTrailsAndTracks = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=348+364+413+581+733+743+791+582')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}
export const getCampingAndLodges = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=365+698+721+734+414')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getBiking = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=425+540+542+538+539')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getBoatSports = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=434+783+677+451+530+643+769')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getOrienteering = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=666+193+542')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getAthletics = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=810+817+818')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getGolf = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=173+175+573')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getIceSkate = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=47+235+406+407+514+695')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getDiscGolf = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=169')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getOutdoorGyms = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=401+415+737')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getParkour = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=499')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getAllBallgameCourts = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=125+205+331+392+495+511+700')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return [];
    })
}

export const getBeachVolley = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=125')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return [];
    })
}

export const getFootball = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=205')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return [];
    })
}

export const getBasketball = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=331')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return [];
    })
}

export const getVolleyball = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=392')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return [];
    })
}

export const getBallFields = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=495')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return [];
    })
}

export const getBaseball = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=511')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return [];
    })
}

export const getTennis = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=700')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return [];
    })
}

export const getRollerHockey = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=585')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getSwimming = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=426+684+730+731+728')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getWaterSki = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=777')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getFishing = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=240')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getServices = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=142*239+142*256+142*309+142*577+239+256+309+390+577')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getTransport = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=209+437+576')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}

export const getParking = () => {
    return Axios.get(baseURL + 'unit/?ontologyword=887+537+814')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
        return []
    })
}