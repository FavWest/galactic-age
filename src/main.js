import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Planet from './planet.js';

$(document).ready(function() {
  let planet;
  let age;
  alert("JQuery connected");
  $("#mercury-age").click(function(event){
    event.preventDefault();
    age=parseInt($("#age").val());
    planet=new Planet(age);
    $(".planet-name").text("Mercury");
    $("#life-expectancy").text(planet.getLifeExpectancy("Mercury"));
    $("#planet-age").text(planet.getMercuryAge());
    $("#display-planet-age").show();
  });
  $("#venus-age").click(function(event){
    event.preventDefault();
    age=parseInt($("#age").val());
    planet=new Planet(age);
    $(".planet-name").text("Venus");
    $("#life-expectancy").text(planet.getLifeExpectancy("Venus"));
    $("#planet-age").text(planet.getVenusAge());
    $("#display-planet-age").show();
  });
  $("#mars-age").click(function(event){
    event.preventDefault();
    age=parseInt($("#age").val());
    planet=new Planet(age);
    $(".planet-name").text("Mars");
    $("#life-expectancy").text(planet.getLifeExpectancy("Mars"));
    $("#planet-age").text(planet.getMarsAge());
    $("#display-planet-age").show();
  });
  $("#jupiter-age").click(function(event){
    event.preventDefault();
    age=parseInt($("#age").val());
    planet=new Planet(age);
    $(".planet-name").text("Jupiter");
    $("#life-expectancy").text(planet.getLifeExpectancy("Jupiter"));
    $("#planet-age").text(planet.getJupiterAge());
    $("#display-planet-age").show();
  });
});