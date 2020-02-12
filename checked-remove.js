var mergeButton = document.querySelector('.aui-button-primary.merge-pull-request');
  
if (mergeButton) {
  document.querySelector('.aui-button-primary.merge-pull-request').addEventListener('click', function() {
    let getElement = document.querySelector('#delete-branch-checkbox');
    
    if (getElement) {
      getElement.checked = true;
    }
  });
}