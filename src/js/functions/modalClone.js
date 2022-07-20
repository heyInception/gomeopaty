'use strict'
document.addEventListener("DOMContentLoaded", function(event) {
    const sertImg = document.querySelectorAll('.sert__item [data-graph-path]');
    Object.values(sertImg).forEach(key => {
        key.addEventListener('click', function() {
                // Add Attribute
                const sertBlock = document.querySelector('.graph-modal__clone')
                const valueAtt = key.getAttribute('data-graph-path')
                sertBlock.setAttribute('data-graph-target', valueAtt)
                    // Clone block
                let blockClone = key.cloneNode(true)
                const modalBlock = document.querySelector('.graph-modal__clone .graph-modal__content')
                modalBlock.appendChild(blockClone);
            })
            // Remove clone block
        clear()
    })

    function clear() {
        const closeModal = document.querySelector('.graph-modal__clone [data-close]')
        const sertPic = document.querySelector('.graph-modal__clone .graph-modal__content');
        const modal = document.querySelector('.graph-modal')
        closeModal.addEventListener('click', function() {
            sertPic.innerHTML = ''
        })
        modal.addEventListener('click', function() {
            sertPic.innerHTML = ''
        })
    }
});
