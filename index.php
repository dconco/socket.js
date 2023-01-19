<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <?php 
        include("socket.sok");

        _var("x", "Hello world for php");
        echo $x;
    ?>
    <script>
        _get("x");
        alert(x);

        _var("y", "Hello world for JS");
        alert(y);
    </script>
    <?php
        echo "$y";
        _get("y");
    ?>
</body>
</html>