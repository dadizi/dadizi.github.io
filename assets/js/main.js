// 简单的灯箱效果
document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);
  
  galleryItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const img = item.querySelector('img');
      const caption = item.querySelector('.caption')?.textContent || '';
      
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <img src="${img.src}" alt="${img.alt}">
          ${caption ? `<p>${caption}</p>` : ''}
          <span class="close">&times;</span>
        </div>
      `;
      
      lightbox.style.display = 'flex';
      
      lightbox.querySelector('.close').addEventListener('click', () => {
        lightbox.style.display = 'none';
      });
    });
  });
  
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});
