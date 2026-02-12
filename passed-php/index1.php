<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    class User{
        public $name;
        public $password;
        public $email;

        function __construct($name, $password, $email){
            $this->name= $name;
            $this->password = $password;
            $this->email = $email;
        }

        function getInfo(){
            return "{$this->name}"."{$this->password}"."{$this->email}";
        }
    }

    $user = new User('Alex', '123456', 'Test@gmail.com');
    var_dump($user);

    $user->getInfo();

    class DestractionClass
    {
        function __construct(){
            
            $this->UserName = "Text";

        }   
        function __destruct(){
            $this->UserName;
        }
    }
    $obj = new DestractionClass();
    
    ?>
</body>
</html>