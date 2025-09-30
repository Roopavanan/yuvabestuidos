// data/jobs.ts

export type JobStatus = "active" | "closed";

export interface Job {
  title: string;
  category: string;
  focus: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  experience: string;
  status: JobStatus; 

}

export const jobs: Job[] = [
  {
      title: "GenAI Senior Tech Lead",
      category: "AI/ML & Development",
      focus: "AI & Full Stack Development",
      description:
        "At Yuvabe, we’re not just building software, we’re shaping intelligent systems that serve both people and the planet. As a GenAI Senior Tech Lead, you’ll take ownership of end-to-end engineering efforts, drive product architecture, and work closely with a cross-functional team to bring applied AI solutions to life. This is a hands-on role for someone who’s eager to lead technically, grow into an Engineering Manager role, and contribute to platforms that matter. If you're excited about GenAI, cloud-native development, and building systems from the ground up, this role is for you.  As a GenAI Senior Tech Lead, you’ll take ownership of end-to-end engineering efforts, drive product architecture, and work closely with a cross-functional team to bring applied AI solutions to life. This is a hands-on role for someone who’s eager to lead technically, grow into an Engineering Manager role, and contribute to platforms that matter. If you're excited about GenAI, cloud-native development, and building systems from the ground up, this role is for you.",

      responsibilities: [
        "Lead the design and development of scalable, full-stack or managed service applications.",
        "Own architectural decisions, infrastructure planning, and core code contributions.",
        "Collaborate with AI/ML engineers to integrate GenAI and intelligent features into real products.",
        "Build and manage cloud-native deployments.",
        "Set coding standards, perform code reviews, and mentor junior engineers.",
        "Work closely with product, design, and domain experts to define and execute features",
        "Grow into an Engineering Manager role over time, including mentoring and managing a team.",
      ],
      requirements: [
        "Education - Bachelor’s in Computer Science, Engineering, or related field.",
        "7–10 years of experience in software engineering (strong full-stack or backend preferred).",
        "Proven experience owning end-to-end product development.",
        "Strong in cloud technologies, Docker/Kubernetes, microservices",
        "Hands-on experience with modern frameworks: JavaScript/TypeScript (React, Next.js, Node.js, etc.), Python",
        "Exposure to AI/ML, GenAI, ML Ops.",
        "Strong problem-solving and communication skills.",
        "Eager to grow into a leadership role over the next 12 months.",
      ],
      benefits: [
        "Competitive salary",
        "Growth path to Engineering Manager",
        "eBike and free lunch",
        "A purpose-driven team working at the intersection of AI and impact, where technology meets meaningful outcomes.",
      ],
      experience: "7-10 years",
      status: "active", 

    },
   {
      title: "Sales Head",
      category: "Sales & Business Development",
      focus: " Business Development and Client Acquisition",
      description:
        "As the Sales Head at Yuvabe Studios, you will spearhead our business development initiatives, focusing on expanding our client base and driving revenue growth. Your strategic vision and leadership will be pivotal in positioning Yuvabe as a leader in creative and sustainable solutions.",

      responsibilities: [
        "Strategic Planning: Develop and implement comprehensive sales strategies (Inside, Outside and Enterprise Sales) to achieve organizational objectives and revenue targets.",
        "Team Leadership: Lead, mentor, and develop a high-performing sales team, ensuring clear goal setting, performance tracking, and continuous professional growth.",
        "Market Analysis: Conduct thorough market research and competitive analysis to identify new business opportunities, trends, and potential clients.",
        "Client Relationship Management: Build and maintain strong relationships with key clients, partners, and stakeholders to drive business growth and brand reputation.",
        "Sales Execution: Drive the end-to-end sales process, from prospecting and lead generation to negotiation and closing deals.",
        "Performance Monitoring: Establish, track, and analyze sales KPIs to assess team performance and implement data-driven improvements.",
        "Collaboration: Work closely with marketing, product, and operations teams to align sales strategies with business goals and customer needs.",
        "Business Development: Identify new revenue streams, partnerships, and expansion opportunities for sustainable business growth.",
      ],
      requirements: [
        "Educational Background: Bachelor's degree in Business Administration, Marketing, Sales, or a related field. A Master’s degree (MBA) is preferred.",
        "Experience: Minimum 5+ years of proven experience in sales leadership roles, preferably within the creative, technology, or digital marketing sectors.",
        "Sales Expertise: Strong track record of achieving sales targets and managing high-value client accounts.",
        "Leadership Skills: Ability to lead, inspire, and manage a sales team effectively.",
        "Communication & Negotiation: Excellent interpersonal, communication, and negotiation skills to engage with stakeholders at all levels.",
        "Market Knowledge: Deep understanding of industry trends, market dynamics, and customer behavior.",
        "Analytical Skills: Proficiency in data analysis, CRM tools, and sales forecasting to drive informed decision-making.",
        "Time Management: Strong organizational skills with the ability to manage multiple priorities and deadlines.",
      ],
      benefits: [
        "Competitive salary",
        "eBike and free lunch",
        "Access to a mentor network",
      ],
      experience: "5+ years",
      status: "active",
    },

     {
      title: "Sales Executive",
      category: "Sales & Business Development",
      focus: " Client Acquisition and Revenue Growth",
      description:
        "As a Sales Executive at Yuvabe Studios, you will be a key player in driving business growth by acquiring new clients and managing relationships with existing ones. You will work closely with the Sales Head and contribute to achieving revenue targets through effective sales strategies and client engagement.",

      responsibilities: [
        "Inside Sales: Handle inbound sales inquiries, follow up on leads, and nurture potential clients through digital and remote channels.",
        "Lead Generation: Identify and reach out to potential clients through various channels, including networking, cold calling, and online research.",
        "Client Engagement: Build and maintain relationships with clients, understanding their needs and offering tailored solutions.",
        "Sales Execution: Conduct sales pitches, presentations, and negotiations to close deals successfully.",
        "Market Research: Stay updated on industry trends, competitor activities, and market demands to refine sales strategies.",
        "Sales Reporting: Track and report on sales performance, ensuring alignment with company goals.",
        "Collaboration: Work closely with marketing and operations teams to ensure smooth execution of client projects and services.",
        "Customer Support: Address client concerns and ensure a high level of satisfaction and retention.",
      ],
      requirements: [
        "Educational Background: Bachelor’s degree in Business Administration, Marketing, Sales, or a related field.",
        "Experience: Minimum 2+ years of experience in a sales or business development role, preferably in the creative, technology, or digital marketing sectors.",
        "Communication & Negotiation: Strong verbal and written communication skills, with the ability to persuade and influence decision-makers.",
        "Sales Acumen: Ability to identify sales opportunities and convert them into long-term business relationships.",
        "Analytical Skills: Proficiency in using CRM tools and data analysis for tracking leads and sales performance.",
        "Time Management: Strong ability to multitask and manage priorities effectively.",
      ],
      benefits: [
        "Competitive salary",
        "eBike and free lunch",
        "Access to a mentor network",
      ],
      experience: "2+ years",
      status: "closed",
    },

    {
      title: "Lead Sustainability Educator",
      category: "Design & Marketing",
      focus: "Corporate Sustainability",
      description:
        "We are seeking an experienced Lead Sustainability Educator to join our team in delivering an impactful Corporate Sustainability Course (among others) tailored for young professionals. This role is crucial in shaping the future of sustainability within corporations, empowering participants with the knowledge and skills to address today’s environmental challenges. The ideal candidate will have a solid understanding of climate science, corporate sustainability frameworks, and effective teaching methodologies. The candidate in the role will lead and facilitate classes of 20-30 participants, develop engaging and relevant course content, and provide hands-on learning experiences, including organizing field trips and practical exercises",
      responsibilities: [
        "Field Trip Coordination: Plan, coordinate, and lead sustainability-focused field trips or site visits to provide experiential learning, engaging participants with real-life sustainability practices in corporations and communities.",
        "Curriculum Development: Develop, design, review, and update course materials to ensure content remains relevant, current, and aligned with corporate sustainability practices and climate issues, while effectively utilizing the Learning Management System (LMS) to support and enhance the entire program.",
        "Content Creation: Develop educational materials, including presentations, case studies, and hands-on exercises, that support key sustainability concepts and real-world application.",
        "Field Trip Coordination: Plan, coordinate, and lead sustainability-focused field trips or site visits to provide experiential learning, engaging participants with real-life sustainability practices in corporations and communities.",
        "Climate & Sustainability Expertise: Stay informed about climate science, corporate responsibility, environmental regulations, and industry best practices, integrating this knowledge into course content and discussions.",
        "Participant Support: Offer guidance and mentorship to participants, providing constructive feedback on assignments, presentations, and discussions.",
        "Assessment & Evaluation: Develop and administer assessments to measure participants' understanding of course material, providing feedback to improve learning outcomes.",
        "Continuous Improvement: Gather feedback from participants and stakeholders to continuously refine and enhance the course curriculum and teaching approach.",
      ],
      requirements: [
        "Minimum 2 years in sustainability education or related fields.",
        "Strong understanding of climate science, corporate sustainability frameworks, and environmental regulations.",
        "Bachelor’s in Environmental Science or related field (Master’s preferred).",
        "Excellent interpersonal, communication, and presentation skills with a proven ability to engage and inspire learners.",
        "Proficiency in curriculum development, with a knack for creating interactive, engaging educational content.",
        "Strong organizational skills for managing classroom activities, field trips, and project timelines",
      ],
      benefits: [
        "Competitive salary",
        "eBike and free lunch",
        "Access to a mentor network",
      ],
      experience: "2+ years",
      status: "closed",
    },

    {
      title: "Senior Android Developer (Kotlin)",
      category: "AI/ML & Development",
      focus: "Corporate Sustainability",
      description:
        "We seek a seasoned Kotlin Developer with expertise in Java Native Interface (JNI) and edge AI. The ideal candidate will have 3+ years of professional experience in Kotlin/Java development, particularly in building native Android applications with high-performance requirements. You will work closely with our AI/ML and mobile teams to optimise and integrate machine learning models for mobile environments, ensuring efficient and smooth operation on Android devices.",
      responsibilities: [
        "Develop and optimise Android applications using Kotlin, focusing on mobile inferencing and real-time performance.",
        "Integrate and manage native libraries using JNI to enable seamless interaction between Java/Kotlin and native code.",
        "Collaborate with cross-functional teams, including AI/ML engineers, to implement and fine-tune machine learning models on mobile devices.",
        "Profile and debug performance issues, ensuring the optimal utilisation of device resources (CPU, GPU, and memory).",
        "Write clean, well-documented, and maintainable code that follows best practices in mobile development.",
        "Stay updated on the latest trends in Android development, mobile inferencing, and JNI usage to contribute fresh ideas and techniques to the team.",
      ],
      requirements: [
        "3+ years of experience in Kotlin development for Android applications.",
        "Strong experience with JNI (Java Native Interface) and working with native code (C/C++) on Android.",
        "Experience with mobile inferencing and knowledge of machine learning models and frameworks like TensorFlow Lite or ONNX for Android is a plus.",
        "Deep understanding of Android development best practices, application lifecycle, and UI performance optimization.",
        "Proficiency in debugging, performance profiling, and using Android development tools.",
        "Excellent problem-solving skills and the ability to troubleshoot complex issues.",
        "Strong communication skills, able to work effectively in a collaborative team environment.",
      ],
      benefits: [
        "Competitive salary",
        "eBike and free lunch",
        "Access to a mentor network",
      ],
      experience: "3+ years",
      status: "closed",
    },

    {
      title: "MERN - Full Stack Developer",
      category: "Analytics & Management",
      focus: "Corporate Sustainability",
      description:
        "We are seeking a talented and motivated Full Stack Developer with a strong foundation in Next.js to join our dynamic team. The ideal candidate will have hands-on experience in building scalable web applications, integrating databases, implementing authentication frameworks, and adhering to software engineering best practices. Familiarity with DevOps fundamentals and experience with Google Cloud Platform (GCP) is highly desirable.",
      responsibilities: [
        "Design, develop, and maintain end-to-end web applications using Next.js.",
        "Build RESTful APIs and microservices that integrate seamlessly with front-end components.",
        "Work with relational and NoSQL databases such as PostgreSQL, MongoDB, or Firebase to design efficient data models and queries.",
        "Implement and manage authentication frameworks such as OAuth, Firebase Auth, or other modern methods.",
        "Optimize applications for maximum performance, scalability, and security.",
        "Collaborate with cross-functional teams including designers, DevOps engineers, and product managers to deliver high-quality products.",
        "Employ software engineering best practices, including version control (Git), code reviews, and automated testing. ",
        "Implement CI/CD pipelines, preferably on Google Cloud Platform (GCP), to ensure smooth deployment cycles. ",
        "Troubleshoot, debug, and resolve production issues as part of ongoing application maintenance.",
        "Stay up to date with the latest industry trends and tools to drive innovation and efficiency within the team.",
      ],
      requirements: [
        "3+ experience as a Full Stack Developer with proficiency in Nextjs, MERN stack",
        "Strong understanding of database systems and practical experience with both SQL and NoSQL databases.",
        "Hands-on experience with authentication frameworks (e.g., OAuth, Firebase Auth, JWT).",
        "Familiarity with Cloud services GCP/AWS/Azure. GCP is preferred.",
        "Understanding of DevOps fundamentals, including CI/CD pipelines, containerization (Docker), and infrastructure as code (IaC).",
        "Excellent knowledge of front-end technologies (HTML, CSS, JavaScript/TypeScript) and responsive design principles.",
        "Strong problem-solving skills and ability to work in an agile environment.",
        "Familiarity with software engineering best practices such as test-driven development (TDD), clean code, and design patterns.",
        "Excellent communication and teamwork skills.",
      ],
      benefits: [
        "Competitive salary",
        "eBike and free lunch",
        "Access to a mentor network",
      ],
      experience: "3+ years",
      status: "closed",
    },

    {
      title: "Junior UI Designer",
      category: "Design & Marketing",
      focus: "Corporate Sustainability",
      description:
        "Are you enthusiastic about crafting user experiences that make a difference? Join us as a Junior Designer and shape the future of our product. We're looking for someone with a keen eye for design, a passion for user-centric solutions, and a drive to innovate. If you're eager to contribute to meaningful experiences, we welcome you to join our team.",
      responsibilities: [
        "Creating user-friendly interfaces that align with project goals and user needs.",
        "Assisting in user research and usability testing to gather insights for design improvements.",
        "Staying updated with industry trends and best practices in design and technology.",
        "Collaborating with team members to brainstorm and improve design ideas.",
        "Collaborating with developers to ensure seamless implementation of designs.",
      ],
      requirements: [
        "Freshers who have completed a degree in computer science, graphic design, or a related field.",
        "Familiarity with tools like Figma, Illustrator, and Canva.",
        "Ability to create basic wireframes and prototypes to visualise designs before development.",
      ],
      benefits: [
        "Competitive salary",
        "eBike and free lunch",
        "Access to a mentor network",
      ],
      experience: "2+ years",
      status: "closed",
    },

        {
      title: "Senior AI/ML Developer",
      category: "AI/ML & Development",
      focus: "Corporate Sustainability",
      description:
        "We're on the lookout for a Senior AI/ML Developer at Yuvabe @ Auroville.",
      responsibilities: [
        "Lead AI/ML projects with Python, FastAPI/Flask, and MongoDB expertise.",
        "Implement scalable solutions using DevOps best practices.",
        "Stay updated on the latest in AI - LLMs, Open Source, OpenAI, GPTs, you name it.",
        "Design and implement AI solutions that balance functionality and elegance.",
        "Collaborate with the team to turn dreams into code reality.",
      ],
      requirements: [
        "Proven experience with Python, FastAPI/Flask, and MongoDB in AI/ML projects.",
        "Strong DevOps background, from containers to cloud platforms.",
        "Familiarity with LLMs, Open Source, OpenAI, GPTs, and emerging AI trends.",
        "Innovative mindset and effective communication skills.",
      ],
      benefits: [
        "Competitive salary",
        "eBike and free lunch",
        "Access to a mentor network",
      ],
      experience: "3+ years",
      status: "closed",
    },

    {
      title: "Sustainability Analyst",
      category: "Analytics & Management",
      focus: "Corporate Sustainability",
      description:
        " If you are a critical and applied thinker; If you wish to apply the education and skills you’ve acquired to make a better world and lead from the forefront – Yuvabe’s Sustainability & Impact Analyst role is made for you. The role combines the unique and forward-looking spirit of Auroville with robust science and research in the areas of sustainability and social impact. It leverages on a whole gamut of impactful projects and units within Auroville and tailors the experience to match the needs and aspirations of prospective analysts",
      responsibilities: [
        "Collect, Clean, and Analyze impact data for clients (Startups, Social Enterprises, Orgs etc.)",
        "Liaise with clients on deliverables – Impact Report, Data Modules, Insights and Recommendations, SDG Mapping etc.",
        "Lead the creation of unique templatized models for impact assessment that can be applicable across use-cases within specific domains.",
        "Assist in product development and services outreach, communications, and coordination.",
      ],
      requirements: [
        "Master’s or pursuing Ph.D. (Social Sciences, Sustainability, Energy, Public Policy or related fields) with significant research training and experience – Min. 3 years in a research setting. Freshers with a good research background (publications in journals or an excellent thesis is an advantage) are welcome to apply.",
        "Excellent writing and communications skills, particularly academic and report writing.",
        "Excellent project management skills and the ability to convert targets and deliver on time.",
        "Expertise in MS Office – particularly Excel and Powerpoint.",
        "Expertise with data analysis using software packages such as R, Stata, Python.",
        "Strong knowledge of data visualization – expertise in Tableau/PowerBI will be a strong advantage.",
        "Specific domain expertise around sustainability – such as circular economy, conservation, waste management etc. will be preferred.",
      ],
      benefits: [
        "Competitive salary",
        "eBike and free lunch",
        "Access to a mentor network",
      ],
      experience: "3+ years",
      status: "closed",
    },

    {
      title: "Marketing Analyst",
      category: "Design & Marketing",
      focus: "Corporate Sustainability",
      description:
        "We are looking for a marketing analyst to join our growing team at Yuvabe, which offers digital services like marketing, ERP, design, and business solutions. The ideal candidate will have a strong understanding of marketing principles and analytics, as well as experience working with social media platforms. They will be responsible for conducting market research, analyzing data, and developing marketing strategies that help us  and our partners reach the target audience and achieve organizational goals.",
      responsibilities: [
        "Conduct market research to identify target audiences and emerging trends.",
        "Analyze data from a variety of sources, including website traffic, social media engagement, and sales data.",
        "Develop marketing strategies and campaigns that align with the client's goals.",
        "Track the performance of marketing campaigns and make recommendations for improvement.",
        "Create and manage marketing content, including blog posts, social media posts, and email campaigns.",
        "Work with other departments to ensure that marketing efforts are coordinated and effective.",
      ],
      requirements: [
        "Bachelor's degree in marketing, business administration, or a related field",
        "1-2 years of experience in marketing analytics or research.",
        "Strong understanding of marketing principles and best practices.",
        "Experience with social media platforms and analytics tools.",
        "Excellent written and verbal communication skills.",
        "Ability to work independently and as part of a team.",
        "Strong attention to detail and accuracy.",
      ],
      benefits: [
        "Competitive salary",
        "eBike and free lunch",
        "Access to a mentor network",
      ],
      experience: "1+ years",
      status: "closed",
    },
    {
      title: "STEAM Co-ordinator",
      category: "Design & Marketing",
      focus: "Corporate Sustainability",
      description:
        "We're seeking a STEAM (Science, Technology, Engineering, Art and Math) Program Coordinator to join the expanding team at Yuvabe Education, dedicated to providing STEAM Programs to schools in Auroville and the Bio-region. We're looking for someone with exceptional organizational skills and a profound passion for revolutionizing education. The ideal candidate will spearhead curriculum development, oversee lab setup and maintenance, and drive the creation of innovative programs aimed at delivering high-quality STEAM education to children and youth.",
      responsibilities: [
        "Design and refine STEAM curriculum aligned with educational standards and program goals.",
        "Integrate advanced teaching methods and technologies for enhanced learning experiences.",
        "Lead the design and development of tailored STEAM programs for diverse age groups and learning levels.",
        "Manage setup, organization, and maintenance of the STEAM lab for optimal learning environments.",
        "Procure materials, maintain lab infrastructure, and collaborate with stakeholders and partners.",
        "Guide Yuvabe's youth leaders to implement cohesive STEAM programs across schools and communities.",
        "Regularly assess program delivery, gather feedback, and enhance effectiveness.",
        "Implement feedback-driven adjustments for consistent program enhancement.",
        "Assist in organizing workshops and the annual STEAM Fest to promote STEAM education.",
        "Maintain records, prepare reports, and document best practices for program development.",
      ],
      requirements: [
        "Preferred Bachelor's Degree in STEM Field.",
        "1-2 Years Experience working with Children.",
        "Solid Understanding of Educational Pedagogy and best practices.",
        "Strong Written and Verbal Communication Skills.",
        "Ability to Work Independently and Collaboratively.",
        "Keen Attention to Detail and Accuracy.",
        "Great organizational and coordination skills.",
      ],
      benefits: [
        "Competitive salary",
        "eBike and free lunch",
        "Access to a mentor network",
      ],
      experience: "1+ years",
      status: "closed",
    },

  // ... 
];
