const cardsJSON = '[{"name": "Paolo Maldini","jobTitle": "Front End Developer","company": "Web Weavers","experience": "3 years","school": "University of Washington","major": "Marketing","email": "paolo@example.com","linkedInUrl": "paolo.linkedinprofile.com","codeLanguages": ["HTML", "CSS", "JavaScript", "Node", "Express"]},{"name": "Barbara Bonansea","jobTitle": "Software Engineer","company": "Excellence in the Cloud","experience": "12 years","school": "University of Southern California","major": "Computer Science","email": "barbara@example.com","linkedInUrl": "barbara.linkedinprofile.com","codeLanguages": ["HTML", "JavaScript", "C", "Go"]},{"name": "Javier Hernandez","jobTitle": "User Experience Engineer","company": "Web Sites and More","experience": "5 years","school": "Seattle University","major": "Performing Arts","email": "javier@example.com","linkedInUrl": "javier.linkedinprofile.com","codeLanguages": ["HTML", "CSS"]},{"name": "Maribel Dominguez","jobTitle": "Front End Engineer","company": "Bits and Bytes","experience": "6 years","school": "University of Washington","major": "Mechanical Engineering","email": "maribel@example.com","linkedInUrl": "maribel.linkedinprofile.com","codeLanguages": ["HTML", "CSS", "JavaScript", "React", "Vue", "Redux"]}]'

const cards = JSON.parse(cardsJSON);

const container = document.querySelector('.template-hook');

cards.forEach(function(el) {
  let cardElement = document.createElement('article');
  cardElement.className = 'card';

  // Left section (head shot image & job title)
  let leftElement = document.createElement('section');
  leftElement.className = 'headshot';
  leftElement.innerHTML = `
    <img src="./img/headshot.jpg" class="rounded" alt="${el.name}">
    <h2>${el.name}</h2>
    <p class="title">${el.jobTitle}</p>`;

  cardElement.append(leftElement);

  // Right (description section)
  let rightElement = document.createElement('section');
  rightElement.className = 'description';
  rightElement.innerHTML = `
    <p><span class="key">Company:</span>${el.company}</p>
    <p><span class="key">Experience:</span>${el.experience}</p>
    <p><span class="key">School:</span>${el.school}</p>
    <p><span class="key">Major:</span>${el.major}</p>`;

  // language list: Add a space after each comma
  let languageRaw = `${el.codeLanguages}`;
  let languageNew = languageRaw.replaceAll(",", ", ");
  let lanElement = document.createElement('p');
  lanElement.innerHTML = `<p><span class="key">Code Language:</span>` + languageNew;
  rightElement.append(lanElement);

  // email
  let emailElement = document.createElement('p');
  emailElement.innerHTML = `<span class="key">Email:</span><a>${el.email}</a>`;
  rightElement.append(emailElement);

  // linkedIn URL
  let spanLinkedInUrl = document.createElement('span');
  spanLinkedInUrl.className = 'linkedInUrl';
  spanLinkedInUrl.innerHTML = `<img src="./img/linkedin.svg"}><a>${el.linkedInUrl}</a>`;
  rightElement.appendChild(spanLinkedInUrl);

  cardElement.append(rightElement);

  // Finally, append card element
  container.append(cardElement);
});
