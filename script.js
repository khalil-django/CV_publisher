// Function to show project content
function showProject(projectId) {
  // Hide all projects
  var projects = document.querySelectorAll('.hidden');
  for (var i = 0; i < projects.length; i++) {
    projects[i].style.display = 'none';
  }
  
  // Show the selected project
  var project = document.getElementById(projectId);
  project.style.display = 'block';
}
