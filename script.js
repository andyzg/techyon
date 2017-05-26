document.addEventListener('DOMContentLoaded', function(e) {

  var onProjectClick = function(e) {
    this.innerHTML = 'This is a project!';
  };

  var projects = document.getElementsByClassName('project');
  for (var i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', onProjectClick);
  }

});
