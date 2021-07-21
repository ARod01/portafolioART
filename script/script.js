const pdf = document.querySelector('.about__pdf');
const close = document.querySelector('.about__pdf-close');
const viewPdf = document.querySelector('.about__pdf-viewPdf');

close.addEventListener( 'click', (e) =>{
    if(e.target !== true){
        viewPdf.classList.toggle('showPdf') 
        pdf.classList.toggle('show');
    }
})

const showPDF = () =>{
    pdf.classList.toggle('show');
    viewPdf.classList.toggle('showPdf')
}