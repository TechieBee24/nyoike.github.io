const navbar = document.getElementById('navbar')

function openSidebar(){
    navbar.classList.add('show')
}

function closeSidebar(){
    navbar.classList.remove('show')
}
const links = document.querySelectorAll('nav a')
links.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar()
    })
})

//backend
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
  
    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
  
    fetch('http://localhost:8080/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(result => {
        alert("Message sent successfully!");
        console.log(result);
      })
      .catch(error => {
        console.error("There was a problem:", error);
        alert("Something went wrong.");
      });
  });
  