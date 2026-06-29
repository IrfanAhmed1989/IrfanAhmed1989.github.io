#!/bin/bash

source data.txt

cat > index.html <<EOL
<!DOCTYPE html>
<html>
<head>
<title>$NAME | Portfolio</title>

<style>
body {font-family: Arial; background:#0f172a; color:white;}
section {max-width:900px; margin:auto; padding:30px;}
.card {background:#1e293b; padding:20px; margin:10px; border-radius:10px;}
.button {background:cyan; padding:10px; text-decoration:none; color:black;}
</style>

</head>

<body>

<section>

<h1>$NAME</h1>
<p>$TITLE</p>

<h2>Links</h2>
<a href="$GITHUB" class="button">GitHub</a>
<a href="$LINKEDIN" class="button">LinkedIn</a>
<p>Email: $EMAIL</p>

<h2>Projects</h2>
<div class="card">Automation Toolkit (Python)</div>
<div class="card">Prime Checker (Java)</div>

<h2>Resume</h2>
<a href="resume.pdf" class="button">Download Resume</a>

</section>

</body>
</html>
EOL

echo "✅ Site updated successfully"
