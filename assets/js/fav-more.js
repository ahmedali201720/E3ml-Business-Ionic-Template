customElements.define('modal-content', class ModalContent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

          <ion-content fullscreen>

              <ion-button class="header-button" fill="clear" onclick="dismissModal()">
                  <ion-icon class="header-icon" name="close-outline"></ion-icon>
                  More Actions
              </ion-button>

              <div class="share-app-container">
                  <ion-label class="share-label">Share</ion-label>
                  <div class="share-button" fill="clear">
                      <img src="../assets/img/socialMedia/whatsapp.png">
                  </div>
                  <div class="share-button" fill="clear">
                      <img src="../assets/img/socialMedia/messenger.png">
                  </div>
                  <div class="share-button" fill="clear">
                      <img src="../assets/img/socialMedia/twitter.png">
                  </div>
                  <div class="share-button" fill="clear">
                      <img src="../assets/img/socialMedia/more.png">
                  </div>
                  <div class="share-button" fill="clear">
                      <img src="../assets/img/socialMedia/group.png">
                  </div>
              </div>
              <div class="action-container">
                   <ion-button fill="clear">Delete from favourites</ion-button>
              </div>
            
          </ion-content>
        `;
    }
});

let currentModal = null;
const link = document.querySelector('.more-link');
link.addEventListener('click', createModal);

async function createModal(e) {
    e.preventDefault();
    if (currentModal == null) {
        const modal = await modalController.create({
            component: 'modal-content'
        });

        await modal.present();
        currentModal = modal;
    }
    console.log("clicked")

}

function dismissModal() {
    if (currentModal) {
        currentModal.dismiss().then(() => { currentModal = null; });
    }
}