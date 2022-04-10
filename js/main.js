(() => {
    let hotspot = document.querySelectorAll('.hotspot'),
        lightBox = document.querySelector('.lightbox'),
        lbClose = lightBox.querySelector('.close')
        brandInfo = document.querySelector('.brandInfo');

    let currentText = '';
    
    const brandText = [
        `"Old Spice" has a unique refreshing scent. Jacobsen, the founder of Carlsberg, and William Shultz, the founder of the deodorants company 'Old Spice' invented this flavour together, so that people who drink it won't have to deal with the odour of alcohol afterwards. `,

        `Old Spice's brewing technique includes traditions that have been passed down from generation to generation and date back to the Royal Danish Court.`,

        `Traditions tested by time combined with new technologies of concealing the alcohol scent. This is what 'Old Spice' is all about.`
    
    ]
    function showLightbox() {
        lightBox.classList.add('show-lightbox');
        getText(this.dataset.offset);
    }

    function closeLightbox() {
        lightBox.classList.remove('show-lightbox');
    }

    function getText(index) {
        brandInfo.textContent = brandText[index];
    }
    
    hotspot.forEach(hotspot => hotspot.addEventListener('click', showLightbox));

    lbClose.addEventListener('click', closeLightbox);
    
    
    })();