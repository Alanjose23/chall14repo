const logout = async function() {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    if (!response) {
      res
        .status(400)
        .json({ message: 'Failed to log out, no response' });
      return;
    }
    alert('Failed to log out');
  }
};

document.querySelector('#logout-link').addEventListener('click', logout);
