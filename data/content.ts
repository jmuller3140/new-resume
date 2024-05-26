export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Senior Software Engineer (Contractor) at Walmart",
        subTitle: "Manhattan, NY",
        date: "January 2023 - Present",
        description: "Joined Walmart Global Tech to enhance web application performance and web vital metrics across the ecommerce site. Core toolset: JavaScript, React.js, NextJS, Typescript, Git, VS Code. Responsibilities included implementing web vital tracking, architectural decisions, and cross-functional coordination for optimizations."
      },
      {
        title: "Lead Software Engineer at ClearMix",
        subTitle: "Manhattan, NY",
        date: "January 2022 - January 2023",
        description: "First senior software engineering hire at YCombinator Startup (S20). Built and architected flagship software, grew and trained the engineering team. Core toolset: JavaScript, React.js, Redux, NodeJS, Typescript, Git, VS Code, Basecamp, Github Actions, FullStory, AWS Cloudwatch, AWS SDK. Key contributions include shipping 4 production-level applications, leading sales team, and advising CEO and CTO on future directions."
      },
      {
        title: "Software Engineer III at PayPal",
        subTitle: "Philadelphia, PA",
        date: "February 2021 - January 2022",
        description: "Part of PayPal’s credit division, developing software using Agile methodologies for PayPal Business Loan, PayPal Paycheck Protection Program, and PayPal LoanBuilder. Core toolset: JavaScript, React.js, Redux, NodeJS, Typescript, Git, VS Code, Jira, BitBucket, DataDog, FullStory, AWS Cloudwatch, TeamCity, Octopus, Salesforce. Developed the PayPal Paycheck Protection customer portal, triaged production issues, and promoted testing philosophies."
      },
      {
        title: "Front-end Engineer at Tablet Hotels",
        subTitle: "Manhattan, NY",
        date: "September 2019 - February 2021",
        description: "Developed software using Agile methodologies for Tablet Hotels website. Core toolset: JavaScript, React.js, Redux, Git, VS Code, Jira, BitBucket. Contributions included developing pages for 'Take Me Away' feature, migrating legacy codebase to React and ES6, and implementing test suites."
      },
      {
        title: "Front-end Engineer at Buildit @ Wipro Digital",
        subTitle: "Brooklyn, NY",
        date: "November 2018 - August 2019",
        description: "Member of a software engineering consultancy, delivering sustainable and scalable software platforms using Agile methodologies. Core toolset: JavaScript, React.js, Redux, Git, VS Code. Key projects included creating an internal recruiting software platform and an internal software platform for class registrations."
      }
    ]
  },
  {
    title: "Education",
    items: [
      {
        title: "Certificate in Philosophy",
        subTitle: "St. John’s University, Queens, NY",
        date: "Graduation: May 2017",
        description: "Cumulative GPA: 3.98"
      },
      {
        title: "Bachelor’s Degree in Information Science",
        subTitle: "University of Pittsburgh, Pittsburgh, PA",
        date: "Graduation: April 2014",
        description: "Concentrated Area in Computer Science. Cumulative GPA: 3.425"
      }
    ]
  },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
