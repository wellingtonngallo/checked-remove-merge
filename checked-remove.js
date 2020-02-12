var mergeButton = document.querySelector('.aui-button-primary.merge-pull-request');
  
if (mergeButton) {
  document.querySelector('.aui-button-primary.merge-pull-request').addEventListener('click', function() {
    let getElement = document.querySelector('#delete-branch-checkbox');
    let refBranch = document.querySelector('.ref.branch').textContent;
    
    if (getElement && (refBranch !== "develop" || refBranch !== "staging" || refBranch !== "master")) {
      getElement.checked = true;
    }
  });
}