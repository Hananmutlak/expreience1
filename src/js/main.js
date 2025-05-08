import { getAllExperiences, deleteExperience } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const experiences = await getAllExperiences();
    renderExperiences(experiences);
  } catch (error) {
    showError('Ett fel inträffade vid hämtning av erfarenheter');
  }
});

function renderExperiences(experiences) {
  const container = document.getElementById('experiences-list');
  container.innerHTML = '';

  if (experiences.length === 0) {
    container.innerHTML = '<p>Inga erfarenheter har registrerats ännu</p>';
    return;
  }

  experiences.forEach(exp => {
    const experienceEl = document.createElement('div');
    experienceEl.className = 'experience-card';
    experienceEl.innerHTML = `
      <h3>${exp.company}</h3>
      <p><strong>Tjänst:</strong> ${exp.role}</p>
      <p><strong>Period:</strong> ${exp.duration}</p>
      <p>${exp.description}</p>
      <button class="delete-btn" data-id="${exp._id}">Ta bort</button>
    `;
    container.appendChild(experienceEl);
  });

  // Lägg till händelsehanterare för borttagningsknappar
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const id = e.target.getAttribute('data-id');
      try {
        await deleteExperience(id);
        e.target.closest('.experience-card').remove();
      } catch (error) {
        showError('Ett fel inträffadde vid borttagning av erfarenheten');
      }
    });
  });
}

function showError(message) {
  const errorEl = document.createElement('div');
  errorEl.className = 'error';
  errorEl.textContent = message;
  document.body.prepend(errorEl);
  setTimeout(() => errorEl.remove(), 3000);
}
