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

    /* General mobile view adjustments */
    @media screen and (max-width: 768px) {
      body {
        margin: 10px;
      }
      .container {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .profile-img {
        margin-bottom: 20px;
        width: 120px; /* Slightly smaller image on mobile */
      }

      .info {
        align-items: center;
      }

      .sections {
        text-align: center;
        font-size: 1em; /* Slightly smaller font for mobile */
      }

      /* Make the sections more touch-friendly */
      .sections a {
        padding: 10px;
        display: inline-block;
      }

      .info .introduction {
        font-size: 0.9em;
        text-align: center; /* Added for centering text */
      }

      section ul {
        padding-left: 0;
        list-style: none; /* Remove bullet points on mobile for a cleaner look */
      }

      section ul li {
        margin-bottom: 10px;
      }
    }
</style>
