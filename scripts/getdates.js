const year = new Date().getFullYear();
const lastModified = document.lastModified;

const copyrightText = &copy; ${year} Odeh  - Sylvester, Ibadan, Nigeria.<br><span class ="last-modified">Last Modification: ${lastModified}</span>;

const footerElement = document.getElementById('footer');

footerElement.innerHTML = copyrightText;