#!/bin/bash

PROJECTS=$(ls projects)

cat > index.html <<EOL
<!DOCTYPE html>
<html>
<head>
<title>Irfan Ahmed | Portfolio</title>
<style>
body {background:#0f172a; color:white; font-family:Arial;}
.card {background:#1e293b; padding:15px; margin:10px;}
</style>
</head>

<body>

<h1>Irfan Ahmed</h1>

<h2>Projects</h2>
EOL

for p in $PROJECTS; do
echo "<div class='card'>$p</div>" >> index.html
done

cat >> index.html <<EOL
</body>
</html>
EOL

echo "✅ Projects added"
