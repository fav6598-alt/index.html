<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cultural Exhibition</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    body {
      background: linear-gradient(to right, #fef3c7, #ffffff, #d1fae5);
      color: #222;
    }

    header {
      background: #166534;
      color: white;
      padding: 20px;
      text-align: center;
    }

    header h1 {
      font-size: 45px;
    }

    header p {
      margin-top: 10px;
      font-size: 18px;
    }

    nav {
      margin-top: 15px;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin: 0 15px;
      font-weight: bold;
    }

    .hero {
      text-align: center;
      padding: 60px 20px;
    }

    .hero h2 {
      font-size: 40px;
      margin-bottom: 20px;
    }

    .hero p {
      font-size: 18px;
      max-width: 700px;
      margin: auto;
      line-height: 1.6;
    }

    .btn {
      display: inline-block;
      margin-top: 25px;
      padding: 12px 25px;
      background: #166534;
      color: white;
      text-decoration: none;
      border-radius: 10px;
      transition: 0.3s;
    }

    .btn:hover {
      background: #14532d;
    }

    .section-title {
      text-align: center;
      margin: 50px 0 20px;
      font-size: 35px;
    }

    .culture-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      padding: 20px;
    }

    .culture-card {
      background: white;
      width: 260px;
      border-radius: 15px;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }

    .culture-card:hover {
      transform: translateY(-8px);
    }

    .culture-card h3 {
      margin-bottom: 15px;
      color: #166534;
    }

    .culture-card p {
      margin: 8px 0;
    }

    .schedule {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      padding: 30px;
    }

    .schedule-box {
      background: white;
      width: 280px;
      padding: 20px;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    .schedule-box h3 {
      color: #166534;
      margin-bottom: 10px;
    }

    footer {
      background: #166534;
      color: white;
      text-align: center;
      padding: 20px;
      margin-top: 40px;
    }

    @media(max-width: 768px) {
      .hero h2 {
        font-size: 30px;
      }

      .culture-card,
      .schedule-box {
        width: 90%;
      }
    }
  </style>
</head>
<body>

  <header>
    <h1>Secondary School Cultural Exhibition</h1>
    <p>Celebrating Unity in Diversity</p>

    <nav>
      <a href="#home">Home</a>
      <a href="#cultures">Cultures</a>
      <a href="#schedule">Schedule</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section class="hero" id="home">
    <h2>Welcome to Our Cultural Day</h2>
    <p>
      Explore the beauty of Nigerian cultures through traditional foods,
      dances, music, fashion, and drama presentations by students.
    </p>

    <a href="#cultures" class="btn">Explore Cultures</a>
  </section>

  <h2 class="section-title" id="cultures">Featured Cultures</h2>

  <section class="culture-container">

    <div class="culture-card">
      <h3>Yoruba Culture</h3>
      <p><strong>Food:</strong> Amala & Ewedu</p>
      <p><strong>Attire:</strong> Agbada</p>
      <p><strong>Dance:</strong> Bata Dance</p>
    </div>

    <div class="culture-card">
      <h3>Igbo Culture</h3>
      <p><strong>Food:</strong> Fufu & Oha Soup</p>
      <p><strong>Attire:</strong> Isi Agu</p>
      <p><strong>Dance:</strong> Atilogwu Dance</p>
    </div>

    <div class="culture-card">
      <h3>Hausa Culture</h3>
      <p><strong>Food:</strong> Tuwo Shinkafa</p>
      <p><strong>Attire:</strong> Babban Riga</p>
      <p><strong>Dance:</strong> Koroso Dance</p>
    </div>

    <div class="culture-card">
      <h3>Efik Culture</h3>
      <p><strong>Food:</strong> Edikang Ikong</p>
      <p><strong>Attire:</strong> Wrapper & Beads</p>
      <p><strong>Dance:</strong> Ekombi Dance</p>
    </div>

  </section>

  <h2 class="section-title" id="schedule">Event Schedule</h2>

  <section class="schedule">

    <div class="schedule-box">
      <h3>Morning</h3>
      <p>Opening Prayer & Cultural Parade</p>
    </div>

    <div class="schedule-box">
      <h3>Afternoon</h3>
      <p>Dance, Drama & Food Exhibition</p>
    </div>

    <div class="schedule-box">
      <h3>Evening</h3>
      <p>Award Presentation & Closing Ceremony</p>
    </div>

  </section>

  <footer id="contact">
    <h3>Unity Through Culture</h3>
    <p>Secondary School Cultural Exhibition © 2026</p>
  </footer>

</body>
</html>
