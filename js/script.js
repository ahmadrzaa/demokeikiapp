function changeLanguage(language) {
  // Check if the language exists in the translations object
  if (translations.hasOwnProperty(language)) {
      // Retrieve all elements with the data-translate attribute
      var elements = document.querySelectorAll('[data-translate]');
      // Iterate over each element
      elements.forEach(function(element) {
          // Retrieve the translation key from the data-translate attribute
          var key = element.getAttribute('data-translate');
          // Update the text content of the element with the translation
          element.textContent = translations[language][key];
      });
  } else {
      console.error('Translation not available for selected language:', language);
  }
}

// Language translations
const translations = {
  'English': {
      'mainTitle': 'Choose the age of your child',
      'subtitle': 'to create personal learning plan',
      'age0-2': 'Child\'s age: 0-2',
      'age3-4': 'Child\'s age: 3-4',
      'age5-6': 'Child\'s age: 5-6',
      'age7plus': 'Child\'s age: 7+',
      'terms': 'Terms of use',
      'privacy': 'Privacy Policy',
      'cookie': 'Cookie Policy',
      'subscription': 'Subscription Terms',
      'contact': 'Contact us'
  },
  'Arabic': {
      // Add Arabic translations
  },
  'French': {
      // Add French translations
  },
  'Spanish': {
      // Add Spanish translations
  }
};

// Open side panel
function openSidePanel() {
  document.getElementById('side-panel').style.width = '250px';
}

// Close side panel
function closeSidePanel() {
  document.getElementById('side-panel').style.width = '0';
}

// Change language
function changeLanguage(language) {
  // Check if the language exists in translations
  if (translations.hasOwnProperty(language)) {
      // Get all elements with data-translate attribute
      var elements = document.querySelectorAll('[data-translate]');
      // Loop through each element
      elements.forEach(function(element) {
          // Get translation key
          var key = element.dataset.translate;
          // Set translated text
          element.textContent = translations[language][key];
      });
  } else {
      console.error('Translation not available for selected language:', language);
  }
}
