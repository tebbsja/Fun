$(document).ready(function() {

  $("#test").click(function(){

    var card1 = Math.floor((Math.random() * 58) + 1);

    var card2 = Math.floor((Math.random() * 58) + 1);
    while (card2 == card1){
      var card2 = Math.floor((Math.random() * 58) + 1);
    }

    var card3 = Math.floor((Math.random() * 58) + 1);
    while (card3 == card1 || card3 == card2)
    {
      var card3 = Math.floor((Math.random() * 58) + 1);
    }

    var card4 = Math.floor((Math.random() * 58) + 1);
    while (card4 == card1 || card4 == card2 || card4 == card3)
    {
      var card4 = Math.floor((Math.random() * 58) + 1);
    }

    var card5 = Math.floor((Math.random() * 58) + 1);
    while (card5 == card1 || card5 == card2 || card5 == card3 || card5 == card4)
    {
      var card5 = Math.floor((Math.random() * 58) + 1);
    }

    var card6 = Math.floor((Math.random() * 58) + 1);
    while (card6 == card1 || card6 == card2 || card6 == card3 || card6 == card4 || card6 == card5)
    {
      var card6 = Math.floor((Math.random() * 58) + 1);
    }

    var card7 = Math.floor((Math.random() * 58) + 1);
    while (card7 == card1 || card7 == card2 || card7 == card3 || card7 == card4 || card7 == card5 || card7 == card6)
    {
      var card7 = Math.floor((Math.random() * 58) + 1);
    }

    var card8 = Math.floor((Math.random() * 58) + 1);
    while (card8 == card1 || card8 == card2 || card8 == card3 || card8 == card4 || card8 == card5 || card8 == card6 || card8 == card7)
    {
      var card8 = Math.floor((Math.random() * 58) + 1);
    }

    //$("#card1").text(card1);
    //$("#card1").html("<img src='http://images.pocketgamer.co.uk/images/featimgs/clashroyale-icons-archers.jpg'>");
    if (card1 == 1)
    {
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/a/af/ArchersCard.png/revision/latest/scale-to-width-down/200?cb=20160124213208'>")
    }
    else if (card1 == 2){
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/6/6e/ArrowsCard.png/revision/latest/scale-to-width-down/200?cb=20160120003751'>")

    }
    else if (card1 == 3){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/2e/BarbariansCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card1 == 4){
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/2/2b/BomberCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card1 == 5){
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/7/70/CannonCard.png/revision/latest/scale-to-width-down/200?cb=20160220212849'>")
    }
    else if (card1 == 6){
      $("#card1").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/e5/FireSpiritsCard.png/revision/latest/scale-to-width-down/200?cb=20160507182454'>")
    }
    else if (card1 == 7){
      $("#card1").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/b/bd/GoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213213'>")
    }
    else if (card1 == 8){
      $("#card1").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/54/KnightCard.png/revision/latest/scale-to-width-down/200?cb=20160319223232'>")
    }
    else if (card1 == 9){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/0/09/MinionHordeCard.png/revision/latest/scale-to-width-down/200?cb=20160124213501'>")
    }
    else if (card1 == 10){
      $("#card1").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b7/MinionsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213503'>")
    }
    else if (card1 == 11){
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1e/MortarCard.png/revision/latest/scale-to-width-down/200?cb=20160212230934'>")
    }
    else if (card1 == 12){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/8/8b/RoyalGiantCard.png/revision/latest?cb=20160302023049'>")
    }
    else if (card1 == 13){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/f/f0/SkeletonsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213515'>")
    }
    else if (card1 == 14){
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/37/SpearGoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213517'>")
    }
    else if (card1 == 15){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/27/TeslaCard.png/revision/latest/scale-to-width-down/200?cb=20160124213518'>")
    }
    else if (card1 == 16){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/52/ZapCard.png/revision/latest/scale-to-width-down/200?cb=20160124213524'>")
    }
    else if (card1 == 17){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/63/BarbarianHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213209'>")
    }
    else if (card1 == 18){
      $("#card1").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/f/f1/BombTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card1 == 19){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/33/ElixirCollectorCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card1 == 20){
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/f4/FireballCard.png/revision/latest?cb=20160318164945'>")
    }
    else if (card1 == 21){
      $("#card1").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/51/FurnaceCard.png/revision/latest?cb=20160518083429'>")
    }
    else if (card1 == 22){
      $("#card1").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b1/GiantCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card1 == 23){
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/da/GoblinHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card1 == 24){
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/30/HogRiderCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card1 == 25){
      $("#card1").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/3/34/InfernoTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card1 == 26){
      $("#card1").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/7/7b/MiniPEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160124213504'>")
    }
    else if (card1 == 27){
      $("#card1").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/ee/MusketeerCard.png/revision/latest?cb=20160514052151'>")
    }
    else if (card1 == 28){
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/fc/RocketCard.png/revision/latest/scale-to-width-down/218?cb=20160124213513'>")
    }
    else if (card1 == 29){
      $("#card1").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/c/c9/ThreeMusketeersCard.png/revision/latest?cb=20160401121106'>")
    }
    else if (card1 == 30){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/7/75/TombstoneCard.png/revision/latest/scale-to-width-down/218?cb=20160124213519'>")
    }
    else if (card1 == 31){
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/e/e2/ValkyrieCard.png/revision/latest/scale-to-width-down/218?cb=20160124213520'>")
    }
    else if (card1 == 32){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/49/WizardCard.png/revision/latest/scale-to-width-down/218?cb=20160124213522'>")
    }
    else if (card1 == 33){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/35/BabyDragonCard.png/revision/latest/scale-to-width-down/218?cb=20160120003759'>")
    }
    else if (card1 == 34){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/5b/BalloonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213208'>")
    }
    else if (card1 == 35){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/46/DarkPrinceCard.png/revision/latest?cb=20160301012029'>")
    }
    else if (card1 == 36){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cf/FreezeCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card1 == 37){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/6f/GiantSkeletonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card1 == 38){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/e/ee/GoblinBarrelCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card1 == 39){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d4/GolemCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card1 == 40){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/51/GuardsCard.png/revision/latest?cb=20160514062101'>")
    }
    else if (card1 == 41){
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/5/5e/LightningCard.png/revision/latest/scale-to-width-down/218?cb=20160124213214'>")
    }
    else if (card1 == 42){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cd/MirrorCard.png/revision/latest?cb=20160317213846'>")
    }
    else if (card1 == 43){
      $("#card1").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/f/fe/PEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160220212507'>")
    }
    else if (card1 == 44){
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/8/89/PoisonCard.png/revision/latest?cb=20160302020202'>")
    }
    else if (card1 == 45){
      $("#card1").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/be/PrinceCard.png/revision/latest/scale-to-width-down/218?cb=20160124213510'>")
    }
    else if (card1 == 46){
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1c/RageCard.png/revision/latest/scale-to-width-down/218?cb=20160124213511'>")
    }
    else if (card1 == 47){
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/d0/SkeletonArmyCard.png/revision/latest/scale-to-width-down/218?cb=20160124213514'>")
    }
    else if (card1 == 48){
      $("#card1").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/7/7f/WitchCard.png/revision/latest/scale-to-width-down/218?cb=20160124213521'>")
    }
    else if (card1 == 49){
      $("#card1").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b5/X-BowCard.png/revision/latest/scale-to-width-down/218?cb=20160124213523'>")
    }
    else if (card1 == 50){
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d3/IceWizardCard.png/revision/latest?cb=20160325170843'>")
    }
    else if (card1 == 51){
      $("#card1").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/d/de/LavaHoundCard.png/revision/latest?cb=20160503102247'>")
    }
    else if (card1 == 52){
      $("#card1").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/21/MinerCard.png/revision/latest?cb=20160507183028'>")
    }
    else if (card1 == 53){
      $("#card1").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/24/PrincessCard.png/revision/latest?cb=20160409191645'>")
    }
    else if (card1 == 54){
      $("#card1").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/3/33/SparkyCard.png/revision/latest?cb=20160503102306'>")
    }
    else if (card1 == 55) {
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/2/2c/IceSpiritCard.png/revision/latest/scale-to-width-down/200?cb=20160702201134'>")
    }
    else if (card1 == 56) {
      $("#card1").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/5/52/LumberjackCard.png/revision/latest?cb=20160702201153'>")
    }
    else if (card1 == 57) {
      $("#card1").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/4/4d/TheLogCard.png/revision/latest?cb=20160702201255'>")
    }
    else if (card1 == 58) {
      $("#card1").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/b/b8/BowlerCard.png/revision/latest/scale-to-width-down/218?cb=20160702201031'>")
    }

    if (card2 == 1)
    {
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/a/af/ArchersCard.png/revision/latest/scale-to-width-down/200?cb=20160124213208'>")
    }
    else if (card2 == 2){
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/6/6e/ArrowsCard.png/revision/latest/scale-to-width-down/200?cb=20160120003751'>")

    }
    else if (card2 == 3){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/2e/BarbariansCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card2 == 4){
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/2/2b/BomberCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card2 == 5){
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/7/70/CannonCard.png/revision/latest/scale-to-width-down/200?cb=20160220212849'>")
    }
    else if (card2 == 6){
      $("#card2").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/e5/FireSpiritsCard.png/revision/latest/scale-to-width-down/200?cb=20160507182454'>")
    }
    else if (card2 == 7){
      $("#card2").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/b/bd/GoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213213'>")
    }
    else if (card2 == 8){
      $("#card2").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/54/KnightCard.png/revision/latest/scale-to-width-down/200?cb=20160319223232'>")
    }
    else if (card2 == 9){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/0/09/MinionHordeCard.png/revision/latest/scale-to-width-down/200?cb=20160124213501'>")
    }
    else if (card2 == 10){
      $("#card2").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b7/MinionsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213503'>")
    }
    else if (card2 == 11){
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1e/MortarCard.png/revision/latest/scale-to-width-down/200?cb=20160212230934'>")
    }
    else if (card2 == 12){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/8/8b/RoyalGiantCard.png/revision/latest?cb=20160302023049'>")
    }
    else if (card2 == 13){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/f/f0/SkeletonsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213515'>")
    }
    else if (card2 == 14){
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/37/SpearGoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213517'>")
    }
    else if (card2 == 15){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/27/TeslaCard.png/revision/latest/scale-to-width-down/200?cb=20160124213518'>")
    }
    else if (card2 == 16){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/52/ZapCard.png/revision/latest/scale-to-width-down/200?cb=20160124213524'>")
    }
    else if (card2 == 17){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/63/BarbarianHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213209'>")
    }
    else if (card2 == 18){
      $("#card2").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/f/f1/BombTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card2 == 19){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/33/ElixirCollectorCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card2 == 20){
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/f4/FireballCard.png/revision/latest?cb=20160318164945'>")
    }
    else if (card2 == 21){
      $("#card2").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/51/FurnaceCard.png/revision/latest?cb=20160518083429'>")
    }
    else if (card2 == 22){
      $("#card2").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b1/GiantCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card2 == 23){
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/da/GoblinHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card2 == 24){
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/30/HogRiderCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card2 == 25){
      $("#card2").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/3/34/InfernoTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card2 == 26){
      $("#card2").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/7/7b/MiniPEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160124213504'>")
    }
    else if (card2 == 27){
      $("#card2").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/ee/MusketeerCard.png/revision/latest?cb=20160514052151'>")
    }
    else if (card2 == 28){
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/fc/RocketCard.png/revision/latest/scale-to-width-down/218?cb=20160124213513'>")
    }
    else if (card2 == 29){
      $("#card2").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/c/c9/ThreeMusketeersCard.png/revision/latest?cb=20160401121106'>")
    }
    else if (card2 == 30){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/7/75/TombstoneCard.png/revision/latest/scale-to-width-down/218?cb=20160124213519'>")
    }
    else if (card2 == 31){
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/e/e2/ValkyrieCard.png/revision/latest/scale-to-width-down/218?cb=20160124213520'>")
    }
    else if (card2 == 32){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/49/WizardCard.png/revision/latest/scale-to-width-down/218?cb=20160124213522'>")
    }
    else if (card2 == 33){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/35/BabyDragonCard.png/revision/latest/scale-to-width-down/218?cb=20160120003759'>")
    }
    else if (card2 == 34){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/5b/BalloonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213208'>")
    }
    else if (card2 == 35){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/46/DarkPrinceCard.png/revision/latest?cb=20160301012029'>")
    }
    else if (card2 == 36){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cf/FreezeCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card2 == 37){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/6f/GiantSkeletonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card2 == 38){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/e/ee/GoblinBarrelCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card2 == 39){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d4/GolemCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card2 == 40){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/51/GuardsCard.png/revision/latest?cb=20160514062101'>")
    }
    else if (card2 == 41){
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/5/5e/LightningCard.png/revision/latest/scale-to-width-down/218?cb=20160124213214'>")
    }
    else if (card2 == 42){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cd/MirrorCard.png/revision/latest?cb=20160317213846'>")
    }
    else if (card2 == 43){
      $("#card2").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/f/fe/PEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160220212507'>")
    }
    else if (card2 == 44){
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/8/89/PoisonCard.png/revision/latest?cb=20160302020202'>")
    }
    else if (card2 == 45){
      $("#card2").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/be/PrinceCard.png/revision/latest/scale-to-width-down/218?cb=20160124213510'>")
    }
    else if (card2 == 46){
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1c/RageCard.png/revision/latest/scale-to-width-down/218?cb=20160124213511'>")
    }
    else if (card2 == 47){
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/d0/SkeletonArmyCard.png/revision/latest/scale-to-width-down/218?cb=20160124213514'>")
    }
    else if (card2 == 48){
      $("#card2").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/7/7f/WitchCard.png/revision/latest/scale-to-width-down/218?cb=20160124213521'>")
    }
    else if (card2 == 49){
      $("#card2").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b5/X-BowCard.png/revision/latest/scale-to-width-down/218?cb=20160124213523'>")
    }
    else if (card2 == 50){
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d3/IceWizardCard.png/revision/latest?cb=20160325170843'>")
    }
    else if (card2 == 51){
      $("#card2").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/d/de/LavaHoundCard.png/revision/latest?cb=20160503102247'>")
    }
    else if (card2 == 52){
      $("#card2").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/21/MinerCard.png/revision/latest?cb=20160507183028'>")
    }
    else if (card2 == 53){
      $("#card2").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/24/PrincessCard.png/revision/latest?cb=20160409191645'>")
    }
    else if (card2 == 54){
      $("#card2").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/3/33/SparkyCard.png/revision/latest?cb=20160503102306'>")
    }
    else if (card2 == 55) {
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/2/2c/IceSpiritCard.png/revision/latest/scale-to-width-down/200?cb=20160702201134'>")
    }
    else if (card2 == 56) {
      $("#card2").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/5/52/LumberjackCard.png/revision/latest?cb=20160702201153'>")
    }
    else if (card2 == 57) {
      $("#card2").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/4/4d/TheLogCard.png/revision/latest?cb=20160702201255'>")
    }
    else if (card2 == 58) {
      $("#card2").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/b/b8/BowlerCard.png/revision/latest/scale-to-width-down/218?cb=20160702201031'>")
    }

    if (card3 == 1)
    {
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/a/af/ArchersCard.png/revision/latest/scale-to-width-down/200?cb=20160124213208'>")
    }
    else if (card3 == 2){
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/6/6e/ArrowsCard.png/revision/latest/scale-to-width-down/200?cb=20160120003751'>")

    }
    else if (card3 == 3){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/2e/BarbariansCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card3 == 4){
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/2/2b/BomberCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card3 == 5){
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/7/70/CannonCard.png/revision/latest/scale-to-width-down/200?cb=20160220212849'>")
    }
    else if (card3 == 6){
      $("#card3").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/e5/FireSpiritsCard.png/revision/latest/scale-to-width-down/200?cb=20160507182454'>")
    }
    else if (card3 == 7){
      $("#card3").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/b/bd/GoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213213'>")
    }
    else if (card3 == 8){
      $("#card3").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/54/KnightCard.png/revision/latest/scale-to-width-down/200?cb=20160319223232'>")
    }
    else if (card3 == 9){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/0/09/MinionHordeCard.png/revision/latest/scale-to-width-down/200?cb=20160124213501'>")
    }
    else if (card3 == 10){
      $("#card3").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b7/MinionsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213503'>")
    }
    else if (card3 == 11){
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1e/MortarCard.png/revision/latest/scale-to-width-down/200?cb=20160212230934'>")
    }
    else if (card3 == 12){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/8/8b/RoyalGiantCard.png/revision/latest?cb=20160302023049'>")
    }
    else if (card3 == 13){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/f/f0/SkeletonsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213515'>")
    }
    else if (card3 == 14){
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/37/SpearGoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213517'>")
    }
    else if (card3 == 15){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/27/TeslaCard.png/revision/latest/scale-to-width-down/200?cb=20160124213518'>")
    }
    else if (card3 == 16){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/52/ZapCard.png/revision/latest/scale-to-width-down/200?cb=20160124213524'>")
    }
    else if (card3 == 17){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/63/BarbarianHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213209'>")
    }
    else if (card3 == 18){
      $("#card3").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/f/f1/BombTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card3 == 19){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/33/ElixirCollectorCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card3 == 20){
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/f4/FireballCard.png/revision/latest?cb=20160318164945'>")
    }
    else if (card3 == 21){
      $("#card3").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/51/FurnaceCard.png/revision/latest?cb=20160518083429'>")
    }
    else if (card3 == 22){
      $("#card3").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b1/GiantCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card3 == 23){
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/da/GoblinHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card3 == 24){
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/30/HogRiderCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card3 == 25){
      $("#card3").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/3/34/InfernoTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card3 == 26){
      $("#card3").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/7/7b/MiniPEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160124213504'>")
    }
    else if (card3 == 27){
      $("#card3").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/ee/MusketeerCard.png/revision/latest?cb=20160514052151'>")
    }
    else if (card3 == 28){
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/fc/RocketCard.png/revision/latest/scale-to-width-down/218?cb=20160124213513'>")
    }
    else if (card3 == 29){
      $("#card3").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/c/c9/ThreeMusketeersCard.png/revision/latest?cb=20160401121106'>")
    }
    else if (card3 == 30){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/7/75/TombstoneCard.png/revision/latest/scale-to-width-down/218?cb=20160124213519'>")
    }
    else if (card3 == 31){
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/e/e2/ValkyrieCard.png/revision/latest/scale-to-width-down/218?cb=20160124213520'>")
    }
    else if (card3 == 32){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/49/WizardCard.png/revision/latest/scale-to-width-down/218?cb=20160124213522'>")
    }
    else if (card3 == 33){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/35/BabyDragonCard.png/revision/latest/scale-to-width-down/218?cb=20160120003759'>")
    }
    else if (card3 == 34){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/5b/BalloonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213208'>")
    }
    else if (card3 == 35){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/46/DarkPrinceCard.png/revision/latest?cb=20160301012029'>")
    }
    else if (card3 == 36){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cf/FreezeCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card3 == 37){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/6f/GiantSkeletonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card3 == 38){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/e/ee/GoblinBarrelCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card3 == 39){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d4/GolemCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card3 == 40){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/51/GuardsCard.png/revision/latest?cb=20160514062101'>")
    }
    else if (card3 == 41){
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/5/5e/LightningCard.png/revision/latest/scale-to-width-down/218?cb=20160124213214'>")
    }
    else if (card3 == 42){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cd/MirrorCard.png/revision/latest?cb=20160317213846'>")
    }
    else if (card3 == 43){
      $("#card3").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/f/fe/PEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160220212507'>")
    }
    else if (card3 == 44){
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/8/89/PoisonCard.png/revision/latest?cb=20160302020202'>")
    }
    else if (card3 == 45){
      $("#card3").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/be/PrinceCard.png/revision/latest/scale-to-width-down/218?cb=20160124213510'>")
    }
    else if (card3 == 46){
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1c/RageCard.png/revision/latest/scale-to-width-down/218?cb=20160124213511'>")
    }
    else if (card3 == 47){
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/d0/SkeletonArmyCard.png/revision/latest/scale-to-width-down/218?cb=20160124213514'>")
    }
    else if (card3 == 48){
      $("#card3").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/7/7f/WitchCard.png/revision/latest/scale-to-width-down/218?cb=20160124213521'>")
    }
    else if (card3 == 49){
      $("#card3").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b5/X-BowCard.png/revision/latest/scale-to-width-down/218?cb=20160124213523'>")
    }
    else if (card3 == 50){
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d3/IceWizardCard.png/revision/latest?cb=20160325170843'>")
    }
    else if (card3 == 51){
      $("#card3").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/d/de/LavaHoundCard.png/revision/latest?cb=20160503102247'>")
    }
    else if (card3 == 52){
      $("#card3").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/21/MinerCard.png/revision/latest?cb=20160507183028'>")
    }
    else if (card3 == 53){
      $("#card3").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/24/PrincessCard.png/revision/latest?cb=20160409191645'>")
    }
    else if (card3 == 54){
      $("#card3").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/3/33/SparkyCard.png/revision/latest?cb=20160503102306'>")
    }
    else if (card3 == 55) {
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/2/2c/IceSpiritCard.png/revision/latest/scale-to-width-down/200?cb=20160702201134'>")
    }
    else if (card3 == 56) {
      $("#card3").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/5/52/LumberjackCard.png/revision/latest?cb=20160702201153'>")
    }
    else if (card3 == 57) {
      $("#card3").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/4/4d/TheLogCard.png/revision/latest?cb=20160702201255'>")
    }
    else if (card3 == 58) {
      $("#card3").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/b/b8/BowlerCard.png/revision/latest/scale-to-width-down/218?cb=20160702201031'>")
    }

    if (card4 == 1)
    {
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/a/af/ArchersCard.png/revision/latest/scale-to-width-down/200?cb=20160124213208'>")
    }
    else if (card4 == 2){
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/6/6e/ArrowsCard.png/revision/latest/scale-to-width-down/200?cb=20160120003751'>")

    }
    else if (card4 == 3){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/2e/BarbariansCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card4 == 4){
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/2/2b/BomberCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card4 == 5){
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/7/70/CannonCard.png/revision/latest/scale-to-width-down/200?cb=20160220212849'>")
    }
    else if (card4 == 6){
      $("#card4").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/e5/FireSpiritsCard.png/revision/latest/scale-to-width-down/200?cb=20160507182454'>")
    }
    else if (card4 == 7){
      $("#card4").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/b/bd/GoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213213'>")
    }
    else if (card4 == 8){
      $("#card4").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/54/KnightCard.png/revision/latest/scale-to-width-down/200?cb=20160319223232'>")
    }
    else if (card4 == 9){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/0/09/MinionHordeCard.png/revision/latest/scale-to-width-down/200?cb=20160124213501'>")
    }
    else if (card4 == 10){
      $("#card4").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b7/MinionsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213503'>")
    }
    else if (card4 == 11){
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1e/MortarCard.png/revision/latest/scale-to-width-down/200?cb=20160212230934'>")
    }
    else if (card4 == 12){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/8/8b/RoyalGiantCard.png/revision/latest?cb=20160302023049'>")
    }
    else if (card4 == 13){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/f/f0/SkeletonsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213515'>")
    }
    else if (card4 == 14){
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/37/SpearGoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213517'>")
    }
    else if (card4 == 15){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/27/TeslaCard.png/revision/latest/scale-to-width-down/200?cb=20160124213518'>")
    }
    else if (card4 == 16){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/52/ZapCard.png/revision/latest/scale-to-width-down/200?cb=20160124213524'>")
    }
    else if (card4 == 17){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/63/BarbarianHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213209'>")
    }
    else if (card4 == 18){
      $("#card4").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/f/f1/BombTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card4 == 19){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/33/ElixirCollectorCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card4 == 20){
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/f4/FireballCard.png/revision/latest?cb=20160318164945'>")
    }
    else if (card4 == 21){
      $("#card4").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/51/FurnaceCard.png/revision/latest?cb=20160518083429'>")
    }
    else if (card4 == 22){
      $("#card4").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b1/GiantCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card4 == 23){
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/da/GoblinHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card4 == 24){
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/30/HogRiderCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card4 == 25){
      $("#card4").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/3/34/InfernoTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card4 == 26){
      $("#card4").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/7/7b/MiniPEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160124213504'>")
    }
    else if (card4 == 27){
      $("#card4").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/ee/MusketeerCard.png/revision/latest?cb=20160514052151'>")
    }
    else if (card4 == 28){
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/fc/RocketCard.png/revision/latest/scale-to-width-down/218?cb=20160124213513'>")
    }
    else if (card4 == 29){
      $("#card4").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/c/c9/ThreeMusketeersCard.png/revision/latest?cb=20160401121106'>")
    }
    else if (card4 == 30){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/7/75/TombstoneCard.png/revision/latest/scale-to-width-down/218?cb=20160124213519'>")
    }
    else if (card4 == 31){
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/e/e2/ValkyrieCard.png/revision/latest/scale-to-width-down/218?cb=20160124213520'>")
    }
    else if (card4 == 32){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/49/WizardCard.png/revision/latest/scale-to-width-down/218?cb=20160124213522'>")
    }
    else if (card4 == 33){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/35/BabyDragonCard.png/revision/latest/scale-to-width-down/218?cb=20160120003759'>")
    }
    else if (card4 == 34){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/5b/BalloonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213208'>")
    }
    else if (card4 == 35){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/46/DarkPrinceCard.png/revision/latest?cb=20160301012029'>")
    }
    else if (card4 == 36){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cf/FreezeCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card4 == 37){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/6f/GiantSkeletonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card4 == 38){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/e/ee/GoblinBarrelCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card4 == 39){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d4/GolemCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card4 == 40){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/51/GuardsCard.png/revision/latest?cb=20160514062101'>")
    }
    else if (card4 == 41){
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/5/5e/LightningCard.png/revision/latest/scale-to-width-down/218?cb=20160124213214'>")
    }
    else if (card4 == 42){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cd/MirrorCard.png/revision/latest?cb=20160317213846'>")
    }
    else if (card4 == 43){
      $("#card4").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/f/fe/PEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160220212507'>")
    }
    else if (card4 == 44){
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/8/89/PoisonCard.png/revision/latest?cb=20160302020202'>")
    }
    else if (card4 == 45){
      $("#card4").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/be/PrinceCard.png/revision/latest/scale-to-width-down/218?cb=20160124213510'>")
    }
    else if (card4 == 46){
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1c/RageCard.png/revision/latest/scale-to-width-down/218?cb=20160124213511'>")
    }
    else if (card4 == 47){
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/d0/SkeletonArmyCard.png/revision/latest/scale-to-width-down/218?cb=20160124213514'>")
    }
    else if (card4 == 48){
      $("#card4").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/7/7f/WitchCard.png/revision/latest/scale-to-width-down/218?cb=20160124213521'>")
    }
    else if (card4 == 49){
      $("#card4").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b5/X-BowCard.png/revision/latest/scale-to-width-down/218?cb=20160124213523'>")
    }
    else if (card4 == 50){
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d3/IceWizardCard.png/revision/latest?cb=20160325170843'>")
    }
    else if (card4 == 51){
      $("#card4").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/d/de/LavaHoundCard.png/revision/latest?cb=20160503102247'>")
    }
    else if (card4 == 52){
      $("#card4").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/21/MinerCard.png/revision/latest?cb=20160507183028'>")
    }
    else if (card4 == 53){
      $("#card4").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/24/PrincessCard.png/revision/latest?cb=20160409191645'>")
    }
    else if (card4 == 54){
      $("#card4").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/3/33/SparkyCard.png/revision/latest?cb=20160503102306'>")
    }
    else if (card4 == 55) {
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/2/2c/IceSpiritCard.png/revision/latest/scale-to-width-down/200?cb=20160702201134'>")
    }
    else if (card4 == 56) {
      $("#card4").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/5/52/LumberjackCard.png/revision/latest?cb=20160702201153'>")
    }
    else if (card4 == 57) {
      $("#card4").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/4/4d/TheLogCard.png/revision/latest?cb=20160702201255'>")
    }
    else if (card4 == 58) {
      $("#card4").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/b/b8/BowlerCard.png/revision/latest/scale-to-width-down/218?cb=20160702201031'>")
    }


    if (card5 == 1)
    {
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/a/af/ArchersCard.png/revision/latest/scale-to-width-down/200?cb=20160124213208'>")
    }
    else if (card5 == 2){
      $("#card5").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/6/6e/ArrowsCard.png/revision/latest/scale-to-width-down/200?cb=20160120003751'>")

    }
    else if (card5 == 3){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/2e/BarbariansCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card5 == 4){
      $("#card5").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/2/2b/BomberCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card5 == 5){
      $("#card5").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/7/70/CannonCard.png/revision/latest/scale-to-width-down/200?cb=20160220212849'>")
    }
    else if (card5 == 6){
      $("#card5").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/e5/FireSpiritsCard.png/revision/latest/scale-to-width-down/200?cb=20160507182454'>")
    }
    else if (card5 == 7){
      $("#card5").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/b/bd/GoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213213'>")
    }
    else if (card5 == 8){
      $("#card5").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/54/KnightCard.png/revision/latest/scale-to-width-down/200?cb=20160319223232'>")
    }
    else if (card5 == 9){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/0/09/MinionHordeCard.png/revision/latest/scale-to-width-down/200?cb=20160124213501'>")
    }
    else if (card5 == 10){
      $("#card5").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b7/MinionsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213503'>")
    }
    else if (card5 == 11){
      $("#card5").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1e/MortarCard.png/revision/latest/scale-to-width-down/200?cb=20160212230934'>")
    }
    else if (card5 == 12){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/8/8b/RoyalGiantCard.png/revision/latest?cb=20160302023049'>")
    }
    else if (card5 == 13){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/f/f0/SkeletonsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213515'>")
    }
    else if (card5 == 14){
      $("#card5").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/37/SpearGoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213517'>")
    }
    else if (card5 == 15){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/27/TeslaCard.png/revision/latest/scale-to-width-down/200?cb=20160124213518'>")
    }
    else if (card5 == 16){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/52/ZapCard.png/revision/latest/scale-to-width-down/200?cb=20160124213524'>")
    }
    else if (card5 == 17){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/63/BarbarianHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213209'>")
    }
    else if (card5 == 18){
      $("#card5").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/f/f1/BombTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card5 == 19){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/33/ElixirCollectorCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card5 == 20){
      $("#card5").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/f4/FireballCard.png/revision/latest?cb=20160318164945'>")
    }
    else if (card5 == 21){
      $("#card5").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/51/FurnaceCard.png/revision/latest?cb=20160518083429'>")
    }
    else if (card5 == 22){
      $("#card5").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b1/GiantCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card5 == 23){
      $("#card5").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/da/GoblinHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card5 == 24){
      $("#card5").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/30/HogRiderCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card5 == 25){
      $("#card5").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/3/34/InfernoTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card5 == 26){
      $("#card5").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/7/7b/MiniPEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160124213504'>")
    }
    else if (card5 == 27){
      $("#card5").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/ee/MusketeerCard.png/revision/latest?cb=20160514052151'>")
    }
    else if (card5 == 28){
      $("#card5").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/fc/RocketCard.png/revision/latest/scale-to-width-down/218?cb=20160124213513'>")
    }
    else if (card5 == 29){
      $("#card5").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/c/c9/ThreeMusketeersCard.png/revision/latest?cb=20160401121106'>")
    }
    else if (card5 == 30){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/7/75/TombstoneCard.png/revision/latest/scale-to-width-down/218?cb=20160124213519'>")
    }
    else if (card5 == 31){
      $("#card5").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/e/e2/ValkyrieCard.png/revision/latest/scale-to-width-down/218?cb=20160124213520'>")
    }
    else if (card5 == 32){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/49/WizardCard.png/revision/latest/scale-to-width-down/218?cb=20160124213522'>")
    }
    else if (card5 == 33){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/35/BabyDragonCard.png/revision/latest/scale-to-width-down/218?cb=20160120003759'>")
    }
    else if (card5 == 34){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/5b/BalloonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213208'>")
    }
    else if (card5 == 35){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/46/DarkPrinceCard.png/revision/latest?cb=20160301012029'>")
    }
    else if (card5 == 36){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cf/FreezeCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card5 == 37){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/6f/GiantSkeletonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card5 == 38){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/e/ee/GoblinBarrelCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card5 == 39){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d4/GolemCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card5 == 40){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/51/GuardsCard.png/revision/latest?cb=20160514062101'>")
    }
    else if (card5 == 41){
      $("#card5").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/5/5e/LightningCard.png/revision/latest/scale-to-width-down/218?cb=20160124213214'>")
    }
    else if (card5 == 42){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cd/MirrorCard.png/revision/latest?cb=20160317213846'>")
    }
    else if (card5 == 43){
      $("#card5").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/f/fe/PEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160220212507'>")
    }
    else if (card5 == 44){
      $("#card5").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/8/89/PoisonCard.png/revision/latest?cb=20160302020202'>")
    }
    else if (card5 == 45){
      $("#card5").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/be/PrinceCard.png/revision/latest/scale-to-width-down/218?cb=20160124213510'>")
    }
    else if (card5 == 46){
      $("#card5").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1c/RageCard.png/revision/latest/scale-to-width-down/218?cb=20160124213511'>")
    }
    else if (card5 == 47){
      $("#card5").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/d0/SkeletonArmyCard.png/revision/latest/scale-to-width-down/218?cb=20160124213514'>")
    }
    else if (card5 == 48){
      $("#card5").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/7/7f/WitchCard.png/revision/latest/scale-to-width-down/218?cb=20160124213521'>")
    }
    else if (card5 == 49){
      $("#card5").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b5/X-BowCard.png/revision/latest/scale-to-width-down/218?cb=20160124213523'>")
    }
    else if (card5 == 50){
      $("#card5").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d3/IceWizardCard.png/revision/latest?cb=20160325170843'>")
    }
    else if (card5 == 51){
      $("#card5").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/d/de/LavaHoundCard.png/revision/latest?cb=20160503102247'>")
    }
    else if (card5 == 52){
      $("#card5").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/21/MinerCard.png/revision/latest?cb=20160507183028'>")
    }
    else if (card5 == 53){
      $("#card5").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/24/PrincessCard.png/revision/latest?cb=20160409191645'>")
    }
    else if (card5 == 54){
      $("#card5").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/3/33/SparkyCard.png/revision/latest?cb=20160503102306'>")
    }

    if (card6 == 1)
    {
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/a/af/ArchersCard.png/revision/latest/scale-to-width-down/200?cb=20160124213208'>")
    }
    else if (card6 == 2){
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/6/6e/ArrowsCard.png/revision/latest/scale-to-width-down/200?cb=20160120003751'>")

    }
    else if (card6 == 3){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/2e/BarbariansCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card6 == 4){
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/2/2b/BomberCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card6 == 5){
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/7/70/CannonCard.png/revision/latest/scale-to-width-down/200?cb=20160220212849'>")
    }
    else if (card6 == 6){
      $("#card6").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/e5/FireSpiritsCard.png/revision/latest/scale-to-width-down/200?cb=20160507182454'>")
    }
    else if (card6 == 7){
      $("#card6").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/b/bd/GoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213213'>")
    }
    else if (card6 == 8){
      $("#card6").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/54/KnightCard.png/revision/latest/scale-to-width-down/200?cb=20160319223232'>")
    }
    else if (card6 == 9){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/0/09/MinionHordeCard.png/revision/latest/scale-to-width-down/200?cb=20160124213501'>")
    }
    else if (card6 == 10){
      $("#card6").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b7/MinionsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213503'>")
    }
    else if (card6 == 11){
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1e/MortarCard.png/revision/latest/scale-to-width-down/200?cb=20160212230934'>")
    }
    else if (card6 == 12){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/8/8b/RoyalGiantCard.png/revision/latest?cb=20160302023049'>")
    }
    else if (card6 == 13){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/f/f0/SkeletonsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213515'>")
    }
    else if (card6 == 14){
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/37/SpearGoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213517'>")
    }
    else if (card6 == 15){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/27/TeslaCard.png/revision/latest/scale-to-width-down/200?cb=20160124213518'>")
    }
    else if (card6 == 16){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/52/ZapCard.png/revision/latest/scale-to-width-down/200?cb=20160124213524'>")
    }
    else if (card6 == 17){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/63/BarbarianHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213209'>")
    }
    else if (card6 == 18){
      $("#card6").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/f/f1/BombTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card6 == 19){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/33/ElixirCollectorCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card6 == 20){
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/f4/FireballCard.png/revision/latest?cb=20160318164945'>")
    }
    else if (card6 == 21){
      $("#card6").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/51/FurnaceCard.png/revision/latest?cb=20160518083429'>")
    }
    else if (card6 == 22){
      $("#card6").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b1/GiantCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card6 == 23){
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/da/GoblinHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card6 == 24){
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/30/HogRiderCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card6 == 25){
      $("#card6").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/3/34/InfernoTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card6 == 26){
      $("#card6").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/7/7b/MiniPEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160124213504'>")
    }
    else if (card6 == 27){
      $("#card6").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/ee/MusketeerCard.png/revision/latest?cb=20160514052151'>")
    }
    else if (card6 == 28){
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/fc/RocketCard.png/revision/latest/scale-to-width-down/218?cb=20160124213513'>")
    }
    else if (card6 == 29){
      $("#card6").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/c/c9/ThreeMusketeersCard.png/revision/latest?cb=20160401121106'>")
    }
    else if (card6 == 30){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/7/75/TombstoneCard.png/revision/latest/scale-to-width-down/218?cb=20160124213519'>")
    }
    else if (card6 == 31){
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/e/e2/ValkyrieCard.png/revision/latest/scale-to-width-down/218?cb=20160124213520'>")
    }
    else if (card6 == 32){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/49/WizardCard.png/revision/latest/scale-to-width-down/218?cb=20160124213522'>")
    }
    else if (card6 == 33){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/35/BabyDragonCard.png/revision/latest/scale-to-width-down/218?cb=20160120003759'>")
    }
    else if (card6 == 34){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/5b/BalloonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213208'>")
    }
    else if (card6 == 35){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/46/DarkPrinceCard.png/revision/latest?cb=20160301012029'>")
    }
    else if (card6 == 36){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cf/FreezeCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card6 == 37){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/6f/GiantSkeletonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card6 == 38){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/e/ee/GoblinBarrelCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card6 == 39){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d4/GolemCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card6 == 40){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/51/GuardsCard.png/revision/latest?cb=20160514062101'>")
    }
    else if (card6 == 41){
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/5/5e/LightningCard.png/revision/latest/scale-to-width-down/218?cb=20160124213214'>")
    }
    else if (card6 == 42){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cd/MirrorCard.png/revision/latest?cb=20160317213846'>")
    }
    else if (card6 == 43){
      $("#card6").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/f/fe/PEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160220212507'>")
    }
    else if (card6 == 44){
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/8/89/PoisonCard.png/revision/latest?cb=20160302020202'>")
    }
    else if (card6 == 45){
      $("#card6").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/be/PrinceCard.png/revision/latest/scale-to-width-down/218?cb=20160124213510'>")
    }
    else if (card6 == 46){
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1c/RageCard.png/revision/latest/scale-to-width-down/218?cb=20160124213511'>")
    }
    else if (card6 == 47){
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/d0/SkeletonArmyCard.png/revision/latest/scale-to-width-down/218?cb=20160124213514'>")
    }
    else if (card6 == 48){
      $("#card6").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/7/7f/WitchCard.png/revision/latest/scale-to-width-down/218?cb=20160124213521'>")
    }
    else if (card6 == 49){
      $("#card6").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b5/X-BowCard.png/revision/latest/scale-to-width-down/218?cb=20160124213523'>")
    }
    else if (card6 == 50){
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d3/IceWizardCard.png/revision/latest?cb=20160325170843'>")
    }
    else if (card6 == 51){
      $("#card6").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/d/de/LavaHoundCard.png/revision/latest?cb=20160503102247'>")
    }
    else if (card6 == 52){
      $("#card6").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/21/MinerCard.png/revision/latest?cb=20160507183028'>")
    }
    else if (card6 == 53){
      $("#card6").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/24/PrincessCard.png/revision/latest?cb=20160409191645'>")
    }
    else if (card6 == 54){
      $("#card6").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/3/33/SparkyCard.png/revision/latest?cb=20160503102306'>")
    }
    else if (card6 == 55) {
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/2/2c/IceSpiritCard.png/revision/latest/scale-to-width-down/200?cb=20160702201134'>")
    }
    else if (card6 == 56) {
      $("#card6").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/5/52/LumberjackCard.png/revision/latest?cb=20160702201153'>")
    }
    else if (card6 == 57) {
      $("#card6").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/4/4d/TheLogCard.png/revision/latest?cb=20160702201255'>")
    }
    else if (card6 == 58) {
      $("#card6").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/b/b8/BowlerCard.png/revision/latest/scale-to-width-down/218?cb=20160702201031'>")
    }

    if (card7 == 1)
    {
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/a/af/ArchersCard.png/revision/latest/scale-to-width-down/200?cb=20160124213208'>")
    }
    else if (card7 == 2){
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/6/6e/ArrowsCard.png/revision/latest/scale-to-width-down/200?cb=20160120003751'>")

    }
    else if (card7 == 3){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/2e/BarbariansCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card7 == 4){
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/2/2b/BomberCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card7 == 5){
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/7/70/CannonCard.png/revision/latest/scale-to-width-down/200?cb=20160220212849'>")
    }
    else if (card7 == 6){
      $("#card7").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/e5/FireSpiritsCard.png/revision/latest/scale-to-width-down/200?cb=20160507182454'>")
    }
    else if (card7 == 7){
      $("#card7").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/b/bd/GoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213213'>")
    }
    else if (card7 == 8){
      $("#card7").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/54/KnightCard.png/revision/latest/scale-to-width-down/200?cb=20160319223232'>")
    }
    else if (card7 == 9){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/0/09/MinionHordeCard.png/revision/latest/scale-to-width-down/200?cb=20160124213501'>")
    }
    else if (card7 == 10){
      $("#card7").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b7/MinionsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213503'>")
    }
    else if (card7 == 11){
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1e/MortarCard.png/revision/latest/scale-to-width-down/200?cb=20160212230934'>")
    }
    else if (card7 == 12){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/8/8b/RoyalGiantCard.png/revision/latest?cb=20160302023049'>")
    }
    else if (card7 == 13){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/f/f0/SkeletonsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213515'>")
    }
    else if (card7 == 14){
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/37/SpearGoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213517'>")
    }
    else if (card7 == 15){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/27/TeslaCard.png/revision/latest/scale-to-width-down/200?cb=20160124213518'>")
    }
    else if (card7 == 16){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/52/ZapCard.png/revision/latest/scale-to-width-down/200?cb=20160124213524'>")
    }
    else if (card7 == 17){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/63/BarbarianHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213209'>")
    }
    else if (card7 == 18){
      $("#card7").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/f/f1/BombTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card7 == 19){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/33/ElixirCollectorCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card7 == 20){
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/f4/FireballCard.png/revision/latest?cb=20160318164945'>")
    }
    else if (card7 == 21){
      $("#card7").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/51/FurnaceCard.png/revision/latest?cb=20160518083429'>")
    }
    else if (card7 == 22){
      $("#card7").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b1/GiantCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card7 == 23){
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/da/GoblinHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card7 == 24){
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/30/HogRiderCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card7 == 25){
      $("#card7").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/3/34/InfernoTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card7 == 26){
      $("#card7").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/7/7b/MiniPEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160124213504'>")
    }
    else if (card7 == 27){
      $("#card7").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/ee/MusketeerCard.png/revision/latest?cb=20160514052151'>")
    }
    else if (card7 == 28){
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/fc/RocketCard.png/revision/latest/scale-to-width-down/218?cb=20160124213513'>")
    }
    else if (card7 == 29){
      $("#card7").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/c/c9/ThreeMusketeersCard.png/revision/latest?cb=20160401121106'>")
    }
    else if (card7 == 30){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/7/75/TombstoneCard.png/revision/latest/scale-to-width-down/218?cb=20160124213519'>")
    }
    else if (card7 == 31){
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/e/e2/ValkyrieCard.png/revision/latest/scale-to-width-down/218?cb=20160124213520'>")
    }
    else if (card7 == 32){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/49/WizardCard.png/revision/latest/scale-to-width-down/218?cb=20160124213522'>")
    }
    else if (card7 == 33){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/35/BabyDragonCard.png/revision/latest/scale-to-width-down/218?cb=20160120003759'>")
    }
    else if (card7 == 34){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/5b/BalloonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213208'>")
    }
    else if (card7 == 35){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/46/DarkPrinceCard.png/revision/latest?cb=20160301012029'>")
    }
    else if (card7 == 36){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cf/FreezeCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card7 == 37){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/6f/GiantSkeletonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card7 == 38){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/e/ee/GoblinBarrelCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card7 == 39){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d4/GolemCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card7 == 40){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/51/GuardsCard.png/revision/latest?cb=20160514062101'>")
    }
    else if (card7 == 41){
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/5/5e/LightningCard.png/revision/latest/scale-to-width-down/218?cb=20160124213214'>")
    }
    else if (card7 == 42){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cd/MirrorCard.png/revision/latest?cb=20160317213846'>")
    }
    else if (card7 == 43){
      $("#card7").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/f/fe/PEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160220212507'>")
    }
    else if (card7 == 44){
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/8/89/PoisonCard.png/revision/latest?cb=20160302020202'>")
    }
    else if (card7 == 45){
      $("#card7").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/be/PrinceCard.png/revision/latest/scale-to-width-down/218?cb=20160124213510'>")
    }
    else if (card7 == 46){
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1c/RageCard.png/revision/latest/scale-to-width-down/218?cb=20160124213511'>")
    }
    else if (card7 == 47){
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/d0/SkeletonArmyCard.png/revision/latest/scale-to-width-down/218?cb=20160124213514'>")
    }
    else if (card7 == 48){
      $("#card7").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/7/7f/WitchCard.png/revision/latest/scale-to-width-down/218?cb=20160124213521'>")
    }
    else if (card7 == 49){
      $("#card7").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b5/X-BowCard.png/revision/latest/scale-to-width-down/218?cb=20160124213523'>")
    }
    else if (card7 == 50){
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d3/IceWizardCard.png/revision/latest?cb=20160325170843'>")
    }
    else if (card7 == 51){
      $("#card7").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/d/de/LavaHoundCard.png/revision/latest?cb=20160503102247'>")
    }
    else if (card7 == 52){
      $("#card7").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/21/MinerCard.png/revision/latest?cb=20160507183028'>")
    }
    else if (card7 == 53){
      $("#card7").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/24/PrincessCard.png/revision/latest?cb=20160409191645'>")
    }
    else if (card7 == 54){
      $("#card7").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/3/33/SparkyCard.png/revision/latest?cb=20160503102306'>")
    }
    else if (card7 == 55) {
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/2/2c/IceSpiritCard.png/revision/latest/scale-to-width-down/200?cb=20160702201134'>")
    }
    else if (card7 == 56) {
      $("#card7").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/5/52/LumberjackCard.png/revision/latest?cb=20160702201153'>")
    }
    else if (card7 == 57) {
      $("#card7").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/4/4d/TheLogCard.png/revision/latest?cb=20160702201255'>")
    }
    else if (card7 == 58) {
      $("#card7").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/b/b8/BowlerCard.png/revision/latest/scale-to-width-down/218?cb=20160702201031'>")
    }

    if (card8 == 1)
    {
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/a/af/ArchersCard.png/revision/latest/scale-to-width-down/200?cb=20160124213208'>")
    }
    else if (card8 == 2){
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/6/6e/ArrowsCard.png/revision/latest/scale-to-width-down/200?cb=20160120003751'>")

    }
    else if (card8 == 3){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/2e/BarbariansCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card8 == 4){
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/2/2b/BomberCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209'>")
    }
    else if (card8 == 5){
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/7/70/CannonCard.png/revision/latest/scale-to-width-down/200?cb=20160220212849'>")
    }
    else if (card8 == 6){
      $("#card8").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/e5/FireSpiritsCard.png/revision/latest/scale-to-width-down/200?cb=20160507182454'>")
    }
    else if (card8 == 7){
      $("#card8").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/b/bd/GoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213213'>")
    }
    else if (card8 == 8){
      $("#card8").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/54/KnightCard.png/revision/latest/scale-to-width-down/200?cb=20160319223232'>")
    }
    else if (card8 == 9){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/0/09/MinionHordeCard.png/revision/latest/scale-to-width-down/200?cb=20160124213501'>")
    }
    else if (card8 == 10){
      $("#card8").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b7/MinionsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213503'>")
    }
    else if (card8 == 11){
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1e/MortarCard.png/revision/latest/scale-to-width-down/200?cb=20160212230934'>")
    }
    else if (card8 == 12){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/8/8b/RoyalGiantCard.png/revision/latest?cb=20160302023049'>")
    }
    else if (card8 == 13){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/f/f0/SkeletonsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213515'>")
    }
    else if (card8 == 14){
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/37/SpearGoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213517'>")
    }
    else if (card8 == 15){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/2/27/TeslaCard.png/revision/latest/scale-to-width-down/200?cb=20160124213518'>")
    }
    else if (card8 == 16){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/52/ZapCard.png/revision/latest/scale-to-width-down/200?cb=20160124213524'>")
    }
    else if (card8 == 17){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/63/BarbarianHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213209'>")
    }
    else if (card8 == 18){
      $("#card8").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/f/f1/BombTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card8 == 19){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/33/ElixirCollectorCard.png/revision/latest/scale-to-width-down/218?cb=20160124213210'>")
    }
    else if (card8 == 20){
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/f4/FireballCard.png/revision/latest?cb=20160318164945'>")
    }
    else if (card8 == 21){
      $("#card8").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/5/51/FurnaceCard.png/revision/latest?cb=20160518083429'>")
    }
    else if (card8 == 22){
      $("#card8").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b1/GiantCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card8 == 23){
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/da/GoblinHutCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card8 == 24){
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/3/30/HogRiderCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card8 == 25){
      $("#card8").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/3/34/InfernoTowerCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card8 == 26){
      $("#card8").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/7/7b/MiniPEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160124213504'>")
    }
    else if (card8 == 27){
      $("#card8").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/e/ee/MusketeerCard.png/revision/latest?cb=20160514052151'>")
    }
    else if (card8 == 28){
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/f/fc/RocketCard.png/revision/latest/scale-to-width-down/218?cb=20160124213513'>")
    }
    else if (card8 == 29){
      $("#card8").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/c/c9/ThreeMusketeersCard.png/revision/latest?cb=20160401121106'>")
    }
    else if (card8 == 30){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/7/75/TombstoneCard.png/revision/latest/scale-to-width-down/218?cb=20160124213519'>")
    }
    else if (card8 == 31){
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/e/e2/ValkyrieCard.png/revision/latest/scale-to-width-down/218?cb=20160124213520'>")
    }
    else if (card8 == 32){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/49/WizardCard.png/revision/latest/scale-to-width-down/218?cb=20160124213522'>")
    }
    else if (card8 == 33){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/3/35/BabyDragonCard.png/revision/latest/scale-to-width-down/218?cb=20160120003759'>")
    }
    else if (card8 == 34){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/5b/BalloonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213208'>")
    }
    else if (card8 == 35){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/4/46/DarkPrinceCard.png/revision/latest?cb=20160301012029'>")
    }
    else if (card8 == 36){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cf/FreezeCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211'>")
    }
    else if (card8 == 37){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/6/6f/GiantSkeletonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card8 == 38){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/e/ee/GoblinBarrelCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212'>")
    }
    else if (card8 == 39){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d4/GolemCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213'>")
    }
    else if (card8 == 40){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/5/51/GuardsCard.png/revision/latest?cb=20160514062101'>")
    }
    else if (card8 == 41){
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/5/5e/LightningCard.png/revision/latest/scale-to-width-down/218?cb=20160124213214'>")
    }
    else if (card8 == 42){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/c/cd/MirrorCard.png/revision/latest?cb=20160317213846'>")
    }
    else if (card8 == 43){
      $("#card8").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/f/fe/PEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160220212507'>")
    }
    else if (card8 == 44){
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/8/89/PoisonCard.png/revision/latest?cb=20160302020202'>")
    }
    else if (card8 == 45){
      $("#card8").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/be/PrinceCard.png/revision/latest/scale-to-width-down/218?cb=20160124213510'>")
    }
    else if (card8 == 46){
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/1/1c/RageCard.png/revision/latest/scale-to-width-down/218?cb=20160124213511'>")
    }
    else if (card8 == 47){
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/d/d0/SkeletonArmyCard.png/revision/latest/scale-to-width-down/218?cb=20160124213514'>")
    }
    else if (card8 == 48){
      $("#card8").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/7/7f/WitchCard.png/revision/latest/scale-to-width-down/218?cb=20160124213521'>")
    }
    else if (card8 == 49){
      $("#card8").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/b/b5/X-BowCard.png/revision/latest/scale-to-width-down/218?cb=20160124213523'>")
    }
    else if (card8 == 50){
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/d/d3/IceWizardCard.png/revision/latest?cb=20160325170843'>")
    }
    else if (card8 == 51){
      $("#card8").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/d/de/LavaHoundCard.png/revision/latest?cb=20160503102247'>")
    }
    else if (card8 == 52){
      $("#card8").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/21/MinerCard.png/revision/latest?cb=20160507183028'>")
    }
    else if (card8 == 53){
      $("#card8").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/2/24/PrincessCard.png/revision/latest?cb=20160409191645'>")
    }
    else if (card8 == 54){
      $("#card8").html("<img height='200' src='http://vignette4.wikia.nocookie.net/clashroyale/images/3/33/SparkyCard.png/revision/latest?cb=20160503102306'>")
    }
    else if (card8 == 55) {
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/2/2c/IceSpiritCard.png/revision/latest/scale-to-width-down/200?cb=20160702201134'>")
    }
    else if (card8 == 56) {
      $("#card8").html("<img height='200' src='http://vignette2.wikia.nocookie.net/clashroyale/images/5/52/LumberjackCard.png/revision/latest?cb=20160702201153'>")
    }
    else if (card8 == 57) {
      $("#card8").html("<img height='200' src='http://vignette1.wikia.nocookie.net/clashroyale/images/4/4d/TheLogCard.png/revision/latest?cb=20160702201255'>")
    }
    else if (card8 == 58) {
      $("#card8").html("<img height='200' src='http://vignette3.wikia.nocookie.net/clashroyale/images/b/b8/BowlerCard.png/revision/latest/scale-to-width-down/218?cb=20160702201031'>")
    }

  });

  /*var populateCard(function(card){

  });*/


});
