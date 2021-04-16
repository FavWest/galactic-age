import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Planet from './planet.js';



$(document).ready(function() {
  let planet;
  let age;

  function checkNaN(age){
    if(Number.isNaN(age)){
      $("#display-planet-age").hide();
      $("#reminder").show();
      console.log("you are here");
    } else {
      $("#display-planet-age").show();
      $("#reminder").hide();
    }
  }

  $("#mercury-age").click(function(event){
    event.preventDefault();
    age=parseInt($("#age").val());
    checkNaN(age);
    planet=new Planet(age);
    $(".planet-name").text("Mercury");
    $("#life-expectancy").text(planet.getLifeExpectancy("Mercury"));
    $("#planet-age").text(planet.getMercuryAge());
  });
  $("#venus-age").click(function(event){
    event.preventDefault();
    age=parseInt($("#age").val());
    checkNaN(age);
    planet=new Planet(age);
    $(".planet-name").text("Venus");
    $("#life-expectancy").text(planet.getLifeExpectancy("Venus"));
    $("#planet-age").text(planet.getVenusAge());
  });
  $("#mars-age").click(function(event){
    event.preventDefault();
    age=parseInt($("#age").val());
    checkNaN(age);
    planet=new Planet(age);
    $(".planet-name").text("Mars");
    $("#life-expectancy").text(planet.getLifeExpectancy("Mars"));
    $("#planet-age").text(planet.getMarsAge());
  });
  $("#jupiter-age").click(function(event){
    event.preventDefault();
    age=parseInt($("#age").val());
    checkNaN(age);
    planet=new Planet(age);
    $(".planet-name").text("Jupiter");
    $("#life-expectancy").text(planet.getLifeExpectancy("Jupiter"));
    $("#planet-age").text(planet.getJupiterAge());
  });
});