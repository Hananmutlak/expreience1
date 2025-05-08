const API_BASE_URL = 'http://localhost:5000/api/experiences';

// جلب جميع الخبرات
export async function getAllExperiences() {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching experiences:', error);
    throw error;
  }
}

// إضافة خبرة جديدة
export async function addExperience(experience) {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(experience),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error adding experience:', error);
    throw error;
  }
}

// حذف خبرة
export async function deleteExperience(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error deleting experience:', error);
    throw error;
  }
}