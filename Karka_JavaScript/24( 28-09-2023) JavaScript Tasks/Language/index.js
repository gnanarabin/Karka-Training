function helloWorld(language = "en") {
    const greetings = {
      en: "Hello, World",
      es: "Hola, Mundo",
      de: "Hallo, Welt",
      // Add more languages and greetings here
    };
  
    return greetings[language] || "Hello, World";
  }
  
  // Call the function for each supported language and log the result
  const languages = ["en", "es", "de", "fr"]; // Add more languages as needed
  languages.forEach((lang) => {
    const greeting = helloWorld(lang);
    console.log(`${lang}: ${greeting}`);
  });
  