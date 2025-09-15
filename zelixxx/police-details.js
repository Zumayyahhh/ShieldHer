document.addEventListener('DOMContentLoaded', () => {
    const contactsContainer = document.getElementById('contacts-container');
    const contactsHeading = document.getElementById('contacts-heading');
    const keralaPoliceBtn = document.getElementById('kerala-police-btn');
    const pinkPoliceBtn = document.getElementById('pink-police-btn');

    const emergencyContacts = [
        { name: 'Thiruvananthapuram', keralaPolice: '0471-2331843', pinkPolice: '1515' },
        { name: 'Kollam', keralaPolice: '0474-2746000', pinkPolice: '1515' },
        { name: 'Alappuzha', keralaPolice: '0477-2251166', pinkPolice: '1515' },
        { name: 'Pathanamthitta', keralaPolice: '0468-2222100', pinkPolice: '1515' },
        { name: 'Kottayam', keralaPolice: '0481-2562130', pinkPolice: '1515' },
        { name: 'Idukki', keralaPolice: '04862-222046', pinkPolice: '1515' },
        { name: 'Ernakulam', keralaPolice: '0484-2391000', pinkPolice: '1515' },
        { name: 'Thrissur', keralaPolice: '0487-2424193', pinkPolice: '1515' },
        { name: 'Palakkad', keralaPolice: '0491-2538600', pinkPolice: '1515' },
        { name: 'Malappuram', keralaPolice: '0483-2734999', pinkPolice: '1515' },
        { name: 'Kozhikode', keralaPolice: '0495-2761000', pinkPolice: '1515' },
        { name: 'Wayanad', keralaPolice: '04936-202350', pinkPolice: '1515' },
        { name: 'Kannur', keralaPolice: '0497-2700388', pinkPolice: '1515' },
        { name: 'Kasaragod', keralaPolice: '04994-220202', pinkPolice: '1515' }
    ];

    function renderContacts(type) {
        contactsContainer.innerHTML = '';
        emergencyContacts.forEach(contact => {
            const card = document.createElement('div');
            card.className = 'contact-card';
            if (type === 'pink') {
                card.innerHTML = `<h3>${contact.name}</h3><p class="phone-number">📞 ${contact.pinkPolice}</p>`;
            } else {
                card.innerHTML = `<h3>${contact.name}</h3><p class="phone-number">📞 ${contact.keralaPolice}</p>`;
            }
            contactsContainer.appendChild(card);
        });
    }

    keralaPoliceBtn.addEventListener('click', () => {
        contactsHeading.textContent = 'Kerala Police Helplines by District';
        keralaPoliceBtn.classList.add('active');
        pinkPoliceBtn.classList.remove('active');
        renderContacts('kerala');
    });

    pinkPoliceBtn.addEventListener('click', () => {
        contactsHeading.textContent = 'Pink Police Helplines by District';
        pinkPoliceBtn.classList.add('active');
        keralaPoliceBtn.classList.remove('active');
        renderContacts('pink');
    });

    renderContacts('kerala'); // Default view
});