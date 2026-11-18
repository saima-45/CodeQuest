document.addEventListener("DOMContentLoaded", () => {

    "use strict";



    // =========================================================

    // CODEQUEST — PYTHON LEARNING SYSTEM

    // Version 3.0

    // =========================================================



    const STORAGE_KEY = "codequest.python.progress.v3";



    // Add a visible selected state to the chosen language card.

    const languageStyle = document.createElement("style");

    languageStyle.textContent = `

        .language-card.active {

            outline: 3px solid var(--primary-color, #6c63ff);

            outline-offset: 3px;

            transform: translateY(-2px);

            box-shadow: 0 8px 22px rgba(60, 50, 150, 0.16);

        }

    `;

    document.head.appendChild(languageStyle);



    const elements = {

        coursePage: document.getElementById("coursePage"),

        backButton: document.getElementById("backButton"),

        chapterList: document.getElementById("chapterList"),

        levelTitle: document.getElementById("levelTitle"),

        levelDescription: document.getElementById("levelDescription"),

        lessonPreview: document.getElementById("lessonPreview"),

        lessonTitle: document.getElementById("lessonTitle"),

        lessonContent: document.getElementById("lessonContent"),

        quickMode: document.getElementById("quickMode"),

        deepMode: document.getElementById("deepMode"),

        completeLesson: document.getElementById("completeLesson"),

        pythonProgressBar: document.getElementById("pythonProgressBar"),

        pythonProgressText: document.getElementById("pythonProgressText"),

        startButton: document.getElementById("startButton")

    };



    const levelInformation = {

        beginner: {

            title: "Beginner Level",

            description: "Start from absolute zero and build your Python foundations.",

            chapters: [

                ["b1", "Introduction to Python"],

                ["b2", "Variables and Data Types"],

                ["b3", "Input and Output"],

                ["b4", "Operators in Python"],

                ["b5", "Conditional Statements"],

                ["b6", "Loops in Python"],

                ["b7", "Strings in Python"],

                ["b8", "Lists in Python"],

                ["b9", "Tuples and Sets"],

                ["b10", "Dictionaries"],

                ["b11", "Functions"],

                ["b12", "Basic Problem Solving"]

            ]

        },



        intermediate: {

            title: "Intermediate Level",

            description: "Develop stronger programming skills and learn practical Python techniques.",

            chapters: [

                ["i1", "Advanced Functions"],

                ["i2", "Comprehensions"],

                ["i3", "Modules and Packages"],

                ["i4", "File Handling"],

                ["i5", "Exception Handling"],

                ["i6", "Object-Oriented Programming"],

                ["i7", "OOP Principles"],

                ["i8", "Iterators and Generators"],

                ["i9", "Regular Expressions"],

                ["i10", "Working with Data"],

                ["i11", "Libraries and APIs"],

                ["i12", "Testing and Debugging"]

            ]

        },



        advanced: {

            title: "Advanced Level",

            description: "Explore advanced Python concepts and professional development practices.",

            chapters: [

                ["a1", "Advanced Data Structures"],

                ["a2", "Advanced OOP"],

                ["a3", "Decorators"],

                ["a4", "Context Managers"],

                ["a5", "Concurrency and Threading"],

                ["a6", "Asynchronous Programming"],

                ["a7", "Database Programming"],

                ["a8", "Web Development with Python"],

                ["a9", "Data Analysis"],

                ["a10", "Advanced Python Concepts"],

                ["a11", "Security and Best Practices"],

                ["a12", "Projects and Deployment"]

            ]

        }

    };



    // =========================================================

    // CHAPTER 1 — COMPLETE LEARNING MATERIAL

    // =========================================================



    const chapterOne = {

        id: "b1",

        title: "Introduction to Python",



        quick: `

            <section class="lesson-section">

                <h2>1. What is Python?</h2>

                <p><strong>Python</strong> is a high-level, general-purpose programming language.

                It is used to give instructions to computers so they can perform tasks.</p>

                <p>Python is known for its simple and readable syntax. This makes it a popular

                language for beginners as well as professional developers.</p>



                <h3>Example</h3>

                <pre><code>print("Hello, World!")</code></pre>

                <p><strong>Output:</strong></p>

                <pre><code>Hello, World!</code></pre>

                <p>This program displays the text Hello, World! on the screen.</p>

            </section>



            <section class="lesson-section">

                <h2>2. History of Python</h2>

                <ul>

                    <li>Python was created by <strong>Guido van Rossum</strong>.</li>

                    <li>Development began in the late 1980s.</li>

                    <li>Python was first released in 1991.</li>

                    <li>The name Python was inspired by the comedy show

                    <em>Monty Python's Flying Circus</em>.</li>

                </ul>

            </section>



            <section class="lesson-section">

                <h2>3. Features of Python</h2>

                <ol>

                    <li><strong>Easy to learn:</strong> Its syntax is readable and simple.</li>

                    <li><strong>High-level:</strong> Programmers do not normally manage

                    low-level computer operations directly.</li>

                    <li><strong>Interpreted:</strong> Python programs are executed by a

                    Python implementation, which handles the execution process.</li>

                    <li><strong>Portable:</strong> Python programs can run on different

                    operating systems when the required environment is available.</li>

                    <li><strong>Open source:</strong> Python can be used and distributed

                    under its open-source licence.</li>

                    <li><strong>Large library collection:</strong> Python provides many

                    ready-made modules and packages.</li>

                </ol>

            </section>



            <section class="lesson-section">

                <h2>4. Where is Python used?</h2>

                <ul>

                    <li>Web development</li>

                    <li>Artificial intelligence and machine learning</li>

                    <li>Data analysis and data science</li>

                    <li>Automation and scripting</li>

                    <li>Scientific computing</li>

                    <li>Cybersecurity tools</li>

                    <li>Software development</li>

                </ul>

            </section>



            <section class="lesson-section">

                <h2>5. Your first Python program</h2>

                <pre><code>print("Hello, World!")</code></pre>



                <p><strong>Explanation:</strong></p>

                <ul>

                    <li><code>print</code> is a built-in Python function.</li>

                    <li><code>()</code> are parentheses. They contain the information

                    passed to the function.</li>

                    <li><code>"Hello, World!"</code> is a string, meaning text data.</li>

                </ul>



                <p><strong>Output:</strong></p>

                <pre><code>Hello, World!</code></pre>

            </section>



            <section class="lesson-section">

                <h2>6. Important Python rules</h2>

                <ul>

                    <li>Python is case-sensitive: <code>print</code> and

                    <code>Print</code> are different.</li>

                    <li>Text is usually written inside single or double quotes.</li>

                    <li>Parentheses must be properly opened and closed.</li>

                    <li>Indentation is important in Python code blocks.</li>

                    <li>Comments begin with the <code>#</code> symbol.</li>

                </ul>



                <h3>Example of a comment</h3>

                <pre><code># This is a comment

print("Welcome")</code></pre>

                <p>Python ignores the comment when executing the program.</p>

            </section>



            <section class="lesson-section">

                <h2>7. Types of programming errors</h2>

                <table>

                    <thead><tr><th>Error</th><th>Meaning</th></tr></thead>

                    <tbody>

                        <tr><td>Syntax error</td><td>Code breaks Python's grammar rules.</td></tr>

                        <tr><td>Runtime error</td><td>An error occurs while the program runs.</td></tr>

                        <tr><td>Logical error</td><td>The program runs but gives an incorrect result.</td></tr>

                    </tbody>

                </table>



                <h3>Syntax error example</h3>

                <pre><code>print("Hello"</code></pre>

                <p>The closing parenthesis is missing.</p>



                <h3>Correct code</h3>

                <pre><code>print("Hello")</code></pre>

            </section>



            <section class="lesson-section">

                <h2>8. Quick practice</h2>

                <ol>

                    <li>Who created Python?</li>

                    <li>Which function displays output?</li>

                    <li>What symbol is used for a single-line comment?</li>

                    <li>Is Python case-sensitive?</li>

                    <li>Write a program to display your name.</li>

                </ol>

                <p>Try answering these questions before looking at the solutions

                in the practice section of Deep Learn.</p>

            </section>

        `,



        deep: `

            <section class="lesson-section">

                <h2>Chapter 1: Introduction to Python</h2>

                <p>Welcome to CodeQuest! In this chapter, you will learn what Python is,

                why it was created, where it is used, how a Python program runs, and how

                to write your first program.</p>

                <p>This chapter assumes that you have <strong>zero programming knowledge</strong>.

                Every important term and code element is explained from the beginning.</p>

            </section>



            <section class="lesson-section">

                <h2>1. What is programming?</h2>

                <p>Before learning Python, we need to understand programming.</p>

                <p><strong>Programming</strong> is the process of writing instructions

                that tell a computer what to do.</p>



                <h3>Think of a simple example</h3>

                <p>Imagine asking a computer to calculate the total price of two products.

                You need to give it instructions:</p>

                <ol>

                    <li>Store the price of the first product.</li>

                    <li>Store the price of the second product.</li>

                    <li>Add both prices.</li>

                    <li>Display the total.</li>

                </ol>

                <p>A computer follows instructions. A programming language helps humans

                write those instructions in a structured way.</p>



                <h3>What is a programming language?</h3>

                <p>A <strong>programming language</strong> is a language used to write

                instructions that a computer can execute through its software and hardware.</p>

                <p>Examples include Python, Java, C, C++, and JavaScript.</p>

            </section>



            <section class="lesson-section">

                <h2>2. What is Python?</h2>

                <p><strong>Python is a high-level, general-purpose programming language

                known for its readable syntax and wide range of applications.</strong></p>



                <h3>Understand every important term</h3>

                <p><strong>High-level language:</strong> A programming language designed

                to be easier for humans to read and write than low-level machine instructions.</p>

                <p><strong>General-purpose language:</strong> A language that can be used

                for many different types of tasks rather than only one specialised task.</p>

                <p><strong>Syntax:</strong> The rules that describe how code must be written.</p>

                <p><strong>Readable code:</strong> Code whose structure and meaning are

                relatively easy for a person to understand.</p>



                <h3>Why is Python popular?</h3>

                <p>Python allows programmers to express many instructions using relatively

                little code. Its ecosystem also contains libraries for web development,

                data analysis, automation, artificial intelligence, and other tasks.</p>

            </section>



            <section class="lesson-section">

                <h2>3. History of Python</h2>

                <p>Python was created by <strong>Guido van Rossum</strong>, a Dutch programmer.</p>

                <ul>

                    <li>Work on Python began in the late 1980s.</li>

                    <li>Python was first released in 1991.</li>

                    <li>Guido van Rossum served as Python's original creator and long-time

                    lead decision-maker.</li>

                    <li>The name Python was inspired by the British comedy television show

                    <em>Monty Python's Flying Circus</em>, not by the snake.</li>

                </ul>

                <p>Python has continued to evolve through new versions and improvements.

                Python 2 and Python 3 are major generations; Python 2 is now discontinued,

                and modern learning should use Python 3.</p>

            </section>



            <section class="lesson-section">

                <h2>4. Features of Python</h2>



                <h3>4.1 Simple and readable</h3>

                <p>Python code is designed to be readable. Its syntax often resembles

                ordinary mathematical or English-like expressions.</p>

                <pre><code>print("Welcome to CodeQuest")</code></pre>

                <p>This statement displays a message. You do not need to write a long

                sequence of low-level instructions to display it.</p>



                <h3>4.2 High-level language</h3>

                <p>Python hides many low-level details, such as direct memory management

                in ordinary beginner programs. This allows programmers to focus on solving

                problems.</p>



                <h3>4.3 Interpreted execution model</h3>

                <p>Python is commonly described as an interpreted language. In the standard

                CPython implementation, source code is compiled into bytecode and then

                executed by the Python virtual machine.</p>

                <p>This is why saying that Python simply executes every source-code line

                directly without any intermediate process is an oversimplification.</p>



                <h3>4.4 Portable</h3>

                <p>Python is available on Windows, macOS, and Linux. A program can often

                run on different systems if the necessary Python version and dependencies

                are installed.</p>



                <h3>4.5 Open source</h3>

                <p>Python is available under an open-source licence. Developers can use

                it, study its implementation, and contribute to its development according

                to the licence terms.</p>



                <h3>4.6 Large standard library and ecosystem</h3>

                <p>A <strong>library</strong> is reusable code that helps programmers

                perform common tasks. Python includes a standard library and also has

                many third-party packages.</p>



                <h3>4.7 Dynamically typed</h3>

                <p>Python determines the type of a value at runtime. You do not normally

                need to declare a variable's type before assigning a value.</p>

                <pre><code>age = 20

age = "twenty"</code></pre>

                <p>The variable can refer to an integer first and a string later. We will

                study variables and data types in Chapter 2.</p>

            </section>



            <section class="lesson-section">

                <h2>5. Applications of Python</h2>



                <h3>5.1 Web development</h3>

                <p>Python can be used to build websites and web application backends.

                Frameworks such as Django and Flask help developers build web applications.</p>



                <h3>5.2 Artificial intelligence and machine learning</h3>

                <p>Python is widely used to develop machine-learning models and AI systems.

                Libraries such as PyTorch and scikit-learn provide useful tools.</p>



                <h3>5.3 Data analysis</h3>

                <p>Python can process, organise, analyse, and visualise data. Libraries

                such as pandas and NumPy are commonly used.</p>



                <h3>5.4 Automation</h3>

                <p>Python scripts can automate repetitive tasks, such as renaming files,

                processing documents, and organising data.</p>



                <h3>5.5 Cybersecurity</h3>

                <p>Python can be used to write authorised security-testing scripts,

                analyse logs, process network data, and automate defensive tasks.</p>



                <h3>5.6 Scientific computing</h3>

                <p>Researchers use Python for numerical calculations, simulations,

                scientific experiments, and data visualisation.</p>

            </section>



            <section class="lesson-section">

                <h2>6. How does Python run?</h2>

                <p>A computer's processor ultimately works with machine-level instructions.

                Python provides tools that translate and execute the program through

                a Python implementation.</p>



                <h3>Important terms</h3>

                <ul>

                    <li><strong>Source code:</strong> The program written by a programmer.</li>

                    <li><strong>Interpreter:</strong> A program that carries out the execution

                    process for a programming language.</li>

                    <li><strong>Bytecode:</strong> An intermediate instruction format used

                    by implementations such as CPython.</li>

                    <li><strong>Runtime:</strong> The environment and processes involved

                    while a program is executing.</li>

                </ul>



                <h3>Simplified CPython execution flow</h3>

                <pre><code>Python source code

        |

        v

Compilation to bytecode

        |

        v

Python virtual machine

        |

        v

Program execution

        |

        v

Output</code></pre>

                <p>This diagram describes the general CPython process. Other Python

                implementations may work differently.</p>



                <h3>Is Python compiled or interpreted?</h3>

                <p>Python is usually called an interpreted language because its common

                execution model uses a runtime to execute code. In CPython, source code

                is first compiled into bytecode, which is then executed by the Python

                virtual machine.</p>

            </section>            <section class="lesson-section">

                <h2>7. Python versions</h2>

                <p>Python has different versions. A version identifies a particular release

                of the language implementation and its features.</p>

                <ul>

                    <li><strong>Python 2:</strong> An older major version that has reached

                    end of life.</li>

                    <li><strong>Python 3:</strong> The modern major version used for current

                    Python development.</li>

                </ul>

                <p>For this course, use Python 3.</p>

            </section>



            <section class="lesson-section">

                <h2>8. Installing and running Python</h2>

                <p>You can write and run Python programs in several ways.</p>



                <h3>Option 1: Install Python on a computer</h3>

                <p>Download Python 3 from the official Python website. During installation,

                follow the instructions for your operating system.</p>

                <p>Official website: <a href="https://www.python.org/downloads/"

                target="_blank" rel="noopener">python.org/downloads</a></p>



                <h3>Option 2: Use an online Python editor</h3>

                <p>An online editor lets you write and run Python code through a browser.

                This can be useful when you do not want to install Python.</p>



                <h3>Option 3: Use an IDE or code editor</h3>

                <p>An <strong>IDE</strong> means Integrated Development Environment.

                It is software that provides tools for writing, running, and debugging code.</p>

                <p>Examples include:</p>

                <ul>

                    <li>Visual Studio Code</li>

                    <li>PyCharm</li>

                    <li>IDLE, which is included with many Python installations</li>

                </ul>

            </section>



            <section class="lesson-section">

                <h2>9. Your first Python program</h2>

                <p>Now let's write your first program.</p>

                <pre><code>print("Hello, World!")</code></pre>



                <h3>What does this code do?</h3>

                <p>It displays the message <strong>Hello, World!</strong> on the screen.</p>



                <h3>Line-by-line explanation</h3>

                <table>

                    <thead><tr><th>Code part</th><th>Meaning</th></tr></thead>

                    <tbody>

                        <tr><td><code>print</code></td><td>A built-in function used to display information.</td></tr>

                        <tr><td><code>( )</code></td><td>Parentheses contain the arguments passed to the function.</td></tr>

                        <tr><td><code>"Hello, World!"</code></td><td>A string containing text.</td></tr>

                    </tbody>

                </table>



                <h3>Output</h3>

                <pre><code>Hello, World!</code></pre>



                <h3>What is a function?</h3>

                <p>A <strong>function</strong> is a reusable block of code that performs

                a particular task. Python provides built-in functions such as

                <code>print()</code>. You will learn to create your own functions later.</p>



                <h3>What is an argument?</h3>

                <p>An <strong>argument</strong> is a value supplied to a function when

                you call it. In this example, the string <code>"Hello, World!"</code>

                is an argument supplied to <code>print()</code>.</p>

            </section>



            <section class="lesson-section">

                <h2>10. Understanding strings and quotation marks</h2>

                <p>A <strong>string</strong> is a sequence of text characters.</p>

                <p>Python allows strings to be written using single quotes or double quotes.</p>



                <pre><code>print("Hello")

print('Hello')</code></pre>



                <p><strong>Output:</strong></p>

                <pre><code>Hello

Hello</code></pre>



                <p>Both statements display the same text.</p>



                <h3>Incorrect example</h3>

                <pre><code>print(Hello)</code></pre>

                <p>Here, Python does not recognise Hello as text. It treats it as a name

                that should refer to something, such as a variable. If that name has not

                been defined, Python raises a <code>NameError</code>.</p>



                <h3>Correct example</h3>

                <pre><code>print("Hello")</code></pre>

                <p>Quotation marks tell Python that Hello is text.</p>

            </section>



            <section class="lesson-section">

                <h2>11. Python is case-sensitive</h2>

                <p><strong>Case-sensitive</strong> means uppercase and lowercase letters

                are treated as different characters.</p>



                <pre><code>print("Hello")</code></pre>

                <p>This is correct because the built-in function is named

                <code>print</code>.</p>



                <pre><code>Print("Hello")</code></pre>

                <p>This is not the same function name. Unless you have defined a name

                called <code>Print</code>, Python will raise a <code>NameError</code>.</p>

            </section>



            <section class="lesson-section">

                <h2>12. Parentheses and punctuation</h2>

                <p>Parentheses are the symbols <code>(</code> and <code>)</code>.

                They are used in function calls and in many other Python expressions.</p>



                <p>Correct:</p>

                <pre><code>print("Welcome")</code></pre>



                <p>Incorrect:</p>

                <pre><code>print("Welcome"</code></pre>



                <p>The second example is missing a closing parenthesis. Python reports

                a syntax error because the statement is incomplete.</p>

            </section>



            <section class="lesson-section">

                <h2>13. Comments in Python</h2>

                <p>A <strong>comment</strong> is text in source code that Python ignores

                during normal execution. Programmers use comments to explain code.</p>



                <h3>Single-line comment</h3>

                <pre><code># This is my first Python program

print("Hello")</code></pre>



                <p><strong>Output:</strong></p>

                <pre><code>Hello</code></pre>



                <p>The <code>#</code> symbol starts a single-line comment. The first line

                is not executed as a Python statement.</p>



                <h3>Why use comments?</h3>

                <ul>

                    <li>To explain what a section of code does.</li>

                    <li>To make programs easier to understand.</li>

                    <li>To help other programmers maintain the code.</li>

                </ul>

            </section>



            <section class="lesson-section">

                <h2>14. Indentation in Python</h2>

                <p><strong>Indentation</strong> means spaces at the beginning of a line.

                Python uses indentation to define blocks of code.</p>

                <p>We will study blocks in detail when learning conditions and loops.

                For now, remember that indentation must be consistent.</p>



                <h3>Example</h3>

                <pre><code>if True:

    print("This line is indented")</code></pre>



                <p>The spaces before <code>print</code> show that it belongs inside the

                <code>if</code> block.</p>



                <p>Incorrect indentation can cause an <code>IndentationError</code>

                or change the structure of a program.</p>

            </section>



            <section class="lesson-section">

                <h2>15. Types of programming errors</h2>

                <p>An <strong>error</strong> is a problem in a program that prevents it

                from working as intended.</p>



                <h3>15.1 Syntax error</h3>

                <p>A syntax error occurs when code does not follow Python's grammar rules.</p>

                <pre><code>print("Hello"</code></pre>

                <p><strong>Problem:</strong> The closing parenthesis is missing.</p>

                <p><strong>Correct code:</strong></p>

                <pre><code>print("Hello")</code></pre>



                <h3>15.2 Runtime error</h3>

                <p>A runtime error happens while a program is running.</p>

                <pre><code>print(10 / 0)</code></pre>

                <p><strong>Problem:</strong> Division by zero is not allowed for ordinary

                numeric division in Python. This raises <code>ZeroDivisionError</code>.</p>



                <h3>15.3 Logical error</h3>

                <p>A logical error happens when the program runs but the instructions

                produce an incorrect result.</p>

                <pre><code>length = 10

width = 5



area = length + width

print(area)</code></pre>

                <p><strong>Problem:</strong> The program uses addition instead of

                multiplication to calculate the area of a rectangle.</p>

                <p><strong>Correct code:</strong></p>

                <pre><code>length = 10

width = 5



area = length * width

print(area)</code></pre>

                <p><strong>Output:</strong></p>

                <pre><code>50</code></pre>

            </section>



            <section class="lesson-section">

                <h2>16. Multiple print examples</h2>



                <h3>Example 1: Display your name</h3>

                <pre><code>print("My name is Saima")</code></pre>

                <p><strong>Output:</strong></p>

                <pre><code>My name is Saima</code></pre>



                <h3>Example 2: Display multiple lines</h3>

                <pre><code>print("Welcome")

print("to")

print("CodeQuest")</code></pre>

                <p><strong>Output:</strong></p>

                <pre><code>Welcome

to

CodeQuest</code></pre>

                <p>Each <code>print()</code> call normally ends with a new line.</p>



                <h3>Example 3: Display numbers</h3>

                <pre><code>print(100)

print(25)</code></pre>

                <p><strong>Output:</strong></p>

                <pre><code>100

25</code></pre>

                <p>Numbers can be supplied without quotation marks. If you put a number

                inside quotation marks, Python treats it as text instead.</p>

            </section>



            <section class="lesson-section">

                <h2>17. Dry run: understand program execution</h2>

                <p>A <strong>dry run</strong> means tracing a program step by step to

                understand what happens when it executes.</p>



                <p>Consider this program:</p>

                <pre><code>print("Python")

print("is")

print("fun")</code></pre>



                <table>

                    <thead><tr><th>Step</th><th>Instruction</th><th>What happens?</th></tr></thead>

                    <tbody>

                        <tr><td>1</td><td>First print()</td><td>Displays Python.</td></tr>

                        <tr><td>2</td><td>Second print()</td><td>Displays is on the next line.</td></tr>

                        <tr><td>3</td><td>Third print()</td><td>Displays fun on the next line.</td></tr>

                    </tbody>

                </table>



                <p><strong>Final output:</strong></p>

                <pre><code>Python

is

fun</code></pre>

            </section>



            <section class="lesson-section">

                <h2>18. Common mistakes and corrections</h2>



                <table>

                    <thead><tr><th>Incorrect code</th><th>Problem</th><th>Correct code</th></tr></thead>

                    <tbody>

                        <tr>

                            <td><code>Print("Hi")</code></td>

                            <td>Wrong capitalisation.</td>

                            <td><code>print("Hi")</code></td>

                        </tr>

                        <tr>

                            <td><code>print("Hi"</code></td>

                            <td>Missing closing parenthesis.</td>

                            <td><code>print("Hi")</code></td>

                        </tr>

                        <tr>

                            <td><code>print(Hello)</code></td>

                            <td>Text is not inside quotes.</td>

                            <td><code>print("Hello")</code></td>

                        </tr>

                        <tr>

                            <td><code>print("Hello)</code></td>

                            <td>Missing closing quotation mark.</td>

                            <td><code>print("Hello")</code></td>

                        </tr>

                    </tbody>

                </table>

            </section>



            <section class="lesson-section">

                <h2>19. Practice exercises</h2>

                <p>Try writing each program yourself before viewing the solution.</p>



                <h3>Exercise 1 — Display a message</h3>

                <p>Write a program to display: I am learning Python.</p>

                <details>

                    <summary>Show hint</summary>

                    <p>Use the <code>print()</code> function and put your message inside quotes.</p>

                </details>

                <details>

                    <summary>Show solution and explanation</summary>

                    <pre><code>print("I am learning Python.")</code></pre>

                    <p>The <code>print()</code> function displays the string supplied

                    between its parentheses.</p>

                </details>



                <h3>Exercise 2 — Display three lines</h3>

                <p>Display your name, your course, and your college on separate lines.</p>

                <details>

                    <summary>Show solution</summary>

                    <pre><code>print("My name is Saima")

print("I am a BCA student")

print("I study at my college")</code></pre>

                    <p>Each print statement displays one line.</p>

                </details>



                <h3>Exercise 3 — Add a comment</h3>

                <p>Write a comment and then display the message Hello Python.</p>

                <details>

                    <summary>Show solution</summary>

                    <pre><code># My first comment

print("Hello Python")</code></pre>

                    <p>The first line is a comment. The second line displays the message.</p>

                </details>



                <h3>Exercise 4 — Find and correct the error</h3>

                <pre><code>Print("Welcome to Python"</code></pre>

                <details>

                    <summary>Show solution</summary>

                    <pre><code>print("Welcome to Python")</code></pre>

                    <p>Two corrections were needed: use lowercase <code>print</code>

                    and add the closing parenthesis.</p>

                </details>



                <h3>Exercise 5 — Display a calculation</h3>

                <p>Write a program that displays the result of 10 + 20.</p>

                <details>

                    <summary>Show solution</summary>

                    <pre><code>print(10 + 20)</code></pre>

                    <p>Python evaluates the expression <code>10 + 20</code> and

                    <code>print()</code> displays the result.</p>

                    <p><strong>Output:</strong> 30</p>

                </details>

            </section>



            <section class="lesson-section">

                <h2>20. Chapter revision</h2>

                <ul>

                    <li>Python is a high-level, general-purpose programming language.</li>

                    <li>Guido van Rossum created Python.</li>

                    <li>Python was first released in 1991.</li>

                    <li>Python is used in web development, AI, data science, automation,

                    and many other fields.</li>

                    <li><code>print()</code> displays information.</li>

                    <li>Strings represent text and are written inside quotation marks.</li>

                    <li>Python is case-sensitive.</li>

                    <li><code>#</code> starts a single-line comment.</li>

                    <li>Indentation defines code blocks.</li>

                    <li>Syntax, runtime, and logical errors are different types of problems.</li>

                </ul>

            </section>



            <section class="lesson-section" id="chapterQuiz">

                <h2>21. Chapter knowledge check</h2>

                <p>Answer these questions using only the topics taught in this chapter.</p>



                <div class="cq-question" data-answer="b">

                    <p><strong>1. Who created Python?</strong></p>

                    <label><input type="radio" name="cq1" value="a"> Dennis Ritchie</label>

                    <label><input type="radio" name="cq1" value="b"> Guido van Rossum</label>

                    <label><input type="radio" name="cq1" value="c"> James Gosling</label>

                    <label><input type="radio" name="cq1" value="d"> Bjarne Stroustrup</label>

                    <p class="cq-feedback"></p>

                </div>



                <div class="cq-question" data-answer="c">

                    <p><strong>2. Which function displays output in Python?</strong></p>

                    <label><input type="radio" name="cq2" value="a"> input()</label>

                    <label><input type="radio" name="cq2" value="b"> display()</label>

                    <label><input type="radio" name="cq2" value="c"> print()</label>

                    <label><input type="radio" name="cq2" value="d"> show()</label>

                    <p class="cq-feedback"></p>

                </div>



                <div class="cq-question" data-answer="a">

                    <p><strong>3. Which symbol starts a single-line comment?</strong></p>

                    <label><input type="radio" name="cq3" value="a"> #</label>

                    <label><input type="radio" name="cq3" value="b"> //</label>

                    <label><input type="radio" name="cq3" value="c"> &lt;!--</label>

                    <label><input type="radio" name="cq3" value="d"> **</label>

                    <p class="cq-feedback"></p>

                </div>



                <div class="cq-question" data-answer="b">

                    <p><strong>4. Is Python case-sensitive?</strong></p>

                    <label><input type="radio" name="cq4" value="a"> No</label>

                    <label><input type="radio" name="cq4" value="b"> Yes</label>

                    <p class="cq-feedback"></p>

                </div>



                <div class="cq-question" data-answer="c">

                    <p><strong>5. What does print("Hello") display?</strong></p>

                    <label><input type="radio" name="cq5" value="a"> print</label>

                    <label><input type="radio" name="cq5" value="b"> "Hello"</label>

                    <label><input type="radio" name="cq5" value="c"> Hello</label>

                    <label><input type="radio" name="cq5" value="d"> Nothing</label>

                    <p class="cq-feedback"></p>

                </div>



                <button type="button" id="checkChapterQuiz">Check my answers</button>

                <p id="chapterQuizResult" aria-live="polite"></p>

            </section>

        `,

    };


    // =========================================================
    // CHAPTER 2 — VARIABLES AND DATA TYPES
    // =========================================================

    const chapterTwo = {
        id: "b2",
        title: "Variables and Data Types",

        quick: `
            <section class="lesson-section">
                <h2>1. What is a variable?</h2>
                <p>A <strong>variable</strong> is a name used to store a value in a program.
                Think of it as a labelled box that holds information.</p>

                <pre><code>name = "Alex"
age = 20

print(name)
print(age)</code></pre>

                <p><strong>Output:</strong></p>
                <pre><code>Alex
20</code></pre>

                <p>Here, <code>name</code> stores the text <code>"Alex"</code>, and
                <code>age</code> stores the number <code>20</code>.</p>
            </section>

            <section class="lesson-section">
                <h2>2. Creating and using variables</h2>
                <p>In Python, create a variable by writing its name, an equal sign,
                and the value you want to store.</p>

                <pre><code>city = "Vadodara"
marks = 85
price = 49.5</code></pre>

                <p>The <code>=</code> symbol is the assignment operator. It assigns
                the value on its right to the variable on its left.</p>

                <h3>Changing a variable</h3>
                <pre><code>score = 10
score = 25

print(score)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>25</code></pre>
                <p>The new value replaces the old value.</p>
            </section>

            <section class="lesson-section">
                <h2>3. Rules for naming variables</h2>
                <ul>
                    <li>A variable name can contain letters, numbers and underscores.</li>
                    <li>It cannot begin with a number.</li>
                    <li>It cannot contain spaces.</li>
                    <li>It cannot be a Python keyword such as <code>if</code> or <code>for</code>.</li>
                    <li>Variable names are case-sensitive.</li>
                </ul>

                <h3>Valid names</h3>
                <pre><code>name = "Alex"
age2 = 20
total_marks = 450</code></pre>

                <h3>Invalid names</h3>
                <pre><code>2age = 20
first name = "Alex"
class = "BCA"</code></pre>

                <p><strong>Remember:</strong> use meaningful names such as
                <code>student_name</code> instead of unclear names such as <code>x</code>.</p>
            </section>

            <section class="lesson-section">
                <h2>4. What is a data type?</h2>
                <p>A <strong>data type</strong> tells Python what kind of value is stored.</p>

                <ul>
                    <li><strong>int:</strong> whole numbers, such as <code>10</code> and <code>-5</code>.</li>
                    <li><strong>float:</strong> decimal numbers, such as <code>8.5</code>.</li>
                    <li><strong>str:</strong> text, such as <code>"Hello"</code>.</li>
                    <li><strong>bool:</strong> either <code>True</code> or <code>False</code>.</li>
                </ul>

                <pre><code>age = 20
height = 5.4
name = "Alex"
is_student = True</code></pre>
            </section>

            <section class="lesson-section">
                <h2>5. Checking a data type with type()</h2>
                <p>Python provides the built-in <code>type()</code> function to identify
                the data type of a value.</p>

                <pre><code>age = 20
price = 99.5
name = "Alex"
is_student = True

print(type(age))
print(type(price))
print(type(name))
print(type(is_student))</code></pre>

                <p><strong>Output:</strong></p>
                <pre><code>&lt;class 'int'&gt;
&lt;class 'float'&gt;
&lt;class 'str'&gt;
&lt;class 'bool'&gt;</code></pre>
            </section>

            <section class="lesson-section">
                <h2>6. Type conversion</h2>
                <p><strong>Type conversion</strong> means changing a value from one
                data type to another.</p>

                <pre><code>number = "25"
converted_number = int(number)

print(converted_number + 5)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>30</code></pre>

                <p>Common conversion functions:</p>
                <ul>
                    <li><code>int()</code> converts a suitable value to an integer.</li>
                    <li><code>float()</code> converts a suitable value to a float.</li>
                    <li><code>str()</code> converts a value to a string.</li>
                    <li><code>bool()</code> converts a value to a Boolean.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>7. Quick revision</h2>
                <ul>
                    <li>A variable stores or refers to a value.</li>
                    <li>The equal sign <code>=</code> assigns a value.</li>
                    <li><code>int</code> means integer.</li>
                    <li><code>float</code> means decimal number.</li>
                    <li><code>str</code> means text.</li>
                    <li><code>bool</code> means True or False.</li>
                    <li><code>type()</code> checks a value's type.</li>
                    <li><code>int()</code>, <code>float()</code> and <code>str()</code>
                    can convert values.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Chapter 2: Knowledge Check</h2>

                <div class="cq-question" data-answer="b">
                    <p><strong>1. What is a variable?</strong></p>
                    <label><input type="radio" name="b2q1" value="a"> A Python error</label>
                    <label><input type="radio" name="b2q1" value="b"> A name used to store a value</label>
                    <label><input type="radio" name="b2q1" value="c"> A loop</label>
                    <p class="cq-feedback"></p>
                </div>

                <div class="cq-question" data-answer="a">
                    <p><strong>2. Which data type stores whole numbers?</strong></p>
                    <label><input type="radio" name="b2q2" value="a"> int</label>
                    <label><input type="radio" name="b2q2" value="b"> str</label>
                    <label><input type="radio" name="b2q2" value="c"> bool</label>
                    <p class="cq-feedback"></p>
                </div>

                <div class="cq-question" data-answer="c">
                    <p><strong>3. What is the data type of 4.5?</strong></p>
                    <label><input type="radio" name="b2q3" value="a"> int</label>
                    <label><input type="radio" name="b2q3" value="b"> str</label>
                    <label><input type="radio" name="b2q3" value="c"> float</label>
                    <p class="cq-feedback"></p>
                </div>

                <div class="cq-question" data-answer="b">
                    <p><strong>4. Which function checks a data type?</strong></p>
                    <label><input type="radio" name="b2q4" value="a"> print()</label>
                    <label><input type="radio" name="b2q4" value="b"> type()</label>
                    <label><input type="radio" name="b2q4" value="c"> input()</label>
                    <p class="cq-feedback"></p>
                </div>

                <div class="cq-question" data-answer="a">
                    <p><strong>5. Which is a valid variable name?</strong></p>
                    <label><input type="radio" name="b2q5" value="a"> student_age</label>
                    <label><input type="radio" name="b2q5" value="b"> 2age</label>
                    <label><input type="radio" name="b2q5" value="c"> student age</label>
                    <p class="cq-feedback"></p>
                </div>

                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `,

        deep: `
            <section class="lesson-section">
                <h2>1. Introduction to variables</h2>
                <p>Programs often need to remember information while they are running.
                For example, a student management program may need to store a student's
                name, age, roll number and marks. A shopping program may need to store
                product names, prices and quantities.</p>

                <p>We use <strong>variables</strong> to work with this information.
                A variable is a name that refers to a value in a program.</p>

                <p>Think of a variable as a labelled box. The label is the variable
                name, and the information inside represents its value.</p>

                <pre><code>student_name = "Aisha"
student_age = 19

print(student_name)
print(student_age)</code></pre>

                <p><strong>Output:</strong></p>
                <pre><code>Aisha
19</code></pre>

                <p><strong>Explanation:</strong></p>
                <ol>
                    <li><code>student_name</code> is the variable name.</li>
                    <li><code>=</code> assigns a value to that variable.</li>
                    <li><code>"Aisha"</code> is the string value.</li>
                    <li><code>student_age</code> is another variable.</li>
                    <li><code>19</code> is an integer value.</li>
                    <li><code>print()</code> displays the values.</li>
                </ol>
            </section>

            <section class="lesson-section">
                <h2>2. How to create a variable</h2>
                <p>Python does not require you to declare a variable separately before
                assigning a value to it. You create the variable by assigning a value.</p>

                <p><strong>Syntax:</strong></p>
                <pre><code>variable_name = value</code></pre>

                <p><strong>Example:</strong></p>
                <pre><code>name = "Sara"
age = 20
marks = 87.5

print(name)
print(age)
print(marks)</code></pre>

                <p><strong>Output:</strong></p>
                <pre><code>Sara
20
87.5</code></pre>

                <p>The variable name is written on the left side of <code>=</code>,
                and the value is written on the right side.</p>

                <h3>Important: assignment is not the same as equality</h3>
                <p>In Python, <code>=</code> assigns a value. It does not ask whether
                two values are equal. We will study the equality operator
                <code>==</code> in the operators chapter.</p>
            </section>

            <section class="lesson-section">
                <h2>3. Understanding variable values</h2>
                <p>A variable's value can be changed while the program runs.</p>

                <pre><code>score = 10
print(score)

score = 50
print(score)</code></pre>

                <p><strong>Output:</strong></p>
                <pre><code>10
50</code></pre>

                <p><strong>Dry run:</strong></p>
                <ol>
                    <li>Python assigns <code>10</code> to <code>score</code>.</li>
                    <li>The first <code>print()</code> displays <code>10</code>.</li>
                    <li>Python then assigns <code>50</code> to the same variable.</li>
                    <li>The second <code>print()</code> displays <code>50</code>.</li>
                </ol>

                <p>The latest assignment determines the value used by the variable.</p>

                <h3>Assigning one variable to another</h3>
                <pre><code>first_number = 15
second_number = first_number

print(second_number)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>15</code></pre>
                <p>Python reads the current value of <code>first_number</code> and
                assigns that value to <code>second_number</code>.</p>
            </section>

            <section class="lesson-section">
                <h2>4. Rules for naming variables</h2>
                <p>A variable name is also called an <strong>identifier</strong>.
                Python follows specific rules for identifiers.</p>

                <ol>
                    <li><strong>Use letters, numbers and underscores:</strong>
                    for example, <code>student1</code> and <code>total_marks</code>.</li>
                    <li><strong>Do not start with a number:</strong>
                    <code>1student</code> is invalid, but <code>student1</code> is valid.</li>
                    <li><strong>Do not use spaces:</strong>
                    <code>first name</code> is invalid. Use <code>first_name</code>.</li>
                    <li><strong>Do not use special symbols:</strong>
                    names such as <code>total@marks</code> are invalid.</li>
                    <li><strong>Do not use reserved keywords:</strong>
                    words such as <code>if</code>, <code>for</code> and <code>class</code>
                    already have special meanings.</li>
                    <li><strong>Names are case-sensitive:</strong>
                    <code>age</code>, <code>Age</code> and <code>AGE</code> are different names.</li>
                </ol>

                <h3>Valid variable names</h3>
                <pre><code>name = "Aisha"
age2 = 19
total_marks = 450
student_name = "Ravi"</code></pre>

                <h3>Invalid variable names</h3>
                <pre><code>2age = 19
first name = "Aisha"
total-marks = 450
class = "BCA"</code></pre>

                <p>Invalid names cause a syntax error. Python cannot interpret them
                as valid variable assignments.</p>

                <h3>Good naming practice</h3>
                <p>Choose names that explain what the value represents.</p>
                <pre><code># Less clear
x = 500

# More meaningful
monthly_salary = 500</code></pre>
                <p>Meaningful names make programs easier to read, understand and maintain.</p>
            </section>

            <section class="lesson-section">
                <h2>5. What is a data type?</h2>
                <p>A <strong>data type</strong> describes the kind of value that a
                variable refers to. Different types of values support different
                operations.</p>

                <p>For example, Python can perform arithmetic with numbers and join
                text strings together. Knowing the type helps Python determine how
                an operation should behave.</p>

                <h3>Main built-in data types for beginners</h3>
                <ul>
                    <li><strong>int:</strong> integers, or whole numbers.</li>
                    <li><strong>float:</strong> floating-point numbers, commonly used
                    for decimal values.</li>
                    <li><strong>str:</strong> strings, or text.</li>
                    <li><strong>bool:</strong> Boolean values, either True or False.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>6. Integer (int)</h2>
                <p>An <strong>integer</strong> is a whole number without a decimal part.
                It can be positive, negative or zero.</p>

                <p><strong>Examples:</strong> <code>10</code>, <code>0</code>,
                <code>-25</code>, <code>500</code>.</p>

                <pre><code>age = 19
temperature = -3
students = 40

print(age)
print(temperature)
print(students)
print(type(age))</code></pre>

                <p><strong>Output:</strong></p>
                <pre><code>19
-3
40
&lt;class 'int'&gt;</code></pre>

                <p>Integers are useful for counting students, storing ages,
                counting items and performing whole-number calculations.</p>
            </section>

            <section class="lesson-section">
                <h2>7. Float (float)</h2>
                <p>A <strong>float</strong> represents a floating-point number.
                It is commonly used for values with a decimal part.</p>

                <p><strong>Examples:</strong> <code>3.14</code>, <code>5.5</code>,
                <code>-2.75</code>.</p>

                <pre><code>height = 5.4
price = 99.50
temperature = -2.5

print(height)
print(price)
print(temperature)
print(type(height))</code></pre>

                <p><strong>Output:</strong></p>
                <pre><code>5.4
99.5
-2.5
&lt;class 'float'&gt;</code></pre>

                <p>Notice that Python displays <code>99.50</code> as <code>99.5</code>.
                The ending zero is not needed to represent the same numeric value.</p>

                <p>Floats are useful for measurements, prices, percentages and
                calculations involving decimal values. Floating-point calculations
                can sometimes contain tiny precision differences.</p>
            </section>

            <section class="lesson-section">
                <h2>8. String (str)</h2>
                <p>A <strong>string</strong> is a sequence of text characters.
                In Python, strings are written inside quotation marks.</p>

                <p>You can use single quotation marks or double quotation marks.</p>

                <pre><code>name = "Aisha"
city = 'Vadodara'
message = "Welcome to Python"

print(name)
print(city)
print(message)
print(type(name))</code></pre>

                <p><strong>Output:</strong></p>
                <pre><code>Aisha
Vadodara
Welcome to Python
&lt;class 'str'&gt;</code></pre>

                <h3>Important difference: number and text</h3>
                <pre><code>age = 20
age_text = "20"

print(type(age))
print(type(age_text))</code></pre>

                <p><strong>Output:</strong></p>
                <pre><code>&lt;class 'int'&gt;
&lt;class 'str'&gt;</code></pre>

                <p>Although both appear to contain 20, the first is a number and
                the second is text because it is inside quotation marks.</p>
            </section>

            <section class="lesson-section">
                <h2>9. Boolean (bool)</h2>
                <p>A <strong>Boolean</strong> value represents one of two logical
                possibilities: <code>True</code> or <code>False</code>.</p>

                <pre><code>is_student = True
has_passed = False

print(is_student)
print(has_passed)
print(type(is_student))</code></pre>

                <p><strong>Output:</strong></p>
                <pre><code>True
False
&lt;class 'bool'&gt;</code></pre>

                <p>Boolean values are used when a program needs to represent a
                yes/no condition, such as whether a user is logged in or whether
                a student has passed an exam.</p>

                <p><strong>Important:</strong> Python's Boolean values start with
                capital letters: <code>True</code> and <code>False</code>.
                Writing <code>true</code> or <code>false</code> is not the same.</p>
            </section>

            <section class="lesson-section">
                <h2>10. Checking data types with type()</h2>
                <p>The built-in <code>type()</code> function tells us the type of a value.
                This is useful when you are unsure what kind of data a variable contains.</p>

                <p><strong>Syntax:</strong></p>
                <pre><code>type(value)</code></pre>

                <p><strong>Example:</strong></p>
                <pre><code>a = 100
b = 12.5
c = "Python"
d = False

print(type(a))
print(type(b))
print(type(c))
print(type(d))</code></pre>

                <p><strong>Output:</strong></p>
                <pre><code>&lt;class 'int'&gt;
&lt;class 'float'&gt;
&lt;class 'str'&gt;
&lt;class 'bool'&gt;</code></pre>

                <p>The output identifies the class associated with each value.
                For this beginner chapter, you can read these as int, float,
                str and bool respectively.</p>
            </section>

            <section class="lesson-section">
                <h2>11. Type conversion</h2>
                <p><strong>Type conversion</strong> means converting a value from
                one data type to another. Python provides built-in functions for
                common conversions.</p>

                <h3>11.1 int()</h3>
                <p><code>int()</code> converts a suitable value to an integer.
                When converting a float, the decimal part is discarded rather
                than rounded.</p>

                <pre><code>number = int(8.9)
print(number)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>8</code></pre>

                <h3>11.2 float()</h3>
                <p><code>float()</code> converts a suitable number or numeric
                string to a floating-point value.</p>

                <pre><code>number = float("25")
print(number)
print(type(number))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>25.0
&lt;class 'float'&gt;</code></pre>

                <h3>11.3 str()</h3>
                <p><code>str()</code> converts a value into text.</p>

                <pre><code>age = 20
message = "My age is " + str(age)

print(message)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>My age is 20</code></pre>

                <h3>11.4 bool()</h3>
                <p><code>bool()</code> converts a value to True or False.
                For example, zero and an empty string are considered false,
                while a non-empty string is considered true.</p>

                <pre><code>print(bool(0))
print(bool(5))
print(bool(""))
print(bool("Python"))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>False
True
False
True</code></pre>
            </section>

            <section class="lesson-section">
                <h2>12. Common type conversion errors</h2>
                <p>Not every value can be converted to every type.</p>

                <pre><code>number = int("hello")</code></pre>
                <p>This raises a <code>ValueError</code> because the text
                <code>"hello"</code> does not represent a valid integer.</p>

                <p>A numeric string can be converted:</p>
                <pre><code>number = int("45")
print(number + 5)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>50</code></pre>

                <p>Always check whether the value is suitable for the conversion
                you are trying to perform.</p>
            </section>

            <section class="lesson-section">
                <h2>13. Multiple assignment</h2>
                <p>Python allows you to assign values to multiple variables in one line.</p>

                <pre><code>name, age, city = "Aisha", 19, "Vadodara"

print(name)
print(age)
print(city)</code></pre>

                <p><strong>Output:</strong></p>
                <pre><code>Aisha
19
Vadodara</code></pre>

                <p>You can also assign the same value to multiple variables:</p>
                <pre><code>a = b = c = 10

print(a, b, c)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>10 10 10</code></pre>
            </section>

            <section class="lesson-section">
                <h2>14. Comments and variables</h2>
                <p>Comments can explain what a variable represents. Python ignores
                comments when executing the program.</p>

                <pre><code># Store the student's marks
student_marks = 85

# Display the marks
print(student_marks)</code></pre>

                <p><strong>Output:</strong></p>
                <pre><code>85</code></pre>
            </section>

            <section class="lesson-section">
                <h2>15. Complete example: student information</h2>
                <p>Let's combine variables and data types in one small program.</p>

                <pre><code>student_name = "Aisha"
student_age = 19
percentage = 86.5
is_passed = True

print("Student:", student_name)
print("Age:", student_age)
print("Percentage:", percentage)
print("Passed:", is_passed)

print(type(student_name))
print(type(student_age))
print(type(percentage))
print(type(is_passed))</code></pre>

                <p><strong>Output:</strong></p>
                <pre><code>Student: Aisha
Age: 19
Percentage: 86.5
Passed: True
&lt;class 'str'&gt;
&lt;class 'int'&gt;
&lt;class 'float'&gt;
&lt;class 'bool'&gt;</code></pre>

                <h3>Code explanation</h3>
                <ol>
                    <li><code>student_name</code> stores a string.</li>
                    <li><code>student_age</code> stores an integer.</li>
                    <li><code>percentage</code> stores a float.</li>
                    <li><code>is_passed</code> stores a Boolean value.</li>
                    <li>The first four print statements display the information.</li>
                    <li>The last four print statements display the data types.</li>
                </ol>
            </section>

            <section class="lesson-section">
                <h2>16. Common beginner mistakes</h2>
                <h3>Mistake 1: forgetting quotation marks around text</h3>
                <pre><code>name = Aisha</code></pre>
                <p>Python treats <code>Aisha</code> as a name rather than text.
                Write <code>name = "Aisha"</code>.</p>

                <h3>Mistake 2: starting a variable name with a number</h3>
                <pre><code>2marks = 90</code></pre>
                <p>Use a valid name such as <code>marks2</code>.</p>

                <h3>Mistake 3: mixing text and numbers</h3>
                <pre><code>age = "20"
print(age + 5)</code></pre>
                <p>This causes a <code>TypeError</code> because Python cannot add
                a string and an integer in this way. If you intend to calculate,
                convert the text first with <code>int(age)</code>.</p>

                <h3>Mistake 4: writing Boolean values in lowercase</h3>
                <pre><code>is_ready = true</code></pre>
                <p>Use <code>True</code> with a capital T or <code>False</code>
                with a capital F.</p>

                <h3>Mistake 5: confusing = and ==</h3>
                <p><code>=</code> assigns a value. <code>==</code> compares values.
                We will practise comparisons in the operators chapter.</p>
            </section>

            <section class="lesson-section">
                <h2>17. Practice exercises</h2>
                <ol>
                    <li>Create a variable called <code>name</code> and store your name.</li>
                    <li>Create an integer variable called <code>age</code>.</li>
                    <li>Create a float variable called <code>height</code>.</li>
                    <li>Create a Boolean variable called <code>is_student</code>.</li>
                    <li>Print all four variables.</li>
                    <li>Use <code>type()</code> to display the type of each variable.</li>
                    <li>Convert the string <code>"100"</code> into an integer.</li>
                    <li>Convert the integer <code>50</code> into a string.</li>
                    <li>Assign the same value to three variables in one statement.</li>
                    <li>Write a program that stores a product name, price and quantity,
                    then displays all three.</li>
                </ol>
            </section>

            <section class="lesson-section">
                <h2>18. Chapter summary</h2>
                <ul>
                    <li>A variable is a name that refers to a value.</li>
                    <li>Use <code>name = value</code> to assign a value.</li>
                    <li>Variable names must follow Python's identifier rules.</li>
                    <li><code>int</code> represents whole numbers.</li>
                    <li><code>float</code> represents floating-point numbers.</li>
                    <li><code>str</code> represents text.</li>
                    <li><code>bool</code> represents True or False.</li>
                    <li><code>type()</code> checks the type of a value.</li>
                    <li><code>int()</code>, <code>float()</code>, <code>str()</code>
                    and <code>bool()</code> perform common conversions.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Chapter 2: Knowledge Check</h2>

                <div class="cq-question" data-answer="b">
                    <p><strong>1. What is a variable?</strong></p>
                    <label><input type="radio" name="b2q1" value="a"> A Python error</label>
                    <label><input type="radio" name="b2q1" value="b"> A name used to store a value</label>
                    <label><input type="radio" name="b2q1" value="c"> A loop</label>
                    <p class="cq-feedback"></p>
                </div>

                <div class="cq-question" data-answer="a">
                    <p><strong>2. Which data type stores whole numbers?</strong></p>
                    <label><input type="radio" name="b2q2" value="a"> int</label>
                    <label><input type="radio" name="b2q2" value="b"> str</label>
                    <label><input type="radio" name="b2q2" value="c"> bool</label>
                    <p class="cq-feedback"></p>
                </div>

                <div class="cq-question" data-answer="c">
                    <p><strong>3. What is the data type of 4.5?</strong></p>
                    <label><input type="radio" name="b2q3" value="a"> int</label>
                    <label><input type="radio" name="b2q3" value="b"> str</label>
                    <label><input type="radio" name="b2q3" value="c"> float</label>
                    <p class="cq-feedback"></p>
                </div>

                <div class="cq-question" data-answer="b">
                    <p><strong>4. Which function checks a data type?</strong></p>
                    <label><input type="radio" name="b2q4" value="a"> print()</label>
                    <label><input type="radio" name="b2q4" value="b"> type()</label>
                    <label><input type="radio" name="b2q4" value="c"> input()</label>
                    <p class="cq-feedback"></p>
                </div>

                <div class="cq-question" data-answer="a">
                    <p><strong>5. Which is a valid variable name?</strong></p>
                    <label><input type="radio" name="b2q5" value="a"> student_age</label>
                    <label><input type="radio" name="b2q5" value="b"> 2age</label>
                    <label><input type="radio" name="b2q5" value="c"> student age</label>
                    <p class="cq-feedback"></p>
                </div>

                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `
    };

    // =========================================================
    // CHAPTER 3 — INPUT AND OUTPUT
    // =========================================================

    const chapterThree = {
        id: "b3",
        title: "Input and Output",

        quick: `
            <section class="lesson-section">
                <h2>1. What is Input and Output?</h2>
                <p><strong>Input</strong> means giving information to a computer.
                <strong>Output</strong> means receiving information from a computer.</p>
                <p>For example, entering your name is input. Displaying a welcome message is output.</p>
            </section>

            <section class="lesson-section">
                <h2>2. The print() Function</h2>
                <p>The <code>print()</code> function displays information on the screen.</p>
                <pre><code>print("Hello!")
    print(25)
    print("Welcome to Python")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Hello!
    25
    Welcome to Python</code></pre>
            </section>

            <section class="lesson-section">
                <h2>3. The input() Function</h2>
                <p>The <code>input()</code> function asks the user to enter information.</p>
                <pre><code>name = input("Enter your name: ")
    print("Hello", name)</code></pre>
                <p><strong>Example output:</strong></p>
                <pre><code>Enter your name: Aisha
    Hello Aisha</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. Important: input() Returns a String</h2>
                <p>Even if the user enters a number, <code>input()</code> returns it as text.</p>
                <pre><code>age = input("Enter age: ")
    print(type(age))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Enter age: 19
    &lt;class 'str'&gt;</code></pre>
                <p>Use <code>int()</code> or <code>float()</code> when you need a number.</p>
            </section>

            <section class="lesson-section">
                <h2>5. Taking Numeric Input</h2>
                <pre><code>age = int(input("Enter your age: "))
    print(age + 1)</code></pre>
                <p><strong>Example output:</strong></p>
                <pre><code>Enter your age: 19
    20</code></pre>
            </section>

            <section class="lesson-section">
                <h2>6. Printing Multiple Values</h2>
                <pre><code>name = "Aisha"
    age = 19

    print("Name:", name)
    print("Age:", age)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Name: Aisha
    Age: 19</code></pre>
            </section>

            <section class="lesson-section">
                <h2>7. Revision</h2>
                <ul>
                    <li><code>print()</code> displays output.</li>
                    <li><code>input()</code> accepts user input.</li>
                    <li><code>input()</code> returns a string.</li>
                    <li><code>int()</code> converts input into an integer.</li>
                    <li><code>float()</code> converts input into a decimal number.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 3</h2>

                <div class="cq-question" data-answer="b">
                    <p><strong>1. Which function displays output?</strong></p>
                    <label><input type="radio" name="b3q1" value="a"> input()</label>
                    <label><input type="radio" name="b3q1" value="b"> print()</label>
                    <label><input type="radio" name="b3q1" value="c"> type()</label>
                    <p class="cq-feedback"></p>
                </div>

                <div class="cq-question" data-answer="a">
                    <p><strong>2. Which function accepts user input?</strong></p>
                    <label><input type="radio" name="b3q2" value="a"> input()</label>
                    <label><input type="radio" name="b3q2" value="b"> print()</label>
                    <label><input type="radio" name="b3q2" value="c"> int()</label>
                    <p class="cq-feedback"></p>
                </div>

                <div class="cq-question" data-answer="c">
                    <p><strong>3. What data type does input() return?</strong></p>
                    <label><input type="radio" name="b3q3" value="a"> int</label>
                    <label><input type="radio" name="b3q3" value="b"> float</label>
                    <label><input type="radio" name="b3q3" value="c"> str</label>
                    <p class="cq-feedback"></p>
                </div>

                <div class="cq-question" data-answer="b">
                    <p><strong>4. Which function converts input into an integer?</strong></p>
                    <label><input type="radio" name="b3q4" value="a"> str()</label>
                    <label><input type="radio" name="b3q4" value="b"> int()</label>
                    <label><input type="radio" name="b3q4" value="c"> print()</label>
                    <p class="cq-feedback"></p>
                </div>

                <div class="cq-question" data-answer="a">
                    <p><strong>5. Which is an example of output?</strong></p>
                    <label><input type="radio" name="b3q5" value="a"> Displaying Hello</label>
                    <label><input type="radio" name="b3q5" value="b"> Typing your name</label>
                    <label><input type="radio" name="b3q5" value="c"> Entering your age</label>
                    <p class="cq-feedback"></p>
                </div>

                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `,

        deep: `
            <section class="lesson-section">
                <h2>1. Understanding Input and Output</h2>
                <p>A computer program often needs information from a user and then displays a result.</p>
                <ul>
                    <li><strong>Input:</strong> Information given to the program.</li>
                    <li><strong>Processing:</strong> Work performed using the information.</li>
                    <li><strong>Output:</strong> The result displayed by the program.</li>
                </ul>
                <p>Example: A calculator receives two numbers, adds them, and displays their sum.</p>
            </section>

            <section class="lesson-section">
                <h2>2. Displaying Output with print()</h2>
                <p><code>print()</code> is a built-in Python function used to display text, numbers, variables, and results.</p>
                <pre><code>print("Welcome")
    print(100)
    print(10 + 20)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Welcome
    100
    30</code></pre>
                <p>Python calculates <code>10 + 20</code> first and then displays the result.</p>
            </section>

            <section class="lesson-section">
                <h2>3. Printing Variables</h2>
                <p>A variable stores information. We can display its value using <code>print()</code>.</p>
                <pre><code>name = "Aisha"
    age = 19

    print(name)
    print(age)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Aisha
    19</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. Printing Multiple Values</h2>
                <p>We can pass multiple values to one print() function. Python separates them with spaces by default.</p>
                <pre><code>name = "Aisha"
    age = 19

    print("My name is", name, "and my age is", age)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>My name is Aisha and my age is 19</code></pre>
            </section>

            <section class="lesson-section">
                <h2>5. Taking Input with input()</h2>
                <p>The <code>input()</code> function pauses the program and waits for the user to type something and press Enter.</p>
                <pre><code>name = input("Enter your name: ")
    print("Welcome", name)</code></pre>
                <p><strong>Example interaction:</strong></p>
                <pre><code>Enter your name: Aisha
    Welcome Aisha</code></pre>
                <p>The text inside input() is called a prompt. It tells the user what to enter.</p>
            </section>

            <section class="lesson-section">
                <h2>6. Why input() Returns a String</h2>
                <p>Python treats information received through input() as text, even when the user types digits.</p>
                <pre><code>number = input("Enter a number: ")
    print(type(number))</code></pre>
                <p><strong>Example output:</strong></p>
                <pre><code>Enter a number: 25
    &lt;class 'str'&gt;</code></pre>
                <p>This happens because input() returns a string. We must convert it if we want to perform numerical calculations.</p>
            </section>

            <section class="lesson-section">
                <h2>7. Converting Input into an Integer</h2>
                <p>Use <code>int()</code> to convert suitable text into a whole number.</p>
                <pre><code>age = int(input("Enter your age: "))
    print(age + 1)</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>Enter your age: 19
    20</code></pre>
                <p>Here, the entered text "19" is converted into the integer 19 before addition.</p>
            </section>

            <section class="lesson-section">
                <h2>8. Converting Input into a Float</h2>
                <p>Use <code>float()</code> when the user may enter a decimal number.</p>
                <pre><code>price = float(input("Enter price: "))
    print(price)</code></pre>
                <p><strong>Example output:</strong></p>
                <pre><code>Enter price: 45.50
    45.5</code></pre>
            </section>

            <section class="lesson-section">
                <h2>9. A Complete Addition Program</h2>
                <pre><code>num1 = int(input("Enter first number: "))
    num2 = int(input("Enter second number: "))

    total = num1 + num2

    print("Sum =", total)</code></pre>
                <p><strong>Example interaction:</strong></p>
                <pre><code>Enter first number: 10
    Enter second number: 20
    Sum = 30</code></pre>
                <p><strong>Working:</strong> The program accepts two numbers, converts them into integers, adds them, stores the answer in total, and displays it.</p>
            </section>

            <section class="lesson-section">
                <h2>10. Using sep and end in print()</h2>
                <p>The <code>sep</code> parameter changes the separator between values.</p>
                <pre><code>print("Python", "Java", "C", sep=" - ")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Python - Java - C</code></pre>

                <p>The <code>end</code> parameter changes what print() adds at the end. By default, it moves to a new line.</p>
                <pre><code>print("Hello", end=" ")
    print("World")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Hello World</code></pre>
            </section>

            <section class="lesson-section">
                <h2>11. Common Mistakes</h2>
                <p><strong>Mistake 1: Adding input values without conversion</strong></p>
                <pre><code>a = input("First number: ")
    b = input("Second number: ")
    print(a + b)</code></pre>
                <p>If the user enters 10 and 20, the output is 1020 because both values are strings.</p>

                <p><strong>Correct version:</strong></p>
                <pre><code>a = int(input("First number: "))
    b = int(input("Second number: "))
    print(a + b)</code></pre>
                <p>Now the output is 30.</p>

                <p><strong>Mistake 2:</strong> Trying to convert non-numeric text such as "hello" into an integer causes a ValueError.</p>
            </section>

            <section class="lesson-section">
                <h2>12. Practice Exercises</h2>
                <ol>
                    <li>Ask the user for their name and display a welcome message.</li>
                    <li>Ask the user for their age and display their age after one year.</li>
                    <li>Accept two numbers and display their sum.</li>
                    <li>Accept length and width and calculate the area of a rectangle.</li>
                    <li>Accept a product price and display it.</li>
                </ol>
            </section>

            <section class="lesson-section">
                <h2>13. Chapter Summary</h2>
                <ul>
                    <li>Input is information received by a program.</li>
                    <li>Output is information displayed by a program.</li>
                    <li><code>print()</code> displays information.</li>
                    <li><code>input()</code> accepts information.</li>
                    <li><code>int()</code> converts to an integer.</li>
                    <li><code>float()</code> converts to a decimal number.</li>
                    <li><code>sep</code> changes separators and <code>end</code> changes the ending of print().</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 3</h2>
                <div class="cq-question" data-answer="b">
                    <p><strong>1. Which function displays output?</strong></p>
                    <label><input type="radio" name="b3d1" value="a"> input()</label>
                    <label><input type="radio" name="b3d1" value="b"> print()</label>
                    <label><input type="radio" name="b3d1" value="c"> int()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>2. What is the return type of input()?</strong></p>
                    <label><input type="radio" name="b3d2" value="a"> int</label>
                    <label><input type="radio" name="b3d2" value="b"> bool</label>
                    <label><input type="radio" name="b3d2" value="c"> str</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>3. Which converts text to a decimal number?</strong></p>
                    <label><input type="radio" name="b3d3" value="a"> float()</label>
                    <label><input type="radio" name="b3d3" value="b"> int()</label>
                    <label><input type="radio" name="b3d3" value="c"> print()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>4. What does sep change?</strong></p>
                    <label><input type="radio" name="b3d4" value="a"> Data type</label>
                    <label><input type="radio" name="b3d4" value="b"> Separator between values</label>
                    <label><input type="radio" name="b3d4" value="c"> User input</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>5. What is the output of print("A", "B")?</strong></p>
                    <label><input type="radio" name="b3d5" value="a"> AB</label>
                    <label><input type="radio" name="b3d5" value="b"> A-B</label>
                    <label><input type="radio" name="b3d5" value="c"> A B</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `
    };


    // =========================================================
    // CHAPTER 4 — OPERATORS IN PYTHON
    // =========================================================

    const chapterFour = {
        id: "b4",
        title: "Operators in Python",

        quick: `
            <section class="lesson-section">
                <h2>1. What are Operators?</h2>
                <p>Operators are symbols or keywords used to perform operations on values and variables.</p>
                <pre><code>a = 10
    b = 5
    print(a + b)</code></pre>
                <p><strong>Output:</strong> 15</p>
            </section>

            <section class="lesson-section">
                <h2>2. Arithmetic Operators</h2>
                <p>These operators perform mathematical calculations.</p>
                <table>
                    <tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr>
                    <tr><td>+</td><td>Addition</td><td>10 + 5</td><td>15</td></tr>
                    <tr><td>-</td><td>Subtraction</td><td>10 - 5</td><td>5</td></tr>
                    <tr><td>*</td><td>Multiplication</td><td>10 * 5</td><td>50</td></tr>
                    <tr><td>/</td><td>Division</td><td>10 / 5</td><td>2.0</td></tr>
                    <tr><td>//</td><td>Floor division</td><td>11 // 2</td><td>5</td></tr>
                    <tr><td>%</td><td>Modulus</td><td>11 % 2</td><td>1</td></tr>
                    <tr><td>**</td><td>Exponent</td><td>2 ** 3</td><td>8</td></tr>
                </table>
            </section>

            <section class="lesson-section">
                <h2>3. Comparison Operators</h2>
                <p>Comparison operators compare two values and return True or False.</p>
                <table>
                    <tr><th>Operator</th><th>Meaning</th></tr>
                    <tr><td>==</td><td>Equal to</td></tr>
                    <tr><td>!=</td><td>Not equal to</td></tr>
                    <tr><td>&gt;</td><td>Greater than</td></tr>
                    <tr><td>&lt;</td><td>Less than</td></tr>
                    <tr><td>&gt;=</td><td>Greater than or equal to</td></tr>
                    <tr><td>&lt;=</td><td>Less than or equal to</td></tr>
                </table>
                <pre><code>print(10 > 5)
    print(10 == 5)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>True
    False</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. Logical Operators</h2>
                <p>Logical operators combine or reverse conditions.</p>
                <ul>
                    <li><code>and</code>: True when both conditions are True.</li>
                    <li><code>or</code>: True when at least one condition is True.</li>
                    <li><code>not</code>: Reverses True and False.</li>
                </ul>
                <pre><code>print(10 > 5 and 8 > 3)
    print(10 < 5 or 8 > 3)
    print(not True)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>True
    True
    False</code></pre>
            </section>

            <section class="lesson-section">
                <h2>5. Assignment Operators</h2>
                <p>Assignment operators store or update values.</p>
                <pre><code>x = 10
    x += 5
    print(x)

    x *= 2
    print(x)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>15
    30</code></pre>
            </section>

            <section class="lesson-section">
                <h2>6. Membership Operators</h2>
                <p><code>in</code> checks whether an item exists in a sequence. <code>not in</code> checks that it does not exist.</p>
                <pre><code>print("a" in "apple")
    print("z" not in "apple")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>True
    True</code></pre>
            </section>

            <section class="lesson-section">
                <h2>7. Identity Operators</h2>
                <p><code>is</code> checks whether two references point to the same object. <code>is not</code> checks whether they point to different objects.</p>
                <pre><code>a = None
    print(a is None)
    print(a is not None)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>True
    False</code></pre>
                <p>Do not confuse <code>is</code> with <code>==</code>. Equality compares values; identity checks object identity.</p>
            </section>

            <section class="lesson-section">
                <h2>8. Revision</h2>
                <p>Python operators include arithmetic, comparison, logical, assignment, membership, and identity operators.</p>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 4</h2>
                <div class="cq-question" data-answer="c">
                    <p><strong>1. Which operator gives the remainder?</strong></p>
                    <label><input type="radio" name="b4q1" value="a"> //</label>
                    <label><input type="radio" name="b4q1" value="b"> /</label>
                    <label><input type="radio" name="b4q1" value="c"> %</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. What is 2 ** 3?</strong></p>
                    <label><input type="radio" name="b4q2" value="a"> 8</label>
                    <label><input type="radio" name="b4q2" value="b"> 6</label>
                    <label><input type="radio" name="b4q2" value="c"> 9</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>3. Which operator means equal to?</strong></p>
                    <label><input type="radio" name="b4q3" value="a"> =</label>
                    <label><input type="radio" name="b4q3" value="b"> ==</label>
                    <label><input type="radio" name="b4q3" value="c"> !=</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>4. Which logical operator requires both conditions to be True?</strong></p>
                    <label><input type="radio" name="b4q4" value="a"> or</label>
                    <label><input type="radio" name="b4q4" value="b"> not</label>
                    <label><input type="radio" name="b4q4" value="c"> and</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. What does // perform?</strong></p>
                    <label><input type="radio" name="b4q5" value="a"> Floor division</label>
                    <label><input type="radio" name="b4q5" value="b"> Multiplication</label>
                    <label><input type="radio" name="b4q5" value="c"> Exponentiation</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `,

        deep: `
            <section class="lesson-section">
                <h2>1. Introduction to Operators</h2>
                <p>An operator is a symbol or keyword that tells Python to perform an operation.</p>
                <p>The values on which an operator works are called <strong>operands</strong>.</p>
                <pre><code>10 + 5</code></pre>
                <p>Here, <code>+</code> is the operator, and 10 and 5 are operands.</p>
            </section>

            <section class="lesson-section">
                <h2>2. Arithmetic Operators</h2>
                <p>Arithmetic operators are used for mathematical calculations.</p>
                <table>
                    <tr><th>Operator</th><th>Operation</th><th>Example</th><th>Result</th></tr>
                    <tr><td>+</td><td>Addition</td><td>12 + 3</td><td>15</td></tr>
                    <tr><td>-</td><td>Subtraction</td><td>12 - 3</td><td>9</td></tr>
                    <tr><td>*</td><td>Multiplication</td><td>12 * 3</td><td>36</td></tr>
                    <tr><td>/</td><td>Division</td><td>12 / 3</td><td>4.0</td></tr>
                    <tr><td>//</td><td>Floor division</td><td>13 // 3</td><td>4</td></tr>
                    <tr><td>%</td><td>Modulus</td><td>13 % 3</td><td>1</td></tr>
                    <tr><td>**</td><td>Exponent</td><td>2 ** 4</td><td>16</td></tr>
                </table>
                <p><strong>Important:</strong> Normal division / produces a floating-point result. Floor division // rounds the quotient down to the nearest whole integer.</p>
            </section>

            <section class="lesson-section">
                <h2>3. Understanding Modulus (%)</h2>
                <p>The modulus operator returns the remainder after division.</p>
                <pre><code>print(10 % 3)
    print(12 % 4)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>1
    0</code></pre>
                <p>10 divided by 3 leaves remainder 1. 12 divided by 4 leaves remainder 0.</p>
                <p>Modulus is useful for checking whether a number is even or odd.</p>
                <pre><code>print(8 % 2)
    print(7 % 2)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>0
    1</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. Comparison Operators</h2>
                <p>Comparison operators compare two values. Their result is always a Boolean value: True or False.</p>
                <table>
                    <tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr>
                    <tr><td>==</td><td>Equal to</td><td>5 == 5</td><td>True</td></tr>
                    <tr><td>!=</td><td>Not equal to</td><td>5 != 3</td><td>True</td></tr>
                    <tr><td>&gt;</td><td>Greater than</td><td>5 &gt; 3</td><td>True</td></tr>
                    <tr><td>&lt;</td><td>Less than</td><td>5 &lt; 3</td><td>False</td></tr>
                    <tr><td>&gt;=</td><td>Greater or equal</td><td>5 &gt;= 5</td><td>True</td></tr>
                    <tr><td>&lt;=</td><td>Less or equal</td><td>3 &lt;= 5</td><td>True</td></tr>
                </table>
                <p>Remember: <code>=</code> assigns a value, while <code>==</code> compares two values.</p>
            </section>

            <section class="lesson-section">
                <h2>5. Logical Operators</h2>
                <p>Logical operators combine conditions or reverse a condition.</p>
                <h3>and</h3>
                <p>Returns True only when both conditions are True.</p>
                <pre><code>print(10 > 5 and 8 > 3)
    print(10 > 5 and 8 < 3)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>True
    False</code></pre>

                <h3>or</h3>
                <p>Returns True when at least one condition is True.</p>
                <pre><code>print(10 < 5 or 8 > 3)</code></pre>
                <p><strong>Output:</strong> True</p>

                <h3>not</h3>
                <p>Reverses a Boolean result.</p>
                <pre><code>print(not True)
    print(not False)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>False
    True</code></pre>
            </section>

            <section class="lesson-section">
                <h2>6. Assignment Operators</h2>
                <p>Assignment operators assign values to variables or update existing values.</p>
                <table>
                    <tr><th>Operator</th><th>Example</th><th>Equivalent form</th></tr>
                    <tr><td>=</td><td>x = 5</td><td>Assign 5 to x</td></tr>
                    <tr><td>+=</td><td>x += 3</td><td>x = x + 3</td></tr>
                    <tr><td>-=</td><td>x -= 3</td><td>x = x - 3</td></tr>
                    <tr><td>*=</td><td>x *= 3</td><td>x = x * 3</td></tr>
                    <tr><td>/=</td><td>x /= 3</td><td>x = x / 3</td></tr>
                    <tr><td>//=</td><td>x //= 3</td><td>x = x // 3</td></tr>
                    <tr><td>%=</td><td>x %= 3</td><td>x = x % 3</td></tr>
                    <tr><td>**=</td><td>x **= 3</td><td>x = x ** 3</td></tr>
                </table>
                <pre><code>x = 10
    x += 5
    print(x)

    x -= 3
    print(x)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>15
    12</code></pre>
            </section>

            <section class="lesson-section">
                <h2>7. Membership Operators</h2>
                <p>Membership operators check whether a value exists inside a sequence, such as a string, list, or tuple.</p>
                <ul>
                    <li><code>in</code> returns True if the item is present.</li>
                    <li><code>not in</code> returns True if the item is absent.</li>
                </ul>
                <pre><code>name = "Python"

    print("P" in name)
    print("z" in name)
    print("z" not in name)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>True
    False
    True</code></pre>
            </section>

            <section class="lesson-section">
                <h2>8. Identity Operators</h2>
                <p>Identity operators check whether two variables refer to the same object in memory.</p>
                <ul>
                    <li><code>is</code> checks whether references point to the same object.</li>
                    <li><code>is not</code> checks whether they point to different objects.</li>
                </ul>
                <pre><code>a = None

    print(a is None)
    print(a is not None)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>True
    False</code></pre>
                <p>Use <code>==</code> to compare values. Use <code>is</code> when checking object identity, commonly with None.</p>
            </section>

            <section class="lesson-section">
                <h2>9. Operator Precedence</h2>
                <p>Operator precedence decides which operation Python performs first when an expression contains multiple operators.</p>
                <p>For example, multiplication is performed before addition.</p>
                <pre><code>result = 10 + 2 * 3
    print(result)</code></pre>
                <p><strong>Output:</strong> 16</p>
                <p>Python calculates 2 * 3 first, then adds 10.</p>
                <p>Parentheses can change the order:</p>
                <pre><code>result = (10 + 2) * 3
    print(result)</code></pre>
                <p><strong>Output:</strong> 36</p>
            </section>

            <section class="lesson-section">
                <h2>10. Practical Example – Calculate Total Price</h2>
                <pre><code>price = 100
    quantity = 3
    total = price * quantity

    print("Total price:", total)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Total price: 300</code></pre>
            </section>

            <section class="lesson-section">
                <h2>11. Practice Exercises</h2>
                <ol>
                    <li>Find the sum, difference, product, and division of two numbers.</li>
                    <li>Find the remainder when 25 is divided by 4.</li>
                    <li>Check whether 18 is greater than 12.</li>
                    <li>Check whether a number is between 1 and 100 using and.</li>
                    <li>Use += to increase a variable by 10.</li>
                    <li>Check whether the letter "a" is present in "banana".</li>
                </ol>
            </section>

            <section class="lesson-section">
                <h2>12. Chapter Summary</h2>
                <p>Operators help Python perform calculations, comparisons, logical checks, assignments, membership checks, and identity checks.</p>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 4</h2>
                <div class="cq-question" data-answer="c">
                    <p><strong>1. What is 17 % 5?</strong></p>
                    <label><input type="radio" name="b4d1" value="a"> 1</label>
                    <label><input type="radio" name="b4d1" value="b"> 2</label>
                    <label><input type="radio" name="b4d1" value="c"> 3</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>2. Which operator checks equality?</strong></p>
                    <label><input type="radio" name="b4d2" value="a"> =</label>
                    <label><input type="radio" name="b4d2" value="b"> ==</label>
                    <label><input type="radio" name="b4d2" value="c"> !=</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>3. What is True and False?</strong></p>
                    <label><input type="radio" name="b4d3" value="a"> False</label>
                    <label><input type="radio" name="b4d3" value="b"> True</label>
                    <label><input type="radio" name="b4d3" value="c"> None</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>4. Which operator checks membership?</strong></p>
                    <label><input type="radio" name="b4d4" value="a"> is</label>
                    <label><input type="radio" name="b4d4" value="b"> ==</label>
                    <label><input type="radio" name="b4d4" value="c"> in</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>5. What is 10 + 2 * 3?</strong></p>
                    <label><input type="radio" name="b4d5" value="a"> 36</label>
                    <label><input type="radio" name="b4d5" value="b"> 16</label>
                    <label><input type="radio" name="b4d5" value="c"> 20</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `
    };


    // =========================================================
    // CHAPTER 5 — CONDITIONAL STATEMENTS
    // =========================================================

    const chapterFive = {
        id: "b5",
        title: "Conditional Statements",

        quick: `
            <section class="lesson-section">
                <h2>1. What are Conditional Statements?</h2>
                <p>Conditional statements allow a program to make decisions based on conditions.</p>
                <p>Example: If a student scores  passing marks, display "Pass". Otherwise, display "Fail".</p>
            </section>

            <section class="lesson-section">
                <h2>2. The if Statement</h2>
                <p>The if statement executes code only when its condition is True.</p>
                <pre><code>age = 20

    if age >= 18:
        print("You are an adult")</code></pre>
                <p><strong>Output:</strong> You are an adult</p>
            </section>

            <section class="lesson-section">
                <h2>3. The if-else Statement</h2>
                <p>Use else to execute another block when the if condition is False.</p>
                <pre><code>age = 16

    if age >= 18:
        print("Adult")
    else:
        print("Minor")</code></pre>
                <p><strong>Output:</strong> Minor</p>
            </section>

            <section class="lesson-section">
                <h2>4. The if-elif-else Statement</h2>
                <p>Use elif to check additional conditions.</p>
                <pre><code>marks = 75

    if marks >= 90:
        print("A grade")
    elif marks >= 60:
        print("B grade")
    else:
        print("C grade")</code></pre>
                <p><strong>Output:</strong> B grade</p>
            </section>

            <section class="lesson-section">
                <h2>5. Nested if</h2>
                <p>A nested if is an if statement placed inside another if statement.</p>
                <pre><code>age = 20
    has_id = True

    if age >= 18:
        if has_id:
            print("Entry allowed")</code></pre>
                <p><strong>Output:</strong> Entry allowed</p>
            </section>

            <section class="lesson-section">
                <h2>6. Indentation</h2>
                <p>Python uses indentation (spaces at the beginning of a line) to identify which statements belong to a block.</p>
                <pre><code>if 10 > 5:
        print("Correct")</code></pre>
                <p>The print statement is indented, so it belongs to the if block.</p>
            </section>

            <section class="lesson-section">
                <h2>7. Revision</h2>
                <ul>
                    <li><code>if</code> checks a condition.</li>
                    <li><code>else</code> runs when the if condition is False.</li>
                    <li><code>elif</code> checks another condition.</li>
                    <li>Nested if means an if inside another if.</li>
                    <li>Indentation is required in Python.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 5</h2>
                <div class="cq-question" data-answer="a">
                    <p><strong>1. Which keyword starts a condition?</strong></p>
                    <label><input type="radio" name="b5q1" value="a"> if</label>
                    <label><input type="radio" name="b5q1" value="b"> for</label>
                    <label><input type="radio" name="b5q1" value="c"> print</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>2. Which keyword handles the False case?</strong></p>
                    <label><input type="radio" name="b5q2" value="a"> elif</label>
                    <label><input type="radio" name="b5q2" value="b"> else</label>
                    <label><input type="radio" name="b5q2" value="c"> input</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. Which keyword checks another condition?</strong></p>
                    <label><input type="radio" name="b5q3" value="a"> else</label>
                    <label><input type="radio" name="b5q3" value="b"> break</label>
                    <label><input type="radio" name="b5q3" value="c"> elif</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>4. What is an if statement inside another if statement called?</strong></p>
                    <label><input type="radio" name="b5q4" value="a"> Nested if</label>
                    <label><input type="radio" name="b5q4" value="b"> Loop</label>
                    <label><input type="radio" name="b5q4" value="c"> Function</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>5. What does indentation define?</strong></p>
                    <label><input type="radio" name="b5q5" value="a"> Variable type</label>
                    <label><input type="radio" name="b5q5" value="b"> Code blocks</label>
                    <label><input type="radio" name="b5q5" value="c"> Input values</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `,

        deep: `
            <section class="lesson-section">
                <h2>1. Understanding Decision Making</h2>
                <p>Programs sometimes need to make decisions. A conditional statement allows Python to choose which instructions to execute.</p>
                <p>For example, a program can check a student's marks. If the marks are 35 or above, it can display Pass. Otherwise, it can display Fail.</p>
            </section>

            <section class="lesson-section">
                <h2>2. The if Statement</h2>
                <p>The if statement checks a condition. If the condition is True, the indented code inside the if block executes. If it is False, the block is skipped.</p>
                <p><strong>Syntax:</strong></p>
                <pre><code>if condition:
        statement</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>age = 20

    if age >= 18:
        print("You are eligible to vote")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>You are eligible to vote</code></pre>
                <p>Since 20 is greater than or equal to 18, the condition is True.</p>
            </section>

            <section class="lesson-section">
                <h2>3. Understanding True and False Conditions</h2>
                <pre><code>number = 5

    if number > 10:
        print("Greater than 10")

    print("Program finished")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Program finished</code></pre>
                <p>The condition is False, so the message inside the if block is skipped. The last print statement is outside the block, so it still executes.</p>
            </section>

            <section class="lesson-section">
                <h2>4. The if-else Statement</h2>
                <p>When we want one action for True and another for False, we use if-else.</p>
                <p><strong>Syntax:</strong></p>
                <pre><code>if condition:
        statement_if_true
    else:
        statement_if_false</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>number = 7

    if number % 2 == 0:
        print("Even number")
    else:
        print("Odd number")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Odd number</code></pre>
                <p>7 divided by 2 leaves remainder 1, so the number is odd.</p>
            </section>

            <section class="lesson-section">
                <h2>5. The if-elif-else Statement</h2>
                <p>When there are multiple possible conditions, we use elif, which means else if.</p>
                <p>Python checks conditions from top to bottom. The first True condition's block executes, and the remaining branches are skipped.</p>
                <pre><code>marks = 82

    if marks >= 90:
        print("Grade A")
    elif marks >= 75:
        print("Grade B")
    elif marks >= 50:
        print("Grade C")
    else:
        print("Fail")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Grade B</code></pre>
            </section>

            <section class="lesson-section">
                <h2>6. Why Order of Conditions Matters</h2>
                <p>More specific or higher-range conditions should be checked first when using descending grade ranges.</p>
                <p><strong>Incorrect order:</strong></p>
                <pre><code>marks = 95

    if marks >= 50:
        print("Pass")
    elif marks >= 90:
        print("Excellent")</code></pre>
                <p>Output: Pass. The first condition is already True, so Python never checks the elif.</p>
                <p><strong>Correct order:</strong></p>
                <pre><code>marks = 95

    if marks >= 90:
        print("Excellent")
    elif marks >= 50:
        print("Pass")</code></pre>
                <p>Output: Excellent.</p>
            </section>

            <section class="lesson-section">
                <h2>7. Nested if Statements</h2>
                <p>A nested if is an if statement written inside another if statement. It is useful when a second decision should be checked only after the first condition is True.</p>
                <pre><code>age = 20
    has_id = True

    if age >= 18:
        if has_id:
            print("Entry allowed")
        else:
            print("ID required")
    else:
        print("Under age")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Entry allowed</code></pre>
            </section>

            <section class="lesson-section">
                <h2>8. Combining Conditions with Logical Operators</h2>
                <p>We can use and, or, and not inside conditions.</p>
                <p><strong>Using and:</strong> Both conditions must be True.</p>
                <pre><code>age = 22

    if age >= 18 and age <= 60:
        print("Eligible")</code></pre>
                <p><strong>Output:</strong> Eligible</p>

                <p><strong>Using or:</strong> At least one condition must be True.</p>
                <pre><code>day = "Sunday"

    if day == "Saturday" or day == "Sunday":
        print("Weekend")</code></pre>
                <p><strong>Output:</strong> Weekend</p>
            </section>

            <section class="lesson-section">
                <h2>9. Indentation in Conditional Statements</h2>
                <p>Indentation means spaces at the beginning of a line. Python uses indentation to identify the statements that belong to a block.</p>
                <pre><code>if 10 > 5:
        print("This belongs to if")

    print("This is outside if")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>This belongs to if
    This is outside if</code></pre>
                <p>Incorrect indentation can cause an IndentationError or change the program's logic. Four spaces are the usual convention.</p>
            </section>

            <section class="lesson-section">
                <h2>10. Practical Program – Pass or Fail</h2>
                <pre><code>marks = int(input("Enter marks: "))

    if marks >= 35:
        print("Pass")
    else:
        print("Fail")</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>Enter marks: 72
    Pass</code></pre>
            </section>

            <section class="lesson-section">
                <h2>11. Practical Program – Positive, Negative or Zero</h2>
                <pre><code>number = int(input("Enter a number: "))

    if number > 0:
        print("Positive")
    elif number < 0:
        print("Negative")
    else:
        print("Zero")</code></pre>
                <p><strong>Example output:</strong></p>
                <pre><code>Enter a number: -5
    Negative</code></pre>
            </section>

            <section class="lesson-section">
                <h2>12. Practical Program – Largest of Two Numbers</h2>
                <pre><code>a = int(input("Enter first number: "))
    b = int(input("Enter second number: "))

    if a > b:
        print("First number is larger")
    elif b > a:
        print("Second number is larger")
    else:
        print("Both are equal")</code></pre>
            </section>

            <section class="lesson-section">
                <h2>13. Common Mistakes</h2>
                <ul>
                    <li>Forgetting the colon after if, elif, or else.</li>
                    <li>Using = instead of == for comparison.</li>
                    <li>Incorrect indentation.</li>
                    <li>Writing else with a condition. Else does not take a condition.</li>
                    <li>Putting conditions in an incorrect order.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>14. Practice Exercises</h2>
                <ol>
                    <li>Check whether a number is positive, negative, or zero.</li>
                    <li>Check whether a number is even or odd.</li>
                    <li>Ask for age and check whether the user is eligible to vote.</li>
                    <li>Accept marks and display Pass or Fail.</li>
                    <li>Accept marks and display a grade using if-elif-else.</li>
                    <li>Find the largest of three numbers.</li>
                </ol>
            </section>

            <section class="lesson-section">
                <h2>15. Chapter Summary</h2>
                <ul>
                    <li>if executes code when a condition is True.</li>
                    <li>else handles the False case.</li>
                    <li>elif checks additional conditions.</li>
                    <li>Nested if means one if inside another.</li>
                    <li>Logical operators can combine conditions.</li>
                    <li>Indentation defines code blocks.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 5</h2>
                <div class="cq-question" data-answer="a">
                    <p><strong>1. What happens when an if condition is False?</strong></p>
                    <label><input type="radio" name="b5d1" value="a"> Its block is skipped</label>
                    <label><input type="radio" name="b5d1" value="b"> It always runs</label>
                    <label><input type="radio" name="b5d1" value="c"> Program closes</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>2. Which keyword checks another condition?</strong></p>
                    <label><input type="radio" name="b5d2" value="a"> else</label>
                    <label><input type="radio" name="b5d2" value="b"> elif</label>
                    <label><input type="radio" name="b5d2" value="c"> for</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. What is the output if x = 10 and the condition is x &gt; 10?</strong></p>
                    <label><input type="radio" name="b5d3" value="a"> True</label>
                    <label><input type="radio" name="b5d3" value="b"> 10</label>
                    <label><input type="radio" name="b5d3" value="c"> False</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>4. What is a nested if?</strong></p>
                    <label><input type="radio" name="b5d4" value="a"> An if inside another if</label>
                    <label><input type="radio" name="b5d4" value="b"> A loop inside a list</label>
                    <label><input type="radio" name="b5d4" value="c"> A variable inside a string</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>5. Which symbol is used to compare equality?</strong></p>
                    <label><input type="radio" name="b5d5" value="a"> =</label>
                    <label><input type="radio" name="b5d5" value="b"> ==</label>
                    <label><input type="radio" name="b5d5" value="c"> !=</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `
    };


    // =========================================================
    // CHAPTER 6 — LOOPS IN PYTHON
    // =========================================================

    const chapterSix = {
        id: "b6",
        title: "Loops in Python",

        quick: `
            <section class="lesson-section">
                <h2>1. What is a Loop?</h2>
                <p>A loop repeats a block of code multiple times.</p>
                <p>Instead of writing the same instruction repeatedly, we can use a loop.</p>
            </section>

            <section class="lesson-section">
                <h2>2. The for Loop</h2>
                <p>A for loop is used to iterate over a sequence or a range of values.</p>
                <pre><code>for i in range(5):
        print(i)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>0
    1
    2
    3
    4</code></pre>
            </section>

            <section class="lesson-section">
                <h2>3. Understanding range()</h2>
                <p><code>range()</code> generates a sequence of numbers.</p>
                <pre><code>for i in range(1, 6):
        print(i)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>1
    2
    3
    4
    5</code></pre>
                <p>The ending value 6 is not included.</p>
            </section>

            <section class="lesson-section">
                <h2>4. The while Loop</h2>
                <p>A while loop repeats as long as its condition is True.</p>
                <pre><code>i = 1

    while i <= 5:
        print(i)
        i += 1</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>1
    2
    3
    4
    5</code></pre>
            </section>

            <section class="lesson-section">
                <h2>5. break Statement</h2>
                <p><code>break</code> immediately stops a loop.</p>
                <pre><code>for i in range(1, 6):
        if i == 3:
            break
        print(i)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>1
    2</code></pre>
            </section>

            <section class="lesson-section">
                <h2>6. continue Statement</h2>
                <p><code>continue</code> skips the current iteration and moves to the next one.</p>
                <pre><code>for i in range(1, 6):
        if i == 3:
            continue
        print(i)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>1
    2
    4
    5</code></pre>
            </section>

            <section class="lesson-section">
                <h2>7. Nested Loops</h2>
                <p>A nested loop is a loop inside another loop.</p>
                <pre><code>for i in range(2):
        for j in range(2):
            print(i, j)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>0 0
    0 1
    1 0
    1 1</code></pre>
            </section>

            <section class="lesson-section">
                <h2>8. Revision</h2>
                <ul>
                    <li><code>for</code> iterates over a sequence or range.</li>
                    <li><code>while</code> repeats while a condition is True.</li>
                    <li><code>break</code> stops a loop.</li>
                    <li><code>continue</code> skips the current iteration.</li>
                    <li>A nested loop is a loop inside another loop.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 6</h2>
                <div class="cq-question" data-answer="a">
                    <p><strong>1. What is a loop used for?</strong></p>
                    <label><input type="radio" name="b6q1" value="a"> Repeating code</label>
                    <label><input type="radio" name="b6q1" value="b"> Deleting variables</label>
                    <label><input type="radio" name="b6q1" value="c"> Creating files only</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>2. How many times does range(5) iterate?</strong></p>
                    <label><input type="radio" name="b6q2" value="a"> 4</label>
                    <label><input type="radio" name="b6q2" value="b"> 5</label>
                    <label><input type="radio" name="b6q2" value="c"> 6</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. Which loop runs while a condition is True?</strong></p>
                    <label><input type="radio" name="b6q3" value="a"> if</label>
                    <label><input type="radio" name="b6q3" value="b"> break</label>
                    <label><input type="radio" name="b6q3" value="c"> while</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>4. Which statement immediately stops a loop?</strong></p>
                    <label><input type="radio" name="b6q4" value="a"> break</label>
                    <label><input type="radio" name="b6q4" value="b"> continue</label>
                    <label><input type="radio" name="b6q4" value="c"> pass</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>5. What does continue do?</strong></p>
                    <label><input type="radio" name="b6q5" value="a"> Stops the whole program</label>
                    <label><input type="radio" name="b6q5" value="b"> Skips the current iteration</label>
                    <label><input type="radio" name="b6q5" value="c"> Restarts Python</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `,

        deep: `
            <section class="lesson-section">
                <h2>1. Introduction to Loops</h2>
                <p>A loop is a programming structure that repeats a set of instructions.</p>
                <p>Imagine displaying "Hello" five times. Without a loop, we would write five print statements. With a loop, we can write the instruction once and repeat it.</p>
                <pre><code>for i in range(5):
        print("Hello")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Hello
    Hello
    Hello
    Hello
    Hello</code></pre>
            </section>

            <section class="lesson-section">
                <h2>2. Types of Loops in Python</h2>
                <p>Python mainly provides two loop statements:</p>
                <ul>
                    <li><strong>for loop:</strong> Repeats for each item in a sequence or range.</li>
                    <li><strong>while loop:</strong> Repeats as long as a condition remains True.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>3. The for Loop</h2>
                <p>A for loop is useful when iterating over a sequence or a known range of values.</p>
                <p><strong>Syntax:</strong></p>
                <pre><code>for variable in sequence:
        statements</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>for i in range(5):
        print(i)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>0
    1
    2
    3
    4</code></pre>
                <p>The variable i receives each value produced by range(). The loop runs once for each value.</p>
            </section>

            <section class="lesson-section">
                <h2>4. Understanding range()</h2>
                <p>The range() function generates a sequence of numbers. Its ending value is excluded.</p>
                <h3>One argument: range(stop)</h3>
                <pre><code>for i in range(5):
        print(i)</code></pre>
                <p>Produces 0, 1, 2, 3, 4.</p>

                <h3>Two arguments: range(start, stop)</h3>
                <pre><code>for i in range(1, 6):
        print(i)</code></pre>
                <p>Produces 1, 2, 3, 4, 5.</p>

                <h3>Three arguments: range(start, stop, step)</h3>
                <pre><code>for i in range(2, 11, 2):
        print(i)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>2
    4
    6
    8
    10</code></pre>
                <p>The step value decides how much the number increases each time.</p>
            </section>

            <section class="lesson-section">
                <h2>5. Dry Run of a for Loop</h2>
                <pre><code>for i in range(1, 4):
        print(i)</code></pre>
                <table>
                    <tr><th>Iteration</th><th>Value of i</th><th>Output</th></tr>
                    <tr><td>1</td><td>1</td><td>1</td></tr>
                    <tr><td>2</td><td>2</td><td>2</td></tr>
                    <tr><td>3</td><td>3</td><td>3</td></tr>
                </table>
                <p>After the third iteration, there are no more values in the range, so the loop ends.</p>
            </section>

            <section class="lesson-section">
                <h2>6. The while Loop</h2>
                <p>A while loop repeatedly executes a block as long as its condition is True.</p>
                <p><strong>Syntax:</strong></p>
                <pre><code>while condition:
        statements</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>i = 1

    while i <= 5:
        print(i)
        i += 1</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>1
    2
    3
    4
    5</code></pre>
                <p>The variable i is increased after every iteration. When i becomes 6, the condition becomes False and the loop stops.</p>
            </section>

            <section class="lesson-section">
                <h2>7. Understanding an Infinite Loop</h2>
                <p>An infinite loop is a loop that never ends because its condition remains True.</p>
                <pre><code>i = 1

    while i <= 5:
        print(i)</code></pre>
                <p>This example does not update i, so it keeps printing 1. Avoid this by updating the loop variable or using a suitable stopping condition.</p>
            </section>

            <section class="lesson-section">
                <h2>8. Difference Between for and while Loops</h2>
                <table>
                    <tr><th>for loop</th><th>while loop</th></tr>
                    <tr><td>Used to iterate over a sequence or range.</td><td>Used to repeat while a condition is True.</td></tr>
                    <tr><td>Often used when the number of iterations is known.</td><td>Useful when the number of iterations depends on a condition.</td></tr>
                    <tr><td>Gets values from an iterable.</td><td>Requires a condition to control repetition.</td></tr>
                </table>
            </section>

            <section class="lesson-section">
                <h2>9. The break Statement</h2>
                <p>The break statement immediately terminates the nearest enclosing loop.</p>
                <pre><code>for i in range(1, 6):
        if i == 3:
            break
        print(i)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>1
    2</code></pre>
                <p>When i becomes 3, break stops the loop. The value 3 is not printed.</p>
            </section>

            <section class="lesson-section">
                <h2>10. The continue Statement</h2>
                <p>The continue statement skips the remaining statements in the current iteration and moves to the next iteration.</p>
                <pre><code>for i in range(1, 6):
        if i == 3:
            continue
        print(i)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>1
    2
    4
    5</code></pre>
                <p>When i is 3, print(i) is skipped. The loop continues with 4.</p>
            </section>

            <section class="lesson-section">
                <h2>11. The pass Statement</h2>
                <p>The pass statement does nothing. It is used as a placeholder when Python syntax requires a statement but you have not written the actual code yet.</p>
                <pre><code>for i in range(3):
        pass

    print("Finished")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Finished</code></pre>
            </section>

            <section class="lesson-section">
                <h2>12. Nested Loops</h2>
                <p>A nested loop is a loop placed inside another loop. For every iteration of the outer loop, the inner loop completes all its iterations.</p>
                <pre><code>for i in range(2):
        for j in range(3):
            print(i, j)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>0 0
    0 1
    0 2
    1 0
    1 1
    1 2</code></pre>
                <p>The outer loop runs twice. The inner loop runs three times for each outer iteration, producing six lines in total.</p>
            </section>

            <section class="lesson-section">
                <h2>13. Practical Program – Sum of First Five Numbers</h2>
                <pre><code>total = 0

    for i in range(1, 6):
        total = total + i

    print("Sum =", total)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Sum = 15</code></pre>
                <p>Working: 1 + 2 + 3 + 4 + 5 = 15.</p>
            </section>

            <section class="lesson-section">
                <h2>14. Practical Program – Multiplication Table</h2>
                <pre><code>number = 5

    for i in range(1, 11):
        print(number, "x", i, "=", number * i)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>5 x 1 = 5
    5 x 2 = 10
    5 x 3 = 15
    5 x 4 = 20
    5 x 5 = 25
    5 x 6 = 30
    5 x 7 = 35
    5 x 8 = 40
    5 x 9 = 45
    5 x 10 = 50</code></pre>
            </section>

            <section class="lesson-section">
                <h2>15. Practical Program – Countdown</h2>
                <pre><code>i = 5

    while i >= 1:
        print(i)
        i -= 1

    print("Go!")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>5
    4
    3
    2
    1
    Go!</code></pre>
            </section>

            <section class="lesson-section">
                <h2>16. Common Mistakes</h2>
                <ul>
                    <li>Forgetting to update the while loop variable.</li>
                    <li>Using the wrong range ending value.</li>
                    <li>Incorrect indentation.</li>
                    <li>Using break when you only want to skip one iteration.</li>
                    <li>Creating an accidental infinite loop.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>17. Practice Exercises</h2>
                <ol>
                    <li>Print numbers from 1 to 10 using a for loop.</li>
                    <li>Print even numbers from 2 to 20.</li>
                    <li>Calculate the sum of numbers from 1 to 100.</li>
                    <li>Display the multiplication table of a number entered by the user.</li>
                    <li>Print numbers from 10 down to 1 using a while loop.</li>
                    <li>Print all numbers from 1 to 10 except 5 using continue.</li>
                    <li>Stop a loop when the number reaches 7 using break.</li>
                </ol>
            </section>

            <section class="lesson-section">
                <h2>18. Chapter Summary</h2>
                <ul>
                    <li>Loops repeat instructions.</li>
                    <li>for loops iterate over sequences or ranges.</li>
                    <li>while loops continue while a condition is True.</li>
                    <li>range() generates a sequence of numbers.</li>
                    <li>break terminates a loop.</li>
                    <li>continue skips the current iteration.</li>
                    <li>pass is a placeholder statement.</li>
                    <li>Nested loops contain one loop inside another.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 6</h2>
                <div class="cq-question" data-answer="b">
                    <p><strong>1. What values are produced by range(1, 4)?</strong></p>
                    <label><input type="radio" name="b6d1" value="a"> 1, 2, 3, 4</label>
                    <label><input type="radio" name="b6d1" value="b"> 1, 2, 3</label>
                    <label><input type="radio" name="b6d1" value="c"> 0, 1, 2, 3</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. Which loop repeats while a condition is True?</strong></p>
                    <label><input type="radio" name="b6d2" value="a"> while</label>
                    <label><input type="radio" name="b6d2" value="b"> if</label>
                    <label><input type="radio" name="b6d2" value="c"> print</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. What does break do?</strong></p>
                    <label><input type="radio" name="b6d3" value="a"> Skips one iteration</label>
                    <label><input type="radio" name="b6d3" value="b"> Does nothing</label>
                    <label><input type="radio" name="b6d3" value="c"> Terminates the loop</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>4. What does continue do?</strong></p>
                    <label><input type="radio" name="b6d4" value="a"> Ends the entire program</label>
                    <label><input type="radio" name="b6d4" value="b"> Skips the current iteration</label>
                    <label><input type="radio" name="b6d4" value="c"> Repeats the same line forever</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. What is a loop inside another loop called?</strong></p>
                    <label><input type="radio" name="b6d5" value="a"> Nested loop</label>
                    <label><input type="radio" name="b6d5" value="b"> Infinite variable</label>
                    <label><input type="radio" name="b6d5" value="c"> Conditional statement</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `
    };

    // =========================================================
    // CHAPTER 7 — STRINGS IN PYTHON
    // =========================================================

    const chapterSeven = {
        id: "b7",
        title: "Strings in Python",

        quick: `
            <section class="lesson-section">
                <h2>1. What is a String?</h2>
                <p>A string is a sequence of characters enclosed in quotation marks. It is used to store text.</p>
                <pre><code>name = "Aisha"
    city = 'Vadodara'
    print(name)
    print(city)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Aisha
    Vadodara</code></pre>
            </section>

            <section class="lesson-section">
                <h2>2. Single and Double Quotes</h2>
                <p>Python allows both single and double quotes to create strings.</p>
                <pre><code>a = 'Hello'
    b = "Python"
    print(a)
    print(b)</code></pre>
                <p>Both are valid.</p>
            </section>

            <section class="lesson-section">
                <h2>3. Accessing Characters with Indexing</h2>
                <p>Each character has a position called an index. Positive indexing starts at 0. Negative indexing starts at -1 from the end.</p>
                <pre><code>word = "Python"
    print(word[0])
    print(word[2])
    print(word[-1])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>P
    t
    n</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. String Slicing</h2>
                <p>Slicing extracts part of a string.</p>
                <pre><code>word = "Python"
    print(word[0:3])
    print(word[2:5])
    print(word[:3])
    print(word[3:])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Pyt
    tho
    Pyt
    hon</code></pre>
                <p>The ending index is excluded.</p>
            </section>

            <section class="lesson-section">
                <h2>5. Common String Methods</h2>
                <pre><code>text = "python programming"

    print(text.upper())
    print(text.lower())
    print(text.title())
    print(text.capitalize())</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>PYTHON PROGRAMMING
    python programming
    Python Programming
    Python programming</code></pre>
            </section>

            <section class="lesson-section">
                <h2>6. Removing Extra Spaces</h2>
                <p><code>strip()</code> removes whitespace from both ends of a string.</p>
                <pre><code>text = "  Hello  "
    print(text.strip())</code></pre>
                <p><strong>Output:</strong> Hello</p>
            </section>

            <section class="lesson-section">
                <h2>7. Finding and Replacing Text</h2>
                <pre><code>text = "I like Java"
    print(text.replace("Java", "Python"))
    print(text.find("like"))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>I like Python
    2</code></pre>
            </section>

            <section class="lesson-section">
                <h2>8. Joining and Splitting Strings</h2>
                <pre><code>text = "apple,banana,mango"
    fruits = text.split(",")
    print(fruits)

    words = ["Learn", "Python"]
    print(" ".join(words))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>['apple', 'banana', 'mango']
    Learn Python</code></pre>
            </section>

            <section class="lesson-section">
                <h2>9. String Length and Membership</h2>
                <pre><code>word = "Python"
    print(len(word))
    print("P" in word)
    print("z" not in word)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>6
    True
    True</code></pre>
            </section>

            <section class="lesson-section">
                <h2>10. Strings are Immutable</h2>
                <p>Strings cannot be changed directly after creation. This property is called immutability.</p>
                <pre><code>word = "Cat"
    # word[0] = "B"  # This causes an error

    word = "B" + word[1:]
    print(word)</code></pre>
                <p><strong>Output:</strong> Bat</p>
            </section>

            <section class="lesson-section">
                <h2>11. Revision</h2>
                <ul>
                    <li>Strings store text.</li>
                    <li>Indexing accesses individual characters.</li>
                    <li>Slicing extracts part of a string.</li>
                    <li>String methods perform text operations.</li>
                    <li>Strings are immutable.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 7</h2>
                <div class="cq-question" data-answer="b">
                    <p><strong>1. Which data type stores text?</strong></p>
                    <label><input type="radio" name="b7q1" value="a"> int</label>
                    <label><input type="radio" name="b7q1" value="b"> str</label>
                    <label><input type="radio" name="b7q1" value="c"> bool</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. What is the index of the first character?</strong></p>
                    <label><input type="radio" name="b7q2" value="a"> 0</label>
                    <label><input type="radio" name="b7q2" value="b"> 1</label>
                    <label><input type="radio" name="b7q2" value="c"> -2</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. Which method converts text to uppercase?</strong></p>
                    <label><input type="radio" name="b7q3" value="a"> lower()</label>
                    <label><input type="radio" name="b7q3" value="b"> title()</label>
                    <label><input type="radio" name="b7q3" value="c"> upper()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>4. Which method splits a string into a list?</strong></p>
                    <label><input type="radio" name="b7q4" value="a"> join()</label>
                    <label><input type="radio" name="b7q4" value="b"> split()</label>
                    <label><input type="radio" name="b7q4" value="c"> strip()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. Strings in Python are:</strong></p>
                    <label><input type="radio" name="b7q5" value="a"> Immutable</label>
                    <label><input type="radio" name="b7q5" value="b"> Always numeric</label>
                    <label><input type="radio" name="b7q5" value="c"> Mutable</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `,

        deep: `
            <section class="lesson-section">
                <h2>1. Introduction to Strings</h2>
                <p>A string is a sequence of characters. Characters can include letters, digits, spaces, and symbols. Strings are used whenever a program needs to work with text.</p>
                <pre><code>name = "Aisha"
    message = "Welcome to Python!"
    number_text = "123"</code></pre>
                <p>Even though number_text contains digits, it is a string because it is enclosed in quotation marks.</p>
            </section>

            <section class="lesson-section">
                <h2>2. Creating Strings</h2>
                <p>Python supports single quotes, double quotes, and triple quotes.</p>
                <pre><code>a = 'Hello'
    b = "Python"
    c = """This is
    a multi-line
    string."""

    print(a)
    print(b)
    print(c)</code></pre>
                <p>Triple quotes are useful for strings that span multiple lines.</p>
            </section>

            <section class="lesson-section">
                <h2>3. String Indexing</h2>
                <p>Indexing means accessing one character using its position.</p>
                <pre><code>word = "PYTHON"

    print(word[0])
    print(word[1])
    print(word[5])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>P
    Y
    N</code></pre>
                <p>Positive indexing begins at 0.</p>
                <p>Negative indexing counts from the right, beginning at -1.</p>
                <pre><code>word = "PYTHON"

    print(word[-1])
    print(word[-2])
    print(word[-6])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>N
    O
    P</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. String Slicing</h2>
                <p>Slicing extracts a portion of a string.</p>
                <p><strong>Syntax:</strong></p>
                <pre><code>string[start:stop:step]</code></pre>
                <ul>
                    <li>start: Index where extraction begins.</li>
                    <li>stop: Index where extraction ends, but this position is excluded.</li>
                    <li>step: Number of positions to move each time.</li>
                </ul>
                <pre><code>word = "Python"

    print(word[0:3])
    print(word[2:6])
    print(word[:4])
    print(word[2:])
    print(word[::2])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Pyt
    thon
    Pyth
    thon
    Pto</code></pre>
                <p>Negative steps can reverse the direction:</p>
                <pre><code>word = "Python"
    print(word[::-1])</code></pre>
                <p><strong>Output:</strong> nohtyP</p>
            </section>

            <section class="lesson-section">
                <h2>5. Finding the Length of a String</h2>
                <p>The built-in <code>len()</code> function returns the number of characters in a string, including spaces.</p>
                <pre><code>name = "Hello World"
    print(len(name))</code></pre>
                <p><strong>Output:</strong> 11</p>
            </section>

            <section class="lesson-section">
                <h2>6. Changing Letter Case</h2>
                <table>
                    <tr><th>Method</th><th>Purpose</th></tr>
                    <tr><td>upper()</td><td>Converts letters to uppercase.</td></tr>
                    <tr><td>lower()</td><td>Converts letters to lowercase.</td></tr>
                    <tr><td>title()</td><td>Capitalizes the beginning of each word.</td></tr>
                    <tr><td>capitalize()</td><td>Capitalizes the first character.</td></tr>
                    <tr><td>swapcase()</td><td>Changes uppercase to lowercase and vice versa.</td></tr>
                </table>
                <pre><code>text = "hello PYTHON"

    print(text.upper())
    print(text.lower())
    print(text.title())
    print(text.capitalize())
    print(text.swapcase())</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>HELLO PYTHON
    hello python
    Hello Python
    Hello python
    HELLO python</code></pre>
            </section>

            <section class="lesson-section">
                <h2>7. Removing Whitespace</h2>
                <p>Whitespace includes spaces and certain invisible characters such as tabs and line breaks.</p>
                <ul>
                    <li><code>strip()</code> removes whitespace from both ends.</li>
                    <li><code>lstrip()</code> removes whitespace from the left.</li>
                    <li><code>rstrip()</code> removes whitespace from the right.</li>
                </ul>
                <pre><code>text = "  Python  "

    print(text.strip())
    print(text.lstrip())
    print(text.rstrip())</code></pre>
            </section>

            <section class="lesson-section">
                <h2>8. Searching Inside a String</h2>
                <p><code>find()</code> returns the first index of a matching substring. If it is not found, it returns -1.</p>
                <pre><code>text = "I love Python"

    print(text.find("Python"))
    print(text.find("Java"))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>7
    -1</code></pre>
                <p><code>count()</code> counts how many times a substring appears.</p>
                <pre><code>text = "banana"
    print(text.count("a"))</code></pre>
                <p><strong>Output:</strong> 3</p>
            </section>

            <section class="lesson-section">
                <h2>9. Replacing Text</h2>
                <p><code>replace()</code> creates a new string with matching text replaced.</p>
                <pre><code>text = "I like Java"
    new_text = text.replace("Java", "Python")

    print(new_text)</code></pre>
                <p><strong>Output:</strong> I like Python</p>
                <p>The original string is not changed because strings are immutable.</p>
            </section>

            <section class="lesson-section">
                <h2>10. Splitting a String</h2>
                <p><code>split()</code> divides a string into a list of smaller strings.</p>
                <pre><code>text = "red,green,blue"
    colors = text.split(",")

    print(colors)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>['red', 'green', 'blue']</code></pre>
                <p>Without an argument, split() separates text using whitespace.</p>
            </section>

            <section class="lesson-section">
                <h2>11. Joining Strings</h2>
                <p><code>join()</code> combines strings from an iterable using a separator.</p>
                <pre><code>words = ["Learn", "Python", "Today"]
    sentence = " ".join(words)

    print(sentence)</code></pre>
                <p><strong>Output:</strong> Learn Python Today</p>
                <p>The separator is the string before .join(). Here it is one space.</p>
            </section>

            <section class="lesson-section">
                <h2>12. Checking String Content</h2>
                <p>Python provides useful methods to check the type of characters in a string.</p>
                <table>
                    <tr><th>Method</th><th>Checks whether</th></tr>
                    <tr><td>isalpha()</td><td>All characters are letters.</td></tr>
                    <tr><td>isdigit()</td><td>All characters are digits.</td></tr>
                    <tr><td>isalnum()</td><td>All characters are letters or digits.</td></tr>
                    <tr><td>isspace()</td><td>All characters are whitespace.</td></tr>
                </table>
                <pre><code>print("Python".isalpha())
    print("123".isdigit())
    print("Python123".isalnum())</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>True
    True
    True</code></pre>
            </section>

            <section class="lesson-section">
                <h2>13. Membership Operators in Strings</h2>
                <p>The <code>in</code> and <code>not in</code> operators check whether text exists inside another string.</p>
                <pre><code>text = "Python Programming"

    print("Python" in text)
    print("Java" in text)
    print("Java" not in text)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>True
    False
    True</code></pre>
            </section>

            <section class="lesson-section">
                <h2>14. String Concatenation</h2>
                <p>Concatenation means joining strings using the + operator.</p>
                <pre><code>first = "Hello"
    second = "World"

    result = first + " " + second
    print(result)</code></pre>
                <p><strong>Output:</strong> Hello World</p>
            </section>

            <section class="lesson-section">
                <h2>15. String Repetition</h2>
                <p>The * operator repeats a string a specified number of times.</p>
                <pre><code>word = "Hi "
    print(word * 3)</code></pre>
                <p><strong>Output:</strong> Hi Hi Hi</p>
            </section>

            <section class="lesson-section">
                <h2>16. String Formatting with f-Strings</h2>
                <p>F-strings allow variables and expressions to be placed directly inside a string. Put the letter f before the opening quotation mark and use curly braces for expressions.</p>
                <pre><code>name = "Aisha"
    age = 19

    print(f"My name is {name} and I am {age} years old.")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>My name is Aisha and I am 19 years old.</code></pre>
            </section>

            <section class="lesson-section">
                <h2>17. String Immutability</h2>
                <p>Strings are immutable, which means individual characters cannot be modified directly.</p>
                <pre><code>word = "Cat"
    # word[0] = "B"  # TypeError

    word = "B" + word[1:]
    print(word)</code></pre>
                <p><strong>Output:</strong> Bat</p>
                <p>A new string is created and assigned to the variable.</p>
            </section>

            <section class="lesson-section">
                <h2>18. Practical Program – Palindrome Checker</h2>
                <p>A palindrome reads the same forwards and backwards.</p>
                <pre><code>text = input("Enter a word: ")

    if text == text[::-1]:
        print("Palindrome")
    else:
        print("Not a palindrome")</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>Enter a word: madam
    Palindrome</code></pre>
            </section>

            <section class="lesson-section">
                <h2>19. Common Mistakes</h2>
                <ul>
                    <li>Using an index that does not exist.</li>
                    <li>Forgetting that slicing excludes its ending index.</li>
                    <li>Trying to change a character directly.</li>
                    <li>Confusing find() with index().</li>
                    <li>Forgetting that split() returns a list.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>20. Practice Exercises</h2>
                <ol>
                    <li>Accept a word and display its length.</li>
                    <li>Display a string in uppercase and lowercase.</li>
                    <li>Print the first and last character of a string.</li>
                    <li>Reverse a string using slicing.</li>
                    <li>Check whether a word is a palindrome.</li>
                    <li>Count how many times the letter a appears in a word.</li>
                    <li>Replace spaces in a sentence with hyphens.</li>
                    <li>Split a sentence into words.</li>
                </ol>
            </section>

            <section class="lesson-section">
                <h2>21. Chapter Summary</h2>
                <p>Strings are used for text processing. Python provides indexing, slicing, built-in methods, operators, and formatting features to work with strings.</p>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 7</h2>
                <div class="cq-question" data-answer="b">
                    <p><strong>1. What is the output of "Python"[1]?</strong></p>
                    <label><input type="radio" name="b7d1" value="a"> P</label>
                    <label><input type="radio" name="b7d1" value="b"> y</label>
                    <label><input type="radio" name="b7d1" value="c"> t</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. What does text[::-1] do?</strong></p>
                    <label><input type="radio" name="b7d2" value="a"> Reverses the string</label>
                    <label><input type="radio" name="b7d2" value="b"> Deletes the string</label>
                    <label><input type="radio" name="b7d2" value="c"> Converts it to uppercase</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. Which method removes whitespace from both ends?</strong></p>
                    <label><input type="radio" name="b7d3" value="a"> split()</label>
                    <label><input type="radio" name="b7d3" value="b"> replace()</label>
                    <label><input type="radio" name="b7d3" value="c"> strip()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>4. What does split() return?</strong></p>
                    <label><input type="radio" name="b7d4" value="a"> Integer</label>
                    <label><input type="radio" name="b7d4" value="b"> List</label>
                    <label><input type="radio" name="b7d4" value="c"> Boolean</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. What does immutable mean?</strong></p>
                    <label><input type="radio" name="b7d5" value="a"> Cannot be changed directly</label>
                    <label><input type="radio" name="b7d5" value="b"> Can only store numbers</label>
                    <label><input type="radio" name="b7d5" value="c"> Automatically deleted</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `
    };


    // =========================================================
    // CHAPTER 8 — LISTS IN PYTHON
    // =========================================================

    const chapterEight = {
        id: "b8",
        title: "Lists in Python",

        quick: `
            <section class="lesson-section">
                <h2>1. What is a List?</h2>
                <p>A list stores multiple items in a single variable. Lists use square brackets and are ordered and mutable.</p>
                <pre><code>fruits = ["apple", "banana", "mango"]
    print(fruits)</code></pre>
                <p><strong>Output:</strong> ['apple', 'banana', 'mango']</p>
            </section>

            <section class="lesson-section">
                <h2>2. Accessing List Items</h2>
                <pre><code>fruits = ["apple", "banana", "mango"]

    print(fruits[0])
    print(fruits[-1])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>apple
    mango</code></pre>
            </section>

            <section class="lesson-section">
                <h2>3. Changing List Items</h2>
                <p>Lists are mutable, so their elements can be changed.</p>
                <pre><code>fruits = ["apple", "banana", "mango"]
    fruits[1] = "orange"

    print(fruits)</code></pre>
                <p><strong>Output:</strong> ['apple', 'orange', 'mango']</p>
            </section>

            <section class="lesson-section">
                <h2>4. Adding Items</h2>
                <ul>
                    <li><code>append()</code> adds an item at the end.</li>
                    <li><code>insert()</code> adds an item at a specified position.</li>
                    <li><code>extend()</code> adds items from another iterable.</li>
                </ul>
                <pre><code>numbers = [10, 20]
    numbers.append(30)
    numbers.insert(1, 15)
    print(numbers)</code></pre>
                <p><strong>Output:</strong> [10, 15, 20, 30]</p>
            </section>

            <section class="lesson-section">
                <h2>5. Removing Items</h2>
                <ul>
                    <li><code>remove()</code> removes a matching value.</li>
                    <li><code>pop()</code> removes and returns an item.</li>
                    <li><code>clear()</code> removes all items.</li>
                    <li><code>del</code> deletes an item or the entire list variable.</li>
                </ul>
                <pre><code>numbers = [10, 20, 30]
    numbers.remove(20)
    print(numbers)</code></pre>
                <p><strong>Output:</strong> [10, 30]</p>
            </section>

            <section class="lesson-section">
                <h2>6. List Slicing and Length</h2>
                <pre><code>numbers = [10, 20, 30, 40, 50]

    print(numbers[1:4])
    print(len(numbers))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>[20, 30, 40]
    5</code></pre>
            </section>

            <section class="lesson-section">
                <h2>7. Sorting and Reversing</h2>
                <pre><code>numbers = [4, 1, 3, 2]

    numbers.sort()
    print(numbers)

    numbers.reverse()
    print(numbers)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>[1, 2, 3, 4]
    [4, 3, 2, 1]</code></pre>
            </section>

            <section class="lesson-section">
                <h2>8. Looping Through a List</h2>
                <pre><code>fruits = ["apple", "banana", "mango"]

    for fruit in fruits:
        print(fruit)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>apple
    banana
    mango</code></pre>
            </section>

            <section class="lesson-section">
                <h2>9. Revision</h2>
                <ul>
                    <li>Lists use square brackets.</li>
                    <li>Lists are ordered and mutable.</li>
                    <li>Indexing accesses elements.</li>
                    <li>append() adds an item at the end.</li>
                    <li>remove() removes a matching value.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 8</h2>
                <div class="cq-question" data-answer="a">
                    <p><strong>1. Which brackets create a list?</strong></p>
                    <label><input type="radio" name="b8q1" value="a"> [ ]</label>
                    <label><input type="radio" name="b8q1" value="b"> ( )</label>
                    <label><input type="radio" name="b8q1" value="c"> { }</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>2. Are lists mutable?</strong></p>
                    <label><input type="radio" name="b8q2" value="a"> No</label>
                    <label><input type="radio" name="b8q2" value="b"> Yes</label>
                    <label><input type="radio" name="b8q2" value="c"> Only sometimes</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. Which method adds an item at the end?</strong></p>
                    <label><input type="radio" name="b8q3" value="a"> remove()</label>
                    <label><input type="radio" name="b8q3" value="b"> clear()</label>
                    <label><input type="radio" name="b8q3" value="c"> append()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>4. What does len() return for a list?</strong></p>
                    <label><input type="radio" name="b8q4" value="a"> Number of items</label>
                    <label><input type="radio" name="b8q4" value="b"> Last item</label>
                    <label><input type="radio" name="b8q4" value="c"> First item</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>5. Which method sorts a list in place?</strong></p>
                    <label><input type="radio" name="b8q5" value="a"> reverse()</label>
                    <label><input type="radio" name="b8q5" value="b"> sort()</label>
                    <label><input type="radio" name="b8q5" value="c"> append()</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `,

        deep: `
            <section class="lesson-section">
                <h2>1. Introduction to Lists</h2>
                <p>A list is a built-in Python data structure used to store multiple values in one variable.</p>
                <pre><code>student = ["Aisha", 19, 86.5, True]
    print(student)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>['Aisha', 19, 86.5, True]</code></pre>
                <p>A list can contain different data types.</p>
            </section>

            <section class="lesson-section">
                <h2>2. Important Features of Lists</h2>
                <ul>
                    <li><strong>Ordered:</strong> Items keep their position.</li>
                    <li><strong>Mutable:</strong> Items can be changed.</li>
                    <li><strong>Duplicates allowed:</strong> The same value can appear more than once.</li>
                    <li><strong>Multiple data types:</strong> A list can contain strings, numbers, Booleans, and other objects.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>3. Creating Lists</h2>
                <pre><code>numbers = [10, 20, 30]
    names = ["Aisha", "Sara", "Riya"]
    mixed = [10, "Python", 3.5, True]
    empty = []

    print(numbers)
    print(names)
    print(mixed)
    print(empty)</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. Accessing List Elements</h2>
                <p>List indexing begins at 0.</p>
                <pre><code>fruits = ["apple", "banana", "mango"]

    print(fruits[0])
    print(fruits[1])
    print(fruits[2])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>apple
    banana
    mango</code></pre>
                <p>Negative indexes access items from the end.</p>
                <pre><code>print(fruits[-1])
    print(fruits[-2])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>mango
    banana</code></pre>
            </section>

            <section class="lesson-section">
                <h2>5. List Slicing</h2>
                <p>Slicing extracts a portion of a list using start, stop, and optional step values.</p>
                <pre><code>numbers = [10, 20, 30, 40, 50]

    print(numbers[1:4])
    print(numbers[:3])
    print(numbers[2:])
    print(numbers[::-1])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>[20, 30, 40]
    [10, 20, 30]
    [30, 40, 50]
    [50, 40, 30, 20, 10]</code></pre>
            </section>

            <section class="lesson-section">
                <h2>6. Changing List Elements</h2>
                <p>Lists are mutable, so an element can be changed using its index.</p>
                <pre><code>fruits = ["apple", "banana", "mango"]

    fruits[1] = "orange"

    print(fruits)</code></pre>
                <p><strong>Output:</strong> ['apple', 'orange', 'mango']</p>
            </section>

            <section class="lesson-section">
                <h2>7. Adding Items to a List</h2>
                <h3>append()</h3>
                <p>Adds one item at the end.</p>
                <pre><code>numbers = [10, 20]
    numbers.append(30)
    print(numbers)</code></pre>
                <p>Output: [10, 20, 30]</p>

                <h3>insert()</h3>
                <p>Adds an item at a specified index.</p>
                <pre><code>numbers = [10, 30]
    numbers.insert(1, 20)
    print(numbers)</code></pre>
                <p>Output: [10, 20, 30]</p>

                <h3>extend()</h3>
                <p>Adds items from another iterable.</p>
                <pre><code>a = [1, 2]
    a.extend([3, 4])
    print(a)</code></pre>
                <p>Output: [1, 2, 3, 4]</p>
            </section>

            <section class="lesson-section">
                <h2>8. Removing Items from a List</h2>
                <table>
                    <tr><th>Method or statement</th><th>Purpose</th></tr>
                    <tr><td>remove(value)</td><td>Removes the first matching value.</td></tr>
                    <tr><td>pop(index)</td><td>Removes and returns an item at an index. Without an index, removes the last item.</td></tr>
                    <tr><td>clear()</td><td>Removes all items.</td></tr>
                    <tr><td>del</td><td>Deletes an item, slice, or list variable.</td></tr>
                </table>
                <pre><code>numbers = [10, 20, 30, 40]

    numbers.remove(20)
    print(numbers)

    removed = numbers.pop()
    print(removed)
    print(numbers)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>[10, 30, 40]
    40
    [10, 30]</code></pre>
            </section>

            <section class="lesson-section">
                <h2>9. Finding List Information</h2>
                <pre><code>numbers = [10, 20, 30, 20]

    print(len(numbers))
    print(numbers.count(20))
    print(numbers.index(30))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>4
    2
    2</code></pre>
                <ul>
                    <li><code>len()</code> returns the number of elements.</li>
                    <li><code>count()</code> counts occurrences of a value.</li>
                    <li><code>index()</code> returns the first index of a value.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>10. Sorting a List</h2>
                <p><code>sort()</code> changes the original list and sorts it in ascending order by default.</p>
                <pre><code>numbers = [4, 1, 3, 2]
    numbers.sort()
    print(numbers)</code></pre>
                <p><strong>Output:</strong> [1, 2, 3, 4]</p>
                <p>For descending order:</p>
                <pre><code>numbers.sort(reverse=True)
    print(numbers)</code></pre>
                <p><strong>Output:</strong> [4, 3, 2, 1]</p>
            </section>

            <section class="lesson-section">
                <h2>11. The sorted() Function</h2>
                <p><code>sorted()</code> returns a new sorted list without changing the original list.</p>
                <pre><code>numbers = [4, 1, 3, 2]

    new_numbers = sorted(numbers)

    print(new_numbers)
    print(numbers)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>[1, 2, 3, 4]
    [4, 1, 3, 2]</code></pre>
            </section>

            <section class="lesson-section">
                <h2>12. Reversing a List</h2>
                <p><code>reverse()</code> reverses the order of elements in the original list.</p>
                <pre><code>numbers = [1, 2, 3]
    numbers.reverse()
    print(numbers)</code></pre>
                <p><strong>Output:</strong> [3, 2, 1]</p>
            </section>

            <section class="lesson-section">
                <h2>13. Looping Through a List</h2>
                <p>A for loop can visit each element.</p>
                <pre><code>fruits = ["apple", "banana", "mango"]

    for fruit in fruits:
        print(fruit)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>apple
    banana
    mango</code></pre>
            </section>

            <section class="lesson-section">
                <h2>14. Checking Membership</h2>
                <p>Use <code>in</code> and <code>not in</code> to check whether an item exists in a list.</p>
                <pre><code>fruits = ["apple", "banana", "mango"]

    print("banana" in fruits)
    print("grape" not in fruits)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>True
    True</code></pre>
            </section>

            <section class="lesson-section">
                <h2>15. Copying a List</h2>
                <p>Assigning one list variable to another does not create an independent copy. Both names refer to the same list.</p>
                <pre><code>a = [1, 2, 3]
    b = a

    b.append(4)
    print(a)</code></pre>
                <p><strong>Output:</strong> [1, 2, 3, 4]</p>
                <p>Use <code>copy()</code> to create a separate shallow copy:</p>
                <pre><code>a = [1, 2, 3]
    b = a.copy()

    b.append(4)

    print(a)
    print(b)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>[1, 2, 3]
    [1, 2, 3, 4]</code></pre>
            </section>

            <section class="lesson-section">
                <h2>16. Nested Lists</h2>
                <p>A nested list is a list that contains another list.</p>
                <pre><code>matrix = [
        [1, 2],
        [3, 4]
    ]

    print(matrix[0])
    print(matrix[1][0])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>[1, 2]
    3</code></pre>
            </section>

            <section class="lesson-section">
                <h2>17. Common Mistakes</h2>
                <ul>
                    <li>Using an index outside the list's range.</li>
                    <li>Confusing append() and extend().</li>
                    <li>Assuming sort() returns a new sorted list. It returns None and changes the original list.</li>
                    <li>Trying to remove a value that does not exist.</li>
                    <li>Confusing a list copy with a second reference to the same list.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>18. Practice Exercises</h2>
                <ol>
                    <li>Create a list of five fruits and display it.</li>
                    <li>Display the first and last elements.</li>
                    <li>Add an item using append() and insert().</li>
                    <li>Remove an item using remove() and pop().</li>
                    <li>Sort a list of numbers in ascending and descending order.</li>
                    <li>Find the largest and smallest numbers using max() and min().</li>
                    <li>Calculate the sum of a list using sum().</li>
                    <li>Count how many times a value appears in a list.</li>
                </ol>
            </section>

            <section class="lesson-section">
                <h2>19. Chapter Summary</h2>
                <p>Lists store multiple values in an ordered, changeable collection. You can access, update, add, remove, search, sort, copy, and loop through list elements.</p>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 8</h2>
                <div class="cq-question" data-answer="c">
                    <p><strong>1. Which method adds one item at the end?</strong></p>
                    <label><input type="radio" name="b8d1" value="a"> insert()</label>
                    <label><input type="radio" name="b8d1" value="b"> extend()</label>
                    <label><input type="radio" name="b8d1" value="c"> append()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. What is the output of [10, 20, 30][1]?</strong></p>
                    <label><input type="radio" name="b8d2" value="a"> 20</label>
                    <label><input type="radio" name="b8d2" value="b"> 10</label>
                    <label><input type="radio" name="b8d2" value="c"> 30</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>3. Which method removes all list items?</strong></p>
                    <label><input type="radio" name="b8d3" value="a"> remove()</label>
                    <label><input type="radio" name="b8d3" value="b"> clear()</label>
                    <label><input type="radio" name="b8d3" value="c"> append()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>4. Which function returns a new sorted list?</strong></p>
                    <label><input type="radio" name="b8d4" value="a"> reverse()</label>
                    <label><input type="radio" name="b8d4" value="b"> sort()</label>
                    <label><input type="radio" name="b8d4" value="c"> sorted()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. Which method creates a shallow list copy?</strong></p>
                    <label><input type="radio" name="b8d5" value="a"> copy()</label>
                    <label><input type="radio" name="b8d5" value="b"> clear()</label>
                    <label><input type="radio" name="b8d5" value="c"> count()</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `
    };


    // =========================================================
    // CHAPTER 9 — TUPLES AND SETS
    // =========================================================

    const chapterNine = {
        id: "b9",
        title: "Tuples and Sets",

        quick: `
            <section class="lesson-section">
                <h2>1. What is a Tuple?</h2>
                <p>A tuple stores multiple items in an ordered collection. Tuples are immutable and usually use parentheses.</p>
                <pre><code>colors = ("red", "green", "blue")
    print(colors)</code></pre>
                <p><strong>Output:</strong> ('red', 'green', 'blue')</p>
            </section>

            <section class="lesson-section">
                <h2>2. Accessing Tuple Items</h2>
                <pre><code>colors = ("red", "green", "blue")
    print(colors[0])
    print(colors[-1])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>red
    blue</code></pre>
            </section>

            <section class="lesson-section">
                <h2>3. Tuple Immutability</h2>
                <p>Tuple items cannot be changed, added, or removed directly after creation.</p>
            </section>

            <section class="lesson-section">
                <h2>4. What is a Set?</h2>
                <p>A set is an unordered collection of unique elements. Sets use curly braces or set().</p>
                <pre><code>numbers = {1, 2, 2, 3, 3}
    print(numbers)</code></pre>
                <p><strong>Output:</strong> {1, 2, 3}</p>
                <p>Duplicate values are automatically removed. The display order is not guaranteed.</p>
            </section>

            <section class="lesson-section">
                <h2>5. Adding and Removing Set Items</h2>
                <pre><code>fruits = {"apple", "banana"}

    fruits.add("mango")
    fruits.remove("banana")

    print(fruits)</code></pre>
                <p>The set now contains apple and mango. Set display order can vary.</p>
            </section>

            <section class="lesson-section">
                <h2>6. Set Operations</h2>
                <pre><code>a = {1, 2, 3}
    b = {3, 4, 5}

    print(a | b)
    print(a & b)
    print(a - b)
    print(a ^ b)</code></pre>
                <p><strong>Operations:</strong></p>
                <ul>
                    <li><code>|</code> Union: all unique items from both sets.</li>
                    <li><code>&</code> Intersection: common items.</li>
                    <li><code>-</code> Difference: items in the first set but not the second.</li>
                    <li><code>^</code> Symmetric difference: items in either set but not both.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>7. Tuple vs Set</h2>
                <table>
                    <tr><th>Tuple</th><th>Set</th></tr>
                    <tr><td>Ordered</td><td>Unordered</td></tr>
                    <tr><td>Immutable</td><td>Mutable collection</td></tr>
                    <tr><td>Allows duplicates</td><td>Unique elements only</td></tr>
                    <tr><td>Uses parentheses</td><td>Uses curly braces or set()</td></tr>
                </table>
            </section>

            <section class="lesson-section">
                <h2>8. Revision</h2>
                <ul>
                    <li>Tuples are ordered and immutable.</li>
                    <li>Sets store unique elements.</li>
                    <li>Use add() to add one set element.</li>
                    <li>Use union and intersection for set operations.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 9</h2>
                <div class="cq-question" data-answer="b">
                    <p><strong>1. Which collection is immutable?</strong></p>
                    <label><input type="radio" name="b9q1" value="a"> Set</label>
                    <label><input type="radio" name="b9q1" value="b"> Tuple</label>
                    <label><input type="radio" name="b9q1" value="c"> List</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. Which collection removes duplicate values?</strong></p>
                    <label><input type="radio" name="b9q2" value="a"> Set</label>
                    <label><input type="radio" name="b9q2" value="b"> List</label>
                    <label><input type="radio" name="b9q2" value="c"> String</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. Which method adds an item to a set?</strong></p>
                    <label><input type="radio" name="b9q3" value="a"> append()</label>
                    <label><input type="radio" name="b9q3" value="b"> insert()</label>
                    <label><input type="radio" name="b9q3" value="c"> add()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>4. Which operator gives the intersection?</strong></p>
                    <label><input type="radio" name="b9q4" value="a"> |</label>
                    <label><input type="radio" name="b9q4" value="b"> &amp;</label>
                    <label><input type="radio" name="b9q4" value="c"> -</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. How do you create an empty set?</strong></p>
                    <label><input type="radio" name="b9q5" value="a"> set()</label>
                    <label><input type="radio" name="b9q5" value="b"> {}</label>
                    <label><input type="radio" name="b9q5" value="c"> []</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `,

        deep: `
            <section class="lesson-section">
                <h2>1. Introduction to Tuples</h2>
                <p>A tuple is a built-in Python collection used to store multiple items in one variable. A tuple is ordered and immutable.</p>
                <pre><code>colors = ("red", "green", "blue")
    print(colors)</code></pre>
                <p><strong>Output:</strong> ('red', 'green', 'blue')</p>
            </section>

            <section class="lesson-section">
                <h2>2. Features of Tuples</h2>
                <ul>
                    <li><strong>Ordered:</strong> Items have fixed positions.</li>
                    <li><strong>Immutable:</strong> Items cannot be changed directly.</li>
                    <li><strong>Duplicates allowed:</strong> Repeated values are permitted.</li>
                    <li><strong>Multiple data types:</strong> Tuples can store different kinds of values.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>3. Creating Tuples</h2>
                <pre><code>numbers = (10, 20, 30)
    names = ("Aisha", "Sara")
    mixed = (10, "Python", 3.5)
    empty = ()

    print(numbers)
    print(mixed)</code></pre>
                <p>A tuple can also be created without parentheses by separating values with commas, although parentheses make the intention clearer.</p>
            </section>

            <section class="lesson-section">
                <h2>4. Creating a Tuple with One Item</h2>
                <p>A single-item tuple must include a trailing comma.</p>
                <pre><code>a = (10,)
    b = (10)

    print(type(a))
    print(type(b))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>&lt;class 'tuple'&gt;
    &lt;class 'int'&gt;</code></pre>
                <p>The comma makes the first value a tuple. Parentheses alone do not.</p>
            </section>

            <section class="lesson-section">
                <h2>5. Accessing Tuple Elements</h2>
                <pre><code>colors = ("red", "green", "blue")

    print(colors[0])
    print(colors[-1])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>red
    blue</code></pre>
            </section>

            <section class="lesson-section">
                <h2>6. Tuple Slicing</h2>
                <pre><code>numbers = (10, 20, 30, 40, 50)

    print(numbers[1:4])
    print(numbers[:3])
    print(numbers[::-1])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>(20, 30, 40)
    (10, 20, 30)
    (50, 40, 30, 20, 10)</code></pre>
            </section>

            <section class="lesson-section">
                <h2>7. Tuple Immutability</h2>
                <p>Tuples cannot be modified directly after creation.</p>
                <pre><code>numbers = (10, 20, 30)

    # numbers[0] = 100
    # This causes a TypeError.</code></pre>
                <p>You can create a new tuple if you need different values.</p>
                <pre><code>numbers = (10, 20, 30)
    numbers = (100,) + numbers[1:]

    print(numbers)</code></pre>
                <p><strong>Output:</strong> (100, 20, 30)</p>
            </section>

            <section class="lesson-section">
                <h2>8. Tuple Methods</h2>
                <p>Because tuples are immutable, they have fewer methods than lists.</p>
                <ul>
                    <li><code>count()</code> returns the number of occurrences of a value.</li>
                    <li><code>index()</code> returns the first index of a value.</li>
                </ul>
                <pre><code>numbers = (10, 20, 10, 30)

    print(numbers.count(10))
    print(numbers.index(20))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>2
    1</code></pre>
            </section>

            <section class="lesson-section">
                <h2>9. Tuple Unpacking</h2>
                <p>Tuple unpacking assigns tuple items to separate variables.</p>
                <pre><code>student = ("Aisha", 19, 86.5)

    name, age, percentage = student

    print(name)
    print(age)
    print(percentage)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Aisha
    19
    86.5</code></pre>
                <p>The number of variables should match the number of tuple elements unless extended unpacking is used.</p>
            </section>

            <section class="lesson-section">
                <h2>10. Introduction to Sets</h2>
                <p>A set is a collection that stores unique elements. It is unordered, so it does not provide positional indexing.</p>
                <pre><code>numbers = {1, 2, 2, 3, 3}
    print(numbers)</code></pre>
                <p><strong>Output:</strong> {1, 2, 3}</p>
                <p>Duplicate values are removed automatically. The order in which set elements appear is not guaranteed.</p>
            </section>

            <section class="lesson-section">
                <h2>11. Features of Sets</h2>
                <ul>
                    <li>Sets contain unique elements.</li>
                    <li>Sets are unordered collections.</li>
                    <li>Sets are mutable, so elements can be added and removed.</li>
                    <li>Set elements must be hashable. Common immutable values such as strings, numbers, and tuples of hashable values can be stored.</li>
                    <li>A set cannot contain a list or dictionary as an element.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>12. Creating Sets</h2>
                <pre><code>fruits = {"apple", "banana", "mango"}
    numbers = {1, 2, 3}
    empty_set = set()

    print(fruits)
    print(numbers)
    print(empty_set)</code></pre>
                <p>Important: <code>{}</code> creates an empty dictionary, not an empty set. Use <code>set()</code> for an empty set.</p>
            </section>

            <section class="lesson-section">
                <h2>13. Adding Elements to Sets</h2>
                <p><code>add()</code> adds one element.</p>
                <pre><code>numbers = {1, 2}
    numbers.add(3)
    print(numbers)</code></pre>
                <p>The set contains 1, 2, and 3.</p>
                <p><code>update()</code> adds elements from another iterable.</p>
                <pre><code>numbers = {1, 2}
    numbers.update([3, 4, 5])
    print(numbers)</code></pre>
                <p>The set contains 1, 2, 3, 4, and 5.</p>
            </section>

            <section class="lesson-section">
                <h2>14. Removing Elements from Sets</h2>
                <table>
                    <tr><th>Method</th><th>Purpose</th></tr>
                    <tr><td>remove()</td><td>Removes an item; raises KeyError if absent.</td></tr>
                    <tr><td>discard()</td><td>Removes an item if present; does not raise an error if absent.</td></tr>
                    <tr><td>pop()</td><td>Removes and returns an arbitrary element.</td></tr>
                    <tr><td>clear()</td><td>Removes all elements.</td></tr>
                </table>
                <pre><code>numbers = {10, 20, 30}

    numbers.discard(20)
    print(numbers)</code></pre>
                <p>The remaining elements are 10 and 30. Their display order is not guaranteed.</p>
            </section>

            <section class="lesson-section">
                <h2>15. Set Union</h2>
                <p>Union combines all unique elements from two sets.</p>
                <pre><code>a = {1, 2, 3}
    b = {3, 4, 5}

    print(a | b)
    print(a.union(b))</code></pre>
                <p><strong>Result:</strong> {1, 2, 3, 4, 5}</p>
            </section>

            <section class="lesson-section">
                <h2>16. Set Intersection</h2>
                <p>Intersection returns elements common to both sets.</p>
                <pre><code>a = {1, 2, 3}
    b = {3, 4, 5}

    print(a & b)
    print(a.intersection(b))</code></pre>
                <p><strong>Result:</strong> {3}</p>
            </section>

            <section class="lesson-section">
                <h2>17. Set Difference</h2>
                <p>Difference returns elements present in the first set but not in the second.</p>
                <pre><code>a = {1, 2, 3}
    b = {3, 4, 5}

    print(a - b)
    print(b - a)</code></pre>
                <p><strong>Result:</strong></p>
                <pre><code>{1, 2}
    {4, 5}</code></pre>
                <p>Difference depends on the order of the sets.</p>
            </section>

            <section class="lesson-section">
                <h2>18. Symmetric Difference</h2>
                <p>Symmetric difference returns elements that belong to either set but not both.</p>
                <pre><code>a = {1, 2, 3}
    b = {3, 4, 5}

    print(a ^ b)</code></pre>
                <p><strong>Result:</strong> {1, 2, 4, 5}</p>
            </section>

            <section class="lesson-section">
                <h2>19. Checking Set Membership</h2>
                <pre><code>colors = {"red", "green", "blue"}

    print("red" in colors)
    print("yellow" not in colors)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>True
    True</code></pre>
            </section>

            <section class="lesson-section">
                <h2>20. Tuple vs Set</h2>
                <table>
                    <tr><th>Basis</th><th>Tuple</th><th>Set</th></tr>
                    <tr><td>Order</td><td>Ordered</td><td>Unordered</td></tr>
                    <tr><td>Mutability</td><td>Immutable</td><td>Mutable</td></tr>
                    <tr><td>Duplicates</td><td>Allowed</td><td>Not allowed</td></tr>
                    <tr><td>Indexing</td><td>Supported</td><td>Not supported</td></tr>
                    <tr><td>Syntax</td><td>( )</td><td>{ } or set()</td></tr>
                </table>
            </section>

            <section class="lesson-section">
                <h2>21. Common Mistakes</h2>
                <ul>
                    <li>Forgetting the comma in a one-item tuple.</li>
                    <li>Trying to modify a tuple directly.</li>
                    <li>Using indexing on a set.</li>
                    <li>Assuming set elements will always display in the same order.</li>
                    <li>Using {} when an empty set is required.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>22. Practice Exercises</h2>
                <ol>
                    <li>Create a tuple of five numbers and display its first item.</li>
                    <li>Count how many times a value appears in a tuple.</li>
                    <li>Unpack a tuple into three variables.</li>
                    <li>Create a set containing duplicate values and observe the result.</li>
                    <li>Add and remove elements from a set.</li>
                    <li>Find the union and intersection of two sets.</li>
                    <li>Find the difference and symmetric difference of two sets.</li>
                </ol>
            </section>

            <section class="lesson-section">
                <h2>23. Chapter Summary</h2>
                <p>Tuples are ordered and immutable. Sets are mutable collections of unique elements. Both are useful when a program needs to group related values.</p>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 9</h2>
                <div class="cq-question" data-answer="a">
                    <p><strong>1. Which syntax creates a one-item tuple?</strong></p>
                    <label><input type="radio" name="b9d1" value="a"> (10,)</label>
                    <label><input type="radio" name="b9d1" value="b"> (10)</label>
                    <label><input type="radio" name="b9d1" value="c"> [10]</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>2. Which collection does not support indexing?</strong></p>
                    <label><input type="radio" name="b9d2" value="a"> Tuple</label>
                    <label><input type="radio" name="b9d2" value="b"> Set</label>
                    <label><input type="radio" name="b9d2" value="c"> List</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. Which method adds multiple elements to a set?</strong></p>
                    <label><input type="radio" name="b9d3" value="a"> append()</label>
                    <label><input type="radio" name="b9d3" value="b"> insert()</label>
                    <label><input type="radio" name="b9d3" value="c"> update()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>4. What does union return?</strong></p>
                    <label><input type="radio" name="b9d4" value="a"> All unique elements from both sets</label>
                    <label><input type="radio" name="b9d4" value="b"> Only common elements</label>
                    <label><input type="radio" name="b9d4" value="c"> Only elements from the first set</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>5. Which method safely ignores a missing set element?</strong></p>
                    <label><input type="radio" name="b9d5" value="a"> remove()</label>
                    <label><input type="radio" name="b9d5" value="b"> discard()</label>
                    <label><input type="radio" name="b9d5" value="c"> pop()</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `
    };


    // =========================================================
    // CHAPTER 10 — DICTIONARIES IN PYTHON
    // =========================================================

    const chapterTen = {
        id: "b10",
        title: "Dictionaries in Python",

        quick: `
            <section class="lesson-section">
                <h2>1. What is a Dictionary?</h2>
                <p>A dictionary stores information in key-value pairs. Each key is used to access its corresponding value.</p>
                <pre><code>student = {
        "name": "Aisha",
        "age": 19,
        "course": "BCA"
    }

    print(student)</code></pre>
            </section>

            <section class="lesson-section">
                <h2>2. Accessing Values</h2>
                <pre><code>student = {"name": "Aisha", "age": 19}

    print(student["name"])
    print(student["age"])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Aisha
    19</code></pre>
            </section>

            <section class="lesson-section">
                <h2>3. Using get()</h2>
                <p><code>get()</code> accesses a value without raising a KeyError when the key is missing.</p>
                <pre><code>student = {"name": "Aisha"}

    print(student.get("name"))
    print(student.get("age", "Not found"))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Aisha
    Not found</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. Adding and Updating Values</h2>
                <pre><code>student = {"name": "Aisha"}

    student["age"] = 19
    student["name"] = "Sara"

    print(student)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>{'name': 'Sara', 'age': 19}</code></pre>
            </section>

            <section class="lesson-section">
                <h2>5. Removing Items</h2>
                <pre><code>student = {"name": "Aisha", "age": 19}

    student.pop("age")
    print(student)</code></pre>
                <p><strong>Output:</strong> {'name': 'Aisha'}</p>
            </section>

            <section class="lesson-section">
                <h2>6. Dictionary Methods</h2>
                <ul>
                    <li><code>keys()</code> returns the keys.</li>
                    <li><code>values()</code> returns the values.</li>
                    <li><code>items()</code> returns key-value pairs.</li>
                    <li><code>update()</code> adds or updates entries.</li>
                    <li><code>clear()</code> removes all entries.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>7. Looping Through a Dictionary</h2>
                <pre><code>student = {"name": "Aisha", "age": 19}

    for key, value in student.items():
        print(key, value)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>name Aisha
    age 19</code></pre>
            </section>

            <section class="lesson-section">
                <h2>8. Nested Dictionaries</h2>
                <p>A dictionary can contain another dictionary as a value.</p>
                <pre><code>students = {
        "student1": {"name": "Aisha", "age": 19},
        "student2": {"name": "Sara", "age": 20}
    }

    print(students["student1"]["name"])</code></pre>
                <p><strong>Output:</strong> Aisha</p>
            </section>

            <section class="lesson-section">
                <h2>9. Revision</h2>
                <ul>
                    <li>Dictionaries store key-value pairs.</li>
                    <li>Keys must be unique and hashable.</li>
                    <li>Values can be of different data types.</li>
                    <li>Use keys to access values.</li>
                    <li>Use items() to loop through key-value pairs.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 10</h2>
                <div class="cq-question" data-answer="b">
                    <p><strong>1. What does a dictionary store?</strong></p>
                    <label><input type="radio" name="b10q1" value="a"> Only individual characters</label>
                    <label><input type="radio" name="b10q1" value="b"> Key-value pairs</label>
                    <label><input type="radio" name="b10q1" value="c"> Only unique numbers</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. Which method safely accesses a possibly missing key?</strong></p>
                    <label><input type="radio" name="b10q2" value="a"> get()</label>
                    <label><input type="radio" name="b10q2" value="b"> clear()</label>
                    <label><input type="radio" name="b10q2" value="c"> popitem()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. Which method returns key-value pairs?</strong></p>
                    <label><input type="radio" name="b10q3" value="a"> keys()</label>
                    <label><input type="radio" name="b10q3" value="b"> values()</label>
                    <label><input type="radio" name="b10q3" value="c"> items()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>4. How do you access the value for key "name"?</strong></p>
                    <label><input type="radio" name="b10q4" value="a"> student(name)</label>
                    <label><input type="radio" name="b10q4" value="b"> student["name"]</label>
                    <label><input type="radio" name="b10q4" value="c"> student.name()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. Can dictionary values have different data types?</strong></p>
                    <label><input type="radio" name="b10q5" value="a"> Yes</label>
                    <label><input type="radio" name="b10q5" value="b"> No</label>
                    <label><input type="radio" name="b10q5" value="c"> Only strings are allowed</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `,

        deep: `
            <section class="lesson-section">
                <h2>1. Introduction to Dictionaries</h2>
                <p>A dictionary is a built-in Python data structure used to store information as key-value pairs.</p>
                <p>A key identifies a value. For example, in a student record, "name" can be a key and "Aisha" its value.</p>
                <pre><code>student = {
        "name": "Aisha",
        "age": 19,
        "course": "BCA"
    }

    print(student)</code></pre>
            </section>

            <section class="lesson-section">
                <h2>2. Features of Dictionaries</h2>
                <ul>
                    <li><strong>Key-value structure:</strong> Every entry has a key and a value.</li>
                    <li><strong>Mutable:</strong> Entries can be added, updated, and removed.</li>
                    <li><strong>Unique keys:</strong> A key can appear only once in a dictionary.</li>
                    <li><strong>Insertion ordered:</strong> Python dictionaries preserve insertion order.</li>
                    <li><strong>Flexible values:</strong> Values can have different data types.</li>
                    <li><strong>Hashable keys:</strong> Keys must be hashable, such as strings, numbers, or suitable tuples.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>3. Creating a Dictionary</h2>
                <pre><code>student = {
        "name": "Aisha",
        "age": 19,
        "percentage": 86.5,
        "is_student": True
    }

    print(student)</code></pre>
                <p>Keys and values are separated by colons. Entries are separated by commas.</p>
                <p>An empty dictionary can be created using <code>{}</code> or <code>dict()</code>.</p>
            </section>

            <section class="lesson-section">
                <h2>4. Accessing Dictionary Values</h2>
                <p>Use a key inside square brackets to access its value.</p>
                <pre><code>student = {
        "name": "Aisha",
        "age": 19
    }

    print(student["name"])
    print(student["age"])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Aisha
    19</code></pre>
                <p>If the key does not exist, square-bracket access raises a KeyError.</p>
            </section>

            <section class="lesson-section">
                <h2>5. Using get()</h2>
                <p>The <code>get()</code> method retrieves a value without raising a KeyError if the key is absent.</p>
                <pre><code>student = {"name": "Aisha"}

    print(student.get("name"))
    print(student.get("age"))
    print(student.get("age", 0))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Aisha
    None
    0</code></pre>
                <p>You can provide a default value as the second argument.</p>
            </section>

            <section class="lesson-section">
                <h2>6. Adding New Items</h2>
                <p>Assign a value to a new key to add an entry.</p>
                <pre><code>student = {"name": "Aisha"}

    student["age"] = 19
    student["course"] = "BCA"

    print(student)</code></pre>
                <p>The dictionary now contains three entries.</p>
            </section>

            <section class="lesson-section">
                <h2>7. Updating Existing Values</h2>
                <p>Assigning a new value to an existing key updates that entry.</p>
                <pre><code>student = {"name": "Aisha", "age": 19}

    student["age"] = 20

    print(student)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>{'name': 'Aisha', 'age': 20}</code></pre>
            </section>

            <section class="lesson-section">
                <h2>8. Updating Multiple Entries with update()</h2>
                <p>The <code>update()</code> method adds new entries or changes existing ones.</p>
                <pre><code>student = {"name": "Aisha", "age": 19}

    student.update({
        "age": 20,
        "course": "BCA"
    })

    print(student)</code></pre>
            </section>

            <section class="lesson-section">
                <h2>9. Removing Dictionary Items</h2>
                <table>
                    <tr><th>Method or statement</th><th>Purpose</th></tr>
                    <tr><td>pop(key)</td><td>Removes the specified key and returns its value.</td></tr>
                    <tr><td>popitem()</td><td>Removes and returns the last inserted key-value pair.</td></tr>
                    <tr><td>clear()</td><td>Removes all entries.</td></tr>
                    <tr><td>del</td><td>Deletes a specified entry or the entire dictionary variable.</td></tr>
                </table>
                <pre><code>student = {
        "name": "Aisha",
        "age": 19,
        "course": "BCA"
    }

    student.pop("age")
    print(student)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>{'name': 'Aisha', 'course': 'BCA'}</code></pre>
            </section>

            <section class="lesson-section">
                <h2>10. Dictionary Methods: keys(), values(), items()</h2>
                <pre><code>student = {
        "name": "Aisha",
        "age": 19
    }

    print(student.keys())
    print(student.values())
    print(student.items())</code></pre>
                <ul>
                    <li><code>keys()</code> provides a view of all keys.</li>
                    <li><code>values()</code> provides a view of all values.</li>
                    <li><code>items()</code> provides a view of key-value pairs.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>11. Looping Through a Dictionary</h2>
                <p>Loop through keys:</p>
                <pre><code>student = {"name": "Aisha", "age": 19}

    for key in student:
        print(key)</code></pre>
                <p>Loop through values:</p>
                <pre><code>for value in student.values():
        print(value)</code></pre>
                <p>Loop through both keys and values:</p>
                <pre><code>for key, value in student.items():
        print(key, ":", value)</code></pre>
            </section>

            <section class="lesson-section">
                <h2>12. Checking Whether a Key Exists</h2>
                <p>The <code>in</code> operator checks whether a key exists in a dictionary.</p>
                <pre><code>student = {"name": "Aisha", "age": 19}

    print("name" in student)
    print("marks" in student)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>True
    False</code></pre>
                <p>By default, this checks keys, not values.</p>
            </section>

            <section class="lesson-section">
                <h2>13. Dictionary Length</h2>
                <p><code>len()</code> returns the number of key-value pairs.</p>
                <pre><code>student = {
        "name": "Aisha",
        "age": 19,
        "course": "BCA"
    }

    print(len(student))</code></pre>
                <p><strong>Output:</strong> 3</p>
            </section>

            <section class="lesson-section">
                <h2>14. Nested Dictionaries</h2>
                <p>A nested dictionary is a dictionary containing another dictionary as a value.</p>
                <pre><code>students = {
        "student1": {
            "name": "Aisha",
            "age": 19
        },
        "student2": {
            "name": "Sara",
            "age": 20
        }
    }

    print(students["student1"]["name"])
    print(students["student2"]["age"])</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Aisha
    20</code></pre>
            </section>

            <section class="lesson-section">
                <h2>15. Practical Program – Student Record</h2>
                <pre><code>student = {}

    student["name"] = input("Enter name: ")
    student["age"] = int(input("Enter age: "))
    student["course"] = input("Enter course: ")

    print("Student Details")
    print("Name:", student["name"])
    print("Age:", student["age"])
    print("Course:", student["course"])</code></pre>
                <p>This program collects student details and stores them in a dictionary.</p>
            </section>

            <section class="lesson-section">
                <h2>16. Dictionary vs List</h2>
                <table>
                    <tr><th>List</th><th>Dictionary</th></tr>
                    <tr><td>Stores individual items.</td><td>Stores key-value pairs.</td></tr>
                    <tr><td>Accessed using indexes.</td><td>Accessed using keys.</td></tr>
                    <tr><td>Created using square brackets.</td><td>Created using curly braces with key-value pairs.</td></tr>
                    <tr><td>Duplicate values are allowed.</td><td>Keys must be unique.</td></tr>
                </table>
            </section>

            <section class="lesson-section">
                <h2>17. Common Mistakes</h2>
                <ul>
                    <li>Forgetting quotation marks around string keys.</li>
                    <li>Using a key that does not exist with square brackets.</li>
                    <li>Using a mutable object such as a list as a dictionary key.</li>
                    <li>Confusing keys() with values().</li>
                    <li>Assuming in checks values instead of keys.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>18. Practice Exercises</h2>
                <ol>
                    <li>Create a dictionary containing your name, age, and course.</li>
                    <li>Display the value of the name key.</li>
                    <li>Add a marks key and update its value.</li>
                    <li>Remove one entry using pop().</li>
                    <li>Display all keys and values separately.</li>
                    <li>Loop through the dictionary and print each key-value pair.</li>
                    <li>Create a nested dictionary for two students.</li>
                    <li>Check whether a particular key exists.</li>
                </ol>
            </section>

            <section class="lesson-section">
                <h2>19. Chapter Summary</h2>
                <p>Dictionaries store data using key-value pairs. They are useful for representing structured information such as student records, product details, and user profiles.</p>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 10</h2>
                <div class="cq-question" data-answer="b">
                    <p><strong>1. What is stored in a dictionary?</strong></p>
                    <label><input type="radio" name="b10d1" value="a"> Only indexes</label>
                    <label><input type="radio" name="b10d1" value="b"> Key-value pairs</label>
                    <label><input type="radio" name="b10d1" value="c"> Only unique values</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. What does get() return when a key is missing and no default is supplied?</strong></p>
                    <label><input type="radio" name="b10d2" value="a"> None</label>
                    <label><input type="radio" name="b10d2" value="b"> 0</label>
                    <label><input type="radio" name="b10d2" value="c"> KeyError</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. Which method returns key-value pairs?</strong></p>
                    <label><input type="radio" name="b10d3" value="a"> keys()</label>
                    <label><input type="radio" name="b10d3" value="b"> values()</label>
                    <label><input type="radio" name="b10d3" value="c"> items()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>4. Which statement checks whether a key exists?</strong></p>
                    <label><input type="radio" name="b10d4" value="a"> "name" == student</label>
                    <label><input type="radio" name="b10d4" value="b"> "name" in student</label>
                    <label><input type="radio" name="b10d4" value="c"> student("name")</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. What does pop("age") do?</strong></p>
                    <label><input type="radio" name="b10d5" value="a"> Removes the age entry and returns its value</label>
                    <label><input type="radio" name="b10d5" value="b"> Deletes the entire dictionary</label>
                    <label><input type="radio" name="b10d5" value="c"> Adds an age entry</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `
    };

    const chapterEleven = {
        id: "b11",
        title: "Functions",

        quick: `
            <section class="lesson-section">
                <h2>1. What is a function?</h2>
                <p>A <strong>function</strong> is a reusable block of code that performs a particular task. Instead of writing the same code repeatedly, we can create a function and call it whenever needed.</p>
                <pre><code>def greet():
        print("Hello!")

    greet()</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Hello!</code></pre>
                <p><code>def</code> defines a function. <code>greet()</code> calls or executes it.</p>
            </section>

            <section class="lesson-section">
                <h2>2. Function syntax</h2>
                <pre><code>def function_name():
        # statements
        pass

    function_name()</code></pre>
                <ul>
                    <li><strong>def:</strong> Keyword used to define a function.</li>
                    <li><strong>Function name:</strong> Name used to identify the function.</li>
                    <li><strong>Parentheses:</strong> Hold parameters, if any.</li>
                    <li><strong>Colon:</strong> Starts the function body.</li>
                    <li><strong>Indentation:</strong> Shows which statements belong to the function.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>3. Functions with parameters</h2>
                <p>A <strong>parameter</strong> is a variable written in the function definition. It receives a value when the function is called.</p>
                <pre><code>def greet(name):
        print("Hello", name)

    greet("Aisha")
    greet("Rahul")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Hello Aisha
    Hello Rahul</code></pre>
                <p>Here, <code>name</code> is the parameter. <code>"Aisha"</code> and <code>"Rahul"</code> are arguments.</p>
            </section>

            <section class="lesson-section">
                <h2>4. The return statement</h2>
                <p><code>return</code> sends a result back to the place where the function was called.</p>
                <pre><code>def add(a, b):
        return a + b

    result = add(10, 20)
    print(result)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>30</code></pre>
                <p><code>print()</code> displays a value. <code>return</code> gives a value back to the caller. They are not the same.</p>
            </section>

            <section class="lesson-section">
                <h2>5. Default parameters</h2>
                <p>A default parameter has a value that is used when the caller does not provide an argument.</p>
                <pre><code>def greet(name="Student"):
        print("Welcome", name)

    greet()
    greet("Aisha")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Welcome Student
    Welcome Aisha</code></pre>
            </section>

            <section class="lesson-section">
                <h2>6. Why are functions useful?</h2>
                <ul>
                    <li>They avoid repeating code.</li>
                    <li>They make programs easier to read.</li>
                    <li>They make debugging easier.</li>
                    <li>They divide large programs into smaller tasks.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 11</h2>
                <div class="cq-question" data-answer="b">
                    <p><strong>1. Which keyword defines a function?</strong></p>
                    <label><input type="radio" name="b11q1" value="a"> function</label>
                    <label><input type="radio" name="b11q1" value="b"> def</label>
                    <label><input type="radio" name="b11q1" value="c"> create</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. What is a parameter?</strong></p>
                    <label><input type="radio" name="b11q2" value="a"> A variable in a function definition</label>
                    <label><input type="radio" name="b11q2" value="b"> A loop</label>
                    <label><input type="radio" name="b11q2" value="c"> An output statement</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. Which keyword sends a result back?</strong></p>
                    <label><input type="radio" name="b11q3" value="a"> print</label>
                    <label><input type="radio" name="b11q3" value="b"> input</label>
                    <label><input type="radio" name="b11q3" value="c"> return</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>4. What is an argument?</strong></p>
                    <label><input type="radio" name="b11q4" value="a"> Function name</label>
                    <label><input type="radio" name="b11q4" value="b"> A value passed when calling a function</label>
                    <label><input type="radio" name="b11q4" value="c"> A comment</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. What happens if a default parameter is not given an argument?</strong></p>
                    <label><input type="radio" name="b11q5" value="a"> Its default value is used</label>
                    <label><input type="radio" name="b11q5" value="b"> Python always stops</label>
                    <label><input type="radio" name="b11q5" value="c"> It becomes a list</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `,

        deep: `
            <section class="lesson-section">
                <h2>1. Understanding functions in detail</h2>
                <p>Imagine that you need to calculate the total price of several purchases. You could write the addition code repeatedly, but that creates unnecessary repetition. A function lets you write the calculation once and reuse it.</p>
                <pre><code>def calculate_total(price, quantity):
        total = price * quantity
        return total

    first = calculate_total(100, 2)
    second = calculate_total(50, 3)

    print(first)
    print(second)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>200
    150</code></pre>
                <p><strong>Step-by-step:</strong></p>
                <ol>
                    <li><code>def calculate_total(price, quantity):</code> defines the function and its two parameters.</li>
                    <li><code>total = price * quantity</code> multiplies the values.</li>
                    <li><code>return total</code> sends the calculated result back.</li>
                    <li>The function is called twice with different arguments.</li>
                    <li><code>print()</code> displays both returned results.</li>
                </ol>
            </section>

            <section class="lesson-section">
                <h2>2. Positional arguments</h2>
                <p>Positional arguments are matched to parameters according to their order.</p>
                <pre><code>def student(name, age):
        print(name)
        print(age)

    student("Aisha", 19)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Aisha
    19</code></pre>
                <p>The first argument goes to <code>name</code>, and the second goes to <code>age</code>.</p>
            </section>

            <section class="lesson-section">
                <h2>3. Keyword arguments</h2>
                <p>Keyword arguments specify parameter names while calling a function. Their order can be changed.</p>
                <pre><code>def student(name, age):
        print(name, age)

    student(age=19, name="Aisha")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Aisha 19</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. Default arguments</h2>
                <p>Default values make arguments optional when the caller is happy to use the predefined value.</p>
                <pre><code>def order(item, quantity=1):
        print(item, quantity)

    order("Notebook")
    order("Pen", 5)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Notebook 1
    Pen 5</code></pre>
                <p>In the first call, quantity uses its default value of 1. In the second call, it receives 5.</p>
            </section>

            <section class="lesson-section">
                <h2>5. Returning multiple values</h2>
                <p>A Python function can return multiple values. They are received together, commonly through unpacking.</p>
                <pre><code>def calculate(a, b):
        return a + b, a - b

    addition, subtraction = calculate(10, 5)

    print(addition)
    print(subtraction)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>15
    5</code></pre>
                <p>Python packs the returned values into a tuple, which is unpacked into two variables.</p>
            </section>

            <section class="lesson-section">
                <h2>6. Local and global variables</h2>
                <p>A <strong>local variable</strong> is created inside a function and is normally accessible only within that function.</p>
                <pre><code>def show():
        message = "Hello"
        print(message)

    show()</code></pre>
                <p>A <strong>global variable</strong> is defined outside functions and can be read from inside them.</p>
                <pre><code>name = "Aisha"

    def show_name():
        print(name)

    show_name()</code></pre>
                <p>Use local variables where possible. They help keep functions independent and easier to understand.</p>
            </section>

            <section class="lesson-section">
                <h2>7. Recursion – a function calling itself</h2>
                <p><strong>Recursion</strong> occurs when a function calls itself to solve a smaller version of a problem. It needs a base case to stop.</p>
                <pre><code>def countdown(n):
        if n == 0:
            print("Done!")
        else:
            print(n)
            countdown(n - 1)

    countdown(3)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>3
    2
    1
    Done!</code></pre>
                <p>The base case is <code>n == 0</code>. Without a stopping condition, recursion can continue until Python raises a recursion-depth error.</p>
            </section>

            <section class="lesson-section">
                <h2>8. Common mistakes</h2>
                <ul>
                    <li>Forgetting parentheses when calling a function.</li>
                    <li>Forgetting the colon after the function definition.</li>
                    <li>Using incorrect indentation.</li>
                    <li>Expecting a function to return a value when it only uses <code>print()</code>.</li>
                    <li>Calling a function with the wrong number of required arguments.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 11 (Deep)</h2>
                <div class="cq-question" data-answer="c">
                    <p><strong>1. Which argument type uses parameter names?</strong></p>
                    <label><input type="radio" name="b11d1" value="a"> Positional</label>
                    <label><input type="radio" name="b11d1" value="b"> Required</label>
                    <label><input type="radio" name="b11d1" value="c"> Keyword</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. What is a base case in recursion?</strong></p>
                    <label><input type="radio" name="b11d2" value="a"> A condition that stops recursive calls</label>
                    <label><input type="radio" name="b11d2" value="b"> A variable outside a function</label>
                    <label><input type="radio" name="b11d2" value="c"> A Python module</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>3. What does a function return when it has no return statement?</strong></p>
                    <label><input type="radio" name="b11d3" value="a"> 0</label>
                    <label><input type="radio" name="b11d3" value="b"> None</label>
                    <label><input type="radio" name="b11d3" value="c"> False</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>4. What is a local variable?</strong></p>
                    <label><input type="radio" name="b11d4" value="a"> A variable in every Python file</label>
                    <label><input type="radio" name="b11d4" value="b"> A built-in keyword</label>
                    <label><input type="radio" name="b11d4" value="c"> A variable defined inside a function</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. What does <code>return a, b</code> provide?</strong></p>
                    <label><input type="radio" name="b11d5" value="a"> A tuple containing both values</label>
                    <label><input type="radio" name="b11d5" value="b"> Only a string</label>
                    <label><input type="radio" name="b11d5" value="c"> A loop</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `
    };

    const chapterTwelve = {
        id: "b12",
        title: "Basic Problem Solving",

        quick: `
            <section class="lesson-section">
                <h2>1. What is problem solving?</h2>
                <p><strong>Problem solving</strong> means understanding a problem and developing a logical sequence of steps to find its solution.</p>
                <p>In programming, we first understand what the program must do, then design the steps, write code, and test the result.</p>
            </section>

            <section class="lesson-section">
                <h2>2. The four basic steps</h2>
                <ol>
                    <li><strong>Understand the problem:</strong> Identify what is being asked.</li>
                    <li><strong>Plan the solution:</strong> Decide the steps and required logic.</li>
                    <li><strong>Write the code:</strong> Convert the steps into Python statements.</li>
                    <li><strong>Test and debug:</strong> Run the program and correct errors.</li>
                </ol>
            </section>

            <section class="lesson-section">
                <h2>3. Algorithms</h2>
                <p>An <strong>algorithm</strong> is a finite sequence of clear steps used to solve a problem.</p>
                <p><strong>Example: Find the sum of two numbers</strong></p>
                <ol>
                    <li>Start.</li>
                    <li>Read two numbers.</li>
                    <li>Add the numbers.</li>
                    <li>Display the result.</li>
                    <li>Stop.</li>
                </ol>
                <pre><code>a = 10
    b = 20
    total = a + b
    print(total)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>30</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. Pseudocode</h2>
                <p><strong>Pseudocode</strong> describes an algorithm using simple, structured language rather than the exact syntax of a programming language.</p>
                <pre><code>START
    INPUT number
    IF number is even
        DISPLAY "Even"
    ELSE
        DISPLAY "Odd"
    STOP</code></pre>
                <p>Pseudocode helps us plan the logic before writing Python code.</p>
            </section>

            <section class="lesson-section">
                <h2>5. Flowcharts</h2>
                <p>A <strong>flowchart</strong> is a diagram that represents the steps of an algorithm using standard symbols.</p>
                <ul>
                    <li><strong>Oval:</strong> Start or stop.</li>
                    <li><strong>Rectangle:</strong> Process or calculation.</li>
                    <li><strong>Parallelogram:</strong> Input or output.</li>
                    <li><strong>Diamond:</strong> Decision, such as yes/no.</li>
                    <li><strong>Arrow:</strong> Direction of flow.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>6. Example: Check whether a number is even or odd</h2>
                <pre><code>number = int(input("Enter a number: "))

    if number % 2 == 0:
        print("Even")
    else:
        print("Odd")</code></pre>
                <p><strong>Example input:</strong> 8</p>
                <p><strong>Output:</strong></p>
                <pre><code>Even</code></pre>
                <p>The modulo operator <code>%</code> gives the remainder. An even number has remainder 0 when divided by 2.</p>
            </section>

            <section class="lesson-section">
                <h2>7. Testing and debugging</h2>
                <p><strong>Testing</strong> checks whether a program gives the expected result. <strong>Debugging</strong> is the process of finding and correcting errors.</p>
                <p>Test normal values, boundary values, and unusual inputs where appropriate.</p>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 12</h2>
                <div class="cq-question" data-answer="b">
                    <p><strong>1. What is an algorithm?</strong></p>
                    <label><input type="radio" name="b12q1" value="a"> A computer brand</label>
                    <label><input type="radio" name="b12q1" value="b"> A sequence of steps to solve a problem</label>
                    <label><input type="radio" name="b12q1" value="c"> A Python error</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. What does a diamond represent in a flowchart?</strong></p>
                    <label><input type="radio" name="b12q2" value="a"> A decision</label>
                    <label><input type="radio" name="b12q2" value="b"> Start</label>
                    <label><input type="radio" name="b12q2" value="c"> Input only</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. What is pseudocode?</strong></p>
                    <label><input type="radio" name="b12q3" value="a"> Machine code</label>
                    <label><input type="radio" name="b12q3" value="b"> A Python package</label>
                    <label><input type="radio" name="b12q3" value="c"> A simple description of program logic</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>4. What is debugging?</strong></p>
                    <label><input type="radio" name="b12q4" value="a"> Writing comments</label>
                    <label><input type="radio" name="b12q4" value="b"> Finding and correcting errors</label>
                    <label><input type="radio" name="b12q4" value="c"> Deleting a program</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. Which symbol represents a process in a flowchart?</strong></p>
                    <label><input type="radio" name="b12q5" value="a"> Rectangle</label>
                    <label><input type="radio" name="b12q5" value="b"> Diamond</label>
                    <label><input type="radio" name="b12q5" value="c"> Oval</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `,

        deep: `
            <section class="lesson-section">
                <h2>1. Breaking a problem into smaller parts</h2>
                <p>A large problem can feel difficult when we try to solve everything at once. <strong>Decomposition</strong> means dividing a large problem into smaller tasks.</p>
                <p>For example, a student-result program can be divided into:</p>
                <ul>
                    <li>Read student details.</li>
                    <li>Read subject marks.</li>
                    <li>Calculate total and average.</li>
                    <li>Decide pass or fail.</li>
                    <li>Display the result.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>2. Understanding inputs, processes and outputs</h2>
                <p>Before coding, identify three things:</p>
                <ul>
                    <li><strong>Input:</strong> Data supplied to the program.</li>
                    <li><strong>Process:</strong> Operations performed on the data.</li>
                    <li><strong>Output:</strong> The result produced.</li>
                </ul>
                <p><strong>Example – Area of a rectangle:</strong></p>
                <ul>
                    <li>Input: length and width.</li>
                    <li>Process: multiply length by width.</li>
                    <li>Output: area.</li>
                </ul>
                <pre><code>length = 10
    width = 5

    area = length * width

    print("Area:", area)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Area: 50</code></pre>
            </section>

            <section class="lesson-section">
                <h2>3. Writing an algorithm</h2>
                <p>Example: Find the largest of two numbers.</p>
                <ol>
                    <li>Start.</li>
                    <li>Input A and B.</li>
                    <li>Compare A and B.</li>
                    <li>If A is greater, display A.</li>
                    <li>Otherwise, display B (or report equality if they are equal).</li>
                    <li>Stop.</li>
                </ol>
                <pre><code>a = 15
    b = 25

    if a > b:
        print("A is larger")
    elif b > a:
        print("B is larger")
    else:
        print("Both are equal")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>B is larger</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. Dry runs and tracing</h2>
                <p>A <strong>dry run</strong> means manually following the program step by step to understand what each statement does and what values variables hold.</p>
                <pre><code>total = 0

    for number in range(1, 4):
        total = total + number

    print(total)</code></pre>
                <p><strong>Dry-run table:</strong></p>
                <table>
                    <thead><tr><th>Iteration</th><th>number</th><th>total</th></tr></thead>
                    <tbody>
                        <tr><td>Start</td><td>—</td><td>0</td></tr>
                        <tr><td>1</td><td>1</td><td>1</td></tr>
                        <tr><td>2</td><td>2</td><td>3</td></tr>
                        <tr><td>3</td><td>3</td><td>6</td></tr>
                    </tbody>
                </table>
                <p><strong>Output:</strong> <code>6</code></p>
            </section>

            <section class="lesson-section">
                <h2>5. Common types of programming errors</h2>
                <ul>
                    <li><strong>Syntax error:</strong> The code breaks Python's grammar rules, such as a missing colon.</li>
                    <li><strong>Runtime error:</strong> An error occurs while the program is running, such as division by zero.</li>
                    <li><strong>Logical error:</strong> The program runs but produces an incorrect result because the logic is wrong.</li>
                </ul>
                <pre><code># Logical error: wrong formula
    length = 10
    width = 5
    area = length + width
    print(area)</code></pre>
                <p>The code runs, but the correct area formula is multiplication, not addition.</p>
            </section>

            <section class="lesson-section">
                <h2>6. Test cases</h2>
                <p>A <strong>test case</strong> is a set of input values and the expected result used to check a program.</p>
                <p>For an even-or-odd program, useful test cases include:</p>
                <table>
                    <thead><tr><th>Input</th><th>Expected result</th><th>Reason</th></tr></thead>
                    <tbody>
                        <tr><td>8</td><td>Even</td><td>Positive even number</td></tr>
                        <tr><td>7</td><td>Odd</td><td>Positive odd number</td></tr>
                        <tr><td>0</td><td>Even</td><td>Zero is divisible by 2</td></tr>
                        <tr><td>-4</td><td>Even</td><td>Negative even number</td></tr>
                    </tbody>
                </table>
            </section>

            <section class="lesson-section">
                <h2>7. Good problem-solving habits</h2>
                <ul>
                    <li>Read the question carefully.</li>
                    <li>Write down the inputs and expected outputs.</li>
                    <li>Break the task into smaller steps.</li>
                    <li>Choose suitable variables and data types.</li>
                    <li>Test with more than one input.</li>
                    <li>Use meaningful variable names and clear indentation.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Chapter 12 (Deep)</h2>
                <div class="cq-question" data-answer="b">
                    <p><strong>1. What is decomposition?</strong></p>
                    <label><input type="radio" name="b12d1" value="a"> Combining all code into one line</label>
                    <label><input type="radio" name="b12d1" value="b"> Breaking a large problem into smaller tasks</label>
                    <label><input type="radio" name="b12d1" value="c"> Removing variables</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. What is a dry run?</strong></p>
                    <label><input type="radio" name="b12d2" value="a"> Manually tracing program execution</label>
                    <label><input type="radio" name="b12d2" value="b"> Installing Python</label>
                    <label><input type="radio" name="b12d2" value="c"> Deleting errors automatically</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. Which error allows a program to run but gives the wrong answer?</strong></p>
                    <label><input type="radio" name="b12d3" value="a"> Syntax error</label>
                    <label><input type="radio" name="b12d3" value="b"> Import error</label>
                    <label><input type="radio" name="b12d3" value="c"> Logical error</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>4. What does a test case contain?</strong></p>
                    <label><input type="radio" name="b12d4" value="a"> Only the program name</label>
                    <label><input type="radio" name="b12d4" value="b"> Input and expected result</label>
                    <label><input type="radio" name="b12d4" value="c"> Only comments</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. What is the process in an input-process-output model?</strong></p>
                    <label><input type="radio" name="b12d5" value="a"> The operations performed on input data</label>
                    <label><input type="radio" name="b12d5" value="b"> The final displayed result</label>
                    <label><input type="radio" name="b12d5" value="c"> The keyboard</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `
    };

    const chapterI1 = {
        id: "i1",
        title: "Advanced Functions",

        quick: `
            <section class="lesson-section">
                <h2>1. What are advanced functions?</h2>
                <p>Advanced functions build on the basic functions you learned earlier. They include flexible arguments, lambda functions, and functions that work with other functions.</p>
            </section>

            <section class="lesson-section">
                <h2>2. Variable-length positional arguments (*args)</h2>
                <p><code>*args</code> allows a function to accept any number of positional arguments. Inside the function, the values are available as a tuple.</p>
                <pre><code>def add_all(*numbers):
        print(numbers)
        print(sum(numbers))

    add_all(10, 20, 30)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>(10, 20, 30)
    60</code></pre>
            </section>

            <section class="lesson-section">
                <h2>3. Variable-length keyword arguments (**kwargs)</h2>
                <p><code>**kwargs</code> accepts multiple keyword arguments. Inside the function, they are available as a dictionary.</p>
                <pre><code>def show_details(**details):
        print(details)

    show_details(name="Aisha", age=19)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>{'name': 'Aisha', 'age': 19}</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. Lambda functions</h2>
                <p>A <strong>lambda function</strong> is a small anonymous function written using the <code>lambda</code> keyword.</p>
                <pre><code>square = lambda x: x * x

    print(square(5))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>25</code></pre>
                <p>Lambda functions contain one expression and return its result.</p>
            </section>

            <section class="lesson-section">
                <h2>5. The map() function</h2>
                <p><code>map()</code> applies a function to each item in an iterable.</p>
                <pre><code>numbers = [1, 2, 3]

    result = map(lambda x: x * 2, numbers)

    print(list(result))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>[2, 4, 6]</code></pre>
            </section>

            <section class="lesson-section">
                <h2>6. The filter() function</h2>
                <p><code>filter()</code> keeps the items for which a function returns a true value.</p>
                <pre><code>numbers = [1, 2, 3, 4, 5, 6]

    result = filter(lambda x: x % 2 == 0, numbers)

    print(list(result))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>[2, 4, 6]</code></pre>
            </section>

            <section class="lesson-section">
                <h2>7. Scope and closures</h2>
                <p>A function's <strong>scope</strong> describes where a variable can be accessed. A <strong>closure</strong> is an inner function that remembers values from its enclosing function even after the enclosing function has finished.</p>
                <pre><code>def outer():
        message = "Hello"

        def inner():
            print(message)

        return inner

    greet = outer()
    greet()</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Hello</code></pre>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Intermediate 1</h2>
                <div class="cq-question" data-answer="a">
                    <p><strong>1. What does *args collect?</strong></p>
                    <label><input type="radio" name="i1q1" value="a"> Positional arguments in a tuple</label>
                    <label><input type="radio" name="i1q1" value="b"> Keyword arguments in a list</label>
                    <label><input type="radio" name="i1q1" value="c"> Only strings</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>2. What does **kwargs collect?</strong></p>
                    <label><input type="radio" name="i1q2" value="a"> Positional arguments</label>
                    <label><input type="radio" name="i1q2" value="b"> Keyword arguments in a dictionary</label>
                    <label><input type="radio" name="i1q2" value="c"> Only integers</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. Which keyword creates a lambda function?</strong></p>
                    <label><input type="radio" name="i1q3" value="a"> def</label>
                    <label><input type="radio" name="i1q3" value="b"> return</label>
                    <label><input type="radio" name="i1q3" value="c"> lambda</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>4. What does map() do?</strong></p>
                    <label><input type="radio" name="i1q4" value="a"> Applies a function to each item</label>
                    <label><input type="radio" name="i1q4" value="b"> Deletes all items</label>
                    <label><input type="radio" name="i1q4" value="c"> Sorts a dictionary</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>5. What does filter() do?</strong></p>
                    <label><input type="radio" name="i1q5" value="a"> Changes every item to a string</label>
                    <label><input type="radio" name="i1q5" value="b"> Selects items based on a condition</label>
                    <label><input type="radio" name="i1q5" value="c"> Adds all numbers</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `,

        deep: `
            <section class="lesson-section">
                <h2>1. *args in detail</h2>
                <p>The name <code>args</code> is a convention; the important part is the single asterisk. It gathers extra positional arguments into a tuple.</p>
                <pre><code>def calculate_total(*prices):
        total = 0

        for price in prices:
            total += price

        return total

    print(calculate_total(100, 200))
    print(calculate_total(50, 60, 70))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>300
    180</code></pre>
                <p>The same function works with different numbers of prices.</p>
            </section>

            <section class="lesson-section">
                <h2>2. **kwargs in detail</h2>
                <p>The double asterisk gathers extra keyword arguments into a dictionary.</p>
                <pre><code>def display_profile(**profile):
        for key, value in profile.items():
            print(key, ":", value)

    display_profile(name="Aisha", course="BCA", age=19)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>name : Aisha
    course : BCA
    age : 19</code></pre>
            </section>

            <section class="lesson-section">
                <h2>3. Combining argument types</h2>
                <p>A function can combine ordinary parameters, <code>*args</code>, and <code>**kwargs</code>. Keep the parameter order valid.</p>
                <pre><code>def example(required, *args, **kwargs):
        print(required)
        print(args)
        print(kwargs)

    example("Start", 10, 20, name="Aisha")</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Start
    (10, 20)
    {'name': 'Aisha'}</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. Lambda expressions</h2>
                <p>A lambda is useful when a short function is needed temporarily, often as an argument to another function.</p>
                <pre><code>numbers = [5, 2, 8, 1]

    squares = list(map(lambda n: n ** 2, numbers))

    print(squares)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>[25, 4, 64, 1]</code></pre>
                <p>For longer logic or multiple statements, use a normal <code>def</code> function instead.</p>
            </section>

            <section class="lesson-section">
                <h2>5. map(), filter() and sorted()</h2>
                <p>These tools often work with lambda expressions.</p>
                <pre><code>numbers = [1, 2, 3, 4, 5, 6]

    doubled = list(map(lambda x: x * 2, numbers))
    evens = list(filter(lambda x: x % 2 == 0, numbers))
    descending = sorted(numbers, reverse=True)

    print(doubled)
    print(evens)
    print(descending)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>[2, 4, 6, 8, 10, 12]
    [2, 4, 6]
    [6, 5, 4, 3, 2, 1]</code></pre>
                <p><code>map()</code> transforms items, <code>filter()</code> selects items, and <code>sorted()</code> returns a sorted list.</p>
            </section>

            <section class="lesson-section">
                <h2>6. Closures</h2>
                <p>A closure occurs when an inner function uses a variable from the enclosing function. The inner function retains access to that value.</p>
                <pre><code>def multiplier(factor):
        def multiply(number):
            return number * factor

        return multiply

    double = multiplier(2)
    triple = multiplier(3)

    print(double(5))
    print(triple(5))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>10
    15</code></pre>
                <p>The returned functions remember their own <code>factor</code> values.</p>
            </section>

            <section class="lesson-section">
                <h2>7. Recursion versus iteration</h2>
                <table>
                    <thead><tr><th>Recursion</th><th>Iteration</th></tr></thead>
                    <tbody>
                        <tr><td>A function calls itself.</td><td>A loop repeats statements.</td></tr>
                        <tr><td>Needs a base case.</td><td>Needs a loop condition or finite iterable.</td></tr>
                        <tr><td>Can use more call-stack memory.</td><td>Often uses less call-stack memory.</td></tr>
                    </tbody>
                </table>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Intermediate 1 (Deep)</h2>
                <div class="cq-question" data-answer="c">
                    <p><strong>1. What type of object does *args create?</strong></p>
                    <label><input type="radio" name="i1d1" value="a"> Dictionary</label>
                    <label><input type="radio" name="i1d1" value="b"> Set</label>
                    <label><input type="radio" name="i1d1" value="c"> Tuple</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. What type of object does **kwargs create?</strong></p>
                    <label><input type="radio" name="i1d2" value="a"> Dictionary</label>
                    <label><input type="radio" name="i1d2" value="b"> Tuple</label>
                    <label><input type="radio" name="i1d2" value="c"> String</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>3. Which tool selects items that satisfy a condition?</strong></p>
                    <label><input type="radio" name="i1d3" value="a"> map()</label>
                    <label><input type="radio" name="i1d3" value="b"> filter()</label>
                    <label><input type="radio" name="i1d3" value="c"> print()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>4. What does a closure retain access to?</strong></p>
                    <label><input type="radio" name="i1d4" value="a"> Only global variables</label>
                    <label><input type="radio" name="i1d4" value="b"> Only built-in functions</label>
                    <label><input type="radio" name="i1d4" value="c"> Values from its enclosing scope</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. When is a normal def function preferable to lambda?</strong></p>
                    <label><input type="radio" name="i1d5" value="a"> When the logic is longer or needs multiple statements</label>
                    <label><input type="radio" name="i1d5" value="b"> Whenever a number is used</label>
                    <label><input type="radio" name="i1d5" value="c"> Never</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `
    };

    const chapterI2 = {
        id: "i2",
        title: "Comprehensions",

        quick: `
            <section class="lesson-section">
                <h2>1. What are comprehensions?</h2>
                <p><strong>Comprehensions</strong> are a compact way to create collections such as lists, sets, and dictionaries from existing data.</p>
            </section>

            <section class="lesson-section">
                <h2>2. List comprehension</h2>
                <p>A list comprehension creates a new list using a short expression.</p>
                <pre><code>squares = [x * x for x in range(1, 6)]

    print(squares)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>[1, 4, 9, 16, 25]</code></pre>
                <p>Read it as: create <code>x * x</code> for every <code>x</code> in the range 1 to 5.</p>
            </section>

            <section class="lesson-section">
                <h2>3. List comprehension with a condition</h2>
                <p>Add an <code>if</code> condition to select which items are included.</p>
                <pre><code>numbers = [1, 2, 3, 4, 5, 6]

    evens = [x for x in numbers if x % 2 == 0]

    print(evens)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>[2, 4, 6]</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. Dictionary comprehension</h2>
                <p>A dictionary comprehension creates key-value pairs.</p>
                <pre><code>squares = {x: x * x for x in range(1, 4)}

    print(squares)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>{1: 1, 2: 4, 3: 9}</code></pre>
            </section>

            <section class="lesson-section">
                <h2>5. Set comprehension</h2>
                <p>A set comprehension creates a set. Duplicate values are automatically removed.</p>
                <pre><code>values = [1, 2, 2, 3, 3, 4]

    unique_squares = {x * x for x in values}

    print(unique_squares)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>{1, 4, 9, 16}</code></pre>
                <p>Set order is not guaranteed, so the displayed order may vary.</p>
            </section>

            <section class="lesson-section">
                <h2>6. Generator expressions</h2>
                <p>A generator expression uses parentheses and produces values one at a time when requested.</p>
                <pre><code>squares = (x * x for x in range(1, 4))

    print(next(squares))
    print(next(squares))
    print(next(squares))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>1
    4
    9</code></pre>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Intermediate 2</h2>
                <div class="cq-question" data-answer="b">
                    <p><strong>1. What does a list comprehension create?</strong></p>
                    <label><input type="radio" name="i2q1" value="a"> A function</label>
                    <label><input type="radio" name="i2q1" value="b"> A list</label>
                    <label><input type="radio" name="i2q1" value="c"> A file</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. Which keyword can filter items in a comprehension?</strong></p>
                    <label><input type="radio" name="i2q2" value="a"> if</label>
                    <label><input type="radio" name="i2q2" value="b"> def</label>
                    <label><input type="radio" name="i2q2" value="c"> import</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. Which brackets are used for a set comprehension?</strong></p>
                    <label><input type="radio" name="i2q3" value="a"> []</label>
                    <label><input type="radio" name="i2q3" value="b"> ()</label>
                    <label><input type="radio" name="i2q3" value="c"> {}</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>4. What does a dictionary comprehension create?</strong></p>
                    <label><input type="radio" name="i2q4" value="a"> Only numbers</label>
                    <label><input type="radio" name="i2q4" value="b"> Key-value pairs</label>
                    <label><input type="radio" name="i2q4" value="c"> A class</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. What does a generator expression produce?</strong></p>
                    <label><input type="radio" name="i2q5" value="a"> Values on demand</label>
                    <label><input type="radio" name="i2q5" value="b"> A completed dictionary</label>
                    <label><input type="radio" name="i2q5" value="c"> A file path</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `,

        deep: `
            <section class="lesson-section">
                <h2>1. The structure of a list comprehension</h2>
                <pre><code>[expression for item in iterable if condition]</code></pre>
                <ul>
                    <li><strong>Expression:</strong> Value to place in the new list.</li>
                    <li><strong>item:</strong> Variable representing the current item.</li>
                    <li><strong>iterable:</strong> Collection or sequence to read from.</li>
                    <li><strong>condition:</strong> Optional rule deciding which items are included.</li>
                </ul>
            </section>

            <section class="lesson-section">
                <h2>2. Converting a normal loop into a comprehension</h2>
                <p><strong>Normal loop:</strong></p>
                <pre><code>squares = []

    for number in range(1, 6):
        squares.append(number ** 2)

    print(squares)</code></pre>
                <p><strong>Equivalent comprehension:</strong></p>
                <pre><code>squares = [number ** 2 for number in range(1, 6)]

    print(squares)</code></pre>
                <p>Both produce the same list. Comprehensions are shorter, but a normal loop can be clearer for complicated logic.</p>
            </section>

            <section class="lesson-section">
                <h2>3. Comprehensions with if and else</h2>
                <p>An <code>if</code> filter selects items. An <code>if-else</code> expression chooses the value to place in the output.</p>
                <pre><code>numbers = [1, 2, 3, 4, 5]

    labels = ["Even" if x % 2 == 0 else "Odd" for x in numbers]

    print(labels)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>['Odd', 'Even', 'Odd', 'Even', 'Odd']</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. Nested list comprehensions</h2>
                <p>A comprehension can contain more than one loop. The order is like nested normal loops.</p>
                <pre><code>pairs = [(x, y) for x in [1, 2] for y in [3, 4]]

    print(pairs)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>[(1, 3), (1, 4), (2, 3), (2, 4)]</code></pre>
            </section>

            <section class="lesson-section">
                <h2>5. Dictionary comprehensions</h2>
                <pre><code>names = ["Aisha", "Rahul", "Mira"]

    lengths = {name: len(name) for name in names}

    print(lengths)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>{'Aisha': 5, 'Rahul': 5, 'Mira': 4}</code></pre>
                <p>Each name becomes a dictionary key, and its length becomes the corresponding value.</p>
            </section>

            <section class="lesson-section">
                <h2>6. Generator expressions versus list comprehensions</h2>
                <table>
                    <thead><tr><th>List comprehension</th><th>Generator expression</th></tr></thead>
                    <tbody>
                        <tr><td>Uses square brackets <code>[]</code>.</td><td>Uses parentheses <code>()</code>.</td></tr>
                        <tr><td>Creates the list immediately.</td><td>Produces values when requested.</td></tr>
                        <tr><td>Stores all results in a list.</td><td>Can use less memory for large sequences.</td></tr>
                        <tr><td>Can be indexed.</td><td>Cannot be indexed directly like a list.</td></tr>
                    </tbody>
                </table>
                <pre><code>numbers = (x * 2 for x in range(3))

    for value in numbers:
        print(value)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>0
    2
    4</code></pre>
            </section>

            <section class="lesson-section">
                <h2>7. When should you use comprehensions?</h2>
                <ul>
                    <li>Use them for short and clear transformations.</li>
                    <li>Use a filter when you need to select items.</li>
                    <li>Use a generator expression when you want values on demand.</li>
                    <li>Use a normal loop when the logic is long or difficult to read.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Intermediate 2 (Deep)</h2>
                <div class="cq-question" data-answer="c">
                    <p><strong>1. What does the expression part of a list comprehension do?</strong></p>
                    <label><input type="radio" name="i2d1" value="a"> Stops the loop</label>
                    <label><input type="radio" name="i2d1" value="b"> Imports a module</label>
                    <label><input type="radio" name="i2d1" value="c"> Determines the value added to the result</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. In a comprehension, what does an if filter do?</strong></p>
                    <label><input type="radio" name="i2d2" value="a"> Selects which items are included</label>
                    <label><input type="radio" name="i2d2" value="b"> Defines a function</label>
                    <label><input type="radio" name="i2d2" value="c"> Creates a file</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>3. Which syntax creates a generator expression?</strong></p>
                    <label><input type="radio" name="i2d3" value="a"> [x * 2 for x in data]</label>
                    <label><input type="radio" name="i2d3" value="b"> (x * 2 for x in data)</label>
                    <label><input type="radio" name="i2d3" value="c"> {x * 2: data}</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>4. What does a dictionary comprehension produce?</strong></p>
                    <label><input type="radio" name="i2d4" value="a"> A tuple</label>
                    <label><input type="radio" name="i2d4" value="b"> A function</label>
                    <label><input type="radio" name="i2d4" value="c"> A dictionary</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. When is a normal loop often better?</strong></p>
                    <label><input type="radio" name="i2d5" value="a"> When the logic is complicated or has several steps</label>
                    <label><input type="radio" name="i2d5" value="b"> When creating any list</label>
                    <label><input type="radio" name="i2d5" value="c"> Never</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `
    };

    const chapterI3 = {
        id: "i3",
        title: "Modules and Packages",

        quick: `
            <section class="lesson-section">
                <h2>1. What is a module?</h2>
                <p>A <strong>module</strong> is a Python file containing reusable code, such as functions, variables, and classes.</p>
                <p>Modules help organise code and allow us to reuse functionality in different programs.</p>
            </section>

            <section class="lesson-section">
                <h2>2. Importing a module</h2>
                <p>Python's <code>math</code> module provides mathematical functions.</p>
                <pre><code>import math

    print(math.sqrt(25))
    print(math.pi)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>5.0
    3.141592653589793</code></pre>
            </section>

            <section class="lesson-section">
                <h2>3. Importing specific functions</h2>
                <p>Use <code>from</code> to import a particular name from a module.</p>
                <pre><code>from math import sqrt

    print(sqrt(36))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>6.0</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. Using an alias</h2>
                <p>The <code>as</code> keyword gives an imported module or function a shorter or alternative name.</p>
                <pre><code>import math as m

    print(m.factorial(5))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>120</code></pre>
            </section>

            <section class="lesson-section">
                <h2>5. Creating your own module</h2>
                <p>Create a file named <code>calculator.py</code>:</p>
                <pre><code>def add(a, b):
        return a + b

    def subtract(a, b):
        return a - b</code></pre>
                <p>In another Python file in the same folder:</p>
                <pre><code>import calculator

    print(calculator.add(10, 5))</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>15</code></pre>
            </section>

            <section class="lesson-section">
                <h2>6. What is a package?</h2>
                <p>A <strong>package</strong> is a way to organise related Python modules in a directory hierarchy. Packages help organise larger projects.</p>
                <p>A common package structure looks like this:</p>
                <pre><code>my_package/
        __init__.py
        calculator.py
        messages.py</code></pre>
            </section>

            <section class="lesson-section">
                <h2>7. Built-in modules</h2>
                <ul>
                    <li><code>math</code> – mathematical operations.</li>
                    <li><code>random</code> – random selections and numbers.</li>
                    <li><code>datetime</code> – dates and times.</li>
                    <li><code>os</code> – operating-system related operations.</li>
                    <li><code>statistics</code> – basic statistical calculations.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Intermediate 3</h2>
                <div class="cq-question" data-answer="b">
                    <p><strong>1. What is a Python module?</strong></p>
                    <label><input type="radio" name="i3q1" value="a"> A loop</label>
                    <label><input type="radio" name="i3q1" value="b"> A Python file containing reusable code</label>
                    <label><input type="radio" name="i3q1" value="c"> A data type</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. Which keyword imports a module?</strong></p>
                    <label><input type="radio" name="i3q2" value="a"> import</label>
                    <label><input type="radio" name="i3q2" value="b"> define</label>
                    <label><input type="radio" name="i3q2" value="c"> module</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. Which keyword creates an alias?</strong></p>
                    <label><input type="radio" name="i3q3" value="a"> with</label>
                    <label><input type="radio" name="i3q3" value="b"> return</label>
                    <label><input type="radio" name="i3q3" value="c"> as</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>4. Which module provides square root functionality?</strong></p>
                    <label><input type="radio" name="i3q4" value="a"> random</label>
                    <label><input type="radio" name="i3q4" value="b"> math</label>
                    <label><input type="radio" name="i3q4" value="c"> os</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. What is a package used for?</strong></p>
                    <label><input type="radio" name="i3q5" value="a"> Organising related modules</label>
                    <label><input type="radio" name="i3q5" value="b"> Replacing Python</label>
                    <label><input type="radio" name="i3q5" value="c"> Storing only numbers</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `,

        deep: `
            <section class="lesson-section">
                <h2>1. Why do we need modules?</h2>
                <p>Imagine a project containing hundreds of functions. Keeping all of them in one file can make the program difficult to manage. Modules let us divide the code into separate files according to their purpose.</p>
            </section>

            <section class="lesson-section">
                <h2>2. Different ways to import</h2>
                <p><strong>Import the complete module:</strong></p>
                <pre><code>import math
    print(math.sqrt(49))</code></pre>
                <p><strong>Import one function:</strong></p>
                <pre><code>from math import sqrt
    print(sqrt(49))</code></pre>
                <p><strong>Import with an alias:</strong></p>
                <pre><code>import math as mathematics
    print(mathematics.sqrt(49))</code></pre>
                <p>All three examples display <code>7.0</code>.</p>
            </section>

            <section class="lesson-section">
                <h2>3. Creating and importing a custom module</h2>
                <p>Suppose the project has two files in the same folder.</p>
                <p><strong>File 1: calculator.py</strong></p>
                <pre><code>def add(a, b):
        return a + b

    def multiply(a, b):
        return a * b</code></pre>
                <p><strong>File 2: main.py</strong></p>
                <pre><code>import calculator

    result1 = calculator.add(5, 3)
    result2 = calculator.multiply(5, 3)

    print(result1)
    print(result2)</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>8
    15</code></pre>
                <p>Python searches for the module using its import system. For a simple project, keeping both files in the same directory is a straightforward starting point.</p>
            </section>

            <section class="lesson-section">
                <h2>4. The __name__ variable</h2>
                <p>Python sets a module's special <code>__name__</code> variable. When a file is run directly, its value is <code>"__main__"</code>. When imported, it normally contains the module name.</p>
                <pre><code>def greet():
        print("Hello!")

    if __name__ == "__main__":
        greet()</code></pre>
                <p>This condition runs <code>greet()</code> when the file is executed directly, but not merely because it is imported.</p>
            </section>

            <section class="lesson-section">
                <h2>5. Understanding packages</h2>
                <p>A package groups related modules in directories. A simple example:</p>
                <pre><code>school/
        __init__.py
        students.py
        teachers.py
    main.py</code></pre>
                <p>For example, <code>students.py</code> may contain student-related functions and <code>teachers.py</code> may contain teacher-related functions. The <code>__init__.py</code> file is commonly used to mark and initialise a regular package, although modern Python also supports namespace packages without it.</p>
            </section>

            <section class="lesson-section">
                <h2>6. Standard library and third-party packages</h2>
                <table>
                    <thead><tr><th>Standard library</th><th>Third-party package</th></tr></thead>
                    <tbody>
                        <tr><td>Comes with the Python installation.</td><td>Installed separately when needed.</td></tr>
                        <tr><td>Examples: math, os, datetime.</td><td>Examples: requests, numpy, pandas.</td></tr>
                        <tr><td>Usually needs no separate package installation.</td><td>Often installed using pip.</td></tr>
                    </tbody>
                </table>
            </section>

            <section class="lesson-section">
                <h2>7. Installing a third-party package</h2>
                <p>For example, to install the <code>requests</code> package, run this command in a terminal:</p>
                <pre><code>python -m pip install requests</code></pre>
                <p>Then use it in Python:</p>
                <pre><code>import requests

    print(requests.__version__)</code></pre>
                <p>Installation commands are run in the terminal, not as ordinary Python statements.</p>
            </section>

            <section class="lesson-section">
                <h2>8. Common import errors</h2>
                <ul>
                    <li><strong>ModuleNotFoundError:</strong> Python cannot find the requested module.</li>
                    <li><strong>ImportError:</strong> A requested name cannot be imported from a module.</li>
                    <li><strong>Name conflict:</strong> A local file may have the same name as a standard or third-party module.</li>
                </ul>
                <p>Check spelling, installation, file names, and the active Python environment when troubleshooting.</p>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Intermediate 3 (Deep)</h2>
                <div class="cq-question" data-answer="b">
                    <p><strong>1. What is the value of __name__ when a Python file runs directly?</strong></p>
                    <label><input type="radio" name="i3d1" value="a"> main</label>
                    <label><input type="radio" name="i3d1" value="b"> __main__</label>
                    <label><input type="radio" name="i3d1" value="c"> import</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. Which command installs a package using pip?</strong></p>
                    <label><input type="radio" name="i3d2" value="a"> python -m pip install package_name</label>
                    <label><input type="radio" name="i3d2" value="b"> import pip package_name</label>
                    <label><input type="radio" name="i3d2" value="c"> def install package_name</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. What does ModuleNotFoundError usually mean?</strong></p>
                    <label><input type="radio" name="i3d3" value="a"> A loop is infinite</label>
                    <label><input type="radio" name="i3d3" value="b"> A variable is too large</label>
                    <label><input type="radio" name="i3d3" value="c"> Python cannot find the requested module</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>4. What does import math as m do?</strong></p>
                    <label><input type="radio" name="i3d4" value="a"> Deletes math</label>
                    <label><input type="radio" name="i3d4" value="b"> Imports math using the alias m</label>
                    <label><input type="radio" name="i3d4" value="c"> Creates a package</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. Where are terminal installation commands normally run?</strong></p>
                    <label><input type="radio" name="i3d5" value="a"> In the terminal</label>
                    <label><input type="radio" name="i3d5" value="b"> Inside a string</label>
                    <label><input type="radio" name="i3d5" value="c"> Inside a list</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `
    };

    const chapterI4 = {
        id: "i4",
        title: "File Handling",

        quick: `
            <section class="lesson-section">
                <h2>1. What is file handling?</h2>
                <p><strong>File handling</strong> means creating, opening, reading, writing, and closing files using a program.</p>
                <p>It allows information to be stored permanently instead of disappearing when the program finishes.</p>
            </section>

            <section class="lesson-section">
                <h2>2. Opening a file</h2>
                <p>Python uses the <code>open()</code> function to open a file.</p>
                <pre><code>file = open("notes.txt", "r")</code></pre>
                <p>The first argument is the file name. The second argument is the mode.</p>
            </section>

            <section class="lesson-section">
                <h2>3. File modes</h2>
                <table>
                    <thead><tr><th>Mode</th><th>Meaning</th></tr></thead>
                    <tbody>
                        <tr><td>r</td><td>Read an existing file.</td></tr>
                        <tr><td>w</td><td>Write; creates or overwrites a file.</td></tr>
                        <tr><td>a</td><td>Append to the end of a file.</td></tr>
                        <tr><td>x</td><td>Create a new file; fails if it already exists.</td></tr>
                        <tr><td>r+</td><td>Read and write an existing file.</td></tr>
                    </tbody>
                </table>
            </section>

            <section class="lesson-section">
                <h2>4. Writing to a file</h2>
                <pre><code>file = open("notes.txt", "w")
    file.write("Hello Python")
    file.close()</code></pre>
                <p>This creates the file if it does not exist, or replaces its previous contents.</p>
            </section>

            <section class="lesson-section">
                <h2>5. Reading a file</h2>
                <pre><code>file = open("notes.txt", "r")
    content = file.read()
    print(content)
    file.close()</code></pre>
                <p><strong>Output, if the file contains that text:</strong></p>
                <pre><code>Hello Python</code></pre>
            </section>

            <section class="lesson-section">
                <h2>6. The with statement</h2>
                <p>The <code>with</code> statement manages a file and closes it automatically when the block finishes.</p>
                <pre><code>with open("notes.txt", "r") as file:
        content = file.read()
        print(content)</code></pre>
                <p>This is generally the recommended way to work with files.</p>
            </section>

            <section class="lesson-section">
                <h2>7. Reading line by line</h2>
                <pre><code>with open("notes.txt", "r") as file:
        for line in file:
            print(line.strip())</code></pre>
                <p><code>strip()</code> removes whitespace from the beginning and end of a string, including the newline at the end of a line.</p>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Intermediate 4</h2>
                <div class="cq-question" data-answer="a">
                    <p><strong>1. Which function opens a file?</strong></p>
                    <label><input type="radio" name="i4q1" value="a"> open()</label>
                    <label><input type="radio" name="i4q1" value="b"> file()</label>
                    <label><input type="radio" name="i4q1" value="c"> readfile()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>2. Which mode is used to append data?</strong></p>
                    <label><input type="radio" name="i4q2" value="a"> r</label>
                    <label><input type="radio" name="i4q2" value="b"> a</label>
                    <label><input type="radio" name="i4q2" value="c"> x</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>3. What does the w mode do?</strong></p>
                    <label><input type="radio" name="i4q3" value="a"> Only reads a file</label>
                    <label><input type="radio" name="i4q3" value="b"> Appends without replacing existing content</label>
                    <label><input type="radio" name="i4q3" value="c"> Writes and can overwrite existing content</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>4. What is the advantage of with open()?</strong></p>
                    <label><input type="radio" name="i4q4" value="a"> It automatically closes the file</label>
                    <label><input type="radio" name="i4q4" value="b"> It deletes the file</label>
                    <label><input type="radio" name="i4q4" value="c"> It converts files into lists</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>5. Which method reads the entire file content as a string?</strong></p>
                    <label><input type="radio" name="i4q5" value="a"> write()</label>
                    <label><input type="radio" name="i4q5" value="b"> read()</label>
                    <label><input type="radio" name="i4q5" value="c"> close()</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `,

        deep: `
            <section class="lesson-section">
                <h2>1. Understanding files and file objects</h2>
                <p>When Python opens a file, it returns a file object. We use that object to read or write data.</p>
                <pre><code>file = open("notes.txt", "r")
    print(file.read())
    file.close()</code></pre>
                <p>The file must exist when opened in read mode. The path is interpreted relative to the program's current working directory unless an absolute path is supplied.</p>
            </section>

            <section class="lesson-section">
                <h2>2. Understanding file modes</h2>
                <table>
                    <thead><tr><th>Mode</th><th>Behaviour</th><th>Important point</th></tr></thead>
                    <tbody>
                        <tr><td>r</td><td>Read</td><td>File must exist.</td></tr>
                        <tr><td>w</td><td>Write</td><td>Existing contents are replaced.</td></tr>
                        <tr><td>a</td><td>Append</td><td>New data is added at the end.</td></tr>
                        <tr><td>x</td><td>Exclusive creation</td><td>Fails if the file already exists.</td></tr>
                        <tr><td>r+</td><td>Read and write</td><td>File must exist.</td></tr>
                    </tbody>
                </table>
            </section>

            <section class="lesson-section">
                <h2>3. Writing text to a file</h2>
                <pre><code>with open("student.txt", "w") as file:
        file.write("Name: Aisha\\n")
        file.write("Course: BCA\\n")</code></pre>
                <p>The <code>\\n</code> represents a newline, so each piece of information appears on a separate line.</p>
                <p><strong>Contents of student.txt:</strong></p>
                <pre><code>Name: Aisha
    Course: BCA</code></pre>
            </section>

            <section class="lesson-section">
                <h2>4. Appending data</h2>
                <pre><code>with open("student.txt", "a") as file:
        file.write("Semester: 4\\n")</code></pre>
                <p>Append mode adds the new line without deleting the earlier content.</p>
            </section>

            <section class="lesson-section">
                <h2>5. Reading methods</h2>
                <p><strong>read():</strong> Reads all remaining content, or a specified number of characters.</p>
                <pre><code>with open("student.txt", "r") as file:
        print(file.read())</code></pre>
                <p><strong>readline():</strong> Reads one line.</p>
                <pre><code>with open("student.txt", "r") as file:
        print(file.readline())</code></pre>
                <p><strong>readlines():</strong> Returns the remaining lines as a list of strings.</p>
                <pre><code>with open("student.txt", "r") as file:
        lines = file.readlines()
        print(lines)</code></pre>
            </section>

            <section class="lesson-section">
                <h2>6. Using a loop to read a file</h2>
                <pre><code>with open("student.txt", "r") as file:
        for line in file:
            print(line.strip())</code></pre>
                <p>Reading line by line is useful for large text files because the program does not need to load the entire file into memory at once.</p>
            </section>

            <section class="lesson-section">
                <h2>7. File handling with exception handling</h2>
                <p>A file may not exist or may not be accessible. We can handle such errors with <code>try</code> and <code>except</code>.</p>
                <pre><code>try:
        with open("unknown.txt", "r") as file:
            print(file.read())
    except FileNotFoundError:
        print("File not found.")</code></pre>
                <p>This prevents the program from terminating with an unhandled missing-file error.</p>
            </section>

            <section class="lesson-section">
                <h2>8. Working with file paths</h2>
                <p>A <strong>file path</strong> tells the computer where a file is located. Python's <code>pathlib</code> module provides an object-oriented way to work with paths.</p>
                <pre><code>from pathlib import Path

    path = Path("student.txt")

    if path.exists():
        print("File exists")
    else:
        print("File does not exist")</code></pre>
            </section>

            <section class="lesson-section">
                <h2>9. Text files and binary files</h2>
                <table>
                    <thead><tr><th>Text files</th><th>Binary files</th></tr></thead>
                    <tbody>
                        <tr><td>Store text characters.</td><td>Store bytes.</td></tr>
                        <tr><td>Common modes include r, w and a.</td><td>Use b with a mode, such as rb or wb.</td></tr>
                        <tr><td>Examples: .txt, .csv</td><td>Examples: images, audio, PDFs</td></tr>
                    </tbody>
                </table>
                <p>For example, <code>rb</code> opens a file for reading bytes, while <code>wb</code> opens it for writing bytes.</p>
            </section>

            <section class="lesson-section">
                <h2>10. Common mistakes</h2>
                <ul>
                    <li>Trying to read a file that does not exist.</li>
                    <li>Using write mode when you intended to append.</li>
                    <li>Forgetting to close a file when not using a context manager.</li>
                    <li>Using an incorrect file path.</li>
                    <li>Forgetting that read() returns a string in text mode.</li>
                </ul>
            </section>

            <section class="lesson-section cq-quiz">
                <h2>Knowledge Check – Intermediate 4 (Deep)</h2>
                <div class="cq-question" data-answer="c">
                    <p><strong>1. Which mode creates a file only if it does not already exist?</strong></p>
                    <label><input type="radio" name="i4d1" value="a"> r</label>
                    <label><input type="radio" name="i4d1" value="b"> a</label>
                    <label><input type="radio" name="i4d1" value="c"> x</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>2. Which method reads one line?</strong></p>
                    <label><input type="radio" name="i4d2" value="a"> readline()</label>
                    <label><input type="radio" name="i4d2" value="b"> write()</label>
                    <label><input type="radio" name="i4d2" value="c"> close()</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="b">
                    <p><strong>3. Which exception is commonly raised when a file cannot be found?</strong></p>
                    <label><input type="radio" name="i4d3" value="a"> ValueError</label>
                    <label><input type="radio" name="i4d3" value="b"> FileNotFoundError</label>
                    <label><input type="radio" name="i4d3" value="c"> NameError</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="c">
                    <p><strong>4. What does the b in rb mean?</strong></p>
                    <label><input type="radio" name="i4d4" value="a"> Backup</label>
                    <label><input type="radio" name="i4d4" value="b"> Begin</label>
                    <label><input type="radio" name="i4d4" value="c"> Binary</label>
                    <p class="cq-feedback"></p>
                </div>
                <div class="cq-question" data-answer="a">
                    <p><strong>5. Which module provides the Path class?</strong></p>
                    <label><input type="radio" name="i4d5" value="a"> pathlib</label>
                    <label><input type="radio" name="i4d5" value="b"> math</label>
                    <label><input type="radio" name="i4d5" value="c"> random</label>
                    <p class="cq-feedback"></p>
                </div>
                <button type="button" id="checkChapterQuiz">Check my answers</button>
                <p id="chapterQuizResult" aria-live="polite"></p>
            </section>
        `
    };

    
const chapterI5 = {
    id: "i5",
    title: "Exception Handling",

    quick: `
        <section class="lesson-section">
            <h2>1. What is an Exception?</h2>
            <p>An exception is an error that occurs while a program is running. It interrupts the normal flow of the program.</p>
            <pre><code>number = 10
result = number / 0
print(result)</code></pre>
            <p>This causes a <code>ZeroDivisionError</code> because a number cannot be divided by zero.</p>
        </section>

        <section class="lesson-section">
            <h2>2. Why Handle Exceptions?</h2>
            <p>Exception handling allows a program to respond to errors instead of stopping unexpectedly.</p>
        </section>

        <section class="lesson-section">
            <h2>3. try and except</h2>
            <p>Put code that may cause an error inside <code>try</code>. Use <code>except</code> to handle the error.</p>
            <pre><code>try:
    number = int(input("Enter a number: "))
    print(10 / number)
except:
    print("Something went wrong")</code></pre>
            <p>If an error occurs, the except block runs.</p>
        </section>

        <section class="lesson-section">
            <h2>4. Handling Specific Exceptions</h2>
            <pre><code>try:
    age = int(input("Enter age: "))
except ValueError:
    print("Please enter a valid number")</code></pre>
            <p><code>ValueError</code> occurs when a value has the correct general type expected by a conversion but cannot be converted successfully.</p>
        </section>

        <section class="lesson-section">
            <h2>5. else and finally</h2>
            <ul>
                <li><code>else</code> runs when no exception occurs.</li>
                <li><code>finally</code> runs whether an exception occurs or not.</li>
            </ul>
            <pre><code>try:
    number = int("25")
except ValueError:
    print("Invalid")
else:
    print("Success")
finally:
    print("Program finished")</code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>Success
Program finished</code></pre>
        </section>

        <section class="lesson-section">
            <h2>6. Raising Exceptions</h2>
            <p>Use <code>raise</code> to create an exception deliberately.</p>
            <pre><code>age = 15

if age < 18:
    raise ValueError("Age must be 18 or above")</code></pre>
        </section>

        <section class="lesson-section">
            <h2>7. Quick Revision</h2>
            <ul>
                <li><code>try</code> contains risky code.</li>
                <li><code>except</code> handles exceptions.</li>
                <li><code>else</code> runs if no exception occurs.</li>
                <li><code>finally</code> always runs.</li>
                <li><code>raise</code> creates an exception.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I5</h2>
            <div class="cq-question" data-answer="b">
                <p><strong>1. What is an exception?</strong></p>
                <label><input type="radio" name="i5q1" value="a"> A variable</label>
                <label><input type="radio" name="i5q1" value="b"> An error during program execution</label>
                <label><input type="radio" name="i5q1" value="c"> A loop</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>2. Which block contains code that may cause an exception?</strong></p>
                <label><input type="radio" name="i5q2" value="a"> try</label>
                <label><input type="radio" name="i5q2" value="b"> else</label>
                <label><input type="radio" name="i5q2" value="c"> finally</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>3. Which exception can occur when converting "hello" to an integer?</strong></p>
                <label><input type="radio" name="i5q3" value="a"> TypeError</label>
                <label><input type="radio" name="i5q3" value="b"> NameError</label>
                <label><input type="radio" name="i5q3" value="c"> ValueError</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>4. When does finally execute?</strong></p>
                <label><input type="radio" name="i5q4" value="a"> Only when an error occurs</label>
                <label><input type="radio" name="i5q4" value="b"> Whether an exception occurs or not</label>
                <label><input type="radio" name="i5q4" value="c"> Only when the program starts</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>5. Which keyword deliberately raises an exception?</strong></p>
                <label><input type="radio" name="i5q5" value="a"> raise</label>
                <label><input type="radio" name="i5q5" value="b"> print</label>
                <label><input type="radio" name="i5q5" value="c"> import</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `,

    deep: `
        <section class="lesson-section">
            <h2>1. Understanding Errors and Exceptions</h2>
            <p>An error is a problem in a program. Some errors are detected before execution, while exceptions occur during execution.</p>
            <p>For example, dividing by zero, opening a missing file, or converting invalid text into an integer can cause exceptions.</p>
            <pre><code>print(10 / 0)</code></pre>
            <p>Python raises <code>ZeroDivisionError</code> and stops normal execution unless the exception is handled.</p>
        </section>

        <section class="lesson-section">
            <h2>2. Common Built-in Exceptions</h2>
            <ul>
                <li><code>ZeroDivisionError</code> – division by zero.</li>
                <li><code>ValueError</code> – a value is unsuitable for an operation.</li>
                <li><code>TypeError</code> – an operation is used with an unsuitable data type.</li>
                <li><code>NameError</code> – a variable name is not defined.</li>
                <li><code>IndexError</code> – a sequence index does not exist.</li>
                <li><code>KeyError</code> – a dictionary key does not exist.</li>
                <li><code>FileNotFoundError</code> – a requested file cannot be found.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>3. The try-except Structure</h2>
            <p>The try block contains statements that may fail. If an exception occurs, Python looks for a matching except block.</p>
            <pre><code>try:
    number = int(input("Enter a number: "))
    result = 100 / number
    print(result)
except ValueError:
    print("Enter numbers only")
except ZeroDivisionError:
    print("Number cannot be zero")</code></pre>
            <p>Different exceptions can be handled separately, giving users clearer messages.</p>
        </section>

        <section class="lesson-section">
            <h2>4. Handling Multiple Exceptions Together</h2>
            <p>When two exceptions need the same response, they can be grouped in a tuple.</p>
            <pre><code>try:
    number = int(input("Enter number: "))
    print(10 / number)
except (ValueError, ZeroDivisionError):
    print("Invalid input or division by zero")</code></pre>
        </section>

        <section class="lesson-section">
            <h2>5. The else Block</h2>
            <p>The else block executes only when the try block finishes without an exception.</p>
            <pre><code>try:
    number = int("50")
except ValueError:
    print("Invalid number")
else:
    print("Converted successfully:", number)</code></pre>
            <p><strong>Output:</strong> Converted successfully: 50</p>
        </section>

        <section class="lesson-section">
            <h2>6. The finally Block</h2>
            <p>The finally block is used for cleanup operations. It executes whether the try block succeeds or an exception is handled.</p>
            <pre><code>try:
    file = open("notes.txt", "r")
except FileNotFoundError:
    print("File not found")
finally:
    print("Operation completed")</code></pre>
        </section>

        <section class="lesson-section">
            <h2>7. Using raise</h2>
            <p>The raise keyword allows a programmer to signal an error when a rule is violated.</p>
            <pre><code>marks = -5

if marks < 0:
    raise ValueError("Marks cannot be negative")

print(marks)</code></pre>
            <p>This is useful for validating data before processing it.</p>
        </section>

        <section class="lesson-section">
            <h2>8. Creating a Custom Exception</h2>
            <p>A custom exception is an exception class created by the programmer. It is useful when built-in exceptions do not clearly describe a particular application error.</p>
            <pre><code>class AgeError(Exception):
    pass

age = 15

if age < 18:
    raise AgeError("Minimum age is 18")</code></pre>
            <p>The custom class inherits from Python's built-in <code>Exception</code> class.</p>
        </section>

        <section class="lesson-section">
            <h2>9. Good Exception-Handling Practices</h2>
            <ul>
                <li>Handle specific exceptions whenever possible.</li>
                <li>Give meaningful error messages.</li>
                <li>Do not hide errors with empty except blocks.</li>
                <li>Use finally or context managers for cleanup.</li>
                <li>Validate user input before processing it.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>10. Chapter Revision</h2>
            <ul>
                <li>Exceptions interrupt normal program execution.</li>
                <li>try contains risky statements.</li>
                <li>except handles an exception.</li>
                <li>else runs when no exception occurs.</li>
                <li>finally is used for cleanup.</li>
                <li>raise signals an exception.</li>
                <li>Custom exceptions are created by inheriting from Exception.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I5</h2>
            <div class="cq-question" data-answer="c">
                <p><strong>1. Which exception occurs when a dictionary key is missing?</strong></p>
                <label><input type="radio" name="i5d1" value="a"> IndexError</label>
                <label><input type="radio" name="i5d1" value="b"> ValueError</label>
                <label><input type="radio" name="i5d1" value="c"> KeyError</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>2. When does the else block execute?</strong></p>
                <label><input type="radio" name="i5d2" value="a"> When no exception occurs in try</label>
                <label><input type="radio" name="i5d2" value="b"> Whenever an exception occurs</label>
                <label><input type="radio" name="i5d2" value="c"> Only after finally</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>3. What is the purpose of finally?</strong></p>
                <label><input type="radio" name="i5d3" value="a"> To create a loop</label>
                <label><input type="radio" name="i5d3" value="b"> To perform cleanup actions</label>
                <label><input type="radio" name="i5d3" value="c"> To define a class</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>4. Which class should a custom exception normally inherit from?</strong></p>
                <label><input type="radio" name="i5d4" value="a"> list</label>
                <label><input type="radio" name="i5d4" value="b"> str</label>
                <label><input type="radio" name="i5d4" value="c"> Exception</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>5. Which exception is raised by int("hello")?</strong></p>
                <label><input type="radio" name="i5d5" value="a"> ValueError</label>
                <label><input type="radio" name="i5d5" value="b"> KeyError</label>
                <label><input type="radio" name="i5d5" value="c"> IndexError</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `
};


const chapterI6 = {
    id: "i6",
    title: "Object-Oriented Programming",

    quick: `
        <section class="lesson-section">
            <h2>1. What is OOP?</h2>
            <p>Object-Oriented Programming (OOP) is a programming approach that organizes code using classes and objects.</p>
            <p>For example, a student has information such as name and age, and actions such as studying or displaying details.</p>
        </section>

        <section class="lesson-section">
            <h2>2. What is a Class?</h2>
            <p>A class is a blueprint or template used to create objects.</p>
            <pre><code>class Student:
    name = "Aisha"
    age = 20</code></pre>
        </section>

        <section class="lesson-section">
            <h2>3. What is an Object?</h2>
            <p>An object is an instance of a class. It represents an actual item created using the class.</p>
            <pre><code>class Student:
    name = "Aisha"

student1 = Student()

print(student1.name)</code></pre>
            <p><strong>Output:</strong> Aisha</p>
        </section>

        <section class="lesson-section">
            <h2>4. The __init__() Method</h2>
            <p>The <code>__init__()</code> method initializes an object's attributes when the object is created.</p>
            <pre><code>class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

student1 = Student("Aisha", 20)

print(student1.name)
print(student1.age)</code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>Aisha
20</code></pre>
        </section>

        <section class="lesson-section">
            <h2>5. Understanding self</h2>
            <p><code>self</code> refers to the current object. It is used to access that object's attributes and methods.</p>
        </section>

        <section class="lesson-section">
            <h2>6. Methods</h2>
            <p>A method is a function defined inside a class.</p>
            <pre><code>class Student:
    def greet(self):
        print("Hello, student!")

student1 = Student()
student1.greet()</code></pre>
            <p><strong>Output:</strong> Hello, student!</p>
        </section>

        <section class="lesson-section">
            <h2>7. Multiple Objects</h2>
            <pre><code>class Student:
    def __init__(self, name):
        self.name = name

student1 = Student("Aisha")
student2 = Student("Rahul")

print(student1.name)
print(student2.name)</code></pre>
            <p>Each object stores its own name.</p>
        </section>

        <section class="lesson-section">
            <h2>8. Quick Revision</h2>
            <ul>
                <li>Class is a blueprint.</li>
                <li>Object is an instance of a class.</li>
                <li>Attributes store object data.</li>
                <li>Methods define object behaviour.</li>
                <li><code>self</code> refers to the current object.</li>
                <li><code>__init__()</code> initializes an object.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I6</h2>
            <div class="cq-question" data-answer="b">
                <p><strong>1. What is a class?</strong></p>
                <label><input type="radio" name="i6q1" value="a"> An object</label>
                <label><input type="radio" name="i6q1" value="b"> A blueprint for objects</label>
                <label><input type="radio" name="i6q1" value="c"> A loop</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>2. What is an object?</strong></p>
                <label><input type="radio" name="i6q2" value="a"> An instance of a class</label>
                <label><input type="radio" name="i6q2" value="b"> A Python keyword</label>
                <label><input type="radio" name="i6q2" value="c"> An exception</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>3. Which method initializes an object?</strong></p>
                <label><input type="radio" name="i6q3" value="a"> start()</label>
                <label><input type="radio" name="i6q3" value="b"> main()</label>
                <label><input type="radio" name="i6q3" value="c"> __init__()</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>4. What does self refer to?</strong></p>
                <label><input type="radio" name="i6q4" value="a"> The parent class only</label>
                <label><input type="radio" name="i6q4" value="b"> The current object</label>
                <label><input type="radio" name="i6q4" value="c"> The Python interpreter</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>5. What is a method?</strong></p>
                <label><input type="radio" name="i6q5" value="a"> A function defined inside a class</label>
                <label><input type="radio" name="i6q5" value="b"> A variable outside Python</label>
                <label><input type="radio" name="i6q5" value="c"> A type of loop</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `,

    deep: `
        <section class="lesson-section">
            <h2>1. Understanding Object-Oriented Programming</h2>
            <p>OOP organizes a program around objects. An object combines data and the operations that work with that data.</p>
            <p>For example, a bank account can have an account holder's name and balance as data, and deposit and withdraw as operations.</p>
        </section>

        <section class="lesson-section">
            <h2>2. Classes and Objects</h2>
            <p>A class defines the structure and behaviour of objects. Objects are created from that class.</p>
            <pre><code>class Car:
    brand = "Toyota"

car1 = Car()
car2 = Car()

print(car1.brand)
print(car2.brand)</code></pre>
            <p>Both objects are instances of the Car class.</p>
        </section>

        <section class="lesson-section">
            <h2>3. Attributes</h2>
            <p>Attributes are variables associated with a class or object.</p>
            <ul>
                <li>Instance attributes belong to individual objects.</li>
                <li>Class attributes are shared through the class unless overridden by an instance attribute.</li>
            </ul>
            <pre><code>class Student:
    college = "ABC College"

    def __init__(self, name):
        self.name = name

s1 = Student("Aisha")
s2 = Student("Rahul")

print(s1.name)
print(s2.name)
print(Student.college)</code></pre>
        </section>

        <section class="lesson-section">
            <h2>4. The Constructor: __init__()</h2>
            <p>In Python, <code>__init__()</code> is an initializer method called automatically when a new object is created. It is commonly called a constructor in beginner explanations.</p>
            <pre><code>class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

emp = Employee("Mira", 30000)

print(emp.name)
print(emp.salary)</code></pre>
        </section>

        <section class="lesson-section">
            <h2>5. Instance Methods</h2>
            <p>An instance method works with an object and receives the current instance as its first parameter, conventionally named self.</p>
            <pre><code>class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

r1 = Rectangle(5, 3)
print(r1.area())</code></pre>
            <p><strong>Output:</strong> 15</p>
        </section>

        <section class="lesson-section">
            <h2>6. Class Methods</h2>
            <p>A class method receives the class as its first parameter, conventionally named <code>cls</code>. It is created using <code>@classmethod</code>.</p>
            <pre><code>class Student:
    college = "ABC College"

    @classmethod
    def change_college(cls, name):
        cls.college = name

Student.change_college("XYZ College")
print(Student.college)</code></pre>
        </section>

        <section class="lesson-section">
            <h2>7. Static Methods</h2>
            <p>A static method belongs to a class's namespace but does not automatically receive self or cls. It is created using <code>@staticmethod</code>.</p>
            <pre><code>class Calculator:
    @staticmethod
    def add(a, b):
        return a + b

print(Calculator.add(10, 20))</code></pre>
            <p><strong>Output:</strong> 30</p>
        </section>

        <section class="lesson-section">
            <h2>8. Instance, Class and Static Methods</h2>
            <ul>
                <li>Instance method: works with an individual object's data.</li>
                <li>Class method: works with class-level data.</li>
                <li>Static method: performs a related task without automatically receiving the object or class.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>9. Benefits of OOP</h2>
            <ul>
                <li>Organization: related data and behaviour stay together.</li>
                <li>Reusability: classes can be reused to create multiple objects.</li>
                <li>Maintainability: programs can be divided into manageable parts.</li>
                <li>Extensibility: classes can be extended using inheritance.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>10. Chapter Revision</h2>
            <ul>
                <li>A class is a blueprint.</li>
                <li>An object is an instance of a class.</li>
                <li>Attributes store data.</li>
                <li>Methods define behaviour.</li>
                <li><code>self</code> refers to the current instance.</li>
                <li><code>cls</code> refers to the class in a class method.</li>
                <li>Decorators <code>@classmethod</code> and <code>@staticmethod</code> define special method types.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I6</h2>
            <div class="cq-question" data-answer="b">
                <p><strong>1. Which attribute belongs to an individual object?</strong></p>
                <label><input type="radio" name="i6d1" value="a"> Class attribute</label>
                <label><input type="radio" name="i6d1" value="b"> Instance attribute</label>
                <label><input type="radio" name="i6d1" value="c"> Global module</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>2. Which decorator defines a class method?</strong></p>
                <label><input type="radio" name="i6d2" value="a"> @classmethod</label>
                <label><input type="radio" name="i6d2" value="b"> @staticmethod</label>
                <label><input type="radio" name="i6d2" value="c"> @property</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>3. What is the conventional first parameter of a class method?</strong></p>
                <label><input type="radio" name="i6d3" value="a"> self</label>
                <label><input type="radio" name="i6d3" value="b"> object</label>
                <label><input type="radio" name="i6d3" value="c"> cls</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>4. Which method type does not automatically receive self or cls?</strong></p>
                <label><input type="radio" name="i6d4" value="a"> Instance method</label>
                <label><input type="radio" name="i6d4" value="b"> Static method</label>
                <label><input type="radio" name="i6d4" value="c"> Class method</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>5. Which decorator defines a static method?</strong></p>
                <label><input type="radio" name="i6d5" value="a"> @staticmethod</label>
                <label><input type="radio" name="i6d5" value="b"> @classmethod</label>
                <label><input type="radio" name="i6d5" value="c"> @init</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `
};

const chapterI7 = {
    id: "i7",
    title: "OOP Principles",

    quick: `
        <section class="lesson-section">
            <h2>1. Four Main Principles of OOP</h2>
            <p>Object-Oriented Programming is based on four important principles:</p>
            <ol>
                <li>Encapsulation</li>
                <li>Inheritance</li>
                <li>Polymorphism</li>
                <li>Abstraction</li>
            </ol>
        </section>

        <section class="lesson-section">
            <h2>2. Encapsulation</h2>
            <p>Encapsulation means combining data and methods inside a class and controlling how the data is accessed.</p>
            <pre><code>class BankAccount:
    def __init__(self, balance):
        self.__balance = balance

    def show_balance(self):
        print(self.__balance)

account = BankAccount(5000)
account.show_balance()</code></pre>
            <p>The double underscore makes <code>__balance</code> name-mangled. It discourages direct access but does not provide absolute privacy.</p>
        </section>

        <section class="lesson-section">
            <h2>3. Inheritance</h2>
            <p>Inheritance allows one class to reuse and extend another class.</p>
            <pre><code>class Animal:
    def eat(self):
        print("Eating")

class Dog(Animal):
    def bark(self):
        print("Barking")

dog = Dog()
dog.eat()
dog.bark()</code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>Eating
Barking</code></pre>
        </section>

        <section class="lesson-section">
            <h2>4. Polymorphism</h2>
            <p>Polymorphism means different objects can respond to the same method name in different ways.</p>
            <pre><code>class Dog:
    def sound(self):
        print("Bark")

class Cat:
    def sound(self):
        print("Meow")

for animal in [Dog(), Cat()]:
    animal.sound()</code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>Bark
Meow</code></pre>
        </section>

        <section class="lesson-section">
            <h2>5. Abstraction</h2>
            <p>Abstraction means exposing essential operations while hiding implementation details.</p>
            <p>Python supports abstract base classes through the <code>abc</code> module.</p>
            <pre><code>from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side * self.side

square = Square(4)
print(square.area())</code></pre>
            <p><strong>Output:</strong> 16</p>
        </section>

        <section class="lesson-section">
            <h2>6. Method Overriding</h2>
            <p>Method overriding occurs when a child class provides its own implementation of a method inherited from its parent.</p>
            <pre><code>class Animal:
    def sound(self):
        print("Animal sound")

class Dog(Animal):
    def sound(self):
        print("Bark")

Dog().sound()</code></pre>
        </section>

        <section class="lesson-section">
            <h2>7. Quick Revision</h2>
            <ul>
                <li>Encapsulation controls access to data.</li>
                <li>Inheritance reuses and extends classes.</li>
                <li>Polymorphism allows different behaviours through a common interface.</li>
                <li>Abstraction hides implementation details.</li>
                <li>Overriding changes an inherited method's implementation.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I7</h2>
            <div class="cq-question" data-answer="a">
                <p><strong>1. How many main principles of OOP are commonly taught?</strong></p>
                <label><input type="radio" name="i7q1" value="a"> Four</label>
                <label><input type="radio" name="i7q1" value="b"> Two</label>
                <label><input type="radio" name="i7q1" value="c"> Six</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>2. Which principle combines data and methods and controls access?</strong></p>
                <label><input type="radio" name="i7q2" value="a"> Inheritance</label>
                <label><input type="radio" name="i7q2" value="b"> Encapsulation</label>
                <label><input type="radio" name="i7q2" value="c"> Iteration</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>3. Which principle allows a child class to reuse a parent class?</strong></p>
                <label><input type="radio" name="i7q3" value="a"> Abstraction</label>
                <label><input type="radio" name="i7q3" value="b"> Polymorphism</label>
                <label><input type="radio" name="i7q3" value="c"> Inheritance</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>4. What does polymorphism mean?</strong></p>
                <label><input type="radio" name="i7q4" value="a"> Different objects can provide different behaviours through a common interface</label>
                <label><input type="radio" name="i7q4" value="b"> Every class must have the same data</label>
                <label><input type="radio" name="i7q4" value="c"> A program cannot use methods</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>5. Which module provides Python's abstract base class tools?</strong></p>
                <label><input type="radio" name="i7q5" value="a"> math</label>
                <label><input type="radio" name="i7q5" value="b"> abc</label>
                <label><input type="radio" name="i7q5" value="c"> random</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `,

    deep: `
        <section class="lesson-section">
            <h2>1. Introduction to OOP Principles</h2>
            <p>The four commonly taught pillars of OOP are encapsulation, inheritance, polymorphism and abstraction. They help programmers organize large applications, reuse code and manage complexity.</p>
        </section>

        <section class="lesson-section">
            <h2>2. Encapsulation</h2>
            <p>Encapsulation groups related data and methods in a class. It also provides controlled ways to read or modify data.</p>
            <pre><code>class BankAccount:
    def __init__(self, balance):
        self.__balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def get_balance(self):
        return self.__balance

account = BankAccount(1000)
account.deposit(500)
print(account.get_balance())</code></pre>
            <p><strong>Output:</strong> 1500</p>
            <p>Here, the balance is managed through methods rather than being changed directly by the user of the class.</p>
            <p>Python uses naming conventions and name mangling rather than strict private access modifiers.</p>
        </section>

        <section class="lesson-section">
            <h2>3. Inheritance</h2>
            <p>Inheritance creates a relationship between a parent class and a child class. The child class can use inherited methods and attributes and can add its own features.</p>
            <pre><code>class Person:
    def __init__(self, name):
        self.name = name

    def introduce(self):
        print("My name is", self.name)

class Student(Person):
    def study(self):
        print("I am studying")

student = Student("Aisha")
student.introduce()
student.study()</code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>My name is Aisha
I am studying</code></pre>
        </section>

        <section class="lesson-section">
            <h2>4. Types of Inheritance</h2>
            <ul>
                <li>Single inheritance: one child inherits from one parent.</li>
                <li>Multiple inheritance: one child inherits from more than one parent.</li>
                <li>Multilevel inheritance: a class inherits from a class that already inherits from another class.</li>
                <li>Hierarchical inheritance: multiple child classes inherit from one parent.</li>
                <li>Hybrid inheritance: a combination of inheritance patterns.</li>
            </ul>
            <pre><code>class A:
    def show_a(self):
        print("A")

class B(A):
    def show_b(self):
        print("B")

class C(B):
    def show_c(self):
        print("C")

obj = C()
obj.show_a()
obj.show_b()
obj.show_c()</code></pre>
            <p>This is an example of multilevel inheritance.</p>
        </section>

        <section class="lesson-section">
            <h2>5. The super() Function</h2>
            <p>The <code>super()</code> function provides access to methods in the next class in the method resolution order. It is commonly used to call a parent class initializer.</p>
            <pre><code>class Person:
    def __init__(self, name):
        self.name = name

class Student(Person):
    def __init__(self, name, course):
        super().__init__(name)
        self.course = course

s = Student("Aisha", "BCA")
print(s.name)
print(s.course)</code></pre>
        </section>

        <section class="lesson-section">
            <h2>6. Polymorphism</h2>
            <p>Polymorphism allows a common operation to work with objects of different classes. Each object can provide its own implementation.</p>
            <pre><code>class Circle:
    def draw(self):
        print("Drawing circle")

class Rectangle:
    def draw(self):
        print("Drawing rectangle")

shapes = [Circle(), Rectangle()]

for shape in shapes:
    shape.draw()</code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>Drawing circle
Drawing rectangle</code></pre>
        </section>

        <section class="lesson-section">
            <h2>7. Method Overriding</h2>
            <p>Method overriding occurs when a subclass defines a method with the same name as a method inherited from its parent. The subclass implementation is used for that object.</p>
            <pre><code>class Animal:
    def sound(self):
        print("Some sound")

class Cat(Animal):
    def sound(self):
        print("Meow")

Cat().sound()</code></pre>
        </section>

        <section class="lesson-section">
            <h2>8. Abstraction</h2>
            <p>Abstraction focuses on what an object can do while hiding the internal details of how it does it.</p>
            <p>Python's <code>abc</code> module supports abstract base classes. An abstract method must be implemented by a concrete subclass before that subclass can be instantiated.</p>
            <pre><code>from abc import ABC, abstractmethod

class Payment(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

class CardPayment(Payment):
    def pay(self, amount):
        print("Paid", amount, "by card")

payment = CardPayment()
payment.pay(500)</code></pre>
        </section>

        <section class="lesson-section">
            <h2>9. Advantages of OOP Principles</h2>
            <ul>
                <li>Encapsulation helps protect and manage data.</li>
                <li>Inheritance reduces repeated code.</li>
                <li>Polymorphism makes code flexible.</li>
                <li>Abstraction reduces unnecessary complexity.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>10. Chapter Revision</h2>
            <ul>
                <li>Encapsulation: grouping data and methods with controlled access.</li>
                <li>Inheritance: creating a class based on another class.</li>
                <li>Polymorphism: common operations with different behaviours.</li>
                <li>Abstraction: hiding implementation details.</li>
                <li><code>super()</code> accesses the next implementation in the method resolution order.</li>
                <li>Overriding provides a subclass-specific implementation.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I7</h2>
            <div class="cq-question" data-answer="c">
                <p><strong>1. Which function is commonly used to call a parent initializer?</strong></p>
                <label><input type="radio" name="i7d1" value="a"> parent()</label>
                <label><input type="radio" name="i7d1" value="b"> init()</label>
                <label><input type="radio" name="i7d1" value="c"> super()</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>2. One child class inheriting from two parent classes is:</strong></p>
                <label><input type="radio" name="i7d2" value="a"> Multiple inheritance</label>
                <label><input type="radio" name="i7d2" value="b"> Single inheritance</label>
                <label><input type="radio" name="i7d2" value="c"> Hierarchical inheritance</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>3. What is method overriding?</strong></p>
                <label><input type="radio" name="i7d3" value="a"> Removing a class</label>
                <label><input type="radio" name="i7d3" value="b"> Redefining an inherited method in a subclass</label>
                <label><input type="radio" name="i7d3" value="c"> Creating a variable</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>4. Which module supports abstract base classes?</strong></p>
                <label><input type="radio" name="i7d4" value="a"> os</label>
                <label><input type="radio" name="i7d4" value="b"> re</label>
                <label><input type="radio" name="i7d4" value="c"> abc</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>5. Which principle focuses on hiding implementation details?</strong></p>
                <label><input type="radio" name="i7d5" value="a"> Abstraction</label>
                <label><input type="radio" name="i7d5" value="b"> Inheritance</label>
                <label><input type="radio" name="i7d5" value="c"> Iteration</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `
};


const chapterI8 = {
    id: "i8",
    title: "Iterators and Generators",

    quick: `
        <section class="lesson-section">
            <h2>1. What is Iteration?</h2>
            <p>Iteration means accessing items one at a time, usually using a loop.</p>
            <pre><code>numbers = [10, 20, 30]

for number in numbers:
    print(number)</code></pre>
        </section>

        <section class="lesson-section">
            <h2>2. What is an Iterable?</h2>
            <p>An iterable is an object that can provide its items one at a time. Lists, tuples, strings, dictionaries and sets are examples.</p>
        </section>

        <section class="lesson-section">
            <h2>3. What is an Iterator?</h2>
            <p>An iterator is an object that produces values one at a time. It remembers its current position.</p>
            <pre><code>numbers = [10, 20, 30]

iterator = iter(numbers)

print(next(iterator))
print(next(iterator))
print(next(iterator))</code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>10
20
30</code></pre>
        </section>

        <section class="lesson-section">
            <h2>4. iter() and next()</h2>
            <ul>
                <li><code>iter()</code> obtains an iterator from an iterable.</li>
                <li><code>next()</code> retrieves the next item.</li>
            </ul>
            <p>When no values remain, next() raises <code>StopIteration</code>.</p>
        </section>

        <section class="lesson-section">
            <h2>5. What is a Generator?</h2>
            <p>A generator is a special kind of iterator. It produces values when requested instead of building the entire result in memory at once.</p>
            <pre><code>def count():
    yield 1
    yield 2
    yield 3

for value in count():
    print(value)</code></pre>
        </section>

        <section class="lesson-section">
            <h2>6. The yield Keyword</h2>
            <p><code>yield</code> produces a value and pauses the generator. When the next value is requested, execution continues from where it paused.</p>
        </section>

        <section class="lesson-section">
            <h2>7. Generator Expressions</h2>
            <pre><code>squares = (x * x for x in range(5))

for value in squares:
    print(value)</code></pre>
            <p>Parentheses create a generator expression. It produces values lazily.</p>
        </section>

        <section class="lesson-section">
            <h2>8. Quick Revision</h2>
            <ul>
                <li>An iterable can provide items.</li>
                <li>An iterator produces items one at a time.</li>
                <li><code>iter()</code> creates or obtains an iterator.</li>
                <li><code>next()</code> gets the next item.</li>
                <li><code>yield</code> produces values from a generator.</li>
                <li>Generators are useful for lazy processing.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I8</h2>
            <div class="cq-question" data-answer="b">
                <p><strong>1. What does iter() return when used with a list?</strong></p>
                <label><input type="radio" name="i8q1" value="a"> A string</label>
                <label><input type="radio" name="i8q1" value="b"> An iterator</label>
                <label><input type="radio" name="i8q1" value="c"> An integer</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>2. Which function retrieves the next iterator item?</strong></p>
                <label><input type="radio" name="i8q2" value="a"> next()</label>
                <label><input type="radio" name="i8q2" value="b"> iter()</label>
                <label><input type="radio" name="i8q2" value="c"> yield()</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>3. Which keyword produces values from a generator?</strong></p>
                <label><input type="radio" name="i8q3" value="a"> return</label>
                <label><input type="radio" name="i8q3" value="b"> break</label>
                <label><input type="radio" name="i8q3" value="c"> yield</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>4. What exception indicates that an iterator has no more values?</strong></p>
                <label><input type="radio" name="i8q4" value="a"> ValueError</label>
                <label><input type="radio" name="i8q4" value="b"> StopIteration</label>
                <label><input type="radio" name="i8q4" value="c"> NameError</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>5. What is a generator expression?</strong></p>
                <label><input type="radio" name="i8q5" value="a"> An expression that creates a generator</label>
                <label><input type="radio" name="i8q5" value="b"> A class constructor</label>
                <label><input type="radio" name="i8q5" value="c"> A dictionary key</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `,

    deep: `
        <section class="lesson-section">
            <h2>1. Understanding Iterables</h2>
            <p>An iterable is an object from which an iterator can be obtained. Lists, tuples, strings, dictionaries and sets are common examples.</p>
            <pre><code>word = "Python"

for character in word:
    print(character)</code></pre>
            <p>A for loop obtains an iterator and retrieves values from it until the items are exhausted.</p>
        </section>

        <section class="lesson-section">
            <h2>2. Understanding Iterators</h2>
            <p>An iterator represents a stream of values. It remembers its current position and produces the next value when requested.</p>
            <pre><code>colors = ["red", "green", "blue"]

iterator = iter(colors)

print(next(iterator))
print(next(iterator))
print(next(iterator))</code></pre>
            <p>After the last item, another call to next() raises <code>StopIteration</code>.</p>
        </section>

        <section class="lesson-section">
            <h2>3. Iterable vs Iterator</h2>
            <ul>
                <li>Iterable: can provide an iterator.</li>
                <li>Iterator: produces the next value and remembers its position.</li>
                <li><code>iter()</code>: obtains an iterator.</li>
                <li><code>next()</code>: requests the next value.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>4. How a for Loop Works</h2>
            <p>A for loop automatically handles iterator creation and the end-of-iteration condition.</p>
            <pre><code>numbers = [1, 2, 3]

for number in numbers:
    print(number)</code></pre>
            <p>This is conceptually similar to obtaining an iterator and repeatedly calling next() until StopIteration is reached.</p>
        </section>

        <section class="lesson-section">
            <h2>5. Creating a Custom Iterator</h2>
            <p>A custom iterator class normally implements <code>__iter__()</code> and <code>__next__()</code>.</p>
            <pre><code>class CountToThree:
    def __init__(self):
        self.number = 1

    def __iter__(self):
        return self

    def __next__(self):
        if self.number > 3:
            raise StopIteration

        value = self.number
        self.number += 1
        return value

for number in CountToThree():
    print(number)</code></pre>
        </section>

        <section class="lesson-section">
            <h2>6. Understanding Generators</h2>
            <p>A generator is an iterator created by a generator function or generator expression. It produces values when requested.</p>
            <pre><code>def generate_numbers():
    yield 10
    yield 20
    yield 30

for number in generate_numbers():
    print(number)</code></pre>
            <p><code>yield</code> pauses the function and remembers its local state. The next request resumes execution.</p>
        </section>

        <section class="lesson-section">
            <h2>7. yield vs return</h2>
            <ul>
                <li><code>return</code> finishes a function and sends back a result.</li>
                <li><code>yield</code> produces a value and pauses a generator function.</li>
                <li>A generator can produce multiple values over time.</li>
            </ul>
            <pre><code>def normal_function():
    return 10

def generator_function():
    yield 10
    yield 20

print(normal_function())

for value in generator_function():
    print(value)</code></pre>
        </section>

        <section class="lesson-section">
            <h2>8. Generator Expressions</h2>
            <p>A generator expression uses a compact syntax similar to a list comprehension, but it produces values lazily.</p>
            <pre><code>squares = (number ** 2 for number in range(1, 5))

print(next(squares))
print(next(squares))
print(next(squares))</code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>1
4
9</code></pre>
        </section>

        <section class="lesson-section">
            <h2>9. Advantages of Generators</h2>
            <ul>
                <li>They produce values only when needed.</li>
                <li>They can reduce memory usage for large sequences.</li>
                <li>They are useful for processing streams of data.</li>
                <li>They can represent sequences that are too large to store all at once.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>10. Chapter Revision</h2>
            <ul>
                <li>Iterable objects can provide iterators.</li>
                <li>Iterators implement the iterator protocol.</li>
                <li><code>iter()</code> obtains an iterator.</li>
                <li><code>next()</code> requests the next item.</li>
                <li><code>StopIteration</code> signals that iteration is complete.</li>
                <li>Generators use <code>yield</code> to produce values.</li>
                <li>Generator expressions use parentheses.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I8</h2>
            <div class="cq-question" data-answer="c">
                <p><strong>1. Which special method returns the iterator?</strong></p>
                <label><input type="radio" name="i8d1" value="a"> __next__()</label>
                <label><input type="radio" name="i8d1" value="b"> __init__()</label>
                <label><input type="radio" name="i8d1" value="c"> __iter__()</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>2. Which special method retrieves the next value?</strong></p>
                <label><input type="radio" name="i8d2" value="a"> __next__()</label>
                <label><input type="radio" name="i8d2" value="b"> __str__()</label>
                <label><input type="radio" name="i8d2" value="c"> __init__()</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>3. What does yield do?</strong></p>
                <label><input type="radio" name="i8d3" value="a"> Deletes a variable</label>
                <label><input type="radio" name="i8d3" value="b"> Produces a value and pauses the generator</label>
                <label><input type="radio" name="i8d3" value="c"> Imports a module</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>4. Which syntax creates a generator expression?</strong></p>
                <label><input type="radio" name="i8d4" value="a"> [x for x in range(5)]</label>
                <label><input type="radio" name="i8d4" value="b"> {x: x for x in range(5)}</label>
                <label><input type="radio" name="i8d4" value="c"> (x for x in range(5))</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>5. What is one advantage of generators?</strong></p>
                <label><input type="radio" name="i8d5" value="a"> They can produce values lazily</label>
                <label><input type="radio" name="i8d5" value="b"> They always store every value in a list</label>
                <label><input type="radio" name="i8d5" value="c"> They cannot be used in loops</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `
};

const chapterI9 = {
    id: "i9",
    title: "Regular Expressions",

    quick: `
        <section class="lesson-section">
            <h2>1. What are Regular Expressions?</h2>
            <p>A regular expression (regex) is a pattern used to search, match or validate text.</p>
            <p>For example, regex can help find numbers in a sentence or check whether text resembles an email address.</p>
        </section>

        <section class="lesson-section">
            <h2>2. The re Module</h2>
            <p>Python provides the <code>re</code> module for regular expressions.</p>
            <pre><code>import re

text = "My number is 12345"

result = re.search(r"12345", text)

if result:
    print("Number found")</code></pre>
        </section>

        <section class="lesson-section">
            <h2>3. Common Regex Symbols</h2>
            <ul>
                <li><code>\\d</code> – a digit from 0 to 9.</li>
                <li><code>\\w</code> – a word character.</li>
                <li><code>\\s</code> – whitespace.</li>
                <li><code>.</code> – any character except a newline by default.</li>
                <li><code>^</code> – start of a string.</li>
                <li><code>$</code> – end of a string.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>4. Quantifiers</h2>
            <ul>
                <li><code>*</code> – zero or more repetitions.</li>
                <li><code>+</code> – one or more repetitions.</li>
                <li><code>?</code> – zero or one repetition.</li>
                <li><code>{n}</code> – exactly n repetitions.</li>
                <li><code>{n,m}</code> – between n and m repetitions.</li>
            </ul>
            <pre><code>import re

text = "My PIN is 1234"

print(re.findall(r"\\d{4}", text))</code></pre>
            <p><strong>Output:</strong> ['1234']</p>
        </section>

        <section class="lesson-section">
            <h2>5. Important re Functions</h2>
            <ul>
                <li><code>re.search()</code> – finds the first match anywhere.</li>
                <li><code>re.match()</code> – checks for a match at the beginning.</li>
                <li><code>re.findall()</code> – returns all non-overlapping matches as a list.</li>
                <li><code>re.sub()</code> – replaces matched text.</li>
                <li><code>re.split()</code> – splits text using a pattern.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>6. Groups</h2>
            <p>Parentheses create capturing groups in a regular expression.</p>
            <pre><code>import re

text = "Date: 17-11-2026"

match = re.search(r"(\\d{2})-(\\d{2})-(\\d{4})", text)

if match:
    print(match.group(1))
    print(match.group(2))
    print(match.group(3))</code></pre>
        </section>

        <section class="lesson-section">
            <h2>7. Quick Revision</h2>
            <ul>
                <li>Regex is used for pattern matching.</li>
                <li>Python's module is <code>re</code>.</li>
                <li><code>\\d</code> matches digits.</li>
                <li><code>+</code> means one or more.</li>
                <li><code>findall()</code> returns all matches.</li>
                <li><code>sub()</code> replaces matching text.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I9</h2>
            <div class="cq-question" data-answer="b">
                <p><strong>1. Which module supports regular expressions?</strong></p>
                <label><input type="radio" name="i9q1" value="a"> math</label>
                <label><input type="radio" name="i9q1" value="b"> re</label>
                <label><input type="radio" name="i9q1" value="c"> random</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>2. Which pattern symbol matches a digit?</strong></p>
                <label><input type="radio" name="i9q2" value="a"> \\d</label>
                <label><input type="radio" name="i9q2" value="b"> \\s</label>
                <label><input type="radio" name="i9q2" value="c"> \\w</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>3. Which function returns all non-overlapping matches?</strong></p>
                <label><input type="radio" name="i9q3" value="a"> search()</label>
                <label><input type="radio" name="i9q3" value="b"> match()</label>
                <label><input type="radio" name="i9q3" value="c"> findall()</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>4. What does the + quantifier mean?</strong></p>
                <label><input type="radio" name="i9q4" value="a"> Zero repetitions only</label>
                <label><input type="radio" name="i9q4" value="b"> One or more repetitions</label>
                <label><input type="radio" name="i9q4" value="c"> Exactly two repetitions</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>5. Which function replaces matching text?</strong></p>
                <label><input type="radio" name="i9q5" value="a"> re.sub()</label>
                <label><input type="radio" name="i9q5" value="b"> re.search()</label>
                <label><input type="radio" name="i9q5" value="c"> re.match()</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `,

    deep: `
        <section class="lesson-section">
            <h2>1. Introduction to Regular Expressions</h2>
            <p>Regular expressions are patterns that describe text. They are useful when searching, extracting, validating or replacing text.</p>
            <p>For example, a program can find all digit sequences in a paragraph without checking each character manually.</p>
        </section>

        <section class="lesson-section">
            <h2>2. Importing the re Module</h2>
            <pre><code>import re

text = "Python 3 is useful"

matches = re.findall(r"\\w+", text)
print(matches)</code></pre>
            <p><strong>Output:</strong> ['Python', '3', 'is', 'useful']</p>
            <p>The prefix <code>r</code> creates a raw string, which is useful for writing regex patterns containing backslashes.</p>
        </section>

        <section class="lesson-section">
            <h2>3. Character Classes and Special Sequences</h2>
            <ul>
                <li><code>\\d</code>: digit.</li>
                <li><code>\\D</code>: non-digit.</li>
                <li><code>\\w</code>: word character.</li>
                <li><code>\\W</code>: non-word character.</li>
                <li><code>\\s</code>: whitespace.</li>
                <li><code>\\S</code>: non-whitespace.</li>
                <li><code>.</code>: any character except newline by default.</li>
                <li><code>[abc]</code>: one character from a, b or c.</li>
                <li><code>[0-9]</code>: one digit.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>4. Anchors</h2>
            <ul>
                <li><code>^</code> matches the beginning of the string.</li>
                <li><code>$</code> matches the end of the string.</li>
            </ul>
            <pre><code>import re

print(bool(re.search(r"^Hello", "Hello Python")))
print(bool(re.search(r"Python$", "Hello Python")))</code></pre>
            <p>Both results are True.</p>
        </section>

        <section class="lesson-section">
            <h2>5. Quantifiers</h2>
            <ul>
                <li><code>*</code>: zero or more.</li>
                <li><code>+</code>: one or more.</li>
                <li><code>?</code>: zero or one.</li>
                <li><code>{3}</code>: exactly three.</li>
                <li><code>{2,5}</code>: from two to five.</li>
            </ul>
            <pre><code>import re

text = "A12 B123 C1234"

print(re.findall(r"\\d{3}", text))</code></pre>
            <p>This finds three-digit sequences. Regex matching details depend on the pattern and the surrounding text.</p>
        </section>

        <section class="lesson-section">
            <h2>6. search(), match() and fullmatch()</h2>
            <ul>
                <li><code>search()</code> searches anywhere in the string for the first match.</li>
                <li><code>match()</code> checks for a match at the beginning.</li>
                <li><code>fullmatch()</code> checks whether the entire string matches the pattern.</li>
            </ul>
            <pre><code>import re

text = "Python"

print(bool(re.search(r"th", text)))
print(bool(re.match(r"Py", text)))
print(bool(re.fullmatch(r"Python", text)))</code></pre>
        </section>

        <section class="lesson-section">
            <h2>7. findall() and finditer()</h2>
            <p><code>findall()</code> returns all non-overlapping matches in a list. <code>finditer()</code> returns an iterator of match objects.</p>
            <pre><code>import re

text = "Order 101, Order 205"

print(re.findall(r"\\d+", text))

for match in re.finditer(r"\\d+", text):
    print(match.group(), match.start())</code></pre>
        </section>

        <section class="lesson-section">
            <h2>8. Groups</h2>
            <p>Parentheses create capturing groups. The matched parts can be accessed using <code>group()</code>.</p>
            <pre><code>import re

text = "17-11-2026"
match = re.fullmatch(r"(\\d{2})-(\\d{2})-(\\d{4})", text)

if match:
    day, month, year = match.groups()
    print(day, month, year)</code></pre>
        </section>

        <section class="lesson-section">
            <h2>9. Replacing and Splitting</h2>
            <pre><code>import re

text = "Python is easy"

new_text = re.sub(r"easy", "powerful", text)
print(new_text)

data = "apple,banana;orange"
print(re.split(r"[,;]", data))</code></pre>
            <p><code>sub()</code> replaces matches, while <code>split()</code> divides text at matches.</p>
        </section>

        <section class="lesson-section">
            <h2>10. Practical Example: Checking a PIN</h2>
            <pre><code>import re

pin = "1234"

if re.fullmatch(r"\\d{4}", pin):
    print("Valid four-digit PIN format")
else:
    print("Invalid PIN format")</code></pre>
            <p>This checks only the format. It does not prove that the PIN is authentic or secure.</p>
        </section>

        <section class="lesson-section">
            <h2>11. Chapter Revision</h2>
            <ul>
                <li>Regex describes patterns in text.</li>
                <li><code>re</code> is Python's regex module.</li>
                <li>Raw strings are useful for regex patterns.</li>
                <li><code>search()</code> searches anywhere.</li>
                <li><code>match()</code> checks the beginning.</li>
                <li><code>fullmatch()</code> checks the whole string.</li>
                <li><code>findall()</code> returns all matches.</li>
                <li><code>sub()</code> replaces text.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I9</h2>
            <div class="cq-question" data-answer="b">
                <p><strong>1. Which function checks whether the entire string matches a pattern?</strong></p>
                <label><input type="radio" name="i9d1" value="a"> search()</label>
                <label><input type="radio" name="i9d1" value="b"> fullmatch()</label>
                <label><input type="radio" name="i9d1" value="c"> findall()</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>2. What does the pattern [0-9] match?</strong></p>
                <label><input type="radio" name="i9d2" value="a"> One digit</label>
                <label><input type="radio" name="i9d2" value="b"> One letter</label>
                <label><input type="radio" name="i9d2" value="c"> A whitespace character</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>3. Which function returns match objects through an iterator?</strong></p>
                <label><input type="radio" name="i9d3" value="a"> sub()</label>
                <label><input type="radio" name="i9d3" value="b"> split()</label>
                <label><input type="radio" name="i9d3" value="c"> finditer()</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>4. What does the ^ anchor represent?</strong></p>
                <label><input type="radio" name="i9d4" value="a"> End of a string</label>
                <label><input type="radio" name="i9d4" value="b"> Beginning of a string</label>
                <label><input type="radio" name="i9d4" value="c"> A digit</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>5. Why use a raw string such as r"\\d+"?</strong></p>
                <label><input type="radio" name="i9d5" value="a"> It makes backslashes easier to write in patterns</label>
                <label><input type="radio" name="i9d5" value="b"> It converts text to numbers</label>
                <label><input type="radio" name="i9d5" value="c"> It creates a list</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `
};


const chapterI10 = {
    id: "i10",
    title: "Working with Data",

    quick: `
        <section class="lesson-section">
            <h2>1. What is Data Processing?</h2>
            <p>Data processing means collecting, organizing, transforming and analyzing data to obtain useful information.</p>
            <p>Python can work with data using lists, dictionaries, files and specialized libraries.</p>
        </section>

        <section class="lesson-section">
            <h2>2. Working with CSV Files</h2>
            <p>CSV stands for Comma-Separated Values. It stores tabular data as rows of values.</p>
            <pre><code>import csv

with open("students.csv", "r") as file:
    reader = csv.reader(file)

    for row in reader:
        print(row)</code></pre>
        </section>

        <section class="lesson-section">
            <h2>3. Reading CSV as Dictionaries</h2>
            <pre><code>import csv

with open("students.csv", "r") as file:
    reader = csv.DictReader(file)

    for row in reader:
        print(row["name"])</code></pre>
            <p><code>DictReader</code> uses the header row as dictionary keys.</p>
        </section>

        <section class="lesson-section">
            <h2>4. JSON Data</h2>
            <p>JSON stands for JavaScript Object Notation. It is a common text format for storing and exchanging structured data.</p>
            <pre><code>import json

student = {
    "name": "Aisha",
    "age": 20
}

text = json.dumps(student)
print(text)</code></pre>
        </section>

        <section class="lesson-section">
            <h2>5. Reading JSON</h2>
            <pre><code>import json

text = '{"name": "Aisha", "age": 20}'

student = json.loads(text)

print(student["name"])</code></pre>
            <p><strong>Output:</strong> Aisha</p>
        </section>

        <section class="lesson-section">
            <h2>6. Introduction to NumPy</h2>
            <p>NumPy is a Python library for numerical computing. Its main structure is the multidimensional array.</p>
            <pre><code>import numpy as np

numbers = np.array([10, 20, 30])

print(numbers)
print(numbers.mean())</code></pre>
            <p>NumPy must be installed in environments where it is not already available.</p>
        </section>

        <section class="lesson-section">
            <h2>7. Introduction to pandas</h2>
            <p>pandas is a library used for working with structured data. It provides Series and DataFrame objects.</p>
            <pre><code>import pandas as pd

data = {
    "name": ["Aisha", "Rahul"],
    "marks": [85, 90]
}

df = pd.DataFrame(data)
print(df)</code></pre>
        </section>

        <section class="lesson-section">
            <h2>8. Quick Revision</h2>
            <ul>
                <li>CSV stores tabular data as text.</li>
                <li>JSON stores structured data.</li>
                <li><code>csv</code> reads and writes CSV files.</li>
                <li><code>json</code> converts between JSON text and Python objects.</li>
                <li>NumPy supports numerical arrays.</li>
                <li>pandas supports data analysis.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I10</h2>
            <div class="cq-question" data-answer="a">
                <p><strong>1. What does CSV stand for?</strong></p>
                <label><input type="radio" name="i10q1" value="a"> Comma-Separated Values</label>
                <label><input type="radio" name="i10q1" value="b"> Computer Stored Variables</label>
                <label><input type="radio" name="i10q1" value="c"> Common System Values</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>2. Which module works with JSON?</strong></p>
                <label><input type="radio" name="i10q2" value="a"> csv</label>
                <label><input type="radio" name="i10q2" value="b"> json</label>
                <label><input type="radio" name="i10q2" value="c"> math</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>3. Which function converts a Python object to JSON text?</strong></p>
                <label><input type="radio" name="i10q3" value="a"> json.loads()</label>
                <label><input type="radio" name="i10q3" value="b"> json.load()</label>
                <label><input type="radio" name="i10q3" value="c"> json.dumps()</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>4. Which library is commonly used for numerical arrays?</strong></p>
                <label><input type="radio" name="i10q4" value="a"> NumPy</label>
                <label><input type="radio" name="i10q4" value="b"> re</label>
                <label><input type="radio" name="i10q4" value="c"> random</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>5. What is a pandas DataFrame?</strong></p>
                <label><input type="radio" name="i10q5" value="a"> A Python exception</label>
                <label><input type="radio" name="i10q5" value="b"> A two-dimensional tabular data structure</label>
                <label><input type="radio" name="i10q5" value="c"> A regular expression</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `,

    deep: `
        <section class="lesson-section">
            <h2>1. Understanding Data Processing</h2>
            <p>Data processing transforms raw data into information that is easier to understand and use.</p>
            <p>A typical process includes collecting data, cleaning it, organizing it, analyzing it and presenting the results.</p>
        </section>

        <section class="lesson-section">
            <h2>2. CSV Files</h2>
            <p>A CSV file stores tabular data in plain text. Each line usually represents a row, and commas separate fields.</p>
            <pre><code>name,marks
Aisha,85
Rahul,90</code></pre>
            <p>Python's built-in <code>csv</code> module reads and writes CSV data.</p>
        </section>

        <section class="lesson-section">
            <h2>3. Reading CSV with reader()</h2>
            <pre><code>import csv

with open("students.csv", "r", newline="") as file:
    reader = csv.reader(file)

    for row in reader:
        print(row)</code></pre>
            <p>Each row is returned as a list of strings.</p>
        </section>

        <section class="lesson-section">
            <h2>4. Reading CSV with DictReader</h2>
            <pre><code>import csv

with open("students.csv", "r", newline="") as file:
    reader = csv.DictReader(file)

    for row in reader:
        print(row["name"], row["marks"])</code></pre>
            <p>Each row behaves like a dictionary, using column headings as keys.</p>
        </section>

        <section class="lesson-section">
            <h2>5. Writing CSV Files</h2>
            <pre><code>import csv

rows = [
    ["name", "marks"],
    ["Aisha", 85],
    ["Rahul", 90]
]

with open("result.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(rows)</code></pre>
        </section>

        <section class="lesson-section">
            <h2>6. Understanding JSON</h2>
            <p>JSON represents structured data using objects, arrays, strings, numbers, booleans and null values.</p>
            <pre><code>{
    "name": "Aisha",
    "age": 20,
    "subjects": ["Python", "Java"]
}</code></pre>
            <p>JSON is commonly used for configuration files and communication between applications.</p>
        </section>

        <section class="lesson-section">
            <h2>7. Python JSON Functions</h2>
            <ul>
                <li><code>json.dumps()</code>: Python object to JSON string.</li>
                <li><code>json.loads()</code>: JSON string to Python object.</li>
                <li><code>json.dump()</code>: writes JSON data to a file.</li>
                <li><code>json.load()</code>: reads JSON data from a file.</li>
            </ul>
            <pre><code>import json

student = {"name": "Aisha", "marks": 85}

with open("student.json", "w") as file:
    json.dump(student, file)

with open("student.json", "r") as file:
    loaded = json.load(file)

print(loaded["name"])</code></pre>
        </section>

        <section class="lesson-section">
            <h2>8. Introduction to NumPy</h2>
            <p>NumPy is used for numerical computing. Its ndarray supports efficient operations on arrays.</p>
            <pre><code>import numpy as np

numbers = np.array([10, 20, 30, 40])

print(numbers.mean())
print(numbers.sum())
print(numbers.max())</code></pre>
            <p>Common functions include <code>mean()</code>, <code>sum()</code>, <code>min()</code> and <code>max()</code>.</p>
        </section>

        <section class="lesson-section">
            <h2>9. Array Operations</h2>
            <pre><code>import numpy as np

numbers = np.array([1, 2, 3])

print(numbers + 10)
print(numbers * 2)</code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>[11 12 13]
[2 4 6]</code></pre>
            <p>These operations are applied element by element.</p>
        </section>

        <section class="lesson-section">
            <h2>10. Introduction to pandas</h2>
            <p>pandas is a library for manipulating and analyzing structured data.</p>
            <ul>
                <li>Series: a one-dimensional labelled data structure.</li>
                <li>DataFrame: a two-dimensional table with rows and columns.</li>
            </ul>
            <pre><code>import pandas as pd

data = {
    "name": ["Aisha", "Rahul", "Mira"],
    "marks": [85, 90, 78]
}

df = pd.DataFrame(data)

print(df)
print(df["marks"].mean())</code></pre>
        </section>

        <section class="lesson-section">
            <h2>11. Basic Data Selection</h2>
            <pre><code>import pandas as pd

df = pd.DataFrame({
    "name": ["Aisha", "Rahul", "Mira"],
    "marks": [85, 90, 78]
})

print(df["name"])
print(df[df["marks"] > 80])</code></pre>
            <p>The first expression selects a column. The second filters rows based on a condition.</p>
        </section>

        <section class="lesson-section">
            <h2>12. Important Note for CodeQuest</h2>
            <p>CSV and JSON are supported by Python's standard library. NumPy and pandas are external packages. They may require separate installation or runtime configuration before their examples can run in a browser-based Python environment.</p>
        </section>

        <section class="lesson-section">
            <h2>13. Chapter Revision</h2>
            <ul>
                <li>CSV is useful for tabular text data.</li>
                <li>JSON is useful for structured data exchange.</li>
                <li><code>csv.reader()</code> reads CSV rows.</li>
                <li><code>csv.DictReader()</code> reads rows as dictionaries.</li>
                <li><code>json.dump()</code> writes JSON to a file.</li>
                <li>NumPy supports numerical arrays.</li>
                <li>pandas provides Series and DataFrame.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I10</h2>
            <div class="cq-question" data-answer="c">
                <p><strong>1. Which CSV function reads rows as dictionaries?</strong></p>
                <label><input type="radio" name="i10d1" value="a"> csv.writer()</label>
                <label><input type="radio" name="i10d1" value="b"> csv.reader()</label>
                <label><input type="radio" name="i10d1" value="c"> csv.DictReader()</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>2. Which function reads JSON from an open file?</strong></p>
                <label><input type="radio" name="i10d2" value="a"> json.load()</label>
                <label><input type="radio" name="i10d2" value="b"> json.loads()</label>
                <label><input type="radio" name="i10d2" value="c"> json.dumps()</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>3. Which pandas structure represents a two-dimensional table?</strong></p>
                <label><input type="radio" name="i10d3" value="a"> Series</label>
                <label><input type="radio" name="i10d3" value="b"> DataFrame</label>
                <label><input type="radio" name="i10d3" value="c"> Iterator</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>4. Which library provides ndarray?</strong></p>
                <label><input type="radio" name="i10d4" value="a"> pandas</label>
                <label><input type="radio" name="i10d4" value="b"> csv</label>
                <label><input type="radio" name="i10d4" value="c"> NumPy</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>5. Which JSON function writes data to a file?</strong></p>
                <label><input type="radio" name="i10d5" value="a"> json.dump()</label>
                <label><input type="radio" name="i10d5" value="b"> json.loads()</label>
                <label><input type="radio" name="i10d5" value="c"> json.dumps()</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `
};

const chapterI11 = {
    id: "i11",
    title: "Libraries and APIs",

    quick: `
        <section class="lesson-section">
            <h2>1. What is a Library?</h2>
            <p>A library is a collection of reusable code that helps programmers perform tasks without writing everything from scratch.</p>
            <p>Examples include math, random, datetime, NumPy and pandas.</p>
        </section>

        <section class="lesson-section">
            <h2>2. Standard Libraries</h2>
            <p>Python includes many modules in its standard library.</p>
            <pre><code>import math

print(math.sqrt(25))
print(math.pi)</code></pre>
            <p><strong>Output:</strong> 5.0 followed by the value of pi.</p>
        </section>

        <section class="lesson-section">
            <h2>3. Installing External Libraries</h2>
            <p>External packages can commonly be installed using pip.</p>
            <pre><code>pip install requests</code></pre>
            <p>In a terminal, this command installs the Requests package when the environment supports pip.</p>
        </section>

        <section class="lesson-section">
            <h2>4. What is an API?</h2>
            <p>API stands for Application Programming Interface. It defines how one software application can communicate with another.</p>
            <p>For example, a weather application can use a weather service API to request forecast information.</p>
        </section>

        <section class="lesson-section">
            <h2>5. HTTP Requests</h2>
            <p>Web APIs commonly use HTTP methods:</p>
            <ul>
                <li><code>GET</code> – request data.</li>
                <li><code>POST</code> – submit data.</li>
                <li><code>PUT</code> – replace or update a resource.</li>
                <li><code>PATCH</code> – partially update a resource.</li>
                <li><code>DELETE</code> – request deletion of a resource.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>6. Making an API Request</h2>
            <p>The Requests library can send HTTP requests in a Python environment where it is installed.</p>
            <pre><code>import requests

response = requests.get(
    "https://api.example.com/data"
)

print(response.status_code)</code></pre>
            <p>This is an illustrative URL. A real API requires a valid endpoint.</p>
        </section>

        <section class="lesson-section">
            <h2>7. JSON API Responses</h2>
            <pre><code>import requests

response = requests.get(
    "https://api.example.com/data"
)

data = response.json()
print(data)</code></pre>
            <p>Many web APIs return JSON data, which can be converted into Python dictionaries and lists.</p>
        </section>

        <section class="lesson-section">
            <h2>8. Quick Revision</h2>
            <ul>
                <li>A library provides reusable code.</li>
                <li>pip installs external packages.</li>
                <li>API means Application Programming Interface.</li>
                <li>GET requests data.</li>
                <li>POST submits data.</li>
                <li>JSON is a common API response format.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I11</h2>
            <div class="cq-question" data-answer="b">
                <p><strong>1. What does API stand for?</strong></p>
                <label><input type="radio" name="i11q1" value="a"> Application Program Internet</label>
                <label><input type="radio" name="i11q1" value="b"> Application Programming Interface</label>
                <label><input type="radio" name="i11q1" value="c"> Advanced Python Instruction</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>2. Which command installs an external Python package?</strong></p>
                <label><input type="radio" name="i11q2" value="a"> pip install</label>
                <label><input type="radio" name="i11q2" value="b"> python create</label>
                <label><input type="radio" name="i11q2" value="c"> import install</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>3. Which HTTP method is commonly used to retrieve data?</strong></p>
                <label><input type="radio" name="i11q3" value="a"> DELETE</label>
                <label><input type="radio" name="i11q3" value="b"> POST</label>
                <label><input type="radio" name="i11q3" value="c"> GET</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>4. Which library is commonly used to make HTTP requests in Python?</strong></p>
                <label><input type="radio" name="i11q4" value="a"> turtle</label>
                <label><input type="radio" name="i11q4" value="b"> requests</label>
                <label><input type="radio" name="i11q4" value="c"> random</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>5. Which format is commonly used for API responses?</strong></p>
                <label><input type="radio" name="i11q5" value="a"> JSON</label>
                <label><input type="radio" name="i11q5" value="b"> MP3</label>
                <label><input type="radio" name="i11q5" value="c"> PNG</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `,

    deep: `
        <section class="lesson-section">
            <h2>1. Understanding Libraries and Packages</h2>
            <p>A library provides reusable functionality. A module is a Python file containing definitions and statements. A package organizes related modules. A distribution package is commonly installed using a package manager such as pip.</p>
        </section>

        <section class="lesson-section">
            <h2>2. Python Standard Library</h2>
            <p>The standard library is included with Python and provides many useful modules.</p>
            <ul>
                <li><code>math</code>: mathematical functions.</li>
                <li><code>random</code>: pseudo-random choices and numbers.</li>
                <li><code>datetime</code>: dates and times.</li>
                <li><code>os</code>: operating-system interfaces.</li>
                <li><code>json</code>: JSON data handling.</li>
                <li><code>re</code>: regular expressions.</li>
            </ul>
            <pre><code>import random

number = random.randint(1, 10)
print(number)</code></pre>
            <p>The result is a pseudo-random integer from 1 through 10.</p>
        </section>

        <section class="lesson-section">
            <h2>3. External Libraries and pip</h2>
            <p>External libraries are installed separately when they are not already available.</p>
            <pre><code>python -m pip install requests</code></pre>
            <p>Using <code>python -m pip</code> helps ensure pip belongs to the Python interpreter being used.</p>
            <p>To list installed packages, use:</p>
            <pre><code>python -m pip list</code></pre>
        </section>

        <section class="lesson-section">
            <h2>4. What is an API?</h2>
            <p>An API is an interface that allows software components to communicate through defined operations and data formats.</p>
            <p>A web API commonly exposes endpoints that clients can access using HTTP.</p>
            <p>For example, a travel application may request flight information from an airline service.</p>
        </section>

        <section class="lesson-section">
            <h2>5. API Endpoints and HTTP Methods</h2>
            <p>An endpoint is a specific URL where an API resource or operation is available.</p>
            <ul>
                <li>GET: retrieve a resource.</li>
                <li>POST: submit data, often to create a resource.</li>
                <li>PUT: replace a resource.</li>
                <li>PATCH: partially update a resource.</li>
                <li>DELETE: request removal of a resource.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>6. HTTP Status Codes</h2>
            <ul>
                <li>200 – OK.</li>
                <li>201 – Created.</li>
                <li>400 – Bad Request.</li>
                <li>401 – Unauthorized.</li>
                <li>403 – Forbidden.</li>
                <li>404 – Not Found.</li>
                <li>500 – Internal Server Error.</li>
            </ul>
            <p>Status codes help a client understand the result of an HTTP request.</p>
        </section>

        <section class="lesson-section">
            <h2>7. Using the Requests Library</h2>
            <p>The Requests package is a popular third-party library for HTTP communication.</p>
            <pre><code>import requests

response = requests.get(
    "https://api.example.com/users"
)

print(response.status_code)
print(response.text)</code></pre>
            <p>This example demonstrates the structure of a request. The example endpoint is not guaranteed to exist.</p>
        </section>

        <section class="lesson-section">
            <h2>8. Reading JSON Responses</h2>
            <pre><code>import requests

response = requests.get(
    "https://api.example.com/users"
)

if response.status_code == 200:
    data = response.json()
    print(data)</code></pre>
            <p><code>response.json()</code> parses a JSON response into Python data structures when the response contains valid JSON.</p>
        </section>

        <section class="lesson-section">
            <h2>9. Handling Request Errors</h2>
            <pre><code>import requests

try:
    response = requests.get(
        "https://api.example.com/users",
        timeout=10
    )
    response.raise_for_status()
    print(response.json())

except requests.exceptions.RequestException as error:
    print("Request failed:", error)</code></pre>
            <p>A timeout prevents a request from waiting indefinitely. <code>raise_for_status()</code> raises an exception for unsuccessful HTTP status codes.</p>
        </section>

        <section class="lesson-section">
            <h2>10. API Keys and Security</h2>
            <p>Some APIs require an API key or another form of authentication.</p>
            <ul>
                <li>Do not publish secret API keys in public source code.</li>
                <li>Use environment variables or a secure secret manager on a server.</li>
                <li>Use HTTPS for network communication.</li>
                <li>Follow the API provider's rate limits and terms.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>11. Important Note for CodeQuest</h2>
            <p>Pyodide runs Python in a browser. The Requests library and network access may require additional package installation and browser-compatible networking configuration. Do not assume every normal desktop API example will run unchanged inside CodeQuest.</p>
        </section>

        <section class="lesson-section">
            <h2>12. Chapter Revision</h2>
            <ul>
                <li>Libraries provide reusable code.</li>
                <li>pip installs external packages.</li>
                <li>An API defines how software components communicate.</li>
                <li>An endpoint is a specific API URL.</li>
                <li>GET retrieves data and POST submits data.</li>
                <li>HTTP status codes describe request results.</li>
                <li>API keys must be protected.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I11</h2>
            <div class="cq-question" data-answer="c">
                <p><strong>1. What is an API endpoint?</strong></p>
                <label><input type="radio" name="i11d1" value="a"> A Python variable</label>
                <label><input type="radio" name="i11d1" value="b"> A type of loop</label>
                <label><input type="radio" name="i11d1" value="c"> A URL where an API resource or operation is available</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>2. Which status code commonly means Not Found?</strong></p>
                <label><input type="radio" name="i11d2" value="a"> 404</label>
                <label><input type="radio" name="i11d2" value="b"> 200</label>
                <label><input type="radio" name="i11d2" value="c"> 201</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>3. What does response.json() do?</strong></p>
                <label><input type="radio" name="i11d3" value="a"> Sends an email</label>
                <label><input type="radio" name="i11d3" value="b"> Parses a JSON response into Python data</label>
                <label><input type="radio" name="i11d3" value="c"> Installs a package</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>4. Why use a timeout in a network request?</strong></p>
                <label><input type="radio" name="i11d4" value="a"> To change JSON into CSV</label>
                <label><input type="radio" name="i11d4" value="b"> To install Requests</label>
                <label><input type="radio" name="i11d4" value="c"> To limit how long the request waits</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>5. Where should secret API keys be stored?</strong></p>
                <label><input type="radio" name="i11d5" value="a"> In secure configuration such as environment variables or a secret manager</label>
                <label><input type="radio" name="i11d5" value="b"> In a public repository</label>
                <label><input type="radio" name="i11d5" value="c"> In a public comment</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `
};


const chapterI12 = {
    id: "i12",
    title: "Testing and Debugging",

    quick: `
        <section class="lesson-section">
            <h2>1. What is Testing?</h2>
            <p>Testing means checking whether a program behaves as expected.</p>
            <p>It helps identify mistakes before software is used by others.</p>
        </section>

        <section class="lesson-section">
            <h2>2. What is Debugging?</h2>
            <p>Debugging is the process of finding, understanding and fixing errors in a program.</p>
        </section>

        <section class="lesson-section">
            <h2>3. Types of Testing</h2>
            <ul>
                <li>Unit testing: tests a small part of a program.</li>
                <li>Integration testing: checks whether components work together.</li>
                <li>System testing: tests the complete application.</li>
                <li>Acceptance testing: checks whether the software meets user requirements.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>4. Assertions</h2>
            <p>An assertion checks whether a condition is True. If it is False, Python raises an AssertionError.</p>
            <pre><code>age = 20

assert age >= 18

print("Eligible")</code></pre>
            <p><strong>Output:</strong> Eligible</p>
        </section>

        <section class="lesson-section">
            <h2>5. Introduction to unittest</h2>
            <p>Python provides the <code>unittest</code> module for automated testing.</p>
            <pre><code>import unittest

def add(a, b):
    return a + b

class TestCalculator(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)

if __name__ == "__main__":
    unittest.main()</code></pre>
        </section>

        <section class="lesson-section">
            <h2>6. Common Debugging Techniques</h2>
            <ul>
                <li>Read the error message.</li>
                <li>Check the line number.</li>
                <li>Print variable values.</li>
                <li>Test smaller parts of the code.</li>
                <li>Use a debugger when available.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>7. Logging</h2>
            <p>Logging records messages about what a program is doing.</p>
            <pre><code>import logging

logging.basicConfig(level=logging.INFO)

logging.info("Program started")
logging.warning("Check the input")
logging.error("An error occurred")</code></pre>
        </section>

        <section class="lesson-section">
            <h2>8. Quick Revision</h2>
            <ul>
                <li>Testing checks program behaviour.</li>
                <li>Debugging finds and fixes errors.</li>
                <li>Unit testing checks small components.</li>
                <li>Assertions check conditions.</li>
                <li>unittest supports automated testing.</li>
                <li>Logging records program events.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I12</h2>
            <div class="cq-question" data-answer="a">
                <p><strong>1. What is testing?</strong></p>
                <label><input type="radio" name="i12q1" value="a"> Checking whether a program behaves as expected</label>
                <label><input type="radio" name="i12q1" value="b"> Installing Python</label>
                <label><input type="radio" name="i12q1" value="c"> Deleting code</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>2. What is debugging?</strong></p>
                <label><input type="radio" name="i12q2" value="a"> Writing documentation only</label>
                <label><input type="radio" name="i12q2" value="b"> Finding and fixing errors</label>
                <label><input type="radio" name="i12q2" value="c"> Creating a database</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>3. Which type of testing checks a small individual component?</strong></p>
                <label><input type="radio" name="i12q3" value="a"> System testing</label>
                <label><input type="radio" name="i12q3" value="b"> Acceptance testing</label>
                <label><input type="radio" name="i12q3" value="c"> Unit testing</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>4. Which exception does a failed assert statement raise?</strong></p>
                <label><input type="radio" name="i12q4" value="a"> AssertionError</label>
                <label><input type="radio" name="i12q4" value="b"> KeyError</label>
                <label><input type="radio" name="i12q4" value="c"> NameError</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>5. Which module provides Python's standard unit testing framework?</strong></p>
                <label><input type="radio" name="i12q5" value="a"> random</label>
                <label><input type="radio" name="i12q5" value="b"> unittest</label>
                <label><input type="radio" name="i12q5" value="c"> math</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `,

    deep: `
        <section class="lesson-section">
            <h2>1. Understanding Software Testing</h2>
            <p>Software testing evaluates whether a program meets its requirements and behaves correctly for different inputs.</p>
            <p>Testing can reveal incorrect calculations, missing features, unexpected behaviour and errors that appear only in particular situations.</p>
        </section>

        <section class="lesson-section">
            <h2>2. Types of Testing</h2>
            <ul>
                <li>Unit testing: tests an individual function, method or small component.</li>
                <li>Integration testing: checks communication between combined components.</li>
                <li>System testing: tests the complete application.</li>
                <li>Acceptance testing: evaluates whether the system meets user or business requirements.</li>
                <li>Regression testing: checks that previously working features still work after changes.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>3. Manual and Automated Testing</h2>
            <p>Manual testing involves a person performing test steps and checking results.</p>
            <p>Automated testing uses code or tools to run tests and compare actual results with expected results.</p>
        </section>

        <section class="lesson-section">
            <h2>4. Test Cases</h2>
            <p>A test case describes the input, action and expected result used to check a feature.</p>
            <p>For an addition function, useful cases include:</p>
            <ul>
                <li>2 + 3 should return 5.</li>
                <li>0 + 0 should return 0.</li>
                <li>-2 + 5 should return 3.</li>
                <li>2.5 + 1.5 should return 4.0.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>5. Assertions</h2>
            <p>An assertion checks a condition during execution. If the condition is false, an AssertionError is raised.</p>
            <pre><code>def square(number):
    return number * number

assert square(4) == 16
assert square(0) == 0

print("Tests passed")</code></pre>
            <p>Assertions are useful for checking assumptions, but they should not replace proper input validation or production error handling.</p>
        </section>

        <section class="lesson-section">
            <h2>6. The unittest Module</h2>
            <p>The built-in unittest framework supports test cases, test methods and assertions.</p>
            <pre><code>import unittest

def multiply(a, b):
    return a * b

class TestMath(unittest.TestCase):

    def test_multiply(self):
        self.assertEqual(multiply(3, 4), 12)

    def test_zero(self):
        self.assertEqual(multiply(5, 0), 0)

if __name__ == "__main__":
    unittest.main()</code></pre>
        </section>

        <section class="lesson-section">
            <h2>7. Common unittest Assertions</h2>
            <ul>
                <li><code>assertEqual(a, b)</code>: checks equality.</li>
                <li><code>assertNotEqual(a, b)</code>: checks inequality.</li>
                <li><code>assertTrue(x)</code>: checks whether x is true.</li>
                <li><code>assertFalse(x)</code>: checks whether x is false.</li>
                <li><code>assertIsNone(x)</code>: checks whether x is None.</li>
                <li><code>assertRaises()</code>: checks whether an exception occurs.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>8. Understanding Debugging</h2>
            <p>Debugging is the process of locating, understanding and correcting a defect in code.</p>
            <ol>
                <li>Reproduce the problem.</li>
                <li>Read the error message or observe the incorrect output.</li>
                <li>Identify the likely cause.</li>
                <li>Inspect relevant variables and statements.</li>
                <li>Make a correction.</li>
                <li>Run tests again to verify the correction.</li>
            </ol>
        </section>

        <section class="lesson-section">
            <h2>9. Print Debugging</h2>
            <p>Printing variable values can help reveal what a program is doing.</p>
            <pre><code>price = 100
quantity = 3

print("Price:", price)
print("Quantity:", quantity)

total = price * quantity
print("Total:", total)</code></pre>
            <p>This helps inspect intermediate values while investigating a problem.</p>
        </section>

        <section class="lesson-section">
            <h2>10. Using a Debugger</h2>
            <p>A debugger allows a programmer to pause execution, inspect variables and execute code step by step.</p>
            <p>Common debugging features include:</p>
            <ul>
                <li>Breakpoint: pauses execution at a selected line.</li>
                <li>Step over: executes the current line without entering a called function.</li>
                <li>Step into: enters a called function.</li>
                <li>Step out: continues until the current function returns.</li>
                <li>Variable inspection: displays current values.</li>
            </ul>
        </section>

        <section class="lesson-section">
            <h2>11. Logging</h2>
            <p>The logging module records messages at different severity levels.</p>
            <pre><code>import logging

logging.basicConfig(level=logging.DEBUG)

logging.debug("Detailed information")
logging.info("Program started")
logging.warning("Something needs attention")
logging.error("An error occurred")
logging.critical("A serious problem occurred")</code></pre>
            <p>Logging is more flexible than using print statements for ongoing application diagnostics.</p>
        </section>

        <section class="lesson-section">
            <h2>12. Chapter Revision</h2>
            <ul>
                <li>Testing checks expected behaviour.</li>
                <li>Debugging finds and fixes defects.</li>
                <li>Unit tests check individual components.</li>
                <li>Integration tests check combined components.</li>
                <li>Regression tests check previously working features.</li>
                <li>Assertions check conditions.</li>
                <li>unittest provides a standard testing framework.</li>
                <li>Logging records events and problems.</li>
            </ul>
        </section>

        <section class="lesson-section cq-quiz">
            <h2>Knowledge Check – Chapter I12</h2>
            <div class="cq-question" data-answer="b">
                <p><strong>1. Which testing checks that old features still work after a change?</strong></p>
                <label><input type="radio" name="i12d1" value="a"> Unit testing</label>
                <label><input type="radio" name="i12d1" value="b"> Regression testing</label>
                <label><input type="radio" name="i12d1" value="c"> Acceptance testing</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>2. Which unittest assertion checks that two values are equal?</strong></p>
                <label><input type="radio" name="i12d2" value="a"> assertEqual()</label>
                <label><input type="radio" name="i12d2" value="b"> assertRaises()</label>
                <label><input type="radio" name="i12d2" value="c"> assertIsNone()</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p><strong>3. What is a breakpoint?</strong></p>
                <label><input type="radio" name="i12d3" value="a"> A syntax error</label>
                <label><input type="radio" name="i12d3" value="b"> A Python package</label>
                <label><input type="radio" name="i12d3" value="c"> A point where a debugger pauses execution</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p><strong>4. Which logging level is generally used for the most serious standard messages listed here?</strong></p>
                <label><input type="radio" name="i12d4" value="a"> DEBUG</label>
                <label><input type="radio" name="i12d4" value="b"> CRITICAL</label>
                <label><input type="radio" name="i12d4" value="c"> INFO</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p><strong>5. What should you do after fixing a bug?</strong></p>
                <label><input type="radio" name="i12d5" value="a"> Run tests again to verify the fix</label>
                <label><input type="radio" name="i12d5" value="b"> Delete all tests</label>
                <label><input type="radio" name="i12d5" value="c"> Ignore the change</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </section>
    `
};


const chapterA1 = {
    id: "a1",
    title: "Decorators",
    quick: `
        <h2>What are Decorators?</h2>
        <p>A decorator is a function that adds extra functionality to another function without changing its original code.</p>

        <h3>Basic Example</h3>
        <pre><code>def my_decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@my_decorator
def greet():
    print("Hello!")

greet()</code></pre>

        <h3>How it works</h3>
        <ol>
            <li><code>my_decorator</code> receives a function.</li>
            <li><code>wrapper</code> adds extra instructions.</li>
            <li><code>@my_decorator</code> applies the decorator.</li>
        </ol>

        <h3>Why use decorators?</h3>
        <ul>
            <li>Logging function calls.</li>
            <li>Checking permissions.</li>
            <li>Measuring execution time.</li>
            <li>Reusing common functionality.</li>
        </ul>
    `,
    deep: `
        <h2>Advanced Decorators</h2>

        <h3>1. Decorators with arguments</h3>
        <pre><code>def repeat(times):
    def decorator(func):
        def wrapper():
            for i in range(times):
                func()
        return wrapper
    return decorator

@repeat(3)
def hello():
    print("Hello")

hello()</code></pre>

        <h3>2. Using *args and **kwargs</h3>
        <p>These allow a decorator to work with functions that accept different arguments.</p>
        <pre><code>def logger(func):
    def wrapper(*args, **kwargs):
        print("Function called")
        result = func(*args, **kwargs)
        print("Function completed")
        return result
    return wrapper

@logger
def add(a, b):
    return a + b

print(add(10, 20))</code></pre>

        <h3>3. Preserving function information</h3>
        <p>Use <code>functools.wraps</code> to preserve the original function's name and documentation.</p>
        <pre><code>from functools import wraps

def my_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper</code></pre>

        <h3>Quick Quiz</h3>
        <div class="cq-quiz">
            <div class="cq-question" data-answer="b">
                <p>1. What is the main purpose of a decorator?</p>
                <label><input type="radio" name="a1q1" value="a"> To delete a function</label>
                <label><input type="radio" name="a1q1" value="b"> To add functionality to a function</label>
                <label><input type="radio" name="a1q1" value="c"> To convert Python into Java</label>
                <label><input type="radio" name="a1q1" value="d"> To create a database</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p>2. What does <code>@my_decorator</code> do?</p>
                <label><input type="radio" name="a1q2" value="a"> Calls the function repeatedly</label>
                <label><input type="radio" name="a1q2" value="b"> Deletes the original function</label>
                <label><input type="radio" name="a1q2" value="c"> Applies the decorator to the function</label>
                <label><input type="radio" name="a1q2" value="d"> Creates a class</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p>3. Why is <code>functools.wraps</code> useful?</p>
                <label><input type="radio" name="a1q3" value="a"> It preserves original function metadata</label>
                <label><input type="radio" name="a1q3" value="b"> It runs a function in parallel</label>
                <label><input type="radio" name="a1q3" value="c"> It encrypts function output</label>
                <label><input type="radio" name="a1q3" value="d"> It creates a new module</label>
                <p class="cq-feedback"></p>
            </div>

<button id="checkChapterQuiz" type="button">Check My Answer</button>
<p id="chapterQuizResult" aria-live="polite"></p>

        </div>
    `
};

const chapterA2 = {
    id: "a2",
    title: "Context Managers",
    quick: `
        <h2>What are Context Managers?</h2>
        <p>A context manager manages resources by setting them up and cleaning them up automatically.</p>

        <h3>Using the with statement</h3>
        <pre><code>with open("notes.txt", "w") as file:
    file.write("Learning Python")</code></pre>

        <p>Python automatically closes the file when the with block finishes, even if an exception occurs.</p>

        <h3>Why are they useful?</h3>
        <ul>
            <li>Managing files.</li>
            <li>Managing database connections.</li>
            <li>Releasing locks.</li>
            <li>Cleaning up resources safely.</li>
        </ul>
    `,
    deep: `
        <h2>Creating Custom Context Managers</h2>

        <h3>1. Using a class</h3>
        <p>A context manager class commonly defines two special methods:</p>
        <ul>
            <li><code>__enter__()</code> runs when entering the with block.</li>
            <li><code>__exit__()</code> runs when leaving the with block.</li>
        </ul>

        <pre><code>class MyManager:
    def __enter__(self):
        print("Resource acquired")
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print("Resource released")

with MyManager():
    print("Inside block")</code></pre>

        <h3>2. Using contextlib</h3>
        <pre><code>from contextlib import contextmanager

@contextmanager
def my_manager():
    print("Start")
    try:
        yield
    finally:
        print("Cleanup")

with my_manager():
    print("Working")</code></pre>

        <h3>Important concept</h3>
        <p>The cleanup section should run even when the code inside the with block raises an exception.</p>

        <h3>Quick Quiz</h3>
        <div class="cq-quiz">
            <div class="cq-question" data-answer="b">
                <p>1. Which statement is commonly used with context managers?</p>
                <label><input type="radio" name="a2q1" value="a"> switch</label>
                <label><input type="radio" name="a2q1" value="b"> with</label>
                <label><input type="radio" name="a2q1" value="c"> import</label>
                <label><input type="radio" name="a2q1" value="d"> global</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p>2. Which method runs when entering a class-based context manager?</p>
                <label><input type="radio" name="a2q2" value="a"> __enter__</label>
                <label><input type="radio" name="a2q2" value="b"> __exit__</label>
                <label><input type="radio" name="a2q2" value="c"> __init__</label>
                <label><input type="radio" name="a2q2" value="d"> __next__</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="d">
                <p>3. What is the main role of __exit__?</p>
                <label><input type="radio" name="a2q3" value="a"> Start a loop</label>
                <label><input type="radio" name="a2q3" value="b"> Create a class</label>
                <label><input type="radio" name="a2q3" value="c"> Import a module</label>
                <label><input type="radio" name="a2q3" value="d"> Handle cleanup when leaving the block</label>
                <p class="cq-feedback"></p>
            </div>

<button id="checkChapterQuiz" type="button">Check My Answer</button>
<p id="chapterQuizResult" aria-live="polite"></p>

        </div>
    `
};

const chapterA3 = {
    id: "a3",
    title: "Multithreading and Multiprocessing",
    quick: `
        <h2>Running Multiple Tasks</h2>
        <p>Python can execute multiple tasks using threads or processes.</p>

        <h3>Multithreading</h3>
        <p>Multithreading runs multiple threads within one process. It is especially useful for tasks that spend time waiting, such as network requests or file operations.</p>

        <pre><code>import threading

def task():
    print("Task running")

t1 = threading.Thread(target=task)
t1.start()
t1.join()

print("Finished")</code></pre>

        <h3>Multiprocessing</h3>
        <p>Multiprocessing uses separate processes. It can help with CPU-intensive work.</p>

        <pre><code>from multiprocessing import Process

def task():
    print("Process running")

if __name__ == "__main__":
    p = Process(target=task)
    p.start()
    p.join()</code></pre>
    `,
    deep: `
        <h2>Understanding Concurrency</h2>

        <h3>Thread vs Process</h3>
        <table>
            <tr><th>Multithreading</th><th>Multiprocessing</th></tr>
            <tr><td>Threads share process memory</td><td>Processes have separate memory spaces</td></tr>
            <tr><td>Useful for I/O-bound work</td><td>Useful for CPU-bound work</td></tr>
            <tr><td>Lower creation overhead</td><td>Usually higher creation overhead</td></tr>
        </table>

        <h3>1. Race conditions</h3>
        <p>A race condition happens when multiple threads access shared data and the result depends on their timing.</p>

        <h3>2. Locks</h3>
        <pre><code>import threading

counter = 0
lock = threading.Lock()

def increase():
    global counter
    for _ in range(1000):
        with lock:
            counter += 1

threads = [threading.Thread(target=increase) for _ in range(5)]

for thread in threads:
    thread.start()

for thread in threads:
    thread.join()

print(counter)</code></pre>

        <p>The lock ensures that only one thread at a time enters the protected section.</p>

        <h3>Quick Quiz</h3>
        <div class="cq-quiz">
            <div class="cq-question" data-answer="c">
                <p>1. Which approach is generally suitable for CPU-bound work?</p>
                <label><input type="radio" name="a3q1" value="a"> A single timer</label>
                <label><input type="radio" name="a3q1" value="b"> Basic file handling</label>
                <label><input type="radio" name="a3q1" value="c"> Multiprocessing</label>
                <label><input type="radio" name="a3q1" value="d"> String formatting</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p>2. What can a race condition cause?</p>
                <label><input type="radio" name="a3q2" value="a"> Unpredictable results when shared data is accessed</label>
                <label><input type="radio" name="a3q2" value="b"> Automatic code formatting</label>
                <label><input type="radio" name="a3q2" value="c"> Faster imports</label>
                <label><input type="radio" name="a3q2" value="d"> Automatic database backups</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="d">
                <p>3. What is the purpose of a thread lock?</p>
                <label><input type="radio" name="a3q3" value="a"> Create a new Python file</label>
                <label><input type="radio" name="a3q3" value="b"> Increase memory automatically</label>
                <label><input type="radio" name="a3q3" value="c"> Stop all program execution permanently</label>
                <label><input type="radio" name="a3q3" value="d"> Protect shared data from simultaneous access</label>
                <p class="cq-feedback"></p>
            </div>

<button id="checkChapterQuiz" type="button">Check My Answer</button>
<p id="chapterQuizResult" aria-live="polite"></p>

        </div>
    `
};

const chapterA4 = {
    id: "a4",
    title: "Asynchronous Programming",
    quick: `
        <h2>What is Asynchronous Programming?</h2>
        <p>Asynchronous programming allows a program to pause while waiting for an operation and work on other tasks in the meantime.</p>

        <h3>Important keywords</h3>
        <ul>
            <li><code>async</code> defines a coroutine function.</li>
            <li><code>await</code> waits for an awaitable operation.</li>
            <li><code>asyncio</code> provides tools for asynchronous programming.</li>
        </ul>

        <pre><code>import asyncio

async def greet():
    print("Hello")
    await asyncio.sleep(1)
    print("Welcome")

asyncio.run(greet())</code></pre>

        <p><code>asyncio.sleep()</code> pauses the coroutine without blocking the event loop like ordinary time.sleep() would.</p>
    `,
    deep: `
        <h2>Running Tasks Concurrently</h2>

        <h3>1. Sequential execution</h3>
        <pre><code>import asyncio

async def task(name, delay):
    await asyncio.sleep(delay)
    print(name)

async def main():
    await task("Task A", 2)
    await task("Task B", 2)

asyncio.run(main())</code></pre>

        <h3>2. Concurrent execution with gather</h3>
        <pre><code>import asyncio

async def task(name, delay):
    await asyncio.sleep(delay)
    print(name)

async def main():
    await asyncio.gather(
        task("Task A", 2),
        task("Task B", 2)
    )

asyncio.run(main())</code></pre>

        <h3>3. Important difference</h3>
        <p>Asynchronous programming is useful for I/O-bound tasks. It does not automatically make CPU-heavy calculations faster.</p>

        <h3>Quick Quiz</h3>
        <div class="cq-quiz">
            <div class="cq-question" data-answer="b">
                <p>1. Which keyword defines a coroutine function?</p>
                <label><input type="radio" name="a4q1" value="a"> await</label>
                <label><input type="radio" name="a4q1" value="b"> async</label>
                <label><input type="radio" name="a4q1" value="c"> yield</label>
                <label><input type="radio" name="a4q1" value="d"> lambda</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p>2. What does await do?</p>
                <label><input type="radio" name="a4q2" value="a"> Creates a new process</label>
                <label><input type="radio" name="a4q2" value="b"> Deletes a coroutine</label>
                <label><input type="radio" name="a4q2" value="c"> Suspends a coroutine until an awaitable completes</label>
                <label><input type="radio" name="a4q2" value="d"> Converts a list into a dictionary</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p>3. Which module provides Python's standard asyncio tools?</p>
                <label><input type="radio" name="a4q3" value="a"> asyncio</label>
                <label><input type="radio" name="a4q3" value="b"> random</label>
                <label><input type="radio" name="a4q3" value="c"> pathlib</label>
                <label><input type="radio" name="a4q3" value="d"> turtle</label>
                <p class="cq-feedback"></p>
            </div>

<button id="checkChapterQuiz" type="button">Check My Answer</button>
<p id="chapterQuizResult" aria-live="polite"></p>

        </div>
    `
};

const chapterA5 = {
    id: "a5",
    title: "Database Programming with SQLite",
    quick: `
        <h2>Working with Databases</h2>
        <p>A database stores information in an organized way. SQLite is a lightweight database included with Python.</p>

        <h3>Creating a database</h3>
        <pre><code>import sqlite3

connection = sqlite3.connect("students.db")
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY,
    name TEXT,
    marks INTEGER
)
""")

connection.commit()
connection.close()</code></pre>

        <h3>Important SQL commands</h3>
        <ul>
            <li><code>CREATE TABLE</code> creates a table.</li>
            <li><code>INSERT</code> adds records.</li>
            <li><code>SELECT</code> retrieves records.</li>
            <li><code>UPDATE</code> modifies records.</li>
            <li><code>DELETE</code> removes records.</li>
        </ul>
    `,
    deep: `
        <h2>Performing Database Operations</h2>

        <h3>1. Insert data safely</h3>
        <pre><code>import sqlite3

connection = sqlite3.connect("students.db")
cursor = connection.cursor()

cursor.execute(
    "INSERT INTO students (name, marks) VALUES (?, ?)",
    ("Aisha", 85)
)

connection.commit()
connection.close()</code></pre>

        <p>Use placeholders instead of joining user input into SQL strings. This helps prevent SQL injection.</p>

        <h3>2. Retrieve records</h3>
        <pre><code>connection = sqlite3.connect("students.db")
cursor = connection.cursor()

cursor.execute("SELECT * FROM students")
records = cursor.fetchall()

for record in records:
    print(record)

connection.close()</code></pre>

        <h3>3. Update records</h3>
        <pre><code>cursor.execute(
    "UPDATE students SET marks = ? WHERE name = ?",
    (90, "Aisha")
)</code></pre>

        <h3>4. Transactions</h3>
        <p>A transaction groups database operations. Commit saves changes, while rollback undoes uncommitted changes.</p>

        <h3>Quick Quiz</h3>
        <div class="cq-quiz">
            <div class="cq-question" data-answer="d">
                <p>1. Which Python module provides SQLite support?</p>
                <label><input type="radio" name="a5q1" value="a"> csv</label>
                <label><input type="radio" name="a5q1" value="b"> json</label>
                <label><input type="radio" name="a5q1" value="c"> os</label>
                <label><input type="radio" name="a5q1" value="d"> sqlite3</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p>2. Which SQL command retrieves records?</p>
                <label><input type="radio" name="a5q2" value="a"> INSERT</label>
                <label><input type="radio" name="a5q2" value="b"> SELECT</label>
                <label><input type="radio" name="a5q2" value="c"> UPDATE</label>
                <label><input type="radio" name="a5q2" value="d"> DROP</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p>3. Why should SQL placeholders be used for user input?</p>
                <label><input type="radio" name="a5q3" value="a"> To help prevent SQL injection</label>
                <label><input type="radio" name="a5q3" value="b"> To automatically create tables</label>
                <label><input type="radio" name="a5q3" value="c"> To encrypt the database file</label>
                <label><input type="radio" name="a5q3" value="d"> To remove duplicate Python modules</label>
                <p class="cq-feedback"></p>
            </div>

<button id="checkChapterQuiz" type="button">Check My Answer</button>
<p id="chapterQuizResult" aria-live="polite"></p>

        </div>
    `
};

const chapterA6 = {
    id: "a6",
    title: "Performance Optimization and Profiling",
    quick: `
        <h2>Writing Efficient Python Programs</h2>
        <p>Performance optimization means improving a program's speed or memory usage while keeping its output correct.</p>

        <h3>1. Use efficient data structures</h3>
        <pre><code># List membership
numbers = [10, 20, 30, 40]

# Set membership
number_set = {10, 20, 30, 40}

print(30 in number_set)</code></pre>

        <p>Set membership is generally faster than searching through a large list.</p>

        <h3>2. Avoid unnecessary repeated work</h3>
        <pre><code># Less efficient
for i in range(100):
    result = len("Python")

# Better
length = len("Python")
for i in range(100):
    result = length</code></pre>
    `,
    deep: `
        <h2>Profiling and Optimization Techniques</h2>

        <h3>1. Measure execution time</h3>
        <pre><code>import time

start = time.perf_counter()

total = sum(range(1000000))

end = time.perf_counter()

print("Time:", end - start)</code></pre>

        <h3>2. Profile a program</h3>
        <pre><code>import cProfile

def calculate():
    return sum(range(1000000))

cProfile.run("calculate()")</code></pre>

        <h3>3. Understand Big O notation</h3>
        <table>
            <tr><th>Complexity</th><th>Meaning</th></tr>
            <tr><td>O(1)</td><td>Constant time</td></tr>
            <tr><td>O(log n)</td><td>Logarithmic time</td></tr>
            <tr><td>O(n)</td><td>Linear time</td></tr>
            <tr><td>O(n log n)</td><td>Linearithmic time</td></tr>
            <tr><td>O(n²)</td><td>Quadratic time</td></tr>
        </table>

        <h3>4. Important rule</h3>
        <p>Measure first, identify the bottleneck, optimize the relevant part, and measure again. Avoid optimizing code based only on guesses.</p>

        <h3>Quick Quiz</h3>
        <div class="cq-quiz">
            <div class="cq-question" data-answer="c">
                <p>1. What is profiling used for?</p>
                <label><input type="radio" name="a6q1" value="a"> Translating Python code</label>
                <label><input type="radio" name="a6q1" value="b"> Creating database tables</label>
                <label><input type="radio" name="a6q1" value="c"> Identifying performance bottlenecks</label>
                <label><input type="radio" name="a6q1" value="d"> Encrypting variables</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p>2. Which complexity represents constant time?</p>
                <label><input type="radio" name="a6q2" value="a"> O(1)</label>
                <label><input type="radio" name="a6q2" value="b"> O(n)</label>
                <label><input type="radio" name="a6q2" value="c"> O(n²)</label>
                <label><input type="radio" name="a6q2" value="d"> O(log n)</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="d">
                <p>3. Which function measures elapsed time using a high-resolution performance counter?</p>
                <label><input type="radio" name="a6q3" value="a"> time.sleep()</label>
                <label><input type="radio" name="a6q3" value="b"> time.localtime()</label>
                <label><input type="radio" name="a6q3" value="c"> time.asctime()</label>
                <label><input type="radio" name="a6q3" value="d"> time.perf_counter()</label>
                <p class="cq-feedback"></p>
            </div>

<button id="checkChapterQuiz" type="button">Check My Answer</button>
<p id="chapterQuizResult" aria-live="polite"></p>

        </div>
    `
};


const chapterA7 = {
    id: "a7",
    title: "Type Hints and Generic Programming",
    quick: `
        <h2>What are Type Hints?</h2>
        <p>Type hints describe the expected data types of variables, function parameters and return values. They make code easier to understand and help tools detect mistakes.</p>

        <h3>1. Basic type hints</h3>
        <pre><code>name: str = "Aisha"
age: int = 20
price: float = 99.5
is_active: bool = True</code></pre>

        <h3>2. Function type hints</h3>
        <pre><code>def add(a: int, b: int) -> int:
    return a + b

print(add(10, 20))</code></pre>
        <p>The arrow <code>-> int</code> indicates the expected return type.</p>

        <h3>3. Collection type hints</h3>
        <pre><code>names: list[str] = ["Aisha", "Sara"]
marks: dict[str, int] = {"Aisha": 90}
scores: tuple[int, ...] = (80, 85, 90)</code></pre>

        <h3>4. Optional values</h3>
        <pre><code>def find_name(name: str) -> str | None:
    if name:
        return name
    return None</code></pre>

        <h3>Quick Quiz</h3>
        <div class="cq-quiz">
            <div class="cq-question" data-answer="b">
                <p>1. What is the purpose of type hints?</p>
                <label><input type="radio" name="a7q1" value="a"> To automatically encrypt variables</label>
                <label><input type="radio" name="a7q1" value="b"> To describe expected data types</label>
                <label><input type="radio" name="a7q1" value="c"> To execute code faster automatically</label>
                <label><input type="radio" name="a7q1" value="d"> To create database tables</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p>2. What does the arrow in def add(a: int) -> int indicate?</p>
                <label><input type="radio" name="a7q2" value="a"> The parameter is optional</label>
                <label><input type="radio" name="a7q2" value="b"> The function is asynchronous</label>
                <label><input type="radio" name="a7q2" value="c"> The expected return type</label>
                <label><input type="radio" name="a7q2" value="d"> The function is recursive</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p>3. Which annotation represents a list of integers?</p>
                <label><input type="radio" name="a7q3" value="a"> list[int]</label>
                <label><input type="radio" name="a7q3" value="b"> dict[int]</label>
                <label><input type="radio" name="a7q3" value="c"> tuple[str]</label>
                <label><input type="radio" name="a7q3" value="d"> int[list]</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </div>
    `,
    deep: `
        <h2>Advanced Type Hints</h2>

        <h3>1. Union types</h3>
        <p>A union type means a value can have more than one permitted type.</p>
        <pre><code>def process(value: int | str) -> str:
    return str(value)

print(process(100))
print(process("Python"))</code></pre>

        <h3>2. Any type</h3>
        <p><code>Any</code> allows a value of any type. It is useful when the type is genuinely unknown, but using it everywhere reduces the benefit of type checking.</p>
        <pre><code>from typing import Any

def display(value: Any) -> None:
    print(value)</code></pre>

        <h3>3. TypeVar and generics</h3>
        <p>A generic function can work with different types while preserving useful type information.</p>
        <pre><code>from typing import TypeVar

T = TypeVar("T")

def first_item(items: list[T]) -> T:
    return items[0]

print(first_item([10, 20, 30]))
print(first_item(["A", "B"]))</code></pre>

        <h3>4. Protocols</h3>
        <p>A Protocol describes the methods or attributes an object should provide. It supports structural typing.</p>
        <pre><code>from typing import Protocol

class Printable(Protocol):
    def display(self) -> str:
        ...

def show(item: Printable) -> None:
    print(item.display())</code></pre>

        <h3>5. Important limitation</h3>
        <p>Python does not normally enforce type hints at runtime. Static type checkers such as mypy can inspect code and report type inconsistencies.</p>
    `
};

const chapterA8 = {
    id: "a8",
    title: "Dataclasses and Advanced OOP",
    quick: `
        <h2>What are Dataclasses?</h2>
        <p>A dataclass is a convenient way to create classes mainly used to store data. Python can automatically generate methods such as __init__ and __repr__.</p>

        <h3>1. Creating a dataclass</h3>
        <pre><code>from dataclasses import dataclass

@dataclass
class Student:
    name: str
    marks: int

student = Student("Aisha", 90)
print(student)</code></pre>

        <h3>2. Default values</h3>
        <pre><code>@dataclass
class Product:
    name: str
    price: float = 0.0

item = Product("Notebook")
print(item.price)</code></pre>

        <h3>3. Comparing objects</h3>
        <p>By default, dataclasses generate equality comparisons based on their fields.</p>
        <pre><code>first = Student("Aisha", 90)
second = Student("Aisha", 90)

print(first == second)</code></pre>

        <h3>Quick Quiz</h3>
        <div class="cq-quiz">
            <div class="cq-question" data-answer="c">
                <p>1. Which decorator creates a dataclass?</p>
                <label><input type="radio" name="a8q1" value="a"> @property</label>
                <label><input type="radio" name="a8q1" value="b"> @staticmethod</label>
                <label><input type="radio" name="a8q1" value="c"> @dataclass</label>
                <label><input type="radio" name="a8q1" value="d"> @classmethod</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p>2. Which module provides dataclass support?</p>
                <label><input type="radio" name="a8q2" value="a"> dataclasses</label>
                <label><input type="radio" name="a8q2" value="b"> collections</label>
                <label><input type="radio" name="a8q2" value="c"> itertools</label>
                <label><input type="radio" name="a8q2" value="d"> functools</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="d">
                <p>3. What does a normal dataclass generate automatically?</p>
                <label><input type="radio" name="a8q3" value="a"> A database connection</label>
                <label><input type="radio" name="a8q3" value="b"> A web server</label>
                <label><input type="radio" name="a8q3" value="c"> A network socket</label>
                <label><input type="radio" name="a8q3" value="d"> An initializer method</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </div>
    `,
    deep: `
        <h2>Advanced Dataclass Features</h2>

        <h3>1. field()</h3>
        <p>Use field() to configure individual dataclass fields.</p>
        <pre><code>from dataclasses import dataclass, field

@dataclass
class Team:
    name: str
    members: list[str] = field(default_factory=list)

team = Team("Python Team")
team.members.append("Aisha")</code></pre>

        <p>Use default_factory for mutable defaults such as lists and dictionaries. This gives each object its own collection.</p>

        <h3>2. Frozen dataclasses</h3>
        <p>A frozen dataclass prevents normal reassignment of its fields after creation.</p>
        <pre><code>@dataclass(frozen=True)
class Point:
    x: int
    y: int

point = Point(10, 20)
# point.x = 50  # Raises an error</code></pre>

        <h3>3. Post-initialization</h3>
        <p>Use __post_init__ to perform additional validation or calculations after the generated initializer runs.</p>
        <pre><code>@dataclass
class Rectangle:
    width: float
    height: float

    def __post_init__(self):
        if self.width <= 0 or self.height <= 0:
            raise ValueError("Dimensions must be positive")

    def area(self) -> float:
        return self.width * self.height</code></pre>

        <h3>4. Inheritance</h3>
        <p>Dataclasses can inherit from other dataclasses. Field ordering and default values must be considered when defining subclasses.</p>

        <h3>5. When to use dataclasses</h3>
        <ul>
            <li>Representing student or employee records.</li>
            <li>Storing configuration settings.</li>
            <li>Representing coordinates and measurements.</li>
            <li>Reducing repetitive class code.</li>
        </ul>
    `
};

const chapterA9 = {
    id: "a9",
    title: "Functional Programming",
    quick: `
        <h2>What is Functional Programming?</h2>
        <p>Functional programming is a style of programming that emphasizes functions, predictable results and avoiding unnecessary changes to shared data.</p>

        <h3>1. Pure functions</h3>
        <p>A pure function returns the same output for the same input and does not modify external state.</p>
        <pre><code>def square(number):
    return number * number

print(square(5))</code></pre>

        <h3>2. Lambda functions</h3>
        <p>A lambda is a small anonymous function.</p>
        <pre><code>square = lambda x: x * x
print(square(6))</code></pre>

        <h3>3. map()</h3>
        <p>map() applies a function to every item in an iterable.</p>
        <pre><code>numbers = [1, 2, 3, 4]
squares = list(map(lambda x: x * x, numbers))
print(squares)</code></pre>

        <h3>4. filter()</h3>
        <p>filter() keeps items for which a condition is true.</p>
        <pre><code>numbers = [1, 2, 3, 4, 5, 6]
even = list(filter(lambda x: x % 2 == 0, numbers))
print(even)</code></pre>

        <h3>Quick Quiz</h3>
        <div class="cq-quiz">
            <div class="cq-question" data-answer="b">
                <p>1. What is a pure function?</p>
                <label><input type="radio" name="a9q1" value="a"> A function that always prints output</label>
                <label><input type="radio" name="a9q1" value="b"> A function with predictable output and no external side effects</label>
                <label><input type="radio" name="a9q1" value="c"> A function that modifies global variables</label>
                <label><input type="radio" name="a9q1" value="d"> A function without parameters</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p>2. What does map() do?</p>
                <label><input type="radio" name="a9q2" value="a"> Applies a function to each item</label>
                <label><input type="radio" name="a9q2" value="b"> Removes every item</label>
                <label><input type="radio" name="a9q2" value="c"> Sorts a dictionary automatically</label>
                <label><input type="radio" name="a9q2" value="d"> Creates a class</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p>3. What does filter() return?</p>
                <label><input type="radio" name="a9q3" value="a"> Every item twice</label>
                <label><input type="radio" name="a9q3" value="b"> A sorted dictionary</label>
                <label><input type="radio" name="a9q3" value="c"> Items that satisfy a condition</label>
                <label><input type="radio" name="a9q3" value="d"> Only the first item</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </div>
    `,
    deep: `
        <h2>Advanced Functional Techniques</h2>

        <h3>1. reduce()</h3>
        <p>reduce() combines items into a single result.</p>
        <pre><code>from functools import reduce

numbers = [1, 2, 3, 4]

total = reduce(lambda a, b: a + b, numbers)
print(total)</code></pre>

        <h3>2. Closures</h3>
        <p>A closure is an inner function that remembers variables from its enclosing function, even after the outer function has returned.</p>
        <pre><code>def multiplier(factor):
    def multiply(number):
        return number * factor
    return multiply

double = multiplier(2)
print(double(10))</code></pre>

        <h3>3. Higher-order functions</h3>
        <p>A higher-order function accepts another function as an argument or returns a function.</p>
        <pre><code>def apply_operation(func, value):
    return func(value)

print(apply_operation(lambda x: x + 10, 5))</code></pre>

        <h3>4. itertools</h3>
        <p>The itertools module provides efficient tools for working with iterators.</p>
        <pre><code>from itertools import chain

first = [1, 2]
second = [3, 4]

combined = list(chain(first, second))
print(combined)</code></pre>

        <h3>5. When to use functional techniques</h3>
        <ul>
            <li>Transforming collections of data.</li>
            <li>Filtering records.</li>
            <li>Building reusable operations.</li>
            <li>Reducing unwanted side effects.</li>
        </ul>
    `
};

const chapterA10 = {
    id: "a10",
    title: "Advanced Data Structures and Algorithms",
    quick: `
        <h2>Advanced Data Structures</h2>
        <p>Python provides specialized data structures that can make certain operations more efficient.</p>

        <h3>1. deque</h3>
        <p>A deque supports efficient insertion and removal at both ends.</p>
        <pre><code>from collections import deque

queue = deque([10, 20, 30])
queue.append(40)
queue.appendleft(5)

print(queue)
queue.popleft()
print(queue)</code></pre>

        <h3>2. Counter</h3>
        <p>Counter counts how many times each item appears.</p>
        <pre><code>from collections import Counter

items = ["a", "b", "a", "c", "a", "b"]
counts = Counter(items)

print(counts)
print(counts.most_common(2))</code></pre>

        <h3>3. heapq</h3>
        <p>heapq provides a min-heap, where the smallest item is at the root.</p>
        <pre><code>import heapq

numbers = [40, 10, 30, 20]
heapq.heapify(numbers)

print(heapq.heappop(numbers))</code></pre>

        <h3>Quick Quiz</h3>
        <div class="cq-quiz">
            <div class="cq-question" data-answer="c">
                <p>1. Which structure supports efficient operations at both ends?</p>
                <label><input type="radio" name="a10q1" value="a"> set</label>
                <label><input type="radio" name="a10q1" value="b"> tuple</label>
                <label><input type="radio" name="a10q1" value="c"> deque</label>
                <label><input type="radio" name="a10q1" value="d"> frozenset</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p>2. What does Counter do?</p>
                <label><input type="radio" name="a10q2" value="a"> Counts occurrences of items</label>
                <label><input type="radio" name="a10q2" value="b"> Encrypts a collection</label>
                <label><input type="radio" name="a10q2" value="c"> Sorts files by size</label>
                <label><input type="radio" name="a10q2" value="d"> Creates a database</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="d">
                <p>3. Which item is at the root of a Python min-heap?</p>
                <label><input type="radio" name="a10q3" value="a"> The largest item</label>
                <label><input type="radio" name="a10q3" value="b"> The newest item</label>
                <label><input type="radio" name="a10q3" value="c"> A random item</label>
                <label><input type="radio" name="a10q3" value="d"> The smallest item</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </div>
    `,
    deep: `
        <h2>More Data Structure Tools</h2>

        <h3>1. bisect</h3>
        <p>bisect helps maintain sorted lists and find insertion positions using binary search.</p>
        <pre><code>import bisect

numbers = [10, 20, 30, 40]
position = bisect.bisect_left(numbers, 25)

print(position)

bisect.insort(numbers, 25)
print(numbers)</code></pre>

        <h3>2. defaultdict</h3>
        <p>defaultdict supplies a default value when a missing key is accessed.</p>
        <pre><code>from collections import defaultdict

groups = defaultdict(list)

groups["A"].append("Aisha")
groups["B"].append("Sara")

print(dict(groups))</code></pre>

        <h3>3. Complexity comparison</h3>
        <table>
            <tr><th>Operation</th><th>Typical complexity</th></tr>
            <tr><td>List indexing</td><td>O(1)</td></tr>
            <tr><td>List search</td><td>O(n)</td></tr>
            <tr><td>Set membership</td><td>O(1) average</td></tr>
            <tr><td>Heap insertion</td><td>O(log n)</td></tr>
            <tr><td>Heap removal</td><td>O(log n)</td></tr>
            <tr><td>Binary search</td><td>O(log n)</td></tr>
        </table>

        <h3>4. Choosing the right structure</h3>
        <ul>
            <li>Use deque for queue-like operations.</li>
            <li>Use Counter for frequency analysis.</li>
            <li>Use heapq when repeatedly retrieving the smallest item.</li>
            <li>Use bisect to find positions in sorted lists.</li>
            <li>Use defaultdict to group values by key.</li>
        </ul>
    `
};

const chapterA11 = {
    id: "a11",
    title: "Memory Management and Garbage Collection",
    quick: `
        <h2>How Python Manages Memory</h2>
        <p>Memory management is the process of allocating and releasing memory used by objects in a program.</p>

        <h3>1. Object references</h3>
        <p>Variables in Python refer to objects. Multiple variables can refer to the same object.</p>
        <pre><code>first = [10, 20, 30]
second = first

second.append(40)

print(first)</code></pre>

        <h3>2. Reference counting</h3>
        <p>Python commonly uses reference counting. When an object's reference count reaches zero, its memory can be reclaimed.</p>

        <h3>3. Garbage collection</h3>
        <p>The garbage collector can detect reference cycles that reference counting alone cannot reclaim.</p>
        <pre><code>import gc

print(gc.isenabled())
print(gc.get_count())</code></pre>

        <h3>Quick Quiz</h3>
        <div class="cq-quiz">
            <div class="cq-question" data-answer="b">
                <p>1. What does a Python variable generally hold?</p>
                <label><input type="radio" name="a11q1" value="a"> A physical memory address written by the programmer</label>
                <label><input type="radio" name="a11q1" value="b"> A reference to an object</label>
                <label><input type="radio" name="a11q1" value="c"> Only a string</label>
                <label><input type="radio" name="a11q1" value="d"> A database connection</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="a">
                <p>2. What is a reference cycle?</p>
                <label><input type="radio" name="a11q2" value="a"> Objects refer to one another in a cycle</label>
                <label><input type="radio" name="a11q2" value="b"> A loop that always runs once</label>
                <label><input type="radio" name="a11q2" value="c"> A repeated import statement</label>
                <label><input type="radio" name="a11q2" value="d"> A sorted list of objects</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p>3. Which module provides Python's garbage collection interface?</p>
                <label><input type="radio" name="a11q3" value="a"> time</label>
                <label><input type="radio" name="a11q3" value="b"> pathlib</label>
                <label><input type="radio" name="a11q3" value="c"> gc</label>
                <label><input type="radio" name="a11q3" value="d"> csv</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </div>
    `,
    deep: `
        <h2>Understanding Memory Behaviour</h2>

        <h3>1. Mutable objects and references</h3>
        <pre><code>original = [1, 2, 3]
copy = original

copy.append(4)

print(original)
print(copy)</code></pre>
        <p>Both variables refer to the same list. Changing the list through one reference is visible through the other.</p>

        <h3>2. Shallow and deep copies</h3>
        <pre><code>import copy

original = [[1, 2], [3, 4]]

shallow = copy.copy(original)
deep = copy.deepcopy(original)

original[0].append(99)

print(shallow)
print(deep)</code></pre>
        <p>A shallow copy creates a new outer container but keeps references to nested objects. A deep copy recursively copies nested objects.</p>

        <h3>3. Detecting reference cycles</h3>
        <pre><code>import gc

class Node:
    pass

first = Node()
second = Node()

first.other = second
second.other = first

del first
del second

collected = gc.collect()
print(collected)</code></pre>

        <h3>4. Weak references</h3>
        <p>A weak reference refers to an object without keeping it alive solely because of that reference.</p>
        <pre><code>import weakref

class Student:
    pass

student = Student()
reference = weakref.ref(student)

print(reference() is student)</code></pre>

        <h3>5. Memory optimization practices</h3>
        <ul>
            <li>Avoid keeping unnecessary large objects alive.</li>
            <li>Use generators when processing large sequences lazily.</li>
            <li>Use suitable data structures.</li>
            <li>Profile memory before attempting optimization.</li>
            <li>Do not rely on garbage collection to close files; use with statements.</li>
        </ul>
    `
};

const chapterA12 = {
    id: "a12",
    title: "Python Design Patterns",
    quick: `
        <h2>What are Design Patterns?</h2>
        <p>Design patterns are reusable approaches to common software design problems. They help organize code and make it easier to maintain.</p>

        <h3>1. Factory Pattern</h3>
        <p>A factory creates objects without requiring the calling code to know every construction detail.</p>
        <pre><code>class Dog:
    def speak(self):
        return "Woof"

class Cat:
    def speak(self):
        return "Meow"

def animal_factory(kind):
    if kind == "dog":
        return Dog()
    if kind == "cat":
        return Cat()
    raise ValueError("Unknown animal")

animal = animal_factory("dog")
print(animal.speak())</code></pre>

        <h3>2. Strategy Pattern</h3>
        <p>The strategy pattern allows different algorithms to be selected through a common interface.</p>
        <pre><code>def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

def calculate(operation, a, b):
    return operation(a, b)

print(calculate(add, 5, 3))</code></pre>

        <h3>3. Observer Pattern</h3>
        <p>The observer pattern notifies registered objects when an event or state change occurs.</p>

        <h3>Quick Quiz</h3>
        <div class="cq-quiz">
            <div class="cq-question" data-answer="a">
                <p>1. What is the purpose of a design pattern?</p>
                <label><input type="radio" name="a12q1" value="a"> To provide a reusable approach to a common design problem</label>
                <label><input type="radio" name="a12q1" value="b"> To replace all functions</label>
                <label><input type="radio" name="a12q1" value="c"> To remove object-oriented programming</label>
                <label><input type="radio" name="a12q1" value="d"> To automatically fix syntax errors</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="c">
                <p>2. Which pattern is used to create objects through a dedicated creation function?</p>
                <label><input type="radio" name="a12q2" value="a"> Observer</label>
                <label><input type="radio" name="a12q2" value="b"> Strategy</label>
                <label><input type="radio" name="a12q2" value="c"> Factory</label>
                <label><input type="radio" name="a12q2" value="d"> Iterator</label>
                <p class="cq-feedback"></p>
            </div>
            <div class="cq-question" data-answer="b">
                <p>3. What does the Observer pattern commonly provide?</p>
                <label><input type="radio" name="a12q3" value="a"> Automatic sorting</label>
                <label><input type="radio" name="a12q3" value="b"> Notifications when an observed subject changes</label>
                <label><input type="radio" name="a12q3" value="c"> Memory allocation</label>
                <label><input type="radio" name="a12q3" value="d"> Database encryption</label>
                <p class="cq-feedback"></p>
            </div>
            <button type="button" id="checkChapterQuiz">Check my answers</button>
            <p id="chapterQuizResult" aria-live="polite"></p>
        </div>
    `,
    deep: `
        <h2>More Design Patterns</h2>

        <h3>1. Strategy Pattern in detail</h3>
        <p>Different strategies can be passed to the same function. This avoids writing a large conditional statement for every algorithm.</p>
        <pre><code>def discount_ten(price):
    return price * 0.90

def discount_twenty(price):
    return price * 0.80

def final_price(price, strategy):
    return strategy(price)

print(final_price(100, discount_ten))
print(final_price(100, discount_twenty))</code></pre>

        <h3>2. Observer Pattern in detail</h3>
        <pre><code>class NewsChannel:
    def __init__(self):
        self.subscribers = []

    def subscribe(self, callback):
        self.subscribers.append(callback)

    def publish(self, message):
        for callback in self.subscribers:
            callback(message)

def reader(message):
    print("News:", message)

channel = NewsChannel()
channel.subscribe(reader)
channel.publish("Python 4 is released!")</code></pre>

        <h3>3. Singleton Pattern</h3>
        <p>The Singleton pattern aims to provide one shared instance of a class. It should be used carefully because global shared state can make testing and maintenance harder.</p>
        <pre><code>class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

first = Singleton()
second = Singleton()

print(first is second)</code></pre>

        <h3>4. Choosing a pattern</h3>
        <table>
            <tr><th>Pattern</th><th>Typical purpose</th></tr>
            <tr><td>Factory</td><td>Object creation</td></tr>
            <tr><td>Strategy</td><td>Interchangeable algorithms</td></tr>
            <tr><td>Observer</td><td>Event notifications</td></tr>
            <tr><td>Singleton</td><td>One shared instance</td></tr>
        </table>

        <h3>5. Important principle</h3>
        <p>Design patterns are tools, not rules. Choose a pattern only when it makes the design clearer and easier to maintain.</p>
    `
};




    // =========================================================
    // APP STATE AND PROGRESS
    // =========================================================

    const STATE_KEY = "codequest.python.state.v1";
    const XP_PER_LESSON = 50;
    const XP_PER_CORRECT_ANSWER = 10;
    const PYODIDE_VERSION = "0.26.4";
    const PYODIDE_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

    const RANKS = [
        { min: 0, name: "Newbie" },
        { min: 100, name: "Apprentice" },
        { min: 300, name: "Coder" },
        { min: 600, name: "Pythonista" },
        { min: 1000, name: "Code Master" }
    ];

    const THEME_KEY = "codequest.theme";
    const XP_PER_CHALLENGE = 30;

    // Coding challenges, keyed by "level:chapterId".
    // Output is compared line by line, ignoring trailing spaces.
    const challenges = {
        "beginner:b1": {
            title: "Introduce yourself to Python",
            prompt: "Write a program that prints exactly the three lines below. Use a separate print() statement for each line, and add at least one comment (#) that explains what your program does.",
            expected: "Hello, CodeQuest!\nI am learning Python.\nPython is case-sensitive.",
            starter: "# My first CodeQuest challenge\n\n",
            hint: "Each line needs its own print(\"...\") call. The text must be inside quotation marks, and capital letters and punctuation must match exactly.",
            requires: [
                { pattern: /\bprint\s*\(/g, count: 3, message: "Use a separate print() statement for each line (3 in total)." },
                { pattern: /^\s*#/gm, count: 1, message: "Add at least one comment that starts with #." }
            ]
        } ,
        "beginner:b2": {
            title: "Create a student profile",

            prompt: "Create four variables: student_name, age, percentage, and is_student. Store a string, integer, float, and Boolean value respectively. Print each variable on a separate line. Then print the data type of each variable using type().",

            expected: "Aisha\n19\n86.5\nTrue\n<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>",

            starter: "# Create your student profile below\n\n",

            hint: "Use quotation marks for the name, a whole number for age, a decimal number for percentage, and True for is_student. Use type() to display each data type.",

            requires: [
                {
                    pattern: /student_name\s*=/,
                    count: 1,
                    message: "Create the student_name variable."
                },
                {
                    pattern: /age\s*=/,
                    count: 1,
                    message: "Create the age variable."
                },
                {
                    pattern: /percentage\s*=/,
                    count: 1,
                    message: "Create the percentage variable."
                },
                {
                    pattern: /is_student\s*=/,
                    count: 1,
                    message: "Create the is_student variable."
                },
                {
                    pattern: /\btype\s*\(/g,
                    count: 4,
                    message: "Use type() four times to check all four variables."
                }
            ]
        },

        "beginner:b3": {
            title: "Personal Information Collector",
            prompt: "Ask the user for their name and age. Convert age into an integer. Display the name and age on separate lines using labels Name: and Age:.",
            expected: "Name: Aisha\nAge: 19",
            starter: "# Collect information from the user\n\n",
            hint: "Use input() twice. Convert the age using int(). Use print() to display the results.",
            requires: [
                { pattern: /input\s*\(/g, count: 2, message: "Use input() to collect the name and age." },
                { pattern: /int\s*\(/, count: 1, message: "Convert the age into an integer." },
                { pattern: /print\s*\(/g, count: 2, message: "Display both pieces of information." }
            ]
        },

        "beginner:b4": {
            title: "Simple Calculator",
            prompt: "Create two variables a and b with values 20 and 6. Print their sum, difference, product, and remainder, each on a separate line.",
            expected: "26\n14\n120\n2",
            starter: "a = 20\nb = 6\n\n",
            hint: "Use +, -, *, and % operators with print().",
            requires: [
                { pattern: /^\s*a\s*=/m, count: 1, message: "Create variable a." },
                { pattern: /^\s*b\s*=/m, count: 1, message: "Create variable b." },
                { pattern: /print\s*\(/g, count: 4, message: "Print all four calculations." }
            ]
        },

        "beginner:b5": {
            title: "Pass or Fail Checker",
            prompt: "Ask the user to enter marks. Convert them into an integer. If marks are 35 or above, print Pass. Otherwise, print Fail.",
            expected: "Pass",
            starter: "# Enter marks and check the result\n\n",
            hint: "Use int(input()), if marks >= 35, and else. Test with 70.",
            requires: [
                { pattern: /input\s*\(/, count: 1, message: "Ask the user to enter marks." },
                { pattern: /int\s*\(/, count: 1, message: "Convert marks into an integer." },
                { pattern: /\bif\b/, count: 1, message: "Use an if statement." },
                { pattern: /\belse\b/, count: 1, message: "Use an else statement." }
            ]
        },

        "beginner:b6": {
            title: "Number Printing Challenge",
            prompt: "Use a for loop and range() to print numbers from 1 to 10, each on a separate line.",
            expected: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
            starter: "# Print numbers from 1 to 10\n\n",
            hint: "Use for i in range(1, 11): and print(i).",
            requires: [
                { pattern: /\bfor\b/, count: 1, message: "Use a for loop." },
                { pattern: /range\s*\(\s*1\s*,\s*11\s*\)/, count: 1, message: "Use range(1, 11)." },
                { pattern: /print\s*\(/, count: 1, message: "Print the loop variable." }
            ]
        },

    "beginner:b7": {
        title: "Word Analyzer",
        prompt: "Create a variable word with the value 'Python'. Print its length, its uppercase version, and its reversed version. Print each result on a separate line.",
        expected: "6\nPYTHON\nnohtyP",
        starter: "word = \"Python\"\n\n",
        hint: "Use len(), upper(), and slicing with [::-1].",
        requires: [
            { pattern: /^\s*word\s*=/m, count: 1, message: "Create the word variable." },
            { pattern: /\blen\s*\(/, count: 1, message: "Use len() to find the length." },
            { pattern: /\.upper\s*\(/, count: 1, message: "Use upper() to convert the word." },
            { pattern: /\[::-1\]/, count: 1, message: "Reverse the string using slicing." }
        ]
    },

    "beginner:b8": {
        title: "List Manager",
        prompt: "Create a list named numbers containing 10, 20, and 30. Append 40 to the list. Change the second element to 25. Print the final list.",
        expected: "[10, 25, 30, 40]",
        starter: "numbers = [10, 20, 30]\n\n",
        hint: "Use append(40) and assign 25 to index 1.",
        requires: [
            { pattern: /^\s*numbers\s*=/m, count: 1, message: "Create the numbers list." },
            { pattern: /\.append\s*\(\s*40\s*\)/, count: 1, message: "Append 40 to the list." },
            { pattern: /numbers\s*\[\s*1\s*\]\s*=/, count: 1, message: "Change the second element." }
        ]
    },

    "beginner:b9": {
        title: "Unique Numbers",
        prompt: "Create a set named numbers containing 1, 2, 2, 3, and 3. Add 4 to the set. Print the number of unique elements using len().",
        expected: "4",
        starter: "numbers = {1, 2, 2, 3, 3}\n\n",
        hint: "Use add(4) and then print(len(numbers)).",
        requires: [
            { pattern: /^\s*numbers\s*=\s*\{/, count: 1, message: "Create a set named numbers." },
            { pattern: /\.add\s*\(\s*4\s*\)/, count: 1, message: "Add 4 to the set." },
            { pattern: /len\s*\(\s*numbers\s*\)/, count: 1, message: "Find the number of unique elements." }
        ]
    },

    "beginner:b10": {
        title: "Student Dictionary",
        prompt: "Create a dictionary named student with name set to 'Aisha' and age set to 19. Add a course key with value 'BCA'. Print the name, age, and course values on separate lines.",
        expected: "Aisha\n19\nBCA",
        starter: "student = {\n    \"name\": \"Aisha\",\n    \"age\": 19\n}\n\n",
        hint: "Add student['course'] = 'BCA'. Then print each value using its key.",
        requires: [
            { pattern: /^\s*student\s*=\s*\{/m, count: 1, message: "Create the student dictionary." },
            { pattern: /student\s*\[\s*["']course["']\s*\]\s*=/, count: 1, message: "Add the course key." },
            { pattern: /student\s*\[\s*["']name["']\s*\]/, count: 1, message: "Access the name value." },
            { pattern: /student\s*\[\s*["']age["']\s*\]/, count: 1, message: "Access the age value." },
            { pattern: /student\s*\[\s*["']course["']\s*\]/, count: 1, message: "Access the course value." }
        ]
    },

    "beginner:b11": {
        title: "Function Calculator",
        prompt: "Create a function named add that accepts two parameters and returns their sum. Call it with 15 and 25, and print the result.",
        expected: "40",
        starter: "def add(a, b):\n    \n\n",
        hint: "Use return a + b inside the function.",
        requires: [
            { pattern: /^\s*def\s+add\s*\(/m, count: 1, message: "Define the add function." },
            { pattern: /\breturn\b/, count: 1, message: "Return the calculated result." },
            { pattern: /add\s*\(\s*15\s*,\s*25\s*\)/, count: 1, message: "Call add() with 15 and 25." },
            { pattern: /print\s*\(/, count: 1, message: "Print the result." }
        ]
    },

    "beginner:b12": {
        title: "Even or Odd Checker",
        prompt: "Create a variable number with the value 17. Use an if-else statement and the modulo operator to print 'Even' if the number is even, otherwise print 'Odd'.",
        expected: "Odd",
        starter: "number = 17\n\n",
        hint: "Check whether number % 2 == 0.",
        requires: [
            { pattern: /^\s*number\s*=\s*17/m, count: 1, message: "Create number with the value 17." },
            { pattern: /\bif\b/, count: 1, message: "Use an if statement." },
            { pattern: /%\s*2/, count: 1, message: "Use the modulo operator." },
            { pattern: /\belse\b/, count: 1, message: "Use an else statement." }
        ]
    },

    "intermediate:i1": {
        title: "Flexible Total Calculator",
        prompt: "Create a function named calculate_total that accepts any number of positional arguments using *args. Return their sum. Call it with 10, 20, and 30, then print the result.",
        expected: "60",
        starter: "def calculate_total(*args):\n    \n\n",
        hint: "Use sum(args) and return the result.",
        requires: [
            { pattern: /def\s+calculate_total\s*\(\s*\*args\s*\)/, count: 1, message: "Define calculate_total using *args." },
            { pattern: /\breturn\b/, count: 1, message: "Return the sum." },
            { pattern: /calculate_total\s*\(\s*10\s*,\s*20\s*,\s*30\s*\)/, count: 1, message: "Call the function with three numbers." },
            { pattern: /print\s*\(/, count: 1, message: "Print the result." }
        ]
    },

    "intermediate:i2": {
        title: "Square Generator",
        prompt: "Create a list named numbers containing 1, 2, 3, 4, and 5. Use a list comprehension to create a list named squares containing the square of each number. Print squares.",
        expected: "[1, 4, 9, 16, 25]",
        starter: "numbers = [1, 2, 3, 4, 5]\n\n",
        hint: "Use [x ** 2 for x in numbers].",
        requires: [
            { pattern: /^\s*numbers\s*=/m, count: 1, message: "Create the numbers list." },
            { pattern: /^\s*squares\s*=\s*\[.*\bfor\b/m, count: 1, message: "Use a list comprehension." },
            { pattern: /\*\*\s*2/, count: 1, message: "Square each number." },
            { pattern: /print\s*\(\s*squares\s*\)/, count: 1, message: "Print the squares list." }
        ]
    },

    "intermediate:i3": {
        title: "Math Module Explorer",
        prompt: "Import the math module. Print the square root of 81 using math.sqrt().",
        expected: "9.0",
        starter: "import math\n\n",
        hint: "Use print(math.sqrt(81)).",
        requires: [
            { pattern: /^\s*import\s+math/m, count: 1, message: "Import the math module." },
            { pattern: /math\.sqrt\s*\(\s*81\s*\)/, count: 1, message: "Use math.sqrt(81)." },
            { pattern: /print\s*\(/, count: 1, message: "Print the result." }
        ]
    },

    "intermediate:i4": {
        title: "File Writer",
        prompt: "Use the with statement and open() to create a file named codequest.txt in write mode. Write the text 'I am learning Python' into the file.",
        starter: "with open(\"codequest.txt\", \"w\") as file:\n    \n",
        hint: "Use file.write(\"I am learning Python\") inside the with block.",

        fileValidation: {
            path: "codequest.txt",
            expected: "I am learning Python"
        },

        requires: [
            {
                pattern: /with\s+open\s*\(\s*["']codequest\.txt["']\s*,\s*["']w["']\s*\)\s+as\s+file\s*:/,
                count: 1,
                message: "Open codequest.txt using the with statement in write mode."
            },
            {
                pattern: /file\.write\s*\(\s*["']I am learning Python["']\s*\)/,
                count: 1,
                message: "Write the required text into the file."
            }
        ]
    },

"intermediate:i5": {
    title: "Safe Division",
    prompt: "Use try and except to divide 100 by a number. If the user enters 0, print 'Cannot divide by zero'. Otherwise, print the result.",
    expected: "Cannot divide by zero",
    starter: "try:\n    number = 0\n    result = 100 / number\n    print(result)\nexcept ZeroDivisionError:\n    \n",
    hint: "Handle ZeroDivisionError and display the required message.",
    requires: [
        { pattern: /try\s*:/, count: 1, message: "Use a try block." },
        { pattern: /except\s+ZeroDivisionError\s*:/, count: 1, message: "Handle ZeroDivisionError." }
    ]
},

"intermediate:i6": {
    title: "Student Class",
    prompt: "Create a Student class with an __init__ method that accepts a name. Create an object named student1 with the name 'Aisha' and print student1.name.",
    expected: "Aisha",
    starter: "class Student:\n    def __init__(self, name):\n        \n\nstudent1 = Student(\"Aisha\")\nprint(student1.name)",
    hint: "Inside __init__, assign the name using self.name = name.",
    requires: [
        { pattern: /class\s+Student\s*:/, count: 1, message: "Create a Student class." },
        { pattern: /def\s+__init__\s*\(\s*self\s*,\s*name\s*\)/, count: 1, message: "Create the initializer with self and name." },
        { pattern: /self\.name\s*=\s*name/, count: 1, message: "Store the name in self.name." }
    ]
},

"intermediate:i7": {
    title: "Inheritance Practice",
    prompt: "Create a parent class Animal with a speak() method that prints 'Animal sound'. Create a child class Dog that inherits Animal. Create a Dog object and call speak().",
    expected: "Animal sound",
    starter: "class Animal:\n    def speak(self):\n        print(\"Animal sound\")\n\nclass Dog(Animal):\n    pass\n\nmy_dog = Dog()\nmy_dog.speak()",
    hint: "Write class Dog(Animal) to inherit from Animal.",
    requires: [
        { pattern: /class\s+Animal\s*:/, count: 1, message: "Create the Animal parent class." },
        { pattern: /class\s+Dog\s*\(\s*Animal\s*\)\s*:/, count: 1, message: "Make Dog inherit from Animal." },
        { pattern: /def\s+speak\s*\(\s*self\s*\)/, count: 1, message: "Define the speak method." }
    ]
},

"intermediate:i8": {
    title: "Number Generator",
    prompt: "Create a generator function named generate_numbers() that uses yield to produce 1, 2 and 3. Print each generated value using a for loop.",
    expected: "1\n2\n3",
    starter: "def generate_numbers():\n    yield 1\n    yield 2\n    yield 3\n\nfor number in generate_numbers():\n    print(number)",
    hint: "Use yield inside the function and loop over the function call.",
    requires: [
        { pattern: /def\s+generate_numbers\s*\(\s*\)\s*:/, count: 1, message: "Create generate_numbers()." },
        { pattern: /yield\s+1/, count: 1, message: "Yield 1." },
        { pattern: /yield\s+2/, count: 1, message: "Yield 2." },
        { pattern: /yield\s+3/, count: 1, message: "Yield 3." }
    ]
},

"intermediate:i9": {
    title: "Find the Digits",
    prompt: "Import the re module. Use re.findall() to find all digits in the text 'CodeQuest2026'. Print the resulting list.",
    expected: "['2', '0', '2', '6']",
    starter: "import re\n\ntext = \"CodeQuest2026\"\nresult = re.findall(r\"\\d\", text)\nprint(result)",
    hint: "Use the pattern r\"\\d\" to find individual digits.",
    requires: [
        { pattern: /import\s+re/, count: 1, message: "Import the re module." },
        { pattern: /re\.findall\s*\(/, count: 1, message: "Use re.findall()." }
    ]
},

"intermediate:i10": {
    title: "JSON Explorer",
    prompt: "Import json. Convert the JSON string '{\"name\": \"Aisha\", \"age\": 20}' into a Python object using json.loads(). Print the name.",
    expected: "Aisha",
    starter: "import json\n\ndata = '{\"name\": \"Aisha\", \"age\": 20}'\nstudent = json.loads(data)\nprint(student[\"name\"])",
    hint: "Use json.loads() and access the name key.",
    requires: [
        { pattern: /import\s+json/, count: 1, message: "Import json." },
        { pattern: /json\.loads\s*\(/, count: 1, message: "Use json.loads()." }
    ]
},

"intermediate:i11": {
    title: "Math Library",
    prompt: "Import the math module and use math.sqrt() to calculate the square root of 81. Print the result.",
    expected: "9.0",
    starter: "import math\n\nresult = math.sqrt(81)\nprint(result)",
    hint: "Use math.sqrt(81).",
    requires: [
        { pattern: /import\s+math/, count: 1, message: "Import the math module." },
        { pattern: /math\.sqrt\s*\(\s*81\s*\)/, count: 1, message: "Use math.sqrt(81)." }
    ]
},

"intermediate:i12": {
    title: "Test Your Function",
    prompt: "Create a function named add(a, b) that returns their sum. Use assert to check that add(2, 3) equals 5. Print 'All tests passed' after the assertion.",
    expected: "All tests passed",
    starter: "def add(a, b):\n    return a + b\n\nassert add(2, 3) == 5\nprint(\"All tests passed\")",
    hint: "Use assert add(2, 3) == 5.",
    requires: [
        { pattern: /def\s+add\s*\(\s*a\s*,\s*b\s*\)/, count: 1, message: "Create the add function." },
        { pattern: /assert\s+add\s*\(\s*2\s*,\s*3\s*\)\s*==\s*5/, count: 1, message: "Add the required assertion." }
    ]
},

"advanced:a1": {
    title: "Execution Time Decorator",
    prompt: "Create a decorator named timer that prints 'Starting' before a function runs and 'Finished' after it runs. Apply it to a function named calculate that prints 'Calculation done'.",
    expected: "Starting\nCalculation done\nFinished",
    starter: "def timer(func):\n    def wrapper(*args, **kwargs):\n        \n    return wrapper\n\n@timer\ndef calculate():\n    print('Calculation done')\n\ncalculate()",
    hint: "Print Starting before calling func. Then call func and print Finished. Return the wrapper function.",
    requires: [
        { pattern: /def\s+timer\s*\(\s*func\s*\)\s*:/, count: 1, message: "Create the timer decorator." },
        { pattern: /def\s+wrapper\s*\(\s*\*args\s*,\s*\*\*kwargs\s*\)\s*:/, count: 1, message: "Create a wrapper that accepts flexible arguments." },
        { pattern: /@timer/, count: 1, message: "Apply the decorator to calculate." },
        { pattern: /print\s*\(\s*["']Starting["']\s*\)/, count: 1, message: "Print Starting before the function runs." },
        { pattern: /print\s*\(\s*["']Finished["']\s*\)/, count: 1, message: "Print Finished after the function runs." }
    ]
},

"advanced:a2": {
    title: "Custom Context Manager",
    prompt: "Create a class named FileSession that implements __enter__ and __exit__. Print 'Session started' when entering and 'Session closed' when leaving the with block. Inside the block, print 'Working'.",
    expected: "Session started\nWorking\nSession closed",
    starter: "class FileSession:\n    def __enter__(self):\n        \n\n    def __exit__(self, exc_type, exc_value, traceback):\n        \n\nwith FileSession():\n    print('Working')",
    hint: "Put the first message in __enter__, return self, and put the closing message in __exit__.",
    requires: [
        { pattern: /class\s+FileSession\s*:/, count: 1, message: "Create the FileSession class." },
        { pattern: /def\s+__enter__\s*\(\s*self\s*\)\s*:/, count: 1, message: "Implement __enter__." },
        { pattern: /def\s+__exit__\s*\(\s*self\s*,/, count: 1, message: "Implement __exit__." },
        { pattern: /print\s*\(\s*["']Session started["']\s*\)/, count: 1, message: "Print the session start message." },
        { pattern: /print\s*\(\s*["']Session closed["']\s*\)/, count: 1, message: "Print the cleanup message." }
    ]
},

"advanced:a3": {
    title: "Thread-Safe Counter",
    prompt: "Use threading.Lock to safely increase a shared counter. Create a function increase that adds 1 to the global counter. Run five threads, each calling increase 100 times. Print the final counter.",
    expected: "500",
    starter: "import threading\n\ncounter = 0\nlock = threading.Lock()\n\ndef increase():\n    global counter\n    \n\nthreads = []\n# Create and start five threads\n\n# Wait for all threads\n\nprint(counter)",
    hint: "Use with lock around counter += 1. Create threads with target=increase, start each one, and join each one.",
    requires: [
        { pattern: /import\s+threading/, count: 1, message: "Import threading." },
        { pattern: /threading\.Lock\s*\(\s*\)/, count: 1, message: "Create a lock." },
        { pattern: /global\s+counter/, count: 1, message: "Declare the shared counter as global." },
        { pattern: /with\s+lock\s*:/, count: 1, message: "Protect the counter update with the lock." },
        { pattern: /counter\s*\+=\s*1/, count: 1, message: "Increase the counter by one." },
        { pattern: /threading\.Thread\s*\(\s*target\s*=\s*increase\s*\)/, count: 1, message: "Create threads targeting increase." },
        { pattern: /\.start\s*\(\s*\)/, count: 1, message: "Start the threads." },
        { pattern: /\.join\s*\(\s*\)/, count: 1, message: "Wait for the threads to finish." }
    ]
},

"advanced:a4": {
    title: "Concurrent Async Tasks",
    prompt: "Write an asynchronous function task that accepts a name, waits for 1 second using asyncio.sleep, and prints the name followed by 'completed'. In main, run three tasks concurrently using asyncio.gather with the names A, B, and C.",
    expected: "A completed\nB completed\nC completed",
    starter: "import asyncio\n\nasync def task(name):\n    \n\nasync def main():\n    \n\nasyncio.run(main())",
    hint: "Use await asyncio.sleep(1) inside task. Use await asyncio.gather(task('A'), task('B'), task('C')) inside main.",
    requires: [
        { pattern: /import\s+asyncio/, count: 1, message: "Import asyncio." },
        { pattern: /async\s+def\s+task\s*\(\s*name\s*\)\s*:/, count: 1, message: "Define the asynchronous task function." },
        { pattern: /await\s+asyncio\.sleep\s*\(\s*1\s*\)/, count: 1, message: "Await a one-second asynchronous sleep." },
        { pattern: /async\s+def\s+main\s*\(\s*\)\s*:/, count: 1, message: "Define the main coroutine." },
        { pattern: /asyncio\.gather\s*\(/, count: 1, message: "Run the tasks concurrently with gather." },
        { pattern: /asyncio\.run\s*\(\s*main\s*\(\s*\)\s*\)/, count: 1, message: "Run the main coroutine." }
    ]
},

"advanced:a5": {
    title: "Student Database Manager",
    prompt: "Use sqlite3 to create a database named students.db and a table named students with name and marks columns. Insert Aisha with 85 marks using parameterized SQL, select all records, and print each record as a tuple.",
    expected: "('Aisha', 85)",
    starter: "import sqlite3\n\nconnection = sqlite3.connect('students.db')\ncursor = connection.cursor()\n\n# Create the table\n\n# Insert the record safely\n\n# Retrieve and print records\n\nconnection.commit()\nconnection.close()",
    hint: "Use CREATE TABLE IF NOT EXISTS, INSERT with two ? placeholders, and SELECT followed by fetchall().",
    requires: [
        { pattern: /import\s+sqlite3/, count: 1, message: "Import sqlite3." },
        { pattern: /sqlite3\.connect\s*\(\s*["']students\.db["']\s*\)/, count: 1, message: "Connect to students.db." },
        { pattern: /CREATE\s+TABLE\s+IF\s+NOT\s+EXISTS\s+students/i, count: 1, message: "Create the students table." },
        { pattern: /INSERT\s+INTO\s+students/i, count: 1, message: "Insert a student record." },
        { pattern: /VALUES\s*\(\s*\?\s*,\s*\?\s*\)/i, count: 1, message: "Use parameter placeholders." },
        { pattern: /["']Aisha["']/, count: 1, message: "Insert Aisha." },
        { pattern: /\b85\b/, count: 1, message: "Insert 85 marks." },
        { pattern: /SELECT\s+\*\s+FROM\s+students/i, count: 1, message: "Retrieve the student records." },
        { pattern: /fetchall\s*\(\s*\)/, count: 1, message: "Fetch the records." },
        { pattern: /connection\.commit\s*\(\s*\)/, count: 1, message: "Commit database changes." }
    ]
},

"advanced:a6": {
    title: "Optimize a Search Algorithm",
    prompt: "Create a function named fast_search that accepts a sorted list and a target. Implement iterative binary search. Return the index if found, otherwise return -1. Test it with [2, 5, 8, 12, 16, 23, 38] and target 16. Print the result.",
    expected: "4",
    starter: "def fast_search(numbers, target):\n    left = 0\n    right = len(numbers) - 1\n\n    while left <= right:\n        \n\n    return -1\n\nnumbers = [2, 5, 8, 12, 16, 23, 38]\nprint(fast_search(numbers, 16))",
    hint: "Calculate mid as (left + right) // 2. Compare numbers[mid] with target and adjust left or right.",
    requires: [
        { pattern: /def\s+fast_search\s*\(\s*numbers\s*,\s*target\s*\)\s*:/, count: 1, message: "Define fast_search with numbers and target." },
        { pattern: /left\s*=\s*0/, count: 1, message: "Initialize the left boundary." },
        { pattern: /right\s*=\s*len\s*\(\s*numbers\s*\)\s*-\s*1/, count: 1, message: "Initialize the right boundary." },
        { pattern: /while\s+left\s*<=\s*right\s*:/, count: 1, message: "Use the binary search loop condition." },
        { pattern: /mid\s*=\s*\(\s*left\s*\+\s*right\s*\)\s*\/\/\s*2/, count: 1, message: "Calculate the middle index." },
        { pattern: /if\s+numbers\s*\[\s*mid\s*\]\s*==\s*target\s*:/, count: 1, message: "Check whether the middle item matches the target." },
        { pattern: /return\s+mid/, count: 1, message: "Return the matching index." },
        { pattern: /left\s*=\s*mid\s*\+\s*1/, count: 1, message: "Move the left boundary when the target is larger." },
        { pattern: /right\s*=\s*mid\s*-\s*1/, count: 1, message: "Move the right boundary when the target is smaller." },
        { pattern: /return\s+-1/, count: 1, message: "Return -1 when the target is not found." }
    ]
},

"advanced:a7": {
    title: "Generic First Element",
    prompt: "Import TypeVar. Create a TypeVar named T and a generic function named get_first that accepts a list of T and returns a value of type T. Test it with [10, 20, 30] and print the result.",
    expected: "10",
    starter: "from typing import TypeVar\n\nT = TypeVar('T')\n\ndef get_first(items: list[T]) -> T:\n    \n\nnumbers = [10, 20, 30]\nprint(get_first(numbers))",
    hint: "Return items[0] from the function.",
    requires: [
        { pattern: /from\s+typing\s+import\s+TypeVar/, count: 1, message: "Import TypeVar." },
        { pattern: /T\s*=\s*TypeVar\s*\(\s*["']T["']\s*\)/, count: 1, message: "Create the generic type variable T." },
        { pattern: /def\s+get_first\s*\(\s*items\s*:\s*list\s*\[\s*T\s*\]\s*\)\s*->\s*T\s*:/, count: 1, message: "Define the correctly annotated generic function." },
        { pattern: /return\s+items\s*\[\s*0\s*\]/, count: 1, message: "Return the first item." }
    ]
},

"advanced:a8": {
    title: "Dataclass Rectangle",
    prompt: "Create a dataclass named Rectangle with width and height as float fields. Add an area method that returns width multiplied by height. Create Rectangle(10, 20) and print its area.",
    expected: "200",
    starter: "from dataclasses import dataclass\n\n@dataclass\nclass Rectangle:\n    width: float\n    height: float\n\n    def area(self) -> float:\n        \n\nrectangle = Rectangle(10, 20)\nprint(rectangle.area())",
    hint: "Inside area(), return self.width * self.height.",
    requires: [
        { pattern: /from\s+dataclasses\s+import\s+dataclass/, count: 1, message: "Import dataclass." },
        { pattern: /@dataclass/, count: 1, message: "Apply the dataclass decorator." },
        { pattern: /class\s+Rectangle\s*:/, count: 1, message: "Create the Rectangle class." },
        { pattern: /width\s*:\s*float/, count: 1, message: "Add the width field." },
        { pattern: /height\s*:\s*float/, count: 1, message: "Add the height field." },
        { pattern: /def\s+area\s*\(\s*self\s*\)\s*->\s*float\s*:/, count: 1, message: "Create the area method." },
        { pattern: /return\s+self\.width\s*\*\s*self\.height/, count: 1, message: "Calculate the rectangle area." }
    ]
},

"advanced:a9": {
    title: "Functional Data Pipeline",
    prompt: "Use map and filter to create a list of the squares of even numbers from [1, 2, 3, 4, 5, 6]. Use reduce to calculate their total. Print the resulting list and then the total.",
    expected: "[4, 16, 36]\n56",
    starter: "from functools import reduce\n\nnumbers = [1, 2, 3, 4, 5, 6]\n\n# Keep even numbers\n\n# Square the even numbers\n\n# Calculate their total using reduce\n\nprint(squares)\nprint(total)",
    hint: "Filter numbers using x % 2 == 0, map each selected number to x * x, and reduce with addition.",
    requires: [
        { pattern: /from\s+functools\s+import\s+reduce/, count: 1, message: "Import reduce." },
        { pattern: /filter\s*\(/, count: 1, message: "Use filter to select even numbers." },
        { pattern: /map\s*\(/, count: 1, message: "Use map to calculate squares." },
        { pattern: /reduce\s*\(/, count: 1, message: "Use reduce to calculate the total." },
        { pattern: /x\s*%\s*2\s*==\s*0/, count: 1, message: "Check whether numbers are even." },
        { pattern: /x\s*\*\s*x/, count: 1, message: "Square each selected number." }
    ]
},

"advanced:a10": {
    title: "Top Three Largest Numbers",
    prompt: "Use heapq to find the three largest numbers in [12, 45, 7, 89, 34, 67, 23]. Print the three largest numbers in descending order.",
    expected: "[89, 67, 45]",
    starter: "import heapq\n\nnumbers = [12, 45, 7, 89, 34, 67, 23]\n\n# Find the three largest values\n\nprint(result)",
    hint: "Use heapq.nlargest(3, numbers).",
    requires: [
        { pattern: /import\s+heapq/, count: 1, message: "Import heapq." },
        { pattern: /heapq\.nlargest\s*\(\s*3\s*,\s*numbers\s*\)/, count: 1, message: "Use nlargest to select the top three values." },
        { pattern: /result\s*=/, count: 1, message: "Store the selected values in result." }
    ]
},

"advanced:a11": {
    title: "Shallow vs Deep Copy",
    prompt: "Import copy. Create original = [[1, 2], [3, 4]]. Create a shallow copy and a deep copy. Append 99 to original[0]. Print the shallow copy and then the deep copy.",
    expected: "[[1, 2, 99], [3, 4]]\n[[1, 2], [3, 4]]",
    starter: "import copy\n\noriginal = [[1, 2], [3, 4]]\n\n# Create both copies\n\n# Modify the nested list\n\nprint(shallow)\nprint(deep)",
    hint: "Use copy.copy(original) and copy.deepcopy(original). A shallow copy shares nested objects; a deep copy does not.",
    requires: [
        { pattern: /import\s+copy/, count: 1, message: "Import the copy module." },
        { pattern: /shallow\s*=\s*copy\.copy\s*\(\s*original\s*\)/, count: 1, message: "Create a shallow copy." },
        { pattern: /deep\s*=\s*copy\.deepcopy\s*\(\s*original\s*\)/, count: 1, message: "Create a deep copy." },
        { pattern: /original\s*\[\s*0\s*\]\.append\s*\(\s*99\s*\)/, count: 1, message: "Modify the first nested list." }
    ]
},

"advanced:a12": {
    title: "Strategy Pattern Calculator",
    prompt: "Create two functions, add and multiply, each accepting a and b. Create a calculate function that accepts an operation function and two numbers, then returns the operation result. Use calculate to add 10 and 5, and then multiply 10 and 5. Print both results on separate lines.",
    expected: "15\n50",
    starter: "def add(a, b):\n    \n\ndef multiply(a, b):\n    \n\ndef calculate(operation, a, b):\n    \n\nprint(calculate(add, 10, 5))\nprint(calculate(multiply, 10, 5))",
    hint: "Return a + b from add, a * b from multiply, and operation(a, b) from calculate.",
    requires: [
        { pattern: /def\s+add\s*\(\s*a\s*,\s*b\s*\)\s*:/, count: 1, message: "Define the add strategy." },
        { pattern: /def\s+multiply\s*\(\s*a\s*,\s*b\s*\)\s*:/, count: 1, message: "Define the multiply strategy." },
        { pattern: /def\s+calculate\s*\(\s*operation\s*,\s*a\s*,\s*b\s*\)\s*:/, count: 1, message: "Define the calculate function." },
        { pattern: /return\s+a\s*\+\s*b/, count: 1, message: "Implement addition." },
        { pattern: /return\s+a\s*\*\s*b/, count: 1, message: "Implement multiplication." },
        { pattern: /return\s+operation\s*\(\s*a\s*,\s*b\s*\)/, count: 1, message: "Call the supplied strategy." }
    ]
},



    };

    const BADGES = [
        { id: "first-run", name: "First Run", description: "Run your first Python program.", test: s => s.codeRuns >= 1 },
        { id: "first-lesson", name: "First Steps", description: "Complete your first lesson.", test: () => Object.values(progress).some(Boolean) },
        { id: "quiz-ace", name: "Quiz Ace", description: "Get a perfect score on a chapter quiz.", test: s => Object.values(s.quizScores).some(q => q.best === q.total) },
        { id: "problem-solver", name: "Problem Solver", description: "Solve your first coding challenge.", test: s => Object.keys(s.challenges).length >= 1 },
        { id: "on-a-roll", name: "On a Roll", description: "Learn 3 days in a row.", test: s => s.streak >= 3 },
        { id: "week-warrior", name: "Week Warrior", description: "Learn 7 days in a row.", test: s => s.streak >= 7 },
        { id: "tinkerer", name: "Tinkerer", description: "Run code 25 times.", test: s => s.codeRuns >= 25 },
        { id: "rising-coder", name: "Rising Coder", description: "Earn 300 XP.", test: s => s.xp >= 300 },
        { id: "code-master", name: "Code Master", description: "Earn 1000 XP.", test: s => s.xp >= 1000 }
    ];

    function createDefaultState() {
        return {
            xp: 0,
            streak: 0,
            lastActiveDate: null,
            quizScores: {},
            lastVisited: null,
            codeRuns: 0,
            badges: {},
            challenges: {}
        };
    }

    let currentLevel = "beginner";
    let currentChapter = null;
    let currentMode = "deep";
    let progress = loadJSON(STORAGE_KEY, {});
    let appState = Object.assign(createDefaultState(), loadJSON(STATE_KEY, {}));

    const ui = {};

    function loadJSON(key, fallback) {
        try {
            const saved = localStorage.getItem(key);
            return saved ? JSON.parse(saved) : fallback;
        } catch (error) {
            console.warn(`Could not load ${key}:`, error);
            return fallback;
        }
    }

    function saveJSON(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.warn(`Could not save ${key}:`, error);
        }
    }

    function saveProgress() {
        saveJSON(STORAGE_KEY, progress);
    }

    function saveState() {
        saveJSON(STATE_KEY, appState);
    }

    function getChapterKey(level, chapterId) {
        return `${level}:${chapterId}`;
    }

    function isCompleted(level, chapterId) {
        return progress[getChapterKey(level, chapterId)] === true;
    }

    
    
    function getPublishedChapter(level, chapterId) {
        const chapters = {
            beginner: {
                b1: chapterOne,
                b2: chapterTwo,
                b3: chapterThree,
                b4: chapterFour,
                b5: chapterFive,
                b6: chapterSix,
                b7: chapterSeven,
                b8: chapterEight,
                b9: chapterNine,
                b10: chapterTen,
                b11: chapterEleven,
                b12: chapterTwelve
            },
            
intermediate: {
    i1: chapterI1,
    i2: chapterI2,
    i3: chapterI3,
    i4: chapterI4,
    i5: chapterI5,
    i6: chapterI6,
    i7: chapterI7,
    i8: chapterI8,
    i9: chapterI9,
    i10: chapterI10,
    i11: chapterI11,
    i12: chapterI12
},
advanced: {
    a1: chapterA1,
    a2: chapterA2,
    a3: chapterA3,
    a4: chapterA4,
    a5: chapterA5,
    a6: chapterA6,
    a7: chapterA7,
    a8: chapterA8,
    a9: chapterA9,
    a10: chapterA10,
    a11: chapterA11,
    a12: chapterA12
}

        };

        return chapters[level]?.[chapterId] || null;
    }


    function getAllChapters() {
        return Object.entries(levelInformation).flatMap(([level, info]) =>
            info.chapters.map(([id, title]) => ({
                id,
                title,
                level
            }))
        );
    }

    function findChapterTitle(level, chapterId) {
        const info = levelInformation[level];
        const item = info && info.chapters.find(([id]) => id === chapterId);
        return item ? item[1] : "Chapter";
    }

    function updateProgressDisplay() {
        const availableChapters = getAllChapters().filter(chapter =>
            getPublishedChapter(chapter.level, chapter.id)
        );

        const completed = availableChapters.filter(chapter =>
            isCompleted(chapter.level, chapter.id)
        ).length;

        const totalAvailable = availableChapters.length;

        const percentage = totalAvailable
            ? Math.round((completed / totalAvailable) * 100)
            : 0;

        if (elements.pythonProgressBar) {
            elements.pythonProgressBar.style.width = `${percentage}%`;
            elements.pythonProgressBar.setAttribute("aria-valuenow", percentage);
        }

        if (elements.pythonProgressText) {
            elements.pythonProgressText.textContent =
                `${completed} of ${totalAvailable} available lessons completed (${percentage}%)`;
        }

        renderStats();
    }

    // =========================================================
    // XP, RANKS AND DAILY STREAK
    // =========================================================

    function toDateString(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    function getToday() {
        return toDateString(new Date());
    }

    function getYesterday() {
        const date = new Date();
        date.setDate(date.getDate() - 1);
        return toDateString(date);
    }

    function getDisplayStreak() {
        const last = appState.lastActiveDate;
        return last === getToday() || last === getYesterday()
            ? appState.streak
            : 0;
    }

    function recordActivity() {
        const today = getToday();

        if (appState.lastActiveDate === today) return;

        appState.streak = appState.lastActiveDate === getYesterday()
            ? appState.streak + 1
            : 1;

        appState.lastActiveDate = today;
        saveState();
        renderStats();

        if (appState.streak > 1) {
            showToast(`${appState.streak}-day learning streak. Keep it going!`, "success");
        }

        checkBadges();
    }

    function getRank(xp) {
        let rankIndex = 0;

        RANKS.forEach((rank, index) => {
            if (xp >= rank.min) rankIndex = index;
        });

        return {
            current: RANKS[rankIndex],
            next: RANKS[rankIndex + 1] || null
        };
    }

    function addXP(amount, reason) {
        if (amount <= 0) return;

        const previousRank = getRank(appState.xp).current.name;

        appState.xp += amount;
        saveState();
        renderStats();

        showToast(`+${amount} XP — ${reason}`, "success");

        const newRank = getRank(appState.xp).current.name;

        if (newRank !== previousRank) {
            showToast(`Rank up! New rank: ${newRank}.`, "success");
        }

        checkBadges();
    }

    // =========================================================
    // ACHIEVEMENT BADGES
    // =========================================================

    function checkBadges({ silent = false } = {}) {
        let changed = false;

        BADGES.forEach(badge => {
            if (appState.badges[badge.id] || !badge.test(appState)) return;

            appState.badges[badge.id] = getToday();
            changed = true;

            if (!silent) {
                showToast(`Badge unlocked: ${badge.name}`, "badge");
            }
        });

        if (changed) saveState();
        renderBadges();
    }

    function renderBadges() {
        if (!ui.badgeGrid) return;

        const earnedCount = BADGES.filter(badge => appState.badges[badge.id]).length;
        ui.badgeCount.textContent = `${earnedCount}/${BADGES.length}`;

        ui.badgeGrid.innerHTML = BADGES.map(badge => {
            const earnedOn = appState.badges[badge.id];
            const status = earnedOn ? `Earned on ${earnedOn}` : "Locked";

            return `
                <li class="cq-badge ${earnedOn ? "cq-badge-earned" : ""}">
                    <span class="cq-badge-icon" aria-hidden="true">${escapeHTML(badge.name.charAt(0))}</span>
                    <span class="cq-badge-text">
                        <strong>${escapeHTML(badge.name)}</strong>
                        <small>${escapeHTML(badge.description)}</small>
                        <small class="cq-badge-status">${status}</small>
                    </span>
                </li>
            `;
        }).join("");
    }

    // =========================================================
    // DARK MODE
    // =========================================================

    function getPreferredTheme() {
        try {
            const saved = localStorage.getItem(THEME_KEY);
            if (saved === "dark" || saved === "light") return saved;
        } catch (error) {
            // Storage unavailable: fall back to the system preference.
        }

        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    function applyTheme(theme) {
        const dark = theme === "dark";

        document.documentElement.classList.toggle("cq-dark", dark);

        if (ui.themeToggle) {
            ui.themeToggle.setAttribute("aria-pressed", String(dark));
            ui.themeToggle.textContent = dark ? "Light mode" : "Dark mode";
        }
    }

    function toggleTheme() {
        const next = document.documentElement.classList.contains("cq-dark") ? "light" : "dark";

        applyTheme(next);

        try {
            localStorage.setItem(THEME_KEY, next);
        } catch (error) {
            console.warn("Could not save theme:", error);
        }
    }

    // =========================================================
    // CODING CHALLENGES
    // =========================================================

    function normaliseOutput(text) {
        return String(text)
            .replace(/\r/g, "")
            .split("\n")
            .map(line => line.trimEnd())
            .join("\n")
            .trim();
    }

    function describeMismatch(expected, actual) {
        const expectedLines = expected.split("\n");
        const actualLines = actual ? actual.split("\n") : [];
        const length = Math.max(expectedLines.length, actualLines.length);

        for (let i = 0; i < length; i++) {
            if (expectedLines[i] === actualLines[i]) continue;

            if (actualLines[i] === undefined) {
                return `Line ${i + 1} is missing. Expected: ${expectedLines[i]}`;
            }

            if (expectedLines[i] === undefined) {
                return `Your program printed an extra line ${i + 1}: ${actualLines[i]}`;
            }

            return `Line ${i + 1} does not match.\nExpected: ${expectedLines[i]}\nYou printed: ${actualLines[i]}`;
        }

        return "The output does not match yet.";
    }

    function renderChallenge() {
        if (!elements.lessonContent) return;

        const key = getChapterKey(currentLevel, currentChapter);
        const challenge = challenges[key];

        if (!challenge) return;

        const solved = appState.challenges[key] === true;
        const section = document.createElement("section");
        section.className = "lesson-section cq-challenge";
        section.setAttribute("aria-labelledby", "cqChallengeTitle");

        section.innerHTML = `
            <div class="cq-challenge-head">
                <h2 id="cqChallengeTitle">Coding challenge: ${escapeHTML(challenge.title)}</h2>
                <span class="cq-challenge-tag ${solved ? "cq-solved" : ""}">
                    ${solved ? "Solved" : `+${XP_PER_CHALLENGE} XP`}
                </span>
            </div>
            <p>${escapeHTML(challenge.prompt)}</p>
            <p class="cq-challenge-label">Expected output</p>
            <pre class="cq-challenge-expected">${escapeHTML(challenge.expected)}</pre>
            <label class="cq-challenge-label" for="cqChallengeCode">Your code</label>
            <textarea id="cqChallengeCode" class="cq-challenge-editor" rows="8"
                spellcheck="false" autocomplete="off" autocapitalize="off"
                aria-describedby="cqChallengeKeys">${escapeHTML(challenge.starter)}</textarea>
            <small id="cqChallengeKeys" class="cq-challenge-keys">
                Tab adds an indent. Press Esc, then Tab, to leave the editor. Ctrl + Enter checks your code.
            </small>
            <div class="cq-code-toolbar">
                <button type="button" class="cq-run" data-action="check">Check my code</button>
                <button type="button" data-action="hint">Show hint</button>
                <button type="button" data-action="reset">Reset</button>
            </div>
            <p class="cq-challenge-hint" hidden>${escapeHTML(challenge.hint)}</p>
            <pre class="cq-run-output" hidden></pre>
            <p class="cq-challenge-result" role="status" aria-live="polite"></p>
        `;

        elements.lessonContent.appendChild(section);

        const editor = section.querySelector(".cq-challenge-editor");
        const checkButton = section.querySelector('[data-action="check"]');
        const hintButton = section.querySelector('[data-action="hint"]');
        const hint = section.querySelector(".cq-challenge-hint");
        const output = section.querySelector(".cq-run-output");
        const result = section.querySelector(".cq-challenge-result");
        const tag = section.querySelector(".cq-challenge-tag");
        let releaseTab = false;

        editor.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                releaseTab = true;
                return;
            }

            if (event.key === "Tab" && !event.shiftKey && !releaseTab) {
                event.preventDefault();
                editor.setRangeText("    ", editor.selectionStart, editor.selectionEnd, "end");
                return;
            }

            if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                check();
                return;
            }

            releaseTab = false;
        });

        editor.addEventListener("blur", () => {
            releaseTab = false;
        });

        hintButton.addEventListener("click", () => {
            hint.hidden = !hint.hidden;
            hintButton.textContent = hint.hidden ? "Show hint" : "Hide hint";
        });

        section.querySelector('[data-action="reset"]').addEventListener("click", () => {
            editor.value = challenge.starter;
            output.hidden = true;
            result.textContent = "";
            result.className = "cq-challenge-result";
            editor.focus();
        });

        const showResult = (message, passed) => {
            result.textContent = message;
            result.className = `cq-challenge-result ${passed ? "cq-pass" : "cq-fail"}`;
        };

        async function check() {
            const code = editor.value;

            checkButton.disabled = true;
            checkButton.textContent = pythonRuntimeReady ? "Checking..." : "Loading Python...";
            output.hidden = false;
            output.classList.remove("cq-error");
            output.textContent = pythonRuntimeReady
                ? "Running..."
                : "Loading Python for the first time. This can take a few seconds...";
            showResult("", false);

            try {
                const run = await runPython(
                code,
                challenge.fileValidation?.path || null
            );

                appState.codeRuns += 1;
                saveState();
                recordActivity();

                output.textContent = run.output || "(Program ran with no output)";
                output.classList.toggle("cq-error", !run.ok);

                if (!run.ok) {
                    showResult("Your program has an error. Read the message above, fix it and try again.", false);
                    return;
                }

                if (challenge.fileValidation) {
                    try {
                        const fileContent = run.pyodide.FS.readFile(
                            challenge.fileValidation.path,
                            { encoding: "utf8" }
                        );

                        const actual = normaliseOutput(fileContent);
                        const expected = normaliseOutput(
                            challenge.fileValidation.expected
                        );

                        if (actual !== expected) {
                            showResult(
                                `File content is incorrect. Expected: "${expected}", but found: "${actual}".`,
                                false
                            );
                            return;
                        }

                    } catch (error) {
                        showResult(
                            `File not found! Create ${challenge.fileValidation.path} and write the required text into it.`,
                            false
                        );
                        return;
                    }

                } else {
                    const actual = normaliseOutput(run.output);
                    const expected = normaliseOutput(challenge.expected);

                    if (actual !== expected) {
                        showResult(describeMismatch(expected, actual), false);
                        return;
                    }
                }

                const missing = (challenge.requires || []).find(rule =>
                    (code.match(rule.pattern) || []).length < rule.count
                );

                if (missing) {
                    showResult(`Output is correct, but one more thing: ${missing.message}`, false);
                    return;
                }

                showResult("Challenge solved! Your output matches exactly.", true);
                tag.textContent = "Solved";
                tag.classList.add("cq-solved");

                if (!appState.challenges[key]) {
                    appState.challenges[key] = true;
                    saveState();
                    addXP(XP_PER_CHALLENGE, "coding challenge solved");
                    renderChapterList();
                } else {
                    checkBadges();
                }
            } catch (error) {
                output.textContent = error.message;
                output.classList.add("cq-error");
                showResult("Python could not run. Check your internet connection and try again.", false);
            } finally {
                checkButton.disabled = false;
                checkButton.textContent = "Check my code";
            }
        }

        checkButton.addEventListener("click", check);
    }

    function renderStats() {
        if (!ui.stats) return;

        const { current, next } = getRank(appState.xp);
        const streak = getDisplayStreak();

        const completedTotal = getAllChapters().filter(chapter =>
            isCompleted(chapter.level, chapter.id)
        ).length;

        ui.stats.querySelector('[data-stat="xp"]').textContent = appState.xp;
        ui.stats.querySelector('[data-stat="rank"]').textContent = current.name;
        ui.stats.querySelector('[data-stat="streak"]').textContent =
            `${streak} ${streak === 1 ? "day" : "days"}`;
        ui.stats.querySelector('[data-stat="completed"]').textContent = completedTotal;

        const bar = ui.stats.querySelector(".cq-rank-bar");
        const track = ui.stats.querySelector(".cq-rank-track");
        const nextLabel = ui.stats.querySelector('[data-stat="next"]');

        if (next) {
            const percent = Math.round(
                ((appState.xp - current.min) / (next.min - current.min)) * 100
            );

            bar.style.width = `${percent}%`;
            track.setAttribute("aria-valuenow", percent);
            nextLabel.textContent = `${next.min - appState.xp} XP to ${next.name}`;
        } else {
            bar.style.width = "100%";
            track.setAttribute("aria-valuenow", 100);
            nextLabel.textContent = "Highest rank reached";
        }
    }

    // =========================================================
    // HELPER FUNCTIONS
    // =========================================================

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, character => {
            const replacements = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };

            return replacements[character];
        });
    }

    
function scrollToElement(element) {
    if (!element) return;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (!element.isConnected || element.hidden) return;

            const top =
                element.getBoundingClientRect().top + window.scrollY - 20;

            window.scrollTo({
                top: Math.max(0, top),
                behavior: "smooth"
            });
        });
    });
}

    function showToast(message, type = "info") {
        if (!ui.toastRegion) return;

        const toast = document.createElement("div");
        toast.className = `cq-toast cq-toast-${type}`;
        toast.textContent = message;

        ui.toastRegion.appendChild(toast);

        setTimeout(() => {
            toast.classList.add("cq-toast-hide");
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }

    // =========================================================
    // INJECTED UI (no HTML changes required)
    // =========================================================

    function injectStyles() {
        const style = document.createElement("style");

        style.textContent = `
            .cq-stats {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 12px 20px;
                margin: 16px 0;
                padding: 14px 18px;
                border-radius: 14px;
                background: rgba(108, 99, 255, 0.08);
                border: 1px solid rgba(108, 99, 255, 0.25);
            }
                [hidden] {
    display: none !important;
}
                .chapter-card.active {
    border: 2px solid var(--primary-color, #6c63ff) !important;
    background: rgba(108, 99, 255, 0.12) !important;
    transform: translateY(-2px);
    box-shadow: 0 5px 16px rgba(108, 99, 255, 0.15);
}

.chapter-card {
    scroll-margin-top: 20px;
}
            .cq-stat { display: flex; flex-direction: column; min-width: 70px; }
            .cq-stat span { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7; }
            .cq-stat strong { font-size: 18px; }
            .cq-rank { flex: 1 1 180px; display: flex; flex-direction: column; gap: 4px; }
            .cq-rank-track { height: 8px; border-radius: 999px; background: rgba(108, 99, 255, 0.18); overflow: hidden; }
            .cq-rank-bar { height: 100%; width: 0; background: var(--primary-color, #6c63ff); transition: width 0.4s ease; }
            .cq-rank small { opacity: 0.75; }
            .cq-reset {
                margin-left: auto;
                padding: 6px 12px;
                border-radius: 8px;
                border: 1px solid currentColor;
                background: transparent;
                color: #dc2626;
                cursor: pointer;
                font: inherit;
                font-size: 13px;
            }
            .cq-search {
                width: 100%;
                box-sizing: border-box;
                margin: 0 0 12px;
                padding: 10px 14px;
                border-radius: 10px;
                border: 1px solid rgba(0, 0, 0, 0.2);
                font: inherit;
            }
            .cq-empty { opacity: 0.7; font-style: italic; }
            .cq-meta { margin: 4px 0 16px; font-size: 14px; opacity: 0.75; }
            .cq-code { position: relative; margin: 12px 0; }
            .cq-code pre { margin: 0; }
            .cq-code code[contenteditable] { display: block; outline: none; min-height: 1.4em; white-space: pre; }
            .cq-code pre:focus-within { box-shadow: 0 0 0 2px var(--primary-color, #6c63ff); }
            .cq-code-toolbar { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 6px; }
            .cq-code-toolbar button {
                padding: 5px 12px;
                border-radius: 8px;
                border: 1px solid var(--primary-color, #6c63ff);
                background: transparent;
                color: var(--primary-color, #6c63ff);
                cursor: pointer;
                font: inherit;
                font-size: 13px;
            }
            .cq-code-toolbar button.cq-run { background: var(--primary-color, #6c63ff); color: #fff; }
            .cq-code-toolbar button:disabled { opacity: 0.6; cursor: wait; }
            .cq-code-toolbar small { opacity: 0.65; font-size: 12px; }
            .cq-run-output {
                margin: 8px 0 0;
                padding: 10px 14px;
                border-radius: 8px;
                background: #0f172a;
                color: #e2e8f0;
                white-space: pre-wrap;
                font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                font-size: 14px;
                border-left: 4px solid #16a34a;
            }
            .cq-run-output.cq-error { border-left-color: #dc2626; color: #fecaca; }
            .cq-lesson-nav { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; margin-top: 16px; }
            .cq-lesson-nav button {
                padding: 10px 16px;
                border-radius: 10px;
                border: 1px solid rgba(0, 0, 0, 0.2);
                background: transparent;
                cursor: pointer;
                font: inherit;
            }
            .cq-lesson-nav button:disabled { visibility: hidden; }
            .cq-retry { margin-left: 8px; }
            .cq-toast-region {
                position: fixed;
                right: 16px;
                bottom: 16px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 8px;
                max-width: min(360px, calc(100vw - 32px));
            }
            .cq-toast {
                padding: 12px 16px;
                border-radius: 10px;
                background: #1e1b4b;
                color: #fff;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
                transition: opacity 0.3s ease, transform 0.3s ease;
            }
            .cq-toast-success { background: #166534; }
            .cq-toast-badge { background: #92400e; }
            .cq-toast-hide { opacity: 0; transform: translateY(8px); }

            .cq-badges { flex-basis: 100%; }
            .cq-badges summary { cursor: pointer; font-weight: 600; width: fit-content; }
            .cq-badges summary span { margin-left: 6px; font-weight: 400; opacity: 0.75; }
            .cq-badge-grid {
                list-style: none;
                margin: 12px 0 0;
                padding: 0;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 10px;
            }
            .cq-badge {
                display: flex;
                align-items: flex-start;
                gap: 10px;
                padding: 10px 12px;
                border-radius: 10px;
                border: 1px dashed rgba(127, 127, 127, 0.45);
                opacity: 0.6;
            }
            .cq-badge-earned { opacity: 1; border-style: solid; border-color: #d97706; background: rgba(217, 119, 6, 0.08); }
            .cq-badge-icon {
                flex: none;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 34px;
                height: 34px;
                border-radius: 50%;
                font-weight: 700;
                background: rgba(127, 127, 127, 0.25);
            }
            .cq-badge-earned .cq-badge-icon { background: #d97706; color: #fff; }
            .cq-badge-text { display: flex; flex-direction: column; gap: 2px; }
            .cq-badge-text small { font-size: 12px; opacity: 0.8; }
            .cq-badge-status { font-style: italic; }

            .cq-theme-toggle {
                position: fixed;
                left: 16px;
                bottom: 16px;
                z-index: 9998;
                padding: 8px 14px;
                border-radius: 999px;
                border: 1px solid rgba(127, 127, 127, 0.4);
                background: #ffffff;
                color: #1f1d3a;
                box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
                cursor: pointer;
                font: inherit;
                font-size: 14px;
            }
            .cq-theme-toggle:focus-visible,
            .cq-code-toolbar button:focus-visible,
            .cq-challenge-editor:focus-visible {
                outline: 2px solid var(--primary-color, #6c63ff);
                outline-offset: 2px;
            }

            .cq-challenge {
                margin-top: 24px;
                padding: 18px;
                border-radius: 14px;
                border: 2px solid var(--primary-color, #6c63ff);
            }
            .cq-challenge-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px; }
            .cq-challenge-head h2 { margin: 0; }
            .cq-challenge-tag {
                padding: 3px 10px;
                border-radius: 999px;
                font-size: 13px;
                font-weight: 600;
                background: rgba(108, 99, 255, 0.12);
                color: var(--primary-color, #6c63ff);
            }
            .cq-challenge-tag.cq-solved { background: #dcfce7; color: #166534; }
            .cq-challenge-label { display: block; margin: 14px 0 6px; font-weight: 600; }
            .cq-challenge-expected {
                margin: 0;
                padding: 10px 14px;
                border-radius: 8px;
                background: rgba(127, 127, 127, 0.1);
                white-space: pre-wrap;
                font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                font-size: 14px;
            }
            .cq-challenge-editor {
                width: 100%;
                box-sizing: border-box;
                padding: 12px 14px;
                border-radius: 8px;
                border: 1px solid rgba(127, 127, 127, 0.4);
                background: #0f172a;
                color: #e2e8f0;
                font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
                font-size: 14px;
                line-height: 1.5;
                tab-size: 4;
                resize: vertical;
            }
                
            .cq-challenge-keys { display: block; margin-top: 4px; font-size: 12px; opacity: 0.7; }
            .cq-challenge-hint { margin: 10px 0 0; padding: 10px 14px; border-radius: 8px; background: rgba(217, 119, 6, 0.12); }
            .cq-challenge-result { margin: 10px 0 0; white-space: pre-line; font-weight: 600; }
            .cq-challenge-result:empty { display: none; }
            .cq-pass { color: #15803d; }
            .cq-fail { color: #b91c1c; }

            html.cq-dark { color-scheme: dark; }
            html.cq-dark body { background-color: #0f1117 !important; color: #e5e7eb !important; }
            html.cq-dark :is(header, nav, main, footer, section, article, aside, #coursePage, #lessonPreview, #lessonContent) {
                background-color: transparent !important;
                border-color: #2d3140 !important;
            }
            html.cq-dark :is(h1, h2, h3, h4, h5, h6, p, li, label, td, th, strong, small, summary, figcaption) { color: #e5e7eb; }
            html.cq-dark a { color: #a5b4fc; }
            html.cq-dark :is(.language-card, .level-card, .chapter-card, .card, table) {
                background-color: #181b24 !important;
                border-color: #2d3140 !important;
                color: #e5e7eb !important;
            }
            html.cq-dark :is(.level-card, .chapter-card, .language-card).active {
                background-color: #262150 !important;
                border-color: var(--primary-color, #6c63ff) !important;
            }
            html.cq-dark :is(input, textarea, select) { background-color: #181b24; color: #e5e7eb; border-color: #3a3f52; }
            html.cq-dark pre:not(.cq-run-output) { background-color: #0b0d12 !important; color: #e5e7eb !important; }
            html.cq-dark :is(td, th) { border-color: #2d3140 !important; }
            html.cq-dark .cq-lesson-nav button { color: #e5e7eb; border-color: #3a3f52; }
            html.cq-dark .cq-reset { color: #f87171; }
            html.cq-dark .cq-stats { background: rgba(108, 99, 255, 0.12); }
            html.cq-dark .cq-theme-toggle { background: #181b24; color: #e5e7eb; border-color: #3a3f52; }
            html.cq-dark .cq-challenge-tag.cq-solved { background: #14532d; color: #bbf7d0; }
            html.cq-dark .cq-pass { color: #4ade80; }
            html.cq-dark .cq-fail { color: #f87171; }

            @media (prefers-reduced-motion: reduce) {
                .cq-toast, .cq-rank-bar { transition: none; }
            }
        `;

        document.head.appendChild(style);
    }

    function injectUI() {
        injectStyles();

        ui.toastRegion = document.createElement("div");
        ui.toastRegion.className = "cq-toast-region";
        ui.toastRegion.setAttribute("role", "status");
        ui.toastRegion.setAttribute("aria-live", "polite");
        document.body.appendChild(ui.toastRegion);

        if (elements.coursePage) {
            ui.stats = document.createElement("section");
            ui.stats.className = "cq-stats";
            ui.stats.setAttribute("aria-label", "Your learning stats");
            ui.stats.innerHTML = `
                <div class="cq-stat"><span>XP</span><strong data-stat="xp">0</strong></div>
                <div class="cq-stat"><span>Rank</span><strong data-stat="rank">Newbie</strong></div>
                <div class="cq-stat"><span>Streak</span><strong data-stat="streak">0 days</strong></div>
                <div class="cq-stat"><span>Completed</span><strong data-stat="completed">0</strong></div>
                <div class="cq-rank">
                    <div class="cq-rank-track" role="progressbar" aria-label="Progress to next rank"
                        aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                        <div class="cq-rank-bar"></div>
                    </div>
                    <small data-stat="next"></small>
                </div>
                <button type="button" class="cq-reset">Reset progress</button>
                <details class="cq-badges">
                    <summary>Badges<span data-stat="badges">0/${BADGES.length}</span></summary>
                    <ul class="cq-badge-grid"></ul>
                </details>
            `;

            if (elements.backButton && elements.coursePage.contains(elements.backButton)) {
                elements.backButton.insertAdjacentElement("afterend", ui.stats);
            } else {
                elements.coursePage.prepend(ui.stats);
            }

            ui.stats.querySelector(".cq-reset").addEventListener("click", resetProgress);
            ui.badgeGrid = ui.stats.querySelector(".cq-badge-grid");
            ui.badgeCount = ui.stats.querySelector('[data-stat="badges"]');
        }

        ui.themeToggle = document.createElement("button");
        ui.themeToggle.type = "button";
        ui.themeToggle.className = "cq-theme-toggle";
        ui.themeToggle.addEventListener("click", toggleTheme);
        document.body.appendChild(ui.themeToggle);
        applyTheme(getPreferredTheme());

        if (elements.chapterList) {
            ui.chapterSearch = document.createElement("input");
            ui.chapterSearch.type = "search";
            ui.chapterSearch.className = "cq-search";
            ui.chapterSearch.placeholder = "Search chapters...";
            ui.chapterSearch.setAttribute("aria-label", "Search chapters");
            ui.chapterSearch.addEventListener("input", renderChapterList);
            elements.chapterList.insertAdjacentElement("beforebegin", ui.chapterSearch);
        }

        if (elements.lessonTitle) {
            ui.lessonMeta = document.createElement("p");
            ui.lessonMeta.className = "cq-meta";
            elements.lessonTitle.insertAdjacentElement("afterend", ui.lessonMeta);
        }

        const navAnchor = elements.completeLesson || elements.lessonContent;

        if (navAnchor) {
            ui.lessonNav = document.createElement("nav");
            ui.lessonNav.className = "cq-lesson-nav";
            ui.lessonNav.setAttribute("aria-label", "Lesson navigation");
            ui.lessonNav.innerHTML = `
                <button type="button" data-direction="-1"></button>
                <button type="button" data-direction="1"></button>
            `;

            ui.lessonNav.querySelectorAll("button").forEach(button => {
                button.addEventListener("click", () => {
                    const target = getNeighbourChapter(Number(button.dataset.direction));
                    if (target) goToChapter(target.level, target.id);
                });
            });

            navAnchor.insertAdjacentElement("afterend", ui.lessonNav);
        }

        if (elements.startButton) {
            ui.resumeButton = document.createElement("button");
            ui.resumeButton.type = "button";
            ui.resumeButton.className = elements.startButton.className;
            ui.resumeButton.style.marginLeft = "12px";
            ui.resumeButton.hidden = true;
            ui.resumeButton.addEventListener("click", openPythonCourse);
            elements.startButton.insertAdjacentElement("afterend", ui.resumeButton);
            updateResumeButton();
        }
    }

    function updateResumeButton() {
        if (!ui.resumeButton) return;

        const last = appState.lastVisited;

        if (!last || !levelInformation[last.level]) {
            ui.resumeButton.hidden = true;
            return;
        }

        ui.resumeButton.hidden = false;
        ui.resumeButton.textContent =
            `Continue: ${findChapterTitle(last.level, last.chapter)}`;
    }

    function rememberPosition() {
        appState.lastVisited = {
            level: currentLevel,
            chapter: currentChapter,
            mode: currentMode
        };

        saveState();
        updateResumeButton();
    }

    function resetProgress() {
    const confirmed = window.confirm(
        "Reset all lessons, quiz scores, challenges, badges, XP and streak? This cannot be undone."
    );

    if (!confirmed) return;

    progress = {};
    appState = createDefaultState();

    saveProgress();
    saveState();

    renderChapterList();

    if (currentChapter) {
        showChapter(currentChapter);
    } else if (elements.lessonPreview) {
        elements.lessonPreview.hidden = true;
    }

    updateProgressDisplay();
    showToast("Your progress has been reset.");
}

    // =========================================================
    // LEVEL SELECTION
    // =========================================================

    
function selectLevel(level) {
    if (!levelInformation[level]) return;

    currentLevel = level;
    currentChapter = null;

    document.querySelectorAll(".level-card").forEach(card => {
        const selected = card.dataset.level === level;

        card.classList.toggle("active", selected);
        card.setAttribute("aria-pressed", String(selected));
    });

    if (elements.levelTitle) {
        elements.levelTitle.textContent = levelInformation[level].title;
    }

    if (elements.levelDescription) {
        elements.levelDescription.textContent =
            levelInformation[level].description;
    }

    if (ui.chapterSearch) {
        ui.chapterSearch.value = "";
    }

    renderChapterList();

    if (elements.lessonPreview) {
        elements.lessonPreview.hidden = true;
    }

    updateProgressDisplay();
}
    // =========================================================
    // CHAPTER LIST AND NAVIGATION
    // =========================================================

    function renderChapterList() {
        if (!elements.chapterList) return;

        elements.chapterList.innerHTML = "";

        const query = ui.chapterSearch
            ? ui.chapterSearch.value.trim().toLowerCase()
            : "";

        let shown = 0;

        levelInformation[currentLevel].chapters.forEach(([id, title], index) => {
            if (query && !title.toLowerCase().includes(query)) return;

            shown++;

            const published = getPublishedChapter(currentLevel, id);
            const completed = isCompleted(currentLevel, id);
            const score = appState.quizScores[getChapterKey(currentLevel, id)];
            const active = id === currentChapter;

            const challengeSolved = appState.challenges[getChapterKey(currentLevel, id)] === true;

            const statusParts = published
                ? [
                    score ? `Best quiz score: ${score.best}/${score.total}` : "Available now",
                    challengeSolved ? "Challenge solved" : ""
                ]
                : ["In development"];

            const status = statusParts.filter(Boolean).join(" · ");

            const button = document.createElement("button");
            button.type = "button";
            button.className = "chapter-card";

            button.classList.toggle("active", active);
            button.classList.toggle("completed", completed);
            button.classList.toggle("locked", !published);

            if (active) {
                button.setAttribute("aria-current", "true");
            }

            button.innerHTML = `
                <span class="chapter-number">${index + 1}</span>

                <span class="chapter-details">
                    <strong>${escapeHTML(title)}</strong>
                    <small>${escapeHTML(status)}</small>
                </span>

                <span class="chapter-arrow">
                    ${completed ? "✓" : published ? "Start" : "Soon"}
                </span>
            `;

            button.addEventListener("click", () => {
                goToChapter(currentLevel, id);
            });

            elements.chapterList.appendChild(button);
        });

        if (!shown) {
            const empty = document.createElement("p");
            empty.className = "cq-empty";
            empty.textContent = `No chapters match "${query}".`;
            elements.chapterList.appendChild(empty);
        }
    }

    function getNeighbourChapter(direction) {
        const all = getAllChapters();
        const index = all.findIndex(chapter =>
            chapter.level === currentLevel && chapter.id === currentChapter
        );

        return index === -1 ? null : all[index + direction] || null;
    }

function goToChapter(level, chapterId) {
    if (!levelInformation[level]) return;

    const chapterExists = levelInformation[level].chapters.some(
        ([id]) => id === chapterId
    );

    if (!chapterExists) return;

    currentLevel = level;
    currentChapter = chapterId;

    document.querySelectorAll(".level-card").forEach(card => {
        const selected = card.dataset.level === level;
        card.classList.toggle("active", selected);
        card.setAttribute("aria-pressed", String(selected));
    });

    if (elements.levelTitle) {
        elements.levelTitle.textContent = levelInformation[level].title;
    }

    if (elements.levelDescription) {
        elements.levelDescription.textContent =
            levelInformation[level].description;
    }

    renderChapterList();
    showChapter(chapterId);

    // Wait for the lesson and its extra elements to finish rendering.
       // Wait for the lesson to finish rendering.
        // Scroll to the complete lesson after Chapter 1 finishes rendering.
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            setTimeout(() => {
                if (!elements.lessonPreview) return;
                if (elements.lessonPreview.hidden) return;

                elements.lessonPreview.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 500);
        });
    });
}

    function updateLessonNav() {
        if (!ui.lessonNav) return;

        const [previousButton, nextButton] = ui.lessonNav.querySelectorAll("button");
        const previous = getNeighbourChapter(-1);
        const next = getNeighbourChapter(1);

        previousButton.disabled = !previous;
        previousButton.textContent = previous ? `← ${previous.title}` : "";

        nextButton.disabled = !next;
        nextButton.textContent = next ? `${next.title} →` : "";
    }

    function updateLessonMeta(published) {
        if (!ui.lessonMeta) return;

        if (!published || !elements.lessonContent) {
            ui.lessonMeta.textContent = "Coming soon";
            return;
        }

        const words = elements.lessonContent.textContent
            .split(/\s+/)
            .filter(Boolean).length;

        const minutes = Math.max(1, Math.round(words / 200));
        const modeName = currentMode === "quick" ? "Quick Learn" : "Deep Learn";
        const status = isCompleted(currentLevel, currentChapter)
            ? " · Completed"
            : "";

        ui.lessonMeta.textContent = `${modeName} · about ${minutes} min read${status}`;
    }

    // =========================================================
    // MODE BUTTONS
    // =========================================================

    function updateModeButtons() {
        [
            [elements.quickMode, "quick"],
            [elements.deepMode, "deep"]
        ].forEach(([button, mode]) => {
            if (!button) return;

            button.classList.toggle("active", currentMode === mode);
            button.setAttribute("aria-pressed", String(currentMode === mode));
        });
    }

    function changeMode(mode) {
    if (mode !== "quick" && mode !== "deep") return;

    currentMode = mode;

    if (!currentChapter) return;

    showChapter(currentChapter);
}

    // =========================================================
    // RUNNABLE PYTHON CODE BLOCKS (Pyodide, loaded on first use)
    // =========================================================

    let pythonRuntimePromise = null;
    let pythonRuntimeReady = false;

    function loadPythonRuntime() {
        if (pythonRuntimePromise) return pythonRuntimePromise;

        pythonRuntimePromise = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = `${PYODIDE_URL}pyodide.js`;

            script.onload = () => {
                window.loadPyodide({ indexURL: PYODIDE_URL })
                    .then(pyodide => {
                        pythonRuntimeReady = true;
                        resolve(pyodide);
                    })
                    .catch(reject);
            };

            script.onerror = () => {
                reject(new Error(
                    "Could not load the Python runtime. Check your internet connection and try again."
                ));
            };

            document.head.appendChild(script);
        }).catch(error => {
            pythonRuntimePromise = null;
            throw error;
        });

        return pythonRuntimePromise;
    }

    function formatPythonError(error) {
        const message = String(error && error.message ? error.message : error).trim();
        const lines = message.split("\n");
        const lastLine = lines[lines.length - 1];

        const lineMatches = [...message.matchAll(/File "<exec>", line (\d+)/g)];
        const lineNumber = lineMatches.length
            ? lineMatches[lineMatches.length - 1][1]
            : null;

        return lineNumber ? `Line ${lineNumber}: ${lastLine}` : lastLine;
    }

    async function runPython(code, fileToClear = null) {
        const pyodide = await loadPythonRuntime();
        const output = [];

        pyodide.setStdout({ batched: text => output.push(text) });
        pyodide.setStderr({ batched: text => output.push(text) });
        pyodide.setStdin({
            stdin: () => {
                const value = window.prompt("Your program is asking for input:");
                return `${value === null ? "" : value}\n`;
            }
        });

        // Remove an old challenge file before running the student's code.
        if (fileToClear) {
            try {
                if (pyodide.FS.analyzePath(fileToClear).exists) {
                    pyodide.FS.unlink(fileToClear);
                }
            } catch (error) {
                // Ignore errors if the file does not exist.
            }
        }

        const namespace = pyodide.globals.get("dict")();

        try {
            await pyodide.runPythonAsync(code, { globals: namespace });

            return {
                ok: true,
                output: output.join("\n"),
                pyodide: pyodide
            };

        } catch (error) {
            output.push(formatPythonError(error));

            return {
                ok: false,
                output: output.join("\n"),
                pyodide: pyodide
            };

        } finally {
            namespace.destroy();
        }
    }

    function isOutputBlock(pre) {
        const previous = pre.previousElementSibling;
        return Boolean(previous) && /^\s*output\b/i.test(previous.textContent);
    }

    function makeEditable(code) {
        try {
            code.contentEditable = "plaintext-only";
        } catch (error) {
            code.contentEditable = "true";
        }

        code.spellcheck = false;
        code.setAttribute("aria-label", "Editable Python code");
    }

    function enhanceCodeBlocks() {
        if (!elements.lessonContent) return;

        elements.lessonContent.querySelectorAll("pre").forEach(pre => {
            if (pre.closest(".cq-code") || isOutputBlock(pre)) return;

            const code = pre.querySelector("code") || pre;
            const originalCode = code.textContent;

            const wrapper = document.createElement("div");
            wrapper.className = "cq-code";
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);

            makeEditable(code);

            const toolbar = document.createElement("div");
            toolbar.className = "cq-code-toolbar";
            toolbar.innerHTML = `
                <button type="button" class="cq-run">Run</button>
                <button type="button" class="cq-copy">Copy</button>
                <button type="button" class="cq-reset-code">Reset</button>
                <small>Edit the code, then press Run (Ctrl + Enter)</small>
            `;

            const output = document.createElement("pre");
            output.className = "cq-run-output";
            output.setAttribute("aria-live", "polite");
            output.hidden = true;

            wrapper.append(toolbar, output);

            const runButton = toolbar.querySelector(".cq-run");
            const copyButton = toolbar.querySelector(".cq-copy");

            const run = async () => {
                runButton.disabled = true;
                runButton.textContent = pythonRuntimeReady ? "Running..." : "Loading Python...";
                output.hidden = false;
                output.classList.remove("cq-error");
                output.textContent = pythonRuntimeReady
                    ? "Running..."
                    : "Loading Python for the first time. This can take a few seconds...";

                try {
                    const result = await runPython(code.innerText);

                    output.textContent = result.output || "(Program ran with no output)";
                    output.classList.toggle("cq-error", !result.ok);
                    appState.codeRuns += 1;
                    saveState();
                    recordActivity();
                    checkBadges();
                } catch (error) {
                    output.textContent = error.message;
                    output.classList.add("cq-error");
                } finally {
                    runButton.disabled = false;
                    runButton.textContent = "Run";
                }
            };

            runButton.addEventListener("click", run);

            code.addEventListener("keydown", event => {
                if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
                    event.preventDefault();
                    run();
                }
            });

            copyButton.addEventListener("click", () => {
                if (!navigator.clipboard) {
                    showToast("Copying is not supported in this browser.");
                    return;
                }

                navigator.clipboard.writeText(code.innerText)
                    .then(() => {
                        copyButton.textContent = "Copied!";
                        setTimeout(() => {
                            copyButton.textContent = "Copy";
                        }, 1500);
                    })
                    .catch(() => showToast("Could not copy the code."));
            });

            toolbar.querySelector(".cq-reset-code").addEventListener("click", () => {
                code.textContent = originalCode;
                output.hidden = true;
                output.textContent = "";
            });
        });
    }

    // =========================================================
    // CHAPTER QUIZ
    // =========================================================

    function attachQuizHandler() {
        const checkButton = document.getElementById("checkChapterQuiz");

        if (!checkButton) return;

        const result = document.getElementById("chapterQuizResult");
        const key = getChapterKey(currentLevel, currentChapter);
        const savedScore = appState.quizScores[key];

        if (result && savedScore) {
            result.textContent = `Your best score so far: ${savedScore.best}/${savedScore.total}.`;
        }

        let retryButton = document.getElementById("retryChapterQuiz");

        if (!retryButton) {
            retryButton = document.createElement("button");
            retryButton.type = "button";
            retryButton.id = "retryChapterQuiz";
            retryButton.className = "cq-retry";
            retryButton.textContent = "Try again";
            retryButton.hidden = true;
            checkButton.insertAdjacentElement("afterend", retryButton);
        }

        retryButton.onclick = () => {
            document.querySelectorAll(".cq-question").forEach(question => {
                question.querySelectorAll('input[type="radio"]').forEach(input => {
                    input.checked = false;
                });

                const feedback = question.querySelector(".cq-feedback");

                if (feedback) {
                    feedback.textContent = "";
                }
            });

            if (result) {
                result.textContent = "";
            }

            retryButton.hidden = true;
        };

        // Assigning onclick replaces the previous handler.
        // This prevents duplicate quiz checking after switching modes.
        checkButton.onclick = () => {
            const questions = document.querySelectorAll(".cq-question");
            const total = questions.length;

            let score = 0;
            let answered = 0;

            questions.forEach(question => {
                const correctAnswer = question.dataset.answer;
                const selected = question.querySelector(
                    'input[type="radio"]:checked'
                );

                const feedback = question.querySelector(".cq-feedback");

                if (!feedback) return;

                if (!selected) {
                    feedback.textContent = "Please select an answer.";
                    feedback.style.color = "#d97706";
                    return;
                }

                answered++;

                if (selected.value === correctAnswer) {
                    score++;

                    feedback.textContent = "Correct! Well done.";
                    feedback.style.color = "#16a34a";
                } else {
                    const correctOption = question.querySelector(
                        `input[value="${correctAnswer}"]`
                    );

                    const correctText = correctOption
                        ? correctOption.parentElement.textContent.trim()
                        : "the correct option";

                    feedback.textContent =
                        `Incorrect. Correct answer: ${correctText}. Revise this topic and try again.`;

                    feedback.style.color = "#dc2626";
                }
            });

            if (!result) return;

            result.style.fontWeight = "bold";

            if (answered < total) {
                result.textContent =
                    `You answered ${answered} of ${total} questions. Answer all of them to save your score.`;
                return;
            }

            const previousBest = appState.quizScores[key]
                ? appState.quizScores[key].best
                : 0;

            if (score > previousBest) {
                appState.quizScores[key] = { best: score, total };
                saveState();
                addXP((score - previousBest) * XP_PER_CORRECT_ANSWER, "new best quiz score");
                renderChapterList();
            }

            const best = Math.max(score, previousBest);

            result.textContent =
                `Your score is ${score}/${total}. Best score: ${best}/${total}.`;

            retryButton.hidden = score === total;
            recordActivity();

            if (score === total) {
                showToast("Perfect score! You have mastered this chapter.", "success");
            } else if (score / total >= 0.8 && !isCompleted(currentLevel, currentChapter)) {
                showToast("Great result. You can mark this lesson as completed.");
            }
        };
    }

    // =========================================================
    // DISPLAY LESSON
    // =========================================================

    function showChapter(chapterId) {
        currentChapter = chapterId;

        if (elements.lessonPreview) {
            elements.lessonPreview.hidden = false;
        }

        const chapter = getPublishedChapter(currentLevel, chapterId);

        if (!chapter) {
            if (elements.lessonTitle) {
                elements.lessonTitle.textContent =
                    findChapterTitle(currentLevel, chapterId);
            }

            if (elements.lessonContent) {
                elements.lessonContent.innerHTML = `
                    <section class="lesson-section">
                        <h2>This chapter is being developed.</h2>

                        <p>We are preparing the complete lesson with detailed
                        explanations, examples, outputs, practice exercises,
                        and knowledge checks.</p>

                        <p>It will not be marked as completed until its lesson
                        content is available.</p>
                    </section>
                `;
            }

            if (elements.completeLesson) {
                elements.completeLesson.disabled = true;
                elements.completeLesson.textContent =
                    "Lesson not available yet";
            }

            updateModeButtons();
            updateLessonMeta(false);
            updateLessonNav();
            rememberPosition();
            return;
        }

        if (elements.lessonTitle) {
            elements.lessonTitle.textContent = chapter.title;
        }

        if (elements.lessonContent) {
            elements.lessonContent.innerHTML = chapter[currentMode];
        }

        if (elements.completeLesson) {
            elements.completeLesson.disabled = false;

            elements.completeLesson.textContent =
                isCompleted(currentLevel, chapterId)
                    ? "Lesson completed ✓"
                    : "Mark lesson as completed";
        }

        updateModeButtons();
        updateLessonMeta(true);
        updateLessonNav();
        enhanceCodeBlocks();
        renderChallenge();
        attachQuizHandler();
        rememberPosition();

        if (
            typeof window.makeGlossaryTermsClickable === "function" &&
            elements.lessonContent instanceof Node
        ) {
            window.makeGlossaryTermsClickable(elements.lessonContent);
        }
    }

    // =========================================================
    // OPEN AND CLOSE COURSE
    // =========================================================

    function openPythonCourse() {
    if (!elements.coursePage) return;

    elements.coursePage.hidden = false;

    const last = appState.lastVisited;

    if (last && (last.mode === "quick" || last.mode === "deep")) {
        currentMode = last.mode;
    }

    const startingLevel =
        last && levelInformation[last.level]
            ? last.level
            : "beginner";

    // Open the course without automatically selecting a chapter.
    selectLevel(startingLevel);

    scrollToElement(elements.coursePage);
}

    function closeCourse() {
        if (elements.coursePage) {
            elements.coursePage.hidden = true;
        }

        const languageSection = document.querySelector(".languages");

        if (languageSection) {
            scrollToElement(languageSection);
        }
    }

    // =========================================================
    // EVENT LISTENERS
    // =========================================================

    injectUI();

    // Start Learning should take the user to language selection.
    // It should not automatically open a Python course.
    if (elements.startButton) {
        elements.startButton.addEventListener("click", () => {
            const languageSection = document.querySelector(".languages");

            if (languageSection) {
                scrollToElement(languageSection);
            }
        });
    }

    // Language selection.
    document.querySelectorAll(".language-card").forEach(card => {
        card.setAttribute("aria-pressed", "false");

        card.addEventListener("click", () => {
            document.querySelectorAll(".language-card").forEach(otherCard => {
                otherCard.classList.remove("active");
                otherCard.setAttribute("aria-pressed", "false");
            });

            card.classList.add("active");
            card.setAttribute("aria-pressed", "true");

            const languageName = card.textContent
                .trim()
                .replace(/^[^\w]+/, "")
                .toLowerCase();

            if (languageName.includes("python")) {
                openPythonCourse();
            } else {
                showToast(
                    "This language course is planned and will be available soon. Python is available now."
                );
            }
        });
    });

    // Level selection.
    document.querySelectorAll(".level-card").forEach(card => {
        card.addEventListener("click", () => {
            const level = card.dataset.level;

            if (level) {
                selectLevel(level);
            }
        });
    });

    // Quick Learn button.
    if (elements.quickMode) {
        elements.quickMode.addEventListener("click", () => {
            changeMode("quick");
        });
    }

    // Deep Learn button.
    if (elements.deepMode) {
        elements.deepMode.addEventListener("click", () => {
            changeMode("deep");
        });
    }

    // Mark lesson as completed.
    if (elements.completeLesson) {
        elements.completeLesson.addEventListener("click", () => {
            const chapter = getPublishedChapter(
                currentLevel,
                currentChapter
            );

            if (!chapter || isCompleted(currentLevel, currentChapter)) return;

            progress[getChapterKey(currentLevel, currentChapter)] = true;

            saveProgress();
            recordActivity();
            addXP(XP_PER_LESSON, "lesson completed");
            updateProgressDisplay();
            renderChapterList();
            updateLessonMeta(true);

            elements.completeLesson.textContent = "Lesson completed ✓";
        });
    }

    // Back button.
    if (elements.backButton) {
        elements.backButton.addEventListener("click", closeCourse);
    }

    // =========================================================
    // INITIAL APP SETUP
    // =========================================================

    if (elements.coursePage) {
        elements.coursePage.hidden = true;
    }

    if (elements.lessonPreview) {
        elements.lessonPreview.hidden = true;
    }

    updateProgressDisplay();
    checkBadges({ silent: true });

    // Keep the initial selected level consistent.
    document.querySelectorAll(".level-card").forEach(card => {
        const selected = card.dataset.level === "beginner";

        card.classList.toggle("active", selected);
        card.setAttribute("aria-pressed", String(selected));
    });

});