// Function to show the correct page and hide others
function openPage(pageName) {
    // Hide all sections
    const sections = document.querySelectorAll('.content > div, #profile, #questionnaire, #history, #personalized, #settings');
    sections.forEach(section => section.style.display = 'none');
    
    // Show the selected section
    document.getElementById(pageName).style.display = 'block';
}

    // Toggle chat box visibility
    function toggleChat() {
      var chatBox = document.getElementById("chat-box");
      if (chatBox.style.display === "none" || chatBox.style.display === "") {
        chatBox.style.display = "block";
      } else {
        chatBox.style.display = "block";
      }
    }
/*
// By default, show the dashboard on page load
document.addEventListener('DOMContentLoaded', function() {
    openPage('dashboard'); // Default page
    <script>
  async function submitQuery() {
    query = document.getElementById('search-input').value;

    const response = await fetch('http://localhost:3000/chatgpt-query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: query })
    });

    const data = await response.json();
    document.getElementById('response-output').innerText = data.reply;
  }
</script>
});
*/