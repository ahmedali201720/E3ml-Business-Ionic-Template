customElements.define('modal-content', class ModalContent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

          <ion-content fullscreen>

              <ion-button class="header-button" fill="clear" onclick="dismissModal()">
                  <ion-icon class="header-icon" name="close-outline"></ion-icon>
                  Share App
              </ion-button>

              <div class="share-app-container">
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
            
          </ion-content>
        `;
    }
});

let currentModal = null;
const button = document.querySelector('#share-app');
button.addEventListener('click', createModal);

async function createModal() {
    if (currentModal == null) {
        const modal = await modalController.create({
            component: 'modal-content'
        });

        await modal.present();
        currentModal = modal;
    }

}

function dismissModal() {
    if (currentModal) {
        currentModal.dismiss().then(() => { currentModal = null; });
    }
}