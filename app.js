const tips = [
  'Avoid screens 30 minutes before bed for better rest.',
  'Keep your bedroom cool and dark for deeper sleep.',
  'Try a 4-7-8 breathing cycle to wind down.',
  'Stick to a consistent bedtime—even on weekends.'
];

const button = document.getElementById('refresh');
const tip = document.getElementById('tip');

button.addEventListener('click', () => {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tip.textContent = `💤 ${randomTip}`;
});
