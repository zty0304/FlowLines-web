function copyToClipboard() {
  const bibtex = document.getElementById('bibtex');
  const text = bibtex.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>Copied!</span>';
    setTimeout(() => {
      btn.innerHTML = originalText;
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}
