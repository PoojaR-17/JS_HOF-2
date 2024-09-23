let subjectsHash = {
    1: "Javascript",
    2: "HTML",
    3: "CSS",
    4: "Java",
    5: "Rust",
  };
  
  let students = [
    { id: 1, name: "Prateek", subjectID: 5 },
    { id: 2, name: "Yogesh", subjectID: 2 },
    { id: 3, name: "Nrupul", subjectID: 4 },
    { id: 4, name: "Prateek", subjectID: 1 },
  ];
  
  let newobj = {};
  
  students.forEach(student => {
    let studentName = student.name;
    let subject = subjectsHash[student.subjectID];
    
    if (!newobj[studentName]) {
      newobj[studentName] = []; 
    }
    
    newobj[studentName].push(subject); 
  });
  
  console.log(newobj);
  
  function voterResults(voters) {
    
    const result = {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    };
  
  
    voters.forEach((voter) => {
      const { age, voted } = voter;
  
     
      if (age >= 18 && age <= 25) {
        result.numYoungPeople++; 
        if (voted) result.numYoungVotes++; 
      } else if (age >= 26 && age <= 35) {
        result.numMidsPeople++; 
        if (voted) result.numMidVotesPeople++;
      } else if (age > 35) {
        result.numOldsPeople++;
        if (voted) result.numOldVotesPeople++; 
      }
    });
  
    return result;
  }
  

  const results = voterResults(voters);
  console.log(results);
  
  function countIceCreamFlavors(data) {
    
    const flavorCount = {};
  
    
    data.forEach((person) => {
    
      person.favoriteIceCreams.forEach((flavor) => {
        
        if (flavorCount[flavor]) {
          flavorCount[flavor]++;
        } else {
          flavorCount[flavor] = 1;
        }
      });
    });
  
    return flavorCount;
  }

  const flavorCounts = countIceCreamFlavors(data);
  console.log(flavorCounts);
  