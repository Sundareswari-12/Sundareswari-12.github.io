<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sundareswari Thiyagarajan</title>
  <style>
    /* Basic styling */
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    /* Email and name alignment */
    .info h1 {
      margin: 0;
      font-size: 1.5em;
    }

    .info p {
      margin: 5px 0;
    }

    /* Flexbox container for the image and contact details */
    .container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    /* Image styling */
    .profile-img {
      width: 150px;
      height: auto;
      margin-right: 20px;
    }

    /* Right-side content */
    .info {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    /* Responsive design for smaller screens */
    @media screen and (max-width: 768px) {
      .container {
        flex-direction: column;
        align-items: center;
      }

      .profile-img {
        margin-bottom: 20px;
      }

      .info {
        align-items: center;
        text-align: center;
      }
    }
  </style>
</head>
<body>

  <div class="container">
    <!-- Image on the left -->
    <img src="photo.jpeg" alt="Sundareswari Thiyagarajan" class="profile-img">

    <!-- Name and email on the right -->
    <div class="info">
      <h1>Sundareswari Thiyagarajan</h1>
      <p><strong>Email:</strong> <a href="mailto:tsundareswari@gmail.com">tsundareswari@gmail.com</a></p>
    </div>
  </div>

  <hr>

  <a href="CV.pdf">CV</a>

  <hr>

  <h2>Recent Research</h2>
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

  <hr>

  <h2>Certifications & Awards</h2>
  <ul>
    <li>Texas Instruments Online contest participation in the IICDC-2019-LIC (Oct 2019).</li>
    <li>Texas Instruments Online contest participation in the IICDC-2019-MSP (Oct 2019).</li>
    <li>React JS Workshop conducted by Madras Institute of Technology, Anna University, Chennai (May 2022).</li>
    <li>Handheld portable device for viable embryo detection in banana breeding program funded by CSRC under Research Support Scheme "Student Innovative Project" (July - Dec 2022).</li>
    <li>NCC ‘C’ Certificate provided by Ministry of Defence, Government of India (2022).</li>
    <li>Internship Certificate for AI to detect Criminal Cars with License Plate (2024).</li>
  </ul>

</body>
</html>
