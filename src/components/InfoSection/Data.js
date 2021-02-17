export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About Me',
  headline: 'Who am I?',
  description:
    'Email: Jmontag1@pride.hofstra.edu',
    d2: 'My name is Jonathan Montag, I grew up in Syosset, New York and I have been coding since I was a senior in high school.  I am currently a senior at Hofstra University and will be graduating in May of 2021 with a bachelors of science in computer science.',
    d3: 'I really enjoy learning about AI/ML and then applying those techniques I learned to efficiently solve real world problems.  Asides from computer science, I have a strong passion for physics, specifically black hole research and other new findings about space phenomenon.',
    d4: 'Hobbies: Coding projects with friends, Snowboarding, Football, Lacrosse ',
    buttonLabel: 'Technologies',
  imgStart: false,
  img: require('../../images/space1.svg').default,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
  where:'discover'
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Technologies',
  headline: 'Whats in my toolbox?',
  description:'Proficient in: Python, JavaScript, ReactJS, Pandas, NumPy, Matplotlib HTML & CSS, Git & Git-Hub ',
  d2: 'Familiar with: C++, Java, Rust, Scheme, Flask, SQL, Heroku, AWS S3, DynamoDB, MongoDB ',
  buttonLabel: 'Projects',
  imgStart: true,
  img: require('../../images/tech.svg').default,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true,
  where: 'services'
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Experience',
  headline: '',
  description:
    "BankRoll, Co-Founder",
  d2: 'RationalAI, Software Engineer Intern',  
  d3: 'Hofstra University, Software Engineer, Research in AI/ML', 
  d4: 'IdeaHUb Startup Incubator, Product Development Engineer', 
  d5: '', 
  d6: '', 
  buttonLabel: 'Back To Top',
  imgStart: false,
  img: require('../../images/aws.svg').default,
  alt: 'Papers',
  dark: false,
  primary: false,
  darkText: true,
  where: 'home'
};
