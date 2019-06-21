<template>
       <router-view />
</template>

<style>
  .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;  
  }
  .button-detail {background-color: #008CBA;} /* Blue */
  
  .progress {
    background-color: #ffb144; /* Green */
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    border-radius: 10px;  
  }

  body {
    background-color: #444444;
    font-family: Verdana, Helvetica, Arial;
    font-size: 14px;
  }
  a img {
    border: none;
  }
  a {
    color: #0000FF;
    text-decoration: none;
  }
  a:hover{
    color: #75a0ff;
  }
  .clear {
    clear: both;
    height: 0;
    overflow: hidden;
  }

  #app {
    width: 70%;
    margin: 0 auto;
    background-color: #FFF;
    padding: 20px 40px;
    border: solid 1px black;
    margin-top: 20px;
    position: relative;
  }
  #flash_notice, #flash_error, #flash_alert {
    padding: 5px 8px;
    margin: 10px 0;
    margin-right: 150px;
  }
  #flash_notice {
    background-color: #CFC;
    border: solid 1px #6C6;
  }
  #flash_error, #flash_alert {
    background-color: #FCC;
    border: solid 1px #C66;
  }
  .field_with_errors {
    display: inline;
  }
  .error_messages {
    width: 400px;
    border: 2px solid #CF0000;
    padding: 0px;
    padding-bottom: 12px;
    margin-bottom: 20px;
    background-color: #f0f0f0;
    font-size: 12px;
  }
  .error_messages h2 {
    text-align: left;
    font-weight: bold;
    padding: 5px 10px;
    font-size: 12px;
    margin: 0;
    background-color: #c00;
    color: #fff;
  }
  .error_messages p {
    margin: 8px 10px;
  }
  form .field, form .actions {
    margin: 12px 0;
  }
  h4 {
     margin-top: 0px;
    margin-bottom: 18px;
  }
  h3{
    margin-top: 0;
  }
  table {
      border-collapse: collapse;
      width: 100%;
  }
  th, td {
      text-align: left;
      padding: 8px;
      border: 1px solid #ddd;
  }


  tr:nth-child(even){background-color: #f2f2f2}
  th {
    border: 1px solid white;
      background-color: #008CBA;
      color: white;
  }
  p{
    line-height: 1.6;
    text-align: justify
  }
  
</style>