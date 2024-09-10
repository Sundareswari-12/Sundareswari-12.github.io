<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Profile</title>
  <style>
    /* Basic styling */
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }

    /* Flexbox container for the image and contact details */
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px; /* Space between the image and info */
    }
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

    /* Email alignment */
    .info p {
      margin: 5px 0;
    }

    /* Self-introduction */
    .info .introduction {
      margin-top: 10px;
      font-size: 1em;
      line-height: 1.6;
    }

    /* Horizontal Quick Links */
    .sections {
      font-size: 1.1em;
    }

    .sections a {
      color: blue;
      text-decoration: none;
    }

    .sections a:hover {
      text-decoration: underline;
    }

    /* Styling for horizontal links with slashes */
    .sections span {
      margin: 0 5px;
      color: black; /* This makes the slashes neutral */
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

      .sections {
        text-align: center;
      }
    }
  </style>
</head>
<body>

  <div class="container">
    <!-- Email and self-introduction on the left -->
    <div class="info">
      <p><strong>Email:</strong> <a href="mailto:tsundareswari@gmail.com">tsundareswari@gmail.com</a></p>
      <p class="introduction">
        As an aspiring AI student, I am passionate about using data and machine learning to drive innovation and solve complex problems. I combine a strong analytical foundation with a creative mindset to build models that are not only accurate but also adaptable to real-world challenges. My expertise spans neural networks, deep learning, and AI-driven decision-making. I enjoy working on projects that push the boundaries of what AI can do, from predictive modeling to creative problem
