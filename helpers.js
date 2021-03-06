import _ from 'lodash';
import cliProgress from 'cli-progress';


const TAGS = [
    ".NET",
    ".NET Core",
    "1-D",
    "2D dynamic programming",
    "3D dynamic programming",
    "@media Rule",
    "AJAX",
    "API",
    "API Testing",
    "ASP.NET",
    "ASP.NET core",
    "ATP",
    "AWS",
    "Abstract class",
    "Abstraction",
    "Acceptance test-driven development",
    "Access control",
    "Access modifiers",
    "Accessibility testing",
    "Accumulator",
    "Actions",
    "Activity",
    "Actuator",
    "Addressing",
    "Addressing Mode",
    "Administration",
    "Adobe",
    "Advanced",
    "Advanced Algorithms",
    "Advanced Data Structures",
    "Advanced sorting",
    "Age",
    "Agile Testing",
    "Alerts",
    "Algebraic logic",
    "Algorithms",
    "Alibaba",
    "Aligning",
    "Allegation and mixtures",
    "Analog Circuits",
    "Analogy",
    "Android",
    "Angular",
    "Angular 2",
    "Angular 4",
    "Angular 5",
    "Angular 6",
    "Angular 7",
    "Angular 8",
    "AngularJS",
    "AngularJS 2",
    "AngularJS 4",
    "AngularJS 5",
    "Animations",
    "Annotations",
    "Ansible",
    "Ansible Collection",
    "Ansible Core",
    "Ansible Galaxy",
    "Ansible Lint",
    "Ansible Playbooks",
    "Ansible Tower",
    "Apache",
    "Apache Airflow",
    "Apache NiFi",
    "Apache Setup",
    "Apache Spark",
    "Appium",
    "Application architecture",
    "Application component",
    "Application security",
    "Applications of dynamic programming",
    "Approved",
    "Architecture",
    "Arithmetic operations",
    "Arrays",
    "Articulation Points",
    "Artificial Neural Network",
    "Assertion and reasoning",
    "Asynchronous",
    "Auditing",
    "Augmented Reality and Virtual Reality",
    "Authentication",
    "Authorization",
    "Automation Testing",
    "Automation Testing Framework",
    "Azure",
    "Azure AD",
    "Azure Analysis Services",
    "Azure Connectors",
    "Azure Data Factory",
    "Azure Data Lake",
    "Azure DataBricks",
    "Azure SQL",
    "Azure Services",
    "Azure Synapse",
    "BACPAC",
    "BFS",
    "BOBJ",
    "Backtracking",
    "Backtracking Basic",
    "Bash",
    "Basic Math",
    "Basic Programming",
    "Basic of test Automation",
    "Basics of Disjoint Data Structures",
    "Basics of Greedy Algorithms",
    "Basics of Implementation",
    "Basics of Input/Output",
    "Basics of bit manipulation",
    "Bayes' theorem",
    "Bazel",
    "Befunge",
    "Behavior-driven development",
    "Bias variance",
    "Biconnected component",
    "Big Data",
    "Binary Search",
    "Binary indexed tree",
    "Binary search algorithm",
    "Binary search tree",
    "Binary tree",
    "Bit manipulation",
    "Bitmask",
    "Black-box Testing",
    "Blade",
    "Blockchain",
    "Blood relationship",
    "Boat Streams",
    "Boolean Algebra",
    "Bootstrap",
    "Brackets",
    "Breadth-first search",
    "Broadcast",
    "Brute Force",
    "Brute-force search",
    "Bubble Sort",
    "Bucket Sort",
    "Button",
    "C",
    "C#",
    "C++",
    "C++11",
    "C++14",
    "C++17",
    "CDK",
    "CI/CD pipelines",
    "CLI",
    "COBOL",
    "CPU scheduling",
    "CQL types",
    "CSS",
    "CSS3",
    "Caching",
    "Calendars",
    "Calendars and dates",
    "Callback",
    "Cassandra",
    "Certification",
    "Change Data Capture",
    "Characters",
    "Circuit",
    "Circular linked list",
    "Classes",
    "Classful network",
    "Classification",
    "Clock",
    "Clojure",
    "Closure",
    "Cloud CDN",
    "Cloud Computing",
    "Cloud SDK",
    "Cloud SQL",
    "Cloud deployment model",
    "Cloud-Service-Models",
    "CloudFormation",
    "Clustering",
    "Cmdlets",
    "Cobol Compilation-Abend Codes",
    "CodeIgniter",
    "Collection",
    "Collections",
    "Combinational logic",
    "Combinatorics",
    "Command-line interface",
    "Communication",
    "Community-Cloud-Model",
    "Compiler Design",
    "Component",
    "Component lifecycle",
    "Compound interest",
    "Compression",
    "Computer Organization and Design",
    "Computer Vision",
    "Conclusions",
    "Concurrency",
    "Conditional probability",
    "Conditional statement",
    "Confidence Interval",
    "Configuration",
    "Conformance testing",
    "Connect",
    "Connected Components",
    "Connection Managers",
    "Constraint",
    "Container",
    "Content",
    "Control",
    "Controller Area Network",
    "Controllers",
    "Controlling",
    "Controls",
    "Cookies",
    "Coordinates",
    "Corda",
    "Cosmos DB",
    "Counter",
    "Counting Sort",
    "Counting and Arrangements",
    "Cqlsh",
    "Cryptography",
    "Current",
    "Cursors",
    "Cyber Security",
    "Cyberattack",
    "D",
    "DAG",
    "DAGScheduler",
    "DB Services",
    "DBMS",
    "DML",
    "DMS",
    "DNS",
    "DOM",
    "DStreams",
    "DTL",
    "Dashboards",
    "Data Interpretation",
    "Data Management",
    "Data Modeling",
    "Data Processing",
    "Data Science",
    "Data Storage",
    "Data Structures",
    "Data Sufficiency",
    "Data Warehousing",
    "Data binding",
    "Data concurrency",
    "Data connections",
    "Data description language",
    "Data flow task",
    "Data layout",
    "Data manipulation",
    "Data mining",
    "Data type",
    "Data types",
    "Data visualization",
    "Database",
    "Database Interface",
    "Database audit",
    "Database transaction",
    "Databricks",
    "Databricks SQL Analytics",
    "Databricks Workspace",
    "Datastructures",
    "Date",
    "Deadlock",
    "Debugging",
    "Decision tree",
    "Decorators",
    "Decryption",
    "Deep Learning",
    "Defect management",
    "Delays",
    "Delegates",
    "Delta Engine",
    "Delta Lake",
    "Dependency injection",
    "Depth First Search",
    "Depth-first search",
    "Design",
    "Design patterns",
    "Design principles",
    "DevOps",
    "Developer Tools",
    "Devices",
    "Dictionaries",
    "Digit DP",
    "DigitDP",
    "Digital Ocean",
    "Digital electronics",
    "Dimensionality reduction",
    "Directions",
    "Directives",
    "Directories",
    "Disjoint Data Structures",
    "Disjoint Set Union",
    "Distributed Database System",
    "Distributed transaction",
    "Divide-and-conquer algorithm",
    "Django",
    "Docker",
    "Document Type Declarations",
    "Dynamic Programming",
    "Dynamic Programming, Bitmask",
    "Dynamic SQL",
    "DynamoDB",
    "EC2",
    "ECL",
    "ECS",
    "ES6",
    "ETL",
    "Eigen values",
    "Eigen vectors",
    "Elastic MapReduce",
    "Electronic data interchange",
    "Element",
    "Elixir",
    "Embedded C",
    "Embedded system",
    "Ember.js",
    "Encapsulation",
    "Encoding",
    "Encryption",
    "Entity Framework",
    "Entity Relationship Model",
    "Enumerated type",
    "Enumeration",
    "Environment variable",
    "Erlang",
    "Error Handling",
    "Ethereum",
    "Ethernet",
    "Euler's totient function",
    "Eulerian path",
    "Event Handling",
    "Event binding",
    "Events",
    "Exception handling",
    "Exclusive OR",
    "Express.js",
    "Expressions",
    "Extensions",
    "F#",
    "Facades",
    "Factorization",
    "Fast Fourier transform",
    "Feature Engineering",
    "Feature Selection",
    "Fenwick (Binary Indexed) Trees",
    "Fenwick Tree",
    "File handling",
    "File manipulation",
    "File organization",
    "File permission",
    "File system",
    "Filters",
    "Finance",
    "Financial Accounting",
    "Firewall",
    "Flask",
    "Flip flops",
    "Flood-fill Algorithm",
    "Flutter",
    "Font",
    "Fragments",
    "Frames",
    "Framework",
    "Fsm",
    "Function overloading",
    "Functions",
    "GCD",
    "Game Theory",
    "Garbage collection",
    "Generators",
    "Geometry",
    "Git",
    "Go",
    "Google cloud platform",
    "Graham Scan Algorithm",
    "Grails",
    "Graph",
    "Graph Theory",
    "Graphs",
    "Greatest common divisor",
    "Greedy Algorithms",
    "Greedy algorithm",
    "Greenplum",
    "Grid System",
    "Groovy",
    "HBase",
    "HDL",
    "HTML",
    "HTML5",
    "HTTP",
    "HTTP Client",
    "HTTP Reader",
    "HTTP Service",
    "HTTP Verbs",
    "HVL",
    "Hadoop",
    "Hash function",
    "Hash table",
    "Hashing",
    "Hashing algorithm",
    "Hashmap",
    "Haskell",
    "Heap",
    "Hibernate",
    "Hive",
    "Human Capital Management",
    "Hybrid Cloud Model",
    "Hypothesis testing",
    "IPC mechanisms",
    "Identity Access Management",
    "Image",
    "Image Classification",
    "Image Processing",
    "Implementation",
    "Inclusion-exclusion",
    "Indexes",
    "Informatica",
    "Informatica BDM",
    "Informatica Cloud",
    "Informatica Data Quality (IDQ)",
    "Informatica MDM",
    "Informatica PowerCenter",
    "Infrastructure Security",
    "Infrastructure-as-a-Service",
    "Inheritance",
    "Input/Output",
    "Instances",
    "Integration Testing",
    "IntelliJ IDEA",
    "Intents",
    "Interface",
    "Internet Protocol",
    "Internet of Things",
    "Interpolation",
    "Introduction",
    "Introduction to Dynamic Programming 1",
    "IoC Container",
    "Ipv4",
    "Iterators",
    "Ivy",
    "J2EE",
    "JCL",
    "JDA WMS",
    "JDBC",
    "JPA",
    "JQuery",
    "JRE",
    "JSP",
    "JSX",
    "JVM",
    "Java",
    "Java 14",
    "Java 8",
    "JavaScript",
    "JavaScript(Node.js)",
    "JavaScript(Rhino)",
    "Jenkins",
    "Joins",
    "Julia",
    "K-Means Clustering",
    "KDbgCtrl",
    "Kafka",
    "KeySpace",
    "Keys",
    "Kinesis",
    "Kotlin",
    "Kubernetes",
    "LOLCODE",
    "Lambda",
    "Laravel",
    "Layout",
    "Lazy Propagation",
    "Lazy Propagation in Interval/Segment Trees",
    "Life Cycle",
    "LifeCycle",
    "Linear Algebra",
    "Linear Regression",
    "Linear search",
    "Linked List",
    "Linux",
    "Lisp",
    "Lisp (SBCL)",
    "Lists",
    "LoadRunner",
    "Locking",
    "Log Analysis",
    "Logging",
    "Logic Apps",
    "Logic Gates",
    "Logical Reasoning",
    "Logistic regression",
    "Loops",
    "Lowest Common Ancestor",
    "Lua",
    "MS SQL",
    "MS SSIS",
    "MSSQL",
    "MVC",
    "Machine Learning",
    "Macros",
    "Mainframe",
    "Manachar's Algorithm",
    "Manachars Algorithm",
    "Manacher's Algorithm",
    "Managed Instances",
    "Manual Testing",
    "MapReduce",
    "Masking",
    "MatPlotLib",
    "Material Management",
    "Math",
    "Mathamatics",
    "Mathematics",
    "Matrix",
    "Matrix Exponentiation",
    "Maven",
    "Max subarray sum",
    "Maximum Bipartite Matching",
    "Memory",
    "Memory management",
    "Merge sort",
    "MicroServices",
    "Microcontrollers",
    "Microprocessers",
    "Microsoft 365",
    "Middleware",
    "Migrations",
    "Minimum spanning tree",
    "Mixins",
    "Model binding",
    "Models",
    "Modular arithmetic",
    "Modular exponentiation",
    "Modules",
    "Modulo arithmetic",
    "MongoDB",
    "Multi-dimensional",
    "Multi-factor authentication",
    "Multimedia",
    "Multiple inheritance",
    "Multiplicative inverse",
    "Multithreading",
    "Multitier architecture",
    "MySQL",
    "N/A",
    "Nagios",
    "Natural Language Processing",
    "Network Security",
    "Network as a service",
    "Network interface",
    "Network layer",
    "Networking",
    "Neural Networks",
    "NgModules",
    "NoSQL",
    "Node.js",
    "Non verbal reasoning",
    "Normalization",
    "NumPy",
    "Number theory",
    "Numeral system",
    "OCaml",
    "OLAP",
    "ORM",
    "OSI model",
    "Object-oriented analysis and design (OOAD)",
    "Object-oriented programming (OOP)",
    "Objective-C",
    "Observation",
    "Octave",
    "One-dimensional",
    "Operating system",
    "Operation",
    "Operational database",
    "Operator overloading",
    "Operators",
    "Optimization",
    "Oracle",
    "Oracle SQL",
    "Oracle_Db",
    "Overfitting",
    "PHP",
    "PL/SQL",
    "Pagination",
    "Pandas",
    "Parameterized",
    "Partition",
    "Pascal",
    "Pega",
    "Percentages",
    "Performace testing",
    "Performance tuning",
    "Perl",
    "Permutation and combination",
    "Pig",
    "Pipes",
    "Pipes and Cisterns",
    "Platform as a service",
    "Plugins",
    "Pointer",
    "Polymorphism",
    "PostgreSQL",
    "Postman",
    "PowerBI",
    "PowerShell",
    "Prefix",
    "Prime Factorization",
    "Priority queue",
    "Probability distribution",
    "Probability distributions",
    "Probability spaces",
    "Probablity",
    "Process scheduling",
    "Process synchronization",
    "Processes",
    "Production Planning",
    "Profilers",
    "Profit and Loss",
    "Program Management/Product Management",
    "Program optimization",
    "Projections",
    "Promises",
    "Protocols",
    "Public Cloud Model",
    "Puppet",
    "PySpark",
    "Python",
    "Python 3",
    "Python 3.8",
    "Qlik Sense",
    "Quality Management",
    "Quantitative Aptitude",
    "Queries",
    "Queue",
    "Queues",
    "R",
    "R(RScript)",
    "RDBMS",
    "REST API",
    "RTL",
    "RTOS",
    "Racket",
    "Random forest",
    "Ratio and proportion",
    "React",
    "React Hooks",
    "React Native",
    "ReactJS",
    "Reading comprehension",
    "Recursion",
    "Recursive dp",
    "Red Hat",
    "Redis",
    "Reducers",
    "Redux",
    "Redux Data flow",
    "Register",
    "Regression Testing",
    "Regression analysis",
    "Regular Expressions",
    "Relationship Model",
    "Request lifecycle",
    "Requests",
    "Resource Management",
    "Resource allocation",
    "Response",
    "Risk based Testing",
    "Robotic process automation",
    "Roots of a Polynomial",
    "Routing",
    "Routing keys",
    "Ruby",
    "Ruby on Rails",
    "Rust",
    "S3",
    "SAP",
    "SAP ABAP",
    "SAP BASIS",
    "SAP BEx",
    "SAP FICO",
    "SAP HANA",
    "SAP SD",
    "SAP Webi",
    "SAP-GEN",
    "SDK Manager",
    "SDLC",
    "SFDC Lightning",
    "SOAP",
    "SOLID",
    "SQL",
    "SQL Server",
    "SQLite",
    "SSAS",
    "SSH",
    "SSRS",
    "SailPoint",
    "Sales Cloud",
    "SalesForce",
    "Scala",
    "Scala 2.11.8",
    "Scaling",
    "Scheduling algorithms",
    "Scope",
    "Scripting language",
    "Scrum",
    "Searching",
    "Searching algorithm",
    "Secondary storage",
    "Security",
    "Segment Trees",
    "Segment tree",
    "Selectors",
    "Selenium",
    "Semantic element",
    "Semantic elements",
    "Semi-Structured data",
    "Sequence",
    "Sequencial logics",
    "Serialization",
    "Serializer",
    "Series",
    "Server Administration",
    "Server controls",
    "Server processes",
    "ServiceNow",
    "Services",
    "Servlets",
    "Session",
    "Session management",
    "Sets",
    "Sharding",
    "Shared Preferences",
    "Sharepoint",
    "Shell",
    "Shell Functions",
    "Shell Scripting",
    "Shell Substitutions",
    "Shell embedding",
    "Shell environment",
    "Shell variables",
    "Shortest Path Algorithm",
    "Shortest Path Algorithms",
    "Sieve",
    "Signals",
    "Simple interest",
    "Simulation",
    "Sliding Window",
    "SnowSQL",
    "Snowflake",
    "Software Testing",
    "Software as a service",
    "Sorting",
    "Spaces",
    "Spark Streaming",
    "SparkContext",
    "Sparse table",
    "Spring",
    "Spring 3x",
    "Spring AOP",
    "Spring Boot",
    "Spring mvc",
    "Sqoop",
    "Stack",
    "Stacks",
    "State Machines",
    "State management",
    "State reduction",
    "State space reduction",
    "Static SQL",
    "Static testing",
    "Statistics",
    "Storage classes",
    "Storage structures",
    "Stored PL/SQL",
    "Stored-Procedures",
    "StreamingContext",
    "Streams",
    "String",
    "String Algorithms",
    "String Searching",
    "String interpolation",
    "String manipulation",
    "Strongly Connected Components",
    "Strongly connected component",
    "Structure",
    "Structured data",
    "Struts",
    "Styles",
    "Subnet",
    "Subqueries",
    "Subroutine",
    "Subset",
    "Suffix array",
    "Supervised",
    "Swift",
    "Swift 5",
    "Swift-4.1",
    "Switch statement",
    "Switching",
    "Synchronization",
    "Synchronous",
    "Synthesis",
    "System Calls",
    "T-SQL",
    "TCP",
    "TCP/IP",
    "TDD",
    "TFS",
    "Tableau",
    "Tables",
    "Tactical query",
    "Task Scheduling",
    "Templates",
    "Teradata",
    "Ternary search",
    "Terraform",
    "Test Environment",
    "Test Execution",
    "Test execution engine",
    "Test management",
    "Test structure",
    "Testing",
    "Text",
    "Text mining",
    "Themes",
    "Thread",
    "Time Series Analysis",
    "Time and Work",
    "Time and distance",
    "Totient Function",
    "Tracing",
    "Train concepts",
    "Transaction management",
    "Transaction-level modeling",
    "Transformations",
    "Transitions",
    "Tree",
    "TreeView",
    "Trees",
    "Trie",
    "Triggers",
    "Tuning",
    "Tuples",
    "Two dimensional",
    "Two-way data binding",
    "Type Conversion",
    "Type casting",
    "TypeScript",
    "UBus",
    "USQL",
    "UWP",
    "Underfitting",
    "Unit Testing",
    "Unix",
    "Unsupervised",
    "Use Case Testing",
    "User Datagram Protocol",
    "User interface testing",
    "User management",
    "Utilities",
    "VB.NET",
    "VHDL",
    "VMware",
    "VSwitch",
    "Vanilla.js",
    "Variables",
    "Vector graphics",
    "Vectors",
    "Verbal Ability",
    "Verilog",
    "Vi Editor",
    "Views",
    "Virtual Private Cloud",
    "Virtual memory",
    "Virtualization",
    "Visual Basic",
    "Voltage",
    "Vue.js",
    "WCF",
    "WPF",
    "Waits",
    "Web Application Security",
    "Web Forms 2.0",
    "Web application testing",
    "Web controls",
    "WebServices",
    "Whenever",
    "White Box Testing",
    "Wildcard listeners",
    "Windbg",
    "Windows",
    "Windows Forms",
    "WordPress",
    "XML",
    "Yarn",
    "Zend",
    "Zookeeper",
    "iOS"
  ];

  export function getTags() {
      return TAGS
  }

  export const sleep = async ms => new Promise(r => setTimeout(r, ms));

  export async function batchRun(arr, num, fn) {
    let startTime = Date.now();
    const chunks = _.chunk(arr, num);
    let results = [], timers = [];
    const bar1 = new cliProgress.SingleBar({stopOnComplete: true, clearOnComplete: true, hideCursor: true}, cliProgress.Presets.shades_classic);
    bar1.start(arr.length, 0);
    let doneJobs = 0;
    for (let [i, chunk] of chunks.entries()) {
      let cst = Date.now();
      let a = await Promise.all(chunk.map(fn))
      results = [...results, ...a];
      timers.push(Date.now() - cst);
      doneJobs += chunk.length;
      bar1.update(doneJobs);
    }  
    console.log('\x1b[36m%s\x1b[0m', `
      Total Chunks: ${chunks.length}
      Total Process Time: ${Date.now() - startTime} ms
      Avg Chunk Time: ${parseFloat(_.mean(timers).toFixed(2))} ms
    `);
    return results;
}
