.navigation_bar {
    margin-top: 45px;
    height: 45px;
    font-family: var(--font1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: brown;
    position: sticky;
  }
  
  .nav_left{
      font-size: 50px;
      display: flex;
  }
  
  .nav_left ul li{
      list-style: none;
      margin: 0 12px;
      font-family: var(--font2);
      transition: all 0.3s ease-in-out;
  }
  
  .nav_left ul li a:hover{
      color: rgb(100, 159, 237);
      font-weight: bolder;
  }
  
  .nav_left ul li a{
      text-decoration: none;
      color: crimson;
  }
  
  .nav_left ul{
      display: flex;
      align-items: center;
      margin: 0 45px;
      font-size: 25px;
      font-weight: bold;
  }
  
  .nav_right{
      font-size: 22px;
  }
  