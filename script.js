let button = document.getElementById('test');
button.onclick = () => {
    let g =new Goverify();
    g.test();
}

class Goverify{

test(){
let target = document.getElementById('search-query').value;
let depts = 'eskom.co.za,daff.gov.za,dac.gov.za,education.gov.za,policesecretariat.gov.za,doc.gov.za,cogta.gov.zasites/cogtapub,dcs.gov.za,dod.mil.za,economic.gov.za,energy.gov.za,environment.gov.za,gcis.gov.za,doh.gov.za,dhet.gov.za,home-affairs.gov.za,dhs.gov.za,ipid.gov.za,dirco.gov.za,justice.gov.za,labour.gov.zaDOL/,dmv.gov.za,dmr.gov.za,treasury.gov.za,thensg.gov.za,treasury.gov.za,judiciary.org.za,thepresidency-dpme.gov.za,dpe.gov.za,dpsa.gov.za,psc.gov.za,publicworks.gov.za,ruraldevelopment.gov.za,dst.gov.za,dsd.gov.za,saps.gov.za,sars.gov.za,dsbd.gov.za,ssa.gov.za,srsa.gov.za,statssa.gov.za,dtps.gov.za,tourism.gov.za,thedti.gov.za,dta.gov.za,transport.gov.za,dwa.gov.za,wcpd.gov.za,thepresidency.gov.za';
let depts_array = depts.split(',');
if(depts_array.indexOf(target.split('@')[1]) > -1){
document.getElementById('vnv').setAttribute('src', 'valid.png');
}else{
document.getElementById('vnv').setAttribute('src', 'invalid.png');
let company = this.checkGov(target, depts_array);
if(company !== 'no match'){
    document.getElementById('submit-to').innerText = `Notify ${company}?`;
}
}
}

checkGov(email, depts){
for(let i = 0; i < depts.length; i++){
    let comp;
    let gov_mail = depts[i];
    if(gov_mail.indexOf('.gov.za') > -1){
        comp = gov_mail.replace('.gov.za', '');
        if(email.indexOf(comp) > -1){
            return comp;
        }else{
            return 'no match';
        }
    }else if(gov_mail.indexOf('.co.za') > -1){
        comp = gov_mail.replace('.co.za', '');
        if(email.indexOf(comp) > -1){
            return comp;
        }else{
            return 'no match';
        }
    }
}
}

}
