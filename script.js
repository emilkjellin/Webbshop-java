let korg = [];

function lägg_till_varukorg(vara_namn, vara_pris)
{
    let vara = 
    {
        namn: vara_namn,
        pris: vara_pris
        
       
    };
    korg.push(vara);
    visa_varukorg();
}
function visa_varukorg()
{
    let korgElement = document.getElementById('korg');
    korgElement.innerHTML = '';

    korg.forEach(function(vara) {
       
        let varaNamn = document.createElement('h4');
        varaNamn.textContent = vara.namn;
        
        let varaPris = document.createElement('p');
        varaPris.textContent = vara.pris;
       
       
        korgElement.appendChild(varaNamn);
        korgElement.appendChild(varaPris);
    });
    if (korg.length === 5)
    {
        korg.length = 4;
    }
}
function tömm_varukorg()
{
    korg.length = 0;
    visa_varukorg();
}
