export const mockJourneys = {
  'software-engineering': {
    domainName: 'Software Engineering',
    challenges: [
      {
        day: 1,
        title: 'Build a Developer Portfolio',
        estimatedTime: '45 min',
        status: 'completed',
        description:
          'Design and code a responsive personal developer portfolio with custom sections for projects, skills, and contact details.',
        skills: ['HTML5 & Semantic Markup', 'CSS Flexbox & Grid', 'Responsive Design'],
        badge: 'Completed',
      },
      {
        day: 2,
        title: 'Build a GitHub Profile Explorer',
        estimatedTime: '50 min',
        status: 'completed',
        description:
          'Fetch live developer data from GitHub REST API, render profile metrics, and display top repositories dynamically.',
        skills: ['REST APIs', 'Async JavaScript', 'API Error Handling'],
        badge: 'Completed',
      },
      {
        day: 3,
        title: 'Build a Task Management API',
        estimatedTime: '60 min',
        status: 'current',
        description:
          'Create a REST API that allows users to manage tasks, update their status, and filter tasks by completion.',
        skills: ['REST API Design', 'CRUD Operations', 'Data Validation'],
        badge: "Today's Task",
      },
      {
        day: 4,
        title: 'Build an Expense Tracker',
        estimatedTime: '60 min',
        status: 'locked',
        description:
          'Develop a client-side financial tracking tool with dynamic visual charts, category budgets, and persistent local storage.',
        skills: ['State Management', 'Data Handling', 'Visualizing Information'],
        badge: 'Locked',
      },
      {
        day: 5,
        title: 'Build a Real-Time Chat Interface',
        estimatedTime: '75 min',
        status: 'locked',
        description:
          'Construct a responsive real-time messaging UI with dynamic message threads, typing indicators, and optimistic updates.',
        skills: ['Real-Time Concepts', 'UI State Architecture', 'Event Handling'],
        badge: 'Locked',
      },
    ],
  },
  'data-science': {
    domainName: 'Data Science',
    challenges: [
      {
        day: 1,
        title: 'Build a Data Cleaning Pipeline',
        estimatedTime: '45 min',
        status: 'completed',
        description:
          'Sanitize messy real-world datasets by addressing missing values, duplicate records, and inconsistent data formatting.',
        skills: ['Python & Pandas', 'Data Sanitization', 'Missing Value Imputation'],
        badge: 'Completed',
      },
      {
        day: 2,
        title: 'Exploratory Data Analysis Dashboard',
        estimatedTime: '50 min',
        status: 'completed',
        description:
          'Extract actionable business insights from raw data using statistical visualization charts and summary metrics.',
        skills: ['Statistical Analysis', 'Data Visualization', 'Insight Generation'],
        badge: 'Completed',
      },
      {
        day: 3,
        title: 'Build a Sales Prediction Model',
        estimatedTime: '60 min',
        status: 'current',
        description:
          'Develop a predictive regression model to forecast seasonal sales trends based on historical features.',
        skills: ['Machine Learning', 'Scikit-Learn', 'Regression Metrics'],
        badge: "Today's Task",
      },
      {
        day: 4,
        title: 'Customer Segmentation Engine',
        estimatedTime: '60 min',
        status: 'locked',
        description:
          'Implement K-Means clustering to group users into behavioral personas based on purchasing patterns.',
        skills: ['Unsupervised Learning', 'Clustering Algorithms', 'Feature Engineering'],
        badge: 'Locked',
      },
      {
        day: 5,
        title: 'Interactive Analytics Web App',
        estimatedTime: '75 min',
        status: 'locked',
        description:
          'Package your data model into an interactive web dashboard for non-technical stakeholders to explore predictions.',
        skills: ['Dashboard Frameworks', 'Model Deployment', 'Interactive Filters'],
        badge: 'Locked',
      },
    ],
  },
  'artificial-intelligence': {
    domainName: 'Artificial Intelligence',
    challenges: [
      {
        day: 1,
        title: 'Text Classification Pipeline',
        estimatedTime: '45 min',
        status: 'completed',
        description:
          'Build an NLP model to classify customer support emails into intent categories with pre-processing pipelines.',
        skills: ['NLP Fundamentals', 'Tokenization', 'Model Evaluation'],
        badge: 'Completed',
      },
      {
        day: 2,
        title: 'Build an Image Recognition API',
        estimatedTime: '50 min',
        status: 'completed',
        description:
          'Use pre-trained convolutional neural networks to classify uploaded images and expose the model via API.',
        skills: ['Computer Vision', 'Transfer Learning', 'Inference APIs'],
        badge: 'Completed',
      },
      {
        day: 3,
        title: 'AI-Powered Document Analyzer',
        estimatedTime: '60 min',
        status: 'current',
        description:
          'Create a Retrieval-Augmented Generation (RAG) system to query PDF documents using semantic vector search.',
        skills: ['RAG Concepts', 'Vector Embeddings', 'Semantic Search'],
        badge: "Today's Task",
      },
      {
        day: 4,
        title: 'Build a Custom Recommendation Engine',
        estimatedTime: '60 min',
        status: 'locked',
        description:
          'Design a collaborative filtering system to recommend relevant learning content based on user similarity.',
        skills: ['Neural Filtering', 'Matrix Factorization', 'Recommendation Systems'],
        badge: 'Locked',
      },
      {
        day: 5,
        title: 'Fine-tune a Lightweight LLM',
        estimatedTime: '75 min',
        status: 'locked',
        description:
          'Fine-tune an open-weights language model on domain-specific prompt pairs for specialized task accuracy.',
        skills: ['Model Fine-Tuning', 'Prompt Engineering', 'Evaluation Benchmarks'],
        badge: 'Locked',
      },
    ],
  },
}
