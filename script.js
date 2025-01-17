// Modal Functionality
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('certificatesModal');
    const btn = document.getElementById('viewCertificates');
    const span = document.getElementsByClassName('close')[0];

    // Open the modal
    btn.onclick = function () {
        modal.style.display = 'block';
    };

    // Close the modal
    span.onclick = function () {
        modal.style.display = 'none';
    };

    // Close the modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
