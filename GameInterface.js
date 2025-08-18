'use strict';

const form = document.getElementById('setupForm');
const out = document.getElementById('output');
const clearBtn = document.getElementById('clear');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const weapons  = document.getElementById('weapons').value.trim();
  const health   = document.getElementById('health').value;
  const points   = document.getElementById('points').value;

  if (!username || !weapons || health === '' || points === '') {
    out.value = 'Please fill out all fields.';
    return;
  }

  const lines = [
    `User Name\t${username}`,
    `Weapons\t${weapons}`,
    `Health/Damage\t${health}`,
    `Point Total\t${points}`,
  ];

  out.value = lines.join('\n');
});

clearBtn.addEventListener('click', () => {
  form.reset();
  out.value = '';
  document.getElementById('username').focus();
});