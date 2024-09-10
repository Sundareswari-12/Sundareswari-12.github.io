<!DOCTYPE html>
<html lang="en">
    /* Image styling */
    .profile-img {
      width: 150px;
      height: auto;
      border-radius: 8px;
    }

    /* Right-side content */
    .info {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    /* Name and email alignment */
    .info h1 {
      margin: 0;
      font-size: 1.8em;
    }

    .info p {
      margin: 5px 0;
    }

    /* Self-introduction */
    .info .introduction {
      margin-top: 10px;
      font-size: 1em;
      line-height: 1.6;
    }

    /* Link styles */
    .sections a {
      color: blue;
      text-decoration: none;
      font-size: 1.1em;
    }

    .sections a:hover {
      text-decoration: underline;
    }

    /* Responsive design for smaller screens */
    @media screen and (max-width: 768px) {
      .container {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .profile-img {
        margin-bottom: 20px;
      }

      .info {
        align-items: center;
      }
    }
  </style>
</head>
<body>

  <div class="container">
    <!-- Name, email, and self-introduction on the left -->
    <div class="info">
      <h1>Sundareswari Thiyagarajan</h1>
      <p><strong>Email:</strong> <a href="mailto:tsundareswari@gmail.com">tsundareswari@gmail.com</a></p>
      <p class="introduction">
        As an aspiring AI student, I am passionate about using data and machine learning to drive innovation and solve complex problems. I combine a strong analytical foundation with a creative mindset to build models that are not only accurate but also adaptable to real-world challenges. My expertise spans neural networks, deep learning, and AI-driven decision-making. I enjoy working on projects that push the boundaries of what AI can do, from predictive modeling to creative problem-solving applications.
      </p>
    </div>

    <!-- Image on the right -->
    <img src="photo.jpeg" alt="Sundareswari Thiyagarajan" class="profile-img">
  </div>

  <hr>

  <!-- Links to sections -->
  <section class="sections">
    <h2>Quick Links</h2>
    <ul>
      <li><a href="CV.pdf">CV</a></li>
      <li><a href="https://github.com/Sundareswari-12" target="_blank">GitHub</a></li>
      <li><a href="#internships">Internships</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#research">Research</a></li>
      <li><a href="#certifications">Certifications</a></li>
    </ul>
  </section>

  <hr>

  <!-- Internship Section -->
  <section id="internships">
    <h2>Internships</h2>
    <ul>
      <li>
        <a href="https://gurpreetsinghwsu.github.io/cv/projects.html"><strong>AI to Detect Criminal Cars with License Plate</strong> (2024)</a><br>
        Worked on developing an AI model to identify criminal vehicles using license plate recognition. The project involved computer vision and deep learning techniques.
      </li>
      <!-- Add more internships as needed -->
    </ul>
  </section>

  <hr>

  <!-- Projects Section -->
  <section id="projects">
    <h2>Projects</h2>
    <ul>
      <li>
        <strong>STOCK MARKET PREDICTION USING SENTIMENTAL ANALYSIS</strong> (2023)<br>
        Using NLP and machine learning techniques to classify each piece of text as positive, negative, or neutral sentiment. LSTM and polarity score are used to predict the stock prices.
      </li>
      <li>
        <strong>EMBRYO DETECTION IN BANANA USING ARDUINO</strong> (2022)<br>
        Developed a handheld portable device for viable embryo detection, funded by CSRC under the Research Support Scheme "Student Innovative Project".
      </li>
      <li>
        <strong>THE PARKINSON’S DISEASE DETECTION USING MACHINE LEARNING TECHNIQUES (</strong> (2024)<br>
        Detecting Parkinsons disease using Spiral test , where the input images are trained with Random Forest Classifier. To implement Parkinson’s detector deep learning and Convolutional Neural Networks (CNNs) are used.
      </li>
      <!-- Add more projects as needed -->
    </ul>
  </section>

  <hr>

  <!-- Research Section -->
  <section id="research">
    <h2>Research</h2>
    <ul>
      <li>
        <a href="link-to-pdf.pdf">The Multiple Approaches for Drug-Drug Interaction Extraction using Machine Learning and Transformer-based Model</a><br>
        Gurpreet Singh, Dr. Kim Yong Il, Renuka Ramasamy, Sundareswari Thiyagarajan<br>
        <em>Journal on Artificial Intelligence 2024 (Under Review)</em>
      </li>
      <li>
        <a href="link-to-pdf.pdf">A Multi-Model Approach: Stress Detection using Physiological Signals with LSTM and XGBoost</a><br>
        Dr. Saurabh Singh, Gurpreet Singh, Renuka Ramasamy, Sundareswari Thiyagarajan<br>
        <em>IEEE Access 2024 (Under Review)</em>
      </li>
    </ul>
  </section>

  <hr>

  <!-- Certifications Section -->
  <section id="certifications">
    <h2>Certifications & Awards</h2>
    <ul>
      <li>Texas Instruments Online contest participation in the IICDC-2019-LIC (Oct 2019).</li>
      <li>Texas Instruments Online contest participation in the IICDC-2019-MSP (Oct 2019).</li>
      <li>React JS Workshop conducted by Madras Institute of Technology, Anna University, Chennai (May 2022).</li>
      <li>Handheld portable device for viable embryo detection in banana breeding program funded by CSRC under Research Support Scheme "Student Innovative Project" (July - Dec 2022).</li>
      <li>NCC ‘C’ Certificate provided by Ministry of Defence, Government of India (2022).</li>
      <li>Internship Certificate for AI to detect Criminal Cars with License Plate (2024).</li>
    </ul>
  </section>

</body>
</html>
