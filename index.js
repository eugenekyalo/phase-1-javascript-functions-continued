// Function to create Saturday plans
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function to plan Monday activities
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // Function to wrap an adjective with flair
  function wrapAdjective(flair = "*") {
    // Return a function that takes an adjective and wraps it with flair
    return function(adjective = "special") {
      // Return a string with the adjective wrapped with the said flair
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); // Output: "You are a dedicated programmer"
  