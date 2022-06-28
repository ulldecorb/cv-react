export const showProfile = (e) => {
  const articles = document.getElementById('profile').children;
  for (let i = 0; i < articles.length; i += 1) {
    articles[i].style.display = 'none';
  }
  const id = e.target.id.split('-')[0];
  const node = document.getElementById(id);
  node.style.display = 'flex';
};

export const hideProfiles = (e) => {
  const { id } = e.target;
  const box = document.getElementById(id);
  box.style.display = 'none';
};
