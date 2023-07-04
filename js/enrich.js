document.addEventListener('DOMContentLoaded',()=>{
    let q1s = document.querySelectorAll('.qstnsym');
    let hidstfs = document.querySelectorAll('.hidstf');
    hidstfs.forEach(hidstf => {
        hidstf.classList.add('hide');
    })

    q1s.forEach(q1 => {
        q1.onclick = ()=> {
            let its_par = q1.parentElement.parentElement;
            let hidstf = its_par.querySelector('.hidstf');
            if (hidstf.classList.contains('hide')){
                hidstf.classList.remove('hide');
                hidstf.classList.add('show');
                q1.innerHTML = '-';
            }else{
                hidstf.classList.remove('show');
                hidstf.classList.add('hide');
                q1.innerHTML = '+';
            }
        }
    })

    let tbda = document.querySelector('#tbda');
    let vision = document.querySelector('#vision');
    let body = document.querySelector('body');
    let ex = document.querySelector('#tbda1');
    let ccl = document.querySelector('#ccl');
    let contact = document.querySelectorAll('.contact');
    let contact_form = document.querySelector('#contact_form');
    let bd = document.querySelector('#backdrop');
    let wrld_img = document.querySelector('#wri')

    tbda.style.display = 'none';
    contact_form.style.display = 'none';
    bd.style.display = 'none';

   
    vision.onclick = ()=>{
        if(tbda.style.display == 'none'){
            tbda.style.display = 'block';
            bd.style.display = 'block';
        }
    }

    ex.onclick = ()=>{
        if(tbda.style.display == 'block'){
            tbda.style.display = 'none';
            bd.style.display = 'none';
        }
    }
    contact.forEach(cont => {
        cont.onclick = ()=>{
            if(contact_form.style.display == 'none'){
                contact_form.style.display = 'block';
                bd.style.display = 'block';
            }
        }
    })
    ccl.onclick = ()=>{
        if(contact_form.style.display == 'block'){
            contact_form.style.display = 'none';
            bd.style.display = 'none';
        }
    }
    bd.onclick = ()=>{
        if(contact_form.style.display == 'block'){
            contact_form.style.display = 'none';
            bd.style.display = 'none';
        } else if(tbda.style.display == 'block'){
            tbda.style.display = 'none';
            bd.style.display = 'none';
        }
    }
    //wrld_img.classList.add('rotate');

    
})