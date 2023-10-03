// Henkilöluokka

class Henkilo {
    constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
        this.etunimet = etunimet;
        this.sukunimi = sukunimi;
        this.kutsumanimi = kutsumanimi;
        this.syntymavuosi = syntymavuosi;
    }

    // SET-funktiot
    set setEtunimet(etunimet) {
        this.etunimet = etunimet;
    }
    set setSukunimi(sukunimi) {
        this.sukunimi = sukunimi;
    }
    set setKutsumanimi(kutsumanimi) {
        this.kutsumanimi = kutsumanimi;
    }
    set setSyntymavuosi(syntymavuosi) {
        this.syntymavuosi = syntymavuosi;
    }

    // GET-funktiot
    get getEtunimet() {
        return this.etunimet;
    }
    get getSukunimi() {
        return this.sukunimi;
    }
    get getKutsumanimi() {
        return this.kutsumanimi;
    }
    get getSyntymavuosi() {
        return this.syntymavuosi;
    }

}

// Urheilija, joka perii luokan hekilö
class Urheilija extends Henkilo {
    constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi, omapaino, laji, saavutukset) {
        super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
        this.omapaino = omapaino;
        this.laji = laji;
        this.saavutukset = saavutukset;
    }

    // SET-funktiot
    set setOmapaino(omapaino) {
        this.omapaino = omapaino;
    }
    set setLaji(laji) {
        this.laji = laji;
    }
    set setSaavutukset(saavutukset) {
        this.saavutukset = saavutukset;
    }

    // GET-funktiot
    get getOmapaino() {
        return this.omapaino;
    }
    get getLaji() {
        return this.laji;
    }
    get getSaavutukset() {
        return this.saavutukset;
    }
}

console.log("***************************");
console.log("URHEILIJA-luokan esiintymiä");
console.log("***************************");
console.log();

const urheilija1 = new Urheilija("Matti","Meikäläinen","Masa","1950","100 kg", "Moukari","Olympialaiset 1972: kultaa");


console.log(urheilija1);
console.log();
// Päivitetään Matin paino
urheilija1.setOmapaino = "120 kg";
console.log("Päivitetään Matin paino 120 kiloon.");
console.log();

console.log(urheilija1);
console.log();

console.log();
const urheilija2 = new Urheilija("Ursula Airi","Urheilija","Ursula","1900","60 kg", "Kävely 15 km","Kalevankisat 1922: hopeaa");


console.log(urheilija2);
console.log();