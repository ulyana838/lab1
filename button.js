let likeButtons = document.querySelectorAll('.likeButton');
let supportButtons = document.querySelectorAll('.supportButton');

// Создаем объект, который будет хранить информацию о том, были ли уже поставлены лайк и поддержка для каждого поста
let userActions = {};

likeButtons.forEach((likeButton) => {
  let postId = likeButton.getAttribute('data-post-id');
  let likeCountElement = likeButton.querySelector('.likeCount');

  // Добавляем обработчик события "click" для кнопки "Лайк"
  likeButton.addEventListener('click', () => {
    // Проверяем, был ли уже поставлен лайк для этого поста
    if (userActions[postId] && userActions[postId].like) {
      // Если лайк уже поставлен, то удаляем лайк и обновляем счетчик лайков
      delete userActions[postId].like;
      let currentLikeCount = parseInt(likeCountElement.innerHTML);
      likeCountElement.innerHTML = currentLikeCount - 1;

    } else {
      // Если лайк еще не поставлен, то добавляем лайк и обновляем счетчик лайков
      userActions[postId] = {
        like: true
      };
      let currentLikeCount = parseInt(likeCountElement.innerHTML);
      likeCountElement.innerHTML = currentLikeCount + 1;

    }
  });
});

supportButtons.forEach((supportButton) => {
  let postId = supportButton.getAttribute('data-post-id');
  let supportCountElement = supportButton.querySelector('.supportCount');

  // Добавляем обработчик события "click" для кнопки "Поддержать проект"
  supportButton.addEventListener('click', () => {
    // Проверяем, была ли уже поставлена поддержка для этого поста
    if (userActions[postId] && userActions[postId].support) {
      // Если поддержка уже поставлена, то удаляем поддержку и обновляем счетчик поддержки
      delete userActions[postId].support;
      let currentSupportCount = parseInt(supportCountElement.innerHTML);
      supportCountElement.innerHTML = currentSupportCount - 1;

    } else {
      // Если поддержка еще не поставлена, то добавляем поддержку и обновляем счетчик поддержки
      userActions[postId] = {
        support: true
      };
      let currentSupportCount = parseInt(supportCountElement.innerHTML);
      supportCountElement.innerHTML = currentSupportCount + 1;

    }
  });
});
