




function changeStatus(statusId) {
  const statusElement = document.getElementById(`${statusId}`);
  const statusButton = document.querySelector(`#${statusId}-btn`);
  // const currentStatus = statusElement.textContent.trim();
  const currentStatus = statusElement.innerText;
  if (currentStatus === 'Published') {
      statusElement.innerText = 'Archived';
      statusButton.innerText = 'Draft';
  } else if (currentStatus === 'Archived') {
      statusElement.innerText = 'Drafted';
      statusButton.innerText = 'Publish';
  } else {
      statusElement.innerText = 'Published';
      statusButton.innerText = 'Archive';
  }
}

function addComment(commentId) {
  const commentsCount = parseInt(document.getElementById(commentId).textContent);
  document.getElementById(commentId).textContent = commentsCount + 1;
}

function simulateVisit(viewsId) {
  const viewsCount = parseInt(document.getElementById(viewsId).textContent);
  document.getElementById(viewsId).textContent = viewsCount + 1;
}