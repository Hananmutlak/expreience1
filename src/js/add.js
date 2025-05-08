import { addExperience } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('experience-form');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const experience = {
      company: document.getElementById('company').value,
      role: document.getElementById('role').value,
      duration: document.getElementById('duration').value,
      description: document.getElementById('description').value
    };
    
    try {
      await addExperience(experience);
      alert('Erfarenheten har lagts till!');
      form.reset();
      window.location.href = 'index.html';
    } catch (error) {
      alert('Ett fel inträffade när erfarenheten skulle läggas till.');
      console.error(error);
    }
    
  });
});